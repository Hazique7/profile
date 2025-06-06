// app/layout.js
import './globals.css';
import { Inter, Akatab } from 'next/font/google';

// Load Inter and Akatab fonts with appropriate weights
const inter = Inter({ subsets: ['latin'] });
const akatab = Akatab({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Hazique Ahmed Khan - Portfolio',
  description:
    'Portfolio of Hazique Ahmed Khan, a Front-End Developer, UI/UX Designer, and Writer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${akatab.className}`}>
        {children}
      </body>
    </html>
  );
}


