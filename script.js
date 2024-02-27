const express = require('express');
const app = express();

// Define reviews for each service
const reviews = {
    "San Diego Refugee Tutoring": "Great experience volunteering here! The staff is very supportive.",
    "Youth Court": "Interesting program! Enjoyed participating as a youth judge.",
    "Balboa Natural History Museum": "Had a wonderful time volunteering at the museum. Learned a lot about local wildlife!",
    "Step Up": "A rewarding experience mentoring young girls. Highly recommend!",
    "Children Rising": "Enjoyed tutoring students and seeing their progress over time.",
    "Seattle Animal Shelter": "Volunteering here was heartwarming. Loved helping animals find their forever homes.",
    "God's Love We Deliver": "A meaningful way to give back to the community by cooking and delivering meals.",
    "Horse Play Therapy Center": "Such a fulfilling experience working with children with special needs.",
    "Community Servings Food Heals": "Helping deliver food to families in need was a humbling experience.",
    "Emmaus": "Engaging in efforts to prevent human trafficking and exploitation is crucial. Glad to be a part of Emmaus."
};

// Define a route to handle review requests
app.get('/review', (req, res) => {
    const service = req.query.service;
    const review = reviews[service] || "No reviews available for this service.";
    res.json({ reviews: review });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
