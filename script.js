document.addEventListener("DOMContentLoaded", () => {
    const jokeButton = document.getElementById("jokeButton");
    const jokeDisplay = document.getElementById("joke");
    const contentContainer = document.querySelector(".content");
    let currentIndex = 0;
    let jokeParagraph = document.createElement("p"); // Move this line outside the click event

    jokeButton.addEventListener("click", () => {
        if (currentIndex >= jokesArray.length) {
            currentIndex = 0;
        }

        const joke = jokesArray[currentIndex];
        jokeParagraph.innerHTML = joke.replace(/\n/g, "<br>"); // Replace newline with <br> tag
        jokeDisplay.textContent = ""; // Clear the previous content before updating
        jokeDisplay.appendChild(jokeParagraph); // Append the updated jokeParagraph
        currentIndex++;
    });
});
