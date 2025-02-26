const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Received webhook:", req.body);
    res.status(200).send("Webhook received");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});