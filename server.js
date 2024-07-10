const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data

app.post('/submit_contact', (req, res) => {
   let name = req.body.name;
   let email = req.body.email;
   let message = req.body.message;

   // Here you can now do whatever you want with the data, like save it in a database

   res.send('Form data received');
});
  
app.listen(3000, () => {
   console.log('Server is running on port 3000');
});