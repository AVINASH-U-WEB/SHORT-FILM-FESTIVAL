import AcceptTermsCard from '../components/AcceptTermsCard';

// Import your new background image
import backgroundImage from '../components/assest/b.png';

export default function TermsPage() {
  return (
    // Use a relative container to position the background and content layers
    <main className="relative min-h-screen flex items-center justify-center p-4">
      
      {/* Layer 1: Background Image */}
      {/* Positioned absolutely to fill the entire screen, behind everything else (z-0) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Layer 2: Light Overlay */}
      {/* Positioned absolutely on top of the background but behind the content (z-10) */}
      <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-sm"></div>

      {/* Layer 3: Content */}
      {/* Positioned relatively on top of all other layers (z-20) */}
      <div className="relative z-20 w-full max-w-4xl">
        <AcceptTermsCard />
      </div>
    </main>
  );
}