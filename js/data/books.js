const libraryData = [
    {
        theme: "Race and Medicine",
        slug: "race-medicine",
        description: "Examining the intersection of racial constructs and medical practice",
        books: [
            {
                id: "rm-1",
                title: "Medical Apartheid",
                author: "Harriet A. Washington",
                year: "2007",
                category: "books", // books | research | essays
                cover: "https://via.placeholder.com/200x300/2c1810/d4af37?text=Medical+Apartheid",
                readerNote: "Essential reading on the history of medical experimentation on Black bodies. Changed how I view clinical trials.",
                recommendedBy: "MetaVoxa",
                url: null // Not clickable for books
            },
            {
                id: "rm-2",
                title: "Race in the Machine",
                author: "Dr. Martha Koroma",
                year: "2024",
                category: "research",
                cover: "https://via.placeholder.com/200x300/1a1a1a/gold?text=Race+in+Machine",
                readerNote: "My Lancet Psychiatry research on algorithmic bias in diagnostic tools.",
                recommendedBy: "MetaVoxa",
                url: "https://www.thelancet.com/journals/lanpsy/article/fulltext/..." // Clickable
            },
            {
                id: "rm-3",
                title: "The Colour of Pain",
                author: "MetaVoxa",
                year: "2025",
                category: "essays",
                cover: "https://via.placeholder.com/200x300/3d2817/f5e6d3?text=Colour+of+Pain",
                readerNote: "Personal essay on witnessing racial disparities in emergency rooms.",
                recommendedBy: "MetaVoxa",
                url: "https://substack.com/@metavoxa/colour-of-pain" // Redirects to Substack
            },
            {
                id: "rm-4",
                title: "Just Medicine",
                author: "Dayna Bowen Matthew",
                year: "2015",
                category: "books",
                cover: "https://via.placeholder.com/200x300/4a3728/d4af37?text=Just+Medicine",
                readerNote: "A cure for the unequal treatment in healthcare.",
                recommendedBy: "Community",
                url: null
            },
            {
                id: "rm-5",
                title: "Implicit Bias in Healthcare AI",
                author: "Various",
                year: "2023",
                category: "research",
                cover: "https://via.placeholder.com/200x300/2d2d2d/ffffff?text=AI+Bias+Study",
                readerNote: "Meta-analysis of racial bias in diagnostic algorithms.",
                recommendedBy: "Dr. A. Smith",
                url: "https://nature.com/articles/..."
            },
            {
                id: "rm-6",
                title: "When the Doctor Doesn't Look Like You",
                author: "MetaVoxa",
                year: "2025",
                category: "essays",
                cover: "https://via.placeholder.com/200x300/5c4033/f5e6d3?text=Representation",
                readerNote: "On the loneliness of being the only one in the room.",
                recommendedBy: "MetaVoxa",
                url: "https://substack.com/@metavoxa/representation-matters"
            }
        ]
    },
    {
        theme: "Power and Institutions",
        slug: "power-institutions",
        description: "Mapping how power flows through systems",
        books: [
            {
                id: "pi-1",
                title: "The Power Broker",
                author: "Robert Caro",
                year: "1974",
                category: "books",
                cover: "https://via.placeholder.com/200x300/1c1c1c/d4af37?text=Power+Broker",
                readerNote: "How institutions actually work vs. how they say they work.",
                recommendedBy: "MetaVoxa",
                url: null
            },
            {
                id: "pi-2",
                title: "Institutional Corruption in Healthcare",
                author: "Dennis F. Thompson",
                year: "2018",
                category: "research",
                cover: "https://via.placeholder.com/200x300/2b1d16/c9b037?text=Institutional+Corr",
                readerNote: "Academic framework for understanding systemic rot.",
                recommendedBy: "Prof. J. Doe",
                url: "https://doi.org/..."
            },
            {
                id: "pi-3",
                title: "The Gatekeepers",
                author: "MetaVoxa",
                year: "2025",
                category: "essays",
                cover: "https://via.placeholder.com/200x300/3e2723/f5e6d3?text=Gatekeepers",
                readerNote: "Who gets to decide who becomes a nurse?",
                recommendedBy: "MetaVoxa",
                url: "https://substack.com/@metavoxa/gatekeepers"
            },
            {
                id: "pi-4",
                title: "Seeing Like a State",
                author: "James C. Scott",
                year: "1998",
                category: "books",
                cover: "https://via.placeholder.com/200x300/262626/d4af37?text=Seeing+State",
                readerNote: "How bureaucracies simplify complex realities.",
                recommendedBy: "Community",
                url: null
            },
            {
                id: "pi-5",
                title: "Structural Violence Theory",
                author: "Johan Galtung",
                year: "1969",
                category: "research",
                cover: "https://via.placeholder.com/200x300/1a1a1a/ffffff?text=Structural+Viol",
                readerNote: "The violence of institutions that prevent people from meeting their needs.",
                recommendedBy: "MetaVoxa",
                url: "https://jstor.org/..."
            },
            {
                id: "pi-6",
                title: "The Admin Will See You Now",
                author: "MetaVoxa",
                year: "2025",
                category: "essays",
                cover: "https://via.placeholder.com/200x300/4e342e/f5e6d3?text=Admin+Will+See",
                readerNote: "On the medicalization of administrative burden.",
                recommendedBy: "MetaVoxa",
                url: "https://substack.com/@metavoxa/admin-will-see-you"
            }
        ]
    },
    {
        theme: "Health Systems & Structural Reform",
        slug: "health-systems",
        description: "Reimagining care delivery and systemic architecture",
        books: [
            {
                id: "hs-1",
                title: "The Body Economic",
                author: "David Stuckler & Sanjay Basu",
                year: "2013",
                category: "books",
                cover: "https://via.placeholder.com/200x300/2c3e50/d4af37?text=Body+Economic",
                readerNote: "Why austerity kills.",
                recommendedBy: "MetaVoxa",
                url: null
            },
            {
                id: "hs-2",
                title: "Universal Health Coverage: A Global Study",
                author: "WHO Consortium",
                year: "2022",
                category: "research",
                cover: "https://via.placeholder.com/200x300/34495e/ffffff?text=UHC+Global",
                readerNote: "Comparative analysis of health system architectures.",
                recommendedBy: "Dr. R. Jones",
                url: "https://who.int/..."
            },
            {
                id: "hs-3",
                title: "Reform or Revolution?",
                author: "MetaVoxa",
                year: "2025",
                category: "essays",
                cover: "https://via.placeholder.com/200x300/3e2723/f5e6d3?text=Reform",
                readerNote: "Can we fix the system from within?",
                recommendedBy: "MetaVoxa",
                url: "https://substack.com/@metavoxa/reform-revolution"
            },
            {
                id: "hs-4",
                title: "An American Sickness",
                author: "Elisabeth Rosenthal",
                year: "2017",
                category: "books",
                cover: "https://via.placeholder.com/200x300/2c1810/d4af37?text=American+Sick",
                readerNote: "How healthcare became big business.",
                recommendedBy: "Community",
                url: null
            },
            {
                id: "hs-5",
                title: "Structural Reform in Nursing Education",
                author: "Martha Koroma",
                year: "2024",
                category: "research",
                cover: "https://via.placeholder.com/200x300/2d3436/ffffff?text=Nursing+Reform",
                readerNote: "My research on reforming Pflegefachkraft pathways.",
                recommendedBy: "MetaVoxa",
                url: "https://lancet.com/..."
            },
            {
                id: "hs-6",
                title: "The Waiting Room",
                author: "MetaVoxa",
                year: "2025",
                category: "essays",
                cover: "https://via.placeholder.com/200x300/4a3728/f5e6d3?text=Waiting+Room",
                readerNote: "Time as a weapon in structural healthcare violence.",
                recommendedBy: "MetaVoxa",
                url: "https://substack.com/@metavoxa/waiting-room"
            }
        ]
    },
    {
        theme: "Neurodivergence & Identity",
        slug: "neurodivergence",
        description: "AuDHD peace and the sovereign self",
        books: [
            {
                id: "nd-1",
                title: "Neuroqueer Heresies",
                author: "Nick Walker",
                year: "2021",
                category: "books",
                cover: "https://via.placeholder.com/200x300/4b0082/d4af37?text=Neuroqueer",
                readerNote: "Essential framework for understanding neurodivergence as identity.",
                recommendedBy: "MetaVoxa",
                url: null
            },
            {
                id: "nd-2",
                title: "AuDHD: Clinical Perspectives",
                author: "Dr. L. M. Brown",
                year: "2023",
                category: "research",
                cover: "https://via.placeholder.com/200x300/5d4e6d/ffffff?text=AuDHD+Clinical",
                readerNote: "The intersection of autism and ADHD in adult populations.",
                recommendedBy: "Dr. L. Brown",
                url: "https://pubmed.ncbi.nlm.nih.gov/..."
            },
            {
                id: "nd-3",
                title: "Pattern Thinking as Survival",
                author: "MetaVoxa",
                year: "2025",
                category: "essays",
                cover: "https://via.placeholder.com/200x300/6b4c7a/f5e6d3?text=Pattern+Think",
                readerNote: "How pattern recognition becomes a way of being.",
                recommendedBy: "MetaVoxa",
                url: "https://substack.com/@metavoxa/pattern-thinking"
            },
            {
                id: "nd-4",
                title: "Unmasking Autism",
                author: "Devon Price",
                year: "2022",
                category: "books",
                cover: "https://via.placeholder.com/200x300/4a2c4a/d4af37?text=Unmasking",
                readerNote: "Discovering the authentic self after decades of camouflage.",
                recommendedBy: "Community",
                url: null
            },
            {
                id: "nd-5",
                title: "Executive Function in AuDHD Adults",
                author: "Research Collective",
                year: "2024",
                category: "research",
                cover: "https://via.placeholder.com/200x300/3d2b3d/ffffff?text=Executive+Func",
                readerNote: "Why the old models don't fit the combined presentation.",
                recommendedBy: "MetaVoxa",
                url: "https://doi.org/..."
            },
            {
                id: "nd-6",
                title: "The Sovereign Ecosystem",
                author: "MetaVoxa",
                year: "2025",
                category: "essays",
                cover: "https://via.placeholder.com/200x300/5e3c5e/f5e6d3?text=Sovereign",
                readerNote: "Building systems that don't break because they never demanded we bend.",
                recommendedBy: "MetaVoxa",
                url: "https://substack.com/@metavoxa/sovereign-ecosystem"
            }
        ]
    }
];
