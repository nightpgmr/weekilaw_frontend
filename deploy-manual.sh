#!/bin/bash

# Manual Deployment Script for Weekilaw Frontend
# Run this from the weekilaw_frontend directory

set -e

echo "🚀 Starting manual deployment..."

# Configuration - Update these values
SERVER_HOST="78.110.124.182"
SERVER_USER="user"  # Replace with your actual username
SERVER_PORT="50022"
REMOTE_PATH="/var/www/weekilaw-frontend"

# Build the application
echo "📦 Building application..."
npm run build

# Test SSH connection
echo "🔗 Testing SSH connection..."
ssh -p $SERVER_PORT -o ConnectTimeout=10 $SERVER_USER@$SERVER_HOST "echo 'SSH connection successful'"

# Clean remote directory
echo "🧹 Cleaning remote directory..."
ssh -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "sudo rm -rf $REMOTE_PATH/*"

# Upload files using rsync (more reliable than scp)
echo "📤 Uploading files..."
rsync -avz -e "ssh -p $SERVER_PORT" --delete --exclude='.git' --progress dist/ $SERVER_USER@$SERVER_HOST:$REMOTE_PATH/

# Set permissions
echo "🔧 Setting permissions..."
ssh -p $SERVER_PORT $SERVER_USER@$SERVER_HOST << EOF
sudo chown -R www-data:www-data $REMOTE_PATH
sudo find $REMOTE_PATH -type f -exec chmod 644 {} \;
sudo find $REMOTE_PATH -type d -exec chmod 755 {} \;
sudo systemctl reload nginx
EOF

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be available at your server URL"