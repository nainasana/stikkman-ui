# Stikkman UX - Frontend Development Task

A modern, responsive React application showcasing smooth animations and interactive design elements.

## 🚀 Features

- **Smooth Animations**: Powered by Framer Motion and GSAP ScrollTrigger
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Glassmorphism effects, gradients, and contemporary design
- **Interactive Elements**: Hover effects, parallax scrolling, and micro-interactions
- **Performance Optimized**: Efficient animations and smooth scrolling
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Framer Motion** for animations
- **GSAP** with ScrollTrigger for scroll-based animations
- **CSS3** with modern features (Grid, Flexbox, Custom Properties)
- **Responsive Design** with mobile-first approach

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend-stikkman
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Design Features

### Hero Section
- Gradient background with floating shapes
- Animated text with gradient effects
- Interactive mockup screen with 3D transforms
- Smooth scroll indicator
- Parallax background effects

### Features Section
- Grid layout with responsive cards
- Staggered animations on scroll
- Hover effects with color transitions
- Modern glassmorphism design
- Interactive CTA button with shine effect

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify
1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to Netlify

### Other Platforms
The application can be deployed to any static hosting platform by running:
```bash
npm run build
```

## 🎯 Performance

- Optimized animations with `will-change` properties
- Efficient GSAP animations with proper cleanup
- Smooth scrolling with `scroll-behavior: smooth`
- Optimized images and assets

## 🔧 Customization

### Colors
Update the CSS custom properties in the component files to change the color scheme:

```css
--primary-gradient: linear-gradient(45deg, #667eea, #764ba2);
--secondary-gradient: linear-gradient(45deg, #ff6b6b, #4ecdc4);
```

### Animations
Modify animation parameters in the component files:
- Framer Motion variants
- GSAP ScrollTrigger settings
- CSS keyframe animations

## 📄 License

This project is created for the Stikkman UX frontend development task.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using React, Framer Motion, and GSAP**
