function openOverlay(title, year, imageUrl, tags, description, githubLink, liveDemoLink) {
    const overlay = document.getElementById('project-overlay');

    if (!overlay) return;

    overlay.querySelector('#overlay-title').textContent = title;
    overlay.querySelector('.overlay-year').textContent = year;
    overlay.querySelector('#overlay-image').src = imageUrl;
    overlay.querySelector('#overlay-image').alt = title;

    const tagsContainer = overlay.querySelector('.overlay-tags');
    tagsContainer.innerHTML = '';
    tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'overlay-tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });

    overlay.querySelector('.overlay-description').textContent = description;
    overlay.querySelector('#overlay-github').href = githubLink;
    overlay.querySelector('#overlay-demo').href = liveDemoLink;

    overlay.style.display = 'flex';
}

function closeOverlay() {
    const overlay = document.getElementById('project-overlay');

    if (overlay) {
        overlay.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.filter-item');
    const projectItems = document.querySelectorAll('.project-item');

    filterItems.forEach(filter => {
        filter.addEventListener('click', () => {
            const filterValue = filter.getAttribute('data-value');

            filterItems.forEach(item => item.classList.remove('active-filter'));
            filter.classList.add('active-filter');

            projectItems.forEach(project => {
                project.style.display = filterValue === 'all' || project.classList.contains(filterValue) ? 'flex' : 'none';
            });
        });
    });
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    const top = window.scrollY;
    sections.forEach(section => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const activeLink = document.querySelector(`header nav ul li a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




