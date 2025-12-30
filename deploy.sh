#!/bin/bash

# Weekilaw Frontend Deployment Script
# Usage: ./deploy.sh [environment]

set -e

ENVIRONMENT=${1:-production}
PROJECT_ROOT="/var/www/weekilaw-frontend"
BACKEND_PUBLIC="/var/www/weekilaw-backend/public"

echo "🚀 Starting frontend deployment to $ENVIRONMENT environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root or with sudo
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root"
   exit 1
fi

# Backup current build
print_status "Creating backup..."
if [ -d "$PROJECT_ROOT/dist" ]; then
    BACKUP_DIR="/var/www/weekilaw-frontend_backup_$(date +%Y%m%d_%H%M%S)"
    sudo cp -r $PROJECT_ROOT/dist $BACKUP_DIR 2>/dev/null || true
    print_status "Backup created: $BACKUP_DIR"
fi

# Install/update Node.js dependencies
print_status "Installing Node.js dependencies..."
if [ -f package.json ]; then
    npm install --production=false
fi

# Build application
print_status "Building React application..."
if [ -f package.json ]; then
    npm run build
fi

# Copy build to frontend directory (not backend)
print_status "Copying build to frontend directory..."
if [ -d "dist" ]; then
    sudo mkdir -p $PROJECT_ROOT/dist
    sudo rm -rf $PROJECT_ROOT/dist/*
    sudo cp -r dist/* $PROJECT_ROOT/dist/
else
    print_error "Build directory 'dist' not found!"
    exit 1
fi

# Set proper permissions
print_status "Setting permissions..."
sudo chown -R www-data:www-data $BACKEND_PUBLIC
sudo chmod -R 755 $BACKEND_PUBLIC

# Reload web server
print_status "Reloading web server..."
sudo systemctl reload nginx 2>/dev/null || true

# Health check
print_status "Running health checks..."
sleep 5

if curl -f -I http://localhost/ > /dev/null 2>&1; then
    print_status "✅ Frontend health check passed"
else
    print_warning "⚠️  Frontend health check failed"
fi

print_status "🎉 Frontend deployment completed successfully!"
print_status "🌐 Frontend should be available at: http://your-server-ip/"
