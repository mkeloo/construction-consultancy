import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mark W. Keels P.E. Construction LLC ',
  description: 'Construction Design & Engineering Consultancy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Temporary go back Home button */}
        <div className="w-full h-[100vh] flex justify-center items-center">
          <Button className="m-4 active:scale-95 transition duration-100">
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </body>
    </html>
  );
}
