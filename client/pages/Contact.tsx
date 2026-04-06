import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />

      <div className="relative z-20">
        <Navbar />

        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                Contact <span className="text-purple-500">Us</span>
              </h1>
              <p className="text-xl text-white/90">
                We'd love to hear from you. Feel free to reach out!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-8">nServe Technology LLC</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                    <p className="text-white/80 text-lg">
                      FDRK 0460, Compass Building, Al Sohada Road, Al Hamara Industrial Zone FZ, Ras Al Khaimah, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <a href="tel:+919667687077" className="text-white/80 text-lg hover:text-purple-400 transition-colors">
                      +91 9667687077
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <a href="mailto:info@nservetechnology.com" className="text-white/80 text-lg hover:text-purple-400 transition-colors">
                      info@nservetechnology.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/20 bg-white/10 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white text-sm">
            <p className="mb-2">&copy; 2025, nServe Technology LLC All Rights Reserved</p>
            <div className="flex flex-wrap gap-2 justify-center items-center">
              <Link to="/terms" className="hover:text-white/80">Terms of Services</Link>
              <span>|</span>
              <Link to="/refund" className="hover:text-white/80">Refund Policy</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-white/80">Privacy Policy</Link>
              <span>|</span>
              <Link to="/complaint-content-renewal-policy" className="hover:text-white/80">Complaint Content Renewal Policy</Link>
              <span>|</span>
              <Link to="/parental-controls" className="hover:text-white/80">Parental Controls</Link>
              <span>|</span>
              <Link to="/cookie-policy" className="hover:text-white/80">Cookie Policy</Link>
              <span>|</span>
              <Link to="/dmca-policy" className="hover:text-white/80">DMCA Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
