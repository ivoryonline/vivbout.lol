/**
 * Profile Configuration
 * Edit this file to customize your profile page
 */

const config = {
    // Page title and username
    username: "nugget",
    title: "@nugget",
    favicon: "https://vivwebz.net/media/favicon.ico",
    
    // Display name shown on profile (can be different from username)
    displayName: "nugget",
    
    // User ID (shown when hovering over name)
    uid: "2",
    
    // Bio text
    bio: "My favorite guns are AK-12 and S&W Magnum. I like crocodiles🐊",
    
    // Profile picture URL
    profilePicture: "https://assets.vivwebz.net/nugget.png",
    
    // Background settings
    background: {
        type: "image", // options: "video", "image"
        source: "https://assets.vivwebz.net/nuggetbackground.jpg", // URL to video or image
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
        primary: "#d4bd6c", // Main color theme
        secondary: "#ffffff", // Secondary accent color
        text: "#ffffff", // Text color
        background: "#121212", // Page background (visible before video/image loads)
        acrylicBackground: "rgba(170, 170, 170, 0.5)", // Background color for acrylic effect
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
            title: "koptereid",
            file: "https://assets.vivwebz.net/youtube_Jof64XCUYPY_audio.mp3"
        },
        initialVolume: 0.2, // Initial volume (0-1)
        autoplay: true // Start playing automatically after entry
    },
    
    // Badges to display
    // Simple format: just provide badge names as strings to use primary color
    // Extended format: {id: "badgeName", color: "#hexcolor"} to customize colors
    badges: [
        { id: "verified", color: "#FFFFFF" },
    ],
    
    // Social media links
    socials: [
    ]
};