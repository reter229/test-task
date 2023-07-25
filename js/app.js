(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const section1Element = document.querySelector(".section-1");
    function toggleUnvisibleClass(entries, observer) {
        entries.forEach((entry => {
            if (entry.target.classList.contains("section-1") && entry.isIntersecting) document.body.classList.add("unvisible"); else document.body.classList.remove("unvisible");
        }));
    }
    const observer = new IntersectionObserver(toggleUnvisibleClass);
    observer.observe(section1Element);
    const addclassElement = document.querySelector(".add-class");
    function toggleUnvisible2Class(entries, observer) {
        entries.forEach((entry => {
            if (entry.target.classList.contains("add-class") && entry.isIntersecting) document.body.classList.add("unvisible-2"); else document.body.classList.remove("unvisible-2");
        }));
    }
    const observer2 = new IntersectionObserver(toggleUnvisible2Class);
    observer2.observe(addclassElement);
    window["FLS"] = true;
    isWebp();
})();