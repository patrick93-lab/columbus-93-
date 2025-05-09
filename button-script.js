// Get all elements with the custom-button class
const buttons = document.querySelectorAll('.btn-special');

// Iterate over each button
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.color = 'yellow';
  });

  button.addEventListener('mouseout', () => {
    button.style.color = ''; // Reset to default color
  });

  button.addEventListener('click', () => {
    // Get the text of the button
    const buttonText = button.innerText;

    // Implement logic for each button individually
    // Example: Redirect to different pages for each button
    switch (buttonText) {
      case 'Community Spotlights':
        window.location.href = '../pages/community.html';
        break;
      case 'Outdoor Adventures':
        window.location.href = '../pages/outdoor.html';
        break;
      case 'Cycling Routes':
        window.location.href = '../pages/cycling.html';
        break;
      case 'Innovative Workshops':
        window.location.href = '../pages/innovative.html';
        break;
      case 'Literary Escapades':
        window.location.href = '../pages/literary.html';
        break;
      case 'Voting & Petitions': 
      window.location.href = '../pages/voting.html'; 
        break;

      default: 
        console.log('Unknown button clicked:', buttonText); 
    }
  });
});
