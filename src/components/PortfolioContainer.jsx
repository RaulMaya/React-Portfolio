import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './pages/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Connect from './pages/Connect';

const developer = [
    {
        title: "Geographical Hazards",
        description:
            "The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.",
        url: "https://github.com/RaulMaya/Geographical-Hazards",
        libraries: ["Leaflet.js", "GeoJSON", "JavaScript"],
        image: "./Projects/Earthquakes.png",
    },
    {
        title: "Exoplanets Machine Learning",
        description:
            "Over a period of nine years in deep space, the NASA Kepler space telescope has been out on a planet-hunting mission to discover hidden planets outside of our solar system. To help process this data, you will create machine learning models capable of classifying candidate exoplanets from the raw dataset.",
        url: "https://github.com/RaulMaya/Kepler-Telescope-Search",
        libraries: ["Sklearn", "Plotly", "Python"],
        image: "./Projects/Exoplanets.png",
    },
    {
        title: "Mars Web Scraping",
        description:
            "This project is a web application that scrapes data from various websites related to the Mission on Mars, the app will store the scraped information in a database and display the information in a single HTML page.",
        url: "https://github.com/RaulMaya/Mars-Mission-Scraping",
        libraries: ["Flask", "BeautifulSoup", "Python"],
        image: "./Projects/MarsScraping.png",
    },
    {
        title: "Notes App",
        description:
            "This Note Taker App project is a simple note-taking application built using Node.js and the Express.js framework. The application allows users to create, view, and delete notes, and all notes are stored in a JSON file.",
        url: "https://github.com/RaulMaya/Notes-App",
        libraries: ["JavaScript", "Node.js", "Heroku"],
        image: "./Projects/NotesApp.png",
    },
    {
        title: "Nuevo Leon Elections",
        description:
            "Explore Nuevo Leon's election results from 2021 and its evolution from past election to discover the main sociodemographic metrics effect over the people’s voting preference.",
        url: "https://github.com/RaulMaya/Nuevo_Leon_Elections",
        libraries: ["JavaScript", "Python", "ETL"],
        image: "./Projects/NuevoLeonElections.png",
    },
    {
        title: "Soccer Quiz",
        description:
            "This project consist in a challenging quiz, with 10 questions about football that will even put to sweat to true fans of this sport. Give it a try, and check how much you know about football.",
        url: "https://github.com/RaulMaya/Football-Quiz",
        libraries: ["JavaScript", "CSS", "HTML"],
        image: "./Projects/SoccerQuiz.png",
    },
    {
        title: "Tech Blog",
        description:
            "Tech blog using express.js and handlebars.js. Check the latest new and posts in the tech world, and the latest updates on this field.",
        url: "https://github.com/RaulMaya/Tech-Blog",
        libraries: ["Handlebars.js", "Node.js", "Sequelize.js"],
        image: "./Projects/TechBlog.png",
    },
    {
        title: "ThermoFoods App",
        description:
            "This project focuses on helping people control their weight by selecting healthy recipes that are appropriate for the current weather. Using two APIs, one for recipes and the other for obtaining the current temperature using geolocation, the application provides options for light and fresh meals on hot days and options for more caloric meals on cold days.",
        url: "https://github.com/RaulMaya/ThermoFood-App",
        libraries: ["JavaScript", "CSS", "HTML"],
        image: "./Projects/ThermoFoods.png",
    },
    {
        title: "Tottenham Blog",
        description:
            "This project is a Django Blog App about my favorite soccer team Tottenham Hotspurs. The objective of this project was to develop and challenge my Django skills, in an interactive and entertained way. In this application, you can read my opinions about Tottenham Hotspurs news, and also you can create your account and save your favorite posts or your read later posts.",
        url: "https://github.com/RaulMaya/Spurs-Blog",
        libraries: ["Django", "AWS", "Python"],
        image: "./Projects/TottenhamBlog.png",
    },
    {
        title: "WeatherApp",
        description:
            "This project consists in a building a weather dashboard using server side APIs to populate the information in the application, it also uses JavaScript and CSS to provide a polish user interface and user experience.",
        url: "https://github.com/RaulMaya/Weather-Dashboard",
        libraries: ["JavaScript", "CSS", "HTML"],
        image: "./Projects/WheatherApp.png",
    },
];

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Header');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Header') {
            return <Header />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects developer={developer} />
        }
        return <Connect />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}