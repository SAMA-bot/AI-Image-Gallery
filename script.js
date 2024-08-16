document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: 'Image 1.jpg', description: 'Anime AI Wallpapers', category: 'anime' },
        { src: 'Image 2.jpg', description: 'AI Wallpapers', category: 'ai' },
        { src: 'Image 3.jpg', description: 'Daily Mix', category: 'daily' },
        { src: 'Image 4.jpg', description: '#Dogs', category: 'dogs' },
        { src: 'Image 5.jpg', description: 'Cars', category: 'cars' },
        { src: 'Image 6.jpg', description: 'Nature', category: 'nature' }
    ];

    images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        const basePath = 'D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1';
        
        const link = document.createElement('a');
        if (image.category === 'anime') {
            link.href = '${basePath}/Anime/Category.html'; // Update this link according to your system's path.
        } else if (image.category === 'ai'){
            link.href = '${basePath}/AI/Category.html'; // Update this link according to your system's path.
        } else if (image.category === 'daily') {
            link.href = '${basePath}/Daily Mix/Category.html'; // Update this link according to your system's path.
        } else if (image.category === 'dogs') {
            link.href = '${basePath}/Dogs/Category.html'; // Update this link according to your system's path.
        } else if (image.category === 'cars') {
            link.href = '${basePath}/Cars/Category.html'; // Update this link according to your system's path.
        } else if (image.category === 'nature') {
            link.href = '${basePath}/Nature/Category.html'; // Update this link according to your system's path.
        } else {    
            link.href = '#'; 
        }

        const img = document.createElement('img');
        img.src = `D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/${image.src}`; // Update this link according to your system's path.
        img.alt = image.description;
        img.loading = 'lazy';

        const p = document.createElement('p');
        p.textContent = image.description;

        link.appendChild(img);
        item.appendChild(link);
        item.appendChild(p);
        gallery.appendChild(item);
    });

    // Feedback form functionality
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Print data to the console
        console.log('Feedback received:', { name, email, message });
        
        // Reset the form
        feedbackForm.reset();
        
        // Show alert
        alert('Thank you for your feedback!');
    });
});
