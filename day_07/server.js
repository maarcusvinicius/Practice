const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const student = require("./routes/student");

app.use(bodyParser.urlencoded());

app.use("/api", student);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});
