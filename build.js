const fs = require("fs");

console.log("Starting build...");

if (!fs.existsSync("index.html")) {
    console.error("index.html not found!");
    process.exit(1);
}

if (!fs.existsSync("style.css")) {
    console.error("style.css not found!");
    process.exit(1);
}

if (!fs.existsSync("script.js")) {
    console.error("script.js not found!");
    process.exit(1);
}

console.log("All source files found.");
console.log("Build completed successfully!");