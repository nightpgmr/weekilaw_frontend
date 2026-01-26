# Simple working deployment - run this now
npm run build
rsync -avz -e "ssh -p 50022 -o ServerAliveInterval=60 -o ConnectTimeout=30" --delete --timeout=300 dist/ user@78.110.124.182:/var/www/weekilaw-frontend/
ssh -p 50022 user@78.110.124.182 "sudo chown -R www-data:www-data /var/www/weekilaw-frontend && sudo systemctl reload nginx"