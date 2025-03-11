/**
 * Profile Configuration
 * Edit this file to customize your profile page
 */

const config = {
    // Page title and username
    username: "v",
    title: "@v",
    favicon: "https://vivwebz.net/media/favicon.ico",
    
    // Display name shown on profile (can be different from username)
    displayName: "livingbeing",
    
    // User ID (shown when hovering over name)
    uid: "1",
    
    // Bio text
    bio: "I do a large variety of things accross the internet.",
    
    // Profile picture URL
    profilePicture: "https://assets.vivwebz.net/profilepicture.png",
    
    // Background settings
    background: {
        type: "video", // options: "video", "image"
        source: "https://assets.vivwebz.net/wallpaper.mp4", // URL to video or image
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
        primary: "#2e1c75", // Main color theme
        secondary: "#ffffff", // Secondary accent color
        text: "#ffffff", // Text color
        background: "#121212", // Page background (visible before video/image loads)
        acrylicBackground: "rgba(107, 74, 47, 0.5)", // Background color for acrylic effect
    },
    
    // Glow effect settings
    glowEffect: {
        intensity: "5px", // Size of the glow
        hoverIntensity: "10px" // Size of the glow on hover
    },
    
    // Font settings
    font: {
        family: "'DM Mono', monospace", // Font family
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
            file: "https://assets.vivwebz.net/profilesong.mp3"
        },
        initialVolume: 0.2, // Initial volume (0-1)
        autoplay: true // Start playing automatically after entry
    },
    
    // Badges to display
    // Simple format: just provide badge names as strings to use primary color
    // Extended format: {id: "badgeName", color: "#hexcolor"} to customize colors
    badges: [
        { id: "verified", color: "#FFFFFF" },
        { id: "premium", color: "#FFFFFF" },
        { id: "vivbout", color: "#FFFFFF" },
        { id: "modulardynamics", color: "#FFFFFF" },
        { id: "developer", color: "#FFFFFF" }
    ],
    
    // Social media links
    socials: [
        {
            platform: "twitter", // Platform name
            icon: "fab fa-twitter", // Font Awesome icon class
            url: "https://x.com/vivvory", // URL to profile
            color: "#FFFFFF" // Override color from socials colors above
        },
        {
            platform: "github",
            icon: "fab fa-github",
            url: "https://github.com/ivoryonline",
            color: "#FFFFFF"
        }
        // Add more social platforms as needed
    ]
};