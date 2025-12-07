<div align="center">
<img width="2500" height="1374" alt="LitLatte" src="https://github.com/user-attachments/assets/78b3c634-7d69-4d0c-8337-34eff6d81324" />

# LitLatté POS Suite for BookLatté Iloilo
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
- **Centralized Procurement:** Digital purchase request, approval, and tracking.
- **Smart Inventory Management:** Real-time stock monitoring and replenishment alerts.
- **AI-Driven Forecasting:** Predicts supply and demand trends for better planning.
- **Blockchain Transparency:** Immutable logs for transaction traceability and security.
- **Vendor Management:** Streamlined supplier evaluation and data handling.
- **Analytics Dashboard:** Visual reports for smarter decision-making.

---
<img width="1920" height="1080" alt="system name" src="https://github.com/user-attachments/assets/0b3e8536-6f4d-4ee1-8ea8-884215c23a90" />


## User Manual & Instructions

### 1. Account Setup
- **Admin Login:** Use credentials provided by the system administrator.  
- **Department Head / Staff:**
      - Click **Register** or request an account from admin.
      - After approval, you can log in using your credentials.  
- **Password Reset:**
      - Click **Forgot Password**
      - Enter your email -> Check inbox for reset link

---

### 2. Procurement Workflow
1. **Create Request:**  
   - Go to *Procurement > New Request*  
   - Fill in item details, quantity, purpose, and department  
   - Click **Submit for Approval**
2. **Approval Process:**  
   - Department Head reviews the request  
   - Approve or reject with remarks  
   - Approved requests automatically proceed to AI validation
3. **AI Validation:**  
   - After approval, the system checks:
       - Is stock still available?
       - Has a similar request already been placed?
       - Is the request aligned with forecasted needs?
  - If there is an issue, you will be notified.

---

### 3. Inventory Management
- View live inventory under *Inventory Dashboard*  
- If items are almost out of stock, a **Low Stock Alert** will appear  
- Add or update items via *Inventory > Manage Items*  
- Incoming deliveries automatically sync to inventory after blockchain logging

---

### 4. Blockchain Ledger Tracking
- Each approved transaction is hashed and recorded  
- Access ledger via *Reports > Blockchain Log*  
- You can see **time, status, and proof of transaction**  
- These records **cannot be changed or deleted**

---

### 5. Analytics & Forecasting
- Go to *Analytics Dashboard*  
- View charts for:
  - Most requested items  
  - Which department uses supplies the most  
  - Vendor performance and reliability 
- Use filters (Example: Month, Department, Category) to refine data  
- Click **Export** to save as **CSV or PDF**

---

### 6. Vendor Management
- Access under *Vendors > List / Add Vendor*  
- Record supplier contact info, ratings, and past transactions  
- The system will **suggest the best suppliers** based on history and ratings
- Use blockchain logs to verify supplier fulfillment history

---

### 7. Security & Roles
| Role | Permissions |
|------|--------------|
| **Admin** | Full access to system settings, users, and database |
| **Department Head** | Approve/reject procurement requests, view analytics |
| **Staff** | Create and track requests, view inventory status |

---

### 8. Troubleshooting
- **Error “Database Connection Failed”:** Check `.env` or `config.php` for MySQL credentials  
- **Forecast not loading:** Ensure Python AI microservice is running (`python ai_module.py`)  
- **Blockchain log missing:** Confirm blockchain service is active or restart from admin panel  
- **UI issues:** Clear browser cache or use Chrome/Edge for best compatibility

---

### 9. Feedback & Contributions
- Report bugs via the **Issues** tab on GitHub  
- You may **submit improvements or suggestions** via Pull Request  
- Need help with setup? Contact the **developer email** listed in the About section

---

## System Architecture 

- **Frontend:** Responsive UI with Bootstrap; optional React components for SPA interactions.  
- **Backend:** PHP modular structure. Authentication, sessions, input validation.  
- **Database:** MySQL with normalized schema (users, inventory, vendors, requests, logs).  
- **AI Module:** Python microservice for ML forecasting (ARIMA, Prophet, scikit-learn).  
- **Blockchain Layer:** Private SHA-256 ledger; expandable to Ethereum or Hyperledger.  
- **Integration:** RESTful API for AI forecasting and blockchain logging.

---

## Data Flow

1. User interacts via **Frontend**  
2. Request goes to **PHP Backend** 
3. Backend logs request & sends to **AI module**  
4. AI module validates demand -> returns decision 
5. If approved, backend hashes transaction & stores on blockchain ledger  
6. **MySQL** updates inventory & logs final status
7. Analytics Dashboard visualizes usage and blockchain audit history 

---
<div align="center">
  
## Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white) ![R](https://img.shields.io/badge/r-%23276DC3.svg?style=for-the-badge&logo=r&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 
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
This project is being developed for **academic and research purposes only** under **West Visayas State University**.  
Unauthorized reproduction or commercial use is prohibited.

---

## Academic Context

WeChain is being developed as a course requirement under **CC 206 – Application Development and Emerging Technologies**.  

It showcases the integration of **AI, blockchain, and data-driven forecasting** in university-level logistics systems.  

The project aligns with WVSU’s goal of promoting **digital transformation and sustainable resource management**.

---


<img width="6750" height="2323" alt="RespoLink - HCI Final App Development" src="https://github.com/user-attachments/assets/886ce978-d916-4b73-b531-4d3310311419" />

[![](https://visitcount.itsvg.in/api?id=k00617500&icon=0&color=0)](https://visitcount.itsvg.in)
