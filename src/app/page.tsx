import Footer from "@/components/footer";
import Heading from "@/components/heading";
import UrlShortner from "@/components/url-shortner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <Heading />
        <UrlShortner />
      </div>
      <Footer />
    </div>
  );
}
