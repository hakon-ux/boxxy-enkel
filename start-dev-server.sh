#!/bin/bash

# Start local development server for boxxy website
echo "Starting local development server..."
echo "Website will be available at:"
echo "  Desktop: http://localhost:8000"
echo "  Mobile simulator: http://$(ipconfig getifaddr en0):8000"
echo ""
echo "Press Ctrl+C to stop the server"

python3 -m http.server 8000