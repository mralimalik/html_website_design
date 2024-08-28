document.getElementById("sidebarbutton").addEventListener("click", () => {
    document.getElementById("nav").style.flexDirection = "column";
    document.getElementById("nav").style.gap = "10px";
    document.getElementById("navlist").style.display = "flex";
    document.getElementById("navlist").style.flexDirection = "column";
    document.getElementById("navlist").style.gap = "20px";
    document.getElementById("sidebarbutton").style.display = "none";
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        // Reset the navigation bar to its default state
        document.getElementById("nav").style.flexDirection = "";
        document.getElementById("nav").style.gap = "";
        document.getElementById("navlist").style.display = "";
        document.getElementById("navlist").style.flexDirection = "";
        document.getElementById("navlist").style.gap = "";
        document.getElementById("sidebarbutton").style.display = "";
    }
});
