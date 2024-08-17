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

    // Anime images data
    const animeImages = [
        { src: 'a1.jpg', description: 'Anime Wallpaper 1' },
        { src: 'a2.jpg', description: 'Anime Wallpaper 2' },
        { src: 'a3.jpg', description: 'Anime Wallpaper 3' },
        { src: 'a4.jpg', description: 'Anime Wallpaper 4' },
        { src: 'a5.jpg', description: 'Anime Wallpaper 5' },
        { src: 'a6.jpg', description: 'Anime Wallpaper 6' },
        { src: 'a7.jpg', description: 'Anime Wallpaper 7' },
        { src: 'a8.jpg', description: 'Anime Wallpaper 8' },
        { src: 'a9.jpg', description: 'Anime Wallpaper 9' },
        { src: 'a10.jpg', description: 'Anime Wallpaper 10' },
        { src: 'a11.jpg', description: 'Anime Wallpaper 11' },
        { src: 'a12.jpg', description: 'Anime Wallpaper 12' },
        { src: 'a13.jpg', description: 'Anime Wallpaper 13' },
        { src: 'a14.jpg', description: 'Anime Wallpaper 14' },
        { src: 'a15.jpg', description: 'Anime Wallpaper 15' },
        { src: 'a16.jpg', description: 'Anime Wallpaper 16' }
    ];

    // Set the category title
    categoryTitle.textContent = 'Anime AI Wallpapers';

    // Populate the gallery with anime images
    animeImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'category-item';

        const img = document.createElement('img');
        img.src = `../Anime/${image.src}`;
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
