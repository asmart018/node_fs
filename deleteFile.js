const fs = require("fs");

fs.unlink("./HelloWorld.txt", (err) => {
  if (err) return console.error(err);

  console.log("Successfully deleted the file.");
});
