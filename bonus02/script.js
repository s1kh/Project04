const translations = {

    en: {

        name: "Shahd Al-Khateeb",

        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",

        languageButton: "العربية",

        aboutTitle: "About Me",

        aboutText:
            "I'm Shahd Al-Khateeb, a Network Security Engineering graduate interested in cybersecurity and network security.",

        skillsTitle: "Skills",

        skill1: "Networking",
        skill2: "Cybersecurity",
        skill3: "Linux",
        skill4: "HTML",
        skill5: "CSS",
        skill6: "JavaScript",

        projectsTitle: "Projects",

        project1Title: "Project 00",
        project1Text: "Linux and Git fundamentals.",

        project2Title: "Project 01",
        project2Text: "HTML and web development fundamentals.",

        project3Title: "Project 02",
        project3Text: "CSS styling and responsive design.",

        project4Title: "Project 03",
        project4Text: "JavaScript and interactive web development.",

        hobbiesTitle: "Hobbies",

        hobbiesText:
            "Reading, walking, learning technology, and photography.",

        contactTitle: "Contact Me",

        nameLabel: "Name",
        namePlaceholder: "Enter your name",

        emailLabel: "Email",
        emailPlaceholder: "Enter your email",

        messageLabel: "Message",
        messagePlaceholder: "Enter your message",

        sendButton: "Send Message",

        footerText: "© 2026 Shahd Al-Khateeb"
    },


    ar: {

        name: "شهد الخطيب",

        navAbout: "نبذة عني",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navHobbies: "الهوايات",
        navContact: "تواصل معي",

        languageButton: "English",

        aboutTitle: "نبذة عني",

        aboutText:
            "أنا شهد الخطيب، خريجة هندسة أمن الشبكات، ومهتمة بالأمن السيبراني وأمن الشبكات.",

        skillsTitle: "المهارات",

        skill1: "الشبكات",
        skill2: "الأمن السيبراني",
        skill3: "Linux",
        skill4: "HTML",
        skill5: "CSS",
        skill6: "JavaScript",

        projectsTitle: "المشاريع",

        project1Title: "المشروع 00",
        project1Text: "أساسيات Linux وGit.",

        project2Title: "المشروع 01",
        project2Text: "أساسيات HTML وتطوير الويب.",

        project3Title: "المشروع 02",
        project3Text: "تنسيق CSS وتصميم المواقع المتجاوبة.",

        project4Title: "المشروع 03",
        project4Text: "JavaScript وتطوير الويب التفاعلي.",

        hobbiesTitle: "الهوايات",

        hobbiesText:
            "القراءة، المشي، تعلم التكنولوجيا، والتصوير.",

        contactTitle: "تواصل معي",

        nameLabel: "الاسم",
        namePlaceholder: "أدخل اسمك",

        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "أدخل بريدك الإلكتروني",

        messageLabel: "الرسالة",
        messagePlaceholder: "أدخل رسالتك",

        sendButton: "إرسال الرسالة",

        footerText: "© 2026 شهد الخطيب"
    }

};


let currentLanguage = "en";


const languageButton =
    document.getElementById("languageButton");


function changeLanguage(language) {

    const text = translations[language];


    document.getElementById("name").textContent =
        text.name;

    document.getElementById("navAbout").textContent =
        text.navAbout;

    document.getElementById("navSkills").textContent =
        text.navSkills;

    document.getElementById("navProjects").textContent =
        text.navProjects;

    document.getElementById("navHobbies").textContent =
        text.navHobbies;

    document.getElementById("navContact").textContent =
        text.navContact;

    languageButton.textContent =
        text.languageButton;


    document.getElementById("aboutTitle").textContent =
        text.aboutTitle;

    document.getElementById("aboutText").textContent =
        text.aboutText;


    document.getElementById("skillsTitle").textContent =
        text.skillsTitle;

    document.getElementById("skill1").textContent =
        text.skill1;

    document.getElementById("skill2").textContent =
        text.skill2;

    document.getElementById("skill3").textContent =
        text.skill3;

    document.getElementById("skill4").textContent =
        text.skill4;

    document.getElementById("skill5").textContent =
        text.skill5;

    document.getElementById("skill6").textContent =
        text.skill6;


    document.getElementById("projectsTitle").textContent =
        text.projectsTitle;

    document.getElementById("project1Title").textContent =
        text.project1Title;

    document.getElementById("project1Text").textContent =
        text.project1Text;

    document.getElementById("project2Title").textContent =
        text.project2Title;

    document.getElementById("project2Text").textContent =
        text.project2Text;

    document.getElementById("project3Title").textContent =
        text.project3Title;

    document.getElementById("project3Text").textContent =
        text.project3Text;

    document.getElementById("project4Title").textContent =
        text.project4Title;

    document.getElementById("project4Text").textContent =
        text.project4Text;


    document.getElementById("hobbiesTitle").textContent =
        text.hobbiesTitle;

    document.getElementById("hobbiesText").textContent =
        text.hobbiesText;


    document.getElementById("contactTitle").textContent =
        text.contactTitle;

    document.getElementById("nameLabel").textContent =
        text.nameLabel;

    document.getElementById("emailLabel").textContent =
        text.emailLabel;

    document.getElementById("messageLabel").textContent =
        text.messageLabel;

    document.getElementById("sendButton").textContent =
        text.sendButton;


    document.getElementById("nameInput").placeholder =
        text.namePlaceholder;

    document.getElementById("emailInput").placeholder =
        text.emailPlaceholder;

    document.getElementById("messageInput").placeholder =
        text.messagePlaceholder;


    document.getElementById("footerText").textContent =
        text.footerText;


    if (language === "ar") {

        document.documentElement.dir = "rtl";

        document.documentElement.lang = "ar";

    } else {

        document.documentElement.dir = "ltr";

        document.documentElement.lang = "en";

    }
}


languageButton.addEventListener("click", function () {

    if (currentLanguage === "en") {

        currentLanguage = "ar";

    } else {

        currentLanguage = "en";

    }

    changeLanguage(currentLanguage);

});