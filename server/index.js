const express = require("express");
const app = express();
// const path = require("path");
// app.use(express.static(path.join(__dirname, "/../build")));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../build/index.html"));
// });
const { SERVER_PORT } = process.env;
const port = SERVER_PORT;

app.listen(port, () => console.log(`listening on port ${port}`));