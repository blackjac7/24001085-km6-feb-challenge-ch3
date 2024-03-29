const express = require("express");
const route = require("./router");
const errorHandlers = require("./middleware/errorHandlers");

// Initiate express app
const app = express();
const PORT = 3000;

// Enable request body (json)
app.use(express.json());

// Enable static public directory
app.use(express.static("public"));

// Enable routing
app.use("/", route);

// Error handling
app.use(errorHandlers);

// Listening server on PORT
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
