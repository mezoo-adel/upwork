
window.addEventListener('load', function () {

    $('.active').css('color', '#14a800')
    $('.unactive').on('mouseover', function () {
        // $(this).css('color','#14a800')
        $('.active').css('color', '#4b4b4b')
    });//end of spyScroll >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    $('.shadow-none').hover(function () {
        $(this).addClass('bg-light')
        $('.job_title').addClass('av_Connect')

    }).mouseleave(function () {
        $('.shadow-none').removeClass('bg-light')
        $('.job_title').removeClass('av_Connect')
    })

    //to highlight the first listOfSkils
    document.getElementsByClassName("listOfSkills")[0].classList.add("active");
    //get footer
    let navItem1 = this.document.querySelector("#collapseOne");
    let navItem2 = this.document.querySelector("#collapse2");
    let navItem3 = this.document.querySelector("#collapse3");
    let navItem4 = this.document.querySelector("#collapse4");
    //default for me is mobile
    if (window.innerWidth >= 768) {
        console.log("im small mediaScreen from if");
        navItem1.classList.add("show");
        navItem2.classList.add("show");
        navItem3.classList.add("show");
        navItem4.classList.add("show");
    }
    const mQuery = window.matchMedia('(max-width: 768px)');
    mQuery.addEventListener("change", function (e) {
        if (e.matches || window.innerWidth < 768) {
            console.log("im small media on littelScreen" + e.matches);
            navItem1.classList.remove("show");
            navItem2.classList.remove("show");
            navItem3.classList.remove("show");
            navItem4.classList.remove("show");
        } else {
            console.log("im NOT small media " + e.matches);
            navItem1.classList.add("show");
            navItem2.classList.add("show");
            navItem3.classList.add("show");
            navItem4.classList.add("show");
        }
    });//end of media query>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    //show more categories btn 
    navItem3 = document.getElementsByClassName("toBeShown");
    navItem4 = document.querySelector("#seeMoreCateg");
    let togleTxt = true;
    navItem4.addEventListener("click", function () {

        if (togleTxt) {
            seeMoreCateg.textContent = "Show less...";
            togleTxt = false;
            console.log(togleTxt);
        }
        else {
            seeMoreCateg.textContent = "Show more (4)";
            togleTxt = true;
            console.log(togleTxt);
        }
        navItem3[0].classList.add("d-none");
        navItem3[1].classList.add("d-none");
        navItem3[2].classList.add("d-none");
        navItem3[3].classList.add("d-none");

    });//onClick button closer>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    navItem2 = this.document.getElementsByClassName("listOfSkills");
    //on STARTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
    navItem2[0].classList.add("active");

    navItem1 = ["Data Entry Specialists", "Video Editors", "Data Analyst", "Shopify Developer", "Ruby on Rails Developer",
        "Android Developer", "Bookkeeper", "Content Writer", "Copywriter", "Database Administrator",
        "Data Scientist", "Front-End Developer", "Game Developer", "Graphic Designer", "iOS Developer", "Java Developer",
        "JavaScript Developer", "Logo Designer", "Mobile App Developer", "PHP Developer", "Python Developer", "Resume Writer",
        "SEO Expert", "Social Media Manager", "Software Developer", "Software Engineer", "Technical Writer", "UI Designer",
        "UX Designer", "Virtual Assistant", "Web Designer", "Wordpress Developer"];
    updatePargraphOFSkills(navItem1);
    navItem2[0].onclick = function () {

        navItem2[0].classList.add("active");
        navItem2[1].classList.remove("active");
        navItem2[2].classList.remove("active");
        navItem2[3].classList.remove("active");
        navItem1 = ["Data Entry Specialists", "Video Editors", "Data Analyst", "Shopify Developer", "Ruby on Rails Developer",
            "Android Developer", "Bookkeeper", "Content Writer", "Copywriter", "Database Administrator",
            "Data Scientist", "Front-End Developer", "Game Developer", "Graphic Designer", "iOS Developer", "Java Developer",
            "JavaScript Developer", "Logo Designer", "Mobile App Developer", "PHP Developer", "Python Developer", "Resume Writer",
            "SEO Expert", "Social Media Manager", "Software Developer", "Software Engineer", "Technical Writer", "UI Designer",
            "UX Designer", "Virtual Assistant", "Web Designer", "Wordpress Developer"];
        console.log("clicked" + navItem2[0]);

        updatePargraphOFSkills(navItem1);
    }//onClick button closer//onClick button closer
    navItem2[1].onclick = function () {
        navItem2[0].classList.remove("active");
        navItem2[1].classList.add("active");
        navItem2[2].classList.remove("active");
        navItem2[3].classList.remove("active");

        navItem1 = ["Blockchain", "Go development", "Node.js", "Vue.js", "HR consulting", "Microsoft Power BI", "Instructional design", "React.js", "Videographers", "HTML5 Developers", "Ghostwriters", "Unity 3D Developers", "Business Consultants", "Coders", "Marketing Consultants", "Web Developers", "Illustrators", "Google AdWords Experts", "Digital Marketers", "Project Managers", "Arduino Programmers", "Ruby Developers", "AngularJS Devleopers", "Full Stack Developers", "Email Marketing Consultants", "React Native Developers", "Swift Developers", "CSS Developers", "Google Sketchup Freelancers", "Back End Developers", "Smartsheet Freelancers", "Zoom Video Conferencing Freelancers"];

        updatePargraphOFSkills(navItem1);
    }//onClick button closer
    navItem2[2].onclick = function () {
        navItem2[0].classList.remove("active");
        navItem2[1].classList.remove("active");
        navItem2[2].classList.add("active");
        navItem2[3].classList.remove("active");

        navItem1 = ["Accountants in US", "CAD Designers in US", "Curriculum Developer in US", "Ebook Designers in US", "Fashion Designers in US", "Ghostwriters in US", "Google Adwords Experts in US", "Graphic Designers in US", "JavaScript Developers in US", "Product Developers in US", "Shopify Developers in US", "SquareSpace Developers in US", "Tax Preparers in US", "Technical Support Agents in US", "Virtual Assistants in US", "Web Designers in US", "WooCommerce Developers in US", "WordPress Developers in US", "Writers in US", "Zoho CRM Specialists in US", "Accountants Near North Carolina", "Adobe Photoshop Experts Near San Antonio, TX", "Android Developers Near San Francisco, CA", "Bookkeepers Near Los Angeles, CA", "Business Coaches Near Atlanta, GA", "Fashion Designers Near Los Angeles, CA", "Grant Writers Near Chicago, IL", "Graphic Designers Near New York, NY", "Logo Designers Near Pittsburgh, PA", "Mechanical Engineers Near Seattle, WA", "Music Producers Near Chicago, IL", "Photo Editors Near Los Angeles, CA", "Photographers Near Brooklyn, NY", "Product Photographers Near Seattle, WA", "Resume Writers Near Chicago, IL", "SEO Experts Near New York, NY", "Social Media Managers Near Los Angeles, CA", "Videographers Near Dallas, TX", "Virtual Assistants Near Charlotte, NC", "Web Designers Near San Francisc"];

        updatePargraphOFSkills(navItem1);
    }//onClick button closer
    navItem2[3].onclick = function () {
        navItem2[0].classList.remove("active");
        navItem2[1].classList.remove("active");
        navItem2[2].classList.remove("active");
        navItem2[3].classList.add("active");
        navItem1 = ["Resume Writing Services", "SEO Services", "Translation Services", "Transcription Services", "Virtual Assistant Services", "Email Marketing Services", "Web Design Services", "Proofreading Services", "Business Consulting Services", "Logo Design Services", "Architecture/Interior Design Services", "Branding Services", "Social Media Management Services", "Video Editing Services", "Lead Generation Services", "Content Marketing Services", "Survey Services", "Landscape Design Services", "Photoshop Services", "Mobile App Development Services", "Data Entry Services", "Building Information Modeling Services", "Podcast Editing Services", "Wellness Services", "HR Consulting Services", "Video Marketing Services", "WordPress Development Services", "Ecommerce Services", "Influencer Marketing Services", "Public Relations Services", "QA Services", "Podcast Marketing Services"];

        updatePargraphOFSkills(navItem1);
    }//onClick button closer

    // update paragraphs in skills section
    function updatePargraphOFSkills(navItem1) {
        navItem2[0].parentElement.parentElement.nextElementSibling.innerHTML = null;
        navItem2[0].parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML = null;
        for (let index = 0; index < navItem1.length / 2; index++) {
            navItem2[0].parentElement.parentElement.nextElementSibling.innerHTML += ` <p>${navItem1[index]}</p>`;
        }
        for (let index = navItem1.length / 2; index < navItem1.length; index++) {
            navItem2[0].parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML += ` <p>${navItem1[index]}</p>`;
        }
    }



    
});//end Loading