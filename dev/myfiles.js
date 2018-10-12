function compare(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

function changeImage(img) {
    var image = document.createElement("img");
    image.src = img;
    image.width = 1000;
    var content = document.getElementById("content");
    while(content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(image);
}

var summary_txt =
    {
        name: "summary.txt",
        type: "txt",
        text: "My name is Jonathan Ma, I'm a [[b;red;black]Computer Science] and [[b;red;black]Statistics] major with an [[b;red;black]Economics] Minor at [[b;red;black]University of Waterloo]\n\n" +
              "I'm experienced in [[b;aqua;black]C++/Linux] development from my internships writing clean and scalable code producing high performant applications. My expertise lies in distributed systems, especially in in-memory storage systems or databases.\n In terms of software, I am interested in developing and scaling infrastructure." +
              "My specialties and interest include:\n"+
              "[[b;deeppink;black]Distributed Systems, Unix Network Programming, Concurrency, Data Structure] (C++ STL)" +
              "\n\n"+
              "When not at work, I enjoy [[b;aqua;black]Web Development] creating unique user experiences like the one you are seeing now. I love tapping into my creativity and create unorthodox design. I pride myself in finding unique ways of representing information and media." +
              "\n\n"+
              "I have experience in [[b;aqua;black]finance] and I am interested in statistics. I have a good understanding in [[b;aqua;black]Equity Derivatives] and their valuation models. I was also exposed to [[b;aqua;black]Option Market Making], but I am more interested in learning quantitative approaches to capturing Alpha."+
              "\n\n" +
              "Finally, I want to improve my leadership and managerial skills, hence I am seeking PM opportunities and data science roles relating to growth, retention, and user behaviour."
              +"\n\n"



    };

var contact_txt =
    {
        name: "contact.txt",
        type: "txt",
        text: "E-mail: steevejoseph[ at ]knights.ucf.edu\n\n" +
              "LinkedIn: https://www.linkedin.com/in/steeve-joseph-6b2550126/\n\n" +
              /*"Facebook: https://www.facebook.com/majonathanj\n\n" +*/
              "GitHub:https://github.com/steevejoseph/\n"
    };

var resume_pdf =
    {
        name: "sjoseph_resume.pdf",
        type: "pdf",
        link: "sjoseph_resume.pdf"
    };

var resume_txt =
    {
        name: "resume.txt",
        type: "txt",
        text: "\
\n********************************************************************************\
\n                                  Steeve Joseph\
\nsteevejoseph@knights.ucf.edu                                           321.746.5672\
\n\
\nBachelor of Science in Computer Science\
\n********************************************************************************\
\n\
\n   Skills Summary\
\n   Languages: Python (proficient), Java (proficient), C (proficient),\
\n              JavaScript (familiar), C++ (familiar), SQL (familiar), R (familiar)\
\n   Operating Systems: Windows (XP/7/8/10), macOS, Linux (Ubuntu/Arch/Kali)\
\n   Frameworks/Libraries: ExpressJS, NodeJS, PassportJS, Django/Flask, Bootstrap, jQuery\
\n   Development Tools: Vim, Git, Plastic SCM, Unity, Atlassian JIRA (Scrum), LaTeX\
\n\
\n\
\n***************\
\nWork Experience\
\n***************\
\n Leidos\
\n Software Engineering Intern\
\n     - Wrote shell script to streamline process of backup/re-image, installation\
\n       and configuration of internal tooling. Decreased total downtime from 2 hours to 13 minutes.\
\n     - Wrote Python scripts to autonomously detect/react to remote processes and broadcasts.\
\n     - Helping investigate/build distributed virtualization architecture centered around Docker, AWS.\
\n     - Helping design front-end UI as well as functionality for portable clouds and cloud application interfaces.\
\n     - Providing support for OneSAF database production, database tool development,\
\n       and integration & testing of software on target systems.\
\n\
\n  ___________________________________________________________________________\
\n  DiSTI Corporation Orlando, FL\
\n  Software Engineering Intern\
\n     - Help plan, design, and develop military training simulations.\
\n     - Write/edit C# scripts to add functionality to simulations in Unity game engine.\
\n     - Troubleshoot proprietary software, product network, and target systems/network.\
\n\
\n\
\n**********************************\
\nCompetitions and Personal Projects\
\n***********************************\
\n\
\n   Testopian (Testing framework for automated trading algorithms)\
\n   PL/0 Compiler\
\n   Yelp Camp (RESTful CRUD campground review site)\
\n   Financial Analyzer\
\n   Motion Detector\
\n\
\n\
\n*********\
\nEducation\
\n*********\
\n\
\n   University of Central Florida\
\n\
"
    };

var welcome_txt =
    {
        name: "welcome.txt",
        type: "txt",
        text: "[[b;aqua;black]Welcome to my Website. My name is Steeve Joseph]\nHave a look around! :) \n\nPress ` to minimize the terminal. Available commands are:\n" +
              "[[b;red;black]cd], [[b;red;black]ls], [[b;red;black]cat], [[b;red;black]open] (opens file like pdf and jpg)\n"
    };

var art_1 =
    {
        name: "DoughBoys.jpg",
        type: "pic",
        link: "images/DoughBoys.jpg"
    };
var art_2 =
    {
        name: "EnchantedBike.jpg",
        type: "pic",
        link: "images/EnchantedBike.jpg"
    };
var art_3 =
    {
        name: "HeartTouching.jpg",
        type: "pic",
        link: "images/HeartTouching.jpg"
    };
var art_4 =
    {
        name: "McDonaldMystery.jpg",
        type: "pic",
        link: "images/McDonaldMystery.jpg"
    };
var art_5 =
    {
        name: "NewYorkStarryNight.jpg",
        type: "pic",
        link: "images/NewYorkStarryNight.jpg"
    };
var art_6 =
    {
        name: "PaintingImitation.jpg",
        type: "pic",
        link: "images/PaintingImitation.jpg"
    };
var art_7 =
    {
        name: "PenDrawing.jpg",
        type: "pic",
        link: "images/PenDrawing.jpg"
    };
var art_8 =
    {
        name: "SeaMonster.jpg",
        type: "pic",
        link: "images/SeaMonster.jpg"
    };

var art =
    {
        name: "Art",
        type: "folder",
        kids: [art_1, art_2, art_3, art_4, art_5, art_6, art_7, art_8],
        back: projects,
        setg: { prompt: '[[b;lawngreen;black]steevejoseph.me:/Projects/Art~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                     "SeaMonster.jpg",
                     "PenDrawing.jpg",
                     "PaintingImitation.jpg",
                     "NewYorkStarryNight.jpg",
                     "McDonaldMystery.jpg",
                     "HeartTouching.jpg",
                     "EnchantedBike.jpg",
                     "DoughBoys.jpg"
                              ]);},
              }
    };

