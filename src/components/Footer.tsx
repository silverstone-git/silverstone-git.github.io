
import EarthSurface from '../assets/earth.png';


export function Footer() {
  return (
    <footer className="relative min-h-[150vh] flex items-center justify-center overflow-hidden">
      {/* Atmosphere gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-sky-700/80 to-sky-400" 
        style={{ zIndex: 1 }} 
      />
      
      {/* Earth - half sphere from bottom */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ 
          bottom: '-15vw',
          width: '50vw',
          zIndex: 2,
        }}
      >
        <img
          src={EarthSurface}
          alt="Earth"
          className="w-full h-auto opacity-90 drop-shadow-[0_0_3rem_rgba(100,150,255,0.5)]"
        />
      </div>

      {/* Footer content */}
      <div className="relative z-10 w-full px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-3xl md:text-4xl text-white mb-6 drop-shadow-lg">
            Back on Earth, Ready to Build the Future
          </p>
          <p className="text-lg text-gray-200 mb-12 drop-shadow-md">
            From the vastness of space to the innovations on our planet, the journey continues.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center text-gray-300 mb-8 drop-shadow-md">
            <span>New Delhi, India</span>
            <span>•</span>
            <span>+91 9971504957</span>
            <span>•</span>
            <a href="mailto:iam@aryan.cfd" className="hover:text-white transition-colors">
              iam@aryan.cfd
            </a>
          </div>
          
          <p className="text-sm text-gray-400 drop-shadow-md">
            © 2025 Aryan Sidhwani. Built with React, Tailwind, and cosmic inspiration.
          </p>
        </div>
      </div>
    </footer>
  );
}
