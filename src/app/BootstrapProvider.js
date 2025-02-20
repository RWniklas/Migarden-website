// Component to load Bootstrap CSS and JS in the browser, since next.js doesnt have a built-in way to do this

"use client"; // Ensure this runs only in the browser
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Load Bootstrap CSS globally

export default function BootstrapProvider({ children }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js") // Dynamically load Bootstrap JS
            .then(() => {
                console.log("Bootstrap JS loaded successfully!");
            })
            .catch((err) => {
                console.error("Failed to load Bootstrap JS:", err);
            });
    }, []); // Runs only once on mount

    return <>{children}</>; // Render children inside this provider
}
