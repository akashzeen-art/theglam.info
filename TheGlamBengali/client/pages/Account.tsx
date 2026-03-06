import { useState } from "react";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import SubscriptionModal from "@/components/SubscriptionModal";
import PlanModal from "@/components/PlanModal";
import { User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export default function Account() {
  const [subscriptionModal, setSubscriptionModal] = useState(false);
  const [planModal, setPlanModal] = useState({ isOpen: false, mobile: "" });

  const handleSignIn = () => {
    setSubscriptionModal(true);
  };

  const handleSubscription = (mobile: string) => {
    setSubscriptionModal(false);
    setPlanModal({ isOpen: true, mobile });
  };

  const handlePlanSelection = (plan: string) => {
    console.log("Selected plan:", plan, "Mobile:", planModal.mobile);
    setPlanModal({ isOpen: false, mobile: "" });
    // Redirect or show success message
  };
  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />
      <SubscriptionModal 
        isOpen={subscriptionModal} 
        onClose={() => setSubscriptionModal(false)} 
        onSubmit={handleSubscription} 
      />
      <PlanModal
        isOpen={planModal.isOpen}
        onClose={() => setPlanModal({ isOpen: false, mobile: "" })}
        onSubmit={handlePlanSelection}
        mobile={planModal.mobile}
        email=""
        name="olivemint"
        txnid=""
      />

      <div className="relative z-20">
        <Navbar />

        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                My <span className="text-purple-500">Account</span>
              </h1>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12 space-y-6 animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <User className="w-12 h-12 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Dashboard</h2>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-xl text-white/90 mb-6">Mobile number not found.</p>
                
                <button 
                  onClick={handleSignIn}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                >
                  <LogIn className="w-5 h-5" />
                  Sign In
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/70 text-center">
                  Don't have an account? Sign in to access your dashboard and manage your subscription.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/20 bg-white/10 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white text-sm">
            <p className="mb-2">&copy; 2025, nServe Technology LLC All Rights Reserved</p>
            <div className="flex gap-2 justify-center">
              <Link to="/terms" className="hover:text-white/80">Terms of Services</Link>
              <span>|</span>
              <Link to="/refund" className="hover:text-white/80">Refund Policy</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-white/80">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
