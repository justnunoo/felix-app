import HeroSection from '@/components/HeroSection';
import RegistrationForm from '@/components/RegistrationForm';
import MissionVisionSection from '@/components/Section';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      <MissionVisionSection />

      {/* Registration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-md mx-auto p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Join our mailing list to receive updates about our launch and exclusive offers.
          </p>
          <Link href="/register" className="block w-full text-center bg-indigo-700 text-white font-semibold rounded-lg py-2">
            Register Now
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-50 text-center text-sm text-gray-500">
        &copy; 2023 IntoWine Consult. All rights reserved.
        <br />
        Contact us:{' '}
        <a href="mailto:info@intowineconsult.com" className="text-indigo-600 hover:underline">
          info@intowineconsult.com
        </a>
      </footer>
    </div>
  );
}