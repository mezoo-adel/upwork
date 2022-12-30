
window.addEventListener('load', function () {

    $('.active').css('color', '#14a800')
    $('.unactive').on('mouseover', function () {

        // $(this).css('color','#14a800')
        $('.active').css('color', '#4b4b4b')
    });
    let navItem1 = this.document.querySelector("#collapseOne");
    let navItem2 = this.document.querySelector("#collapse2");
    let navItem3 = this.document.querySelector("#collapse3");
    let navItem4 = this.document.querySelector("#collapse4");
   //default for me is mobile
    if ( window.innerWidth >= 768 ) {
        console.log("im small mediaScreen from if" );
        navItem1.classList.add("show");
        navItem2.classList.add("show");
        navItem3.classList.add("show");
        navItem4.classList.add("show");
    }
    const mQuery = window.matchMedia('(max-width: 768px)');
    mQuery.addEventListener("change", function (e) {
        if (e.matches || window.innerWidth < 768 ) {
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
    });//end of media query

    //show more categories btn 
let toBeShown = document.getElementsByClassName("toBeShown");
let seeMoreBtn = document.querySelector("#seeMoreCateg");
let togleTxt = true;
seeMoreBtn.addEventListener("click", function () {

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
    toBeShown[0].classList.toggle("d-none");
    toBeShown[1].classList.toggle("d-none");
    toBeShown[2].classList.toggle("d-none");
    toBeShown[3].classList.toggle("d-none");

});//onClick button closer







});//end Loading