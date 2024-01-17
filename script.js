
/* *** Det her er til blog billede karousellen **
**********references *******************
 video: https://www.youtube.com/watch?v=9HcxHDS2w1s  */

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => { //forEach starter et loop over de to knapper0
  button.addEventListener("click", () => { /*knappen reagere på klik */
    const offset = button.dataset.carouselButton === "next" ? 1 : -1; /*Datasæt vælger begge buttons med dataattribute
    Hvis nogle af carouselbuttons er lig med "next", så skal den give value 1 tilbage ellers skal den give value -1 tilbage for så står der prev(ious).*/

    const slides = button.closest("[data-carousel]").querySelector('[data-slides]'); /*definere den tætteste parentelement fra knappen, som er en carousel
    (Derfor har div'en i html fået data-carousel og slidesne har fået data-slides*/

    const activeSlide = slides.querySelector("[data-active]"); //definere det første slide

    let newIndex = [...slides.children].indexOf(activeSlide) + offset; /*variablen laver et nyt index for det næste slide ud fra, 
    hvilket nummer i indekset, det allerede er på og om offset skal lægge en til eller fra*/

    if (newIndex < 0) newIndex = slides.children.length - 1; /*Når man er på det første billede og trykker "tilbage" skifter den, til det sidste billede i html*/
    if (newIndex >= slides.children.length) newIndex = 0; /*Når man skifter videre ved det sidste billede, går den tilbage til det første billede */

    slides.children[newIndex].dataset.active = true /*Linjen tilføjer data-attributen til det næste slide i Arrayen*/
    delete activeSlide.dataset.active /* Den her linje fjerner data-attributen fra det foregående slide*/

  });
});

 // ------det her er til burgeren ------ //
 
 /* ******* references  ************
 JavaScript 1 - ANKT - 23-08-2023
 og Nippon UX / UI gruppeprojekt */
 
 // Vælg elementer med klasserne 'hamburger' og 'mobile-nav'
 const menu_btn = document.querySelector('.hamburger');
 const mobile_menu = document.querySelector('.mobile-nav');
 
 // Tilføj en klik-eventlistener til 'hamburger'-elementet
 menu_btn.addEventListener('click', function(){
     // Skift tilstanden af klassen 'is-active' på 'hamburger'-elementet
     menu_btn.classList.toggle('is-active');
     
     // Skift tilstanden af klassen 'is-active' på 'mobile-nav'-elementet
     mobile_menu.classList.toggle('is-active');
 });
 
 // Variabel til at gemme den nuværende sektion (den initialiseres som en tom streng)
 let currentSection = "";
 
 
 // Tilføj en klik-eventlistener til lukning af mobilmenuen ved klik udenfor
 document.addEventListener('click', function (event) {
     const isMenuOpen = mobile_menu.classList.contains('is-active');
     const isClickInsideMenu = mobile_menu.contains(event.target);
     const isClickOnHamburger = menu_btn.contains(event.target);
 
     if (isMenuOpen && !isClickInsideMenu && !isClickOnHamburger) {
         // Luk mobilmenuen
         menu_btn.classList.remove('is-active');
         mobile_menu.classList.remove('is-active');
     }
 });
 


/* og til accordian funktionen inden i burgeren 
**** references *******
w3schools: https://www.w3schools.com/howto/howto_js_accordion.asp */

// vælg alle elements med class "accordion"
var acc = document.getElementsByClassName("accordion");
var i;

