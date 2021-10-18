///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
  
checkFlexGap();
  
///////////////////////////////////////////////////////////
// Set current year to copyright
const yearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

///////////////////////////////////////////////////////////
// Mobile navigation
const openNavBtn = document.querySelector(".nav-open");
const mainNav = document.querySelector(".main-nav");
const closeNavBtn = document.querySelector(".nav-close");

openNavBtn.addEventListener("click", function() {
    mainNav.classList.add("active");
})

closeNavBtn.addEventListener("click", function() {
    mainNav.classList.remove("active");
})

///////////////////////////////////////////////////////////
// Smooth scrolling
const links = document.querySelectorAll("a:link");

links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const href = link.getAttribute("href");
        
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        if (href !== "#" && href[0] === "#") {
            const destination = document.querySelector(href);
            destination.scrollIntoView({ behavior: "smooth" });
        }

        if (link.classList.contains("main-nav__link")) {
            mainNav.classList.remove("active");
        }
    })
})

///////////////////////////////////////////////////////////
// Sticky navigation
const header = document.querySelector(".header");
const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver (function(entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
        header.classList.add("sticky");
        document.body.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
        document.body.classList.remove("sticky");
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: "-80px"
});

obs.observe(sectionHero);