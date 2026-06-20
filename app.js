const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to serve static files (CSS, JS, Images, Videos)
app.use(express.static('public'));

// Middleware to parse incoming URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- GET ROUTES (Render the Pages) ---
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/news', (req, res) => res.render('news'));
app.get('/careers', (req, res) => res.render('careers'));
app.get('/contact', (req, res) => res.render('contact'));

// --- POST ROUTE (Handle Form Submissions) ---
app.post('/contact', (req, res) => {
    const { firstName, lastName, email, inquiryType, message } = req.body;
    
    if (!firstName || !lastName || !email || !message) {
        return res.status(400).send("Please fill out all required fields.");
    }

    console.log("--- New FMRT Contact Form Submission ---");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Inquiry Type: ${inquiryType}`);
    console.log(`Message: ${message}`);
    console.log("----------------------------------------");

    res.redirect('/contact');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});