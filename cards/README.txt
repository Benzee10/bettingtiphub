HOMEPAGE CARDS FOLDER
=====================

This folder contains individual HTML card files that appear on the homepage.

HOW TO ADD A NEW EBOOK CARD:
1. Create a new HTML file in this folder (e.g., "your-ebook-name.html")
2. Copy the format from any existing card file
3. Update the content:
   - Card title in the ebook-cover-mini section
   - Image URL
   - Price
   - Description text
   - Link to the ebook page (href)
4. The card will automatically appear on the homepage!

CARD FILE FORMAT:
<div class="ebook-card">
    <div class="ebook-cover-mini">
        <h3>Your Ebook<br>Title</h3>
    </div>
    <div class="ebook-card-content">
        <img src="IMAGE_URL" alt="Your Ebook" class="ebook-image">
        <div class="price">$XX</div>
        <p>Your ebook description here.</p>
        <a href="ebooks/your-ebook-page.html" class="btn">View Details</a>
    </div>
</div>

NOTES:
- All cards are automatically loaded from this folder via the /api/cards endpoint
- Cards are displayed in alphabetical order by filename (use prefixes to control order)
  Example: "01-dating-tips.html" will appear before "02-texting-secrets.html"
- The system automatically discovers any .html file you add to this folder
- Make sure your ebook page exists in the ebooks/ folder before adding a card
- No need to edit index.html - just drop the card file here and refresh!
