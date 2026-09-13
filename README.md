# Dev Stack

Curated tools, technologies, and resources for developers building modern software. Compare options, explore frameworks, and build your ideal development stack.

## Technologies Used
- React (TypeScript)
- Tailwind CSS
- React Toastify
- Vite

## Features
- **Interactive Stack Builder**: Seamlessly add or remove frontend, backend, database, and tooling options to your custom stack.
- **Side-by-Side Comparison**: Explore detailed breakdowns and ratings for modern development frameworks and tools.
- **Instant Notifications**: Real-time feedback alerts using toast notifications when managing your stack items.

---

## React Questions & Answers

### What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like syntax directly inside JavaScript files, making component structures easier to read, write, and visualize.

### What is the difference between props and state?
Props are read-only data passed down from parent components to child components, whereas state is managed internally within a component and can change over time based on user interactions or data updates.

### What does the useState hook do, and where did you use it in this project?
The `useState` hook lets functional components manage and update internal state. In this project, it was used to store and update the list of added technologies in the user's stack, manage loading states, and handle mobile menu states.

### What does the useEffect hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in functional components, such as data fetching. It was required here to fetch the `data.json` file asynchronously when the application first loads so the technology catalog renders correctly.

### Why does every item in a .map() list need a unique key prop?
Unique keys help React identify which items have changed, been added, or been removed, optimizing DOM rendering and preserving component state correctly across updates.

### What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means rendering different UI elements. For example, showing a fallback loading message when data is being fetched:
```tsx
{loading ? <p>Loading...</p> : <TechCardList/>}