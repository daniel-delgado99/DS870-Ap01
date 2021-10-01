const express = require("express");
const app = express();

const router =  require("./routes");
const port = 12345;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log('listening on port', port);
})

