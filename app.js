document.getElementById('reminder-form').addEventListener('submit', addReminder);

let reminders = [];

function addReminder(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const time = document.getElementById('time').value;

    const reminder = {
        id: Date.now(),
        title,
        description,
        time: new Date(time),
        notified: false
    };

    reminders.push(reminder);
    displayReminders();
    document.getElementById('reminder-form').reset();
}

function displayReminders() {
    const remindersList = document.getElementById('reminders-list');
    remindersList.innerHTML = '';

    reminders.forEach((reminder) => {
        const reminderItem = document.createElement('div');
        reminderItem.classList.add('reminder');

        reminderItem.innerHTML = `
            <h3>${reminder.title}</h3>
            <p>${reminder.description}</p>
            <p>Remind at: ${reminder.time.toLocaleString()}</p>
            <button onclick="editReminder(${reminder.id})">Edit</button>
            <button onclick="deleteReminder(${reminder.id})">Delete</button>
        `;

        remindersList.appendChild(reminderItem);
    });
}

function editReminder(id) {
    const reminder = reminders.find(r => r.id === id);
    document.getElementById('title').value = reminder.title;
    document.getElementById('description').value = reminder.description;
    document.getElementById('time').value = reminder.time.toISOString().slice(0,16);

    deleteReminder(id);
}

function deleteReminder(id) {
    reminders = reminders.filter(r => r.id !== id);
    displayReminders();
}

setInterval(() => {
    const now = new Date();
    reminders.forEach(reminder => {
        if (!reminder.notified && now >= reminder.time) {
            alert(`Reminder: ${reminder.title}`);
            reminder.notified = true;
        }
    });
}, 60000);
