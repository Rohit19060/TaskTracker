# Task Tracker

This is a task tracking application built with React, TypeScript, and Tailwind CSS. The application allows users to manage their tasks efficiently by providing features to add, delete, and categorize tasks based on their status and priority.

## Features

- **Task Management**: Add, delete, and update tasks with detailed descriptions.
- **Priority Labels**: Assign priority labels to tasks (Critical, Warning, Normal) with color coding.
- **Task Status**: Organize tasks into three categories: "In Progress," "Not Started," and "Done."
- **Local Storage**: Store tasks in local storage in JSON format, allowing for persistence across sessions.
- **History Page**: View completed tasks with the ability to filter by date.
- **Responsive Design**: The application is designed to be responsive and user-friendly on various devices.

## Project Structure

```
task-tracker
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── TaskCard.tsx
│   │   ├── TaskForm.tsx
│   │   ├── TaskList.tsx
│   │   └── Navbar.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── History.tsx
│   ├── hooks
│   │   └── useLocalStorage.ts
│   ├── styles
│   │   └── index.css
│   ├── utils
│   │   └── dateUtils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd task-tracker
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Use the form on the Home page to add new tasks.
- Tasks can be categorized and prioritized.
- Completed tasks can be viewed in the History page, where you can filter them by date.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Local Storage
- React Router

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.