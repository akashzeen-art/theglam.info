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
                ہمارے <span className="text-purple-500">بارے میں</span>
              </h1>
              <p className="text-2xl text-white/90 font-semibold">
                TheGlam میں خوش آمدید – آپ کی ڈیجیٹل دنیا جامع فلاح و بہبود کے لیے
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12 space-y-6 animate-fade-in">
              <p className="text-lg text-white/90 leading-relaxed">
                TheGlam میں ہمارا یقین ہے کہ فلاح و بہبود ہر ایک کے لیے قابلِ رسائی، لچک دار اور بااختیار بنانے والی ہونی چاہیے۔ اسی لیے ہم نے ایک جدید ویڈیو آن ڈیمانڈ (VOD) پلیٹ فارم تیار کیا ہے جو جامع ویلنَس کے فائدے براہِ راست آپ کی اسکرین تک لاتا ہے — جب چاہیں، جہاں چاہیں۔
              </p>

              <p className="text-lg text-white/90 leading-relaxed">
                ہمارا پلیٹ فارم تجربہ کار انسٹرکٹرز کی رہنمائی میں تیار کردہ اعلیٰ معیار کی ویلنَس ویڈیوز کا منتخب ذخیرہ پیش کرتا ہے، جو آپ کی جسمانی صحت، ذہنی وضاحت اور اندرونی سکون کو بہتر بنانے پر مرکوز ہیں۔ چاہے آپ اپنی ویلنَس جرنی ابھی شروع کر رہے ہوں یا ایک ایڈوانس پریکٹیشنر ہوں، ہماری متنوع ویڈیو لائبریری آپ کو اپنی رفتار سے مستقل مزاج رہنے میں مدد دیتی ہے۔
              </p>

              <p className="text-lg text-white/90 leading-relaxed">
                بطور VOD (ویڈیو آن ڈیمانڈ) ویلنَس سبسکرپشن سروس، TheGlam روایتی فلاحی طریقوں اور آج کے ڈیجیٹل لائف اسٹائل کے تقاضوں کے درمیان پُل کا کام کرتا ہے۔ اب نہ طے شدہ ٹائم ٹیبلز کی فکر، نہ ہی بھرے ہوئے اسٹوڈیوز — بس خالص، بلا تعطل ویلنَس کنٹینٹ جب بھی آپ کو ضرورت ہو۔
              </p>

              <div className="bg-purple-500/20 rounded-xl p-6 my-8 border border-purple-400/30">
                <h2 className="text-2xl font-bold text-white mb-4">ہماری مشن</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  ہر ایک کے لیے ویلنَس کو روزمرہ کی عادت بنانا، سستا، ماہرین کی رہنمائی میں اور صحت پر مرکوز ایسا کنٹینٹ فراہم کر کے جو آپ کے جسم، ذہن اور روح کو پروان چڑھائے۔
                </p>
              </div>

              <p className="text-xl text-white font-semibold text-center pt-4">
                آج ہی TheGlam موومنٹ میں شامل ہوں — اور آئیں مل کر بدلیں، آگے بڑھیں اور ساتھ ساتھ ترقی کریں۔
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
                {[
                { icon: <Video className="w-8 h-8" />, title: "VOD پلیٹ فارم", desc: "کبھی بھی دیکھیں" },
                { icon: <Users className="w-8 h-8" />, title: "ماہر انسٹرکٹرز", desc: "سرٹیفائیڈ ٹیچرز" },
                { icon: <Clock className="w-8 h-8" />, title: "لچک دار شیڈول", desc: "اپنی رفتار سے" },
                { icon: <Heart className="w-8 h-8" />, title: "جامع ویلنَس", desc: "جسم اور ذہن" },
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
            <p className="mb-2">&copy; 2025، nServe Technology LLC جملہ حقوق محفوظ ہیں</p>
            <div className="flex gap-2 justify-center">
              <Link to="/terms" className="hover:text-white/80">سروس کی شرائط</Link>
              <span>|</span>
              <Link to="/refund" className="hover:text-white/80">ریفنڈ پالیسی</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-white/80">پرائیویسی پالیسی</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
