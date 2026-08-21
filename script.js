/* =========================================================
   PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const navigation =
        document.querySelector(".navigation");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("show");

            const icon =
                menuButton.querySelector("i");


            if (navigation.classList.contains("show")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });


        /* Close mobile menu after clicking a link */

        const navLinks =
            document.querySelectorAll(".nav-link");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("show");


                const icon =
                    menuButton.querySelector("i");


                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            });

        });

    }



    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    /*
     * IntersectionObserver detects when an element
     * actually enters the visible screen.
     *
     * This means the Education degree animation
     * happens while scrolling instead of only
     * happening after refreshing the page.
     */

    const revealObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                    } else {

                        /*
                         * Remove active when the element
                         * leaves the screen.
                         *
                         * This allows the animation to
                         * play again when scrolling back.
                         */

                        entry.target.classList.remove("active");

                    }

                });

            },

            {
                /*
                 * Animation starts when approximately
                 * 15% of the element is visible.
                 */

                threshold: 0.15,

                /*
                 * Start the animation slightly before
                 * the element reaches the center.
                 */

                rootMargin: "0px 0px -80px 0px"

            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });



    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-link");


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");


            const linkTarget =
                link.getAttribute("href");


            if (
                linkTarget === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();



    /* =====================================================
       SOCIAL ICON HOVER
       ===================================================== */

    const socialIcons =
        document.querySelectorAll(".social");


    socialIcons.forEach(function (icon) {

        icon.addEventListener(
            "mouseenter",
            function () {

                icon.style.transform =
                    "translateY(-7px) scale(1.08)";

            }
        );


        icon.addEventListener(
            "mouseleave",
            function () {

                icon.style.transform =
                    "translateY(0) scale(1)";

            }
        );

    });



    /* =====================================================
       DEGREE CARD HOVER
       ===================================================== */

    const degreeRows =
        document.querySelectorAll(".degree-row");


    degreeRows.forEach(function (row) {

        const logo =
            row.querySelector(".university-logo");


        if (!logo) {
            return;
        }


        row.addEventListener(
            "mouseenter",
            function () {

                logo.style.boxShadow =
                    "0 14px 28px rgba(0, 0, 0, 0.16)";

            }
        );


        row.addEventListener(
            "mouseleave",
            function () {

                logo.style.boxShadow =
                    "0 8px 22px rgba(0, 0, 0, 0.13)";

            }
        );

    });



    /* =====================================================
       SMOOTH NAVIGATION SCROLL
       ===================================================== */

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                !targetId.startsWith("#")
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            const headerOffset = 70;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerOffset;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });

    /* =====================================================
   EXPERIENCE ACCORDION
   ===================================================== */

const experienceToggles =
    document.querySelectorAll(".experience-toggle");


experienceToggles.forEach(function (toggle) {

    toggle.addEventListener("click", function () {

        const targetId =
            toggle.getAttribute("data-target");

        const target =
            document.getElementById(targetId);


        if (!target) {
            return;
        }


        const isOpen =
            target.classList.contains("active");


        /*
         * Close all accordion sections
         */

        document
            .querySelectorAll(".experience-content")
            .forEach(function (content) {

                content.classList.remove("active");

            });


        document
            .querySelectorAll(".experience-toggle")
            .forEach(function (button) {

                button.classList.remove("active");

                const icon =
                    button.querySelector(".accordion-icon");

                if (icon) {
                    icon.textContent = "+";
                }

            });


        /*
         * Open clicked section
         */

        if (!isOpen) {

            target.classList.add("active");

            toggle.classList.add("active");


            const icon =
                toggle.querySelector(".accordion-icon");


            if (icon) {

                icon.textContent = "−";

            }


            /*
             * Re-observe reveal elements inside
             * newly opened accordion.
             */

            target
                .querySelectorAll(".reveal")
                .forEach(function (element) {

                    revealObserver.observe(element);

                });

        }

    });

});
});
/* =====================================================
   PROJECT MODAL
   ===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");

const projectModal =
    document.getElementById("projectModal");

const projectModalClose =
    document.getElementById("projectModalClose");

const projectModalOverlay =
    document.querySelector(".project-modal-overlay");

const modalProjectIcon =
    document.getElementById("modalProjectIcon");

const modalProjectMeta =
    document.getElementById("modalProjectMeta");

const modalProjectTitle =
    document.getElementById("modalProjectTitle");

const modalProjectDescription =
    document.getElementById("modalProjectDescription");

const modalTechList =
    document.getElementById("modalTechList");

const modalViewProject =
    document.getElementById("modalViewProject");

const project2VideoSection =
    document.getElementById("project2VideoSection");

const project2Video =
    document.getElementById("project2Video");

/* =====================================================
   PROJECT DATA
   ===================================================== */

