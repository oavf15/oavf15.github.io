document.getElementById('noBtn').addEventListener('click', function() {
    const yesBtn = document.getElementById('yesBtn');
    let fontSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    let width = parseInt(window.getComputedStyle(yesBtn).width);
    let height = parseInt(window.getComputedStyle(yesBtn).height);
    yesBtn.style.fontSize = `${fontSize + 1}px`; // Slightly increase font size
    yesBtn.style.width = `${width + 10}px`; // Increase width
    yesBtn.style.height = `${height + 5}px`; // Increase height
    yesBtn.style.lineHeight = yesBtn.style.height; // Adjust line height to vertically center text
  });

  document.getElementById('yesBtn').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none'; // Hide the initial question
    const slideshowDiv = document.getElementById('slideshow');
    slideshowDiv.style.display = 'flex'; // Show the slideshow

    const images = [];
    for (let i = 1; i <= 18; i++) {
        images.push(`vday//images/File${i}.JPG`);
    }
    let currentIndex = -1;
    let cycleCount = 0; // New variable to track the number of completed cycles

    const imgElement = document.createElement('img');
    imgElement.style.position = 'absolute';
    slideshowDiv.appendChild(imgElement);

    const changeImage = () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; // Reset to the first image
            cycleCount++; // Increment cycle count after one full cycle
        }

        if (cycleCount >= 1) { // After one full cycle
            clearInterval(interval); // Stop the slideshow
        
            // Clear existing content
            slideshowDiv.innerHTML = '';
        
            // Style the slideshowDiv for vertical layout
            slideshowDiv.style.display = 'flex';
            slideshowDiv.style.flexDirection = 'column';
            slideshowDiv.style.alignItems = 'center';
            slideshowDiv.style.justifyContent = 'center';
            slideshowDiv.style.height = '100%'; // Ensure it takes full container height
        
            // Create and style the text element
            const textElement = document.createElement('div');
            textElement.style.color = 'white';
            textElement.style.textAlign = 'center';
            textElement.style.fontSize = '36px';
            textElement.style.marginBottom = '20px';
            textElement.innerText = 'I love you, baby! 😘';
        
            // Create the image element for the GIF
            const gifElement = document.createElement('img');
            gifElement.setAttribute('src', 'vday/images/heart.gif');
            gifElement.style.maxWidth = '100%';
            gifElement.style.height = 'auto';
        
            // Append elements in the correct order
            slideshowDiv.appendChild(textElement); // Text first
            slideshowDiv.appendChild(gifElement); // Then the GIF
        }
        
             

        imgElement.src = images[currentIndex];
        imgElement.className = 'fade-in';

        setTimeout(() => {
            imgElement.className = 'fade-out';
        }, 900);
    };

    changeImage();
    let interval = setInterval(changeImage, 1500); // Adjusted for smoother transitions
});