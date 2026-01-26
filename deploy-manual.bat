@echo off
REM Manual Deployment Script for Weekilaw Frontend
REM Run this from Command Prompt in the weekilaw_frontend directory

echo 🚀 Starting manual deployment...

REM Configuration - Update these values
set SERVER_HOST=78.110.124.182
set SERVER_USER=user
set SERVER_PORT=50022
set REMOTE_PATH=/var/www/weekilaw-frontend

REM Build the application
echo 📦 Building application...
call npm run build

if %ERRORLEVEL% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

REM Test SSH connection
echo 🔗 Testing SSH connection...
ssh -p %SERVER_PORT% -o ConnectTimeout=10 %SERVER_USER%@%SERVER_HOST% "echo 'SSH connection successful'"

if %ERRORLEVEL% neq 0 (
    echo ❌ SSH connection failed!
    pause
    exit /b 1
)

REM Clean remote directory
echo 🧹 Cleaning remote directory...
ssh -p %SERVER_PORT% %SERVER_USER%@%SERVER_HOST% "sudo rm -rf %REMOTE_PATH%/*"

REM Upload files using rsync
echo 📤 Uploading files...
rsync -avz -e "ssh -p %SERVER_PORT%" --delete --exclude='.git' dist/ %SERVER_USER%@%SERVER_HOST%:%REMOTE_PATH%/

if %ERRORLEVEL% neq 0 (
    echo ❌ Upload failed!
    pause
    exit /b 1
)

REM Set permissions
echo 🔧 Setting permissions...
ssh -p %SERVER_PORT% %SERVER_USER%@%SERVER_HOST% ^
"sudo chown -R www-data:www-data %REMOTE_PATH% && ^
 sudo find %REMOTE_PATH% -type f -exec chmod 644 {} \; && ^
 sudo find %REMOTE_PATH% -type d -exec chmod 755 {} \; && ^
 sudo systemctl reload nginx"

if %ERRORLEVEL% neq 0 (
    echo ⚠️ Permission setting failed, but files were uploaded
)

echo ✅ Deployment completed successfully!
echo 🌐 Your site should be available at your server URL
pause