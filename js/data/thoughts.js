const patternThoughts = [
    {
        id: "001",
        title: "The silence between words is where meaning",
        body: "We fill our days with noise—notifications, opinions, the endless scroll. But meaning doesn't arrive announced. It slips in during the pause. The breath between sentences. The moment before you respond. Today, notice where you rush to fill the quiet. What might be waiting there?",
        deeper: "The quietest people often have the loudest minds.",
        connections: ["089", "200"], // Ghost line connections
        substackUrl: null // Use Giscus
    },
    {
        id: "002",
        title: "You are not late. The world is just early",
        body: "We measure ourselves against clocks that were never ours. Someone else's timeline. Someone else's finish line. But growth has its own rhythm. The seed doesn't apologize for taking time to break soil. The river doesn't rush to reach the sea. You're exactly where you need to be. Even if it doesn't look like where you wanted.",
        deeper: "The most interesting people took the scenic route.",
        connections: ["150"],
        substackUrl: null
    },
    {
        id: "017",
        title: "Fine is the most dangerous word",
        body: "Fine is what we say when we've given up on being understood. When the truth feels too large and we've run the calculation that it won't land anyway. Fine is a wall that looks like an open door. It ends conversations that needed to continue. When did you last say fine and mean something else entirely?",
        deeper: "Fine is the abbreviation for: I don't trust you with the full story.",
        connections: ["045", "120"],
        substackUrl: "https://substack.com/@metavoxa/pattern-thought-017" // Example expanded thought
    },
    // ... Continue for all 360 thoughts from PDF
    // Placeholders for 361-365:
    {
        id: "361",
        title: "Placeholder — Future Thought",
        body: "This space awaits the next insight...",
        deeper: "The cycle continues.",
        connections: [],
        substackUrl: null,
        isPlaceholder: true
    },
    // ... 362-365 similar
];

// Helper to get thought by day number (1-365)
function getThoughtByDay(dayNum) {
    const index = ((dayNum - 1) % 365);
    return patternThoughts[index] || patternThoughts[0];
}

// Get connected thoughts data
function getConnectedThoughts(thoughtId) {
    const thought = patternThoughts.find(t => t.id === thoughtId);
    if (!thought || !thought.connections) return [];
    return thought.connections.map(id => patternThoughts.find(t => t.id === id)).filter(Boolean);
}
