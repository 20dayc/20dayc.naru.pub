document.addEventListener('DOMContentLoaded', () => {
    fetch('/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('wrap').innerHTML = data;
        // 현재 주소에서 파일명 추출
        let currentPath = window.location.pathname;
        if (currentPath === '/') currentPath = '/index.html';
        // 모든 메뉴 링크를 순회하며 현재 페이지와 일치하면 'active' 클래스 추가
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
                // link.parentElement.classList.add('active');
            }
        });
    });
});