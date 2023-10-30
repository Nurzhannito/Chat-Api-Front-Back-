import express from "express";
import cors from "cors";
import messages from "./messages.mjs";
import init from "./messages.mjs";
const app = express();
const PORT = 7000;

init();
app.use(cors());
app.use(express.json());
app.use("/messages", messages());

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT} port!`);
});
