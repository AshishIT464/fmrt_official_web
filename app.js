const express = require("express");
const path = require("path");

const app = express();

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Body Parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/news", (req, res) => res.render("news"));
app.get("/careers", (req, res) => res.render("careers"));
app.get("/contact", (req, res) => res.render("contact"));

// Contact Form
app.post("/contact", (req, res) => {
    const { firstName, lastName, email, inquiryType, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).send("Please fill out all required fields.");
    }

    console.log("----- FMRT Contact Form -----");
    console.log({
        firstName,
        lastName,
        email,
        inquiryType,
        message
    });
    console.log("-----------------------------");

    res.redirect("/contact");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});