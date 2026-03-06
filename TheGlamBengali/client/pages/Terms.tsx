import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />
      
      <div className="relative z-20">
        <Navbar />
        
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">টার্মস অ্যান্ড কন্ডিশনস</h1>
            <p className="text-sm mb-8">সর্বশেষ আপডেট: 30-06-2025</p>
            
            <div className="space-y-6 text-sm leading-relaxed">
              <p>nServe Technology LLC Private Limited-এ, যা https://theglam.world/ থেকে অ্যাক্সেসযোগ্য, আমাদের প্রধান অগ্রাধিকারগুলোর একটি হলো আমাদের ভিজিটরদের প্রাইভেসি রক্ষা করা। এই ডকুমেন্টে উল্লেখ আছে, https://theglam.world/ কী ধরনের তথ্য সংগ্রহ ও সংরক্ষণ করে এবং আমরা সেই তথ্য কীভাবে ব্যবহার করি।</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">সম্মতি (Consent)</h2>
              <p>আমাদের ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি আমাদের প্রাইভেসি পলিসিতে সম্মতি প্রদান করছেন এবং এর সকল শর্ত মেনে নিচ্ছেন।</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and marketing purposes</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">GDPR Data Protection Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access – You have the right to request copies of your personal data</li>
                <li>The right to rectification – You have the right to request correction of inaccurate information</li>
                <li>The right to erasure – You have the right to request erasure of your personal data</li>
                <li>The right to restrict processing – You have the right to request restricted processing</li>
                <li>The right to data portability – You have the right to request data transfer</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Terms and Conditions</h2>
              <p>The Platform is owned by nServe Technology LLC Private Limited, a company incorporated under the Companies Act, 1956. Your use of the Platform and services are governed by these Terms of Use.</p>
              
              <p className="mt-4">All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of the United Arab Emirates and shall be governed by the laws of the United Arab Emirates.</p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <Link to="/" className="text-purple-400 hover:text-purple-300">← Back to Home</Link>
            </div>
          </div>
        </div>
        
        <footer className="border-t border-white/20 bg-white/10 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white text-sm">
            <p className="mb-2">&copy; 2025, nServe Technology LLC সর্বস্বত্ব সংরক্ষিত</p>
            <div className="flex gap-2 justify-center">
              <Link to="/terms" className="hover:text-white/80">টার্মস অফ সার্ভিস</Link>
              <span>|</span>
              <Link to="/refund" className="hover:text-white/80">রিফান্ড পলিসি</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-white/80">প্রাইভেসি পলিসি</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
