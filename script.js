document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: 'https://drive.google.com/drive/u/0/folders/1gVqKtCVFPFVVdT-8kxwibxq3DeH_7NrB', description: 'Anime AI Wallpapers', category: 'anime' },
        { src: 'Image 2.jpg', description: 'AI Wallpapers', category: 'ai' },
        { src: 'Image 3.jpg', description: 'Daily Mix', category: 'daily' },
        { src: 'Image 4.jpg', description: '#Dogs', category: 'dogs' },
        { src: 'Image 5.jpg', description: 'Cars', category: 'cars' },
        { src: 'Image 6.jpg', description: 'Nature', category: 'nature' }
    ];

    images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const link = document.createElement('a');
        if (image.category === 'anime') {
            link.href = 'D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/Anime/Category.html';
        } else if (image.category === 'ai'){
            link.href = 'D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/AI/Category.html';
        } else if (image.category === 'daily') {
            link.href = 'D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/Daily Mix/Category.html';
        } else if (image.category === 'dogs') {
            link.href = 'D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/Dogs/Category.html';
        } else if (image.category === 'cars') {
            link.href = 'D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/Cars/Category.html';
        } else if (image.category === 'nature') {
            link.href = 'D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/Nature/Category.html';
        } else {    
            link.href = '#'; 
        }

        const img = document.createElement('img');
        img.src = `D:/Desktop/Notebooks/Work/Web Development/My Project/Code Alpha Project 1/${image.src}`;
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