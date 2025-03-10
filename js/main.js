document.addEventListener('DOMContentLoaded', function() {
    // Initialize page with config
    initPage();
    
    // Add event listeners
    document.getElementById('entry-screen').addEventListener('click', enterSite);
    document.getElementById('display-name').addEventListener('mouseenter', showUID);
    document.getElementById('display-name').addEventListener('mouseleave', hideUID);
});

// Define all available badges in a central location
const badgeDefinitions = {
    "verified": {
        icon: "fas fa-check",
        tooltip: "Verified"
    },
    "premium": {
        icon: "fas fa-crown",
        tooltip: "Premium Member"
    },
    "developer": {
        icon: "fas fa-code",
        tooltip: "Developer"
    },
    "supporter": {
        icon: "fas fa-heart",
        tooltip: "Early Supporter"
    },
    "artist": {
        icon: "fas fa-palette",
        tooltip: "Digital Artist"
    },
    "modulardynamics": {
        icon: "fas fa-cube",
        tooltip: "Modular Dynamics Associate"
    },
    "vivbout": {
        icon: "fas fa-wrench",
        tooltip: "Vivbout Associate"
    },
    // Add more badges as needed
};

// Initialize page with configuration
function initPage() {
    // Set page title
    document.title = config.title || config.username;
    
    // Apply colors from config
    document.documentElement.style.setProperty('--primary-color', config.colors.primary);
    document.documentElement.style.setProperty('--secondary-color', config.colors.secondary);
    document.documentElement.style.setProperty('--text-color', config.colors.text);
    document.documentElement.style.setProperty('--background-color', config.colors.background);
    document.documentElement.style.setProperty('--glow-intensity', config.glowEffect.intensity);
    document.documentElement.style.setProperty('--transition-speed', config.animations.transitionSpeed);
    document.documentElement.style.setProperty('--font-family', config.font.family);
    
    // Apply acrylic container styles if enabled
    if (config.container && config.container.acrylicEffect) {
        document.documentElement.style.setProperty('--acrylic-blur', config.container.blurAmount || '10px');
        document.documentElement.style.setProperty('--acrylic-background', config.colors.acrylicBackground || 'rgba(20, 20, 30, 0.5)');
        document.documentElement.style.setProperty('--acrylic-opacity', config.container.opacity || 0.5);
        
        // Apply acrylic class to profile container
        const profileContainer = document.querySelector('.profile-container');
        profileContainer.classList.add('acrylic');
    }
    
    // Set background
    const backgroundVideo = document.getElementById('background-video');
    if (config.background.type === 'video') {
        backgroundVideo.src = config.background.source;
        backgroundVideo.loop = true;
        if (config.background.useBackgroundAudio) {
            backgroundVideo.muted = false;
        } else {
            backgroundVideo.muted = true;
        }
        backgroundVideo.load();
    } else if (config.background.type === 'image') {
        // For image background, we'll create a CSS background instead of using the video element
        backgroundVideo.style.display = 'none';
        document.querySelector('.background-container').style.backgroundImage = `url(${config.background.source})`;
        document.querySelector('.background-container').style.backgroundSize = 'cover';
        document.querySelector('.background-container').style.backgroundPosition = 'center';
    }

    const faviconLink = document.querySelector("link[rel='icon']") || document.createElement('link');
    faviconLink.type = 'image/x-icon';
    faviconLink.rel = 'icon';
    faviconLink.href = config.favicon || 'assets/default-favicon.ico';
    document.head.appendChild(faviconLink);
    
    // Set profile information
    document.getElementById('profile-picture').src = config.profilePicture;
    document.getElementById('display-name').textContent = config.displayName;
    document.getElementById('bio').textContent = config.bio;
    
    // Create UID tooltip
    const uidTooltip = document.createElement('span');
    uidTooltip.className = 'uid-tooltip';
    uidTooltip.textContent = `UID: ${config.uid}`;
    document.getElementById('display-name').appendChild(uidTooltip);
    
    // Load badges
    loadBadges();
    
    // Load social icons
    loadSocialIcons();
    
    // Prepare audio - preload to ensure faster start
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = config.music.track.file;
    audioPlayer.volume = config.music.initialVolume;
    audioPlayer.preload = 'auto'; // Ensure audio preloads
    audioPlayer.loop = true; // Set audio to loop always
    
    // Add error handling for audio
    audioPlayer.addEventListener('error', function(e) {
        console.error('Audio error:', e);
        // Try to reload if there's an error
        setTimeout(() => {
            audioPlayer.load();
        }, 1000);
    });
    
    // Create black overlay
    const blackOverlay = document.createElement('div');
    blackOverlay.className = 'black-overlay';
    document.body.appendChild(blackOverlay);
}

