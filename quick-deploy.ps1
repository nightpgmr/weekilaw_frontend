# Quick fix for immediate deployment
# Run this from weekilaw_frontend directory

Write-Host "🔧 Quick deployment fix..." -ForegroundColor Green

# Build first
npm run build

# Use rsync instead of scp (handles directories properly)
rsync -avz -e "ssh -p 50022 -o ServerAliveInterval=60 -o ConnectTimeout=30" --delete --timeout=300 dist/ user@78.110.124.182:/var/www/weekilaw-frontend/

# Set permissions
ssh -p 50022 user@78.110.124.182 "sudo chown -R www-data:www-data /var/www/weekilaw-frontend && sudo systemctl reload nginx"

Write-Host "✅ Done!" -ForegroundColor Green