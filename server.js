const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "VeloCore Express Test",
        runtime: "node"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        env: process.env.NODE_ENV || "development"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});