# Wanderlust 🌍
A full-stack web application designed for travelers to explore, review, and share their experiences about various destinations.

Live Demo: https://sumit-wanderlust-project-major.onrender.com/listings

# Table of Contents
1.Introduction
2.Features
3.Technologies
4.Installation
5.Usage
6.Screenshots
7.Contributing
8.License
9.Acknowledgements

# Introduction
Wanderlust is a platform built for travel enthusiasts to discover new places, leave reviews, and interact with other users. It integrates a user-friendly interface with a secure back-end to ensure smooth navigation and interaction.

# Features
User Authentication (Login/Signup with Passport.js)
CRUD functionality for listings and reviews
Flash notifications for successful or failed operations
Dynamic form validation and error handling
Secure session management using MongoDB
Responsive front-end design for optimal user experience
Admin functionality to manage listings and users

# Technologies
Front-End:
EJS (Embedded JavaScript Templates)
HTML5/CSS3
JavaScript
Back-End:
Node.js with Express.js framework
MongoDB and Mongoose for database management
Passport.js for authentication
MongoStore for session handling
Other Tools:
Method Override (for PUT and DELETE requests)
Connect-Flash for flash messages
EJS-Mate for advanced EJS layouts

# Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
Install the necessary dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env file in the root directory and add your MongoDB connection string and other secret keys:

bash
Copy code
ATLASDB_URL=your_mongodb_url
SECRET=your_secret_key
Start the server:

bash
Copy code
node app.js
Open your browser and navigate to http://localhost:8080.

# Usage
Browse the Listings page to view travel destinations.
Sign up or log in to post new listings or leave reviews.
Edit or delete your listings or reviews from your profile.

# Screenshots
Add screenshots of your application in action to give users a better idea of the UI/UX.

# Contributing
If you'd like to contribute to Wanderlust, feel free to fork the repository and submit a pull request. Any feedback or improvements are welcome!

# License
This project is licensed under the MIT License. See the LICENSE file for more details.

# Acknowledgements
Special thanks to my mentor Sharapha Kahpda for guiding me throughout the development of this project.
Thanks to the open-source community for the amazing tools and libraries used in this project.
