
addEventListener("load", (event) => {

    let mo = new MutationObserver(function(mutations){
        
        clutter =  document.querySelector("[aria-label=Primary]")
        clutter.childNodes.forEach((item) => {
                if(badLabels.includes(item.getAttribute("aria-label"))){
                    item.remove()
                }
            }
        )
    });

    let title_observer = new MutationObserver(function(mutations){

        badLabels = ["Lists","Communities","Verified"]

        twitter = "<svg viewBox='328 355 335 276' xmlns='http://www.w3.org/2000/svg'><path d='M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425 Z'style='fill:#3BA9EE;'/></svg>"

        document.title = (function(){
            return (document.title.includes("/") ? document.title.split("/")[0] + "/ Twitter": "Twitter")
        }())

        if(!(document.querySelectorAll("[aria-label=Twitter]")[0] == undefined)){
            document.querySelectorAll("[aria-label=Twitter]")[0].querySelector("svg").innerHTML = twitter
        }

        try{

            innerElements = document.querySelector("[aria-label='Get Verified']").querySelectorAll("span")
            innerElements[0].innerText = "I will NOT buy verified twitter!"
            innerElements[1].innerText = "Elon musk does not deserve anymore money."
            innerElements[2].innerText = "Do not subscribe."
            document.querySelector("[aria-labelledby]").querySelectorAll("svg")[1].innerHTML = twitter
            document.querySelector("[aria-labelledby]").querySelectorAll("[dir=ltr]")[2].innerText = "Why would you want to waste money on this?"

            document.querySelector("[aria-labelledby]").querySelectorAll("[dir=ltr]")[9].innerText = "Donate."
            document.querySelector("[aria-labelledby]").querySelectorAll("[role=button]")[1].onclick = function(){window.location = "https://en.wikipedia.org/wiki/List_of_charitable_foundations"}
        }catch(ignore){}

    })

    title_observer.observe( document.head, {
        childList: true,
        attributes: true,
        // characterData: true, // twitter is very persistent about their stupid verified element
        // subtree: true,
        // attributeOldValue: true,
        // characterDataOldValue: true
    });

    mo.observe(document.body, {
        childList: true,
        // attributes: true,
        // characterData: true, // twitter is very persistent about their stupid verified element
        // // subtree: true,
        // attributeOldValue: true,
        // characterDataOldValue: true
    });

});

