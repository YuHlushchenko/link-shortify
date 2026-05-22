#!/bin/bash

# Link-Shortify API Documentation Server
# Serves the OpenAPI documentation with Swagger UI

PORT=8080
HOST=localhost

echo "Starting Link-Shortify API Documentation Server..."
echo "Server will be available at: http://${HOST}:${PORT}"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "Using Python 3 HTTP server"
    cd "$(dirname "$0")"

    if command -v open &> /dev/null; then
        # macOS
        sleep 1 && open "http://${HOST}:${PORT}" &
    elif command -v xdg-open &> /dev/null; then
        # Linux
        sleep 1 && xdg-open "http://${HOST}:${PORT}" &
    elif command -v start &> /dev/null; then
        # Windows
        sleep 1 && start "http://${HOST}:${PORT}" &
    fi

    python3 -m http.server ${PORT}
elif command -v npx &> /dev/null; then
    echo "Using Node.js http-server"
    cd "$(dirname "$0")"
    npx http-server . -p ${PORT} -o
else
    echo "Error: Neither Python 3 nor Node.js found."
    echo "Please install one of the following:"
    echo "  - Python 3: https://www.python.org/downloads/"
    echo "  - Node.js: https://nodejs.org/"
    exit 1
fi
