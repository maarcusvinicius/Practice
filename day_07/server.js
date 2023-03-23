const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();

const student = require("./routes/student");

app.use(bodyParser.urlencoded());

app.use("/", express.static(path.join(__dirname, "public")))
app.use("/api", student);

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});
