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
        { src: 'https://i.ibb.co/jrhCvJ8/Nature-1.jpg', description: 'Nature Image 1', link: 'https://ibb.co/fxM3YDX' },
        { src: 'https://i.ibb.co/M2z7jvq/Nature-2.jpg', description: 'Nature Image 2', link: 'https://ibb.co/SskB1jq' },
        { src: 'https://i.ibb.co/5xTM5t9/Nature-3.jpg', description: 'Nature Image 3', link: 'https://ibb.co/vv1wJgB' },
        { src: 'https://i.ibb.co/Fq0LDwZ/Nature-4.jpg', description: 'Nature Image 4', link: 'https://ibb.co/HpxfHzw' },
        { src: 'https://i.ibb.co/k58HTb9/Nature-5.jpg', description: 'Nature Image 5', link: 'https://ibb.co/gmTj8qP' },
        { src: 'https://i.ibb.co/R0bzDzy/Nature-6.jpg', description: 'Nature Image 6', link: 'https://ibb.co/2thgkgN' },
        { src: 'https://i.ibb.co/VWyPQqD/Nature-7.jpg', description: 'Nature Image 7', link: 'https://ibb.co/C5dTMHv' },
        { src: 'https://i.ibb.co/xqXsXS0/Nature-8.jpg', description: 'Nature Image 8', link: 'https://ibb.co/4RKfKZG' },
        { src: 'https://i.ibb.co/s67pM4N/Nature-9.jpg', description: 'Nature Image 9', link: 'https://ibb.co/pRq69TM' },
        { src: 'https://i.ibb.co/L8nbDvC/Nature-10.jpg', description: 'Nature Image 10', link: 'https://ibb.co/KXFRcm9' },
        { src: 'https://i.ibb.co/gS98NsN/Nature-11.jpg', description: 'Nature Image 11', link: 'https://ibb.co/2vhrxXx' },
        { src: 'https://i.ibb.co/xSJp1QK/Nature-12.jpg', description: 'Nature Image 12', link: 'https://ibb.co/7J2wnFx' },
        { src: 'https://i.ibb.co/hsNzM9s/Nature-13.jpg', description: 'Nature Image 13', link: 'https://ibb.co/qB8QnjB' },
        { src: 'https://i.ibb.co/FHwXc3T/Nature-14.jpg', description: 'Nature Image 14', link: 'https://ibb.co/0sMK12b' },
        { src: 'https://i.ibb.co/Zm7z5z6/Nature-15.jpg', description: 'Nature Image 15', link: 'https://ibb.co/KwSxdxj' },
        { src: 'https://i.ibb.co/V3r5Bcz/Nature-16.jpg', description: 'Nature Image 16', link: 'https://ibb.co/DLsTKHv' },
        { src: 'https://i.ibb.co/D1DVZ9Q/Nature-17.jpg', description: 'Nature Image 17', link: 'https://ibb.co/S6XsztB' },
        { src: 'https://i.ibb.co/6n4HR4w/Nature-18.jpg', description: 'Nature Image 18', link: 'https://ibb.co/X2z7ZzL' },
        { src: 'https://i.ibb.co/rcssTJ7/Nature-19.jpg', description: 'Nature Image 19', link: 'https://ibb.co/D8ppsnV' },
        { src: 'https://i.ibb.co/T098fXb/Nature-20.jpg', description: 'Nature Image 20', link: 'https://ibb.co/HP5zSvx' }
    ];

    // Set the category title
    categoryTitle.textContent = 'AI Generated Images';

    // Populate the gallery with nature images
    natureImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'category-item';

        const a = document.createElement('a');
        a.href = image.link;

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.description;
        img.loading = 'lazy';
        img.border = '0';

        // Add click event to open the modal
        img.onclick = function(e) {
            e.preventDefault();
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            
            // Update download button attributes
            downloadBtn.setAttribute('href', this.src);
            downloadBtn.setAttribute('download', this.alt + '.jpg');
        }

        const p = document.createElement('p');
        p.textContent = image.description;

        a.appendChild(img);
        item.appendChild(a);
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