/* GET home page. */
const homelist = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.Perhaps with coffee, pizza, cake or a pint ? Let Loc8r help you find the place you 're looking for.",
        locations: [{
            name: 'Starcupses',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 5,
            facilities: ['Hot drinks', ' Food', ' Premium wifi'],
            distance: '400m'
        }, {
            name: 'Cafe Heero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', ' Food', ' Premium wifi'],
            distance: '200m'
        }, {
            name: 'Burger King',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 0,
            facilities: ['Food', ' Premium wifi'],
            distance: '250m'
        }, {
            name: 'Domino\'s Pizza',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 5,
            facilities: ['Hot drinks', ' Pizza', ' Premium wifi'],
            distance: '700m'
        }]
    });
};


/* GET location Info page. */
const locationInfo = (req, res) => {
    res.render('location-info', {
        title: 'Starcupes',
        pageHeader: { title: 'Starcupes' },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been there and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1QS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: { lat: 51.455041, lng: -0.9690884 },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: ' 7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: ' 8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                    author: '  Simon Holmes',
                    rating: 5,
                    timestamp: '  16 July 2013',
                    reviewText: 'What a great place. I can\'t say enough good things about it though.'
                },
                {
                    author: '  Charlie Chaplin',
                    rating: 3,
                    timestamp: '  16 June 2013',
                    reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast though.'
                }
            ]
        }
    });
};



/* GET add Review page. */
const addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcupes on Loc8r',
        pageHeader: { title: 'Review Starcupes' }
    });
};



module.exports = { homelist, locationInfo, addReview };