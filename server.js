const express = require("express");
const net = require("net");
const path = require("path");

const app = express();
const PORT = 8080;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// API to check connection to port 44818
app.get("/connect", (req, res) => {
  const client = net.createConnection({ port: 44818 }, () => {
    res.json({ status: "Connected to 44818" });
  });

  client.on("error", () => {
    res.status(500).json({ status: "Cannot connect to 44818" });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
