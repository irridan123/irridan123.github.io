document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const collapse = document.querySelector(".navbar-collapse");

    toggler.addEventListener("click", function () {
        if (collapse.style.display === "flex") {
            collapse.style.display = "none";
        } else {
            collapse.style.display = "flex";
            collapse.style.flexDirection = "column";
            collapse.style.backgroundColor = "#f8f9fa";
            collapse.style.position = "absolute";
            collapse.style.top = "100%";
            collapse.style.left = "0";
            collapse.style.width = "100%";
            collapse.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            collapse.style.zIndex = "999";
        }
    });
});
