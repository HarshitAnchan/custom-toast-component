# toastify-react-component

[[npm version](https://badge.fury.io/js/npm.svg)]

`toastify-react-component` is a simple and customizable React component for displaying toast notifications. It supports different types of messages like success, info, warning, and error, and allows you to position the notifications anywhere on the screen.

![toastify-react-component demo](![Vite + React - Google Chrome 2024-08-15 17-04-05 (online-video-cutter com)](https://github.com/user-attachments/assets/4b4c2773-676a-4bfc-9b0d-ddff9dc6a46c)
)

## Features

- Multiple notification types: Success, Info, Warning, Error
- Customizable duration and animation
- Position notifications anywhere on the screen
- Responsive and mobile-friendly

## Installation

You can install this package via npm:

```bash
npm install toastify-react-component
Or via yarn:
yarn add toastify-react-component

## Usage Here's a basic example of how to use `toastify-react-component` in your project:


import React from "react";
import useNotification from "toastify-react-component";

function App() {
  const { NotificationComponent, triggerNotification } = useNotification("top-right");

  return (
    <div className="App">
      {NotificationComponent}
      <h1>Toast Component</h1>
      <div className="btns">
        <button
          onClick={() =>
            triggerNotification({
              type: "success",
              message: "This is a success message!",
              duration: 3000,
            })
          }
        >
          Show Success
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "info",
              message: "This is an info message!",
              duration: 3000,
            })
          }
        >
          Show Info
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "warning",
              message: "This is a warning message!",
              duration: 3000,
            })
          }
        >
          Show Warning
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "error",
              message: "This is an error message!",
              duration: 3000,
            })
          }
        >
          Show Error
        </button>
      </div>
    </div>
  );
}

export default App;

## API

### `useNotification(position)`

A custom hook that provides the `NotificationComponent` and `triggerNotification` function.

- **`position`**: A string that specifies the position of the notification on the screen. Options include:
  - `"top-right"`
  - `"top-left"`
  - `"bottom-right"`
  - `"bottom-left"`

### `triggerNotification({ type, message, duration })`

A function to trigger a toast notification.

- **`type`**: A string that defines the type of notification. Options include:
  - `"success"`
  - `"info"`
  - `"warning"`
  - `"error"`
- **`message`**: A string containing the message to be displayed in the notification.
- **`duration`**: A number representing the duration (in milliseconds) for which the notification will remain visible.
```
