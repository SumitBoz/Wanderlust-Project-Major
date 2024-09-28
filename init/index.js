const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => { //jitna pehle data tha sabko del karke data.js wala sab insert kara h
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner:'66d8b511d2073de609fccb36'}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();


