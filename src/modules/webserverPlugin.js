const server = require("./webserver");

module.exports = ({ config }) => {
  server.listen(8000);
};
//byt port till 3000 test
