document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const occupation = document.getElementById('occupation').value;

    if (name === '' || gender === '' || phone === '' || occupation === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Account created successfully for ${name}!\nGender: ${gender}\nPhone: ${phone}\nOccupation: ${occupation}`);
    
    window.location.href = "/HTML/loginPage.html";
});
