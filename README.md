# HealthAI 🏥

**Disease Prediction & Recommendation System**

---

## 🌍 Overview
HealthAI is a web application that allows users (patients) to input their symptoms. The system uses a Machine Learning (ML) model to predict potential diseases and suggest recommended next steps. All patient interactions are logged for future reference and potential model improvement.

---

## 🧑‍🧐 How It Works

### Frontend (React + TailwindCSS)
- User-friendly form for patients to submit symptoms.
- Sends form data securely to the backend.
- Displays disease predictions and recommendations.

### Backend (Node.js + Python ML Model)
- Node.js server acts as a middleware between frontend and ML model.
- Receives symptom data from frontend.
- Forwards data to a Python script running the ML model.
- Receives disease prediction and recommendations from Python.
- Sends results back to the frontend.

### Database (MySQL)
- Stores patient symptom submissions and prediction results.
- Enables analysis of patient history.
- Provides data for future ML model retraining.

---

## 💡 Tech Stack

| Layer       | Technology         |
|-------------|---------------------|
| Frontend    | React, TailwindCSS   |
| Backend     | Node.js (Express)    |
| ML Model    | Python (scikit-learn / TensorFlow) |
| Database    | MySQL                |

---


## 📊 Features
- Real-time disease prediction.
- User-friendly symptom submission.
- Secure data storage.
- Scalable and modular architecture.
- Easy integration with new ML models.

---
