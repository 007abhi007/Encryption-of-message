function encryptMessage() {
    const message = document.getElementById('textInput').value;
    const password = document.getElementById('passwordInput').value;

    if (password === "1234") {  // Simple password check
        const encodedMessage = btoa(message);  // Base64 encode
        document.getElementById('output').value = encodedMessage;
    } else if (password === "") {
        alert("Please enter a password!");
    } else {
        alert("Invalid password!");
    }
}

function decryptMessage() {
    const encodedMessage = document.getElementById('textInput').value;
    const password = document.getElementById('passwordInput').value;

    if (password === "8463") {  // Simple password check
        try {
            const decodedMessage = atob(encodedMessage);  // Base64 decode
            document.getElementById('output').value = decodedMessage;
        } catch (e) {
            alert("Invalid encoded message!");
        }
    } else if (password === "") {
        alert("Please enter a password!");
    } else {
        alert("Invalid password!");
    }
}
