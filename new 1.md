# DevDash 📊

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.3.0-yellow)

**DevDash** is a customizable developer dashboard that aggregates GitHub activity, CI/CD pipeline status, server metrics, and team productivity tools — all in one place.

---

## 🚀 Features

- ⏱️ Real-time deployment metrics
- 🔍 GitHub issue and PR overview
- 📁 CI/CD integration (GitHub Actions, CircleCI, Jenkins)
- 🧠 AI-powered coding insights
- 📆 Team calendar sync (Google, Outlook)

---

## 📷 Screenshot

![DevDash UI](https://via.placeholder.com/900x400.png?text=DevDash+Screenshot)

---

## 🛠️ Tech Stack

| Layer         | Tech Used                           |
|---------------|-------------------------------------|
| Frontend      | React, Tailwind CSS, Recharts       |
| Backend       | Node.js, Express                    |
| Database      | MongoDB                             |
| Auth          | JWT, OAuth2                         |
| DevOps        | Docker, GitHub Actions, Nginx       |

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourname/devdash.git
cd devdash

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env
# Edit the .env file with your config

# 4. Run the app
npm run dev
