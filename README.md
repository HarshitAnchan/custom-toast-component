# React Toast Popup

`react-toast-notify-popup` is a simple and customizable React component for displaying toast notifications. It supports different types of messages like success, info, warning, and error, and allows you to position the notifications anywhere on the screen.

![Demo](https://github.com/user-attachments/assets/4b4c2773-676a-4bfc-9b0d-ddff9dc6a46c)

## Installation

You can install React Toast Popup via npm:

```jsx
npm install toast-popup-react-component
```

## Features

- Multiple notification types: Success, Info, Warning, Error
- Customizable duration and animation
- Position notifications anywhere on the screen
- Responsive and mobile-friendly

## Usage

To use React Toast Popup in your React application, follow these steps:

```jsx
import React from "react";
import useNotification from "toastify-react-component";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-right");

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
```

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
