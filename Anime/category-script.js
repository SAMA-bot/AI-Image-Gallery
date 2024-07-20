document.addEventListener('DOMContentLoaded', function() {
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
        img.src = `D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/Anime/${image.src}`;
        img.alt = image.description;
        img.loading = 'lazy';

        // Add click event to open the modal
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            
            // Update download button
            downloadBtn.href = this.src;
            downloadBtn.download = this.alt + '.jpg';
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
});