# 🌸 AI Haiku Generator

A minimalist, responsive web application that generates beautiful, structured 5-7-5 syllable Haiku poems instantly using AI. Powered by the SheCodes AI API.

## ✨ Features

- **Instant Generation:** Enter any topic (e.g., *autumn rain*, *morning coffee*, *coding late*) and get a unique haiku in seconds.
- **Syllable Structure:** Instructs the underlying AI engine to follow the strict traditional Japanese 5-7-5 syllable cadence.
- **Minimalist & Clean UI:** Features a soft gradient backdrop, crisp typography, and an animated results card optimized for focusing on the poetry.
- **Keyboard Friendly:** Press `Enter` from the input field to trigger generation immediately.
- **Loading States:** Visually locks input during active API calls to prevent duplicate requests.

## 🚀 Live Demo & Setup

This project is fully front-end based, meaning you can run it entirely in your local browser without setting up a backend server.

### File Structure
Ensure your directory looks like this:
```text
├── index.html
├── style.css
└── index.js
```

### Running Locally
1. Clone or download these files into a single folder on your machine.
2. Open `index.html` directly in any modern web browser (Chrome, Safari, Edge, Firefox), or use an extension like **Live Server** in VS Code.

## 🛠️ Built With

- **HTML5:** Structured semantic markup.
- **CSS3:** Custom styling utilizing a modern sans-serif/serif font pairing, layout flow with `box-sizing`, clean border-accent card design, and a subtle fade-in keyframe animation.
- **JavaScript (ES6+):** Asynchronous API integration via `fetch`, robust error handling using `try...catch`, UI loading state management, and URI parameter sanitation (`encodeURIComponent`).
- **API Engine:** Powered by the SheCodes AI Generation API (`v1/generate`).

## 🧠 Code Architecture

### API Integration (`index.js`)
The application sends an explicit `prompt` along with structured `context` instructions directly to the API endpoint:

```javascript
const prompt = `Write a beautiful haiku about ${topic}`;
const context = "You are a poetic AI assistant. Generate exactly one haiku using the strict 5-7-5 syllable structure. Separate each line with a <br /> tag. Do not include a title or any other conversational text.";
```

The application securely maps the response dynamically back into the DOM, revealing the container element via helper class manipulation (`.invisible`).

## 📝 License

This project is open-source and free to modify for educational or portfolio usage.
