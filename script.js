document.getElementById('recommend-btn').addEventListener('click', async () => {
    const input = document.getElementById('user-input').value;

    if (!input) {
        alert('Please enter a mood or music preference.');
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:5000/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input })
        });

        const data = await response.json();
        displayRecommendations(data);
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        alert('Something went wrong. Please try again later.');
    }
});

function displayRecommendations(recommendations) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '<h2>Recommendations:</h2>';

    if (recommendations.length === 0) {
        recommendationsDiv.innerHTML += '<p>No recommendations available. Try a different input.</p>';
        return;
    }

    recommendations.forEach(song => {
        recommendationsDiv.innerHTML += `<p><strong>${song.title}</strong> - ${song.genre}</p>`;
    });
}
