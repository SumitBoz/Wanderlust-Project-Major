const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapasync.js");
const EExpressError = require("../utils/EExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isreviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// reviews
//POST REVIEW ROUTE(we don,t create index or show route bcz only review is show by any post not seen indivisaully)
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//DELETE REVIEW ROUTE
router.delete("/:reviewId", isLoggedIn, isreviewAuthor,
    wrapAsync(reviewController.destroyReview));

//2nd part->lsiting
// app.get("/testListing", async(req, res) => {
//     let samplelisting = new Listing({
//         title: "My new villa",
//         description: "by the bearch",
//         price: 1200,
//         location: "Calangute, Goa",
//         country:"india",
//     });

//     await samplelisting.save();
//     console.log("sample was saved");
//     res.send("sucessfull testing");   
// });
module.exports = router;