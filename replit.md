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
├── index.html                        # Homepage listing all ebooks
├── images/
│   └── ebook-covers/                # Directory for ebook cover images
├── ebooks/
│   ├── dating-tips-for-men.html     # Example ebook page
│   ├── _TEMPLATE.html               # Template for creating new ebooks
│   └── HOW-TO-ADD-NEW-EBOOK.txt     # Step-by-step instructions
```

## Key Features
- **Homepage**: Displays all ebooks in a grid with cards
- **Individual Ebook Pages**: Each ebook has its own URL for targeted sharing
- **Template System**: Easy duplication and customization
- **Cover Image Support**: Option to upload and display custom cover images for ebooks
- **Responsive Design**: Mobile-first approach
- **Elegant Aesthetics**: Soft pink/blush color scheme with professional typography
- **WhatsApp Integration**: Direct call-to-action buttons for customer contact

## How It Works
1. Homepage shows all available ebooks
2. Visitors click "View Details" on any ebook
3. They're taken to a dedicated page with full details, benefits, and payment info
4. They click the WhatsApp button to purchase
5. After payment, they message Lucy to receive the ebook

## Adding New Ebooks

### Template System (Manual Method)
1. Copy `ebooks/_TEMPLATE.html`
2. Rename it (e.g., `ebooks/your-new-ebook.html`)
3. Customize all sections marked with `<!-- EDIT: -->` comments
4. **Optional**: Add a cover image:
   - Save your image in `images/ebook-covers/` folder
   - Uncomment the "OPTION 1: WITH COVER IMAGE" section in the HTML
   - Replace the image filename with yours
   - Delete or comment out "OPTION 2" (gradient style)
5. Add a card for it on the homepage (`index.html`)
6. Share the unique URL

See `ebooks/HOW-TO-ADD-NEW-EBOOK.txt` for detailed step-by-step instructions.

## Important Customization Needed
Before publishing, update in ALL files:
1. **WhatsApp Number** - Replace `234XXXXXXXXXX` 
2. **Payment Details** - Update account number, bank, and account name

Files to update:
- index.html
- ebooks/dating-tips-for-men.html
- ebooks/_TEMPLATE.html
- Any new ebook pages created

## Recent Changes
- 2025-10-20: Initial multi-ebook system with template
  - Created homepage with ebook grid
  - Added template system for easy scaling
  - Included comprehensive instructions for adding new ebooks
  - Removed create-ebook.html generator (ebooks sent to customers manually)
  - Added cover image support for ebook pages
  - Created images/ebook-covers/ directory for storing cover images

## Server Configuration
- Port: 5000
- Host: 0.0.0.0
- Cache control: Disabled for Replit preview

## Deployment
Configured for Replit Autoscale deployment with `python3 server.py`

## Unique Links
Each ebook can be shared individually:
- Homepage: `yoursite.com/`
- Dating Tips: `yoursite.com/ebooks/dating-tips-for-men.html`
- Future ebooks: `yoursite.com/ebooks/your-filename.html`
