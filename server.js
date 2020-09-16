const express = require("express");
const app = express();
const port = 8000;

app.listen(port, (err, res) => {
  if (err) {
    console.log(`server error`);
  } else {
    console.log(`server started on port ${port}`);
  }
});
