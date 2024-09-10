import { source } from 'framer-motion/client';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.aceternity.com'],
      },
      fonts : {
        source : ["./src/app/fonts/noornastaleeq-font.ttf","./src/app/fonts/GeistMonoVF.woff","./src/app/fonts/GeistVF.woff"]
      }
};

export default nextConfig;
