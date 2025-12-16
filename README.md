# Zeit für Klarheit - Professional Website

A fully responsive, semantic HTML5 website built with BEM methodology and SCSS.

## 🚀 Features

- ✅ Semantic HTML5 structure
- ✅ BEM (Block Element Modifier) naming convention
- ✅ SCSS architecture with partials
- ✅ Mobile-first responsive design
- ✅ Vanilla JavaScript (no jQuery)
- ✅ Cross-browser compatible (Chrome, Firefox, Safari, Edge)
- ✅ Accessibility features (ARIA attributes, keyboard navigation)
- ✅ Smooth scroll animations with IntersectionObserver
- ✅ Responsive burger menu
- ✅ FAQ accordion
- ✅ Testimonials slider
- ✅ Fluid typography with clamp()
- ✅ Optimized performance

## 📁 Project Structure

```
├── assets/
│   ├── images/        # PNG/JPG images
│   └── svg/           # SVG icons and graphics
├── scss/
│   ├── _variables.scss    # Colors, spacing, typography, breakpoints
│   ├── _base.scss         # Reset, container, typography
│   ├── _buttons.scss      # Button styles
│   ├── _header.scss       # Header and navigation
│   ├── _hero.scss         # Hero section
│   ├── _clarity.scss      # Clarity section
│   ├── _testimonials.scss # Testimonials
│   ├── _footer.scss       # Footer
│   ├── _animations.scss   # Animations and transitions
│   └── main.scss          # Main SCSS file (imports all partials)
├── css/
│   └── style.css          # Compiled CSS
├── js/
│   └── main.js            # Vanilla JavaScript
├── index.html             # Main HTML file
└── README.md              # This file
```

## 🛠️ Development

### Prerequisites

- [Node.js](https://nodejs.org/) (for SCSS compilation)
- [Sass](https://sass-lang.com/) compiler

### Installation

1. Install Sass globally (if not already installed):
```bash
npm install -g sass
```

### Compile SCSS

To compile SCSS to CSS:

```bash
sass scss/main.scss css/style.css --no-source-map
```

To watch for changes and auto-compile:

```bash
sass --watch scss/main.scss:css/style.css --no-source-map
```

## 🎨 Design System

### Colors

- **Primary**: `#709a08` (Dark Green)
- **Primary Light**: `#bbe002` (Lime Green)
- **Dark**: `#070d0b`
- **Dark Background**: `#134023`
- **White**: `#ffffff`
- **Gray Light**: `#e8e8e8`
- **Gray Medium**: `#eaeaea`

### Typography

- **Primary Font**: Mesveda (Regular, Bold, Black, Italic, BlackItalic)
- **Secondary Font**: Montserrat
- **Base Size**: 16px
- **Fluid Typography**: Using clamp() for responsive scaling

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1440px
- **Desktop**: > 1440px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA attributes for interactive elements
- Keyboard navigation support
- Focus indicators
- Screen reader friendly

## 📱 Responsive Features

### Mobile (< 768px)
- Hamburger menu navigation
- Stacked layout
- Touch-friendly buttons
- Optimized images

### Tablet (768px - 1440px)
- 2-column layouts where appropriate
- Adjusted spacing and typography

### Desktop (> 1440px)
- Full desktop layout matching original design
- Hover effects
- Optimal image sizes

## 🚀 JavaScript Features

1. **Burger Menu**
   - Smooth toggle animation
   - Overlay backdrop
   - Prevents body scroll when open
   - Closes on escape key or link click

2. **Scroll Reveal**
   - IntersectionObserver API
   - Fade-in animations
   - Directional reveals (left, right, scale)

3. **FAQ Accordion**
   - Single-item expand/collapse
   - Keyboard accessible
   - Smooth height transitions

4. **Testimonials Slider**
   - Touch/click navigation
   - Auto-responsive behavior
   - Smooth transitions

5. **Smooth Scrolling**
   - Anchor link navigation
   - Header offset compensation

## 📝 Notes

- Assets are referenced locally from `/assets` directory
- Original Anima export backed up as `index.html.backup`
- Old CSS files (`globals.css`, `style.css`, `styleguide.css`) can be removed
- Custom fonts (Mesveda family) would need to be added via @font-face

## 🔧 Future Enhancements

- Add video modal functionality
- Implement lazy loading for images
- Add more animation variations
- Create more testimonial content
- Add form validation
- Integrate analytics

## 📄 License

All rights reserved.

---

Built with ❤️ following modern web development best practices.
