// Array of random quotes
const quotes = [
    "Believe in yourself!",
    "You are stronger than you think.",
    "The sky's the limit!",
    "Dream big, work hard.",
    "You got this!",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only way to do great work is to love what you do.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It always seems impossible until it's done.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Act as if what you do makes a difference. It does.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Happiness is not by chance, but by choice.",
    "In the middle of every difficulty lies opportunity.",
    "Start where you are. Use what you have. Do what you can.",
    "Don’t wait for opportunity. Create it.",
    "Failure is the condiment that gives success its flavor.",
    "Believe you can and you're halfway there.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Don't stop when you're tired. Stop when you're done.",
    "Success is getting what you want, happiness is wanting what you get.",
    "The best way to predict your future is to create it.",
    "You miss 100% of the shots you don't take.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Doubt kills more dreams than failure ever will.",
    "It's never too late to be what you might have been.",
    "Do something today that your future self will thank you for.",
    "Little by little, day by day, what is meant for you will find its way."
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

// Function to display the live clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
    setTimeout(updateClock, 1000);
}

// Change background color on click
document.body.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});

// Initialize the clock on page load
updateClock();

// To-Do List Functions
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);

    li.onclick = function() {
        li.classList.toggle('done');
    };

    taskList.appendChild(li);
    taskInput.value = "";
}



// Scroll to Top Button
window.onscroll = function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
