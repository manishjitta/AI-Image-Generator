# AI SaaS Application - Text-to-Image Generator - Imagify

This is a **Full Stack AI SaaS Application** built using the **MERN stack**. It allows users to generate AI-based images using the **Clipdrop API**. The app includes **user authentication, a credit-based system for image generation, and an online payment gateway integration**.

## 🚀 Features
- **AI-Powered Image Generation** using the Clipdrop API.
- **User Authentication** with JWT.
- **Credit System** to manage image generation limits.
- **Online Payments** using Stripe.
- **MongoDB Database** to store user and transaction details.
- **Fully Responsive UI** with TailwindCSS.

---

## 📂 Project Structure
```sh
/project-root 
    │── frontend/ # React.js & Tailwind CSS Frontend 
    │── backend/ # Node.js & Express Backend  
    │── README.md # Project Documentation



## Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/manishjitta/AI-Image_Generator.git


2️⃣ Install Dependencies

Backend:
Navigate to the backend directory and install the necessary dependencies:
```sh
cd backend
npm install

Frontend:
Next, navigate to the frontend directory and install the frontend dependencies:
```sh
cd frontend
npm install


3️⃣ Configuration

Backend Configuration:
Rename the .env.example file in the backend directory to .env.
Add your MongoDB Atlas connection string and Clipdrop API key in the .env file.
Set the Stripe Secret Key for payment processing.
Example .env file for backend:
```sh
MONGO_URI=<your_mongo_db_connection_string>
CLIPDROP_API_KEY=<your_clipdrop_api_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
JWT_SECRET=<your_jwt_secret_key>

Frontend Configuration:
Rename the .env.example file in the frontend directory to .env.
Set the API URL of your backend server.
Example .env file for frontend:
```sh
REACT_APP_API_URL=http://localhost:5000

4️⃣ Run the Application
Start the Backend:
In the backend directory, start the server:
```sh
cd backend
npm run dev

This will start the backend on http://localhost:5000.

Start the Frontend:
In the frontend directory, start the React development server:
```sh
cd frontend
npm start

This will start the frontend on http://localhost:3000.

5️⃣ Final Notes
MongoDB Atlas: Make sure your MongoDB Atlas cluster is set up, and the connection string is correctly configured in the .env file.
Stripe: If you are using Stripe for payments, ensure your Stripe account is set up, and the secret key is properly added.
Clipdrop API: You'll need an API key for the Clipdrop service, which is used for generating AI images.
Environment Variables: Be sure that all required environment variables are set up properly in both the frontend and backend.

🎯 Next Steps
After setting up the app, you can start interacting with the application to generate AI-powered images.
You can extend the application by adding more features such as image storage, additional user management functionalities, and more payment options.

