Project Setup

Prerequisites:

Ensure you have Node.js (version 14 or later) and npm (or yarn) installed on your system. You can verify these by running node -v and npm -v (or yarn -v) in your terminal.

[Create React App with Vite:]

Open your terminal and navigate to your desired project directory.
Run the following command to create a new React project using Vite:
Bash
npm create vite@latest my-crypto-explorer --template react


Replace my-crypto-explorer with your preferred project name.
Navigate to Project Directory:

Use cd my-crypto-explorer to enter the newly created project directory.
Dependencies

Run npm install

Install react-router-dom:

We'll use react-router for routing to different pages of the application. Install it using npm or yarn:
Bash
npm install react-router-dom


Alternatively, with yarn:
Bash
yarn add react-router-dom

Install react-google-charts:

We'll use react-google-charts for displaying crypto charts on details page of the application. Install it using npm or yarn:
Bash
npm install react-google-charts


Alternatively, with yarn:
Bash
yarn add react-google-charts


CoinGecko API Key

Create a CoinGecko Account:

If you don't have one, sign up for a free CoinGecko account at https://www.coingecko.com/.
Generate API Key:

Go to your CoinGecko account settings and navigate to the API Keys section.
Create a new API key and copy it for later use.