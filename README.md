# 🍽️ Food Foodie - Restaurant Management Website

**Food Foodie** is a fully responsive restaurant management platform developed using the MERN stack. The website provides seamless interaction for both customers and restaurant staff, including features like food listing, ordering, and management.

---

## 🌟 Live Website

[Visit Food Foodie](https://food-foodie-abf51.web.app/)

---

## 🛠️ Key Features

### 🚀 Public Pages

- **Home Page:**

  - Eye-catching banner with a CTA button.
  - Top 6 best-selling food items displayed dynamically.
  - Additional informative sections.

- **Gallery Page:**

  - Displays a collection of food images.

- **All Foods Page:**

  - Displays all available food items with search, and filters.

- **Single Food Page:**
  - Detailed view of a single food item with purchase functionality.

---

### 🔐 Private Pages

- **Food Purchase Page:**

  - Secure order form pre-filled with user details.

- **My Foods Page:**

  - User-specific list of added food items with edit and delete options.

- **My Orders Page:**

  - List of orders made by the logged-in user, including date, time, and delete functionality.

- **Add Food Page:**
  - Form to add a new food item with required details like name, category, price, etc.

---

### 🔑 Authentication

- Email and password-based login.
- Google social login.
- Secure authentication using Firebase and JWT.

---

## 📦 Technologies Used

### 💻 Frontend:

- **React.js**
- **Tailwind CSS**

### 🛠️ Backend:

- **Node.js**
- **Express.js**
- **MongoDB**

### 🔑 Authentication:

- **Firebase** (Email/Password & Social Login)
- **JWT** (for secure routes)

### 🛠️ Additional Packages:

- **Moment.js** (for date formatting)
- **React Router** (for navigation)

- **TanStack Query** (for API data fetching)

---

---

## 🚀 Dependencies

This project relies on the following dependencies:

```json

 "dependencies": {
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "lightgallery": "^2.8.2",
    "lottie-react": "^2.4.0",
    "moment": "^2.30.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icon": "^1.0.0",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.0",
    "sweetalert2": "^11.15.3",
    "swiper": "^11.1.15"
  },

```

## 🛠️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/fajlerabbifahim/Food-Fodie-Restaurant-client.git

```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory and add the following:

```plaintext
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```

(Replace values with your actual Firebase credentials)

### 4️⃣ Start the development server

```bash
npm run dev
```

### 5️⃣ Build for production

```bash
npm run build
```

### 6️⃣ Preview the build

```bash
npm run preview
```

## 🔑 Admin Credentials

Use the following credentials to log in a
