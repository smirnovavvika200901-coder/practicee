function log(message) {
    console.log(message);
    const outputDiv = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = message;
    outputDiv.appendChild(p);
}
