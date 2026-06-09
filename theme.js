const toggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');

if(savedTheme){
    document.documentElement.setAttribute('data-theme', savedTheme);
    toggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
}

toggle.addEventListener('click', () => {

    const current =
        document.documentElement.getAttribute('data-theme');

    if(current === 'light'){
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        toggle.textContent = '🌙';
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggle.textContent = '☀️';
    }

});