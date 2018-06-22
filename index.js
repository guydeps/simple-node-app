const http = require("http");
const port = process.env.PORT || 3000;

const handler = (req, res) => {
    console.log("Server received request");
    console.log(process.env.CONNECTION_STRING);
    res.end("Hello from github AGAIN!!!!!!!!");
};

const server = http.createServer(handler);

server.listen(port, () => {
    console.log(`Listening on port:${port}`);
});