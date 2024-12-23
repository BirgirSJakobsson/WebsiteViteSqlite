# Family Website Project

## 🚀 Project Overview
A comprehensive web application for family memories, achievements, and connections.

## 📂 Project Structure
- `frontend/`: React.js frontend application
- `backend/`: Express.js backend server
- `venv/`: Python virtual environment

## 🛠 Prerequisites
- Node.js (v16+ recommended)
- npm
- Python 3.8+
- MongoDB

## 🔧 Initial Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/family-website.git
cd family-website
```

### 2. Set Up Virtual Environment
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate
```

### 3. Install Python Dependencies
```bash
pip install -r requirements.txt
```

### 4. Backend Setup
```bash
cd backend
npm install
```

### 5. Frontend Setup
```bash
cd ../frontend
npm install
```

### 6. Environment Configuration
- Create `.env` files in both `backend/` and `frontend/` directories
- Add necessary environment variables (see respective README files)

## 🏃 Running the Application

### Start Backend Server
```bash
cd backend
npm run dev
```

### Start Frontend Development Server
```bash
cd frontend
npm run dev
```

## 🔒 Environment Variables
- Backend: Configure in `backend/.env`
  - `PORT`: Backend server port
  - `MONGODB_URI`: MongoDB connection string
  - `JWT_SECRET`: Secret for JWT authentication

- Frontend: Configure in `frontend/.env`
  - Add any frontend-specific environment variables

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License
[Specify your license here]

## 🛡️ Security
- Never commit sensitive information to the repository
- Use environment variables for secrets
- Regularly update dependencies
