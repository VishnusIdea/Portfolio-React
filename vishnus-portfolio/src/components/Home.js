import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';
import './Home.css';
import { FaReact } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";


const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };


    useEffect(() => {
        handleHashChange()
        const createBurst = () => {
            const animContainer = document.querySelector('.animation-container');
            const burst = document.querySelector('.burst');
            burst.style.top = Math.random() * window.innerHeight + 'px';
            burst.style.left = Math.random() * window.innerWidth + 'px';
            const burstClone = burst.cloneNode(true);
            animContainer.appendChild(burstClone);
            setTimeout(() => burstClone.remove(), 2000);
        };

        const interval = setInterval(createBurst, 200);
        return () => clearInterval(interval);
    }, []);



    const handleClick = () => {
        document.getElementById('box').style.transform = "translateX(0)"
    };

    const handleHashChange = () => {
        if (window.location.hash === '#about') {
            document.getElementById('box').style.transform = 'translateX(0)';
        }
    };

    window.addEventListener('hashchange', handleHashChange);


    window.onload = function () {
        var tabs = ['Languages', 'Frontend', 'Backend'];
        tabs.forEach(function (tab) {
            document.getElementById(tab).classList.add('active-tab');
        });
    }

    function setActiveTab(tab) {
        var tabs = ['Languages', 'Frontend', 'Backend'];
        tabs.forEach(function (t) {
            document.getElementById(t).classList.remove('active-tab');
            document.getElementById(t + '-link').classList.remove('active-link');
        });
        document.getElementById(tab).classList.add('active-tab');
        document.getElementById(tab + '-link').classList.add('active-link');
    }



    const images = [
        "./images/slide1.png",
        "./images/slide2.png",
        "./images/slide3.png",
        "./images/slide4.png",
        "./images/slide5.png",
    ]


    const collectionofdata = [
        {
            heading: "Introducing Do U Know - Your Gateway to Career Excellence-Website",
            content: "Do U Know for a seamless job search experience. Showcase your strengths with a detailed profile and discover opportunities across various industries. Your privacy is safeguarded.",
            images: ["./images/slide1-img1.png", "./images/slide1-img2.png", "./images/slide1-img3.png", "./images/slide1-img4.png"],
        },
        {
            heading: "Overview of Avengers-Themed Website",
            content: "The provided HTML code forms an Avengers-themed website with a main page and individual character pages for Iron Man, Hulk, and Thor, each linked to its own CSS file for styling. The pages include images, descriptions, and autoplay audio, offering an immersive experience. The main page features navigation buttons linking to these character pages. The design is responsive and consistent, though minor HTML errors and the use of autoplay could be refined for better user experience.",
            images: ["./images/slide2-img1.png", "./images/slide2-img2.png", "./images/slide2-img3.png", "./images/slide2-img4.png"],
        },
        {
            heading: "Overview of Web-based Game and Login Form Implementation",
            content: "The HTML files set up a login page with a basic layout and a game page with a game area containing a movable character and an animated block. The CSS styles these elements, ensuring the game container and its components are displayed correctly with animations. JavaScript adds interactivity, allowing the character to move left or right with arrow keys or touch controls and detects collisions with the falling block, triggering a game over alert when a collision occurs.",
            images: ["./images/slide3.png", "./images/slide3-img1.png", "./images/slide3-img2.png", "./images/slide3-img3.png"],
        },
        {
            heading: "Website Design and Style",
            content: "This HTML and CSS code sets up a personal website for Vishnu, featuring links to his developed games and sample programs. The layout includes a background image and color, with styled buttons for each link. For smaller screens (under 600px), the design adjusts by changing the background image and resizing elements to fit better. Button hover effects, which turn the background black, provide interactive feedback to users.",
            images: ["./images/slide4.png", "./images/slide4-img1.png", "./images/slide4-img2.png", "./images/slide4-img3.png"],
        },
        {
            heading: "BMI Calculator React App with Validation",
            content: "Frontend is react then backend is SQLThis React code creates a BMI calculator application. It uses useState to manage height, weight, BMI value, BMI status, and error messages. Users input height and weight, which are validated as numeric. The calculateBmi function computes BMI and sets the status based on BMI ranges. If inputs are invalid, an error message is displayed. The clearAll function resets all fields. The CSS styles the layout with a centered, responsive design and interactive buttons.",
            images: ["./images/slide5.png"],
        },
    ];

    const [viewedData, setViewedData] = useState(null);

    const loadData = (index) => {
        setViewedData(collectionofdata[index]);
    };

    const closeFullImg = () => {
        setViewedData(null);
    };



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [thankYouMessage, setThankYouMessage] = useState(false);

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    };

    const validateForm = () => {
        if (name.trim() === '') {
            alert('Name must be filled out.');
            return false;
        }

        if (email.trim() === '') {
            alert('Email must be filled out.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (message.trim() === '') {
            alert('Message must be filled out.');
            return false;
        }

        return true;
    };
    const form = document.forms['submit-to-google-sheet']
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(new FormData(form));
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message));
            setThankYouMessage(true);
            setName('');
            setEmail('');
            setMessage('');
        }
    };


    const scriptURL = `https://script.google.com/macros/s/AKfycbxnlbYJEwkdAcRpHKNzcT9QcVNgMSgjLDdpDEgbxFqdvYEgZZzi6BSwpny2YjaDcs7M/exec`









    return (
        <div className="App">
            <div className="animation-container">
                <div className="burst">
                    <div className="line"></div>
                </div>
            </div>
            <div className={`sticky ${menuOpen ? 'open' : ''}`}>
                <div className="header">
                    <h1 href="#" className="name">Vishnu V</h1>
                    <nav>
                        <ul>
                            <ul id="sidemenu" style={{ right: menuOpen ? '0' : '-200px' }}>
                           <i> <FaTimes onClick={closeMenu} /></i>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#mywork">My Work</a></li>
                                <li><a href="#contact">Contact Me</a></li>
                            </ul>
                        </ul>
                       <i> <FaBars onClick={openMenu} /></i>
                    </nav>
                </div>
            </div>

            <section id="home">
                <h1>&nbsp;</h1>
                <div className="home-content">
                    <div>
                        <h1>I'm <span title="heading-span">Vishnu V</span></h1>
                        <p>
                            I am a recent BCA graduate with a strong foundation in web development and programming.<br />
                            I have hands-on experience in HTML, CSS, JavaScript, and React, as well as a solid understanding of SQL
                            and .NET technologies.<br />
                            I developed a project named "Do U KNOW" using React, showcasing my skills in front-end development
                            and UI design.<br />
                            I am eager to apply my knowledge and skills to contribute to innovative projects in a dynamic work
                            environment.<br />
                            My goal is to continue growing as a developer and to be part of a team that challenges me to learn
                            and excel.
                        </p>
                        <button><a href="VISHNU V.pdf" download>DOWNLOAD CV</a></button>
                    </div>
                    <div className="bg">
                        <img src="/images/image.png" alt="boy-image" className="home-img" id="reloadImage" onClick={handleClick} />
                    </div>
                </div>
            </section>



            <section id="about">
                <div className="about">
                    <h1 target="heding">About &nbsp;<span title="heding-span" ing-sp>Me</span></h1>
                    <div id="box" className="about-box">
                        <div className="about-card">
                            <h1>I’m <span>Full Stack Developer</span></h1>
                            <ul>
                                <li>I'm always ready to challenge myself and explore new areas of work.</li>
                                <li>I never stop learning and for me, each new project is another adventure.</li>
                                <li>Looking for a challenging role in the IT sector to enhance skills and grow in the same</li>
                                <li>I'm able to work in the 3 major areas of web development: <span>Frontend, Backend,</span> and the <span>Database</span>.</li>
                            </ul>
                        </div>
                        <br /><br />
                        <img src="./images/boy-with-rope.png" alt="boy" className="about-img" id="reloadImage" onClick={handleClick} />
                    </div>
                    <br /><br />



                    <h1 title="sub-heading">Lin <span title="span">ks</span></h1>
                    <div className="about-links">
                        <li>
                            <h1>
                                <a href="https://www.linkedin.com/in/vishnu-vijayakumar-893925221/" className="app-img1">
                                    <FaLinkedin /> Linkedin
                                </a>
                            </h1>
                        </li>
                        <li>
                            <h1>
                                <a href="https://github.com/VishnusIdea" target="_blank" rel="noopener noreferrer" className="app-img2">
                                    <FaGithubSquare /> Github
                                </a>
                            </h1>
                        </li>
                        <li>
                            <h1>
                                <a href="mailto:vishnuvijayakumar25vv@gmail.com?subject=Hey Vishnu V, I visited your website&body=Hello"
                                    target="_blank" rel="noopener noreferrer" className="app-img3">
                                    <FaEnvelope /> Email
                                </a>
                            </h1>
                        </li>
                    </div>
                    <br /><br />

                    <h1 title="sub-heading">My &nbsp;<span title="span">Skills</span></h1>
                    <br /><br />
                    <div className="about-skills">
                        <div className="skills-titles">
                            <p id="Languages-link" className="title-link" onClick={() => setActiveTab('Languages')}>Languages</p>
                            <p id="Frontend-link" className="title-link" onClick={() => setActiveTab('Frontend')}>Frontend</p>
                            <p id="Backend-link" className="title-link" onClick={() => setActiveTab('Backend')}>Backend</p>
                        </div>
                        <div className="details">
                            <div id="Languages" className="skills-contents">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="skills-circle"></div>
                                                <img src=".\images\c++-logo.jpg" alt="C++ logo" className="skills-img" />
                                            </td>
                                            <td>
                                                <div className="skills-circle"></div>
                                                <img src=".\images\c sharp.png" alt="C# logo" className="skills-img" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="Frontend" className="skills-contents">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="skills-circle"></div>
                                                <img src=".\images\HTML-Logo.png" alt="HTML logo" className="skills-img" />
                                            </td>
                                            <td>
                                                <div className="skills-circle"></div>
                                                <img src=".\images\css-Logo.jpg" alt="CSS logo" className="skills-img" />
                                            </td>
                                            <td>
                                                <div className="skills-circle"></div>
                                                <img src=".\images\JavaScript-logo.png" alt="JavaScript logo" className="skills-img" />
                                            </td>
                                            <td>
                                                <div className="skills-circle"></div>
                                                <img src=".\images\react-Logo.png" alt="React logo" className="skills-img" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="Backend" className="skills-contents">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="skills-circle"></div>
                                                <img src=".\images\api-logo.jpg" alt="API logo" className="skills-img" />
                                            </td>
                                            <td>
                                                <div className="skills-circle"></div>
                                                <img src=".\images\firestore-Logo.jpg" alt="Firestore logo" className="skills-img" />
                                            </td>
                                            <td>
                                                <div className="skills-circle"></div>
                                                <img src=".\images\sql-logo.jpg" alt="SQL logo" className="skills-img" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="mywork">
                <div className="work">
                    <h1 target="heding">My &nbsp;<span title="heding-span"> Work</span></h1>
                    <div className="work-viewport">
                        <ol className="image-viweport">
                            <li className="slide">
                                <div className="img-gallery">
                                    <div className="snapper" style={{ backgroundImage: `url(${images[0]})` }} id="clilck1"
                                        onClick={() => loadData(0)}>   </div>
                                </div>
                            </li>

                            <li className="slide">
                                <div className="snapper" style={{ backgroundImage: `url(${images[1]})` }} onClick={() => loadData(1)}> </div>
                            </li>
                            <li className="slide">
                                <div className="snapper" style={{ backgroundImage: `url(${images[2]})` }} onClick={() => loadData(2)}> </div>
                            </li>
                            <li className="slide">
                                <div className="snapper" style={{ backgroundImage: `url(${images[3]})` }} onClick={() => loadData(3)}></div>
                            </li>
                            <li className="slide">
                                <div className="snapper" style={{ backgroundImage: `url(${images[4]})` }} onClick={() => loadData(4)}> </div>
                            </li>
                        </ol>
                    </div>


                </div>
            </section>

            {viewedData && (
                <div className="full-img" id="fullImgBox" style={{ display: 'flex' }}>
                    <span onClick={closeFullImg}>X</span>
                    <div className="imagebox">
                        <div className="textdata">
                            <h3 id="boxheading">{viewedData.heading}</h3>
                            <p id="content">{viewedData.content}</p>
                        </div>

                        <div className="container-view">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="cards">
                                            <img src={viewedData.images[0]} alt="output" id="img1" />
                                        </td>
                                        <td className="cards">
                                            <img src={viewedData.images[1]} alt="output" id="img2" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="cards">
                                            <img src={viewedData.images[2]} alt="output" id="img3" />
                                        </td>
                                        <td className="cards">
                                            <img src={viewedData.images[3]} alt="output" id="img4" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            <section id="contact">
                <h1 target="heding">Contact &nbsp;<span title="heding-span" ing-sp> Me</span></h1>
                <div className="contact">
                    <div className="contact-form">
                        <h2>Send your Reviews through this form</h2>
                        <form id="contactForm" name="submit-to-google-sheet" onSubmit={handleSubmit} >
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="Name"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="Email"
                                    placeholder="Enter email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="Message"
                                    placeholder="Your Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                        {thankYouMessage && (
                            <div id="thankYouMessage">
                                <p>Thank you for visiting this webpage!</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="footer">
                    <h3>&copy; Made by <span title="heding-span">Vishnu V </span> with React js. <FaReact /></h3>
                    <a href="https://www.linkedin.com/in/vishnu-vijayakumar-893925221/">
                        <i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/VishnusIdea">
                        <i className="fab fa-github-square"></i> </a>
                    <a href="mailto:vishnuvijayakumar25vv@gmail.com?subject=Hey Vishnu V,  I visited your website&body=Hello">
                        <i className="far fa-envelope"></i></a>
                </div>
            </section>
        </div>

    );
}


export default Home;
