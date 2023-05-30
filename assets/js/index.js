const homeOnOut = () => {
    const home = document.getElementById("home-span")
    home.style.display = "none"
}

const homeOnEnter = () => {
    const home = document.getElementById("home-span")
    home.style.display = "inline-block"
}

const homeNav = document.getElementById("home-nav");

homeNav.addEventListener("mouseout", homeOnOut);
homeNav.addEventListener("mouseenter", homeOnEnter);

const eventOnOut = () => {
    const home = document.getElementById("speaker-span")
    home.style.display = "none"
}

const eventOnEnter = () => {
    const home = document.getElementById("speaker-span")
    home.style.display = "inline-block"
}

const eventNav = document.getElementById("event-nav");

eventNav.addEventListener("mouseout", eventOnOut);
eventNav.addEventListener("mouseenter", eventOnEnter)

const speakerOnOut = () => {
    const home = document.getElementById("buy-tickets-span")
    home.style.display = "none"
}

const speakerOnEnter = () => {
    const home = document.getElementById("buy-tickets-span")
    home.style.display = "inline-block"
}

const speakerNav = document.getElementById("speaker-nav");

speakerNav.addEventListener("mouseout", speakerOnOut);
speakerNav.addEventListener("mouseenter", speakerOnEnter)

const contactOnOut = () => {
    const home = document.getElementById("schedule-span")
    home.style.display = "none"
}

const contactOnEnter = () => {
    const home = document.getElementById("schedule-span")
    home.style.display = "inline-block"
}

const contactNav = document.getElementById("contact-nav");

contactNav.addEventListener("mouseout", contactOnOut);
contactNav.addEventListener("mouseenter", contactOnEnter)