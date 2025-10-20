# Lucy Dating Tips - Multi-Ebook Landing Pages

## Overview
A multi-page landing site system for Lucy's dating and relationship ebooks. Each ebook gets its own dedicated page with unique shareable links. The site is designed to be feminine, confident, and flirty, with a focus on converting visitors to WhatsApp contacts for manual payment processing.

## Project Type
Static HTML landing pages with template system for easy scaling.

## Technology Stack
- HTML5
- CSS3 (inline styles)
- Google Fonts (Playfair Display + Poppins)
- Python HTTP server for local development

## Site Structure
```
/
├── index.html                          # Homepage listing all ebooks
├── create-ebook.html                   # Ebook generator tool
├── server.py                           # Python HTTP server
├── ebooks/
│   ├── dating-tips-for-men.html       # Ebook 1 - Dating Tips ($25)
│   ├── texting-secrets-for-men.html   # Ebook 2 - Texting Secrets ($20)
│   ├── first-date-confidence.html     # Ebook 3 - First Date Confidence ($18)
│   ├── understanding-women.html       # Ebook 4 - Understanding Women ($22)
│   ├── _TEMPLATE.html                 # Template for creating new ebooks
│   └── HOW-TO-ADD-NEW-EBOOK.txt       # Step-by-step instructions
```

## Key Features
- **Homepage**: Displays all ebooks in a grid with cards
- **Individual Ebook Pages**: Each ebook has its own URL for targeted sharing
- **Template System**: Easy duplication and customization
- **Responsive Design**: Mobile-first approach
- **Elegant Aesthetics**: Soft pink/blush color scheme with professional typography
- **WhatsApp Integration**: Direct call-to-action buttons for customer contact
- **Smooth Animations**: Fade-in effects on scroll, hover animations on cards, floating WhatsApp button
- **Dark Mode**: Toggle between light and dark themes while maintaining the pink aesthetic

## How It Works
1. Homepage shows all available ebooks
2. Visitors click "View Details" on any ebook
3. They're taken to a dedicated page with full details, benefits, and payment info
4. They click the WhatsApp button to purchase
5. After payment, they message Lucy to receive the ebook

## Adding New Ebooks

### Easy Method: Ebook Generator (Recommended)
1. Visit `/create-ebook.html` in the browser
2. Fill out the form with ebook details (title, price, description, benefits, etc.)
3. Click "Generate Ebook Files"
4. Download the generated HTML file
5. Save it in `ebooks/` folder
6. Copy and paste the homepage card code into `index.html`
7. Done! No coding needed!

### Manual Method: Template System
1. Copy `ebooks/_TEMPLATE.html`
2. Rename and customize
3. Add a card to homepage
4. Share the unique URL

See `ebooks/HOW-TO-ADD-NEW-EBOOK.txt` for detailed manual instructions.

## Important Customization Needed
**WhatsApp Number:**
- Current WhatsApp number: +27833299586
- This is already configured across all files
- To change it in the future, update it in all ebook pages, template, and generator

**Payment Method:**
- Payment is handled through MiniPay
- Link: https://link.minipay.xyz/invite?ref=9yjqAbmi
- This is already set in all templates and ebook pages
- Do NOT change or replace this payment link

Files to update (WhatsApp number only):
- index.html
- ebooks/dating-tips-for-men.html
- ebooks/texting-secrets-for-men.html
- ebooks/first-date-confidence.html
- ebooks/understanding-women.html
- ebooks/_TEMPLATE.html
- create-ebook.html (generator template)
- Any new ebook pages created

## Recent Changes
- 2025-10-20: Added smooth animations and dark mode toggle across entire site
  - Implemented comprehensive CSS variables system for easy theme switching (light/dark modes)
  - All hard-coded colors replaced with CSS variables (--pink-primary, --text-primary, --card-bg, etc.)
  - Added fade-in animations that trigger when scrolling to sections
  - Enhanced hover effects on ebook cards with scale and lift animations
  - Added floating/pulsing animation to WhatsApp buttons for attention
  - Hero sections slide down with entrance animation
  - Dark mode maintains pink aesthetic with adjusted colors for readability
  - Theme preference saved in localStorage for persistence
  - Dark mode toggle button (🌙/☀️) in top-right corner of all pages
  - Fixed JavaScript error by adding theme toggle button to all 4 ebook pages
  - Complete CSS variable system ensures dark mode works perfectly across all pages
  - Applied to: index.html, all 4 ebook pages, _TEMPLATE.html, and create-ebook.html generator
  - Generated ebooks from create-ebook.html now include animations and dark mode by default
