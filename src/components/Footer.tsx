"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t footer-border" style={{ backgroundColor: 'var(--tan)', color: 'var(--dark-green)' }}>
      <div className="mx-auto max-w-[96vw] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hey@natebahne.me" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:opacity-70 transition-opacity"
            data-cursor-contact
          >
            hey@natebahne.me
          </a>
        </div>
      </div>
    </footer>
  );
}

