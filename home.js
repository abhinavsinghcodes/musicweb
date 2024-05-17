function show() {
    const dropdown_menu = document.getElementById("dropdown-buttons").innerHTML;
    if (dropdown_menu.style.display === "block") {
        dropdown_menu.style.display = "none";
    }
    else {
        dropdown_menu.style.display = "block";
    }
}