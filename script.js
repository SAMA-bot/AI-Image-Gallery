document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: 'https://i.ibb.co/wYT4m8r/Image-1.jpg', description: 'Anime AI Wallpapers', category: 'anime' },
        { src: 'https://i.ibb.co/6yBWpKW/Image-2.jpg', description: 'AI Wallpapers', category: 'ai' },
        { src: 'https://i.ibb.co/cr7NKWV/Image-3.jpg', description: 'Daily Mix', category: 'daily' },
        { src: 'https://i.ibb.co/1qfFTcT/Image-4.jpg', description: '#Dogs', category: 'dogs' },
        { src: 'https://i.ibb.co/BcMzfLL/Image-5.jpg', description: 'Cars', category: 'cars' },
        { src: 'https://i.ibb.co/WyCqHJZ/Image-6.jpg', description: 'Nature', category: 'nature' }
    ];

    const links = {
        anime: 'Anime/Category.html',
        ai: 'AI/Category.html',
        daily: 'Daily Mix/Category.html',
        dogs: 'Dogs/Category.html',
        cars: 'Cars/Category.html',
        nature: 'Nature/Category.html'
    };

    images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const link = document.createElement('a');
        link.href = links[image.category] || '#';

        const img = document.createElement('img');
        img.src = image.src;
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
