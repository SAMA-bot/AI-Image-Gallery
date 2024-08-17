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

    // Dog images data
    const dogImages = [
        { src: 'https://i.ibb.co/48X5gsB/Dogs-1.jpg', description: 'Dogs Image 1', link: 'https://ibb.co/m92MFvQ' },
        { src: 'https://i.ibb.co/tXr1zfg/Dogs-2.jpg', description: 'Dogs Image 2', link: 'https://ibb.co/GTSr9wy' },
        { src: 'https://i.ibb.co/Xsjvp7R/Dogs-3.jpg', description: 'Dogs Image 3', link: 'https://ibb.co/YkPq8cs' },
        { src: 'https://i.ibb.co/58GVqB4/Dogs-4.jpg', description: 'Dogs Image 4', link: 'https://ibb.co/zRQwKGx' },
        { src: 'https://i.ibb.co/vPRzyn0/Dogs-5.jpg', description: 'Dogs Image 5', link: 'https://ibb.co/0MvJ4bH' },
        { src: 'https://i.ibb.co/nr4NmxT/Dogs-6.jpg', description: 'Dogs Image 6', link: 'https://ibb.co/LSBXRVM' },
        { src: 'https://i.ibb.co/cDg7gQF/Dogs-7.jpg', description: 'Dogs Image 7', link: 'https://ibb.co/6gnfnFP' },
        { src: 'https://i.ibb.co/8b9fb43/Dogs-8.jpg', description: 'Dogs Image 8', link: 'https://ibb.co/9hW1h3X' },
        { src: 'https://i.ibb.co/0ZMzSBn/Dogs-9.jpg', description: 'Dogs Image 9', link: 'https://ibb.co/Y8kVMDN' },
        { src: 'https://i.ibb.co/ZRjxCCd/Dogs-10.jpg', description: 'Dogs Image 10', link: 'https://ibb.co/TDft55c' },
        { src: 'https://i.ibb.co/pWMpgwc/Dogs-11.jpg', description: 'Dogs Image 11', link: 'https://ibb.co/cbZdP30' },
        { src: 'https://i.ibb.co/pRgJw5w/Dogs-12.jpg', description: 'Dogs Image 12', link: 'https://ibb.co/QCZrQtQ' },
        { src: 'https://i.ibb.co/9yxFxQP/Dogs-13.jpg', description: 'Dogs Image 13', link: 'https://ibb.co/HGcWc5Z' },
        { src: 'https://i.ibb.co/VScvNWk/Dogs-14.jpg', description: 'Dogs Image 14', link: 'https://ibb.co/0MRfXjz' },
        { src: 'https://i.ibb.co/WpSRZh8/Dogs-15.jpg', description: 'Dogs Image 15', link: 'https://ibb.co/cXzs0Bf' },
        { src: 'https://i.ibb.co/vc1gD97/Dogs-16.jpg', description: 'Dogs Image 16', link: 'https://ibb.co/D14sLdx' }
    ];

    // Set the category title
    categoryTitle.textContent = 'AI Generated Images';

    // Populate the gallery with dog images
    dogImages.forEach(image => {
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