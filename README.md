Here’s a clean, professional GitHub description and detailed README content for your project based on the code you shared.



# 📝 React To-Do App (MERN Stack)

A full-stack To-Do / Task Management web application built using **React.js, Node.js, Express, and MongoDB**.
The app allows users to register, log in, and manage their personal tasks with a simple and responsive interface.



# 📌 Project Overview

This project is a complete MERN stack application with:

* User authentication (register & login)
* Personal dashboard for each user
* Add and manage tasks (appointments)
* MongoDB database integration
* REST API backend
* React Router navigation

The application stores users and their tasks in MongoDB and displays them in a user-specific dashboard.


# 🚀 Features

* 👤 User Registration
* 🔐 User Login
* 📋 Personal Task Dashboard
* ➕ Add New Task
* ✏️ Edit Task
* ❌ Delete Task
* 📅 Task with Date & Description
* 🌐 REST API Integration
* 📦 MongoDB Data Storage
* ⚛️ React Frontend with Routing


# 🧱 Tech Stack

## Frontend

* React.js
* React Router DOM
* HTML5
* CSS3
* Bootstrap (UI styling)

## Backend

* Node.js
* Express.js
* MongoDB (native driver)
* CORS
* REST API

## Database

* MongoDB
  Database name: `calendardb`
  Collections:
* `users`
* `appointments`


# 📂 Project Structure

```
react-todo-app/
│
├── backend/
│   ├── index.js        # Basic API demo server
│   ├── rest-api.js     # Main REST API + MongoDB logic
│   └── package.json
│
├── public/
│   └── assets & HTML
│
├── src/
│   ├── App.js
│   ├── components/
│   │   ├── to-do-home.jsx
│   │   ├── user-register.jsx
│   │   ├── user-login.jsx
│   │   ├── user-dashboard.jsx
│   │   ├── add-task.jsx
│   │   ├── edit-task.jsx
│   │   └── user-error.jsx
│   └── styles
│
└── package.json
```


# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/react-todo-app.git
cd react-todo-app
```


## 2️⃣ Install Frontend Dependencies

```bash
npm install
```


## 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```


## 4️⃣ Start MongoDB

Make sure MongoDB is running locally:

```
mongodb://127.0.0.1:27017
```


## 5️⃣ Run Backend Server

```bash
node rest-api.js
```

Server runs at:

```
http://127.0.0.1:2000
```


## 6️⃣ Run React Frontend

From project root:

```bash
npm start
```

App runs at:

```
http://localhost:3000
```


# 🔌 API Endpoints

## Users

### Get All Users

```
GET /get-users
```

### Register User

```
POST /register-user
Body:
{
  "UserId": "",
  "UserName": "",
  "Password": "",
  "Email": "",
  "Mobile": ""
}
```


## Tasks (Appointments)

### Get Tasks by User

```
GET /get-appointments/:UserId
```

### Add Task

```
POST /add-task
Body:
{
  "Appointment_Id": 1,
  "Title": "",
  "Description": "",
  "Date": "",
  "UserId": ""
}
```


# 🖥️ App Routes

| Route               | Component      |
| ------------------- | -------------- |
| /                   | Home           |
| /register           | User Register  |
| /login              | User Login     |
| /dashboard          | User Dashboard |
| /dashboard/add-task | Add Task       |
| /edit-task          | Edit Task      |
| /error              | Error Page     |

---

# 🎯 How It Works

1. User registers → stored in MongoDB
2. User logs in → navigates to dashboard
3. Dashboard fetches user tasks from backend
4. User adds tasks → saved to MongoDB
5. Tasks displayed per user

# 📸 Screenshots

# 🏠 Home Page
<img width="1366" height="768" alt="Screenshot (165)" src="https://github.com/user-attachments/assets/709ebf48-932a-4cfa-9945-f5310d1a726d" />

# 📝 User Registration
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/0952c31f-5a10-4fd4-bb88-22240fe7b03c" />

# 🔐 User Login
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/2ff4826e-51c1-4e8b-9ba6-ef0e5d3dd813" />

# 📋 User Dashboard
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/b44876f3-edeb-47ca-98af-b4df5a964311" />

➕ Add Task
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/426e6615-4600-4f59-a2dd-ce9fad8be9d7" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/9e9c43e1-e1d5-41c2-be8f-4c19aec8617c" />

# ✏️ Edit Task
<img width="1366" height="768" alt="Screenshot (172)" src="https://github.com/user-attachments/assets/8c14cf07-5e10-4f0a-acb2-d8bf9b0105ab" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/b87d184d-6ac5-46b8-b760-852207eea359" />

# ❌ Delete Task
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/6e402256-3cb0-4b81-aa6e-051d031ba826" />


# 📸 Future Improvements

* JWT Authentication
* Task Status (Completed / Pending)
* Deployment (Render / Vercel / Mongo Atlas)



# 👨‍💻 Author

* Viveka Nand Kumar
* GitHub: https://github.com/vivekanand2003


