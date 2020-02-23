

function toggle() {
    var display = document.getElementById("nav");
    if(window.getComputedStyle(display).display === "none")
    {
        display.style.display="block";
       
    }
    else{
        display.style.display = "none";
    }
    
}



function toggleNav() {
    var display = document.getElementById("toggle");
    if (window.getComputedStyle(display).visibility === "visible")
        document.getElementById("nav").style.display = "none";
}



function closeNav(elemt)
{    
 

    const arr = document.getElementById("nav").getElementsByTagName("a");

      for(i=0;i<arr.length;i++)
      {
           arr[i].className="";
      }

    elemt.getElementsByTagName('a')[0].className="active";

    var display = document.getElementById("nav");
    if (window.getComputedStyle(document.getElementById("toggle")).visibility === "visible")
               setTimeout(() => {
                   display.style.display = "none";
               }, 1000);
}





function debounce(func,wait=500,immediate=true) {

    var timeout;
    return function()
    {
        var context = this,args=arguments;
        var later = function(){
            timeout=null;
            if(!immediate) func.apply(context,args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout =setTimeout(later,wait);
        if(callNow) func.apply(context,args);
        };
};




function visible(bounding) {
    
    if (bounding.top >= 0 && bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    {
       return 0;   
    }
    else{
        return 1;
    }
}




function fade() 
{
       
    var wpr1 = document.getElementsByClassName("wpr1")[0].getBoundingClientRect();
    var wpr2 = document.getElementsByClassName("wpr2")[0].getBoundingClientRect();
    var wpr3 = document.getElementsByClassName("wpr3")[0].getBoundingClientRect();
    var wpr4 = document.getElementsByClassName("wpr4")[0].getBoundingClientRect();
    var wpr5 = document.getElementsByClassName("wpr5")[0].getBoundingClientRect();
    var wpr6 = document.getElementsByClassName("wpr6")[0].getBoundingClientRect();
    var wpr7 = document.getElementsByClassName("wpr7")[0].getBoundingClientRect();
    var wpr8 = document.getElementsByClassName("wpr8")[0].getBoundingClientRect();
    var wpr9 = document.getElementsByClassName("wpr9")[0].getBoundingClientRect();
    var wpr10 = document.getElementsByClassName("wpr10")[0].getBoundingClientRect();

    var wpl1 = document.getElementsByClassName("wpl1")[0].getBoundingClientRect();
    var wpl2 = document.getElementsByClassName("wpl2")[0].getBoundingClientRect();
    var wpl3 = document.getElementsByClassName("wpl3")[0].getBoundingClientRect();
    var wpl4 = document.getElementsByClassName("wpl4")[0].getBoundingClientRect();
    var wpl5 = document.getElementsByClassName("wpl5")[0].getBoundingClientRect();
    var wpl6 = document.getElementsByClassName("wpl6")[0].getBoundingClientRect();
    

    if (visible(wpr1)){
        $('.wpr1').removeClass("slideRight");
    }
    if (visible(wpr2)) {
        $('.wpr2').removeClass("slideRight");
    }
    if (visible(wpr3)) {
        $('.wpr3').removeClass("slideRight");
    }
    if (visible(wpr4)) {
        $('.wpr4').removeClass("slideRight");
    }
    if(visible(wpr5)){
        $('.wpr5').removeClass("slideRight");
    }
    if (visible(wpr6)) {
        $('.wpr6').removeClass("slideRight");
    }
    if(visible(wpr7)){
        $('.wpr7').removeClass("slideRight");
    }

    if (visible(wpr8)) {
        $('.wpr8').removeClass("slideRight");
    }
    if (visible(wpr9)) {
        $('.wpr9').removeClass("slideRight");
    }
    if(visible(wpr10)){
        $('.wpr10').removeClass("slideRight");
    }



    if (visible(wpl1)) {
        $('.wpl1').removeClass("slideLeft");
    }
    if (visible(wpl2)) {
        $('.wpl2').removeClass("slideLeft");
    }
    if (visible(wpl3)) {
        $('.wpl3').removeClass("slideLeft");
    }
    if (visible(wpl4)) {
        $('.wpl4').removeClass("slideLeft");
    }
    if (visible(wpl5)) {
        $('.wpl5').removeClass("slideLeft");
    }
    if(visible(wpl6)){
        $('.wpl6').removeClass("slideLeft");
    }








    $('.wpr1').waypoint(function () {
        $('.wpr1').addClass('slideRight');
    }, {
        
        offset: '80%'
    }); 
    
    $('.wpr2').waypoint(function () {
        $('.wpr2').addClass('slideRight');
    }, {
        offset: '80%'
    });

    $('.wpr3').waypoint(function () {
        $('.wpr3').addClass('slideRight');
    }, {
        offset: '80%'
    });



    $('.wpr4').waypoint(function () {
        $('.wpr4').addClass('slideRight');
    }, {
        offset: '80%'
    });


    $('.wpr5').waypoint(function () {
        $('.wpr5').addClass('slideRight');
    }, {
        offset: '80%'
    });


    $('.wpr6').waypoint(function () {
        $('.wpr6').addClass('slideRight');
    }, {
        offset: '80%'
    });

    $('.wpr7').waypoint(function () {
        $('.wpr7').addClass('slideRight');
    }, {
        offset: '80%'
    });

    $('.wpr8').waypoint(function () {
        $('.wpr8').addClass('slideRight');
    }, {
        offset: '90%'
    });


    $('.wpr9').waypoint(function () {
        $('.wpr9').addClass('slideRight');
    }, {
        offset: '80%'
    }); 
    
    $('.wpr10').waypoint(function () {
        $('.wpr10').addClass('slideRight');
    }, {
        offset: '80%'
    });








    $('.wpl1').waypoint(function () {
        $('.wpl1').addClass('slideLeft');
    }, {
        offset: '80%'
    }); 
    
    
    $('.wpl2').waypoint(function () {
        $('.wpl2').addClass('slideLeft');
    }, {
        offset: '80%'
    });
    
    
    $('.wpl3').waypoint(function () {
        $('.wpl3').addClass('slideLeft');
    }, {
        offset: '80%'
    });
    
    $('.wpl4').waypoint(function () {
        $('.wpl4').addClass('slideLeft');
    }, {
        offset: '80%'
    });
    
    $('.wpl5').waypoint(function () {
        $('.wpl5').addClass('slideLeft');
    }, {
        offset: '80%'
    });
    
    
    $('.wpl6').waypoint(function () {
        $('.wpl6').addClass('slideLeft');
    }, {
        offset: '80%'
    }); 








//nav color




    $('.wpr1').waypoint(function (direction) {
        if(direction === "up"){
        $("li > a").removeClass("active");
        document.getElementById("nav-home").classList.add("active");
        }
    }, {

        offset: '0%'
    });


    $('.wpr3').waypoint(function (direction) {
        if (direction === "up") {
        $("li > a").removeClass("active");
        document.getElementById("nav-reward").classList.add("active");
        }
    }, {
        offset: '0%'
    });



    $('.wpr5').waypoint(function (direction) {
        if (direction === "up") {
        $("li > a").removeClass("active");
            document.getElementById("nav-mode").classList.add("active");
        }
    }, {
        offset: '0%'
    });


    $('.wpr8').waypoint(function (direction) {
        if (direction === "up") {
        $("li > a").removeClass("active");
        document.getElementById("nav-character").classList.add("active");
        }
    }, {
        offset: '0%'
    });


    $('.wpr9').waypoint(function (direction) {
        if (direction === "up") {
        $("li > a").removeClass("active");
        document.getElementById("nav-event").classList.add("active");
        }
    }, {
        offset: '0%'
    });

    $('.wpr1').waypoint(function (direction) {
        if (direction === "down") {
            $("li > a").removeClass("active");
            document.getElementById("nav-home").classList.add("active");
        }
    }, {

        offset: '90%'
    });


    $('.wpr3').waypoint(function (direction) {
        if (direction === "down") {
            $("li > a").removeClass("active");
            document.getElementById("nav-reward").classList.add("active");
        }
    }, {
        offset: '90%'
    });



    $('.wpr5').waypoint(function (direction) {
        if (direction === "down") {
            $("li > a").removeClass("active");
            document.getElementById("nav-mode").classList.add("active");
        }
    }, {
        offset: '90%'
    });


    $('.wpr8').waypoint(function (direction) {
        if (direction === "down") {
            $("li > a").removeClass("active");
            document.getElementById("nav-character").classList.add("active");
        }
    }, {
        offset: '90%'
    });


    $('.wpr9').waypoint(function (direction) {
        if (direction === "down") {
            $("li > a").removeClass("active");
            document.getElementById("nav-event").classList.add("active");
        }
    }, {
        offset: '90%'
    });
}


function color(elemt) {
    $("li > a").removeClass("active");
    document.getElementById(elemt).classList.add("active");
}

function active(){

    $('.wpr1').addClass('slideRight');
    $('.wpr2').addClass('slideRight');
    $('.wpl1').addClass('slideLeft');



    var home   = document.getElementsByClassName("intro")[0].getBoundingClientRect();
    var reward = document.getElementsByClassName("reward")[0].getBoundingClientRect();
    var mode   = document.getElementsByClassName("mode")[0].getBoundingClientRect();
    var char   = document.getElementsByClassName("char")[0].getBoundingClientRect();
    var event  = document.getElementsByClassName("event")[0].getBoundingClientRect();




    if (visible(home)==0) {
        color("nav-home");
    }
    else if (visible(reward) == 0) {
        color("nav-reward"); 
    }
    else if (visible(mode)== 0) {
        color("nav-mode"); 
    }
    else if (visible(char)==0) {
        color("nav-character");
    }
    else if (visible(event)==0) {
        color("nav-event");
    }





    
}


window.addEventListener("scroll", debounce(fade));
window.addEventListener("load",active);