document.addEventListener("DOMContentLoaded", function () {
    fetch("/navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Dropdown toggle
            const dropdownToggle = document.querySelector(".dropbtn-toggle");
            const dropdownMenu = document.querySelector(".dropdown-menu");

            if(dropdownToggle && dropdownMenu){
                dropdownToggle.addEventListener("click", function(e){
                    e.preventDefault();
                    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
                });

                // Close dropdown if click outside
                document.addEventListener("click", function(e){
                    if(!e.target.closest(".dropdown")){
                        dropdownMenu.style.display = "none";
                    }
                });
            }
        });
});