document.addEventListener('DOMContentLoaded', () => {
    const selectedUniversity = localStorage.getItem('selectedUniversity');
    console.log('Selected University:', selectedUniversity);
    
    if (selectedUniversity) {
        document.getElementById('universityName').textContent = `${selectedUniversity}`;
        document.getElementById('universityLocation').textContent = `Available Services and Pricing for ${selectedUniversity} Students`;
        document.title = `${selectedUniversity} - Dorm To Door Storage`;

        const universityMap = {
            "Lehigh University": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.831218444482!2d-75.379187!3d40.606802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4438a5f7ffed1%3A0x6a58a5dc2d9a6b1b!2sLehigh%20University!5e0!3m2!1sen!2us",
            "University of Southern Carolina": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209715.76120398773!2d-81.0385!3d34.0007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8b3891d8d6e69%3A0x23c43bf49c2a6c4e!2sUniversity%20of%20South%20Carolina!5e0!3m2!1sen!2us",
            "Perkiomen": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.601567681063!2d-75.484562!3d40.332373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4418e4d8f6f6b%3A0x8e45e4e64f69f3f8!2sPerkiomen%20School!5e0!3m2!1sen!2us",
            "UC Schools": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12654498.736167364!2d-122.419416!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sUC+Schools!5e0!3m2!1sen!2us",
            "Duquesne University": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.648423009216!2d-79.989054!3d40.438148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7f61aa9e3c0a9%3A0x3e07b9f1aa24c461!2sDuquesne%20University!5e0!3m2!1sen!2us",
            "University of Pennsylvania": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.687164291237!2d-75.193214!3d39.952218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c62f80b1e53b%3A0x4a6b4e83c21cb021!2sUniversity%20of%20Pennsylvania!5e0!3m2!1sen!2us",
            "Clark University": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.087726729839!2d-71.824636!3d42.2518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4066b7c722c5d%3A0x6b6f8d2dcffac39!2sClark%20University!5e0!3m2!1sen!2us",
            "American University": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.777275250134!2d-77.089004!3d38.936881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b80b92f22683%3A0x5737301f90202d89!2sAmerican%20University!5e0!3m2!1sen!2us",
            "Lafayette College": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.141471615128!2d-75.209793!3d40.6984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c44316d23e3b9f%3A0x7052c63b11649a11!2sLafayette%20College!5e0!3m2!1sen!2us",
            "Colby": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11424.55695392129!2d-69.6244!3d44.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cadab6f65f1b6e7%3A0x4099879f6ed2e5c6!2sColby%20College!5e0!3m2!1sen!2sus",
            "Hill School": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.211801447027!2d-75.648262!3d40.248074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c692ef0bc61479%3A0x6f3c15470c55675a!2sThe%20Hill%20School!5e0!3m2!1sen!2sus",
            "West Chester": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.712538353684!2d-75.601391!3d39.960699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6e9e722b3c61d%3A0x6462aa0f6b1c5e10!2sWest%20Chester%20University!5e0!3m2!1sen!2sus",
            "St. Josephs": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.9782152080976!2d-75.241104!3d39.9945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c79a04e9150b%3A0x8fa88c8e4c02d03d!2sSaint%20Joseph&#39;s%20University!5e0!3m2!1sen!2sus",
            "Desales": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.392744157882!2d-75.375703!3d40.540161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4301bfbb8c7b1%3A0x4dcd7d69fa9e1fb1!2sDeSales%20University!5e0!3m2!1sen!2sus",
            "Moravian": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.7751904408585!2d-75.381395!3d40.630598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c442a8e6e8cb45%3A0xb74d6f17ff6e7aa3!2sMoravian%20University!5e0!3m2!1sen!2sus",
            "Muhlenburg": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.872778286268!2d-75.502253!3d40.601098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4303bb43adcb9%3A0x227e4a6a6aa4c5b9!2sMuhlenberg%20College!5e0!3m2!1sen!2sus",
            "College of the Holy Cross": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.7097245450885!2d-71.810936!3d42.238358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4072a41a77f07%3A0xa164d1266f0a5f66!2sCollege%20of%20the%20Holy%20Cross!5e0!3m2!1sen!2sus",
            "Cornell University": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.413657646548!2d-76.478238!3d42.447621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d0f6e4c2e7e3b9%3A0x7a2f2c3e9b5e0e7e!2sCornell%20University!5e0!3m2!1sen!2sus",
            "FairField University": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.872778286268!2d-73.261261!3d41.160827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0b7f2e0e3c6f%3A0x6f3c15470c55675a!2sFairfield%20University!5e0!3m2!1sen!2sus"
        };

        if (universityMap[selectedUniversity]) {
            document.getElementById('university-map').src = universityMap[selectedUniversity];
        }

        localStorage.removeItem('selectedUniversity');
    }
});