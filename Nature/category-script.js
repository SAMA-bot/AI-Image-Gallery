document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('category-gallery');
    const categoryTitle = document.getElementById('category-title');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('imageCaption');
    const closeBtn = document.getElementsByClassName('close')[0];
    const downloadBtn = document.getElementById('downloadBtn');
    const backBtn = document.getElementById('backToGallery');

    // Nature images data
    const natureImages = [
        { src: 'Nature 1.jpg', description: 'Nature Generated Image 1' },
        { src: 'Nature 2.jpg', description: 'Nature Generated Image 2' },
        { src: 'Nature 3.jpg', description: 'Nature Generated Image 3' },
        { src: 'Nature 4.jpg', description: 'Nature Generated Image 4' },
        { src: 'Nature 5.jpg', description: 'Nature Generated Image 5' },
        { src: 'Nature 6.jpg', description: 'Nature Generated Image 6' },
        { src: 'Nature 7.jpg', description: 'Nature Generated Image 7' },
        { src: 'Nature 8.jpg', description: 'Nature Generated Image 8' },
        { src: 'Nature 9.jpg', description: 'Nature Generated Image 9' },
        { src: 'Nature 10.jpg', description: 'Nature Generated Image 10' },
        { src: 'Nature 11.jpg', description: 'Nature Generated Image 11' },
        { src: 'Nature 12.jpg', description: 'Nature Generated Image 12' },
        { src: 'Nature 13.jpg', description: 'Nature Generated Image 13' },
        { src: 'Nature 14.jpg', description: 'Nature Generated Image 14' },
        { src: 'Nature 15.jpg', description: 'Nature Generated Image 15' },
        { src: 'Nature 16.jpg', description: 'Nature Generated Image 16' },
        { src: 'Nature 17.jpg', description: 'Nature Generated Image 17' },
        { src: 'Nature 18.jpg', description: 'Nature Generated Image 18' },
        { src: 'Nature 19.jpg', description: 'Nature Generated Image 19' },
        { src: 'Nature 20.jpg', description: 'Nature Generated Image 20' }
    ];

    // Set the category title
    categoryTitle.textContent = 'Nature Images';

    // Populate the gallery with Nature images
    natureImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'category-item';

        const img = document.createElement('img');
        img.src = `D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/Nature/${image.src}`; // Update this path
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