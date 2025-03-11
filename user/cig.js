/**
 * Profile Configuration
 * Customized for cig (short for cigburnt / cigaretteburnt)
 */

const config = {
    // Page title and username
    username: "cig",
    title: "@cig",
    favicon: "https://vivwebz.net/media/favicon.ico",
    
    // Display name shown on profile
    displayName: "cigburnt",
    
    // User ID (shown when hovering over name)
    uid: "3",
    
    // Bio text
    bio: "just a shadow in the smoke.",
    
    // Profile picture URL
    profilePicture: "https://assets.vivwebz.net/photo_2025-03-11_23-10-23.jpg",
    
    // Background settings
    background: {
        type: "video", // options: "video", "image"
        source: "", // URL to video or image
        useBackgroundAudio: false // If true, will use audio from video instead of music playlist
    },
    
    // Container settings
    container: {
        acrylicEffect: true, // Enable acrylic glass effect background
        blurAmount: "10px", // Blur intensity for acrylic effect
        opacity: 0.5 // Opacity for acrylic background (0-1)
    },
    
    // Monochrome Colors
    colors: {
        primary: "#ffffff", // White
        secondary: "#dcdcdc", // Light gray
        text: "#ffffff", // White text
        background: "#0a0a0a", // Near black background
        acrylicBackground: "rgba(15, 15, 15, 0.7)", // Dark acrylic effect
    },
    
    // Glow effect settings
    glowEffect: {
        intensity: "5px", // Size of the glow
        hoverIntensity: "10px" // Size of the glow on hover
    },
    
    // Font settings
    font: {
        family: "'Poppins', sans-serif", // Font family
    },
    
    // Transition and animation settings
    animations: {
        transitionSpeed: "0.5s", // Speed of transitions
        entryAnimation: "fade" // Smooth fade-in effect
    },
    
    // Music
    music: {
        track: {
            title: "don't want u",
            file: "https://assets.vivwebz.net/songdonmtwantu.mp3"
        },
        initialVolume: 0.2, // Initial volume (0-1)
        autoplay: true // Start playing automatically after entry
    },
    
    // Badges to display
    badges: [
        "verified", 
        "premium", 
    ],
    
    // Social media links
    socials: [
        {
            platform: "instagram",
            icon: "fab fa-instagram",
            url: "https://instagram.com/cigburnt_",
            color: "#dcdcdc" // Monochrome light gray
        }
    ]
};