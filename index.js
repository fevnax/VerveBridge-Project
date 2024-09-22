import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Static pages
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("partials/header.ejs");
});

app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});