# Advanced Expense Tracker 

## Intro

This web app is used to track expenses and bills in modern and visually appealing way while being easy to use and also provide very deep analysis. What seperates us in not only the ui , ux but also our extensive analysis tools. We provide AI support so that the user can get easy analysis.

## Salient Features

1. Frontend using Angular
2. Bakend Using Dotnet
3. Custom auth and data management
4. AI through openrouter
5. RAG is used so that all of user data can be fed to the visually
6. MCP servers are used to allow llm to tool call and assist in expense tracking by allowin automated bill payments and asset management , mcps also allow database access and automantion
7. Models used for ai predection of expenses and management : ARIMA + GARCH and LSTMs
8. Redis used for cache
9. remote gpu compute used to train the models
10. Aws/Azure for hosting

## Database Design

| Expense | Category | User | Mode Of Payment |
| --------------- | --------------- | --------------- | --------------- |
| amount | id | Expenses | id |
| category | name | email | name |
| Description | Item2.3 | Username | Item4.3 |
| mode of payment | Item2.3 | id | Item4.3 |
