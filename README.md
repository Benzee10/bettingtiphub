# Lucy - Dating Tips Ebook Landing Page

A beautiful, feminine landing page designed to promote Lucy's ebook "Dating Tips for Men" with manual payment collection via WhatsApp.

## Features

- Elegant, feminine design with soft pink gradients
- Mobile-first responsive layout
- Clear call-to-action for WhatsApp contact
- Payment instructions prominently displayed
- Professional typography (Playfair Display + Poppins)

## Customization

Before publishing, update these placeholder values in `index.html`:

### WhatsApp Number
Line 242: Replace `234XXXXXXXXXX` with your actual WhatsApp number (with country code, no +)

Example: For +234 801 234 5678, use: `2348012345678`

### Payment Details
Line 195-197: Update the payment account information:
- Account number: Currently `0123456789`
- Bank name: Currently `Opay`
- Account name: Currently `Joseph John`

### Optional: Telegram Link
If you want to add a Telegram link, add it in the footer section (around line 248).

## How It Works

1. Visitors read about the ebook and its benefits
2. They see the price (₦2,500) and payment instructions
3. They click "Chat Lucy on WhatsApp" button
4. After paying, they message "Paid for Ebook" to receive the ebook

## Publishing

When ready to publish:
1. Update the WhatsApp number and payment details
2. Click the "Deploy" button in Replit
3. Share your public URL with potential customers

## Design Notes

- Uses soft romantic color palette (pink, blush, white)
- Feminine but professional aesthetic
- Clean, minimal layout focused on conversion
- Optimized for mobile viewing
- No external dependencies (except Google Fonts)

## Technical Details

- Pure HTML/CSS (no JavaScript needed)
- Python HTTP server on port 5000
- Configured for Replit deployment
