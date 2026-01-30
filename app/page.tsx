import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <FeatureSection />
      <Testimonials />
      <Pricing />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-accent-blue rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 hover:opacity-10 transition-opacity"></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-5xl font-black font-display">Bắt đầu nâng tầm sự kiện của bạn</h2>
              <p className="text-lg opacity-90 max-w-[600px]">Tải bản dùng thử miễn phí và trải nghiệm đầy đủ tính năng trong 14 ngày. Không cần thẻ tín dụng.</p>
              <button className="bg-white text-primary font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                Dùng thử miễn phí
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
