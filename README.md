# Cistercian Numerals

A React application that generates Cistercian numerals based on a number input from the user (from 0 to 9999). The numeral is rendered as an SVG, which can also be downloaded as a file.

## Features

- **Dynamic Numeral Generation:**  
  The application splits the entered number into digits and displays each digit in the traditional Cistercian numeral style using SVG transformations.

- **Real-Time Update:**  
  As you type a number in the form, the numeral is updated instantly on the screen.

- **SVG Download:**  
  Download the generated numeral as an SVG file.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kahay/Cistercian-Numerals.git
   ```

2. **Install dependencies:**

   npm install
   Or, if you prefer yarn:
   yarn install

3. **Start the application:**
   npm run dev

## Project Structure

Cistercian-Numerals/

├── node_modules/ # Installed npm packages (do not include in git)

├── public/ # Public assets (index.html, etc.)

├── src/

│ ├── App.jsx # Main application component

│ ├── App.css # Application-specific styles

│ ├── main.jsx # Entry point of the application

├── .gitignore # Specifies files and folders to ignore in git

├── package.json # Project dependencies and scripts

└── README.md # This file
