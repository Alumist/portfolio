import type { Metadata } from 'next';
import './globals.css';
import Projects from './components/Projects';
import About from './components/About';

export const metadata: Metadata = {
  title: 'Nicholas Quiroz',
  description: 'Portfolio by Nicholas Quiroz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-black layout-container'>
        <main className='main-content'>
          {children}
        </main>
        <section className='projects-section'>
          <Projects />
        </section>
        <section>
          <About />
        </section>
      </body>
    </html>
  );
}
