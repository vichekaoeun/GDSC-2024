var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Product = require('./models/testModel');
const User = require('./models/userModel');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello")
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

// GET from database
app.get('/profile', async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET by ID from database
app.get('/profile/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username: username });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST to database
app.post('/profile', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
})

// Update data in database
app.put('/profile/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const updatedUser = await User.findOneAndUpdate({ username: username }, req.body, { new: true });

    // If the profile doesn't exist
    if (!updatedUser) {
      return res.status(404).json({ message: `Cannot find profile with username ${username}` });
    }

    // If the profile is successfully updated
    res.status(200).json(updatedUser);
  } catch (error) {
    // If an error occurs during the update process
    res.status(500).json({ message: error.message });
  }
});

// Delete data from database
app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: `cannot find product with ID ${id}` })
    }
    res.status(200).json(product);
  } catch {
    res.status(500).json({ message: error.message })
  }
})

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://vichekaoeun:bQLgz9LQ3z6fst43@cluster0.rnwirof.mongodb.net/?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB)
    .then(() => {
      console.log('Database Connected!');
      app.listen(3001, () => {
        console.log(`Running on port 3001`);
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
module.exports = app;