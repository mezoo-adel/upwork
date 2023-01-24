window.addEventListener("load",function(){
    let div1 = document.querySelector("#div1");
    let div2 = document.querySelector("#div2");
    let i1 = document.querySelector("#i1");
    let i2 = document.querySelector("#i2");
    let i3 = document.querySelector("#i3");
    let i4 = document.querySelector("#i4");
    let btn = document.querySelector("#btn");
    
    let location;
    
    div1.addEventListener('click', function () {
        i1.classList.add('hied');
        i2.classList.remove('hied');
        i4.classList.add('hied');
        i3.classList.remove('hied');
        location = "Create Account As Client";
        btn.innerHTML = location;
        btn.classList.add('change');
        btn.setAttribute('href', "clientReg.html");
        div1.classList.add('borc');
        div2.classList.remove('borc');
        location = "./clientReg.html";
    })
    
    div2.addEventListener('click', function () {
        i3.classList.add('hied');
        i4.classList.remove('hied');
        i2.classList.add('hied');
        i1.classList.remove('hied');
        location = "Create Account As Freelancer";
        btn.innerHTML = location;
        btn.classList.add('change');
        btn.setAttribute('href', "lancerReg.html");
        div2.classList.add('borc');
        div1.classList.remove('borc');
        location = "./lancerReg.html";
    
    })
    //go to specific page to sign in
    btn.onclick = function () {
        if (location!=null) {
            window.location = location;
        }
    };//close regester btn



});//close loading