<div align="center">
<img width="2500" height="1374" alt="LitLatte" src="https://github.com/user-attachments/assets/78b3c634-7d69-4d0c-8337-34eff6d81324" />

# LitLatté POS System Suite for BookLatté Iloilo
A **smart, seamless, and AI-powered Point-of-Sale & Café Suite System designed specifically for BookLatté Iloilo.**

</div>

LitLatté Suite is a **centralized POS and café management system** built to modernize ordering, inventory tracking, sales analytics, and customer engagement for BookLatté Iloilo.  
It integrates **demand forecasting, real-time stock monitoring, and operational insights** to help baristas, cashiers, and managers accelerate workflow and improve customer service.

The system ensures **accuracy, speed, and reliability** across all café processes—from ordering to payment handling, inventory deduction, staff activity logs, and menu performance tracking.  
With automated syncing and real-time analytics, BookLatté can reduce waste, anticipate peak hours, identify best-selling items, and optimize overall café operations.

Ultimately, LitLatté aims to **streamline tasks, reduce manual workload, elevate customer experience, and provide actionable business insights.**

---

## Table of Contents
- [Project Overview](#litlatté-pos-suite-for-booklatté-iloilo)
- [Developers](#developed-by)
- [Installation Guide](#installation-guide)
- [System Features](#system-features)
- [User Manual](#user-manual--instructions)
- [System Architecture](#system-architecture)
- [Data Flow](#data-flow)
- [Tech Stack](#tech-stack)
- [GitHub Statistics](#github-statistics)
- [License](#license)

---

<div align="center">

## Developed by

| Name | Role | Email |
|------|------|-------|
| **Meryll Klaryze Polaron** | UI/UX Designer / Frontend Developer / Project Lead | [meryllklaryze.polaron@wvsu.edu.ph](mailto:meryllklaryze.polaron@wvsu.edu.ph) |
| **Jester Galfo** | Backend Developer / Database Architect | [jester.galfo@wvsu.edu.ph](mailto:jester.galfo@wvsu.edu.ph) |
| **Zalve Mae Magsael** | Backend Developer / Database Architect | [zalvemae.magsael@wvsu.edu.ph](mailto:zalvemae.magsael@wvsu.edu.ph) |

<img width="1920" height="1080" alt="developers" src="https://github.com/user-attachments/assets/e71332f1-360c-4bec-b4d6-42c858023409" />

</div>

---

## Installation Guide 

1. Clone the repository:
bash
   git clone https://github.com/k00617500/LitLatté-POS-Suite.git
   cd LitLatté-POS-Suite


<img width="1920" height="1080" alt="features" src="https://github.com/user-attachments/assets/1ea2bd5d-2561-4f5f-a40d-37a817eb91b8" />



---


## System Features
- **Centralized Order Management:** Unified interface for order taking, billing, and transaction processing.
- **Smart Inventory Management:** Tracks ingredient usage in real-time and issues low-stock alerts automatically.
- **AI-Powered Demand Forecasting:** Predicts peak hours and best-selling items to optimize staffing and stock levels.
- **Salces and Performace Monitoring** Ensures transparent, tamper-proof records for audits and accountability.
- **Product Menu & Pricing Management:** Easily update items, categories, and prices across the POS system.


---
<img width="1920" height="1080" alt="system name" src="https://github.com/user-attachments/assets/0b3e8536-6f4d-4ee1-8ea8-884215c23a90" />


## User Manual & Instructions

### 1. Account Setup

- **Admin Login:** Administrators access the system using the master credentials issued upon deployment.

- **Cashier / Employee Accounts:**
  - All employee accounts are **created and provisioned exclusively by the system administrator**.
  - Cashiers and other staff members will **receive their assigned login credentials** directly from the manager or administrator.
  - Users may immediately access the system using the provided username and password; **self-registration is not permitted** to maintain system security and integrity.

- **New Employees:**
  - For any newly hired personnel, the **administrator is responsible for registering their account** and issuing their initial login credentials.

- **Password Reset:**
  - Select **Forgot Password**
  - Enter the registered email address → A secure password reset link will be sent to your inbox.

---

### 2. POS Operations Workflow

- Navigate to *POS > New Order*.
- Select menu items, apply add-ons or custom notes, and confirm quantities.
- Proceed to **Checkout** to finalize the transaction using the customer’s selected payment method.

---

### 3. Order Processing

- Upon order completion, the system automatically deducts ingredient quantities from inventory.
- Confirmed orders are automatically queued in the Barista Station.
- Baristas update each order’s status: *Preparing*, *Completed*, or *Served*.
- All actions are logged under the corresponding employee for accountability.
     
---

### 4. Inventory Management

- Upon order completion, the system automatically deducts ingredient quantities from inventory.
   - The system checks for:
     - Real-time stock availability  
     - Potential low-stock or out-of-stock conditions  
     - Forecasted supply needs based on sales trends
     - If discrepancies or shortages are detected, the system will notify the admin or manager.
---

---

### 5. AI-Powered Demand Forecasting

- Navigate to the *Analytics Dashboard*.
- Review AI-generated insights such as:
  - Best-selling menu items and peak order times
  - Predicted high-demand periods based on historical sales
  - Inventory usage trends for beverages, food items, and ingredients
- Apply filters (e.g., Month, Category, Item Type) to refine and compare performance data.
- Click **Export** to download reports in **CSV or PDF** format for managerial review and planning.

---

### 6. Product Menu & Pricing Management

- Access the *Menu Management* module.
- Add, update, or remove products, including beverages, food items, and specials.
- Set or adjust prices, apply discounts, and manage seasonal offerings.
- Organize products by category for easy navigation and reporting.
- Changes automatically sync across all POS terminals in real-time.


---

### 7. Security & Roles

| Role | Permissions |
|------|--------------|
| **Admin / Manager** | Full access to system settings, user management, employee credentials, and POS configuration |
| **Cashier / Staff** | Access assigned POS terminals, process sales transactions, manage orders, and view relevant reports |

---

### 8. Troubleshooting

- **Error “Database Connection Failed”:** Check Firebase configuration in `firebaseConfig.js` or ensure Firebase project credentials are correct  
- **Sales/Inventory not syncing:** Verify internet connectivity and that Firebase services are operational  
- **UI issues:** Clear browser cache or use Chrome/Edge for optimal compatibility  
- **Receipt or transaction not recorded:** Check Firebase Firestore rules and confirm the POS user has proper write permissions

---

### 9. Feedback & Contributions
- Report bugs via the **Issues** tab on GitHub  
- You may **submit improvements or suggestions** via Pull Request  
- Need help with setup? Contact the **developer email** listed in the About section

---

## System Architecture 

- **Frontend:** PHP, CSS, and JavaScript for responsive and interactive user interfaces.  
- **Backend:** PHP modular structure for business logic, authentication, and input validation.  
- **Database:** Firebase Realtime Database / Firestore for real-time sales, inventory, and transaction tracking.  
- **Security:** Role-based access control for Admin, Cashiers, and Customers; secure data transmission via HTTPS.

---

## Data Flow

1. User interacts via **Frontend (PHP, CSS, JS)**  
2. Transaction or order data is sent to **PHP Backend**  
3. Backend logs the transaction and updates **Firebase Database** in real-time  
4. Backend generates the receipt and records transaction details  
5. Inventory is automatically updated in **Firebase**  
6. Analytics Dashboard visualizes sales, inventory status, and customer activity


---
<div align="center">
  
## Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34) 
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
</div>

<div align="center">

## GitHub Statistics

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px;">

  <div style="width: 360px; text-align: center;">
    <h3>🧩 Meryll Klaryze Polaron (<a href="https://github.com/k00617500">@k00617500</a>)</h3>
    <img src="https://github-readme-stats.vercel.app/api?username=k00617500&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=false" width="360"/><br/>
    <img src="https://nirzak-streak-stats.vercel.app/?user=k00617500&theme=highcontrast&hide_border=false" width="360"/><br/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=k00617500&theme=highcontrast&hide_border=false&layout=compact" width="360"/>
  </div>

  <div style="width: 360px; text-align: center;">
    <h3>🧩 Jester Galfo (<a href="https://github.com/m-gj">@m-gj</a>)</h3>
    <img src="https://github-readme-stats.vercel.app/api?username=m-gj&theme=highcontrast&hide_border=false&include_all_commits=false&count_private=false" width="360"/><br/>
    <img src="https://nirzak-streak-stats.vercel.app/?user=m-gj&theme=highcontrast&hide_border=false" width="360"/><br/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=m-gj&theme=highcontrast&hide_border=false&layout=compact" width="360"/>
  </div>

  <div style="width: 360px; text-align: center;">
    <h3>🧩 Zalve Mae Magsael (<a href="https://github.com/zalvemaemagsael-cmyk">@zalvemaemagsael-cmyk</a>)</h3>
    <img src="https://github-readme-stats.vercel.app/api?username=zalvemaemagsael-cmyk&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=false" width="360"/><br/>
    <img src="https://nirzak-streak-stats.vercel.app/?user=zalvemaemagsael-cmyk&theme=highcontrast&hide_border=false" width="360"/><br/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=zalvemaemagsael-cmyk&theme=highcontrast&hide_border=false&layout=compact" width="360"/>
  </div>

</div>
</div>


## 🔴 Live Contributors
![GitHub Contributors Image](https://contrib.rocks/image?repo=k00617500/SCM-for-WVSU)


---
## License
This project is developed strictly for **academic and research purposes** under **West Visayas State University-CICT**.  
Any unauthorized reproduction, distribution, or commercial use is strictly prohibited.

---

## Academic Context

LitLatté POS Suite is developed as a course requirement for **CC 206 – Application Development and Emerging Technologies**.  
The project demonstrates the integration of **AI-driven demand forecasting, real-time inventory management, and POS operations automation** in a café environment.  
It aligns with WVSU’s objective of promoting **digital innovation and efficient operational management** in academic and small business contexts.


---


<img width="6750" height="2323" alt="RespoLink - HCI Final App Development" src="https://github.com/user-attachments/assets/886ce978-d916-4b73-b531-4d3310311419" />

[![](https://visitcount.itsvg.in/api?id=k00617500&icon=0&color=0)](https://visitcount.itsvg.in)
