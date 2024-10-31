let currentIndex = 0;

// Toon de huidige slide in de carousel
function showSlide(index) {
    const track = document.querySelector('.carousel-track');
    const totalSlides = document.querySelectorAll('.carousel-card').length;
    const visibleCards = 2; // Het aantal zichtbare kaarten tegelijkertijd

    // Voorkom dat de index buiten de grenzen gaat
    if (index < 0) {
        currentIndex = totalSlides - visibleCards;
    } else if (index >= totalSlides - visibleCards + 1) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Bereken de nieuwe positie van de track
    const newPosition = -(currentIndex * (100 / visibleCards));
    track.style.transform = `translateX(${newPosition}%)`;
}

// Toon de vorige slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Toon de volgende slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Toggle voor het menu
function toggleMenu() {
    const menuLinks = document.getElementById('menu-links');
    menuLinks.style.display = menuLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Initialiseer Intersection Observer voor infoblob animatie
document.addEventListener("DOMContentLoaded", function () {
    const infoblob = document.querySelector('.infoblob');
    const homeinfo = document.querySelector('#homeinfo');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                infoblob.classList.add('animate'); // Start de animatie
            }
        });
    }, { threshold: 0.5 });

    observer.observe(homeinfo);
});

// Initialiseer Intersection Observer voor DJ SVG animatie in de carouseldj sectie
document.addEventListener("DOMContentLoaded", function () {
    const djImage = document.querySelector('.djanimated img');
    const carouseldjSection = document.getElementById('carouseldj');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                djImage.classList.add('slide-in'); // Voeg animatieklasse toe
            }
        });
    }, { threshold: 0.5 });

    observer.observe(carouseldjSection);
});

// Initialiseer Intersection Observer voor infoblob sectie animatie (groeien)
document.addEventListener("DOMContentLoaded", function () {
    const infoblob = document.querySelector('.infoblob');
    const homeinfoSection = document.getElementById('homeinfo');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                infoblob.classList.add('grow'); // Voeg de groeianimatieklasse toe
            }
        });
    }, { threshold: 0.5 });

    observer.observe(homeinfoSection);
});

// Vinyl play/pause animatie
document.addEventListener('DOMContentLoaded', function () {
    const vinyl = document.getElementById('vinyl');
    const playPauseButton = document.getElementById('play-pause');
    let isPlaying = false;

    playPauseButton.addEventListener('click', function () {
        if (isPlaying) {
            vinyl.classList.remove('rotate'); // Pauzeer de vinylrotatie
            playPauseButton.src = 'images/play.svg'; // Terug naar play icoon
        } else {
            vinyl.classList.add('rotate'); // Start vinylrotatie
            playPauseButton.src = 'images/pause.svg'; // Verander naar pauze icoon
        }
        isPlaying = !isPlaying;
    });
});

// Initialiseer animatie voor #aboutdj en DJ afbeelding
document.addEventListener("DOMContentLoaded", function () {
    const aboutdj = document.getElementById('aboutdj');
    const img = document.querySelector('#aboutdj .djimg img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutdj.classList.add('active'); // Voeg active klasse toe
                img.classList.add('pulse-active'); // Start pulse animatie
            } else {
                aboutdj.classList.remove('active'); // Verwijder active klasse
                img.classList.remove('pulse-active');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutdj);
});

// DJ wisselfuncties en informatie updaten op basis van DJ
let currentDJ = null;

