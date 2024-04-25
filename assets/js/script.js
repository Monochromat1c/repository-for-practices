document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");

    window.sidebarToggle = function () {
        sidebar.classList.toggle('show-sidebar');
    }
});
