//For navbar responsive
// Initialization
const hamburger = document.querySelector('.hamburger');  //Initialization for hamburger
const navbar = document.querySelector('.navbar');        //Initialization for navbar

/*Navbar responsiveness starts here*/
hamburger.addEventListener('click', () => {             //Once the hamburder is click the navbar wil open and it will display as X
    navbar.classList.toggle('nav--open');              
    hamburger.classList.toggle('hamburger--open');
});
/*Navbar responsiveness ends here*/

//Initialization for Others section. Others section starts here.
//Ito yung to show the others section
const showOthersLink = document.getElementById('show-others');
const othersSection = document.querySelector('.others');

//Once others in navbar is click, others will be visible and the other navbar section will be invisible
showOthersLink.addEventListener('click', (e) => {          
    othersSection.classList.toggle('others--visible');  //This part where it has toggle this is responsible for showing the others section
    profileSection.classList.remove('profile--visible');  //This part where it has .remove this is responsible for removing the visibility of ibang naka open na section
    joanne.classList.remove('container-details--open');
    joanne.classList.remove('container-details--open');
    monica.classList.remove('container-details--open');
    danielle.classList.remove('container-details--open');
    angel.classList.remove('container-details--open');
    reymark.classList.remove('container-details--open');
    karl.classList.remove('container-details--open');
});

const showProfileLink = document.getElementById('show-profile');
const profileSection = document.querySelector('.profile');  //once the profile is click profile will be seen

//This is naman to show the profile information
showProfileLink.addEventListener('click', (e) => {
    profileSection.classList.toggle('profile--visible');
    othersSection.classList.remove("others--visible"); //Once the button is link this will be remove
    joanne.classList.remove('container-details--open');
    joanne.classList.remove('container-details--open');
    monica.classList.remove('container-details--open');
    danielle.classList.remove('container-details--open');
    angel.classList.remove('container-details--open');
    reymark.classList.remove('container-details--open');
    karl.classList.remove('container-details--open');
});

//Initialization for showing the knowledge status. Overall, this code is responsible for the control behaviour of showing the knowledge status
const showContainer1 = document.getElementById('show-container1');  
const joanne = document.getElementById('joanne');
const showContainer2 = document.getElementById('show-container2');
const monica = document.getElementById('monica');
const showContainer3 = document.getElementById('show-container3');
const danielle = document.getElementById('danielle');
const showContainer4 = document.getElementById('show-container4');
const angel = document.getElementById('angel');
const showContainer5 = document.getElementById('show-container5');
const reymark = document.getElementById('reymark');
const showContainer6 = document.getElementById('show-container6');
const karl = document.getElementById('karl');

//Show joanne's web development knowledge
showContainer1.addEventListener('click', () => {  //Once Joanne members button is click the its knowledge status is shown and the other open section is remove
    profileSection.classList.remove('profile--visible');
    joanne.classList.toggle('container-details--open'); // Toggle the visibility of Joanne's details
    othersSection.classList.remove("others--visible"); //Once the button is click this will be remove the others(so if open to and you click the button wala ng mag overflow)
    monica.classList.remove('container-details--open');
    danielle.classList.remove('container-details--open');
    angel.classList.remove('container-details--open');
    reymark.classList.remove('container-details--open');
    karl.classList.remove('container-details--open');
});

//Show Monica web development knowledge
showContainer2.addEventListener('click', () => {   //Once Monica members button is click the its knowledge status is shown and the other open section is remove
    monica.classList.toggle('container-details--open');
    profileSection.classList.remove('profile--visible');
    othersSection.classList.remove("others--visible");
    joanne.classList.remove('container-details--open');
    danielle.classList.remove('container-details--open');
    angel.classList.remove('container-details--open');
    reymark.classList.remove('container-details--open');
    karl.classList.remove('container-details--open');
});

//danielle
showContainer3.addEventListener('click', () => { //Once Danielle members button is click the its knowledge status is shown and the other open section is remove
    profileSection.classList.remove('profile--visible');
    othersSection.classList.remove("others--visible");
    danielle.classList.toggle('container-details--open');
    joanne.classList.remove('container-details--open');
    monica.classList.remove('container-details--open');
    angel.classList.remove('container-details--open');
    reymark.classList.remove('container-details--open');
    karl.classList.remove('container-details--open');
});

//angel
showContainer4.addEventListener('click', () => {  //Once Angel members button is click the its knowledge status is shown and the other open section is remove
profileSection.classList.remove('profile--visible');
othersSection.classList.remove("others--visible");
angel.classList.toggle('container-details--open');
danielle.classList.remove('container-details--open');
joanne.classList.remove('container-details--open');
monica.classList.remove('container-details--open');
reymark.classList.remove('container-details--open');
karl.classList.remove('container-details--open');
});

//reymark
showContainer5.addEventListener('click', () => { //Once Reymark members button is click the its knowledge status is shown and the other open section is remove
profileSection.classList.remove('profile--visible');
othersSection.classList.remove("others--visible");
reymark.classList.toggle('container-details--open');
danielle.classList.remove('container-details--open');
joanne.classList.remove('container-details--open');
monica.classList.remove('container-details--open');
angel.classList.remove('container-details--open');
karl.classList.remove('container-details--open');
});

//karl
showContainer6.addEventListener('click', () => { //Once karl members button is click the its knowledge status is shown and the other open section is remove
profileSection.classList.remove('profile--visible');
othersSection.classList.remove("others--visible");
karl.classList.toggle('container-details--open');
danielle.classList.remove('container-details--open');
joanne.classList.remove('container-details--open');
monica.classList.remove('container-details--open');
angel.classList.remove('container-details--open');
reymark.classList.remove('container-details--open');
});


//showing the login popup
document.getElementById('login').addEventListener('click', function() {
    // Show the login popup
    event.preventDefault(); // Prevent the default anchor behavior
    const loginPopup = document.querySelector(".popup");
    loginPopup.classList.add("active");
    // Hide other popups
    document.querySelector(".popup-comment").classList.remove("active");
});

//for login close button functionality
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector(".popup").classList.remove("active");
});

//for comment visibility
document.getElementById('rate').addEventListener('click', function() {
    // Show the comment popup
    const commentPopup = document.querySelector(".popup-comment");
    commentPopup.classList.add("active");

    // Hide other popups
    document.querySelector(".popup").classList.remove("active");
});

//for comment close button functionality
document.querySelector('.close-button').addEventListener('click', function() {
    document.querySelector(".popup-comment").classList.remove("active");
});
