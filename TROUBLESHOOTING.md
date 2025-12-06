# Troubleshooting Guide

## React Refresh Runtime Error

If you encounter the error:
```
Module not found: Error: You attempted to import .../react-refresh/runtime.js which falls outside of the project src/ directory.
```

### Solution Steps:

1. **Clear all caches and reinstall:**
   ```bash
   cd react-app
   rm -rf node_modules package-lock.json node_modules/.cache .eslintcache
   npm install
   ```

2. **Restart the development server:**
   ```bash
   npm start
   ```

3. **If the issue persists, try:**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Remove and reinstall
   rm -rf node_modules package-lock.json
   npm install
   
   # Start fresh
   npm start
   ```

## Common Issues

### Port Already in Use
If port 3000 is already in use:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm start
```

### Module Not Found Errors
- Ensure all imports use relative paths (e.g., `./components/Header`)
- Check that file extensions are correct (`.js` for JavaScript files)
- Verify all component files are in the `src/` directory

### CSS Not Loading
- Ensure CSS files are in `public/assets/` directory
- Check that `index.html` has correct paths to CSS files
- Verify `PUBLIC_URL` is set correctly for image paths

## Verification Checklist

- [ ] All dependencies installed (`npm install` completed successfully)
- [ ] All files are in correct directories (`src/` for components, `public/` for assets)
- [ ] No syntax errors in component files
- [ ] All imports use correct paths
- [ ] Cache has been cleared


