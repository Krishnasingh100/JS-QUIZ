# JS Quiz Application

A simple and interactive JavaScript quiz application built with vanilla JavaScript and Vite. Test your knowledge of JavaScript fundamentals with multiple-choice questions, real-time feedback, and a scoring system.

## 📋 Features

- **Interactive Quiz**: Multiple-choice questions with instant feedback
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Score System**: Displays final score and performance message
- **Auto-Advance**: Automatically moves to the next question after selecting an answer
- **Random Question Selection**: Questions are randomly selected from the question bank
- **Responsive Design**: Beautiful and user-friendly interface
- **Fast Build**: Powered by Vite for optimal development and production builds

## 🛠️ Tech Stack

- **HTML5** - Markup
- **CSS3** - Styling
- **JavaScript (ES6+)** - Application logic
- **Vite** - Build tool and development server

## 📦 Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/js-quiz.git
   cd js-quiz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Usage

### Development
To start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Production Build
To build for production:
```bash
npm run build
```

### Preview Build
To preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
js-quiz/
├── index.html           # Main HTML file
├── package.json         # Project metadata and dependencies
├── README.md            # This file
└── src/
    ├── main.js          # Main application logic
    ├── questions.js     # Quiz questions database
    └── style.css        # Styling
```

## 🎯 How It Works

1. User clicks the "Start Quiz" button
2. Random questions are selected from the question bank
3. User selects an answer from the multiple options
4. Application provides instant visual feedback (correct/incorrect)
5. Quiz auto-advances to the next question
6. After completing all questions, the final score is displayed
7. User can restart the quiz

## 📝 Questions Database

Questions are stored in [src/questions.js](src/questions.js) with the following structure:

```javascript
{
    question: "Question text here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0  // Index of the correct answer
}
```

You can add more questions to expand the quiz.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Add more quiz questions
- Improve the UI/UX

Please create a pull request with your changes.

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Learning!** 🎓✨
