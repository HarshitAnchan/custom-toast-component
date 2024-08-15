import useNotification from "./hooks/use-notification";
import "./App.css";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-right");

  return (
    <div className="App">
      {NotificationComponent}
      <h1 className="title">Toast Component</h1>
      <div className="btns">
        <button
          className="btn success"
          onClick={() =>
            triggerNotification({
              type: "success",
              message: "This is a success message!",
              duration: 3000,
              animation: "pop",
            })
          }
        >
          Show Success
        </button>
        <button
          className="btn info"
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
          className="btn warning"
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
          className="btn error"
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
