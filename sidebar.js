const depth = window.location.pathname.split('/').length;

fetch(
    window.location.pathname.includes('/Team/index.html') ||
    window.location.pathname.endsWith('/Team/')
        ? './sidebar.html'
        : '../sidebar.html'
)
.then(r => r.text())
.then(html => {
    document.getElementById('sidebar-container').innerHTML = html;
});