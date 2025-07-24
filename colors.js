// Boxxy Utleie Brand Colors
// Official color palette for consistent branding across the application

export const colors = {
  // Primary Colors
  orange: '#eab41e',      // Primary brand orange
  green: '#113c3a',       // Primary brand green (dark)
  black: '#000000',       // Pure black
  
  // Secondary Colors  
  grey: '#e6eae3',        // Light grey
  lightGreen: '#c3e8c9',  // Light green
  yellow: '#f0f18e',      // Light yellow
  
  // Legacy colors (for backward compatibility)
  legacy: {
    primaryYellow: '#FFCF40',
    primaryGold: '#E0A800',
    darkBackground: '#121212',
    cardBackground: '#1F1F1F',
    borderGray: '#262626'
  }
}

// Color usage guidelines
export const colorUsage = {
  text: {
    onDark: colors.orange,     // Use orange text on dark backgrounds
    onLight: colors.green,     // Use green text on light backgrounds
    heading: 'Swiss 721',      // Font for headings
    body: 'Mulish'             // Font for body text
  },
  
  backgrounds: {
    dark: [colors.black, colors.green],
    light: [colors.grey, colors.lightGreen, colors.yellow]
  }
}

// Tailwind CSS custom colors (add to tailwind.config.js)
export const tailwindColors = {
  'boxxy-orange': '#eab41e',
  'boxxy-green': '#113c3a', 
  'boxxy-black': '#000000',
  'boxxy-grey': '#e6eae3',
  'boxxy-light-green': '#c3e8c9',
  'boxxy-yellow': '#f0f18e'
}

export default colors