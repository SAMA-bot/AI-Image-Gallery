document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const gallery = document.getElementById('category-gallery');
    const categoryTitle = document.getElementById('category-title');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('imageCaption');
    const closeBtn = document.getElementsByClassName('close')[0];
    const downloadBtn = document.getElementById('downloadBtn');
    const backBtn = document.getElementById('backToGallery');

    // Car images data
    const carImages = [
        { src: 'Cars 1.jpg', description: 'Cars Image 1' },
        { src: 'Cars 2.jpg', description: 'Cars Image 2' },
        { src: 'Cars 3.jpg', description: 'Cars Image 3' },
        { src: 'Cars 4.jpg', description: 'Cars Image 4' },
        { src: 'Cars 5.jpg', description: 'Cars Image 5' },
        { src: 'Cars 6.jpg', description: 'Cars Image 6' },
        { src: 'Cars 7.jpg', description: 'Cars Image 7' },
        { src: 'Cars 8.jpg', description: 'Cars Image 8' },
        { src: 'Cars 9.jpg', description: 'Cars Image 9' },
        { src: 'Cars 10.jpg', description: 'Cars Image 10' },
        { src: 'Cars 11.jpg', description: 'Cars Image 11' },
        { src: 'Cars 12.jpg', description: 'Cars Image 12' },
        { src: 'Cars 13.jpg', description: 'Cars Image 13' },
        { src: 'Cars 14.jpg', description: 'Cars Image 14' },
        { src: 'Cars 15.jpg', description: 'Cars Image 15' },
        { src: 'Cars 16.jpg', description: 'Cars Image 16' }
    ];

    // Set the category title
    categoryTitle.textContent = 'AI Generated Images';

    // Populate the gallery with car images
    carImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'category-item';

        const img = document.createElement('img');
        img.src = `../Cars/${image.src}`;
        img.alt = image.description;
        img.loading = 'lazy';

        // Add click event to open the modal
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            
            // Update download button attributes
            downloadBtn.setAttribute('href', this.src);
            downloadBtn.setAttribute('download', this.alt + '.jpg');
        }

        const p = document.createElement('p');
        p.textContent = image.description;

        item.appendChild(img);
        item.appendChild(p);
        gallery.appendChild(item);
    });

    // Close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Close the modal when the close button is clicked
    closeBtn.onclick = closeModal;

    // Close the modal when clicking outside the image
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
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
        window.location.href = '../index.html';
    }

    // Handle download button click
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Fetch the image and trigger download
        fetch(this.href)
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = this.getAttribute('download');
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(() => alert('An error occurred while downloading the image.'));
    });
});
