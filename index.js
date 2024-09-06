// console.log("JavaScript running");

// document.addEventListener('DOMContentLoaded', (event) => {
//     const cross = document.querySelector('.cross');
//     const hamburger = document.querySelector('.hamBurger');
//     const sidebar = document.querySelector('.sidebar');

//     if (cross) {
//         cross.style.display = 'none';
//     }

//     if (hamburger && sidebar) {
//         hamburger.addEventListener("click", () => {
//             sidebar.classList.toggle('sidebarGo');
//         });
//     } else {
//         console.error("hamBurger or sidebar elements not found");
//     }

//     if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
//         document.querySelector('.ham').style.display = 'inline'
//         document.querySelector('.cross').style.display = 'none'
//     } else {
//         document.querySelector('.cross').style.display = 'inline'
//         document.querySelector('.ham').style.display = 'none'
//     }
// });
    
console.log("JavaScript running")


// var typed = new Typed('#element', {
//     strings: ['Software Engineer', 'WEB Developer', 'Wordpress Developer', 'WEB Designer', 'Video Editor', 'Graphic Designer'],
//     typeSpeed: 50,
//     loop: true,
// });

document.addEventListener('DOMContentLoaded', () => {
    const typedElement = document.getElementById('element');
    if (typedElement) {
        new Typed(typedElement, {
            strings: ["Software Engineer", "WEB Developer", "Wordpress Developer", "WEB Designer", "Graphic Designer", "Video Editor"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        });
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    const cross = document.querySelector('.cross');
    const hamburger = document.querySelector('.hamBurger'); 
    const sidebar = document.querySelector('.sidebar');
    const ham = document.querySelector('.ham');

    if (cross) {
        cross.style.display = 'none';
    }

    if (hamburger && sidebar) {
        hamburger.addEventListener("click", () => {
            sidebar.classList.toggle('sidebarGo');

            if (sidebar.classList.contains('sidebarGo')) {
                setTimeout(() => {
                    if (ham) ham.style.display = 'inline';
                }, 300);
                if (cross) cross.style.display = 'none';
            } else {
                setTimeout(() => {
                    if (cross) cross.style.display = 'inline';
                }, 300);
                if (ham) ham.style.display = 'none';
            }
        });
    } else {
        console.error("hamburger or sidebar elements not found");
    }
});



const icons = document.querySelectorAll('.social-icons li');
const positions = [
    { x: 0, y: 0 },
    { x: 50, y: 0 }, // Reduced gap (50px total)
    { x: 100, y: 0 } // Reduced gap (50px total)
];

function moveIcons() {
    icons.forEach(icon => {
        let currentPos = parseInt(icon.getAttribute('data-pos'));
        const pos = positions[currentPos];
        icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;

        // Update the position for the next round
        let newPos = (currentPos + 2) % positions.length;
        icon.setAttribute('data-pos', newPos);
    });
}

// Initial position setup
icons.forEach((icon, index) => {
    const pos = positions[index];
    icon.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    icon.setAttribute('data-pos', index);
});

setInterval(moveIcons, 5000);


// function toggleMoreContent(button) {
//     const moreContent = button.previousElementSibling;
//     if (moreContent.style.display === "none" || moreContent.style.display === "") {
//         moreContent.style.display = "block";
//         button.textContent = "Read Less";
//     } else {
//         moreContent.style.display = "none";
//         button.textContent = "Read More";
//     }
// }


function toggleMoreContent(button) {
    const moreContent = button.previousElementSibling;
    const verticalDesc = moreContent.parentElement;
    const section = document.querySelector('.secondSection');
    
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        button.textContent = "Read Less";
        verticalDesc.style.height = "auto"; // Allow height to auto adjust
        section.style.marginBottom = "300px"; // Add margin when expanded
    } else {
        moreContent.style.display = "none";
        button.textContent = "Read More";
        verticalDesc.style.height = "93px"; // Reset to original height
        section.style.marginBottom = "0px"; // Reset margin when collapsed
    }
}



















const slides = document.querySelector('.slides');
        const slideCount = document.querySelectorAll('.slide').length;
        const pathIndicator = document.querySelector('.path-indicator');

        let index = 0;
        let interval;

        function showSlide(n) {
            if (n >= slideCount) {
                index = 0;
            } else if (n < 0) {
                index = slideCount - 1;
            } else {
                index = n;
            }
            slides.style.transform = `translateX(${-index * 100}%)`;
            updatePathIndicator();
        }

        function updatePathIndicator() {
            const indicators = pathIndicator.querySelectorAll('span');
            indicators.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function startAutoSlide() {
            interval = setInterval(() => {
                showSlide(index + 1);
            }, 6000); 
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        // Initialize
        showSlide(index);
        startAutoSlide();

        // Generate path indicator dots
        for (let i = 0; i < slideCount; i++) {
            const dot = document.createElement('span');
            pathIndicator.appendChild(dot);
        }
        updatePathIndicator();




        
const slider = document.querySelector('.slider');

slider.addEventListener('mouseover', stopAutoSlide);
slider.addEventListener('mouseout', startAutoSlide);




   



        

document.querySelectorAll('.progress-bar').forEach(bar => {
    const target = parseInt(bar.getAttribute('data-skill'));
    let current = 0;

    const updateCounter = () => {
        if (current < target) {
            current++;
            bar.textContent = current + '%';
            setTimeout(updateCounter, 20);
        } else {
            bar.textContent = target + '%';
        }
    };

    updateCounter();
});




document.querySelectorAll('.show-details1').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            button.textContent = 'Hide Details';
        } else {
            details.style.display = 'none';
            button.textContent = 'Show Details';
        }
    });
});












































// READ MORE BUTTON VIDEO CODE 


// const parentContainer = document.querySelector('.projectItem');

// parentContainer.addEventListener('click', event=>{
//     const current = event.target;

//     const isReadMoreBtn =current.classNmae.includes('read-more-btn');

//     if(!isReadMoreBtn) return;
    
//     const currentText = event.target.parentNode.querySelector('.read-more-text');

//     currentText.ClassList.toggle('read-more-text--show');
    
// })

