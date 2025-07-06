const form = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('eventName').value.trim();
  const date = document.getElementById('eventDate').value;
  const description = document.getElementById('eventDescription').value.trim();

  if (!name || !date || !description) {
    alert("Please fill out all fields!");
    return;
  }

  const eventCard = document.createElement('div');
  eventCard.classList.add('event-card');
  eventCard.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Date:</strong> ${date}</p>
    <p>${description}</p>
  `;

  eventList.appendChild(eventCard);

  form.reset();
});
