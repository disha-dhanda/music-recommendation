document.addEventListener("DOMContentLoaded", () => {
    fetchRecommendations();
});

function fetchRecommendations() {
    fetch("http://127.0.0.1:5000/recommend?user_id=user123")  // Update with the actual user ID if needed
        .then(response => response.json())
        .then(data => {
            const recommendationsDiv = document.getElementById("recommendations");

            data.recommendations.forEach(song => {
                const songCard = document.createElement("div");
                songCard.className = "recommendation-card";
                
                const coverImageUrl = song.cover_image || 'https://via.placeholder.com/200x150';

                songCard.innerHTML = `
                    <div class="card-image" style="background-image: url('${coverImageUrl}')"></div>
                    <div class="card-content">
                        <div class="song-title">${song.title}</div>
                        <div class="artist">by ${song.artist}</div>
                        <div class="genre">Genre: ${song.genre}</div>
                    </div>
                `;
                
                recommendationsDiv.appendChild(songCard);
            });
        })
        .catch(error => console.error("Error fetching recommendations:", error));
}
