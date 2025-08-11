# Tokyo Pocket Helper

A lightweight, interactive dashboard to help you plan and manage your trip to Tokyo. It's designed to be fast, mobile-friendly, and work offline, making it the perfect companion for your travels.

## Features

- **Sightseeing Checklist:** Keep track of the places you want to visit. Mark them as "visited" as you go.
- **Expense Tracker:** Log your expenses to stay on budget. The dashboard shows a running total of your spending.
- **Notes:** A simple space to jot down reminders, tips, or any other information you need.
- **Tokyo-Inspired Theme:** A dark, neon-style theme to get you in the mood for your trip.
- **Data Persistence:** Your data is automatically saved in your browser's local storage, so you won't lose your changes.
- **Import/Export:** Save your trip data to a file or load a previously saved plan.

## How to Use

This is a static web application built with Preact and Vite. To run it locally, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start a local server and open the dashboard in your browser.

## Editing Initial Data

You can pre-populate the dashboard with your own initial data by editing the `public/data.json` file. This is a great way to set up your initial sightseeing list and budget before you start your trip.

## Data Management

- **Saving:** Your data is automatically saved to your browser's local storage as you make changes.
- **Exporting:** Click the **Export Data** button to save a snapshot of your current data to a `tokyo-dashboard-data.json` file.
- **Importing:** Click the **Import Data** button to load a previously saved `.json` file. This will overwrite your current data.
