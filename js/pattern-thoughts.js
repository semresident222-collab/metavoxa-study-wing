document.addEventListener('DOMContentLoaded', () => {
    // Calculate day of year (1-365)
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    const currentThought = getThoughtByDay(dayOfYear);
    
    // Update UI
    document.getElementById('current-day-number').textContent = String(dayOfYear).padStart(3, '0');
    document.getElementById('pattern-num').textContent = currentThought.id;
    document.getElementById('thought-title').textContent = currentThought.title;
    document.getElementById('thought-body').textContent = currentThought.body;
    document.getElementById('deeper-text').textContent = currentThought.deeper;
    
    // Handle Substack vs Giscus
    const substackBtn = document.getElementById('expand-substack');
    const giscusContainer = document.getElementById('giscus-container');
    const substackEmbed = document.getElementById('substack-embed');
    
    if (currentThought.substackUrl) {
        substackBtn.style.display = 'inline-block';
        substackBtn.onclick = () => window.open(currentThought.substackUrl, '_blank');
        substackEmbed.querySelector('iframe').src = currentThought.substackUrl;
        giscusContainer.style.display = 'none';
        substackEmbed.style.display = 'block';
    } else {
        // Configure Giscus for this specific thought
        if (window.giscus) {
            // Update giscus term for specific discussion thread
            const script = document.querySelector('script[src="https://giscus.app/client.js"]');
            script.setAttribute('data-term', `pattern-thought-${currentThought.id}`);
        }
    }
    
    // Render ghost connections
    renderGhostConnections(currentThought);
    
    // Render archive
    renderArchive();
});

function renderGhostConnections(thought) {
    const container = document.getElementById('ghost-connections');
    const connected = getConnectedThoughts(thought.id);
    
    if (connected.length === 0) return;
    
    connected.forEach((conn, idx) => {
        const ghost = document.createElement('div');
        ghost.className = 'ghost-card';
        ghost.style.right = `${20 + (idx * 30)}px`;
        ghost.style.top = `${20 + (idx * 20)}px`;
        ghost.style.opacity = '0.15';
        ghost.innerHTML = `
            <span class="ghost-num">#${conn.id}</span>
            <span class="ghost-title">${conn.title}</span>
        `;
        container.appendChild(ghost);
    });
}

function renderArchive() {
    const grid = document.getElementById('archive-grid');
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const currentDay = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    
    // Show all previous days + some future (as placeholders)
    patternThoughts.forEach((thought, idx) => {
        const dayNum = idx + 1;
        const isPast = dayNum < currentDay;
        const isToday = dayNum === currentDay;
        
        const page = document.createElement('div');
        page.className = `archive-page ${isPast ? 'detached' : ''} ${isToday ? 'today' : ''}`;
        page.innerHTML = `
            <div class="page-date">Day ${String(dayNum).padStart(3, '0')}</div>
            <div class="page-num">#${thought.id}</div>
            <div class="page-preview">${thought.title.substring(0, 40)}...</div>
            ${thought.connections ? `<div class="connection-hints">${thought.connections.length} links</div>` : ''}
        `;
        
        if (isPast || isToday) {
            page.onclick = () => viewHistoricalThought(thought);
        }
        
        grid.appendChild(page);
    });
}

function viewHistoricalThought(thought) {
    // Show modal or alert with historical thought (read-only)
    alert(`Pattern Thought #${thought.id}\n\n${thought.title}\n\n${thought.body}\n\nDeeper Layer: ${thought.deeper}\n\n(Comments closed — debate only active on today's thought)`);
}

function toggleArchive() {
    const modal = document.getElementById('archive-modal');
    modal.classList.toggle('active');
}
