# AI SaaS Application - Text-to-Image Generator - Imagify

This is a **Full Stack AI SaaS Application** built using the **MERN stack**. It allows users to generate AI-based images using the **Clipdrop API**. The app includes **user authentication, a credit-based system for image generation, and an online payment gateway integration**.

## 🚀 Features
- **AI-Powered Image Generation** using the Clipdrop API.
- **User Authentication** with JWT.
- **Credit System** to manage image generation limits.
- **Online Payments** using Razorpay.
- **MongoDB Database** to store user and transaction details.
- **Fully Responsive UI** with TailwindCSS.

---

## 📂 Project Structure
```sh
/project-root 
    │── frontend/  # React.js & Tailwind CSS Frontend 
    │── backend/   # Node.js & Express Backend  
    │── README.md  # Project Documentation
```

---

## 📥 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/manishjitta/AI-Image_Generator.git
cd AI-Image_Generator
```

### 2️⃣ Install Dependencies

#### Backend:
Navigate to the backend directory and install the necessary dependencies:
```sh
cd backend
npm install
```

#### Frontend:
Next, navigate to the frontend directory and install the frontend dependencies:
```sh
cd frontend
npm install
```

---

## ⚙️ Configuration

### Backend Configuration:
1. Rename the `.env.example` file in the backend directory to `.env`.
2. Add your **MongoDB Atlas connection string**, **Clipdrop API key**, and **Stripe Secret Key** in the `.env` file.

**Example `.env` file for backend:**
```sh
MONGO_URI=<your_mongo_db_connection_string>
CLIPDROP_API_KEY=<your_clipdrop_api_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
JWT_SECRET=<your_jwt_secret_key>
```

### Frontend Configuration:
1. Rename the `.env.example` file in the frontend directory to `.env`.
2. Set the **API URL** of your backend server.

**Example `.env` file for frontend:**
```sh
REACT_APP_API_URL=http://localhost:5000
```

---

## 🚀 Running the Application

### 4️⃣ Start the Backend:
In the backend directory, start the server:
```sh
cd backend
npm run dev
```
This will start the backend on **`http://localhost:5000`**.

### 5️⃣ Start the Frontend:
In the frontend directory, start the React development server:
```sh
cd frontend
npm start
```
This will start the frontend on **`http://localhost:3000`**.

---

## 📝 Final Notes
- **MongoDB Atlas:** Ensure your MongoDB Atlas cluster is set up, and the connection string is correctly configured in the `.env` file.
- **Clipdrop API:** You'll need an API key for the Clipdrop service, which is used for generating AI images.
- **Environment Variables:** Ensure all required environment variables are set up properly in both the frontend and backend.

---

## 🎯 Next Steps
After setting up the app, you can start interacting with the application to generate AI-powered images.

---

### 🔗 Contributing
Want to improve this project? Feel free to **fork** the repo and submit a pull request!

---
