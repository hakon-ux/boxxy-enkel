# Local Development & Testing

## Starting the Development Server

```bash
./start-dev-server.sh
```

Or manually:
```bash
python3 -m http.server 8000
```

## Testing Options

### 1. Desktop Browser (Chrome/Safari)
- URL: http://localhost:8000
- Open Developer Tools (Cmd+Option+I)
- Click responsive/device icon
- Select mobile device size

### 2. iOS Simulator (requires Xcode)
- Open iOS Simulator
- Launch Safari in simulator  
- Visit: http://10.0.0.36:8000

### 3. Physical Mobile Device
- Connect to same WiFi as Mac
- Visit: http://10.0.0.36:8000

## Mobile Testing Checklist

- [ ] "Send forespørsel" button not cut off on 8ft container page
- [ ] Button text wraps properly on small screens
- [ ] All container pages (8ft, 10ft, 20ft) display correctly
- [ ] Navigation menu works on mobile
- [ ] Forms submit properly

## Quick Mobile Test URLs

- 8ft Container: http://10.0.0.36:8000/container-8ft.html
- 10ft Container: http://10.0.0.36:8000/container-10ft.html  
- 20ft Container: http://10.0.0.36:8000/container-20ft.html