// tilføj en click event listener til hvert accordion element
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // skift til "active" class
    this.classList.toggle("active");

    // hent det næste sibling element (den næste i rækken)
    var panel = this.nextElementSibling;

    // Toggle the display of the panel
    if (panel.style.display === "flex" || panel.style.display === "") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });

  // Skjul panelet ved start
  acc[i].nextElementSibling.style.display = "none";
}

 
 /* ------- det her er til drop down --------------- 
 *************** references ***************
 w3schools: https://www.w3schools.com/howto/howto_js_dropdown.asp 
 */
 
  // Function to toggle dropdown visibility
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    var allDropdowns = document.getElementsByClassName("dropdown-content");

    // Close all other dropdowns
    for (var i = 0; i < allDropdowns.length; i++) {
        var otherDropdown = allDropdowns[i];
        if (otherDropdown.id !== dropdownId && otherDropdown.classList.contains('show')) {
            otherDropdown.classList.remove('show');
        }
    }

    // Toggle the clicked dropdown
    if (dropdown) {
        dropdown.classList.toggle("show");
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//bekræft show up -- virker ikke :'(
const bekraeftShowUp = getElementById("bekraeftshowup");
const blanketInfo = getElementById("blanketinfo");
const tilmeldingsForm = getElementById("tilmeldingsform");
const sendTilmelding = getElementById("sendtilmelding");

sendTilmelding.addEventListener("click", visBekraeftelse )
function visBekraeftelse(){
    blanketInfo.style.display = "none";
    tilmeldingsForm.style.display = "none";
    bekraeftShowUp.style.display = "block";

    const besoegsdatoValue = getElementsByName("besoesdato");
    let valgtDato = "";
    /*chatgbt har lavet resten */
    for (let i = 0; i < besoegsdatoValue.length; i++) { /*et loop */
        if (besoegsdatoValue[i].checked) {
            valgtDato = besoegsdatoValue[i].value;
            break;
        }
    }
    // Opdater teksten i bekraeftshowup h3-elementet
    bekraeftShowUp.querySelector("h3.gul").innerText = `Vi glæder os til at se jer d. ${valgtDato}`;
}

/* *******fra chatgbt til bekræfthalløj
const bekraeftShowUp = document.getElementById("bekraeftshowup");
const blanketInfo = document.getElementById("blanketinfo");
const tilmeldingsForm = document.getElementById("tilmeldingsform");
const sendTilmelding = document.getElementById("sendtilmelding");

sendTilmelding.addEventListener("click", visBekraeftelse);

function visBekraeftelse() {
    // Skjul blanketInfo og tilmeldingsForm
    blanketInfo.style.display = "none";
    tilmeldingsForm.style.display = "none";

    // Find den valgte besøgsdato
    const besoegsDatoElements = document.getElementsByName("besoesdato");
    let valgtDato = "";
    for (let i = 0; i < besoegsDatoElements.length; i++) {
        if (besoegsDatoElements[i].checked) {
            valgtDato = besoegsDatoElements[i].value;
            break;
        }
    }

    // Opdater teksten i bekraeftshowup h3-elementet
    bekraeftShowUp.querySelector("h3.gul").innerText = `Vi glæder os til at se jer d. ${valgtDato}`;

    // Vis bekraeftShowUp
    bekraeftShowUp.style.display = "block";
}*/













//************************************ */

 
 // ------- det her er til billedkunst med de to elever man kan hover på //
 // men det virker ikke....
 
 /* ******* references  ************
 Programmering 8: - ANKT - 25-10-2023 + det kode vi øvede den dag 
 
 document.addEventListener("DOMContentLoaded", function() {
 
 
 // her er til den første elev
 // først en variable med lydfilen
 const audio1 = new Audio('comic5-25269.mp3'); 
 // så en som henter info om hvilket div der skal lyd til 
 const divElement1 = document.getElementById("#kunstElevEn");
 
 
 // en funktion som siger at når musen er i diven skal lyden afspilles
     divElement1.addEventListener("mouseenter", function() {
         audio1.play();
     });
 
 
 // og en funktion som siger hvis musen forlader diven skal lyden stoppes
     divElement1.addEventListener("mouseleave", function() {
         audio1.pause();
         audio1.currentTime = 0; /* her gør vi så lyden starter fra begyndelsen,
         hver gang musen kommer ind på billedet 
     });
 
 /* her er til den næste elev - vi gør bare det samme som ovenover,
 men variablerne audio1 og divElement1 bliver til audio2 etc. 
 
 
 const audio2 = new Audio('comic5-25269.mp3'); 
 const divElement2 = document.getElementById("#kunstElevTo");
 
 
 // en funktion som siger at når musen er i diven skal lyden afspilles
     divElement2.addEventListener("mouseenter", function() {
         audio2.play();
     });
 
 
 // og en funktion som siger hvis musen forlader diven skal lyden stoppes
     divElement2.addEventListener("mouseleave", function() {
         audio2.pause();
         audio2.currentTime = 0; 
     });
 
 
   }); */
 
