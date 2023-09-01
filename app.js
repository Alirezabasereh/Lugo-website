function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        //  else {
        //     reveals[i].classList.remove("active");
        // }
    }
}

window.addEventListener("scroll", reveal);


const faq_height = []
const faqitems = document.querySelectorAll('.itemfaq');
for (i = 0; i < faqitems.length; i++) {
    faq_height[i] = faqitems[i].clientHeight
    document.getElementsByClassName("itemfaq")[i].classList.add("height_zeroer")
}


faqitems.forEach(function (e, i) {
    e.setAttribute("data_state", "off")

    e.addEventListener('click', function () {

        let temp = e.getAttribute("data_state")
        if (temp == "off") {
            e.style.height = faq_height[i] + "px"
            e.setAttribute("data_state", "on")
            setTimeout(() => {
                e.style.height = "auto";
            }, 300);
            e.classList.add("faqitemshadow")
        }

        else {
            e.style.height = 50 + "px";
            e.setAttribute("data_state", "off")
            e.classList.remove("faqitemshadow")
        }
    })
})



let purchaseElement = document.getElementById("purchase");
let isMoving = false;

document.getElementsByClassName("purchasebutton")[0].addEventListener("click", function () {
    if (!isMoving) {
        purchaseElement.style.transform = "translateX(96%)";
        isMoving = true;
        
        document.getElementById("plan1").innerHTML = "$40"
        document.getElementById("plan1text").innerHTML = "/ annually"
        document.getElementById("plan2").innerHTML = "$80"
        document.getElementById("plan2text").innerHTML = "/ annually"
        document.getElementById("plan3").innerHTML = "$50"

        
    } else {
        purchaseElement.style.transform = "translateX(0)";
        isMoving = false;

        document.getElementById("plan1").innerHTML = "$49"
        document.getElementById("plan1text").innerHTML = "/ monthly "
        document.getElementById("plan2").innerHTML = "$99"
        document.getElementById("plan2text").innerHTML = "/ monthly "
        document.getElementById("plan3").innerHTML = "$59"
    }
});