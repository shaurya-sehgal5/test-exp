const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.get("/health", (req, res) => {
  res.status(500).json({
    status: "ok",
  });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
