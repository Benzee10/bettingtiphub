# Betting Tips Hub - Project Documentation

## Overview
This is a static HTML/CSS/JavaScript website for a betting tips platform. The site provides football predictions, accumulator tips, betting history, and bookmaker recommendations. It uses Firebase Firestore for data storage and real-time updates.

## Project Structure
- **Frontend**: Pure HTML5, CSS, and vanilla JavaScript
- **Database**: Firebase Firestore (cloud-hosted)
- **Pages**:
  - `index.html` - Home page
  - `predictions.html` - Daily predictions
  - `accumulator.html` - Accumulator bets
  - `history.html` - Betting history/results
  - `bookmakers.html` - Recommended bookmakers
  - `admin.html` - Admin panel for managing content

## Technology Stack
- HTML5
- CSS3 (inline styles)
- Vanilla JavaScript (ES6 modules)
- Firebase SDK v11.10.0 (via CDN)
- No build system required (static files)

## Firebase Configuration
The app connects to a Firebase project:
- Project ID: `betting-tip-hub`
- API Key: Configured in each HTML file
- Collections: `predictions`, `accumulator`, `history`, `bookmakers`

## Recent Changes
- 2025-10-20: Initial project import from GitHub and Replit setup complete
  - Created Python HTTP server with cache control headers
  - Configured workflow for static file serving on port 5000
  - Set up deployment configuration for autoscale
  - Added .gitignore for Replit environment
  - Created comprehensive README for users

## Server Configuration
- **Server Type**: Python 3.11 HTTP server
- **Port**: 5000 (bound to 0.0.0.0)
- **Cache Control**: Disabled (no-cache headers) for Replit iframe compatibility
- **Server File**: `server.py`

## Deployment Notes
- Static HTML site served via Python HTTP server
- No backend server required - Firebase handles all data storage
- Configured for Replit Autoscale deployment
- Originally designed for Vercel, now fully adapted for Replit
- Deployment command: `python3 server.py`

## Admin Panel Security
- Admin panel at `/admin.html`
- Default password: `letmein123` (should be changed before production)
- Password check is client-side only (not secure for production use)

## User Preferences
None documented yet.
