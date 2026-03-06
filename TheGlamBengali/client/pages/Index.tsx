import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import VideoModal from "@/components/VideoModal";
import SubscriptionModal from "@/components/SubscriptionModal";
import PlanModal from "@/components/PlanModal";
import Carousel from "@/components/Carousel";
import { GraduationCap, Clock, Users, Star, ArrowRight, Leaf, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { videoUrls } from "@/data/videoUrls";

export default function Index() {
  const [showParticles, setShowParticles] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const [subscriptionModal, setSubscriptionModal] = useState({ isOpen: false, url: "", title: "" });
  const [planModal, setPlanModal] = useState({ isOpen: false, mobile: "" });
  const [pendingVideo, setPendingVideo] = useState<{ url: string; title: string } | null>(null);
  const [soloSlideIndex, setSoloSlideIndex] = useState(0);

  const openVideo = (url: string, title: string) => {
    const hasSubscribed = localStorage.getItem("TheGlam_subscribed");
    if (hasSubscribed) {
      setSelectedVideo({ url, title });
    } else {
      console.log('Opening video with URL:', url, 'Title:', title);
      setPendingVideo({ url, title });
      setSubscriptionModal({ isOpen: true, url, title });
    }
  };

  const handleSubscription = (mobile: string) => {
    console.log('Subscription submitted, pending video:', pendingVideo);
    setSubscriptionModal({ isOpen: false, url: "", title: "" });
    setPlanModal({ isOpen: true, mobile });
  };

  const handlePlanSelection = (plan: string) => {
    console.log("Selected plan:", plan, "Mobile:", planModal.mobile, "Pending video:", pendingVideo);
    localStorage.setItem("TheGlam_subscribed", "true");
    setPlanModal({ isOpen: false, mobile: "" });
    if (pendingVideo) {
      setSelectedVideo(pendingVideo);
      setPendingVideo(null);
    }
  };

  useEffect(() => {
    const hasSeenPreloader = localStorage.getItem("TheGlam_preloader_shown");
    if (hasSeenPreloader) {
      setShowParticles(true);
    } else {
      const timer = setTimeout(() => {
        setShowParticles(true);
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, []);

  const featuredClasses = [
    {
      id: 1,
      name: "আস্থা",
      time: "35 মিনিট",
      image: "/LANDSCAPE/aastha.png",
      description: "দেশি রোমান্সের নেশা, ভরপুর প্যাশন আর ভালোবাসা",
      videoUrl: "https://vz-66b329af-17e.b-cdn.net/df51e289-de98-44b6-8916-46bb9ab37fb8/play_480p.mp4",
    },
    {
      id: 2,
      name: "আদাবত",
      time: "25 মিনিট",
      image: "/LANDSCAPE/adavat.png",
      description: "দুশমনি থেকে ভালোবাসার সফর, বোল্ড আর ইন্টেন্স গল্প",
      videoUrl: "https://vz-66b329af-17e.b-cdn.net/50b7d265-485d-4f58-995f-dcddf83176af/play_480p.mp4",
    },
    {
      id: 3,
      name: "বেস্ট পারফরমেন্স পর্ব ১",
      time: "30 মিনিট",
      image: "/LANDSCAPE/best performance ep1.png",
      description: "সবচেয়ে বেস্ট পারফরমেন্স, দেশি তড়কা আর বোল্ড সিনে ভরপুর",
      videoUrl: "https://vz-66b329af-17e.b-cdn.net/3400d90e-7902-460c-ba28-62b3473fd21a/play_480p.mp4",
    },
    {
      id: 4,
      name: "বেস্ট পারফরমেন্স পর্ব ২",
      time: "28 মিনিট",
      image: "/LANDSCAPE/best performance ep2.png",
      description: "আরও বেশি বোল্ড আর সেক্সি, অবশ্যই দেখার মতো এপিসোড",
      videoUrl: "https://vz-66b329af-17e.b-cdn.net/45e25b47-cd65-43ca-b42b-b4fc6615139a/play_480p.mp4",
    },
  ];

  const stats = [
    { number: "50K+", label: "ভিডিও", icon: <GraduationCap className="w-6 h-6" /> },
    { number: "100K+", label: "দর্শক", icon: <Users className="w-6 h-6" /> },
    { number: "4.9★", label: "গড় রেটিং", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "কমিউনিটি সাপোর্ট", icon: <Flame className="w-6 h-6" /> },
  ];

  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || ""}
      />
      <SubscriptionModal 
        isOpen={subscriptionModal.isOpen} 
        onClose={() => setSubscriptionModal({ isOpen: false, url: "", title: "" })} 
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

        {/* Hero Section */}
        <section className="relative min-h-[80vh] pt-[30rem] pb-24 px-4 sm:px-6 lg:px-8 flex items-end justify-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid gap-12 items-center justify-items-center">
              {/* Content */}
              <div className="animate-slide-up text-center">
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl mx-auto">
                  স্বাগতম
                  <span className="text-purple-500"> TheGlam বাংলা</span>
                </h1>
                <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                  প্রিমিয়াম দেশি এন্টারটেইনমেন্টের আসল মজা নিন। এক্সক্লুসিভ বোল্ড কনটেন্ট দেখুন, জমজমাট গল্পে ডুবে যান, আর আনলিমিটেড স্ট্রিমিং উপভোগ করুন।
                </p>
              </div>

              {/* Hero Image */}
            </div>
          </div>
        </section>

        {/* Featured Classes Section */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                ফিচার্ড <span className="text-purple-500">বোল্ড ভিডিও</span>
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                সবচেয়ে বোল্ড আর এক্সাইটিং দেশি কনটেন্ট, আপনার জন্য স্পেশালি সিলেক্টেড
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredClasses.map((yogaClass, index) => (
                <div
                  key={yogaClass.id}
                  onClick={() => openVideo(yogaClass.videoUrl, yogaClass.name)}
                  className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md overflow-hidden group cursor-pointer animate-bounce-in hover:border-white/40 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={yogaClass.image} alt={yogaClass.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-yoga-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2">{yogaClass.name}</h3>
                    <p className="text-sm text-white/80 mb-4">{yogaClass.description}</p>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{yogaClass.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Videos Carousel */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6">
              সব <span className="text-purple-500">দেশি ভিডিও</span>
            </h2>
            <Carousel slidesToShow={3}>
              {videoUrls.slice(0, 20).map((video) => (
                <div key={video.id} className="group cursor-pointer transform transition-all duration-300 hover:scale-105" onClick={() => openVideo(video.videoUrl, video.name)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={video.image} alt={video.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yoga-brown ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-sm text-white">{video.name}</h3>
                    <p className="text-xs text-white/80">{video.time}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Popular Desi Shows */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
              জনপ্রিয় দেশি <span className="text-purple-500">বোল্ড শো</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6">
              {[
                { id: 1, title: "ফরবিডেন লাভ", time: "০০:৩৪ মিনিট", img: "forbidden love.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/3ac6107e-7f6a-4745-be24-b04c0625472b/play_480p.mp4" },
                { id: 2, title: "গাঙ্গুবাই কাজওয়ালি", time: "০০:৪১ মিনিট", img: "gangubai kaamwali.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/9fa5170d-1a9c-468d-a2e6-7f0caed03211/play_480p.mp4" },
                { id: 3, title: "হ্যাপি শর্টস", time: "০০:৪২ মিনিট", img: "happy shorts.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/20b53b00-0426-48df-8d70-d52eb14dd83a/play_480p.mp4" },
                { id: 4, title: "হার স্টোরি", time: "০০:৩৩ মিনিট", img: "her story.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/f07a8ec2-84cd-48d9-bd0f-c1cf9781f353/play_480p.mp4" },
                { id: 5, title: "হাইওয়ে ৬৯", time: "০০:৪০ মিনিট", img: "highway 69.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/5fed72b5-d5a1-4e1b-a7de-a2c7e8ec3caf/play_480p.mp4" },
                { id: 6, title: "হট এয়ার হস্টেজ পর্ব ১", time: "০০:৩৪ মিনিট", img: "hot air hostahe ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/8b15894c-977a-4502-842f-b57de8c5fda6/play_480p.mp4" },
                { id: 7, title: "হট এয়ার হস্টেজ পর্ব ২", time: "০০:৩৮ মিনিট", img: "hot air hostahe ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/5165c856-ab73-4468-97ef-5a70980ea288/play_480p.mp4" },
                { id: 8, title: "হট এয়ার হস্টেজ পর্ব ৩", time: "০০:৩৫ মিনিট", img: "hot air hostahe ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/9a006cb7-17f2-4894-bdcc-a0a57faf8f25/play_480p.mp4" },
                { id: 9, title: "হট কফি পর্ব ১", time: "০০:৩৭ মিনিট", img: "hot coffie ep 1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/9c5e598a-06bb-4b7d-89f9-cb76ec94a78b/play_480p.mp4" },
                { id: 10, title: "হট কফি পর্ব ২", time: "০০:৩৯ মিনিট", img: "hot coffie ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/ddf32747-ae8a-4437-89c9-08fdbef2f627/play_480p.mp4" },
                { id: 11, title: "হট শট", time: "০০:৩৬ মিনিট", img: "hot shot .png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/ebbf3364-1d25-4454-8e8a-0aa166f31dd7/play_480p.mp4" },
                { id: 12, title: "জাল", time: "০০:৪১ মিনিট", img: "jaal.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/23e20e42-71bf-4d34-bb2b-638a6e00d126/play_480p.mp4" },
                { id: 13, title: "কামা রসম", time: "০০:৪৩ মিনিট", img: "kama rasam .png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/25199036-86e4-4231-9e7e-529f90ac0e48/play_480p.mp4" },
                { id: 14, title: "কামিনী পর্ব ১", time: "০০:৩৮ মিনিট", img: "kamini ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/66392db7-c400-447d-afd8-ffce12d5e2cf/play_480p.mp4" },
              ].map((video, index) => (
                <div key={video.id} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 50}ms` }} onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/POTRAIT/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yoga-brown ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-white/80">{video.time}, দেশি কনটেন্ট</p>
                    <h3 className="font-bold text-sm text-white">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solo Episodes */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6">
              সোলো এপিসোড <span className="text-purple-500">এখনই দেখুন!</span>
            </h2>
            <div className="relative group">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300 ease-out gap-4" style={{ transform: `translateX(-${soloSlideIndex * 100}%)` }}>
                  {[
                    { id: 1, title: "কামিনী পর্ব ২", time: "০০:৩৩ মিনিট", img: "kamini ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/a045b5c9-8853-40e7-8edf-d46e955952ee/play_480p.mp4" },
                    { id: 2, title: "কামিনী পর্ব ৩", time: "০০:৩৬ মিনিট", img: "kamini ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/b7d1489a-ea57-4d4a-b34e-802138f49aa9/play_480p.mp4" },
                    { id: 3, title: "কিল ফর লাভ পর্ব ১", time: "০০:৩৪ মিনিট", img: "kill for love ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/fc3fa1ee-865e-46e9-ba57-5296bd3951db/play_480p.mp4" },
                    { id: 4, title: "কিল ফর লাভ পর্ব ২", time: "০০:৪০ মিনিট", img: "kill for love ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/4c6b6133-f1da-4515-9878-66d95941438d/play_480p.mp4" },
                    { id: 5, title: "কিল ফর লাভ পর্ব ৩", time: "০০:৩৪ মিনিট", img: "kill for love ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/7378b409-a38d-4bb9-8731-6da2c43691e7/play_480p.mp4" },
                    { id: 6, title: "কিল ফর লাভ পর্ব ৪", time: "০০:৪১ মিনিট", img: "kill for love ep4.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/affa862c-e511-4eff-aff3-56810d713399/play_480p.mp4" },
                    { id: 7, title: "কিলার ওয়ার্কআউট", time: "০০:৪২ মিনিট", img: "killer workout.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/efaf0c08-eb70-41df-bfc4-72092aeb3c83/play_480p.mp4" },
                  ].map((video) => (
                    <div key={video.id} className="flex-shrink-0 w-full sm:w-1/3 md:w-1/5">
                      <div className="group cursor-pointer px-2" onClick={() => openVideo(video.videoUrl, video.title)}>
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 max-w-[150px] mx-auto">
                          <img src={`/POTRAIT/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-yoga-brown ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 max-w-[150px] mx-auto">
                          <p className="text-xs text-white/80">{video.time}, দেশি কনটেন্ট</p>
                          <h3 className="font-bold text-xs text-white">{video.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSoloSlideIndex(Math.max(0, soloSlideIndex - 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white text-yoga-brown rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10 disabled:opacity-30"
                disabled={soloSlideIndex === 0}
                aria-label="Previous"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => setSoloSlideIndex(Math.min(6, soloSlideIndex + 1))}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white text-yoga-brown rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10 disabled:opacity-30"
                disabled={soloSlideIndex === 6}
                aria-label="Next"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Hot Desi Series */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yoga-brown/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                বোল্ড সেক্সি ডিজায়ার <span className="text-purple-500">দেশি সিরিজ</span>
              </h2>
              <p className="text-white/90 text-lg">এখনই দেখুন</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { id: 1, title: "Lady Killer", episode: "S01E01", img: "lady killer.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/3e40f71c-19f7-41d7-b95a-2e14e16dda06/play_480p.mp4" },
                { id: 2, title: "Love Detective", episode: "S01E02", img: "love detective.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/59aade45-6010-4198-877e-9a9f0a1bcbc8/play_480p.mp4" },
                { id: 3, title: "Love Lady", episode: "S01E03", img: "love lady.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/e5e3833f-b06a-4b30-adce-5af66226d947/play_480p.mp4" },
                { id: 4, title: "MMS Taxi", episode: "S01E04", img: "mms taxi.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/a79219ec-b365-455e-a844-1c3dc3b0c1f2/play_480p.mp4" },
              ].map((video, index) => (
                <div key={video.id} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 100}ms` }} onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/LANDSCAPE/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yoga-brown ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-white/80">{video.episode}</p>
                    <h3 className="font-bold text-sm text-white">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Episodes Desi Masala */}
        <section className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
                এক্সাইটিং এপিসোডস <span className="text-purple-500">দেশি মসলা</span>
              </h2>
            <Carousel slidesToShow={3}>
              {[
                { id: 1, title: "Paap EP1", time: "15 mins", img: "paap ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/66d9215c-9e6d-45c4-baf0-dde31e3d5057/play_480p.mp4" },
                { id: 2, title: "Paap EP2", time: "20 mins", img: "paap ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/c4d37df3-6da5-4145-9202-f225ed699791/play_480p.mp4" },
                { id: 3, title: "Paap EP3", time: "25 mins", img: "paap ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/fb5b01c0-9519-4f2b-ab0b-0cff13691039/play_480p.mp4" },
                { id: 4, title: "Paap EP4", time: "10 mins", img: "paap ep4.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/9f8c132f-f631-4af1-8320-23e360f33682/play_480p.mp4" },
                { id: 5, title: "Sasurji", time: "18 mins", img: "sasurji.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/c597190d-48fd-4c56-b90a-22dff40bf987/play_480p.mp4" },
                { id: 6, title: "Shikari EP1", time: "22 mins", img: "shikari ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/e5dbb886-7e2c-4ec6-9982-d75a5b6a025a/play_480p.mp4" },
                { id: 7, title: "Shikari EP2", time: "12 mins", img: "shikari ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/8d73d338-4ee5-4747-b10f-9938a581e5d5/play_480p.mp4" },
                { id: 8, title: "Shikari EP3", time: "28 mins", img: "shikari ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/7a472d63-8b87-4e74-b0f9-21821e3b8e1c/play_480p.mp4" },
              ].map((video) => (
                <div key={video.id} className="group cursor-pointer px-1" onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/LANDSCAPE/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-yoga-brown ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <h3 className="font-bold text-xs text-white truncate">{video.title}</h3>
                    <p className="text-xs text-white/80">{video.time}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Premium Desi Collection */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
                প্রিমিয়াম দেশি <span className="text-purple-500">কালেকশন</span>
              </h2>
            <Carousel slidesToShow={3}>
              {[
                { id: 1, title: "Shikari EP4", genre: "Bold Series", img: "shikari ep4.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/0ef70162-4335-41dc-95f3-b89d22724cf3/play_480p.mp4" },
                { id: 2, title: "Taak Jhaak", genre: "Hot Story", img: "taak jhaak.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/c67045d4-efb3-4977-9428-4937ef3c57ba/play_480p.mp4" },
                { id: 3, title: "Tera Nasha", genre: "Romance", img: "tera nasha.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/b8f9b36e-ab04-4d30-91da-345e6ffa02b8/play_480p.mp4" },
                { id: 4, title: "The Insult EP1", genre: "Drama", img: "the insult ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/e7f190a7-9cf9-4b89-9e87-ee618f10168a/play_480p.mp4" },
                { id: 5, title: "The Insult EP2", genre: "Drama", img: "the insult ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/3ac6107e-7f6a-4745-be24-b04c0625472b/play_480p.mp4" },
                { id: 6, title: "The Insult EP3", genre: "Drama", img: "the insult ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/e08930bc-13e0-4f73-801f-d98839dc384e/play_480p.mp4" },
                { id: 7, title: "The Insult EP4", genre: "Drama", img: "the insult ep4.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/d4e7f986-4c01-450a-8b6f-5945d13d7bad/play_480p.mp4" },
                { id: 8, title: "Trapped EP1", genre: "Thriller", img: "trapped ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/4ac6a6ae-1e67-43d6-b402-6be260b3cb3b/play_480p.mp4" },
                { id: 9, title: "Trapped EP2", genre: "Thriller", img: "trapped ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/3e40f71c-19f7-41d7-b95a-2e14e16dda06/play_480p.mp4" },
              ].map((video) => (
                <div key={video.id} className="group cursor-pointer px-1" onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/LANDSCAPE/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-yoga-brown ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <h3 className="font-bold text-xs text-white truncate">{video.title}</h3>
                    <p className="text-xs text-white/80">{video.genre}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Trending This Week */}
        <section className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
                ট্রেন্ডিং <span className="text-purple-500">এই সপ্তাহে</span>
              </h2>
            <Carousel slidesToShow={3}>
              {[
                { id: 1, title: "Kamini EP1", views: "2.5M views", img: "kamini ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/66392db7-c400-447d-afd8-ffce12d5e2cf/play_480p.mp4" },
                { id: 2, title: "Kamini EP2", views: "1.8M views", img: "kamini ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/a5c8f9d2-3e1b-4a7c-9f2d-8b6e4c1a5d3f/play_480p.mp4" },
                { id: 3, title: "Kamini EP3", views: "3.2M views", img: "kamini ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/b7d9e1f3-4c2a-5b8d-a3e4-9c7f5d2b6e4a/play_480p.mp4" },
                { id: 4, title: "Kill For Love EP1", views: "1.5M views", img: "kill for love ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/c8e1f2a4-5d3b-6c9e-b4f5-a8d6e3c7f5b2/play_480p.mp4" },
                { id: 5, title: "Kill For Love EP2", views: "2.1M views", img: "kill for love ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/d9f2e3b5-6e4c-7d1f-c5a6-b9e7f4d8a6c3/play_480p.mp4" },
                { id: 6, title: "Kill For Love EP3", views: "1.9M views", img: "kill for love ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/e1a3f4c6-7f5d-8e2a-d6b7-c1f8e5a9b7d4/play_480p.mp4" },
                { id: 7, title: "Kill For Love EP4", views: "2.7M views", img: "kill for love ep4.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/f2b4e5d7-8a6e-9f3b-e7c8-d2a9f6b1c8e5/play_480p.mp4" },
                { id: 8, title: "Killer Workout", views: "3.5M views", img: "killer workout.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/a3c5f6e8-9b7f-1d4c-f8d9-e3b1a7c2d9f6/play_480p.mp4" },
              ].map((video) => (
                <div key={video.id} className="group cursor-pointer px-1" onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/LANDSCAPE/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-yoga-brown ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1">
                    <h3 className="font-bold text-xs text-white truncate">{video.title}</h3>
                    <p className="text-xs text-white/80">{video.views}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Hollywood Series */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yoga-brown/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
              হলিউড <span className="text-purple-500">সিরিজ</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { id: 1, title: "Legend of Hell", season: "Hot & Thrilling", img: "LEGEND OF HELL.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/bb7e3b04-7aa5-40a9-88f2-d02322495d45/play_480p.mp4" },
                { id: 2, title: "Kill Her Goats", season: "Bold & Intense", img: "KILL HER GOATS.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/b8a0faee-f6e2-48d3-a6c0-d41bcd81010c/play_480p.mp4" },
                { id: 3, title: "Making Off", season: "Steamy Drama", img: "MAKING OFF.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/86b154cc-57ae-4d96-b205-12e9d4a5b5b4/play_480p.mp4" },
                { id: 4, title: "Muck Original", season: "Sensual Mystery", img: "MUCK ORIGNAL.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/b69365f5-72f5-464e-b4b6-5e23f21acb4b/play_480p.mp4" },
                { id: 5, title: "Sinners and Saints", season: "Passionate Tale", img: "of sinners and saints.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/74d4d3f5-4824-4a28-8c70-b451d3ecfef0/play_480p.mp4" },
                { id: 6, title: "The Broken Crown", season: "Seductive Story", img: "THE BROKEN CROWN.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/62b79869-36b6-4e7b-9c2f-333ec04855dd/play_480p.mp4" },
                { id: 7, title: "The Immortal Hunters", season: "Tempting Action", img: "THE IMMORTAL HUNTERS.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/072ccfb3-35ea-436b-8cb6-62d162e8b2e8/play_480p.mp4" },
                { id: 8, title: "The Glass Coffin", season: "Erotic Thriller", img: "THE GLASS COFIN.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/0fb73007-86fd-4c85-95c8-d06023c8f08f/play_480p.mp4" },
                { id: 9, title: "Ultimate Chabite", season: "Spicy Adventure", img: "ULTIMATE CHABITE.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/b28fd370-b44f-4472-b5bb-814b7aa3eb39/play_480p.mp4" },
                { id: 10, title: "Alex & Jaime", season: "Intimate Romance", img: "ALEX & JAIME.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/28bcd43f-b1f2-41b4-bc0a-791e5ee50d16/play_480p.mp4" },
              ].map((video, index) => (
                <div key={video.id} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 50}ms` }} onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/English Thumbnails/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yoga-brown ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-white/80">{video.season}</p>
                    <h3 className="font-bold text-sm text-white">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sensual Yoga Collection */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yoga-brown/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
              সেন্সুয়াল <span className="text-purple-500">কালেকশন</span>
            </h2>
            <Carousel slidesToShow={5}>
              {[
                { id: 1, title: "Flexibility Flow", duration: "25 mins", img: "1.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/9aec82c6-d6c1-4ae8-932a-6bf7b5329762/play_480p.mp4" },
                { id: 2, title: "Body Balance", duration: "30 mins", img: "2.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/a773531d-3e5f-4fb2-aef7-e1a20d7b3711/play_480p.mp4" },
                { id: 3, title: "Stretch & Tone", duration: "28 mins", img: "3.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/c80c0be0-09e2-483e-9562-17ccd2250188/play_480p.mp4" },
                { id: 4, title: "Power Poses", duration: "32 mins", img: "4.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/b8febc79-f42a-4d93-805c-d4453b1f5604/play_480p.mp4" },
                { id: 5, title: "Core Strength", duration: "27 mins", img: "5.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/225d5414-d6d3-45c5-aaed-8393c57a1f1d/play_480p.mp4" },
                { id: 6, title: "Mindful Movement", duration: "35 mins", img: "6.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/e3168147-273d-4758-ae4f-dd128e41f9c7/play_480p.mp4" },
                { id: 7, title: "Graceful Asanas", duration: "29 mins", img: "7.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/2f3a0402-035f-4935-8a64-8fc4a2e375fd/play_480p.mp4" },
                { id: 8, title: "Wellness Flow", duration: "31 mins", img: "8.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/974e3e76-5cf9-4366-bc63-3c0f9c2c3507/play_480p.mp4" },
                { id: 9, title: "Energy Boost", duration: "26 mins", img: "9.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/8ed4f9e8-dc12-4e6b-9947-3ef08d2144a4/play_480p.mp4" },
                { id: 10, title: "Zen Practice", duration: "33 mins", img: "10.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/d08297f1-59e7-4f2c-a66b-f3b5bf4a1104/play_480p.mp4" },
              ].map((video) => (
                <div key={video.id} className="group cursor-pointer px-2" onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 max-w-[150px] mx-auto">
                    <img src={`/Thumbnails/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-yoga-brown ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 max-w-[150px] mx-auto">
                    <h3 className="font-bold text-xs text-white truncate">{video.title}</h3>
                    <p className="text-xs text-white/80">{video.duration}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Desire Series */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
              ডিজায়ার <span className="text-purple-500">সিরিজ</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { id: 1, title: "Cardio Blast", duration: "30 mins", img: "th_1.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/9aec82c6-d6c1-4ae8-932a-6bf7b5329762/play_480p.mp4" },
                { id: 2, title: "Strength Training", duration: "35 mins", img: "th_2.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/a773531d-3e5f-4fb2-aef7-e1a20d7b3711/play_480p.mp4" },
                { id: 3, title: "Full Body Burn", duration: "28 mins", img: "th_3.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/c80c0be0-09e2-483e-9562-17ccd2250188/play_480p.mp4" },
                { id: 4, title: "Core Workout", duration: "25 mins", img: "th_4.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/b8febc79-f42a-4d93-805c-d4453b1f5604/play_480p.mp4" },
                { id: 5, title: "HIIT Session", duration: "32 mins", img: "th_5.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/225d5414-d6d3-45c5-aaed-8393c57a1f1d/play_480p.mp4" },
                { id: 6, title: "Toning Routine", duration: "27 mins", img: "th_6.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/e3168147-273d-4758-ae4f-dd128e41f9c7/play_480p.mp4" },
                { id: 7, title: "Endurance Build", duration: "40 mins", img: "th_7.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/2f3a0402-035f-4935-8a64-8fc4a2e375fd/play_480p.mp4" },
                { id: 8, title: "Power Training", duration: "33 mins", img: "th_8.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/974e3e76-5cf9-4366-bc63-3c0f9c2c3507/play_480p.mp4" },
                { id: 9, title: "Sculpt & Shape", duration: "29 mins", img: "th_9.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/8ed4f9e8-dc12-4e6b-9947-3ef08d2144a4/play_480p.mp4" },
                { id: 10, title: "Athletic Performance", duration: "36 mins", img: "th_10.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/d08297f1-59e7-4f2c-a66b-f3b5bf4a1104/play_480p.mp4" },
              ].map((video, index) => (
                <div key={video.id} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 50}ms` }} onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/Thumbnails/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yoga-brown ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-sm text-white">{video.title}</h3>
                    <p className="text-xs text-white/80">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Desi Shorts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
              প্রিমিয়াম <span className="text-purple-500">সেক্সি সিরিজ</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { id: 1, title: "Hot Moments", duration: "5 mins", img: "th_11.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/225d5414-d6d3-45c5-aaed-8393c57a1f1d/play_480p.mp4" },
                { id: 2, title: "Sensual Stories", duration: "6 mins", img: "th_12.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/e3168147-273d-4758-ae4f-dd128e41f9c7/play_480p.mp4" },
                { id: 3, title: "Bold Scenes", duration: "4 mins", img: "th_13.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/2f3a0402-035f-4935-8a64-8fc4a2e375fd/play_480p.mp4" },
                { id: 4, title: "Intimate Tales", duration: "7 mins", img: "th_14.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/974e3e76-5cf9-4366-bc63-3c0f9c2c3507/play_480p.mp4" },
                { id: 5, title: "Romantic Clips", duration: "5 mins", img: "th_15.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/8ed4f9e8-dc12-4e6b-9947-3ef08d2144a4/play_480p.mp4" },
                { id: 6, title: "Passion Reels", duration: "6 mins", img: "th_16.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/d08297f1-59e7-4f2c-a66b-f3b5bf4a1104/play_480p.mp4" },
                { id: 7, title: "Desire Shorts", duration: "4 mins", img: "th_17.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/9aec82c6-d6c1-4ae8-932a-6bf7b5329762/play_480p.mp4" },
                { id: 8, title: "Steamy Clips", duration: "5 mins", img: "th_18.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/a773531d-3e5f-4fb2-aef7-e1a20d7b3711/play_480p.mp4" },
                { id: 9, title: "Spicy Moments", duration: "6 mins", img: "th_19.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/c80c0be0-09e2-483e-9562-17ccd2250188/play_480p.mp4" },
                { id: 10, title: "Tempting Reels", duration: "7 mins", img: "th_20.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/b8febc79-f42a-4d93-805c-d4453b1f5604/play_480p.mp4" },
              ].map((video, index) => (
                <div key={video.id} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 50}ms` }} onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/Thumbnails/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yoga-brown ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-sm text-white">{video.title}</h3>
                    <p className="text-xs text-white/80">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exclusive Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yoga-brown/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
              এক্সক্লুসিভ <span className="text-purple-500">কনটেন্ট</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { id: 1, title: "Special Edition", duration: "8 mins", img: "th_21.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/9aec82c6-d6c1-4ae8-932a-6bf7b5329762/play_480p.mp4" },
                { id: 2, title: "VIP Access", duration: "9 mins", img: "th_22.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/a773531d-3e5f-4fb2-aef7-e1a20d7b3711/play_480p.mp4" },
                { id: 3, title: "Premium Plus", duration: "7 mins", img: "th_23.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/c80c0be0-09e2-483e-9562-17ccd2250188/play_480p.mp4" },
                { id: 4, title: "Elite Series", duration: "10 mins", img: "th_24.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/b8febc79-f42a-4d93-805c-d4453b1f5604/play_480p.mp4" },
                { id: 5, title: "Luxury Collection", duration: "8 mins", img: "th_25.png", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/225d5414-d6d3-45c5-aaed-8393c57a1f1d/play_480p.mp4" },
              ].map((video, index) => (
                <div key={video.id} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 50}ms` }} onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/Thumbnails/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yoga-brown ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-sm text-white">{video.title}</h3>
                    <p className="text-xs text-white/80">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wellness Collection */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yoga-brown/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
              ওয়েলনেস <span className="text-purple-500">কালেকশন</span>
            </h2>
            <Carousel slidesToShow={5}>
              {[
                { id: 1, title: "Flexibility Flow", duration: "25 mins", img: "1.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/b63d2451-d1ff-4f40-8487-96e17c30d0ba/play_480p.mp4" },
                { id: 2, title: "Body Balance", duration: "30 mins", img: "2.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/77e9d93d-8dd5-4872-8eca-76f47a101535/play_480p.mp4" },
                { id: 3, title: "Stretch & Tone", duration: "28 mins", img: "3.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/da9a1047-267b-4eaf-9fe8-8672bbe03a99/play_480p.mp4" },
                { id: 4, title: "Power Poses", duration: "32 mins", img: "4.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/7ff2c6e3-9d04-44b1-ab74-23b50bf2ee3f/play_480p.mp4" },
                { id: 5, title: "Core Strength", duration: "27 mins", img: "5.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/62d9039d-d6a2-4875-ad26-044ecb73f465/play_480p.mp4" },
                { id: 6, title: "Mindful Movement", duration: "35 mins", img: "6.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/0009cd8e-cdb6-47f3-9de3-50a54ff31db9/play_480p.mp4" },
                { id: 7, title: "Graceful Asanas", duration: "29 mins", img: "7.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/358c36ac-f7d7-4199-b9a3-4a47440ad736/play_480p.mp4" },
                { id: 8, title: "Wellness Flow", duration: "31 mins", img: "8.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/421d5e21-9fac-4e47-b306-d3af1971b33f/play_480p.mp4" },
                { id: 9, title: "Energy Boost", duration: "26 mins", img: "9.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/2c0ebe0b-bd90-4f7a-a562-ca1221358571/play_480p.mp4" },
                { id: 10, title: "Zen Practice", duration: "33 mins", img: "10.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/4717f4c8-448b-4005-b170-b55f85513b3b/play_480p.mp4" },
              ].map((video) => (
                <div key={video.id} className="group cursor-pointer px-2" onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 max-w-[150px] mx-auto">
                    <img src={`/YogaUserThumbnails/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-yoga-brown ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 max-w-[150px] mx-auto">
                    <h3 className="font-bold text-xs text-white truncate">{video.title}</h3>
                    <p className="text-xs text-white/80">{video.duration}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Fitness Series */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
              ফিটনেস <span className="text-purple-500">সিরিজ</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { id: 1, title: "Cardio Blast", duration: "30 mins", img: "F1.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/067e9e6f-b190-4ea8-837d-edf2f2ee5d93/play_480p.mp4" },
                { id: 2, title: "Strength Training", duration: "35 mins", img: "F2.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/24e3d12e-e3dd-4517-bc65-802fc41e1387/play_480p.mp4" },
                { id: 3, title: "Full Body Burn", duration: "28 mins", img: "F3.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/2b392888-3390-460e-8aa0-f7c93a00e27c/play_480p.mp4" },
                { id: 4, title: "Core Workout", duration: "25 mins", img: "F4.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/6237de2b-5855-459b-a3f3-9889c710564d/play_480p.mp4" },
                { id: 5, title: "HIIT Session", duration: "32 mins", img: "F5.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/1b5550eb-1c06-44cb-ad97-7f4391b18f33/play_480p.mp4" },
                { id: 6, title: "Toning Routine", duration: "27 mins", img: "F6.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/c3ac8858-6f5e-4230-bd90-0681a0e3367c/play_480p.mp4" },
                { id: 7, title: "Endurance Build", duration: "40 mins", img: "F7.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/fe230bf2-38d4-408b-a83f-c87f529a42a4/play_480p.mp4" },
                { id: 8, title: "Power Training", duration: "33 mins", img: "F8.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/3558ac7d-ecea-485b-bbce-bceb768c867d/play_480p.mp4" },
                { id: 9, title: "Sculpt & Shape", duration: "29 mins", img: "P1.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/73b38601-f4ca-48db-9b53-b9e82df40091/play_480p.mp4" },
                { id: 10, title: "Athletic Performance", duration: "36 mins", img: "P2.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/c4710130-74d1-418f-977c-d766904b1186/play_480p.mp4" },
              ].map((video, index) => (
                <div key={video.id} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 50}ms` }} onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/YogaUserThumbnails/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yoga-brown ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-sm text-white">{video.title}</h3>
                    <p className="text-xs text-white/80">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Shorts */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
              প্রিমিয়াম <span className="text-purple-500">শর্টস</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { id: 1, title: "Quick Stretch", duration: "5 mins", img: "P3.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/efc87638-9594-4cdc-9341-678021d3fda6/play_480p.mp4" },
                { id: 2, title: "Morning Energizer", duration: "6 mins", img: "P4.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/ee6bf8ad-ae76-40e9-b920-46d05aad63cf/play_480p.mp4" },
                { id: 3, title: "Core Focus", duration: "4 mins", img: "P5.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/0de683b5-5e12-4617-9bd8-c0ab399d050a/play_480p.mp4" },
                { id: 4, title: "Balance Builder", duration: "7 mins", img: "P6.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/22f0b155-cee5-4055-a936-380b4d78e049/play_480p.mp4" },
                { id: 5, title: "Cardio Burst", duration: "5 mins", img: "P7.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/d9378cc3-f6d1-43e5-835b-875f4941fdfc/play_480p.mp4" },
                { id: 6, title: "Flexibility Quick", duration: "6 mins", img: "P8.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/e636744e-f8c4-4e02-8d06-800ccde3a14a/play_480p.mp4" },
                { id: 7, title: "Power Moves", duration: "4 mins", img: "P9.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/ede0951b-f601-4a20-91b4-0e6b46fa7919/play_480p.mp4" },
                { id: 8, title: "Express Workout", duration: "5 mins", img: "P10.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/a9423b93-f129-4915-88bd-3f99ba720884/play_480p.mp4" },
                { id: 9, title: "Mini Session", duration: "6 mins", img: "S1.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/a36e7860-11b5-4467-85ad-a15310f12ada/play_480p.mp4" },
                { id: 10, title: "Quick Tone", duration: "7 mins", img: "S2.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/38b0a19c-9058-44a1-9b8a-d52ac72aaf7e/play_480p.mp4" },
              ].map((video, index) => (
                <div key={video.id} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 50}ms` }} onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/YogaUserThumbnails/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yoga-brown ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-sm text-white">{video.title}</h3>
                    <p className="text-xs text-white/80">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Elite Training */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yoga-brown/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
              এলিট <span className="text-purple-500">ট্রেনিং</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { id: 1, title: "Special Edition", duration: "8 mins", img: "S4.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/3fb78412-1e37-48ba-9979-24fa911a9996/play_480p.mp4" },
                { id: 2, title: "VIP Access", duration: "9 mins", img: "S5.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/59de7915-6920-449e-a287-d1288154f273/play_480p.mp4" },
                { id: 3, title: "Premium Plus", duration: "7 mins", img: "S6.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/2e8befac-542c-4f67-8529-f4c5dfbc98a7/play_480p.mp4" },
                { id: 4, title: "Elite Series", duration: "10 mins", img: "S7.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/eae9d2e8-431c-41b0-9f15-7492a45a05e6/play_480p.mp4" },
                { id: 5, title: "Luxury Collection", duration: "8 mins", img: "S8.png", videoUrl: "https://vz-a8f5da8b-27d.b-cdn.net/0ed8dd89-3e05-48fa-b193-a53ad7c77e55/play_480p.mp4" },
              ].map((video, index) => (
                <div key={video.id} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 50}ms` }} onClick={() => openVideo(video.videoUrl, video.title)}>
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img src={`/YogaUserThumbnails/${video.img}`} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-yoga-brown ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-sm text-white">{video.title}</h3>
                    <p className="text-xs text-white/80">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/20 bg-white/10 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <img src="/logo.png" alt="TheGlam বাংলা" className="w-40 h-40 object-contain" />
              <p className="text-white/80 text-sm">দেশি এন্টারটেইনমেন্টের আপনার গেটওয়ে</p>
              <div className="border-t border-white/20 pt-6 w-full">
                <p className="text-white/80 text-sm mb-2">&copy; 2025, nServe Technology LLC All Rights Reserved</p>
                <div className="flex gap-2 justify-center text-white/80 text-sm">
                  <Link to="/terms" className="hover:text-white">Terms of Services</Link>
                  <span>|</span>
                  <Link to="/refund" className="hover:text-white">Refund Policy</Link>
                  <span>|</span>
                  <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
