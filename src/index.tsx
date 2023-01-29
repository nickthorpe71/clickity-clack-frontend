import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GameManagerProvider from "./context/gameManager";
import SoundManagerProvider from "./context/soundManager";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <GameManagerProvider>
        <SoundManagerProvider>
            <App />
        </SoundManagerProvider>
    </GameManagerProvider>
);
