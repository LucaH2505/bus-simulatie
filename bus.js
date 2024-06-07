let passagiers = [
    { naam: "Alice", afbeelding: "images/alice.jpg" },
    { naam: "Bob", afbeelding: "images/bob.jpg" },
    { naam: "Charlie", afbeelding: "images/charlie.jpg" },
    { naam: "Dave", afbeelding: "images/dave.jpg" },
    { naam: "Eve", afbeelding: "images/eve.jpg" },
    { naam: "Frank", afbeelding: "images/frank.jpg" },
    { naam: "Grace", afbeelding: "images/grace.jpg" },
    { naam: "Hank", afbeelding: "images/hank.jpg" },
    { naam: "Ivy", afbeelding: "images/ivy.jpg" },
    { naam: "Jack", afbeelding: "images/jack.jpg" }
];

let verwijderdePassagiers = [];
let katieToegevoegd = false;

const busElement = document.getElementById('bus');
const incheckSound = document.getElementById('incheckSound');
const outcheckSound = document.getElementById('outcheckSound');
const addPassengerBtn = document.getElementById('addPassengerBtn');
const removePassengerBtn = document.getElementById('removePassengerBtn');

function toonPassagiers() {
    busElement.innerHTML = '';
    passagiers.forEach(passagier => {
        const passagierElement = document.createElement('div');
        passagierElement.className = 'passagier';
        passagierElement.innerHTML = `<img src="${passagier.afbeelding}" alt="${passagier.naam}"><p>${passagier.naam}</p>`;
        busElement.appendChild(passagierElement);
    });
}

addPassengerBtn.addEventListener('click', () => {
    if (verwijderdePassagiers.length > 0) {
        let herToegevoegdePassagier = verwijderdePassagiers.pop();
        passagiers.push(herToegevoegdePassagier);
    } else if (!katieToegevoegd) {
        const nieuwePassagier = { naam: "Katie", afbeelding: "images/katie.jpg" };
        passagiers.push(nieuwePassagier);
        katieToegevoegd = true;
    } else {
        alert("Max aantal passagiers in de bus");
    }
    incheckSound.play();
    toonPassagiers();
});

removePassengerBtn.addEventListener('click', () => {
    if (passagiers.length > 0) {
        let verwijderdePassagier = passagiers.shift();
        if (verwijderdePassagier.naam === "Katie") {
            katieToegevoegd = false;
        }
        verwijderdePassagiers.push(verwijderdePassagier);
        outcheckSound.play();
        toonPassagiers();
    }
});

toonPassagiers();