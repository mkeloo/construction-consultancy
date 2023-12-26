import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
// import Button from '@/components/ui/button';

// import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2 ">
        <h1 className="text-2xl font-semibold m-8 ">
          <Logo />
        </h1>
        <div className="flex items-center ">
          <Navbar />
        </div>
        {/* <div className="flex justify-center p-6">
          <Button className="w-full" variant="primary" size="lg">
            <Link href="/contact-us" legacyBehavior passHref>
              Contact Us
            </Link>
          </Button>
        </div> */}
      </nav>
    </main>
  );
}
