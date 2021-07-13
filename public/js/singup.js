const submitBtn = document.getElementById('submitBtn')

console.log("my body is ready")

const createAccountHandler = async (event) => {
    event.preventDefault()
    console.log("in fetch")
    const newUserName = document.getElementById('userName').value.trim()
    const newEmail = document.getElementById('email').value.trim()
    const newPassword = document.getElementById('password').value.trim()

    if (newEmail, newUserName, newPassword) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ newUserName, newEmail, newPassword }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log("after fetch")
        console.log(response)
    }

    submitBtn.addEventListener("click", createAccountHandler);
}