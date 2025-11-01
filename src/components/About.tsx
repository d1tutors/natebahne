"use client";

export default function About() {
  return (
    <section className="py-24 md:py-36" style={{ backgroundColor: 'var(--tan)', color: 'var(--dark-green)' }}>
      <div className="mx-auto max-w-[96vw] px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8">About</h2>
          <div className="space-y-6 text-lg leading-relaxed opacity-90">
            <p>
              I'm a high school engineer, computer scientist, and business owner who loves turning ideas into real, working projects. 
              From building Mac apps and experimenting with AI to designing custom hardware and automation tools, 
              I’m driven by the challenge of creating something new from scratch.
            </p>
            <p>
              My work blends creativity with engineering — combining code, design, and problem-solving to build tools, 
              experiments, and experiences that push ideas further every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


