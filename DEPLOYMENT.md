# Weekilaw Frontend Deployment Guide

## 🚀 Deployment Options

### Option 1: GitHub Actions (Automated)
The project includes a GitHub Actions workflow that automatically deploys on push to main/master branch.

**Workflow file:** `.github/workflows/deploy.yml`

**To fix the hanging issue:**
1. The workflow has been updated with better rsync settings
2. If it still hangs, use manual deployment instead

### Option 2: Manual Deployment Scripts

#### For Windows PowerShell:
```powershell
# Update the configuration in manual-deploy.ps1 first
# Then run:
.\manual-deploy.ps1
```

#### For Windows Command Prompt:
```cmd
# Update the configuration in deploy-manual.bat first
# Then run:
deploy-manual.bat
```

#### For Linux/Mac:
```bash
# Update the configuration in deploy-manual.sh first
# Then run:
chmod +x deploy-manual.sh
./deploy-manual.sh
```

### Option 3: Manual Commands

If you prefer to run commands manually:

```bash
# 1. Build the application
npm run build

# 2. Test SSH connection
ssh -p 50022 user@78.110.124.182 "echo 'SSH working'"

# 3. Upload files using rsync (recommended)
rsync -avz -e "ssh -p 50022" --delete dist/ user@78.110.124.182:/var/www/weekilaw-frontend/

# 4. Set permissions on server
ssh -p 50022 user@78.110.124.182 << 'EOF'
sudo chown -R www-data:www-data /var/www/weekilaw-frontend
sudo find /var/www/weekilaw-frontend -type f -exec chmod 644 {} \;
sudo find /var/www/weekilaw-frontend -type d -exec chmod 755 {} \;
sudo systemctl reload nginx
EOF
```

## 🔧 Configuration

Update these values in your deployment script:

```bash
SERVER_HOST="78.110.124.182"      # Your server IP
SERVER_USER="user"                 # Your SSH username
SERVER_PORT="50022"                # Your SSH port
REMOTE_PATH="/var/www/weekilaw-frontend"  # Remote directory
```

## 🐛 Troubleshooting

### Rsync Hanging Issues:
- **Cause:** Problematic rsync switches or SSH timeouts
- **Fix:** Use the updated workflow or manual rsync with timeouts

### Permission Denied:
- **Cause:** Server-side permission issues
- **Fix:** Ensure your SSH user has sudo access for the target directory

### SCP Directory Issues:
- **Cause:** SCP doesn't handle `dist/*` well with directories
- **Fix:** Use `rsync` instead, or use `scp -r dist/* server:directory/`

### SSH Connection Issues:
- **Cause:** Wrong port, key issues, or firewall
- **Fix:** Test with `ssh -p PORT user@host "echo test"`

## 📝 Notes

- Always test your deployment scripts on a staging environment first
- Keep your SSH keys secure and don't commit them to version control
- Monitor your server resources during large deployments
- Use `--dry-run` with rsync to test before actual deployment