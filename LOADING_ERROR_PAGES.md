# Loading and Error Pages Documentation

## Overview
This IronCore Fitness application now includes comprehensive loading and error handling pages that maintain the industrial aesthetic throughout the user experience.

## Pages Created

### 1. Global Loading Page (`app/loading.jsx`)
- **Purpose**: Shows when the entire app is loading
- **Features**:
  - IronCore logo with rotating barbell animation
  - Industrial-themed loading indicators
  - Progress bars with staggered animations
  - Grain overlay texture for consistency

### 2. Global Error Page (`app/error.jsx`)
- **Purpose**: Catches and displays JavaScript errors
- **Features**:
  - Industrial "System Failure" design
  - Error details display
  - Retry functionality
  - Return to home option
  - Support contact information

### 3. 404 Not Found Page (`app/not-found.jsx`)
- **Purpose**: Shows when a page doesn't exist
- **Features**:
  - Large "404" display
  - Quick navigation links
  - Search functionality
  - Links to main sections (About, Blog, Products, Login)

### 4. Blog Loading Page (`app/blog/loading.jsx`)
- **Purpose**: Shows while blog content is loading
- **Features**:
  - Skeleton loading for blog layout
  - Animated placeholders for articles
  - Sidebar skeleton loading
  - Loading indicator

### 5. About Loading Page (`app/about/loading.jsx`)
- **Purpose**: Shows while about page content is loading
- **Features**:
  - Hero section skeleton
  - Team section placeholders
  - Values section loading states
  - Story section skeleton

## Testing the Pages

### Testing Loading Pages
1. **Global Loading**: Navigate between pages quickly to see loading states
2. **Blog Loading**: Visit `/blog` and refresh to see skeleton loading
3. **About Loading**: Visit `/about` and refresh to see skeleton loading

### Testing Error Page
1. **Test Error Page**: Visit `/test-error` and click "Trigger Error"
2. **Manual Error**: Add `throw new Error('test')` to any component
3. **Network Error**: Disable network and try to load external resources

### Testing 404 Page
1. **Invalid URL**: Visit any non-existent URL like `/invalid-page`
2. **Broken Links**: Create a link to a non-existent page

## Design Features

### Industrial Aesthetic
- **Colors**: Primary yellow (#ffea00), dark backgrounds, red for errors
- **Typography**: Space Grotesk font, uppercase text, bold tracking
- **Icons**: Material Symbols for consistency
- **Animations**: Subtle loading animations, hover effects

### User Experience
- **Consistent Branding**: All pages maintain IronCore identity
- **Clear Actions**: Obvious buttons for recovery/navigation
- **Helpful Information**: Error details, support contacts, search options
- **Accessibility**: Proper contrast, readable text, keyboard navigation

## File Structure
```
app/
├── loading.jsx              # Global loading page
├── error.jsx               # Global error page  
├── not-found.jsx           # Global 404 page
├── test-error/
│   └── page.jsx            # Test page for error demonstration
├── blog/
│   └── loading.jsx         # Blog-specific loading
└── about/
    └── loading.jsx         # About-specific loading
```

## Next.js Integration
- **Automatic**: These pages are automatically used by Next.js
- **Hierarchy**: Route-specific loading/error pages override global ones
- **Client Components**: Error pages use 'use client' for interactivity
- **Static Generation**: Loading and 404 pages are statically generated

## Customization
To customize these pages:
1. Modify the JSX content in each file
2. Update colors in `tailwind.config.js`
3. Add new animations in `globals.css`
4. Extend functionality with additional components

The loading and error pages now provide a seamless, branded experience that keeps users engaged even during failures or delays.