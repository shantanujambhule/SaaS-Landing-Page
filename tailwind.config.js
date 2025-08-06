// tailwind.config.js

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        glass: 'rgba(255, 255, 255, 0.05)',
         brand: '#6366F1',          // Primary
        accent: '#8B5CF6',         // Secondary Accent
        sky: '#0EA5E9',            // Supportive Accent
        surface: '#FFFFFF',
        bg: '#F9FAFB',
        text: '#111827',
        muted: '#6B7280',
        hover: '#4F46E5',
        brand: {
          50: '#f5fbff',
          300: '#7dd3fc',
          500: '#00aaff',
          700: '#0077cc',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    
  ],
}