var motion =
    {
        name: "motion.git",
        type: "pdf",
        link: "https://github.com/steevejoseph/motion"
    };
var finany =
    {
        name: "finany.git",
        type: "pdf",
        link: "https://github.com/steevejoseph/stock_visualizer"
    };

var coding =
    {
        name: "Coding",
        type: "folder",
        kids: [motion, finany],
        back: projects,
        setg: { prompt: '[[b;lawngreen;black]steevejoseph.me:/Projects/Coding~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                            'simplewebsocket.git',
                            'predictious-bot.git'
                              ]);},
              }
    };



var aboutme =
    {
        name: "AboutMe",
        type: "folder",
        kids: [resume_pdf, contact_txt, resume_txt /*,summary_txt*/],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]steevejoseph.me:/AboutMe~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                              'summary.txt',
                              'resume.txt',
                              'contact.txt',
                              'sjoseph_resume.pdf'
                              ]);},
              }
    };

var projects =
    {
        name: "Projects",
        type: "folder",
        kids: [/*art,*/ coding],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]steevejoseph.me:/Projects~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                              'Coding',
                              'Art',
                              ]);},
              }
    };

var blog =
    {
        name: "Blog",
        type: "folder",
        kids: [],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]steevejoseph.me:/Blog~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                              ]);},
              }
    };
var home =
    {
        name: "Home",
        type: "folder",
        kids: [aboutme, blog, projects, welcome_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]steevejoseph.me:/~] ',
                name:   'jonathan.ma',
                completion: function(term, string, callback) {
                    callback([
                              'welcome.txt',
                              'Projects',
                              'Blog',
                              'AboutMe',
                              ]);},
              }



    };

aboutme.back = home;
blog.back = home;
projects.back = home;
art.back = projects;
coding.back = projects;
