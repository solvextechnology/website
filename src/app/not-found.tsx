import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full"></div>
        <h1 className="relative text-[10rem] font-extrabold text-gradient leading-none">404</h1>
      </div>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-foreground/70 text-lg max-w-md mb-10">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors shadow-[0_0_20px_var(--primary-glow)]">
          Go Back Home
        </Link>
        <Link href="/contact" className="px-8 py-4 glass-card rounded-full font-bold hover:bg-card transition-colors border border-card-border">
          Contact Support
        </Link>
      </div>
    </div>
  );
}
