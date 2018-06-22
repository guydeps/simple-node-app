const http = require("http");
const port = process.env.PORT || 3000;

const handler = (req, res) => {
    console.log("Server received request");
    res.end("Hello from Azure git !!!");
};

const server = http.createServer(handler);

server.listen(port, () => {
    console.log(`Listening on port:${port}`);
});