const express = require("express");
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")
const items = ["buy food",]
const workItem = []
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))


app.get("/", function (req, res) {

    let day = date.getDay()


    res.render("list", {
        listTitle: day,
        newItems: items
    });




});


app.post("/", function (req, res) {
    console.log(req.body)

    var item = req.body.newItem;

    if (req.body.list === "work") {

        workItem.push(item)
        res.redirect("/work")


    } else {
        items.push(item)
        res.redirect("/")

    }



})


app.get("/work", function (req, res) {
    res.render("list", { listTitle: "work list", newItems: workItem })
})

app.get("/about", function (req, res) {
    res.render("about", { author: "Tahur" })
})


// app.post("/work", function (req, res) {

//     var item = req.body.newItem;

//     console.log(item)



//     res.redirect("/")

// })

app.listen(3000, function () {
    console.log("server started on port 3000");
})