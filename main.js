document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    const videoSources = ['Videos/one.mp4', 'Videos/two.mp4', 'Videos/three.mp4', 'Videos/four.mp4', 'Videos/five.mp4', 'Videos/six.mp4'];
    let currentVideoIndex = 0;
    
    // Set the initial video source and ensure it's muted and autoplaying
    video.src = videoSources[currentVideoIndex];
    video.muted = true;
    video.autoplay = true;
    video.load();
    video.play().catch(error => {
        // Handle potential autoplay issues
        console.log("Autoplay prevented:", error);
    });

    video.addEventListener('ended', function() {
        currentVideoIndex++;
        if (currentVideoIndex >= videoSources.length) {
            currentVideoIndex = 0; // Loop back to the first video
        }
        video.src = videoSources[currentVideoIndex];
        video.muted = true; // Ensure it remains muted
        video.load();
        video.play().catch(error => {
            console.log("Autoplay prevented after ending:", error);
        });
    });

    // Also handle potential issues with initial play after metadata is loaded
     video.addEventListener('loadedmetadata', function() {
        if (video.paused) {
             video.play().catch(error => {
                console.log("Autoplay prevented on loadedmetadata:", error);
            });
        }
    });
});