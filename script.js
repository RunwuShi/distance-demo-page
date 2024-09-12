document.getElementById('toggle-btn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('active');
});