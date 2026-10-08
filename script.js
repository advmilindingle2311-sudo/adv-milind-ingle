/* =====================================================
   ADV. MILIND S. INGLE
   PREMIUM ADVOCATE WEBSITE
   ===================================================== */


/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(function () {

            preloader.classList.add("hide");

        }, 500);

    }

});


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        const isOpen =
            mainNav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });


    /* Close menu when link is clicked */

    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        });

    });

}


/* ================= HEADER SCROLL ================= */

const siteHeader =
    document.getElementById("siteHeader");

function updateHeader() {

    if (!siteHeader) return;

    if (window.scrollY > 40) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 600) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        },
        { passive: true }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* ================= REVEAL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("active");

    });

}


/* ================= PHOTO FALLBACK ================= */

const profilePhoto =
    document.querySelector(".profile-photo");

const portraitFrame =
    document.querySelector(".portrait-image-wrap");


if (profilePhoto && portraitFrame) {

    profilePhoto.addEventListener(
        "error",
        function () {

            profilePhoto.style.display = "none";

            portraitFrame.classList.add(
                "image-missing"
            );

        }
    );

}


/* ================= CURRENT YEAR ================= */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ================= CONSULTATION FORM ================= */

const consultationForm =
    document.getElementById("consultationForm");


if (consultationForm) {

    consultationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "clientName"
                ).value.trim();


            const phone =
                document.getElementById(
                    "clientPhone"
                ).value.trim();


            const matter =
                document.getElementById(
                    "matterType"
                ).value;


            const message =
                document.getElementById(
                    "clientMessage"
                ).value.trim();


            if (
                !name ||
                !phone ||
                !matter ||
                !message
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;

            }


            const whatsappMessage =
                "Hello Adv. Milind S. Ingle,%0A%0A" +

                "*New Consultation Enquiry*%0A%0A" +

                "Name: " +
                encodeURIComponent(name) +

                "%0AMobile: " +
                encodeURIComponent(phone) +

                "%0AMatter: " +
                encodeURIComponent(matter) +

                "%0ADescription:%0A" +
                encodeURIComponent(message) +

                "%0A%0ASent through the website.";


            const whatsappURL =
                "https://wa.me/918898653711?text=" +
                whatsappMessage;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* ================= SMOOTH ANCHOR SCROLL ================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    this.getAttribute("href");

                if (
                    !targetID ||
                    targetID === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetID
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


/* ================= ESC KEY ================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            mainNav
        ) {

            mainNav.classList.remove(
                "active"
            );

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);