document.addEventListener('DOMContentLoaded', function () {
    const vinyl = document.getElementById('vinyl');
    const djButtons = document.querySelectorAll('.event3play');
    const aboutdj = document.getElementById('aboutdj');
    const heroevent = document.getElementById('heroevent');
    const mainPlayPauseButton = document.getElementById('play-pause');
    const rewindBackButton = document.getElementById('rewind-back');
    const rewindForwardButton = document.getElementById('rewind-forward');
    const djNameElement = document.querySelector('#heroevent .event1 h1');
    const aboutdjImage = document.querySelector('#aboutdj .djimg img');
    const djDescription = document.querySelector('#aboutdj .djinfo p');

    const djNames = ["Ricky Gonzalez", "Frans Heijman", "Albert Robert", "Jordy Bouwmans"];
    const djImages = ["images/eventartist1.png", "images/eventartist2.png", "images/eventartist3.png", "images/eventartist4.png"];
    const djDescriptions = [
        "Ricky Gonzalez, beter bekend als DJ Ricky, ademt muziek. Vanaf het moment dat hij voor het eerst achter de draaitafels stond, wist hij dat dit zijn roeping was. Met zijn unieke mix van house, funk en energieke beats brengt hij elk feest tot leven. Zijn passie voor muziek en zijn vermogen om het publiek mee te slepen in zijn ritme maken hem een echte publieksfavoriet. Waar hij ook draait, DJ Ricky zorgt altijd voor een onvergetelijke vibe!",
        "Frans Heijman, een vaste naam in de muziekwereld, leeft en ademt voor zijn publiek. Zodra hij de beats inzet, vult de dansvloer zich met energie. Zijn stijl, een onmiskenbare mix van techno en deep house, raakt bij elke set de perfecte snaar. Frans weet precies hoe hij het publiek moet bespelen, en zijn passie voor het vak spat van elk optreden af. Elke show is uniek, en zijn fans weten: met Frans achter de draaitafels wacht er altijd een onvergetelijke avond vol muziek en plezier.",
        "Albert Robert brengt een frisse sound naar elke set die hij draait. Bekend om zijn vloeiende overgangen en verrassende invloeden van soul en funk, zorgt hij voor een sfeer waarin iedereen zich vrij voelt om te dansen. Vanaf zijn eerste optreden was hij verkocht, en zijn toewijding aan het vak is in elk nummer voelbaar. Met Albert achter de draaitafels staat één ding vast: hij neemt het publiek mee op een muzikale reis die nog lang in het geheugen blijft hangen.",
        "Jordy Bouwmans staat bekend om zijn explosieve energie en innovatieve sets. Zijn passie voor elektronische muziek ontstond al op jonge leeftijd, en sindsdien heeft hij zichzelf keer op keer opnieuw uitgevonden. Met een sound die varieert van progressive house tot electro, creëert Jordy een vibe die niemand kan weerstaan. Het publiek voelt zijn enthousiasme en laat zich volledig meevoeren in zijn ritme. Waar Jordy draait, is het feest gegarandeerd!"
    ];

    djButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            if (currentDJ === index) {
                pauseAllDJs();
            } else {
                switchDJ(index);
            }
        });
    });

    mainPlayPauseButton.addEventListener('click', function () {
        if (currentDJ !== null) {
            pauseAllDJs();
        } else if (currentDJ === null && djButtons.length > 0) {
            switchDJ(0);
        }
    });

    rewindForwardButton.addEventListener('click', function () {
        const nextDJ = (currentDJ + 1) % djButtons.length;
        switchDJ(currentDJ === null ? 0 : nextDJ);
    });

    rewindBackButton.addEventListener('click', function () {
        const prevDJ = (currentDJ - 1 + djButtons.length) % djButtons.length;
        switchDJ(currentDJ === null ? djButtons.length - 1 : prevDJ);
    });

    // Wisselt naar een specifieke DJ, inclusief lay-out en tekst
    function switchDJ(index) {
        pauseAllDJs();
        aboutdj.style.backgroundImage = `url('images/eventabout${index + 1}.svg')`;
        heroevent.style.backgroundImage = `url('images/eventhero${index + 1}.svg')`;
        djNameElement.textContent = djNames[index];
        aboutdjImage.src = djImages[index];
        djDescription.setAttribute("data-text", djDescriptions[index]);
        djDescription.textContent = djDescriptions[index];
        djButtons[index].src = 'images/pause.svg';
        mainPlayPauseButton.src = 'images/pause.svg';
        vinyl.classList.add('rotate');
        currentDJ = index;
    }

    // Zet alle DJ's op pauze en reset iconen
    function pauseAllDJs() {
        djButtons.forEach(button => { button.src = 'images/play.svg'; });
        mainPlayPauseButton.src = 'images/play.svg';
        vinyl.classList.remove('rotate');
        currentDJ = null;
    }
});

// Hover-effect voor navigatiepijlen in de carousel
document.addEventListener("DOMContentLoaded", function () {
    const prevButtonImg = document.querySelector(".carouselbuttons .prev img");
    const nextButtonImg = document.querySelector(".carouselbuttons .next img");

    prevButtonImg.addEventListener("mouseover", function () {
        prevButtonImg.src = "images/leftarrowgrey.svg";
    });

    prevButtonImg.addEventListener("mouseout", function () {
        prevButtonImg.src = "images/leftarrow.svg";
    });

    nextButtonImg.addEventListener("mouseover", function () {
        nextButtonImg.src = "images/rightarrowgrey.svg";
    });

    nextButtonImg.addEventListener("mouseout", function () {
        nextButtonImg.src = "images/rightarrow.svg";
    });
});
