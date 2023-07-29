const help1 = "home - go to default page.";
const help2 = "info - get more info about me.";
const help3 = "write-ups - browse my write-ups.";
const help4 = "resume - view my resume.";
const help5 = "clear - clear the screen.";

const info1 = "Name: Yousef Mohamed Abdelkhalek";
const info2 = "Email: joe.mohk1999@gmail.com";
const info3 = "Phone: +201002579394";
const info4 = "Age: 23";
const info5 = "Location: Cairo, Egypt";

const writeUps = "google-xss - XSS write up for XSS Game by Google."

const wrongInput = "Wrong input. Please try again. or type \"help\" to see options";

function handleKeyPress(event) {
    event.preventDefault();
    const labelElement = document.getElementById('inputCommand');
     const labelText = labelElement.value.trim().toLowerCase();
     const outputDiv = document.getElementById('output');
    labelElement.value = ''

    if (labelText === "help") {
        const h3Element1 = document.createElement('h3');
        h3Element1.textContent = help1;
        outputDiv.appendChild(h3Element1);
        const h3Element2 = document.createElement('h3');
        h3Element2.textContent = help2;
        outputDiv.appendChild(h3Element2);
        const h3Element3 = document.createElement('h3');
        h3Element3.textContent = help3;
        outputDiv.appendChild(h3Element3);
        const h3Element4 = document.createElement('h3');
        h3Element4.textContent = help4;
        outputDiv.appendChild(h3Element4);
        const h3Element5 = document.createElement('h3');
        h3Element5.textContent = help5;
        outputDiv.appendChild(h3Element5);
        window.scrollBy(0, 100);

    } else if (labelText === "clear") {
        while (outputDiv.firstChild) {
            outputDiv.removeChild(outputDiv.firstChild);
        }

    } else if (labelText === "write-ups") {
        const h3Element = document.createElement('h3');
        h3Element.textContent = writeUps;
        outputDiv.appendChild(h3Element);
        window.scrollBy(0, 100);

    } else if (labelText === "google-xss") {
        window.open("https://jmohk.github.io/google-xss/main.html", '_blank');

    } else if (labelText === "home") {
        location.reload();

    } else if (labelText === "write") {
        window.open("https://www.google.com", '_blank');

    } else if (labelText === "info") {
        const h3Element1 = document.createElement('h3');
        h3Element1.textContent = info1;
        outputDiv.appendChild(h3Element1);
        const h3Element2 = document.createElement('h3');
        h3Element2.textContent = info2;
        outputDiv.appendChild(h3Element2);
        const h3Element3 = document.createElement('h3');
        h3Element3.textContent = info3;
        outputDiv.appendChild(h3Element3);
        const h3Element4 = document.createElement('h3');
        h3Element4.textContent = info4;
        outputDiv.appendChild(h3Element4);
        const h3Element5 = document.createElement('h3');
        h3Element5.textContent = info5;
        outputDiv.appendChild(h3Element5);
        window.scrollBy(0, 100);

    } else {
        const h3Element = document.createElement('h3');
        h3Element.textContent = wrongInput;
        outputDiv.appendChild(h3Element);
        window.scrollBy(0, 100);
    }
}

