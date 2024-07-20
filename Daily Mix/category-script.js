document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('category-gallery');
    const categoryTitle = document.getElementById('category-title');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('imageCaption');
    const closeBtn = document.getElementsByClassName('close')[0];
    const downloadBtn = document.getElementById('downloadBtn');
    const backBtn = document.getElementById('backToGallery');

    // Daily Mix images data
    const dailyMixImages = [
        { src: 'Daily 1.jpg', description: 'Daily Mix Image 1' },
        { src: 'Daily 2.jpg', description: 'Daily Mix Image 2' },
        { src: 'Daily 3.jpg', description: 'Daily Mix Image 3' },
        { src: 'Daily 4.jpg', description: 'Daily Mix Image 4' },
        { src: 'Daily 5.jpg', description: 'Daily Mix Image 5' },
        { src: 'Daily 6.jpg', description: 'Daily Mix Image 6' },
        { src: 'Daily 7.jpg', description: 'Daily Mix Image 7' },
        { src: 'Daily 8.jpg', description: 'Daily Mix Image 8' },
        { src: 'Daily 9.jpg', description: 'Daily Mix Image 9' },
        { src: 'Daily 10.jpg', description: 'Daily Mix Image 10' },
        { src: 'Daily 11.jpg', description: 'Daily Mix Image 11' },
        { src: 'Daily 12.jpg', description: 'Daily Mix Image 12' },
        { src: 'Daily 13.jpg', description: 'Daily Mix Image 13' },
        { src: 'Daily 14.jpg', description: 'Daily Mix Image 14' },
        { src: 'Daily 15.jpg', description: 'Daily Mix Image 15' },
        { src: 'Daily 16.jpg', description: 'Daily Mix Image 16' }
    ];

    // Set the category title
    categoryTitle.textContent = 'Daily Mix';

    // Populate the gallery with Daily Mix images
    dailyMixImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'category-item';

        const img = document.createElement('img');
        img.src = `D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/Daily Mix/${image.src}`; // Update this path
        img.alt = image.description;
        img.loading = 'lazy';

        // Add click event to open the modal
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            
            // Update download button
            downloadBtn.setAttribute('href', this.src);
            downloadBtn.setAttribute('download', this.alt + '.jpg');
        }

        const p = document.createElement('p');
        p.textContent = image.description;

        item.appendChild(img);
        item.appendChild(p);
        gallery.appendChild(item);
    });

    // Close the modal when the x is clicked
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle window resizing
    window.addEventListener('resize', function() {
        if (modal.style.display === "block") {
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
        }
    });

    // Handle back to main gallery button click
    backBtn.onclick = function() {
        window.location.href = 'D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/Index.html'; // Update this path
    }

    // Handle download button click
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default link behavior
        
        // Create a temporary anchor element
        const tempLink = document.createElement('a');
        tempLink.href = this.getAttribute('href');
        tempLink.setAttribute('download', this.getAttribute('download'));
        
        // Programmatically click the link
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    });
});