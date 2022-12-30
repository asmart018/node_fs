const fs = require("fs");

fs.readFile("./HelloWorld.txt", (err, data) => {
  if (err) return console.error(err);

  console.log(data.toString());
});
