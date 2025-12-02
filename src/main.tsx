// Legacy Vite entry point – не используется в Next.js.
// Сохранён для обратной совместимости, когда запускается `npm run dev:vite`.
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
