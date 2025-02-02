const universities = [
    { name: "Lehigh University", id: "Lehigh" },
    { name: "Penn State University", id: "PennState" },
    { name: "Temple University", id: "Temple" },
    { name: "Rutgers University", id: "Rutgers" },
    { name: "Drexel University", id: "Drexel" },
    { name: "University of Pennsylvania", id: "UPenn" },
    { name: "Lafayette College", id: "Lafayette" }
];

function handleUniversitySelection(university) {
    localStorage.setItem('selectedUniversity', university.name);
    window.location.href = 'university.html';
}

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
                handleUniversitySelection(univ);
            };
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = "block";
    } else {
        suggestionsList.style.display = "none";
    }
}

// Add click handlers for university cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.university-card').forEach(card => {
        card.addEventListener('click', () => {
            const universityId = card.dataset.university;
            const university = universities.find(u => u.id === universityId);
            if (university) {
                handleUniversitySelection(university);
            }
        });
    });
});

document.addEventListener("click", (e) => {
    const searchBar = document.getElementById("search-bar");
    const suggestionsList = document.getElementById("suggestions-list");
    if (!searchBar.contains(e.target)) {
        suggestionsList.style.display = "none";
    }
});

document.getElementById("search-bar").addEventListener("input", showSuggestions);
