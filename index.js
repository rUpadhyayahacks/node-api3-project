// code away!
const server = require("./server.js");

const port = "http://localhost:5000";

server.listen(5000, () => {
  console.log(`\n** Server Running on ${port} **\n`);
});