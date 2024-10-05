const mongoose = require("mongoose");

main()
.then((res) => {
    console.log("Connection Successful");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fixion"],
    },
    genre: [String],
});

const Book = mongoose.model("Book",booksSchema);

Book.findByIdAndUpdate("66ff614bd24117e7ad7b5a53", 
    {price: -100}, 
    {runValidators: true})
 .then((res) =>{
    console.log(res);
 })
 .catch((err) =>{
    console.log(err.errors.price.properties.message);
 });

// let book1 = new Book({
//     title: "Marbal Comics v2",
//     author: "Aniket",
//     price: 500,
//     genre: ["comics","superheroes","function"],
// });
// book1
// .save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });