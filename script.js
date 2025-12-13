// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  setDoc,
  doc,
  collection,
  serverTimestamp,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

/* ---------------- FIREBASE INIT ---------------- */

const firebaseConfig = {
  apiKey: "AIzaSyAd7ZD-YonKHor0twOWSyPAE6ix9LXLeGI",
  authDomain: "pos2-27d04.firebaseapp.com",
  projectId: "pos2-27d04",
  storageBucket: "pos2-27d04.firebasestorage.app",
  messagingSenderId: "394720721108",
  appId: "1:394720721108:web:b0d8decc48bc01abfba341",
  measurementId: "G-KLWC55M3BW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

window.Firebase = { app, analytics, auth, db };

/* ---------------- AUTH REDIRECT (FIXED) ---------------- */
/* Redirect ONLY on login.html */
onAuthStateChanged(auth, user => {
  const path = window.location.pathname;

  if (path.includes("login.html")) {
    if (user) {
      window.location.href = "index.html";
    } else {
      const loginForm = document.getElementById("loginForm");
      if (loginForm) loginForm.style.display = "block";
    }
  }
});

/* ---------------- FIRESTORE HELPERS ---------------- */

export async function saveOrder(order) {
  const ref = await addDoc(collection(db, "orders"), {
    ...order,
    cashierUid: auth.currentUser.uid,
    createdAt: serverTimestamp()
  });

  await addDoc(collection(db, "logs"), {
    whoUid: auth.currentUser.uid,
    action: "ORDER_CREATED",
    details: { orderId: ref.id },
    createdAt: serverTimestamp()
  });

  return ref.id;
}

export async function registerCrew(email, password, name) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;

  await setDoc(doc(db, "users", uid), {
    role: "crew",
    name,
    active: true,
    createdAt: serverTimestamp()
  });

  return uid;
}

export async function getOrdersByDate(startDate, endDate) {
  const q = query(
    collection(db, "orders"),
    where("createdAt", ">=", startDate),
    where("createdAt", "<=", endDate)
  );

  const snap = await getDocs(q);
  const results = [];
  snap.forEach(doc => results.push({ id: doc.id, ...doc.data() }));
  return results;
}

/* ---------------- DOM LOGIC ---------------- */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- LOGIN ---------- */
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "index.html";
      } catch (error) {
        if (errorMessage) {
          errorMessage.textContent = error.message;
        } else {
          alert(error.message);
        }
      }
    });
  }

  /* ---------- MANAGER BUTTON + PIN ---------- */
  const managerBtn = document.getElementById("managerBtn");
  const MANAGER_PIN = "1234";

  if (managerBtn) {
    managerBtn.addEventListener("click", () => {
      const pin = prompt("Enter Manager PIN:");

      if (pin === null) return; // Cancelled

      if (pin !== MANAGER_PIN) {
        alert("❌ Incorrect Manager PIN");
        return;
      }

      // PIN correct → open manager page
      window.location.href = "manager.html";
    });
  }
});
