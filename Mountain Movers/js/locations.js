const universities = [
    { name: "Lehigh University", id: "Lehigh" },
    { name: "Penn State University", id: "PennState" },
    { name: "Temple University", id: "Temple" },
    { name: "Rutgers University", id: "Rutgers" },
    { name: "Drexel University", id: "Drexel" },
    { name: "University of Pennsylvania", id: "UPenn" },
    { name: "Lafayette College", id: "Lafayette" }
];

function showSuggestions() {
    const input = document.getElementById("search-bar");
    const inputValue = input.value.toLowerCase();
    const suggestionsList = document.getElementById("suggestions-list");

    suggestionsList.innerHTML = "";

    if (!inputValue) {
        suggestionsList.style.display = "none";
        return;
    }

    const matches = universities.filter(univ => 
        univ.name.toLowerCase().includes(inputValue)
    );

    if (matches.length > 0) {
        matches.forEach(univ => {
            const li = document.createElement("li");
            li.classList.add("dropdown-item");
            
            const name = univ.name;
            const matchIndex = name.toLowerCase().indexOf(inputValue);
            const highlighted = `${name.substring(0, matchIndex)}<strong>${name.substring(matchIndex, matchIndex + inputValue.length)}</strong>${name.substring(matchIndex + inputValue.length)}`;
            
            li.innerHTML = highlighted;
            li.onclick = () => {
                input.value = univ.name;
                suggestionsList.style.display = "none";
                openUniversityPage(univ.id);  // Using the university ID to open the details page
            };
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = "block";
    } else {
        suggestionsList.style.display = "none";
    }
}

// Close suggestions when clicking outside
document.addEventListener("click", (e) => {
    const searchBar = document.getElementById("search-bar");
    const suggestionsList = document.getElementById("suggestions-list");
    if (!searchBar.contains(e.target)) {
        suggestionsList.style.display = "none";
    }
});


// Add input event listener
document.getElementById("search-bar").addEventListener("input", showSuggestions);
