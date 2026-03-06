import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";

export default function Refund() {
  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />
      
      <div className="relative z-20">
        <Navbar />
        
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">রিফান্ড পলিসি</h1>
            <p className="text-sm mb-8">সর্বশেষ আপডেট: 09-07-2025</p>
            
            <div className="space-y-6 text-sm leading-relaxed">
              <p>nServe Technology LLC-এর সার্ভিসে সাবস্ক্রাইব করার জন্য আপনাকে ধন্যবাদ। আমরা আশা করি আপনি আমাদের সার্ভিসে সন্তুষ্ট থাকবেন, তবে যদি কোনো কারণে সন্তুষ্ট না হন, তাহলে আমরা সাহায্যের জন্য সবসময় প্রস্তুত।</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. ফ্রি ট্রায়াল</h2>
              <p>nServe Technology LLC নতুন ব্যবহারকারীদের জন্য সাবস্ক্রিপশন কেনার আগে সার্ভিস এক্সপেরিয়েন্স করার কোনো ফ্রি ট্রায়াল প্রদান করে না।</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. ক্যানসেলেশন পলিসি</h2>
              <p>সাবস্ক্রাইবাররা যেকোনো সময় তাদের রিকারিং সাবস্ক্রিপশন ক্যানসেল করতে পারেন। ক্যানসেল করার পরও আপনার একাউন্ট চলমান বিলিং সাইকেল শেষ হওয়া পর্যন্ত সক্রিয় থাকবে।</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. রিফান্ড পাওয়ার যোগ্যতা</h2>
              <p>রিফান্ডের জন্য যোগ্য হতে হলে, সাবস্ক্রিপশন শুরুর তারিখ থেকে ২ দিনের মধ্যে আপনাকে রিফান্ড রিকোয়েস্ট জমা দিতে হবে। প্রতিটি রিফান্ড রিকোয়েস্ট কেস-টু-কেস ভিত্তিতে বিবেচনা করা হবে এবং তা সম্পূর্ণভাবে nServe Technology LLC-এর সিদ্ধান্তের উপর নির্ভরশীল।</p>
              <p className="mt-4">যদি কোনো টেকনিক্যাল সমস্যার কারণে আপনি আমাদের সার্ভিস ব্যবহার করতে না পারেন এবং আমাদের সাপোর্ট টিম সেই সমস্যা সমাধান করতে ব্যর্থ হয়, তাহলে আপনি রিফান্ডের জন্য আবেদন করতে পারেন। প্রয়োজনে সমস্যার প্রমাণ চাওয়া হতে পারে।</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. রিফান্ডের জন্য কীভাবে আবেদন করবেন</h2>
              <p>রিফান্ড চাওয়ার জন্য আমাদের কাস্টমার সাপোর্ট টিমকে ইমেইল করুন: <a href="mailto:info@nservetechnology.com" className="text-purple-400 hover:text-purple-300">info@nservetechnology.com</a>। ইমেইলে আপনার একাউন্টের তথ্য, সাবস্ক্রিপশনের ডিটেলস এবং কেন রিফান্ড চাইছেন তার একটি সংক্ষিপ্ত ব্যাখ্যা লিখুন।</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. রিফান্ড প্রসেসিং</h2>
              <p>আপনার রিফান্ড রিকোয়েস্ট পাওয়ার পর এবং তা রিভিউ করার পর, রিফান্ড অনুমোদিত হয়েছে কি না সে সম্পর্কে আপনাকে ইমেইলের মাধ্যমে জানিয়ে দেওয়া হবে।</p>
              <p className="mt-4">যদি রিফান্ড অনুমোদিত হয়, তাহলে ৭ কার্যদিবসের মধ্যে আপনার যে পেমেন্ট মেথড থেকে পেমেন্ট করা হয়েছিল, সেই একই মেথডে ক্রেডিট রিফান্ড করা হবে।</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">যেসব ক্ষেত্রে সাধারণত রিফান্ড দেওয়া হতে পারে:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>টেকনিক্যাল সমস্যা:</strong> ব্যবহারকারী এমন টেকনিক্যাল সমস্যার সম্মুখীন হচ্ছেন, যার কারণে তিনি সঠিকভাবে সার্ভিস ব্যবহার করতে পারছেন না।</li>
                <li><strong>বিলিং ভুল:</strong> nServe Technology LLC-এর কোনো বিলিং ভুলের কারণে ব্যবহারকারী ভুলভাবে চার্জড হয়েছেন।</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">যেসব ক্ষেত্রে সাধারণত রিফান্ড দেওয়া হয় না:</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>মত পরিবর্তন:</strong> রিফান্ডের যোগ্যতার সময়সীমা পেরিয়ে যাওয়ার পর ব্যবহারকারী যদি শুধু মত পরিবর্তনের কারণে সার্ভিস আর ব্যবহার করতে না চান, তাহলে সাধারণত রিফান্ড দেওয়া হয় না।</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. আমাদের সাথে যোগাযোগ</h2>
              <p>আমাদের রিফান্ড পলিসি নিয়ে আপনার যদি কোনো প্রশ্ন থাকে, তাহলে আমাদের সাথে এই ইমেইলে যোগাযোগ করুন: <a href="mailto:info@nservetechnology.com" className="text-purple-400 hover:text-purple-300">info@nservetechnology.com</a>।</p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <Link to="/" className="text-purple-400 hover:text-purple-300">← Back to Home</Link>
            </div>
          </div>
        </div>
        
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
