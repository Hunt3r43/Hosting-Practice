// Sidebar Toggle Functionality 

let openBtn = document.getElementById('open-btn');
let closeBtn = document.getElementById('close-btn');
let sidebar = document.getElementById('sidebar');

openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});


// =====================================================================