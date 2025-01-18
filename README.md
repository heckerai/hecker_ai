
# Hecker AI 💻🤖

An advanced AI-powered platform for validating and generating code, built with modern web technologies and GPT-4. This project is divided into two main parts: a React-based frontend and an ExpressJS backend, both written in TypeScript.

## ✨ Features

- **AI Code Validation**: Detects vulnerabilities and errors in your code with detailed explanations.
- **Code Generation**: Generates clean, optimized code in any programming language based on user input.
- **Modern Tech Stack**: Built with React, TypeScript, Vite, and ExpressJS.
- **Real-Time Interaction**: Instant feedback and output for both code validation and generation.

## 🎯 Core Functionalities

### Validate Code
1. Paste your code snippet into the left-hand panel.
2. Click "Validate" to analyze the code for errors and vulnerabilities.
3. View comments and feedback in the right-hand panel.

### Generate Code
1. Enter a detailed description of the code you need in the left-hand panel.
2. Click "Send" to generate the code.
3. Review the generated code on the right-hand panel.

## 💡 Tips for Best Results

- Provide **complete code snippets** for validation to ensure accurate feedback.
- Be as **detailed as possible** in code generation prompts:
  ```plaintext
  Generate a Python function that calculates the factorial of a number using recursion.
  ```
- Specify the programming language in your prompts for better results.

## 🔍 Technical Highlights

- **Frontend**: Responsive, dynamic UI for input and output interactions.
- **Backend**: Robust API to handle requests and integrate with OpenAI's GPT-4.

## 📁 Project Structure

```
root/
├── hercker-ai-frontend/   # Frontend application
│   ├── src/               # Source code for the React app
│   └── ...                # Additional frontend configuration files
├── hecker-ai-backend/     # Backend application
│   ├── src/               # Source code for the Express server
│   └── ...                # Additional backend configuration files
└── README.md              # Project documentation
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Custom CSS

### Backend
- **Framework**: ExpressJS with TypeScript
- **AI Integration**: OpenAI GPT-4 API
- **Environment**: Node.js

## 🚀 Getting Started

### Setting up the Frontend

1. Navigate to the `hercker-ai-frontend` folder:
   ```bash
   cd hercker-ai-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Setting up the Backend

1. Navigate to the `hecker-ai-backend` folder:
   ```bash
   cd hecker-ai-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request with your improvements or fixes.

### Areas for Contribution
- New AI-powered features.
- Enhanced UI/UX for better accessibility.
- Additional language support for validation and generation.
- Documentation updates.

---

Made with ❤️ by the Hecker AI Team.
