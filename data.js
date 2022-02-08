var app = angular.module('businessFinder', []);
            app.controller('myController', function($scope,$location,$anchorScroll) {
                $scope.categories = ["Restaurants", "Schools","Cake Shops"];
                $scope.locations = ["Mumbai","Andheri","BKC","Juhu"];
                $scope.businesses = [
                    // ****Restaurants****
                    {
                        name:"Pink Wasabi", 
                        rating:4, 
                        location:"Juhu, Mumbai", 
                        detail:"Thai, Chinese, Asian", 
                        timings:"12 noon - 12 midnight", 
                        more:"Known for:\nAmbience, Humble Staff,\nAttractive Location",
                        website:"http://pinkwasabi.in/", 
                        image:"images/Pink Wasabi.jpg",
                        contact: ["072088 62235","072088 62234"],
                        category:"Restaurants"
                    },
                    {
                        name:"Thyme & Whisk", 
                        rating:5, 
                        location:"Juhu, Mumbai", 
                        detail:"Multi-cuisine", 
                        timings:"11 am - 12 midnight", 
                        more:"Known for:\nLighting, Hospitality,\nVibe, Music, Menu", 
                        website:"https://www.thymeandwhisk.com/", 
                        image:"images/Thyme & Whisk.png",
                        contact:["085916 48051"],
                        category:"Restaurants"
                    },
                    {
                        name:"Yauatcha",
                        rating:3,
                        location:"BKC, Mumbai",
                        detail:"Asian, Chinese, Seafood",
                        timings:"12 noon - 1.30 am",
                        more:"Known for:\nModern Cantonese Cuisine\nAttractive Location",
                        website:"https://yauatcha.com/mumbai/",
                        image:"images/Yauatcha.png",
                        contact:["922 2222800","22 6138 8000","98201 92068"],
                        category:"Restaurants"
                    },
                    {
                        name:"1522 - Bar & Kitchen",
                        rating:4,
                        location:"Andheri, Mumbai",
                        detail:"Multi-cuisine",
                        timings:"12 noon - 1.30 am",
                        more:"Known for:\nRooftop, Live Music,\nLive Sports Screening",
                        website:"https://www.1522mumbai.com/",
                        image:"images/1522 - Bar & Kitchen.png",
                        contact:["9321940307","9321940308","9321940309"],
                        category:"Restaurants"
                    },
                    {
                        name:"Hitchki",
                        rating:4,
                        location:"BKC, Mumbai",
                        detail:"Multi-cuisine",
                        timings:"12 noon - 1.30 am",
                        more:"Known for:\nGood Staff, Ambience,\nNightlife, Bar",
                        website:"https://www.hitchki.co/",
                        image:"images/Hitchki.png",
                        contact:["2268464747"],
                        category:"Restaurants"
                    },
                    {
                        name:"Banana Leaf",
                        rating:5,
                        location:"Andheri, Mumbai",
                        detail:"South Indian, North Indian",
                        timings:"11 am - 12.30 am",
                        more:"Known for:\nGood Hygiene,\nThemed Decor",
                        website:"http://www.bananaleafindia.com/",
                        image:"images/Banana Leaf.png",
                        contact:["26239999","26289090","26709999","9930488080"],
                        category:"Restaurants"
                    },
                    {
                        name:"TAP Resto Bar",
                        rating:3,
                        location:"Andheri, Mumbai",
                        detail:"Multi-cuisine",
                        timings:"12 noon - 1.30 am",
                        more:"Known for:\nGood Dance Floor,\nPeppy Music, Pub",
                        website:"http://www.chinagategroup.com/tap",
                        image:"images/TAP Resto Bar.png",
                        contact:["916 766 6770","022 4263 1000"],
                        category:"Restaurants"
                    },
                    {
                        name:"Vedge",
                        rating:2,
                        location:"Andheri, Mumbai",
                        detail:"Asian, North Indian",
                        timings:"4 pm - 11.30 pm",
                        more:"Known for:\nPure Veg, Classy Decor,\nElegant Ambience",
                        website:"https://linktr.ee/vedgeindia",
                        image:"images/Vedge.png",
                        contact:["9820750025","022 61668906"],
                        category:"Restaurants"
                    },
                    {
                        name:"Pa Pa Ya",
                        rating:3,
                        location:"BKC, Mumbai",
                        detail:"Multi-cuisine",
                        timings:"12 noon - 12 midnight",
                        more:"Known for:\nExceptional Service,\nGood for dates, Sophisticated",
                        website:"https://www.gopapaya.co.in/",
                        image:"images/Pa Pa Ya.png",
                        contact:["7400433430","7400433431","022 49723996","022 49723997"],
                        category:"Restaurants"
                    },
                    // ****Schools****
                    {
                        name:"Dhirubhai Ambani",
                        rating:3,
                        location:"BKC, Mumbai",
                        detail:"Established 2003",
                        timings:"7 am - 8 pm",
                        more:"Co-educational\nEmail -\ninfo@dais.edu.in",
                        website:"https://www.dais.edu.in/",
                        image:"images/DAIS.jpg",
                        contact:["022 35637000","022 35637001","022 35637099"],
                        category:"Schools"
                    },
                    {
                        name:"Jamnabai Narsee",
                        rating:4,
                        location:"Juhu, Mumbai",
                        detail:"Established 1971",
                        timings:"8 am - 4 pm",
                        more:"Co-educational\nEmail -\ncontactus@jns.ac.in",
                        website:"https://www.jns.ac.in/",
                        image:"images/JNS.png",
                        contact:["022 69157575","022 69157576","022 26187575","022 26187576"],
                        category:"Schools"
                    },
                    {
                        name:"Billabong High",
                        rating:5,
                        location:"Juhu, Mumbai",
                        detail:"Established 1995",
                        timings:"7 am - 6 pm",
                        more:"Co-educational\nEmail -\ninfo.santacruz@billabonghighschool.com",
                        website:"https://www.billabonghighschool.com/mumbai-santacruz/",
                        image:"images/Billabong.png",
                        contact:["022 2661 3386","022 2661 3389"],
                        category:"Schools"
                    },
                    {
                        name:"Arya Vidya Mandir",
                        rating:4,
                        location:"BKC, Mumbai",
                        detail:"Established 1999",
                        timings:"7 am - 8 pm",
                        more:"Co-educational\nEmail -\navm@avmschools.ac.in",
                        website:"https://avmschools.ac.in/",
                        image:"images/AVM.png",
                        contact:["022 6101 3900"],
                        category:"Schools"
                    },
                    {
                        name:"Maneckji Cooper",
                        rating:4,
                        location:"Juhu, Mumbai",
                        detail:"Established 1959",
                        timings:"8am - 8 pm",
                        more:"Co-educational\nEmail -\noffice@maneckjicooperschool.org",
                        website:"https://maneckjicooperschool.org/",
                        image:"images/Maneckji.jpg",
                        contact:["022 26604312","022 26605211","022 26606397"],
                        category:"Schools"
                    },
                    {
                        name:"Divine Child",
                        rating:2,
                        location:"Andheri, Mumbai",
                        detail:"Established 1958",
                        timings:"6 am - 6 pm",
                        more:"All-girls school\nEmail -\ndivinechildcbseandheri@rediff.com",
                        website:"https://divinechildcbse.org/",
                        image:"images/Divine Child.png",
                        contact:["022 28321929"],
                        category:"Schools"
                    },
                    {
                        name:"Bombay Cambridge",
                        rating:3,
                        location:"Andheri, Mumbai",
                        detail:"Established 1993",
                        timings:"6.30 am - 7 pm",
                        more:"Co-educational\nEmail -\ninfo@bcseast.org",
                        website:"https://bcseast.org/",
                        image:"images/bcg.jpg",
                        contact:["02228205442","02228210309"],
                        category:"Schools"
                    },
                    // ****Cake Shops****
                    {
                        name:"7th Heaven",
                        rating:3,
                        location:"Andheri, Mumbai",
                        detail:"₹400 for two",
                        timings:"10 am - 1 am",
                        more:"Known for:\nPretty Decor,\nPerfect Presentation",
                        website:"https://www.7thheaven.in/",
                        image:"images/7th Heaven.png",
                        contact:["9395588862","9819543464","8879448372"],
                        category:"Cake Shops"
                    },
                    {
                        name:"Theobroma",
                        rating:4,
                        location:"BKC, Mumbai",
                        detail:"₹500 for two",
                        timings:"8 am - 12 midnight",
                        more:"Known for:\nCoffee Date, Pretty Decor,\nBeautiful Place",
                        website:"https://theobroma.in/",
                        image:"images/Theobroma.png",
                        contact:["918182881881"],
                        category:"Cake Shops"
                    },
                    {
                        name:"Haagen Dazs",
                        rating:3,
                        location:"Juhu, Mumbai",
                        detail:"₹800 for two",
                        timings:"11 am - 11:30 pm",
                        more:"Known for:\nTable Service,\nSeating, Packaging",
                        website:"https://www.haagendazsindia.com/",
                        image:"images/Haagen.png",
                        contact:["912249743338"],
                        category:"Cake Shops"
                    },
                    {
                        name:"Merwans Cake Stop",
                        rating:5,
                        location:"Andheri, Mumbai",
                        detail:"₹100 for two",
                        timings:"10 am - 8 pm",
                        more:"Known for:\nGood Hygiene, Variety,\nReasonable Costs",
                        website:"https://merwans.co.in/",
                        image:"images/Merwans.png",
                        contact:["8591826239","919820011600","919892080559"],
                        category:"Cake Shops"
                    },
                    {
                        name:"Monginis Bakery",
                        rating:4,
                        location:"Andheri, Mumbai",
                        detail:"₹300 for two",
                        timings:"9 am - 9.30 pm",
                        more:"Known for:\nAmazing Ambience,\nTasty Snacks",
                        website:"https://www.monginis.net/",
                        image:"images/Monginis.png",
                        contact:["912228373073","912232401326"],
                        category:"Cake Shops"
                    },
                    {
                        name:"Hangout Cakes",
                        rating:2,
                        location:"BKC, Mumbai",
                        detail:"₹300 for two",
                        timings:"9.30 am - 11.30 pm",
                        more:"Known for:\nVegetarian Only,\nReasonable Costs",
                        website:"https://hangoutcakes.com/",
                        image:"images/Hangout.png",
                        contact:["919321931290"],
                        category:"Cake Shops"
                    },
                    {
                        name:"Love, Sugar & Dough",
                        rating:3,
                        location:"BKC, Mumbai",
                        detail:"₹400 for two",
                        timings:"11.30 am - 12 midnight",
                        more:"Known for:\nConcept, Location,\nResonable Rates",
                        website:"https://lovesugardough.com/",
                        image:"images/LSD.png",
                        contact:["919322116666"],
                        category:"Cake Shops"
                    },
                    {
                        name:"Huber & Holly",
                        rating:5,
                        location:"Juhu, Mumbai",
                        detail:"₹700 for two",
                        timings:"6 pm - 11 pm",
                        more:"Known for:\nAmazing Taste,\nVariety of Desserts",
                        website:"https://www.huberandholly.com/",
                        image:"images/Huber & Holly.png",
                        contact:["917208656230","918657462298"],
                        category:"Cake Shops"
                    },
                    // },
                    // {
                    //     name:"",
                    //     rating:,
                    //     location:"",
                    //     detail:"",
                    //     timings:"",
                    //     more:"",
                    //     website:"",
                    //     image:"",
                    //     contact:[],
                    //     category:""
                    // },
                ];
                $scope.viewBusinesses = function() {
                    if ($scope.view == false) {
                        $scope.view = true;
                    }
                    $location.hash('businesses');
                    $anchorScroll();
                };
                $scope.scrollToTop = function () {
                    $location.hash('top');
                    $anchorScroll();
                }
            });
            