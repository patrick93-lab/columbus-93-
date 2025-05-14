// This script tracks user interactions on a webpage and sends the data to a server.
// Each time a user clciks on <button id="blockNOtifications"

document.addEventListener("click", function(event) {
    let userData = {
        eventType: "click",
        element: event.target.tagName,
        pageUrl: window.location.href,
        timestamp: new Date().toISOString()
    };

    fetch("https://blackhole.com/track", {   
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });
});


// This script tracks user interactions on a webpage and sends the data to a server.

document.addEventListener("click", function(event) {
    // Collect user interaction data
    let userData = {
        eventType: "click",
        element: event.target.tagName, // The HTML tag of the clicked element
        elementId: event.target.id || "no-id", // The ID of the clicked element (if any)
        elementClass: event.target.className || "no-class", // The class of the clicked element (if any)
        pageUrl: window.location.href, // The current page URL
        timestamp: new Date().toISOString() // The timestamp of the event
    };

    // Send the data to the server
    fetch("https://3fd6-212-102-51-86.ngrok-free.app", {   
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData) // Convert the userData object to JSON
    })
    .then(response => {
        if (response.ok) {
            console.log("Tracking data sent successfully:", userData);
        } else {
            console.error("Failed to send tracking data:", response.statusText);
        }
    })
    .catch(error => {
        console.error("Error sending tracking data:", error);
    });
});