# 🎬 Movie Ticket Booking System

A full-stack **Movie Ticket Booking Application** built using  
**React (Frontend)** + **Node.js/Express (Backend)** + **MongoDB Atlas (Database)**  
with secure JWT-based authentication and role management.

---

## 🚀 Features

### 👤 User Features
- Register & Login with JWT
- Browse movies & showtimes
- Select available seats
- Book tickets instantly
- View personal booking history
- Update profile details

### 🛠️ Admin Features
- Add / Edit / Delete Movies
- Manage Shows & Timings
- View all bookings
- Manage ticketing and seat availability

---

## 🧰 Tech Stack

| Layer        | Technology |
|-------------|------------|
| **Frontend** | React.js |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **ODM** | Mongoose |
| **Auth** | JWT, bcrypt |
| **Env** | dotenv |

---

## 📁 Project Folder Structure

```
movie-ticket-booking/
│
├── client/              # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       └── utils/
│
├── server/              # Backend (Node + Express)
│   ├── controllers/     # Business logic
│   ├── routes/          # All API endpoints
│   ├── models/          # Mongoose models
│   ├── middlewares/     # Auth middleware
│   ├── config/          # DB Connection
│   ├── utils/           # Helpers (JWT, etc)
│   └── server.js        # App entry point
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` inside **server/**:

```
MONGO_URI=your_mongodb_atlas_cluster_uri
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d
PORT=5000
NODE_ENV=development
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Harsh1234567899/movie-ticket-booking.git
cd movie-ticket-booking
```

---

### 2️⃣ Backend Setup (server)

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

Backend runs at:  
➡️ **http://localhost:5000**

---

### 3️⃣ Frontend Setup (client)

```bash
cd ../client
npm install
npm start
```

Frontend runs at:  
➡️ **http://localhost:3000**

---

## 🔌 API Endpoints (Examples)

### 🔐 Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user & return tokens |

### 🎥 Movies
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/movies` | Get all movies |
| POST | `/api/admin/movies` | Add new movie (Admin) |

### 🎟 Booking
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bookings` | Create booking |
| GET | `/api/bookings/me` | Get my bookings |
| DELETE | `/api/bookings/:id` | Cancel booking |

---

## 🛡️ Security Highlights

- Passwords hashed with bcrypt 🔐  
- JWT-based access & refresh token system  
- Protected routes using auth middleware  
- Role-based access control (user/admin)  
- Sensitive values stored in `.env`  
- MongoDB Atlas secured with IP whitelist  

---

## 🚀 Future Improvements

- Payment Integration (RazorPay / Stripe)  
- Real-time seat updates (WebSockets)  
- Email verification + OTP  
- Admin dashboard UI Enhancements  
- Mobile App (React Native)  

---

## 🤝 Contribution

1. Fork the repo  
2. Create a new branch  
3. Commit changes  
4. Push and submit PR  
5. The maintainer will review it  

---

## 📝 License

This project is open-source under the **MIT License**.

---

## 🎉 Thank You!

If you like this project, ⭐ star the repo to support development!
