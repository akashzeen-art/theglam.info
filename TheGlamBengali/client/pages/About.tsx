import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Heart, Users, Video, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />

      <div className="relative z-20">
        <Navbar />

        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                আমাদের <span className="text-purple-500">সম্পর্কে</span>
              </h1>
              <p className="text-2xl text-white/90 font-semibold">
                স্বাগতম TheGlam বাংলায় – আপনার ডিজিটাল হোলিস্টিক এন্টারটেইনমেন্ট গেটওয়ে
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12 space-y-6 animate-fade-in">
              <p className="text-lg text-white/90 leading-relaxed">
                TheGlam-এ আমরা বিশ্বাস করি, বিনোদন আর ওয়েলনেস দুটোই হওয়া উচিত সহজলভ্য, ফ্লেক্সিবল আর ক্ষমতায়নমূলক। তাই আমরা তৈরি করেছি একটি আধুনিক ভিডিও-অন-ডিমান্ড (VOD) প্ল্যাটফর্ম, যা আপনাকে যেকোনো সময়, যেকোনো জায়গা থেকে আপনার পছন্দের হোলিস্টিক এন্টারটেইনমেন্টের অভিজ্ঞতা দেয়।
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                আমাদের প্ল্যাটফর্মে রয়েছে অভিজ্ঞ ক্রিয়েটরদের বানানো সুচিন্তিত এবং মানসম্মত ভিডিও কনটেন্ট, যা আপনার শারীরিক আরাম, মানসিক প্রশান্তি এবং ইনার এনার্জি বাড়াতে সাহায্য করে। আপনি একেবারে নতুন হোন বা পুরোনো দর্শক, আমাদের ডাইভার্স ভিডিও লাইব্রেরি আপনাকে নিজের সময়ে, নিজের গতিতে কনটেন্ট উপভোগ করার স্বাধীনতা দেয়।
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed">
                একটি VOD সাবস্ক্রিপশন সার্ভিস হিসেবে, TheGlam বাংলা আপনাকে ট্র্যাডিশনাল এন্টারটেইনমেন্ট থেকে বের করে নিয়ে আসে স্মার্ট, ডিজিটাল লাইফস্টাইলের আরামদায়ক অভিজ্ঞতায়। এখানে নেই ফিক্সড শিডিউল বা ভিড়ভাট্টা— শুধু নিরবচ্ছিন্ন, প্রিমিয়াম দেশি কনটেন্ট, ঠিক যখন আপনি চান।
              </p>

              <div className="bg-purple-500/20 rounded-xl p-6 my-8 border border-purple-400/30">
                <h2 className="text-2xl font-bold text-white mb-4">আমাদের লক্ষ্য</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  সবার জন্য প্রতিদিনের একটি অভ্যাস হিসেবে বিনোদন ও ওয়েলনেসকে সহজ, সাশ্রয়ী এবং গাইডেডভাবে পৌঁছে দেওয়া— যাতে শরীর, মন আর আত্মা একসাথে রিফ্রেশ হয়।
                </p>
              </div>
              
              <p className="text-xl text-white font-semibold text-center pt-4">
                আজই TheGlam বাংলার সাথে যুক্ত হন — আসুন একসাথে বদলাই, এগিয়ে যাই আর নতুনভাবে উপভোগ করি।
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: <Video className="w-8 h-8" />, title: "VOD প্ল্যাটফর্ম", desc: "যখন খুশি দেখুন" },
                { icon: <Users className="w-8 h-8" />, title: "এক্সপার্ট ক্রিয়েটর", desc: "অভিজ্ঞ কনটেন্ট মেকার" },
                { icon: <Clock className="w-8 h-8" />, title: "ফ্লেক্সিবল শিডিউল", desc: "আপনার নিজের গতিতে" },
                { icon: <Heart className="w-8 h-8" />, title: "হোলিস্টিক ওয়েলনেস", desc: "শরীর ও মনের যত্ন" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 text-center animate-bounce-in hover:bg-white/15 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="text-purple-400 flex justify-center mb-3">{feature.icon}</div>
                  <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.desc}</p>
                </div>
              ))}
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
