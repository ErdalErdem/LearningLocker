function copyInfo() {
    const tempTextArea = document.createElement('textarea');
    const email = document.getElementById('email').innerText;
    const phone = document.getElementById('phone').innerText;
    tempTextArea.value = `Email: ${email}\nPhone: ${phone}`;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Contact info copied to clipboard!');
}
