# Family Website Backend

## 🚀 Overview
A robust backend server for managing family website components with an integrated admin dashboard.

## 🔧 Features
- RESTful API for component management
- Secure JWT-based authentication
- Admin dashboard for content creation
- MongoDB integration

## 📦 Prerequisites
- Node.js (v16+)
- npm
- MongoDB

## 🛠 Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/familywebsite
JWT_SECRET=your_very_secure_secret_key
```

## 🚪 Access Points

### Admin Dashboard
- URL: `http://localhost:5000`
- Features:
  - Login page
  - Component creation
  - Component deletion
  - Authentication management

### API Endpoints

#### Authentication
- `POST /api/auth/register`: Register a new admin user
- `POST /api/auth/login`: Login and receive JWT token

#### Components
- `GET /api/components`: Retrieve all components
- `POST /api/components`: Create a new component
- `PUT /api/components/:id`: Update a component
- `DELETE /api/components/:id`: Delete a component

## 🏃 Running the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 🔒 Security Notes
- Always use a strong, unique JWT secret
- Keep your `.env` file private
- Implement additional security measures as needed

## 📝 First-Time Setup
1. Start the server
2. Navigate to `http://localhost:5000`
3. **Create Superuser**
```bash
npm run create-superuser
```
4. Follow the prompts to set up your admin account
5. Log in to the admin dashboard

## 🤝 Contributing
- Follow existing code style
- Add tests for new features
- Update documentation

## 📜 License
[Specify your license here]
