import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider as MaterialTailwindThemeProvider } from "@material-tailwind/react";
import { ThemeProvider } from 'next-themes';
import router from './routes/routes'; // Import the router from the routes file
import { AuthProvider } from "./context/auth";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <MaterialTailwindThemeProvider>
        <RouterProvider
          router={router}
        />
      </MaterialTailwindThemeProvider>
    </ThemeProvider>
  </AuthProvider>
  // </StrictMode>
);
