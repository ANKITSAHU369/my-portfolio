import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */




export const info = {
    firstName: "Ankit",
    lastName: "Sahu",
    initials: "Ankit Sahu", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Frontend Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled By Coffee'
        },
        {
            emoji: '🏡',
            text: 'Ind Cg 07'
        },
        {
            emoji: "💼",
            text: "Freelancing"
        },
        {
            emoji: "📧",
            text: "anksa369@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/profile.php?id=100007371785768",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/ANKITSAHU369",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ankit-sahu-om369/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/iankitsahu",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Self-motivated and enthusiastic engineer with knowledge of programming languages and Web-development fundamentals.Completed B. Tech in year 2020 and thereafter Post Graduate Diploma in Computer Application in year 2021, Along with 6months of web development certification course in September 2022, Currently brushing up skills on the softwaredevelopment tools and expanding employment opportunity in IT and Tech industries for better advancement in my careerand to serve the company at the best of my ability.",
    skills:
        {
            proficientWith: ['html-5', 'css-3','javascript', 'react', 'git', 'github', 'bootstrap', 'figma','ui/ux'],
            exposedTo: ['Frontend Development']
        }
    ,
    hobbies: [
        {
            label: 'Fitness Workout',
            emoji: '🏋️‍♂️'
        },
        {
            label: 'Sci-fi Movies',
            emoji: '🎥'
        },
        {
            label: 'Novels',
            emoji: '📚'
        },
        {
            label: 'Cooking',
            emoji: '🥘'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Buddhism UI",
            live: "https://buddhism-ui.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            // source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Blogging Website",
            live: "https://blogging-website-react-next.netlify.app/",
            // source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Seat Booking Management",
            live: "https://seat-booking-system.netlify.app/",
            // source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Pharmacy Management Website ",
            live: "https://pharmacy-management.netlify.app/",
            // source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Nuuk Housing Website",
            live: "https://ankitsahu369.github.io/Nuuk-Website/",
            // source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}