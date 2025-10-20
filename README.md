# Lucy - Dating & Relationship Ebooks Landing Pages

A beautiful, feminine landing page system for promoting multiple ebooks with WhatsApp integration and manual payment collection.

## Structure

```
/
├── index.html                          # Homepage listing all ebooks
├── server.py                           # Python HTTP server
├── ebooks/
│   ├── dating-tips-for-men.html       # Example ebook page
│   ├── _TEMPLATE.html                 # Template for new ebooks
│   └── HOW-TO-ADD-NEW-EBOOK.txt       # Instructions
```

## How to Add New Ebooks

### Method 1: Using the Ebook Generator (EASIEST!) ✨
1. Go to `/create-ebook.html` in your browser
2. Fill out the simple form with your ebook details
3. Click "Generate Ebook Files"
4. Download the generated HTML file and save it in the `ebooks/` folder
5. Copy the homepage card code and paste it in `index.html`
6. Done! No coding required!

### Method 2: Manual Template Method
1. Copy `ebooks/_TEMPLATE.html` 
2. Rename it (example: `ebooks/relationship-advice.html`)
3. Edit all sections marked with `<!-- EDIT: -->` comments
4. Add a card for it on the homepage (`index.html`)

### Detailed Instructions
See `ebooks/HOW-TO-ADD-NEW-EBOOK.txt` for step-by-step guide.

## Before Publishing

### Update These in ALL Files:

1. **WhatsApp Number**
   - Find: `234XXXXXXXXXX`
   - Replace with your actual number (with country code, no +)
   - Example: `2348012345678`

2. **Payment Account**
   - Account number (currently `0123456789`)
   - Bank name (currently `Opay`)
   - Account holder (currently `Joseph John`)

### Files to Update:
- `index.html` - homepage
- `ebooks/dating-tips-for-men.html` - example ebook
- `ebooks/_TEMPLATE.html` - template for future ebooks
- Any new ebook pages you create

## Features

- **Homepage**: Lists all your ebooks with cards
- **Individual Ebook Pages**: Each ebook gets its own unique shareable link
- **Responsive Design**: Looks great on mobile and desktop
- **Feminine Aesthetic**: Soft pink gradients, elegant fonts
- **WhatsApp Integration**: Direct messaging for payment and delivery
- **Template System**: Easy to add unlimited ebooks

## Sharing Links

Each ebook has its own unique URL:
- Homepage: `https://your-site.com/`
- Dating Tips: `https://your-site.com/ebooks/dating-tips-for-men.html`
- Your New Ebook: `https://your-site.com/ebooks/your-file-name.html`

## Publishing

1. Update WhatsApp number and payment details in all files
2. Test all pages locally
3. Click "Deploy" button in Replit
4. Share your links on social media, WhatsApp status, etc.

## Tips

- Keep ebook filenames simple (lowercase, use hyphens)
- Each ebook is self-contained (no shared navigation needed)
- You can create as many ebooks as you want
- Update prices individually for each ebook
- Customize benefits/features for each ebook's audience
