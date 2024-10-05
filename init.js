const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then((res) => {
    console.log("Connection Successful");
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = [
    {
        from:"neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date()  
    },

    {
        from:"Aniket",
        to: "Abhishek",
        msg: "send me your cv",
        created_at: new Date()  
    },
    {
        from:"Abhishek",
        to: "Aditya",
        msg: "send me your code",
        created_at: new Date()  
    },
    {
        from:"Gulshan",
        to: "Raushan",
        msg: "send me your js notes",
        created_at: new Date()  
    },
    {
        from:"Raushan",
        to: "Anish",
        msg: "send me your project code",
        created_at: new Date()  
    },
    
]

Chat.insertMany(allChats);
