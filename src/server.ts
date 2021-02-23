import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.json({ message: "Salve quebrada" });
});

app.listen(3333, () => console.log("Server is running"));
