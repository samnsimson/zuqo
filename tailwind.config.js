/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const darkMode = ['class']
export const content = ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}']
export const theme = {
    container: {
        center: true,
        padding: '2rem',
        screens: {
            '2xl': '1400px',
        },
    },
    extend: {
        colors: {
            'color-primary': {
                DEFAULT: 'var(--color-primary)',
                foreground: 'var(--color-primary-foreground)',
            },
            'color-secondary': {
                DEFAULT: 'var(--color-secondary)',
                foreground: 'var(--color-secondary-foreground)',
            },
            'color-swatch-blue': {
                DEFAULT: 'var(--color-swatch-blue)',
                foreground: 'var(--color-swatch-blue-foreground)',
            },
            'color-swatch-green': {
                DEFAULT: 'var(--color-swatch-green)',
                foreground: 'var(--color-swatch-green-foreground)',
            },
            'color-swatch-violet': {
                DEFAULT: 'var(--color-swatch-violet)',
                foreground: 'var(--color-swatch-violet-foreground)',
            },
            'color-swatch-brown': {
                DEFAULT: 'var(--color-swatch-brown)',
                foreground: 'var(--color-swatch-brown-foreground)',
            },
            'color-swatch-teal': {
                DEFAULT: 'var(--color-swatch-teal)',
                foreground: 'var(--color-swatch-teal-foreground)',
            },
            'color-swatch-blue-light': {
                DEFAULT: 'var(--color-swatch-blue-light)',
                foreground: 'var(--color-swatch-blue-light-foreground)',
            },
            'color-swatch-green-light': {
                DEFAULT: 'var(--color-swatch-green-light)',
                foreground: 'var(--color-swatch-green-light-foreground)',
            },
            'color-swatch-violet-light': {
                DEFAULT: 'var(--color-swatch-violet-light)',
                foreground: 'var(--color-swatch-violet-light-foreground)',
            },
            'color-swatch-brown-light': {
                DEFAULT: 'var(--color-swatch-brown-light)',
                foreground: 'var(--color-swatch-brown-light-foreground)',
            },
            'color-swatch-teal-light': {
                DEFAULT: 'var(--color-swatch-teal-light)',
                foreground: 'var(--color-swatch-teal-light-foreground)',
            },
            'color-swatch-blue-dark': {
                DEFAULT: 'var(--color-swatch-blue-dark)',
                foreground: 'var(--color-swatch-blue-dark-foreground)',
            },
            'color-swatch-green-dark': {
                DEFAULT: 'var(--color-swatch-green-dark)',
                foreground: 'var(--color-swatch-green-dark-foreground)',
            },
            'color-swatch-violet-dark': {
                DEFAULT: 'var(--color-swatch-violet-dark)',
                foreground: 'var(--color-swatch-violet-dark-foreground)',
            },
            'color-swatch-brown-dark': {
                DEFAULT: 'var(--color-swatch-brown-dark)',
                foreground: 'var(--color-swatch-brown-dark-foreground)',
            },
            'color-swatch-teal-dark': {
                DEFAULT: 'var(--color-swatch-teal-dark)',
                foreground: 'var(--color-swatch-teal-dark-foreground)',
            },
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
                DEFAULT: 'hsl(var(--primary))',
                foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
                DEFAULT: 'hsl(var(--popover))',
                foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))',
            },
        },
        borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
            'accordion-down': {
                from: { height: 0 },
                to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: 0 },
            },
        },
        animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
        },
        backgroundImage: {
            loginGradient: 'url(/loginGradient.png)',
            loginMask: 'url(/mask-group.png)',
            heroVideoImage: 'url(/hero-video-image.png)',
            banner: 'url(/bg-banner.png)',
        },
        fontFamily: {
            jakarta: ['Plus Jakarta Sans', ..._fontFamily.sans],
            inter: ['Inter', ..._fontFamily.serif],
        },
    },
}
export const plugins = [require('tailwindcss-animate'), require('@tailwindcss/typography')]
