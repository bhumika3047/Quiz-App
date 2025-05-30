# Quiz App

A full-stack quiz application built with React frontend and Node.js backend.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation & Setup

**Step 1: Clone the repository**

```bash
git clone https://github.com/bhumika3047/Quiz-App.git
cd Quiz-App
```

**Step 2: Setup Frontend**

```bash
cd front-end
npm install
npm start
```

**Step 3: Setup Backend**

```bash
cd BackEnd
npm install
npm start
```

## 📁 Project Structure

### Frontend (`/front-end`)

```
front-end/
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── Common/
│   │   │   ├── DateCounter.js
│   │   │   ├── Error.js
│   │   │   ├── FinishScreen.js
│   │   │   ├── NextButton.js
│   │   │   ├── Options.js
│   │   │   └── Progress.js
│   │   ├── Home/
│   │   │   ├── CreateQuestion.js
│   │   │   ├── Home.js
│   │   │   ├── Main.js
│   │   │   ├── StartScreen.js
│   │   │   └── Timer.js
│   │   └── Layout/
│   │       ├── Footer.js
│   │       ├── Header.js
│   │       └── Loader.js
│   ├── constants/
│   │   └── reducer.js
│   ├── mockData/
│   │   ├── questionListJson
│   │   └── index.js
│   ├── App.js
│   ├── Question.js
│   └── index.js
├── package.json
└── .gitignore
```

### Backend (`/BackEnd`)

Backend structure and API endpoints (add your specific backend structure here)

## 🎯 Features

### Authentication

- **User Registration** (`Register.js`) - New user account creation [Basic Form UI, Not validation & JWT]
- **User Login** (`Login.js`) - Secure user authentication [Basic Form UI, Not validation & JWT]

### Quiz Management

- **Question Display** (`Question.js`) - Dynamic question rendering
- **Multiple Choice Options** (`Options.js`) - Interactive answer selection
- **Create Questions** (`CreateQuestion.js`) - Add new quiz questions [For that you need to replace url with "/questions/create"]

### User Experience

- **Home Dashboard** (`Home.js`) - Main application interface
- **Start Screen** (`StartScreen.js`) - Quiz initialization
- **Progress Tracking** (`Progress.js`) - Real-time quiz progress
- **Timer Functionality** (`Timer.js`) - Time-based quiz sessions
- **Finish Screen** (`FinishScreen.js`) - Results and completion summary

### UI Components

- **Responsive Layout** (`Header.js`, `Footer.js`) - Consistent page structure
- **Loading States** (`Loader.js`) - Enhanced user feedback
- **Error Handling** (`Error.js`) - Graceful error management
- **Date Counter** (`DateCounter.js`) - Time tracking utilities
- **Navigation** (`NextButton.js`) - Smooth quiz progression

## 🛠️ Technologies Used

### Frontend

- **React.js** - Component-based UI framework
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Styling and responsive design
- **React Hooks** - State management and lifecycle methods

### Backend

- **Node.js** - Server-side JavaScript runtime
- **Express.js** (assumed) - Web application framework
- **Database Integration** - Data persistence layer

## 📊 Data Management

- **Mock Data** (`/mockData`) - Development and testing data
- **State Management** (`reducer.js`) - Centralized application state
- **Question Lists** (`questionListJson`) - Quiz content storage

## 🏃‍♂️ Development Workflow

1. **Start Frontend Development Server**

   ```bash
   cd front-end && npm start
   ```

2. **Start Backend Development Server**

   ```bash
   cd BackEnd && npm start
   ```

## 👥 Authors

- **Bhumika** - Initial work - [bhumika3047](https://github.com/bhumika3047)
