const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Received webhook:", req.body);
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ success: false, message: "Empty body" });
    }
    res.status(200).json({ success: true, message: "Webhook received" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});