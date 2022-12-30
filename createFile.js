const fs = require("fs");

fs.writeFile("./HelloWorld.txt", "Hello World!", (err) => {
  if (err) return console.error(err);
  console.log("Successfully created the file.");
});
