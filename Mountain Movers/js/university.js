const universityData = {
    "Lehigh": {
        name: "Lehigh University",
        location: "Bethlehem, PA",
        services: [
            { name: "Summer Storage", price: "$200", description: "Secure storage for your belongings during summer break" },
            { name: "Moving Services", price: "$150", description: "Professional moving service between dorms or off-campus" },
            { name: "Greek Life Group Storage", price: "$100 per person", description: "Special rates for fraternity/sorority house moves" }
        ]
    },
    "PennState": {
        name: "Penn State University",
        location: "State College, PA",
        services: [
            { name: "Summer Storage", price: "$220", description: "Safe storage for your dorm essentials during break" },
            { name: "Moving Services", price: "$180", description: "Professional moving service between locations" },
            { name: "Greek Life Group Storage", price: "$120 per person", description: "Group rates for Greek life storage" }
        ]
    },
    "Temple": {
        name: "Temple University",
        location: "Philadelphia, PA",
        services: [
            { name: "Summer Storage", price: "$200", description: "Climate-controlled storage for summer break" },
            { name: "Moving Services", price: "$150", description: "Full-service moving between locations" },
            { name: "Greek Life Group Storage", price: "$100 per person", description: "Discounted group rates available" }
        ]
    }
};

function openUniversityPage(universityId) {
        const university = universityData[universityId];
        
        document.getElementById('universityName').textContent = university.name;
        document.getElementById('universityLocation').textContent = university.location;
        
        const servicesList = document.getElementById('servicesList');
        servicesList.innerHTML = university.services.map(service => `
            <div class="service-item">
                <h4>${service.name}</h4>
                <div class="price-tag">${service.price}</div>
                <p>${service.description}</p>
            </div>
        `).join('');
    
        document.getElementById('section_7').style.display = 'none';
        document.getElementById('university-page').style.display = 'block';
    
    
}

// Separate function for showing locations page
function showLocationsPage() {
    document.getElementById('section_7').style.display = 'block';
    document.getElementById('university-page').style.display = 'none';
}
