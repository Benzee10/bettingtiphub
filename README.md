# Betting Tips Hub

A modern, responsive web application for football betting tips, predictions, and accumulator recommendations.

## Features

- **Daily Predictions**: Get expert football match predictions updated daily
- **Accumulator Tips**: Combined betting tips with calculated total odds
- **Betting History**: Track past predictions and their outcomes
- **Bookmaker Recommendations**: Curated list of trusted bookmakers with bonuses
- **Admin Panel**: Manage all content through a secure admin interface

## Technology

- Pure HTML5, CSS3, and vanilla JavaScript
- Firebase Firestore for real-time data storage
- Responsive design for mobile and desktop
- No build process required - runs directly in the browser

## Getting Started

The site is already configured and running! The server is serving the static files on port 5000.

### Pages

- **Home** (`/`) - Landing page with site introduction
- **Predictions** (`/predictions.html`) - View today's betting tips
- **Accumulator** (`/accumulator.html`) - Multi-bet combinations
- **History** (`/history.html`) - Past predictions and results
- **Bookmakers** (`/bookmakers.html`) - Recommended betting platforms
- **Admin** (`/admin.html`) - Content management (password protected)

### Admin Access

The admin panel is password protected. Default password: `letmein123`

**Important**: Change this password in `admin.html` before publishing!

## Firebase Configuration

The app connects to Firebase Firestore with the following collections:
- `predictions` - Daily betting tips
- `accumulator` - Accumulator bet combinations
- `history` - Historical bet results
- `bookmakers` - Recommended bookmaker information

All Firebase configuration is already set up in the HTML files.

## Publishing

This project is configured for easy deployment. When you're ready to make it live:

1. Click the "Deploy" or "Publish" button in Replit
2. Your site will be available at a public URL
3. Remember to update the admin password before going live!

## Customization

- WhatsApp number in all pages: Update `2348037904787` to your number
- Styling: Modify the `<style>` sections in each HTML file
- Firebase data: Use the admin panel or Firebase console to manage content

## Support

For issues or questions about this project, check the Firebase Firestore documentation or Replit support resources.
