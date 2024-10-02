// sidebar.js
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return; // 确保 sidebar 存在

    const headings = document.querySelectorAll('h1');

    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id; // 为每个 h1 添加 id

        const anchor = document.createElement('a');
        anchor.href = `#${id}`;
        anchor.textContent = heading.textContent;
        sidebar.appendChild(anchor);
    });
});