const projectData = {

    project1: {

        icon:
            '<i class="fa-solid fa-clipboard-check"></i>',

        meta:
            "Nestlé India · Jul 2026",

        title:
            "Digitalization of Uniform & Safety Shoe Issuance",

        description:
            "During my HR internship at Nestlé India Ltd., I worked on digitalizing the uniform and safety shoe issuance process. The solution used Microsoft Forms and workflow automation to simplify employee requests, approvals, and record maintenance. The project focused on reducing manual work, improving record accuracy, and making the process easier for both employees and HR.",

        technologies: [

            {
                icon:
                    '<i class="fa-brands fa-microsoft"></i>',

                name:
                    "Microsoft Forms"
            },

            {
                icon:
                    '<i class="fa-solid fa-gears"></i>',

                name:
                    "Automation"
            },

            {
                icon:
                    '<i class="fa-solid fa-users"></i>',

                name:
                    "HR Systems"
            }

        ],

        link:
            "https://docs.google.com/document/d/1tb32efIVCY47IFAFuhuq92M7LlzCvVMb/edit?usp=sharing&ouid=100745534188591388419&rtpof=true&sd=true"

    },


    project2: {

        icon:
            '<i class="fa-solid fa-chart-column"></i>',

        meta:
            "Microsoft Power BI · Feb 2026",

        title:
            "HR Analytics Dashboard — Attrition Analysis",

        description:
            "Built an interactive HR analytics dashboard to analyze employee attrition and identify workforce trends. The project involved cleaning and modeling employee data, creating DAX measures, and developing visualizations to understand attrition patterns across departments, job roles, income levels, and employee demographics. The dashboard was designed to support faster and more data-driven HR decision-making.",

        technologies: [

            {
                icon:
                    '<span class="pbi-icon">P</span>',

                name:
                    "Power BI"
            },

            {
                icon:
                    '<i class="fa-solid fa-code"></i>',

                name:
                    "DAX"
            },

            {
                icon:
                    '<i class="fa-solid fa-chart-simple"></i>',

                name:
                    "Data Visualization"
            },

            {
                icon:
                    '<i class="fa-solid fa-users"></i>',

                name:
                    "HR Analytics"
            }

        ],

        link:
            "https://app.powerbi.com/links/tU_uQBeQsH?ctid=e14e73eb-5251-4388-8d67-8f9f2e2d5a46&pbi_source=linkShare"

    },


    project3: {

        icon:
            '<i class="fa-solid fa-chart-line"></i>',

        meta:
            "Excel · 2025",

        title:
            "Swiggy Order Data Analysis",

        description:
            "Analyzed food-delivery order data to identify meaningful trends across cities, food categories, ratings, pricing, and ordering patterns. The project involved cleaning raw data, organizing the dataset, performing analysis in Excel, and creating an interactive dashboard to communicate key findings in a simple and visual format.",

        technologies: [

            {
                icon:
                    '<i class="fa-solid fa-file-excel"></i>',

                name:
                    "Excel"
            },

            {
                icon:
                    '<i class="fa-solid fa-database"></i>',

                name:
                    "Data Analysis"
            },

            {
                icon:
                    '<i class="fa-solid fa-chart-pie"></i>',

                name:
                    "Dashboard"
            }

        ],

        link:
            "https://1drv.ms/x/c/96e717031e881cb2/IQAuMeDSHVmuRKys2wrzcQyIAZzegyRy9juNXpK-si-bdus?e=XWCIFL"

    },


    project4: {

        icon:
            '<i class="fa-solid fa-robot"></i>',

        meta:
            "Chatbase · HR Technology",

        title:
            "Shramik Sahayata — HP Labour Bot",

        description:
            "Developed an AI chatbot designed to provide workers with accessible information from official Himachal Pradesh labour law documents. The chatbot was configured around an approved knowledge base so that users could quickly access relevant information. I also worked on the chatbot's identity and created a QR-code based access approach to make the solution easier for shop-floor workers to use.",

        technologies: [

            {
                icon:
                    '<i class="fa-solid fa-robot"></i>',

                name:
                    "Chatbase"
            },

            {
                icon:
                    '<i class="fa-solid fa-brain"></i>',

                name:
                    "AI Chatbot"
            },

            {
                icon:
                    '<i class="fa-solid fa-users"></i>',

                name:
                    "HR Tech"
            }

        ],

        link:
            "https://www.chatbase.co/5fpYhr9C5xV0uhKyad01o/help"

    }

};


/* =====================================================
   OPEN PROJECT MODAL
   ===================================================== */

projectCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const projectId =
            card.getAttribute("data-project");

        const project =
            projectData[projectId];


        if (!project) {

            return;

        }


        /* ICON */

        modalProjectIcon.innerHTML =
            project.icon;


        /* META */

        modalProjectMeta.textContent =
            project.meta;


        /* TITLE */

        modalProjectTitle.textContent =
            project.title;


        /* DESCRIPTION */

        modalProjectDescription.textContent =
            project.description;


        /* TECHNOLOGIES */

        modalTechList.innerHTML = "";


        project.technologies.forEach(function (technology) {

            const technologyItem =
                document.createElement("div");


            technologyItem.className =
                "modal-tech-item";


            technologyItem.innerHTML =
                technology.icon +
                "<span>" +
                technology.name +
                "</span>";


            modalTechList.appendChild(
                technologyItem
            );

        });


        /* PROJECT LINK */

        modalViewProject.href =
            project.link;

        /* ==================PROJECT 2 VIDEO================================= */

        if (project2VideoSection) {

            if (projectId === "project2") {

                project2VideoSection.style.display = "block";

            } else {

                project2VideoSection.style.display = "none";

            }

        }
        /* OPEN MODAL */

        projectModal.classList.add("active");

        document.body.classList.add("modal-open");

    });

});


/* =====================================================
   CLOSE PROJECT MODAL
   ===================================================== */

function closeProjectModal() {

    projectModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


/* CLOSE BUTTON */

if (projectModalClose) {

    projectModalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


/* CLICK OUTSIDE MODAL */

if (projectModalOverlay) {

    projectModalOverlay.addEventListener(
        "click",
        closeProjectModal
    );

}


/* =====================================================
   ESCAPE KEY
   ===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("active")
        ) {

            closeProjectModal();

        }

    }
);