- 2025-10-20: Added detailed MiniPay payment instructions across all ebook pages
  - Replaced simple payment section with comprehensive "How to Pay" guide
  - Added step-by-step MiniPay setup and usage instructions with visual sections
  - Included MiniPay join link: https://link.minipay.xyz/invite?ref=9yjqAbmi
  - Added YouTube tutorial link for MiniPay: https://www.youtube.com/watch?v=DWxBXa7Fs4w
  - Detailed instructions on creating and sending Cash Links
  - Explained what MiniPay is and how it works
  - Updated WhatsApp number throughout entire site to +27833299586
  - Applied changes to: all 4 ebook pages, _TEMPLATE.html, create-ebook.html generator, and index.html
  - Lucy's flirty, confident tone maintained throughout payment instructions
- 2025-10-20: Added currency selection feature to ebook creator
  - Users can now select from 10 different currencies (USD, EUR, GBP, NGN, CAD, AUD, ZAR, KES, GHS, INR)
  - Currency symbols automatically display on ebook covers and pricing sections
  - Default currency set to Nigerian Naira (₦ NGN)
  - Generated ebook pages and homepage cards display correct currency symbol
  - Currency code shown alongside price in payment section
- 2025-10-20: Added ebook cover images to homepage cards
  - Each ebook card now displays a pink gradient cover with the ebook title
  - Images from each ebook appear below the cover
  - Prices are prominently displayed with proper currency symbols
- 2025-10-20: Added 3 new ebook samples to showcase the multi-ebook system
  - Created "Texting Secrets for Men" ebook page ($20)
  - Created "First Date Confidence" ebook page ($18)
  - Created "Understanding Women" ebook page ($22)
  - Updated homepage to display all 4 ebooks in a responsive grid
  - All new ebooks follow the same design pattern and include WhatsApp integration
- 2025-10-20: Updated payment method to MiniPay across all pages
  - All ebook pages now use MiniPay payment link
  - Payment link: https://link.minipay.xyz/invite?ref=9yjqAbmi
  - Updated payment instructions to "I've paid" message
  - Documentation updated to reflect new payment method
- 2025-10-20: Updated create-ebook.html to use image URLs instead of file uploads
  - Users can now add multiple image URLs for each ebook
  - Images are displayed in a responsive grid on the ebook page
  - Image previews show automatically when URLs are entered
- 2025-10-20: Restructured to multi-ebook system with template
- Created homepage with ebook grid
- Added template system for easy scaling
- Included comprehensive instructions for adding new ebooks

## Server Configuration
- Port: 5000
- Host: 0.0.0.0
- Cache control: Disabled for Replit preview

## Deployment
Configured for Replit Autoscale deployment with `python3 server.py`

## Available Ebooks
The site currently features 4 ebooks with individual shareable links:

1. **Dating Tips for Men** ($25)
   - Link: `yoursite.com/ebooks/dating-tips-for-men.html`
   - Topics: Attraction, avoiding ghosting, building real connections

2. **Texting Secrets for Men** ($20)
   - Link: `yoursite.com/ebooks/texting-secrets-for-men.html`
   - Topics: Perfect first texts, timing, flirty messages, transitioning to dates

3. **First Date Confidence** ($18)
   - Link: `yoursite.com/ebooks/first-date-confidence.html`
   - Topics: Date planning, conversation starters, reading body language, perfect goodbye

4. **Understanding Women** ($22)
   - Link: `yoursite.com/ebooks/understanding-women.html`
   - Topics: Decoding mixed signals, emotional communication, handling conflicts

- Homepage: `yoursite.com/`
