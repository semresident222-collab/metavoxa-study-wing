document.addEventListener('DOMContentLoaded', () => {
    renderCurrentStar();
    renderArchive();
});

function renderCurrentStar() {
    const container = document.getElementById('current-star');
    const star = starsData.current;
    
    container.innerHTML = `
        <div class="spotlight-effect"></div>
        <div class="star-content">
            <div class="star-photo-container">
                <img src="${star.photo}" alt="${star.name}" class="star-photo" onerror="this.src='https://via.placeholder.com/400x500/2c1810/d4af37?text=Star+Photo'">
                <div class="photo-frame"></div>
            </div>
            <div class="star-text">
                <span class="star-badge">Star of the Month — ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                <h1 class="star-name">${star.name}</h1>
                <p class="star-meta">${star.age} years old • ${star.location} • Mother of ${star.tags.includes('Motherhood') ? 'two' : 'children'}</p>
                <div class="star-story">
                    <p>${star.shortStory}</p>
                </div>
                <a href="${star.fullStoryUrl}" target="_blank" class="read-full-story">
                    Read Full Story →
                </a>
                <div class="star-tags">
                    ${star.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderArchive() {
    const grid = document.getElementById('archive-grid');
    
    starsData.archive.forEach(star => {
        const card = document.createElement('div');
        card.className = 'archive-star-card';
        card.innerHTML = `
            <img src="${star.photo}" alt="${star.name}" onerror="this.src='https://via.placeholder.com/300x400/1a1a1a/888?text=Archive'">
            <div class="archive-info">
                <h3>${star.name}</h3>
                <p class="archive-month">${star.month}</p>
                <p class="archive-location">${star.location}</p>
                <a href="${star.fullStoryUrl}" target="_blank" class="archive-link">Read →</a>
            </div>
        `;
        grid.appendChild(card);
    });
}
