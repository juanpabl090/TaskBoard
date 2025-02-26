# TaskBoard Front End READ ME.md

This project is a task board application developed with React and Vite. The application allows users to manage their tasks efficiently, providing functionalities such as user authentication, task creation, editing, and deletion, and the ability to assign icons and statuses to each task.
## Main Features

1. **User Authentication**: Users can register and log in to the application. Authentication is handled using JWT tokens.
    
2. **Task Management**: Users can create, edit, and delete tasks. Each task can have a title, description, icon, and status.
    
3. **Task Statuses**: Tasks can have different statuses such as "In Progress", "Completed", and "Won't Do". These statuses are visually represented with different icons and colors.
    
4. **Icon Selection**: Users can select custom icons for their tasks from a list of available icons.
    
5. **User Interface**: The application uses Tailwind CSS for design and styling, providing a modern and responsive user interface.
## Project Structure
- **src/components**: Contains reusable UI components such as buttons, icon selectors, and input components.
- **src/context**: Contains the context provider for user authentication.
- **src/pages**: Contains the main pages of the application such as the login page, registration page, and task board.
- **src/services**: Contains services to interact with the backend API, including user authentication and task management.
- **src/routes**: Defines the application routes using React Router.
## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool for frontend projects.
- **Tailwind CSS**: CSS framework for design and styling.
- **Axios**: HTTP client for making requests to the backend API.
- **React Router**: Library for handling routing in React applications.
- **JWT**: JSON Web Tokens for user authentication.