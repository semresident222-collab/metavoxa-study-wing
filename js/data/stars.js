const starsData = {
    current: {
        id: "2025-04", // Year-Month format
        name: "Diana Barnieh",
        location: "Berlin, Germany",
        age: 44,
        photo: "assets/stars/diana-barnieh.jpg", // Add photo here
        shortStory: "After years of life happening to her, Diana has decided to take matters into her own hands. At 44, with two children, she is reapplying to the Pflegefachkraft Ausbildung program to make her dream of becoming a nurse come true. Her courage represents every woman who refuses to let time or circumstance define her becoming.",
        fullStoryUrl: "https://substack.com/@metavoxa/diana-barnieh-star-april-2025",
        tags: ["Healthcare", "Second Career", "Motherhood", "Berlin"],
        nominationDate: "2025-04-01"
    },
    archive: [
        {
            id: "2025-03",
            name: "Placeholder Star One",
            location: "London, UK",
            photo: "assets/stars/placeholder-1.jpg",
            shortStory: "A community organizer fighting for housing rights...",
            fullStoryUrl: "https://substack.com/@metavoxa/star-march-2025",
            month: "March 2025"
        },
        {
            id: "2025-02",
            name: "Placeholder Star Two",
            location: "Lagos, Nigeria",
            photo: "assets/stars/placeholder-2.jpg",
            shortStory: "Teacher rebuilding education systems from the ground up...",
            fullStoryUrl: "https://substack.com/@metavoxa/star-february-2025",
            month: "February 2025"
        },
        {
            id: "2025-01",
            name: "Placeholder Star Three",
            location: "Tokyo, Japan",
            photo: "assets/stars/placeholder-3.jpg",
            shortStory: "Engineer creating accessible tech for elderly populations...",
            fullStoryUrl: "https://substack.com/@metavoxa/star-january-2025",
            month: "January 2025"
        }
    ]
};

/*
HOW TO EDIT STARS:

1. CURRENT STAR:
   - Replace the 'current' object above with new star data
   - Move the previous current star to the 'archive' array
   - Add photo to /assets/stars/ folder (recommended: 800x1000px, JPG)
   - Update photo path if using external URL instead

2. ARCHIVE:
   - Add previous stars to the 'archive' array
   - Keep array sorted by date (newest first)
   - Template for new archive entry:
   
   {
       id: "YYYY-MM",
       name: "Full Name",
       location: "City, Country",
       photo: "assets/stars/filename.jpg",
       shortStory: "2-3 sentences...",
       fullStoryUrl: "https://substack.com/@metavoxa/...",
       month: "Month YYYY"
   }

3. IMAGES:
   - For drag-drop simplicity: Use direct URLs from Unsplash or your Substack image CDN
   - Or place files in assets/stars/ and reference locally
*/
