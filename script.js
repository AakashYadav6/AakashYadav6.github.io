const portfolio = {
  name: "Aakash Yadav",
  initials: "AY",
  title: "Building Physical AI",
  location: "Mumbai, India",
  availability: "Open to robotics engineering roles",
  resumeUrl: "#",
  heroPhoto: "./images/profile.jpg",
  emails: ["aakashyadav5013@gmail.com"],
  socials: [
    { label: "GitHub", href: "https://github.com/AakashYadav6" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aakash-yadav294/" },
    { label: "Portfolio", href: "https://aakashyadav6.github.io" }
  ],
  about: [
    "Hi there 👋",
    "I build robotics systems across software, simulation, mechanical design, and field experimentation. My work spans aerial payload systems, autonomous navigation, mobile robots, embedded platforms, and computer vision driven workflows.",
    "At Algobotix, I worked on multi-drone slung-load experimentation, ROS 1 to ROS 2 migration, structural design, and hardware testing. That experience made me care deeply about robotics systems that move cleanly from concept to deployment.",
    "I am especially interested in robotics software and autonomy roles where perception, controls, simulation, and real-world validation all matter."
  ],
  education: [
    {
      location: "Mumbai, MH, India",
      program: "B.E. in Mechanical Engineering",
      university: "Thakur College of Engineering and Technology",
      date: "Jul 2020 - Jun 2024",
      gpa: "GPA 9.33/10",
      courses: "Relevant Courses: UAV Design, Autonomous Robotics, Thermodynamic Modeling, Engineering Analysis, CAD, Structural Design, and Simulation."
    },
    {
      location: "Mumbai, MH, India",
      program: "Higher Secondary Certificate",
      university: "K.J. Somaiya College of Science and Commerce",
      date: "Aug 2019 - Jul 2020",
      gpa: "71.08%",
      courses: "Coursework focused on physics, chemistry, mathematics, and technical preparation for engineering studies."
    }
  ],
  experience: [
    {
      location: "Mumbai, MH, India",
      company: "Algobotix Pvt Ltd",
      role: "Robotics Engineer",
      date: "Sep 2024 - Feb 2025",
      points: [
        "Led structural design and experimentation for a slung rod setup where multiple drones carried a common payload.",
        "Conducted slung-load experiments in ArduPilot and PX4 through simulation and real-world testing.",
        "Designed the slung-load system in SolidWorks and migrated communication workflows from ROS 1 to ROS 2.",
        "Assembled, calibrated, and tested drones for the embedded team with repeated flight iteration."
      ]
    },
    {
      location: "India",
      company: "E-Yantra Robotics Competition",
      role: "Participant",
      date: "Sep 2023 - Dec 2023",
      points: [
        "Developed Cosmo Logistic, a lunar warehouse system featuring racks and mobile robots for autonomous goods transportation.",
        "Implemented Aruco marker detection using OpenCV for warehouse box identification and tracking.",
        "Designed Ebot navigation using Nav2, Simple Commander API, SLAM Toolbox, and AMCL.",
        "Integrated a UR5 robotic arm with MoveIt for pick and place workflows between racks."
      ]
    },
    {
      location: "Mumbai, MH, India",
      company: "Rigbetellabs ROS Mentorship",
      role: "Trainee",
      date: "Oct 2023 - Dec 2023",
      points: [
        "Developed proficiency in ROS basics, TurtleSim, SLAM, and navigation workflows.",
        "Implemented ROS-based projects using mapping and navigation techniques in practical exercises."
      ]
    }
  ],
  research: [
    {
      title: "Research Assistant",
      org: "Bureau of Indian Standards, Mumbai",
      date: "Dec 2023 - Feb 2024",
      summary: "Combined standards-based testing with computer vision work for a thermal stability test apparatus.",
      points: [
        "Developed OpenCV-based code for lithium paper detection.",
        "Supported hardware procurement for project implementation.",
        "Studied Indian Standards, tested sample products for conformity, and prepared technical reports."
      ]
    },
    {
      title: "Thermodynamic Properties of Li-Br Vapor Absorption Refrigeration System",
      org: "Independent project",
      date: "Ongoing",
      summary: "Developing MATLAB-based analysis for thermodynamic property calculations in a Li-Br vapor absorption refrigeration system.",
      points: [
        "Built MATLAB code to analyze and calculate thermodynamic properties with verification against literature and theoretical results."
      ]
    }
  ],
  projects: [
    {
      title: "Autonomous Mobile Robot for Navigation and Object Tracking",
      venue: "Robotics Project",
      date: "2024",
      description: "Built a differential-drive robot using Raspberry Pi 4, Arduino Nano, lidar, and a depth camera for mapping, localization, path planning, obstacle avoidance, and object tracking in both simulation and hardware integration workflows.",
      image: "",
      placeholder: "Robotics perception, navigation, and control workflow",
      linkLabel: "Read project",
      link: "https://github.com/AakashYadav6"
    },
    {
      title: "Design and Development of Amphibious Unmanned Aerial Vehicle",
      venue: "Capstone Project",
      date: "2024",
      description: "Designed an amphibious UAV with a coaxial rotor system and tilt-rotor mechanism for air-to-water transition, reducing power consumption and improving thrust with a more aerodynamic structure.",
      image: "",
      placeholder: "Amphibious UAV design and simulation case study",
      linkLabel: "Read project",
      link: "#"
    },
    {
      title: "Cosmo Logistic Lunar Warehouse System",
      venue: "Competition Project",
      date: "2023",
      description: "Developed a warehouse robotics system using Aruco detection, Nav2-based mobile robot navigation, SLAM, AMCL localization, and UR5 manipulation with MoveIt.",
      image: "",
      placeholder: "Warehouse autonomy, SLAM, and manipulation system",
      linkLabel: "Read project",
      link: "#"
    }
  ],
  publications: [
    {
      title: "OpenCV-based Lithium Paper Detection for Thermal Stability Testing",
      venue: "Applied Research Work",
      date: "2024",
      description: "A practical computer vision workflow used during standards-based testing research to detect lithium paper and support apparatus validation.",
      image: "",
      placeholder: "Applied computer vision for industrial testing",
      linkLabel: "Read article",
      link: "#"
    },
    {
      title: "Thermodynamic Analysis of Li-Br Vapor Absorption Refrigeration System",
      venue: "Independent Study",
      date: "Ongoing",
      description: "An analytical study using MATLAB to model and verify thermodynamic properties for a Li-Br vapor absorption refrigeration system.",
      image: "",
      placeholder: "MATLAB-based thermodynamic analysis and validation",
      linkLabel: "Read article",
      link: "#"
    }
  ],
  stack: [
    {
      label: "Languages",
      title: "Python, C++, HTML, CSS, MATLAB",
      copy: "Used across robotics software, analysis, control logic, simulation support, and documentation workflows."
    },
    {
      label: "Robotics Tools",
      title: "ROS, Gazebo, RViz, ArduPilot, PX4, MoveIt, SLAM Toolbox, AMCL",
      copy: "Used for autonomy pipelines, simulation, flight experimentation, manipulation, and navigation systems."
    },
    {
      label: "Engineering Tools",
      title: "SolidWorks, ANSYS Workbench, Fusion 360, VS Code, PyCharm, Anaconda",
      copy: "Used for structural design, CAD modeling, analysis, debugging, and iterative technical development."
    },
    {
      label: "Libraries",
      title: "OpenCV, NumPy, Pandas, Scikit-learn, Matplotlib",
      copy: "Used for perception tasks, data handling, visualization, and applied experimentation."
    }
  ],
  awards: [
    {
      meta: "Certification",
      title: "Wheeled Mobile Robots",
      copy: "Coursework in mobile robot kinematics, control, and navigation fundamentals."
    },
    {
      meta: "Certification",
      title: "Industrial Robotics and Advanced Robotics",
      copy: "Formal training in robotics principles, control logic, and system-level thinking."
    },
    {
      meta: "Certification",
      title: "Computer Vision and Image Processing",
      copy: "Coursework focused on visual perception workflows and image-based problem solving."
    }
  ],
  timezone: "Asia/Kolkata"
};

const byId = (id) => document.getElementById(id);

const setText = (id, value) => {
  const node = byId(id);
  if (node) node.textContent = value;
};

const socialIconMarkup = (label, className) => {
  const icons = {
    GitHub: '<span class="' + className + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></span>',
    LinkedIn: '<span class="' + className + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></span>',
    Portfolio: '<span class="' + className + '"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></svg></span>'
  };

  return icons[label] || '';
};

const createTimelineItem = (entry) => {
  const article = document.createElement("article");
  article.className = "timeline-item";

  const bullets = entry.points.map((point) => "<li>" + point + "</li>").join("");

  article.innerHTML =
    '<div class="timeline-top">' +
      '<div>' +
        '<h3 class="timeline-title">' + entry.title + '</h3>' +
        '<p class="timeline-org">' + entry.org + '</p>' +
      '</div>' +
      '<span class="timeline-date">' + entry.date + '</span>' +
    '</div>' +
    '<p class="timeline-summary">' + entry.summary + '</p>' +
    '<ul class="timeline-points">' + bullets + '</ul>';

  return article;
};

const createEducationItem = (entry) => {
  const article = document.createElement("article");
  article.className = "education-item";

  article.innerHTML =
    '<div class="education-top">' +
      '<div class="education-location">' +
        '<span class="education-location-icon">◎</span>' +
        '<span>' + entry.location + '</span>' +
      '</div>' +
      '<span class="education-date">' + entry.date + '</span>' +
    '</div>' +
    '<h3 class="education-program">' + entry.program + '</h3>' +
    '<p class="education-university">' + entry.university + '</p>' +
    '<p class="education-gpa">' + entry.gpa + '</p>' +
    '<p class="education-courses">' + entry.courses + '</p>';

  return article;
};

const createExperienceItem = (entry) => {
  const article = document.createElement("article");
  article.className = "experience-item";

  const bullets = entry.points.map((point) => '<li>' + point + '</li>').join('');

  article.innerHTML =
    '<div class="experience-top">' +
      '<div class="experience-location">' +
        '<span class="experience-location-icon">◎</span>' +
        '<span>' + entry.location + '</span>' +
      '</div>' +
      '<span class="experience-date">' + entry.date + '</span>' +
    '</div>' +
    '<h3 class="experience-company">' + entry.company + '</h3>' +
    '<p class="experience-role">' + entry.role + '</p>' +
    '<ul class="experience-points">' + bullets + '</ul>';

  return article;
};

const createFeatureCard = (item) => {
  const article = document.createElement("article");
  article.className = "feature-card";
  if (item.image) article.classList.add("has-image");

  const imageMarkup = item.image
    ? '<img class="feature-image" src="' + item.image + '" alt="' + item.title + '" />'
    : "";

  article.innerHTML =
    '<div class="feature-image-wrap">' +
      imageMarkup +
      '<div class="feature-image-placeholder">' + item.placeholder + '</div>' +
    '</div>' +
    '<div class="feature-content">' +
      '<div class="feature-header">' +
        '<h3 class="feature-title">' + item.title + '</h3>' +
        '<div class="feature-date-row">' +
          '<span class="feature-meta">' + item.venue + ',</span>' +
          '<span class="feature-meta">' + item.date + '</span>' +
        '</div>' +
      '</div>' +
      '<p class="feature-description">' + item.description + '</p>' +
      '<div class="feature-link-wrap">' +
        '<a class="feature-link" href="' + item.link + '" target="_blank" rel="noreferrer">' + item.linkLabel + '</a>' +
        '<div class="feature-link-line"><span></span></div>' +
      '</div>' +
    '</div>';

  return article;
};

const createStackCard = (item) => {
  const article = document.createElement("article");
  article.className = "stack-card";
  article.innerHTML =
    '<span class="stack-label">' + item.label + '</span>' +
    '<h3>' + item.title + '</h3>' +
    '<p class="stack-copy">' + item.copy + '</p>';
  return article;
};

const createAwardCard = (item) => {
  const article = document.createElement("article");
  article.className = "award-card";
  article.innerHTML =
    '<span class="award-meta">' + item.meta + '</span>' +
    '<h3>' + item.title + '</h3>' +
    '<p class="award-copy">' + item.copy + '</p>';
  return article;
};

setText("hero-name", portfolio.name);
setText("hero-initials", portfolio.initials);
setText("hero-tagline", portfolio.title);
setText("hero-location", portfolio.location);
setText("hero-availability", portfolio.availability);
setText("hero-email-primary", portfolio.emails[0] || "");
setText("hero-email-secondary", portfolio.emails[1] || "");
setText("footer-name", portfolio.name);
document.title = portfolio.name + " | Portfolio";

const altEmailWrap = byId("hero-email-secondary-wrap");
if (portfolio.emails.length < 2 && altEmailWrap) {
  altEmailWrap.style.display = "none";
}

const resumeLink = byId("resume-link");
resumeLink.href = portfolio.resumeUrl;

const heroPhoto = byId("hero-photo");
if (portfolio.heroPhoto) {
  heroPhoto.classList.add("has-image");
  heroPhoto.style.backgroundImage = 'url("' + portfolio.heroPhoto + '")';
}

const aboutCopy = byId("about-copy");
portfolio.about.forEach((paragraph) => {
  const p = document.createElement("p");
  p.textContent = paragraph;
  aboutCopy.appendChild(p);
});

const socialLinks = byId("social-links");
portfolio.socials.forEach((social) => {
  const a = document.createElement("a");
  a.className = "social-link";
  a.href = social.href;
  a.target = "_blank";
  a.rel = "noreferrer";
  a.innerHTML = socialIconMarkup(social.label, "social-link-icon") + '<span>' + social.label + '</span>';
  socialLinks.appendChild(a);
});

const educationList = byId("education-list");
portfolio.education.forEach((entry) => educationList.appendChild(createEducationItem(entry)));

const experienceList = byId("experience-list");
portfolio.experience.forEach((entry) => experienceList.appendChild(createExperienceItem(entry)));

const researchList = byId("research-list");
portfolio.research.forEach((entry) => researchList.appendChild(createTimelineItem(entry)));

const projectList = byId("project-list");
portfolio.projects.forEach((project) => projectList.appendChild(createFeatureCard(project)));

const publicationList = byId("publication-list");
portfolio.publications.forEach((publication) => publicationList.appendChild(createFeatureCard(publication)));

const stackList = byId("stack-list");
portfolio.stack.forEach((item) => stackList.appendChild(createStackCard(item)));

const awardList = byId("award-list");
portfolio.awards.forEach((item) => awardList.appendChild(createAwardCard(item)));

const emailLink = byId("email-link");
emailLink.href = "mailto:" + (portfolio.emails[0] || "");

const contactEmails = byId("contact-emails");
portfolio.emails.forEach((email) => {
  const a = document.createElement("a");
  a.className = "footer-email-chip";
  a.href = "mailto:" + email;
  a.textContent = email;
  contactEmails.appendChild(a);
});

const footerSocials = byId("footer-socials");
portfolio.socials.forEach((social) => {
  const a = document.createElement("a");
  a.className = "footer-social-link";
  a.href = social.href;
  a.target = "_blank";
  a.rel = "noreferrer";
  a.innerHTML = socialIconMarkup(social.label, "footer-social-icon") + '<span>' + social.label + '</span>';
  footerSocials.appendChild(a);
});

const timeNode = byId("local-time");
const renderTime = () => {
  if (!timeNode) return;
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: portfolio.timezone,
    hour: "numeric",
    minute: "2-digit"
  });
  timeNode.textContent = formatter.format(new Date());
};

renderTime();
window.setInterval(renderTime, 60000);

const navShell = document.querySelector(".nav-shell-collapsed");
const navToggle = byId("nav-toggle");
const navPanel = byId("nav-panel");
const navLinks = document.querySelectorAll(".nav-panel-link");

const closeNav = () => {
  if (!navShell || !navToggle) return;
  navShell.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open section navigation");
};

const openNav = () => {
  if (!navShell || !navToggle) return;
  navShell.classList.add("nav-open");
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Close section navigation");
};

if (navToggle && navPanel) {
  navToggle.addEventListener("click", () => {
    const isOpen = navShell.classList.contains("nav-open");
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });

  document.addEventListener("click", (event) => {
    if (!navShell.contains(event.target)) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}
