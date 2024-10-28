const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode <i class="fas fa-sun"></i>';
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode <i class="fas fa-moon"></i>';
    }
});
            