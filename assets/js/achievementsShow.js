document.addEventListener('DOMContentLoaded', (event) => {
    const timeline = document.getElementById('timeline');
    const eventInput = document.getElementById('event-input');
    const dateInput = document.getElementById('date-input');
    const addEventBtn = document.getElementById('add-event-btn');

    addEventBtn.addEventListener('click', addEvent);

    function addEvent() {
        const eventText = eventInput.value.trim();
        const eventDate = dateInput.value;

        if (eventText && eventDate) {
            const eventData = { text: eventText, date: eventDate };
            
            const events = JSON.parse(localStorage.getItem('timelineEvents')) || [];
            events.push(eventData);
            events.sort((a, b) => new Date(a.date) - new Date(b.date));
            localStorage.setItem('timelineEvents', JSON.stringify(events));

            eventInput.value = '';
            dateInput.value = '';
            renderTimeline();
        }
    }

    function renderTimeline() {
        const events = JSON.parse(localStorage.getItem('timelineEvents')) || [];
        timeline.innerHTML = '';
        events.forEach(eventData => {
            const node = document.createElement('div');
            node.classList.add('timeline-node');
            node.innerHTML = `<div class="date">${eventData.date}</div><div class="description">${eventData.text}</div>`;
            timeline.appendChild(node);
        });
    }

    renderTimeline();
});