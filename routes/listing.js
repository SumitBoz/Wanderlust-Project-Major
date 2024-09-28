const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapasync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js"); 
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

router.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
      wrapAsync(listingController.createListing)
    );



//NEW ROUTE
router.get("/new", isLoggedIn,listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
       wrapAsync(listingController.updateListing))
.delete(
    isLoggedIn,
     isOwner,
    wrapAsync(listingController.destroyListing));

//CREATE ROUTE
// app.post("/listings", async(req, res, next) => {
    // let {title, description, image, price, country, location} = req.body;
    //yaha to upper wala likha nhitoh new.ejs me change karke yeh likho
//     try {
//         const newListing = new Listing(req.body.listing);
//         await newListing.save();
//         res.redirect("/listings");
//     } catch(err) {
//         next(err);
//     }
// });

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn, isOwner,  wrapAsync(listingController.renderEditForm));

module.exports = router;