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
2. Fill out the simple form with just these fields:
   - Ebook title & subtitle
   - Filename (for the URL)
   - Price
   - Cover title (short version)
   - 3 description paragraphs
   - 3-4 benefits with custom emojis
3. Click "Generate Ebook Files" (payment messages and descriptions auto-generate!)
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

2. **Payment Method**
   - Currently using MiniPay: https://link.minipay.xyz/invite?ref=9yjqAbmi
   - This link is already set in all templates
   - Do not change or replace this payment link

### Files to Update:
- `index.html` - homepage (WhatsApp number only)
- `ebooks/dating-tips-for-men.html` - example ebook (WhatsApp number only)
- `ebooks/_TEMPLATE.html` - template for future ebooks (WhatsApp number only)
- Any new ebook pages you create (WhatsApp number only)

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

### Publishing to Replit
1. Update WhatsApp number and payment details in all files
2. Test all pages locally
3. Click "Deploy" button in Replit
4. Share your links on social media, WhatsApp status, etc.

### Publishing to Vercel / Netlify / GitHub Pages
This site works perfectly on static hosting platforms! The code has been optimized to work without a backend server.

**Deployment Steps:**
1. Push your code to GitHub
2. Connect your repository to Vercel/Netlify
3. Deploy (no build configuration needed!)
4. Your site will be live instantly

**Important: When adding new ebooks on Vercel/Netlify:**
1. Create your new ebook card HTML file in the `cards/` folder
2. **Update the card list in `index.html`** (around line 746):
   ```javascript
   const cardFiles = [
       'dating-tips-for-men.html',
       'first-date-confidence.html',
       'texting-secrets-for-men.html',
       'understanding-women.html',
       'your-new-ebook.html'  // Add your new card file here
   ];
   ```
3. Commit and push - your new ebook will appear automatically!

## Tips

- Keep ebook filenames simple (lowercase, use hyphens)
- Each ebook is self-contained (no shared navigation needed)
- You can create as many ebooks as you want
- Update prices individually for each ebook
- Customize benefits/features for each ebook's audience
