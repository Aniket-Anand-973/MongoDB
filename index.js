const mongoose = require("mongoose");

main().then((res) => {
    console.log("Connection Successful");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.deleteMany({age: 48}) .them((res) => {
  console.log(res);
});

// User.findOneAndUpdate({name: "Bruce"},{age: 35})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });


// User.updateMany({age: {$gt: 48}},{age: 55})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.findById("66fe210a919389b97734acf6")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age: 50},
//   {name: "Peter", email: "peter@gmail.com", age:30},
//   {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res) =>{
//   console.log(res);
// });

// const user2 = new User({
//   name: "Eve",
//   email: "eve@yahoo.in",
//   age: 48,
// });

// user2
// .save()
// .then((res) =>{
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

