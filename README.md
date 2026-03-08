# She Stands ♀️ | Women's Day 2026
<img width="1848" height="889" alt="Screenshot 2026-03-08 170235" src="https://github.com/user-attachments/assets/a7360082-ba7c-47c5-a916-5269bb67060e" />
<img width="745" height="698" alt="Screenshot 2026-03-08 170245" src="https://github.com/user-attachments/assets/d277a4b2-39e1-4ab2-b796-d8b53de4acf5" />
<img width="1405" height="768" alt="Screenshot 2026-03-08 170252" src="https://github.com/user-attachments/assets/2576bdc6-4b51-4741-87bb-ef9755b2af70" />

A professional full-stack MERN application built to celebrate the women who shape our world—from historical Indian trailblazers to the personal heroes in our daily lives.

## 🚀 Project Overview
This platform serves as a living archive where users can submit stories of strength and impact. The project features a high-end cinematic UI designed to honor International Women's Day 2026 with an authentic, hand-coded feel.

## ✨ Key Features
* **Dynamic Hero Slider:** A smooth, crossfading background image slider featuring high-quality visuals of Indian women in various roles.
* **Impact Statistics:** Real-time counters that automatically track "Stories Shared" based on database length.
* **Story Grid:** An elegant display of tribute cards featuring custom typography, relation badges (e.g., Sister, Mentor, Hero), and automatic date formatting.
* **MERN Architecture:** Fully functional backend with Node.js and Express, integrated with a cloud-hosted MongoDB Atlas database.
* **Interactive Modal:** A custom React-managed popup form for seamless story submission.

## 🛠️ Tech Stack
* **Frontend:** React.js ,CSS.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB.

## 📂 Project Structure
```text
she-stands-fullstack/
├── backend/
│   ├── .env               # Database credentials (hidden)
│   ├── server.js          # API logic & MongoDB connection
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── assets/        # High-res images (bg1.jpg, bg2.jpg)
│   │   ├── App.jsx        # Slider logic, state management, & UI
│   │   └── App.css        # Custom burgundy & gold styling
│   └── package.json
├── .gitignore             # Exclusion rules for node_modules & .env
└── README.md
```

## 📸 Featured Tributes

The platform currently highlights legendary Indian figures including:

- **Dr. Tessy Thomas** – The *"Missile Woman"* of India.
- **Kalpana Chawla** – Global aerospace hero and inspiration for millions.
- **Sudha Murty** – Pioneering engineer, philanthropist, and author.

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/she-stands-project.git
```

### 2️⃣ Install Dependencies
Run the following command in both the **frontend** and **backend** directories:

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file inside the **/backend** folder and add:

```env
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Run the Project Locally

#### Start Backend
```bash
node server.js
```

Backend runs on **Port 5000**

#### Start Frontend
```bash
npm run dev
```

Frontend runs on **Port 5173**
