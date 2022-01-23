import express from 'express';
const PORT = 3000;

const app = express();

app.get("/", (request, response) => {
    response.send("Hello World!");
});

app.listen(PORT, (req, res) => {
    console.log(`Server listening on port ${PORT}`);
});