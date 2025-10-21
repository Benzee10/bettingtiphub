#!/usr/bin/env python3
import http.server
import socketserver
import json
import os
from functools import partial

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # API endpoint to list all card files
        if self.path == '/api/cards':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
            self.end_headers()
            
            # Get all .html files from cards/ folder (excluding README.txt)
            cards_dir = 'cards'
            card_files = []
            if os.path.exists(cards_dir):
                for filename in sorted(os.listdir(cards_dir)):
                    if filename.endswith('.html'):
                        card_files.append(filename)
            
            self.wfile.write(json.dumps(card_files).encode())
        else:
            # Serve regular files
            super().do_GET()
    
    def end_headers(self):
        # Only add cache headers if not already sent (for API endpoint)
        if not hasattr(self, '_headers_sent'):
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

PORT = 5000
Handler = NoCacheHTTPRequestHandler

# Allow reusing the address immediately after shutdown
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
    print(f"Server running at http://0.0.0.0:{PORT}/")
    httpd.serve_forever()
