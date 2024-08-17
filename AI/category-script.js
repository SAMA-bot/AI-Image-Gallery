document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('category-gallery');
    const categoryTitle = document.getElementById('category-title');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('imageCaption');
    const closeBtn = document.getElementsByClassName('close')[0];
    const downloadBtn = document.getElementById('downloadBtn');
    const backBtn = document.getElementById('backToGallery');

    // AI images data
    const aiImages = [
        { src: 'https://i.ibb.co/9q6B1Z5/AI-1.jpg', description: 'AI Generated Image 1' },
        { src: 'https://i.ibb.co/8NWc5CX/AI-2.jpg', description: 'AI Generated Image 2' },
        { src: 'https://i.ibb.co/pPzRwss/AI-3.jpg', description: 'AI Generated Image 3' },
        { src: 'https://i.ibb.co/Js9d9X9/AI-4.jpg', description: 'AI Generated Image 4' },
        { src: 'https://i.ibb.co/JHF9gPd/AI-5.jpg', description: 'AI Generated Image 5' },
        { src: 'https://i.ibb.co/BGpnqTp/AI-6.jpg', description: 'AI Generated Image 6' },
        { src: 'https://i.ibb.co/4S5s2sf/AI-7.jpg', description: 'AI Generated Image 7' },
        { src: 'https://i.ibb.co/RgnzHBP/AI-8.jpg', description: 'AI Generated Image 8' },
        { src: 'https://i.ibb.co/nfCSnHq/AI-9.jpg', description: 'AI Generated Image 9' },
        { src: 'https://i.ibb.co/x2JX6VK/AI-10.jpg', description: 'AI Generated Image 10' },
        { src: 'https://i.ibb.co/SfP21F4/AI-11.jpg', description: 'AI Generated Image 11' },
        { src: 'https://i.ibb.co/7j5h5Hb/AI-12.jpg', description: 'AI Generated Image 12' },
        { src: 'https://i.ibb.co/w0DRXRt/AI-13.jpg', description: 'AI Generated Image 13' },
        { src: 'https://i.ibb.co/qnNqw3f/AI-14.jpg', description: 'AI Generated Image 14' },
        { src: 'https://i.ibb.co/Htzk3Qz/AI-15.jpg', description: 'AI Generated Image 15' },
        { src: 'https://i.ibb.co/5WHVtHC/AI-16.jpg', description: 'AI Generated Image 16' }
    ];

    // Set the category title
    categoryTitle.textContent = 'AI Generated Images';

    // Populate the gallery with AI images
    aiImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'category-item';

        const img = document.createElement('img');
        img.src = image.src;
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

    // Close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Close the modal when the x is clicked
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
        // Update this path to match your actual file structure
        window.location.href = '../index.html';
    }

    // Handle download button click
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
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
