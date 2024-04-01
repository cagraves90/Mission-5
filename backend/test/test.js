const serverPort = require("../index.js");
const net = require("net");

afterAll(async () => {
  await new Promise((resolve) => serverPort.close(resolve));
});

// ---------------------------------------------- Test Cases ----------------------------------------------

describe("Server Connection", () => {
  test("should be listening on port 4000", (done) => {
    const client = net.createConnection({ port: 4000 }, () => {
      client.end(); // close the connection
      done();
    });

    client.on("error", done); // if there's an error, pass it to done
  });
});
