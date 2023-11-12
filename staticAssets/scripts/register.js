
async function registerUser(){
    console.log("Button has been pushed");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const name = document.getElementById("name")
    const organizationId = document.getElementById("organizationId")

    const userCredentials = {
        email: email.value,
        password: password.value,
        name: name.value,
        organizationId: organizationId.value,
    }
    console.log(userCredentials)
    try {
        const response = await fetch("/register/newUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userCredentials)
        })
        const result = await response.status;
        console.log(`Request Sent: ${result}`)
    } catch (error) {
        console.log(`Request Not Sent: ${error}`)
    }
}