// Enter site function
function enterSite() {
    // Hide entry screen
    document.getElementById('entry-screen').classList.add('hidden');
    
    // Show profile screen
    const profileScreen = document.getElementById('profile-screen');
    profileScreen.classList.remove('hidden');
    profileScreen.classList.add('active');
    
    // Start background video if it exists
    const backgroundVideo = document.getElementById('background-video');
    if (backgroundVideo.src) {
        backgroundVideo.play().catch(error => {
            console.log('Autoplay prevented:', error);
        });
    }
    
    // Start playing music if autoplay is enabled and background isn't using audio
    if (config.music.autoplay && !config.background.useBackgroundAudio) {
        playAudio();
    }
    
    // Animate profile container
    setTimeout(() => {
        document.querySelector('.profile-container').style.transform = 'translateY(0)';
        document.querySelector('.profile-container').style.opacity = '1';
    }, 100);
    
    // Fade out the black overlay
    setTimeout(() => {
        const blackOverlay = document.querySelector('.black-overlay');
        if (blackOverlay) {
            blackOverlay.classList.add('fade-out');
        }
    }, 200);
}

// Function to handle audio playback with retry mechanism
function playAudio() {
    const audioPlayer = document.getElementById('audio-player');
    
    // Create a promise-based audio play with retry
    const playWithRetry = (retries = 3) => {
        return audioPlayer.play()
            .catch(error => {
                console.log('Audio playback error:', error);
                
                // If user interaction is needed, we'll wait for it
                if (error.name === 'NotAllowedError') {
                    console.log('Audio playback requires user interaction');
                    // We'll try again with a user interaction event
                    document.addEventListener('click', function audioPlayHandler() {
                        audioPlayer.play().catch(e => console.log('Still unable to play audio:', e));
                        document.removeEventListener('click', audioPlayHandler);
                    }, { once: true });
                } else if (retries > 0) {
                    // For other errors, retry after a short delay
                    console.log(`Retrying audio playback, ${retries} attempts left`);
                    setTimeout(() => playWithRetry(retries - 1), 1000);
                }
            });
    };
    
    // Start the playback attempt
    playWithRetry();
}

// Show UID tooltip
function showUID() {
    document.querySelector('.uid-tooltip').style.opacity = '1';
    document.querySelector('.uid-tooltip').style.visibility = 'visible';
}

// Hide UID tooltip
function hideUID() {
    document.querySelector('.uid-tooltip').style.opacity = '0';
    document.querySelector('.uid-tooltip').style.visibility = 'hidden';
}

// Load badges from config
function loadBadges() {
    const badgesContainer = document.getElementById('badges-container');
    badgesContainer.innerHTML = '';
    
    // Check if badges are defined in config
    if (!config.badges || !Array.isArray(config.badges)) {
        console.warn('No badges defined in config or badges is not an array');
        return;
    }
    
    // Create badge elements
    config.badges.forEach(badge => {
        // Destructure badge info - each badge in config can be either:
        // 1. A string that refers to a predefined badge, or
        // 2. An object with {id, color} that refers to a predefined badge with a custom color
        const badgeId = typeof badge === 'string' ? badge : badge.id;
        const badgeColor = typeof badge === 'object' ? badge.color : config.colors.primary;
        
        // Get the badge definition from our centralized store
        const badgeDef = badgeDefinitions[badgeId];
        
        if (badgeDef) {
            const badgeElement = document.createElement('div');
            badgeElement.className = 'badge';
            
            const icon = document.createElement('i');
            icon.className = badgeDef.icon;
            icon.style.color = badgeColor;
            badgeElement.appendChild(icon);
            
            const tooltip = document.createElement('span');
            tooltip.className = 'badge-tooltip';
            tooltip.textContent = badgeDef.tooltip;
            badgeElement.appendChild(tooltip);
            
            badgesContainer.appendChild(badgeElement);
        } else {
            console.warn(`Badge definition not found for "${badgeId}"`);
        }
    });
}

// Load social icons
function loadSocialIcons() {
    const socialsContainer = document.getElementById('socials-container');
    socialsContainer.innerHTML = '';
    
    config.socials.forEach(social => {
        const socialElement = document.createElement('a');
        socialElement.className = 'social-icon';
        socialElement.href = social.url;
        socialElement.target = '_blank';
        
        // Get color from social config or from colors.socials
        const color = social.color || config.colors.socials?.[social.platform] || config.colors.primary;
        
        const icon = document.createElement('i');
        icon.className = social.icon;
        icon.style.color = color;
        socialElement.appendChild(icon);
        
        socialsContainer.appendChild(socialElement);
    });
}