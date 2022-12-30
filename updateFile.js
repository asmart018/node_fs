const fs = require("fs");

fs.appendFile("./HelloWorld.txt", "\nHello there.", (err) => {
  if (err) return console.error(err);

  console.log("Successfully appended the file.");
});
