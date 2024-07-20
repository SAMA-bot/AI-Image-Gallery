document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('category-gallery');
    const categoryTitle = document.getElementById('category-title');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('imageCaption');
    const closeBtn = document.getElementsByClassName('close')[0];
    const downloadBtn = document.getElementById('downloadBtn');
    const backBtn = document.getElementById('backToGallery');

    // Dogs images data
    const dogImages = [
        { src: 'Dogs 1.jpg', description: 'Dogs Image 1' },
        { src: 'Dogs 2.jpg', description: 'Dogs Image 2' },
        { src: 'Dogs 3.jpg', description: 'Dogs Image 3' },
        { src: 'Dogs 4.jpg', description: 'Dogs Image 4' },
        { src: 'Dogs 5.jpg', description: 'Dogs Image 5' },
        { src: 'Dogs 6.jpg', description: 'Dogs Image 6' },
        { src: 'Dogs 7.jpg', description: 'Dogs Image 7' },
        { src: 'Dogs 8.jpg', description: 'Dogs Image 8' },
        { src: 'Dogs 9.jpg', description: 'Dogs Image 9' },
        { src: 'Dogs 10.jpg', description: 'Dogs Image 10' },
        { src: 'Dogs 11.jpg', description: 'Dogs Image 11' },
        { src: 'Dogs 12.jpg', description: 'Dogs Image 12' },
        { src: 'Dogs 13.jpg', description: 'Dogs Image 13' },
        { src: 'Dogs 14.jpg', description: 'Dogs Image 14' },
        { src: 'Dogs 15.jpg', description: 'Dogs Image 15' },
        { src: 'Dogs 16.jpg', description: 'Dogs Image 16' }
    ];

    // Set the category title
    categoryTitle.textContent = '#Dogs';

    dogImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'category-item';

        const img = document.createElement('img');
        img.src = `D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/Dogs/${image.src}`; // Update this path
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
        window.location.href = 'D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/Index.html'; 
    }

    // Handle download button click
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
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