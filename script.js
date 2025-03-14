//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value, 10);
    const output = document.getElementById("output");

    // Clear previous output
    output.textContent = "";

    if (!text || isNaN(delay) || delay < 0) {
        output.textContent = "Please enter a valid text and delay.";
        return;
    }

    await new Promise(resolve => setTimeout(resolve, delay));

    output.textContent = text;
});
