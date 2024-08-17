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

    // Daily Mix images data
    const dailyMixImages = [
        { src: 'https://i.ibb.co/zrQNP5N/Daily-1.jpg', description: 'Daily Mix Image 1' },
        { src: 'https://i.ibb.co/zhfbGTt/Daily-2.jpg', description: 'Daily Mix Image 2' },
        { src: 'https://i.ibb.co/mRLQt0D/Daily-3.jpg', description: 'Daily Mix Image 3' },
        { src: 'https://i.ibb.co/NLHSn9Z/Daily-4.jpg', description: 'Daily Mix Image 4' },
        { src: 'https://i.ibb.co/F0msxHd/Daily-5.jpg', description: 'Daily Mix Image 5' },
        { src: 'https://i.ibb.co/mbPdWMQ/Daily-6.jpg', description: 'Daily Mix Image 6' },
        { src: 'https://i.ibb.co/sKj8W4k/Daily-7.jpg', description: 'Daily Mix Image 7' },
        { src: 'https://i.ibb.co/zmXnLHP/Daily-8.jpg', description: 'Daily Mix Image 8' },
        { src: 'https://i.ibb.co/cr7NKWV/Image-3.jpg', description: 'Daily Mix Image 9' },
        { src: 'https://i.ibb.co/WKCRzsG/Daily-10.jpg', description: 'Daily Mix Image 10' },
        { src: 'https://i.ibb.co/7W2yg59/Daily-11.jpg', description: 'Daily Mix Image 11' },
        { src: 'https://i.ibb.co/yRLJq0X/Daily-12.jpg', description: 'Daily Mix Image 12' },
        { src: 'https://i.ibb.co/y8zVwQQ/Daily-13.jpg', description: 'Daily Mix Image 13' },
        { src: 'https://i.ibb.co/R6x4Yqt/Daily-14.jpg', description: 'Daily Mix Image 14' },
        { src: 'https://i.ibb.co/92LqrHz/Daily-15.jpg', description: 'Daily Mix Image 15' },
        { src: 'https://i.ibb.co/MpQKR77/Daily-16.jpg', description: 'Daily Mix Image 16' }
    ];

    // Set the category title
    categoryTitle.textContent = 'Daily Mix AI Generated Images';

    // Populate the gallery with Daily Mix images
    dailyMixImages.forEach(image => {
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