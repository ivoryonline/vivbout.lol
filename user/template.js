/**
 * Profile Configuration
 * Edit this file to customize your profile page
 */

const config = {
    // Page title and username
    username: "template",
    title: "template",
    favicon: "https://vivwebz.net/media/favicon.ico",
    
    // Display name shown on profile (can be different from username)
    displayName: "Template User",
    
    // User ID (shown when hovering over name)
    uid: "0",
    
    // Bio text
    bio: "Example Bio",
    
    // Profile picture URL
    profilePicture: "https://assets.vivwebz.net/template.jpg",
    
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
    
    // Colors (can use any CSS color format: hex, rgb, hsl, etc.)
    colors: {
        primary: "#ffffff", // Main color theme
        secondary: "#ffffff", // Secondary accent color
        text: "#ffffff", // Text color
        background: "#121212", // Page background (visible before video/image loads)
        acrylicBackground: "rgba(20, 20, 30, 0.5)", // Background color for acrylic effect
    },
    
    // Glow effect settings
    glowEffect: {
        intensity: "5px", // Size of the glow
        hoverIntensity: "10px" // Size of the glow on hover
    },
    
    // Font settings
    font: {
        family: "'Poppins', sans-serif", // Font family
        // You can add more specific font settings if needed
    },
    
    // Transition and animation settings
    animations: {
        transitionSpeed: "0.5s", // Speed of transitions
        entryAnimation: "pulse" // Animation for enter text
    },
    
    // Single track for profile
    music: {
        track: {
            title: "Ethereal Dreams",
            file: "https://assets.vivwebz.net/leftbanktwo.mp3"
        },
        initialVolume: 0.2, // Initial volume (0-1)
        autoplay: true // Start playing automatically after entry
    },
    
    // Badges to display
    // Simple format: just provide badge names as strings to use primary color
    // Extended format: {id: "badgeName", color: "#hexcolor"} to customize colors
    badges: [
        "verified", 
        "premium", 
        "developer", 
        "supporter", 
        { id: "modulardynamics", color: "#9b59b6" }, 
        "artist"
    ],
    
    // Social media links
    socials: [
        {
            platform: "twitter", // Platform name
            icon: "fab fa-twitter", // Font Awesome icon class
            url: "https://twitter.com/username", // URL to profile
            color: "#1DA1F2" // Override color from socials colors above
        },
        {
            platform: "instagram",
            icon: "fab fa-instagram",
            url: "https://instagram.com/username",
            color: "#E1306C"
        },
        {
            platform: "youtube",
            icon: "fab fa-youtube",
            url: "https://youtube.com/c/username",
            color: "#FF0000"
        },
        {
            platform: "soundcloud",
            icon: "fab fa-soundcloud",
            url: "https://soundcloud.com/username",
            color: "#FF7700"
        },
        {
            platform: "github",
            icon: "fab fa-github",
            url: "https://github.com/username",
            color: "#333333"
        }
        // Add more social platforms as needed
    ]
};