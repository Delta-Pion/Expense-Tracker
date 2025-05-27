# Expense Tracker 💸

**A beautifully designed and intelligent expense tracking application that provides insightful visualizations and a powerful AI-powered financial assistant to manage your finances effectively.**

This project is a full-stack web application built with a modern tech stack, featuring a custom authentication system, a robust backend, a dynamic frontend, and cutting-edge AI integration for natural language data queries.

[](https://opensource.org/licenses/MIT)
[](https://dotnet.microsoft.com/)
[](https://angular.io/)
[](https://d3js.org/)
[](https://openai.com/)

-----

## ✨ Features

  * **Intuitive Expense Tracking:** Easily add, edit, and delete your daily expenses.
  * **Stunning Data Visualizations:** Interactive and aesthetically pleasing charts and graphs built with **D3.js** to help you visualize your spending patterns.
  * **Beautiful UI/UX:** A user-centric design with a focus on providing a seamless and enjoyable user experience.
  * **Custom JWT Authentication:** Secure and custom-built authentication and authorization system using JSON Web Tokens (JWT).
  * **AI-Powered Financial Assistant:** 🤖 Interact with your expense data using natural language. Ask questions like:
      * *"How much did I spend on groceries last month?"*
      * *"What are my top 5 spending categories this year?"*
      * *"Show me all my transactions over $100."*
  * **Advanced AI Architecture:** Utilizes **OpenAI** and **OpenRouter** with a **Retrieval-Augmented Generation (RAG)** and a **Multi-Content Prompt (MCP)** server tool-calling framework to accurately fetch and interpret data from the database.

-----

## 🚀 Tech Stack

This project is built with a modern and powerful technology stack:

  * **Backend:** **.NET** - A robust and scalable framework for building secure and high-performance applications.
  * **Frontend:** **Angular** - A leading-edge framework for creating dynamic and responsive single-page applications.
  * **Data Visualization:** **D3.js** - The premier library for creating beautiful, data-driven visualizations.
  * **AI & Machine Learning:**
      * **OpenAI & OpenRouter:** For state-of-the-art language model capabilities.
      * **Retrieval-Augmented Generation (RAG):** Provides the AI with the necessary context from the database to answer user queries accurately.
      * **MCP Server Tool Calling:** Enables the AI to interact with the backend to fetch real-time data.
  * **Database:** [Specify your database, e.g., PostgreSQL, SQL Server, MongoDB]

-----

## Screenshots

*(It is highly recommended to add actual screenshots of your application here to showcase the UI and visualizations.)*

| Dashboard | Login Screen | AI Chat Interface |
| :---: | :---: | :---: |
| ![dashboard image](ScreenShots\Screenshot (20).png) | ![login image](ScreenShots\Screenshot (19).png) | ![Ai interface](ScreenShots\Screenshot (21).png)  |

-----

## 🤖 AI-Powered Financial Assistant

The standout feature of this Expense Tracker is its intelligent financial assistant. This is not just a simple chatbot; it's a sophisticated AI that understands and responds to your queries about your financial data.

### How it Works

1.  **Natural Language Query:** You ask a question in plain English.
2.  **RAG for Context:** The **Retrieval-Augmented Generation (RAG)** system retrieves relevant transaction data and schema information from the database. This provides the AI with the precise context it needs to understand your finances.
3.  **MCP Server Tool Calling:** The **Multi-Content Prompt (MCP)** framework enables the AI to make specific API calls to the backend to fetch the exact data required to answer your query.
4.  **Informed Response:** The AI combines the retrieved data with its language understanding to provide you with an accurate and insightful answer.

This advanced architecture ensures that the AI can handle a wide range of queries without hallucinations, providing you with a powerful tool for financial analysis.

-----

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

  * [.NET SDK](https://dotnet.microsoft.com/download)
  * [Node.js and npm](https://nodejs.org/en/download/)
  * [Angular CLI](https://angular.io/cli)
  * [Your Database]

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/your-username/expense-tracker.git
    ```
2.  **Backend Setup**
    ```sh
    cd ETAPI
    dotnet restore
    dotnet run
    ```
3.  **Frontend Setup**
    ```sh
    cd Client
    npm install
    ng serve
    ```
4.  **Configure Environment Variables**
      * Create a `.env` file in the backend directory and add your database connection string and JWT secret.
      * Create an `environment.ts` file in the frontend and configure your API endpoint.

-----

##  Enhancements

  * **Budgeting Feature:** Set monthly or category-specific budgets and track your progress.
  * **Recurring Transactions:** Automate the entry of regular expenses.
  * **Multi-Currency Support:** For users who travel or deal with different currencies.
  * **Enhanced AI Insights:** Proactive financial advice and anomaly detection.

-----

## 🤝 Contact

Aditya Thakur - adi.28per@gmail.com

Project Link: [Advanced Expense Tracker](https://github.com/Delta-Pion/Expense-Tracker)