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
      name: "Aastha",
      time: "35 mins",
      image: "/LANDSCAPE/aastha.png",
      description: "romance ki kahani, full of passion aur pyaar",
      videoUrl: "https://vz-66b329af-17e.b-cdn.net/df51e289-de98-44b6-8916-46bb9ab37fb8/play_480p.mp4",
    },
    {
      id: 2,
      name: "Adavat",
      time: "25 mins",
      image: "/LANDSCAPE/adavat.png",
      description: "Dushmani se mohabbat tak ka safar, dramatic aur intense",
      videoUrl: "https://vz-66b329af-17e.b-cdn.net/50b7d265-485d-4f58-995f-dcddf83176af/play_480p.mp4",
    },
    {
      id: 3,
      name: "Ajnabee",
      time: "30 mins",
      image: "/LANDSCAPE/ajnabee.png",
      description: "Anjaan raahon mein pyaar ka ehsaas, mysterious aur romantic",
      videoUrl: "https://vz-66b329af-17e.b-cdn.net/d47ead79-b345-46b3-93e8-03a96e1de2bb/play_480p.mp4",
    },
    {
      id: 4,
      name: "Aookabhi Haveli Pe",
      time: "32 mins",
      image: "/LANDSCAPE/Aookabhi haveli pe.png",
      description: "Haveli ki rahasymay kahani, full of drama aur suspense",
      videoUrl: "https://vz-66b329af-17e.b-cdn.net/f18a2607-7df3-46d3-a00f-f8a976fc5043/play_480p.mp4",
    },
  ];

  const stats = [
    { number: "50K+", label: "Videos", icon: <GraduationCap className="w-6 h-6" /> },
    { number: "100K+", label: "Viewers", icon: <Users className="w-6 h-6" /> },
    { number: "4.9★", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Community Support", icon: <Flame className="w-6 h-6" /> },
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
                  Welcome to
                  <span className="text-purple-500"> TheGlam</span>
                </h1>
                <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Premium Indian entertainment ka maza lijiye. Exclusive original content dekho, mast kahaniyan explore karo, aur unlimited streaming enjoy karo.
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
                Featured <span className="text-purple-500">Top Videos</span>
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Sabse exciting aur popular content, specially selected for you
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
              Sabhi <span className="text-purple-500">Shows</span>
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

        {/* Popular Shows */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
              Popular <span className="text-purple-500">Web Shows</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6">
              {[
                { id: 1, title: "Dhund", time: "00:35 mins", img: "dhund.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/dd4dad95-2eef-41d5-be33-dac462963da3/play_480p.mp4" },
                { id: 2, title: "Did It Happen", time: "00:33 mins", img: "did it happen.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/8e7a93e5-db16-48b2-b5e4-ef0bc38c9bf3/play_480p.mp4" },
                { id: 3, title: "Dream Movie", time: "00:40 mins", img: "dream movie.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/26501c57-72a5-461d-895f-74cc0d157833/play_480p.mp4" },
                { id: 4, title: "Ek Choti Si Love Story EP1", time: "00:30 mins", img: "ek choti si love story ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/8d73d338-4ee5-4747-b10f-9938a581e5d5/play_480p.mp4" },
                { id: 5, title: "Ek Choti Si Love Story EP2", time: "00:32 mins", img: "ek choti si love story ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/7a472d63-8b87-4e74-b0f9-21821e3b8e1c/play_480p.mp4" },
                { id: 6, title: "Ek Choti Si Love Story EP3", time: "00:34 mins", img: "ek choti si love story ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/0ef70162-4335-41dc-95f3-b89d22724cf3/play_480p.mp4" },
                { id: 7, title: "Ek Choti Si Love Story EP4", time: "00:35 mins", img: "ek choti si love story ep4.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/c67045d4-efb3-4977-9428-4937ef3c57ba/play_480p.mp4" },
                { id: 8, title: "Ek Haseena Thi EP1", time: "00:40 mins", img: "ek hassina thi ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/b8f9b36e-ab04-4d30-91da-345e6ffa02b8/play_480p.mp4" },
                { id: 9, title: "Ek Haseena Thi EP2", time: "00:38 mins", img: "ek hassina thi ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/e7f190a7-9cf9-4b89-9e87-ee618f10168a/play_480p.mp4" },
                { id: 10, title: "Fooljhadi Bhabhi", time: "00:44 mins", img: "fooljhadi bhabhi.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/e08930bc-13e0-4f73-801f-d98839dc384e/play_480p.mp4" },
                { id: 11, title: "Forbidden Love", time: "00:34 mins", img: "forbidden love.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/3ac6107e-7f6a-4745-be24-b04c0625472b/play_480p.mp4" },
                { id: 12, title: "Game of Love", time: "00:36 mins", img: "game of love.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/997ceca5-5339-4805-936a-b8ef01542af3/play_480p.mp4" },
                { id: 13, title: "Game Plan", time: "00:38 mins", img: "game plan.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/38a92e61-e761-4789-b4ef-a551c7b1bead/play_480p.mp4" },
                { id: 14, title: "Gangubai Kaamwali", time: "00:41 mins", img: "gangubai kaamwali.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/9fa5170d-1a9c-468d-a2e6-7f0caed03211/play_480p.mp4" },
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
                    <p className="text-xs text-white/80">{video.time}, Indian Content</p>
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
              Top Episodes <span className="text-purple-500">Abhi Dekho!</span>
            </h2>
            <div className="relative group">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300 ease-out gap-4" style={{ transform: `translateX(-${soloSlideIndex * 100}%)` }}>
                  {[
                    { id: 1, title: "Godess of Love", time: "00:36 mins", img: "godess of love.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/0ff3f1e0-4607-49ba-afdb-65d03f2592f4/play_480p.mp4" },
                    { id: 2, title: "Guilt", time: "00:38 mins", img: "guilt.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/40c49714-e30b-49e7-8e8e-a783f8344b7a/play_480p.mp4" },
                    { id: 3, title: "Happy Shorts", time: "00:42 mins", img: "happy shorts.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/20b53b00-0426-48df-8d70-d52eb14dd83a/play_480p.mp4" },
                    { id: 4, title: "Hello Myself Lilly", time: "00:35 mins", img: "hello myself lilly.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/558de7ac-8c20-4809-a65a-ac67ee60b8e3/play_480p.mp4" },
                    { id: 5, title: "Her Story", time: "00:33 mins", img: "her story.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/f07a8ec2-84cd-48d9-bd0f-c1cf9781f353/play_480p.mp4" },
                    { id: 6, title: "Highway 69", time: "00:40 mins", img: "highway 69.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/5fed72b5-d5a1-4e1b-a7de-a2c7e8ec3caf/play_480p.mp4" },
                    { id: 7, title: "Horror Story", time: "00:45 mins", img: "horror story.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/855129f1-0a59-48fb-89cb-e100f1807ce9/play_480p.mp4" },
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
                          <p className="text-xs text-white/80">{video.time}, Indian Content</p>
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

        {/* Hot Series */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-yoga-brown/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Hot &amp; Trending <span className="text-purple-500">Series</span>
              </h2>
              <p className="text-white/90 text-lg">Watch Now</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { id: 1, title: "Hot Air Hostage EP1", episode: "S01E01", img: "hot air hostage ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/8b15894c-977a-4502-842f-b57de8c5fda6/play_480p.mp4" },
                { id: 2, title: "Hot Air Hostage EP2", episode: "S01E02", img: "hot air hostage ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/5165c856-ab73-4468-97ef-5a70980ea288/play_480p.mp4" },
                { id: 3, title: "Hot Air Hostage EP3", episode: "S01E03", img: "hot air hostahe ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/9a006cb7-17f2-4894-bdcc-a0a57faf8f25/play_480p.mp4" },
                { id: 4, title: "Hot Coffee EP2", episode: "S01E04", img: "hot coffee ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/ddf32747-ae8a-4437-89c9-08fdbef2f627/play_480p.mp4" },
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

        {/* Hot Episodes Masala */}
        <section className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
              Exciting Episodes <span className="text-purple-500">Must Watch</span>
            </h2>
            <Carousel slidesToShow={3}>
              {[
                { id: 1, title: "Hot Coffee EP1", time: "37 mins", img: "hot coffie ep 1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/9c5e598a-06bb-4b7d-89f9-cb76ec94a78b/play_480p.mp4" },
                { id: 2, title: "Hot Shot", time: "36 mins", img: "hot shot1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/ebbf3364-1d25-4454-8e8a-0aa166f31dd7/play_480p.mp4" },
                { id: 3, title: "Jaal", time: "41 mins", img: "jaal.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/23e20e42-71bf-4d34-bb2b-638a6e00d126/play_480p.mp4" },
                { id: 4, title: "Jinn", time: "38 mins", img: "jinn.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/caff7c4f-b4a8-41e7-adec-1d848115ff70/play_480p.mp4" },
                { id: 5, title: "Kama Rasam", time: "43 mins", img: "kama rasam .png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/25199036-86e4-4231-9e7e-529f90ac0e48/play_480p.mp4" },
                { id: 6, title: "Kamini EP1", time: "38 mins", img: "kamini ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/66392db7-c400-447d-afd8-ffce12d5e2cf/play_480p.mp4" },
                { id: 7, title: "Kamini EP2", time: "33 mins", img: "kamini ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/a045b5c9-8853-40e7-8edf-d46e955952ee/play_480p.mp4" },
                { id: 8, title: "Kamini EP3", time: "36 mins", img: "kamini ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/b7d1489a-ea57-4d4a-b34e-802138f49aa9/play_480p.mp4" },
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

        {/* Premium Collection */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
              Premium <span className="text-purple-500">Collection</span>
            </h2>
            <Carousel slidesToShow={3}>
              {[
                { id: 1, title: "Kill For Love EP1", genre: "Bold Series", img: "kill for love ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/b7d1489a-865e-46e9-ba57-5296bd3951db/play_480p.mp4" },
                { id: 2, title: "Kill For Love EP2", genre: "Bold Series", img: "kill for love ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/4c6b6133-f1da-4515-9878-66d95941438d/play_480p.mp4" },
                { id: 3, title: "Kill For Love EP3", genre: "Bold Series", img: "kill for love ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/7378b409-a38d-4bb9-8731-6da2c43691e7/play_480p.mp4" },
                { id: 4, title: "Kill For Love EP4", genre: "Bold Series", img: "kill for love ep4.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/affa862c-e511-4eff-aff3-56810d713399/play_480p.mp4" },
                { id: 5, title: "Killer Workout", genre: "Hot Story", img: "killer workout.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/efaf0c08-eb70-41df-bfc4-72092aeb3c83/play_480p.mp4" },
                { id: 6, title: "Lady Killer", genre: "Drama", img: "lady killer.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/a014a664-19f7-41d7-b95a-2e14e16dda06/play_480p.mp4" },
                { id: 7, title: "Last Love", genre: "Romance", img: "last love.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/d556d814-6c86-4ade-a09e-32810a64f243/play_480p.mp4" },
                { id: 8, title: "Last Trip", genre: "Thriller", img: "last trip.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/b1401049-72e9-4216-a446-093c6887ecda/play_480p.mp4" },
                { id: 9, title: "Live In Relationship", genre: "Drama", img: "live in relationship.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/c5eb11d5-e57b-4b1c-abe8-c03211436c9f/play_480p.mp4" },
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
              Trending <span className="text-purple-500">This Week</span>
            </h2>
            <Carousel slidesToShow={3}>
              {[
                { id: 1, title: "Love and Lust", views: "2.5M views", img: "love and lust .png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/ffa20592-1383-4e2e-a973-303e8243864a/play_480p.mp4" },
                { id: 2, title: "Love Detective", views: "1.8M views", img: "love detective.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/59aade45-6010-4198-877e-9a9f0a1bcbc8/play_480p.mp4" },
                { id: 3, title: "Love Lady", views: "3.2M views", img: "love lady.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/e5e3833f-b06a-4b30-adce-5af66226d947/play_480p.mp4" },
                { id: 4, title: "MMS Taxi", views: "1.5M views", img: "mms taxi.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/a79219ec-b365-455e-a844-1c3dc3b0c1f2/play_480p.mp4" },
                { id: 5, title: "Online Ishq", views: "2.1M views", img: "online ishq.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/db7a29d5-b76c-4b18-aa91-59d488d34d6a/play_480p.mp4" },
                { id: 6, title: "Paap EP1", views: "1.9M views", img: "paap ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/2e514ba2-409d-4c19-a7f7-c69d9cd0f60a/play_480p.mp4" },
                { id: 7, title: "Paap EP2", views: "2.7M views", img: "paap ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/c4d37df3-6da5-4145-9202-f225ed699791/play_480p.mp4" },
                { id: 8, title: "Paap EP3", views: "3.5M views", img: "paap ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/fb5b01c0-9519-4f2b-ab0b-0cff13691039/play_480p.mp4" },
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
              Hollywood <span className="text-purple-500">Series</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { id: 1, title: "Legend of Hell", season: "Thrilling", img: "LEGEND OF HELL.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/bb7e3b04-7aa5-40a9-88f2-d02322495d45/play_480p.mp4" },
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
              Popular <span className="text-purple-500">Collection</span>
            </h2>
            <Carousel slidesToShow={5}>
              {[
                { id: 1, title: "Paap EP4", duration: "35 mins", img: "paap ep4.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/c5507cdb-f631-4af1-8320-23e360f33682/play_480p.mp4" },
                { id: 2, title: "Page3", duration: "30 mins", img: "page3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/3399c1c3-ce8f-4b85-949e-448281cf044e/play_480p.mp4" },
                { id: 3, title: "Sasurji", duration: "18 mins", img: "sasurji.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/d8f5f984-48fd-4c56-b90a-22dff40bf987/play_480p.mp4" },
                { id: 4, title: "Secret Agent", duration: "32 mins", img: "secret agent.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/f1685d6f-34f4-4b0f-b6b5-8618977e46bf/play_480p.mp4" },
                { id: 5, title: "Shikari EP1", duration: "22 mins", img: "shikari ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/9e0c9c79-7e2c-4ec6-9982-d75a5b6a025a/play_480p.mp4" },
                { id: 6, title: "Shikari EP2", duration: "12 mins", img: "shikari ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/39fae90a-4ee5-4747-b10f-9938a581e5d5/play_480p.mp4" },
                { id: 7, title: "Shikari EP3", duration: "28 mins", img: "shikari ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/2cadce9f-8b87-4e74-b0f9-21821e3b8e1c/play_480p.mp4" },
                { id: 8, title: "Shikari EP4", duration: "35 mins", img: "shikari ep4.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/7184e930-4335-41dc-95f3-b89d22724cf3/play_480p.mp4" },
                { id: 9, title: "Striped", duration: "26 mins", img: "striped.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/3e63dad7-a70c-4891-b53d-52e986602014/play_480p.mp4" },
                { id: 10, title: "Surprise", duration: "33 mins", img: "surprise.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/052fcb8c-6721-4142-9e9c-0bc7f45d1363/play_480p.mp4" },
              ].map((video) => (
                <div key={video.id} className="group cursor-pointer px-2" onClick={() => openVideo(video.videoUrl, video.title)}>
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
              Drama <span className="text-purple-500">Series</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { id: 1, title: "Taak Jhaak", duration: "38 mins", img: "taak jhaak.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/43a9f2c3-efb3-4977-9428-4937ef3c57ba/play_480p.mp4" },
                { id: 2, title: "Tera Nasha", duration: "35 mins", img: "tera nasha.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/6a875bbd-ab04-4d30-91da-345e6ffa02b8/play_480p.mp4" },
                { id: 3, title: "The Gateway", duration: "40 mins", img: "the gateway.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/8c85eb9d-c814-4b9a-bb71-b830e48b5f31/play_480p.mp4" },
                { id: 4, title: "The Insult EP1", duration: "33 mins", img: "the insult ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/313ced9a-9cf9-4b89-9e87-ee618f10168a/play_480p.mp4" },
                { id: 5, title: "The Insult EP2", duration: "35 mins", img: "the insult ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/a22b7fc5-7f6a-4745-be24-b04c0625472b/play_480p.mp4" },
                { id: 6, title: "The Insult EP3", duration: "32 mins", img: "the insult ep3.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/30016ce9-13e0-4f73-801f-d98839dc384e/play_480p.mp4" },
                { id: 7, title: "The Insult EP4", duration: "36 mins", img: "the insult ep4.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/92eab99a-4c01-450a-8b6f-5945d13d7bad/play_480p.mp4" },
                { id: 8, title: "The Interview", duration: "30 mins", img: "the interview.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/b25baf1e-310e-4a5b-b17f-87952fdd1689/play_480p.mp4" },
                { id: 9, title: "The Killer", duration: "42 mins", img: "the killer.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/3fc37af6-d0f1-40c9-b3a3-fcfc249acdd2/play_480p.mp4" },
                { id: 10, title: "The Moksh", duration: "38 mins", img: "the moksh.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/c94e730b-c3ea-4c89-8bbc-8c6087a1943e/play_480p.mp4" },
              ].map((video, index) => (
                <div key={video.id} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 50}ms` }} onClick={() => openVideo(video.videoUrl, video.title)}>
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
              Premium <span className="text-purple-500">Web Series</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
              {[
                { id: 1, title: "Trapped EP1", duration: "38 mins", img: "trapped ep1.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/cc51a661-1e67-43d6-b402-6be260b3cb3b/play_480p.mp4" },
                { id: 2, title: "Trapped EP2", duration: "35 mins", img: "trapped ep2.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/f9a5efb4-19f7-41d7-b95a-2e14e16dda06/play_480p.mp4" },
                { id: 3, title: "Vampire Virus", duration: "42 mins", img: "vampire virus.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/ef83250c-8378-4b8c-9b0d-ad17a0cbdd3f/play_480p.mp4" },
                { id: 4, title: "Virgo Network", duration: "36 mins", img: "virgo network.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/092dea74-082b-45d8-b8a0-a0069791a6b8/play_480p.mp4" },
                { id: 5, title: "Wrong Encounter", duration: "33 mins", img: "wrong encounter.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/8279b39f-fc3e-49e7-99df-dbb39d5ce8d0/play_480p.mp4" },
                { id: 6, title: "Yeh Talab", duration: "40 mins", img: "yeh talab.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/548e7f29-ed2c-4dee-94f6-33e665bcfab1/play_480p.mp4" },
                { id: 7, title: "Yog Guru", duration: "38 mins", img: "yog guru.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/c94e730b-c3ea-4c89-8bbc-8c6087a1943e/play_480p.mp4" },
                { id: 8, title: "Zeher", duration: "35 mins", img: "zeher.png", videoUrl: "https://vz-66b329af-17e.b-cdn.net/d867c6a5-1e2c-4fee-aed7-88b077219809/play_480p.mp4" },
              ].map((video, index) => (
                <div key={video.id} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 50}ms` }} onClick={() => openVideo(video.videoUrl, video.title)}>
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
              <img src="/logo.png" alt="TheGlam" className="w-40 h-40 object-contain" />
              <p className="text-white/80 text-sm">Your gateway to Indian entertainment</p>
              <div className="border-t border-white/20 pt-6 w-full">
                <p className="text-white/80 text-sm mb-2">&copy; 2025, nServe Technology LLC All Rights Reserved</p>
                <div className="flex flex-wrap gap-2 justify-center text-white/80 text-sm">
                  <Link to="/terms" className="hover:text-white">Terms of Services</Link>
                  <span>|</span>
                  <Link to="/refund" className="hover:text-white">Refund Policy</Link>
                  <span>|</span>
                  <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                  <span>|</span>
                  <Link to="/complaint-content-renewal-policy" className="hover:text-white">Complaint Content Renewal Policy</Link>
                  <span>|</span>
                  <Link to="/parental-controls" className="hover:text-white">Parental Controls</Link>
                  <span>|</span>
                  <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
                  <span>|</span>
                  <Link to="/dmca-policy" className="hover:text-white">DMCA Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
