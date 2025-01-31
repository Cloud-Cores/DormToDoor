

document.addEventListener('DOMContentLoaded', () => {
    const selectedUniversity = localStorage.getItem('selectedUniversity');
    console.log('Selected University:', selectedUniversity);
    
    if (selectedUniversity) {
        document.getElementById('universityName').textContent = `${selectedUniversity}`;
        document.getElementById('universityLocation').textContent = `Available Services and Pricing for ${selectedUniversity} Students`;
        document.title = `${selectedUniversity} - Mountain Movers Storage`;
        localStorage.removeItem('selectedUniversity');
    }
});


