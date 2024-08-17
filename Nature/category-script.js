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

    // Nature images data
    const natureImages = [
        { src: 'Nature 1.jpg', description: 'Nature Image 1' },
        { src: 'Nature 2.jpg', description: 'Nature Image 2' },
        { src: 'Nature 3.jpg', description: 'Nature Image 3' },
        { src: 'Nature 4.jpg', description: 'Nature Image 4' },
        { src: 'Nature 5.jpg', description: 'Nature Image 5' },
        { src: 'Nature 6.jpg', description: 'Nature Image 6' },
        { src: 'Nature 7.jpg', description: 'Nature Image 7' },
        { src: 'Nature 8.jpg', description: 'Nature Image 8' },
        { src: 'Nature 9.jpg', description: 'Nature Image 9' },
        { src: 'Nature 10.jpg', description: 'Nature Image 10' },
        { src: 'Nature 11.jpg', description: 'Nature Image 11' },
        { src: 'Nature 12.jpg', description: 'Nature Image 12' },
        { src: 'Nature 13.jpg', description: 'Nature Image 13' },
        { src: 'Nature 14.jpg', description: 'Nature Image 14' },
        { src: 'Nature 15.jpg', description: 'Nature Image 15' },
        { src: 'Nature 16.jpg', description: 'Nature Image 16' },
        { src: 'Nature 17.jpg', description: 'Nature Image 17' },
        { src: 'Nature 18.jpg', description: 'Nature Image 18' },
        { src: 'Nature 19.jpg', description: 'Nature Image 19' },
        { src: 'Nature 20.jpg', description: 'Nature Image 20' }
    ];

    // Set the category title
    categoryTitle.textContent = 'AI Generated Images';

    // Populate the gallery with nature images
    natureImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'category-item';

        const img = document.createElement('img');
        img.src = `../Nature/${image.src}`;
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
