import express from "express";
import path from "path";

const app = express();
const PORT = 8080;

app.use(express.static("."));
app.use(express.static("assets"));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});