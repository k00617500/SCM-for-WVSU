<div align="center">
<img width="6000" height="1468" alt="TECHNO STARTUP (1)" src="https://github.com/user-attachments/assets/c8c05027-ed10-418e-a790-5cc735d5af12" />

# WeChain: An AI-driven Supply Chain Management and Logistics Tracker for WVSU using Blockchain and Trend Analysis

A **smart, transparent, and AI-powered Supply Chain Management System** designed for **West Visayas State University (WVSU)**.

</div>

WeChain will be utilized by the **WVSU Supply Management Office** to modernize and centralize all supply and demand operations across the university.  It integrates **AI-driven forecasting** to intelligently analyze logistics trends—identifying which colleges have the highest supply requests, consumption rates, and funding allocations—while leveraging **blockchain technology** to ensure transparent, tamper-proof records of all procurement and distribution activities.

The system promotes **accountability, efficiency, and reliability** in managing university resources.  It allows the Supply Management Office to monitor inventory levels, supplier transactions, and fund usage for each college. Through blockchain-backed tracking, the university can verify where supplies go, how they are utilized, and how unused or malfunctioning items are properly disposed of.

Ultimately, WeChain aims to **streamline processes, reduce workload, prevent redundant requests, and automate validation tasks**, enabling WVSU Supply Management to focus on **strategic planning and equitable distribution of resources** across all departments.

---
## Table of Contents
<details>
<summary>Click to expand</summary>

- [Project Overview](#wechain-an-ai-driven-supply-chain-management-and-logistics-tracker-for-wvsu-using-blockchain-and-trend-analysis)
- [Developers](#developed-by)
- [Installation Guide](#installation-guide)
- [System Features](#system-features)
- [User Manual](#user-manual--instructions)
- [System Architecture](#system-architecture)
- [Data Flow](#data-flow)
- [Tech Stack](#tech-stack)
- [GitHub Statistics](#github-statistics)
- [License](#license)

</details>

---

<div align="center">
  
## Developed by


| Name | Role | Email |
|------|------|--------|
| **Meryll Klaryze Polaron** | UI/UX Designer / Frontend Developer / Project Lead | [polaron.mk@gmail.com](mailto:meryllklaryze.polaron@wvsu.edu.ph) |
| **Jester Galfo** | Backend Developer / AI Integration & Database Architect | [jester.galfo@wvsu.edu.ph](mailto:jester.galfo@wvsu.edu.ph) |
| **Zalve Mae Magsael** | Backend Developer / Blockchain Integrator | [zalvemae.magsael@wvsu.edu.ph](mailto:zalvemae.magsael@wvsu.edu.ph) |
<img width="1920" height="1080" alt="13" src="https://github.com/user-attachments/assets/1915c0d6-c5fb-406c-8249-298f5b8eb847" />
</div>

**Course:** CC 206 – Application Development and Emerging Technologies  
**Institution:** West Visayas State University - Main Campus
**Course/Year/Section:** Bachelor of Science in Information Systems 3B

---

## Installation Guide

1. Clone the repository:  
   ```bash
   git clone https://github.com/k00617500/SCM-for-WVSU.git
   cd SCM-for-WVSU

<img width="1920" height="1080" alt="10" src="https://github.com/user-attachments/assets/63df5f37-a361-4a2c-b6a0-ab657cbc6726" />

---

## System Features
- **Centralized Procurement:** Digital purchase request, approval, and tracking.
- **Smart Inventory Management:** Real-time stock monitoring and replenishment alerts.
- **AI-Driven Forecasting:** Predicts supply and demand trends for better planning.
- **Blockchain Transparency:** Immutable logs for transaction traceability and security.
- **Vendor Management:** Streamlined supplier evaluation and data handling.
- **Analytics Dashboard:** Visual reports for smarter decision-making.

---

## User Manual & Instructions

### 1. Account Setup
- **Admin Login:** Use credentials provided by the system administrator.  
- **Department Head / Staff:** Register through the system or request access approval from the admin.  
- **Password Reset:** Click “Forgot Password?” on the login page to reset via email verification.

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
   - The AI module checks item demand and forecasted need  
   - System alerts if similar requests exist or stock is sufficient

---

### 3. Inventory Management
- View live inventory under *Inventory Dashboard*  
- Low-stock alerts appear in the **Notifications** tab  
- Add or update items via *Inventory > Manage Items*  
- Incoming deliveries automatically sync to inventory after blockchain logging

---

### 4. Blockchain Ledger Tracking
- Each approved transaction is hashed and recorded  
- Access ledger via *Reports > Blockchain Log*  
- Check authenticity and timestamps for audit purposes  
- Ledger entries cannot be altered or deleted

---

### 5. Analytics & Forecasting
- Go to *Analytics Dashboard*  
- View charts for:
  - Procurement trends  
  - Departmental consumption  
  - Supplier reliability scores  
- Use filters (e.g., Month, Department, Category) to refine data  
- Export analytics reports as CSV or PDF for documentation

---

### 6. Vendor Management
- Access under *Vendors > List / Add Vendor*  
- Record supplier contact info, ratings, and past transactions  
- AI-based suggestions highlight top-performing vendors  
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
- Pull requests are welcome for minor improvements or documentation  
- For deployment concerns, contact the developers via email listed above

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

1. User login (Admin / Dept Head / Staff)  
2. Staff creates procurement request  
3. Department Head approves or rejects  
4. AI forecasting module validates demand  
5. Approved order hashed & stored on blockchain ledger  
6. Inventory auto-updated on delivery  
7. Ledger ensures traceable, tamper-evident audit trail  

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
