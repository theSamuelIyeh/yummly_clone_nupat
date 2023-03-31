if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const feedRouter = require("./routes/feeds");
const categoryRouter = require("./routes/categories");
const reviewRouter = require("./routes/reviews");
const tagRouter = require("./routes/tags");
const indexRouter = require("./routes/index");

app.use(bodyParser.json());
app.use("/feeds", feedRouter);
app.use("/categories", categoryRouter);
app.use("/reviews", reviewRouter);
app.use("/tags", tagRouter);
app.use("/", indexRouter);

app.use(express.static(__dirname + '/public'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port: ${port}`));
