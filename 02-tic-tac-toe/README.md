# Tic Tac Toe

This is a Tic Tac Toe game built with React.

# Contents

In this project, you will learn how to:

- Create a React project
- Use React components
- Use CSS styles
- Use JSX syntax
- Use React state and props to manage data
- Use React Hooks to manage state (useState and useEffect)

## Getting Started

To run this project, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/EfrenAS/react-tic-tac-toe.git
```

2. Install the dependencies:

```sh
pnpm install
```

3. Start the development server:

```sh
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173` for wathcing the game.

## Notes

- On React the state update is asynchronous.
- The initialitation of component when we are using the useState hook only initializes the state when the component is first rendered.
- All hooks cannot be called inside of a conditional statement or inside a loop.
- The useEffect hook is used to handle side effects, such as fetching data from an API or updating the DOM.
- The useEffect hook is called after every render.
- The useEffect hook can be used to clean up side effects, such as removing event listeners or canceling timers.
- the useEffect hook is executed minimum once after the component is mounted.
- If the useEffect hook is not has a dependency array, it will run after every render.

### useEffect Hook

```jsx
import { useEffect } from "react";
const Component = () => {
  useEffect(codeToExecute, [listOfDependencies]);
};

/* Where:
 * codeToExecute: is the function that will be executed after the component is mounted.
 * listOfDependencies: is an array of values that determines when the codeToExecute function will be executed, and it can be optional.
 */
```
