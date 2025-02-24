import bgImage from '../Assets/background.svg';

export default function Dashboard() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Enables the parallax effect
      }}
    >
      {/* Content inside the parallax section */}
      <div className="h-screen flex items-center justify-center text-black text-4xl font-bold ">
        Welcome to My Website
      </div>

      {/* Scrollable Content */}
      <div className="h-screen flex items-center justify-center text-3xl">
        <p>Scroll Down to See the Effect</p>
      </div>

      <div className="h-screen flex items-center justify-center text-3xl">
        <p>More Content...</p>
      </div>
    </div>
  );
}

