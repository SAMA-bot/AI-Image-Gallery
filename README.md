# AI-Generated Wallpaper Gallery

## Overview
This project is a responsive web application showcasing an AI-generated wallpaper gallery. It features a visually appealing interface with a dark theme, animated elements, and dedicated category pages for different types of wallpapers.

## Main Features
- Responsive gallery layout on the homepage
- Six wallpaper categories: Anime, AI, Daily Mix, Dogs, Cars, and Nature
- Lazy loading of images for improved performance
- Interactive hover effects on gallery items
- Feedback form for user input
- Animated color-changing title on the main page

## Category Pages
Each category (Anime, AI, Daily Mix, Dogs, Cars, and Nature) has its own dedicated page with the following features:

- Grid layout displaying category-specific wallpapers
- Modal view for enlarged image display
- Download functionality for each wallpaper
- Responsive design for various screen sizes
- Navigation back to the main gallery

Note: All category pages use similar code structure and functionality, with the AI category serving as the representative example in this report.

## Structure
### Main Page
- `index.html`: Main HTML structure
- `script.js`: JavaScript for dynamic content loading and interactivity
- `style.css`: CSS for styling and responsive design

### Category Pages (example: AI Category)
- `Category.html`: HTML structure for the category page
- `category-script.js`: JavaScript for dynamic content loading and interactivity
- `category-style.css`: CSS for styling the category page

## Setup
1. Clone the repository
2. Open `index.html` in a web browser to access the main gallery
3. Navigate to specific categories by clicking on gallery items

## Usage
### Main Page
- Browse the gallery by scrolling through the images
- Click on an image to view its category page
- Submit feedback using the form at the bottom of the page

### Category Pages
- Click on an image to view it in the modal
- Use the download button in the modal to save the image
- Click the "Back to Main Gallery" button to return to the homepage

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Customization
- To add or modify gallery items on the main page, edit the `images` array in `script.js`
- To add or modify images in a category, edit the respective image array (e.g., `aiImages` for the AI category) in the category's script file
- Adjust styles in `style.css` and `category-style.css` to change the look and feel

## Key Components of Category Pages
1. Gallery Grid: Displays category-specific images in a responsive grid layout
2. Image Modal: Allows users to view enlarged images with descriptions
3. Download Button: Enables users to download the displayed wallpaper
4. Back to Gallery Button: Provides navigation back to the main gallery page

## Feedback
User feedback is collected through the form on the main page and logged to the console. In a production environment, you would want to send this data to a server for processing.

This comprehensive gallery system provides an engaging user experience for browsing and downloading AI-generated wallpapers across various categories, with consistent design and functionality throughout the main page and category pages.
