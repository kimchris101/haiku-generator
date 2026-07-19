// Grab the UI elements
const generateBtn = document.getElementById('generate-btn');
const topicInput = document.getElementById('topic-input');
const haikuOutput = document.getElementById('haiku-output');
const poemContainer = document.querySelector('.haiku-poem');
const topicTag = document.querySelector('.haiku-topic');

// API Configurations provided
const API_KEY = "ad7bf4ee5e6081078f1co03ce5e7fta5";
const BASE_URL = "https://api.shecodes.io/ai/v1/generate";

// Event listener for the click event
generateBtn.addEventListener('click', generateHaiku);

// Allow pressing "Enter" in the input field to trigger generation too
topicInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generateHaiku();
    }
});

async function generateHaiku() {
    const topic = topicInput.value.trim();

    // 1. Simple validation: Check if user typed something
    if (!topic) {
        alert("Please enter a topic first!");
        return;
    }

    // 2. UI Loading State
    generateBtn.innerText = "Generating...";
    generateBtn.disabled = true;

    // 3. Define the prompt and context instructions for the AI
    const prompt = `Write a beautiful haiku about ${topic}`;
    const context = "You are a poetic AI assistant. Generate exactly one haiku using the strict 5-7-5 syllable structure. Separate each line with a <br /> tag. Do not include a title or any other conversational text.";

    // 4. Construct the URL safely using encodeURIComponent
    const apiUrl = `${BASE_URL}?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${API_KEY}`;

    try {
        // 5. Make the API Call
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        
        // 6. Handle the AI answer (SheCodes AI API returns the result in data.answer)
        if (data && data.answer) {
            // Update poem content
            poemContainer.innerHTML = data.answer;
            // Update the topic tag at the bottom
            topicTag.innerText = `Topic: ${topic}`;
            // Make the card visible
            haikuOutput.classList.remove('invisible');
        } else {
            throw new Error("Invalid data format received from API");
        }

    } catch (error) {
        console.error("Failed to generate haiku:", error);
        poemContainer.innerHTML = "<p class='line'>Sorry, something went wrong.</p><p class='line'>Please try again.</p>";
        topicTag.innerText = "Error";
        haikuOutput.classList.remove('invisible');
    } finally {
        // 7. Reset the button state
        generateBtn.innerText = "Generate Haiku";
        generateBtn.disabled = false;
    }
}