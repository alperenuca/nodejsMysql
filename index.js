const express = require("express");
const app = express();

app.set("view engine","ejs");

app.use(express.static('public'));
app.use(express.static('node_modules'));

const data = [
    {id: 1, name: "iphone 14", price: 30000, isActive: true, imageUrl: "a.jpeg" },
    {id: 2, name: "iphone 15", price: 40000, isActive: false, imageUrl: "b.jpeg" },
    {id: 3, name: "iphone 16", price: 50000, isActive: true, imageUrl: "c.jpeg" }
];

// routes

app.use("/products/:id", function(req, res) {
    const urun = data.find(u => u.id == req.params.id);
    res.render("product-details", urun);
});

app.use("/products", function(req, res) {
    res.render("products", {
        urunler: data
    });
});

app.use("/", function(req, res) {
    res.render("index");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});