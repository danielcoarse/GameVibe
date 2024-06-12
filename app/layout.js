import { Poppins } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: {
    template: '%s | GameVibe',
    default: 'GameVibe',
  },
  description: 'Discover the best games to meet your expectations',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='sunset'>
      <body className={poppins.className}>
        <NextTopLoader color='#dc2626' showSpinner={false} />
        <Header />
        <main className='min-h-calc max-w-4xl mx-auto px-3 pt-8 pb-20'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
