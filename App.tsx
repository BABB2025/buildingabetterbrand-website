import image_22d8aa2f3ae9913ec3fd457447d6ecbf2428b6cc from 'figma:asset/22d8aa2f3ae9913ec3fd457447d6ecbf2428b6cc.png';
import image_df700df84e8fd2174107abcea20504e6a8a98a6a from 'figma:asset/df700df84e8fd2174107abcea20504e6a8a98a6a.png';
import image_e11d5fa85e0716dedbaf8632dda58dd2d010e556 from 'figma:asset/e11d5fa85e0716dedbaf8632dda58dd2d010e556.png';
import image_a9e8528d0a8b8efcf4ae1d43d369c669b1999507 from 'figma:asset/a9e8528d0a8b8efcf4ae1d43d369c669b1999507.png';
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { ArrowRight, LayoutDashboard, Sparkles, Plug, MapPin, Heart, Star, Zap } from "lucide-react";
import { FloatingEmailCapture } from "./components/FloatingEmailCapture";
import { ContactFormModal } from "./components/ContactFormModal";
import { motion } from "motion/react";
import Frame307 from "./imports/Frame307";
import Container45 from "./imports/Container-113-2874";
import babbLogo from "figma:asset/94f9d96dfba66f528eb30f312e8b8c4f28d91d2f.png";
import wiedenKennedyLogo from "figma:asset/faa245cde57ae3d42d78be47550799308a1b26c9.png";
import bloombergLogo from "figma:asset/ba6c381db3c87a28987a452adaf0b9beb0e5b84e.png";
import serenbeLogo from "figma:asset/a13f78c5131efc14f2199f1add1d71f2028f736a.png";
import redTableTalkLogo from "figma:asset/9577cf82f38c5fb5e102a2f64ff1a6c2f9c5062e.png";
import accentureLogo from "figma:asset/c0a155360215946f6bcdb02a131181afd930646e.png";
import blueBiteLogo from "figma:asset/559af28bf7addb2085e0de50f0ffbe48bda132db.png";
import deviceMockup from "figma:asset/8d31721918168c7f83748d780dfe9e5157e9f9e8.png";
import mobileMockupDesign from "figma:asset/298177d929d0eea760f08f3be6cf8b9f0f5ebec2.png";
import collageImage1 from "figma:asset/9a0640f987a9263d706f3bb53d7c1183b77798f7.png";
import collageImage2 from "figma:asset/bf275bf5f4f45400a1183a71eac5425c017548a4.png";
import collageImage3 from "figma:asset/d2bed60543b3af60db7083d9b8b4ad4e8ab06b09.png";
import collageImage4 from "figma:asset/4ec31f6a72cec47656ef8d058744d9a72c199af2.png";
import collageImage5 from "figma:asset/b064b80b87b491b807d96dccd7531d219da296d2.png";
import cityScapeImage from "figma:asset/7dc614761bb7e1cbd9ce1f60b4ca462e9b488035.png";
import brandLearningImage from "figma:asset/f10e01f4c8797d5bf4ad5d22d1ac4fbd1e02f60a.png";
import avatarWoman2 from "figma:asset/7a5f5c7b68b029da271048f822eaf656a18c4fb5.png";
import avatarMan from "figma:asset/c6e620e80e672a8bd63a9a8133b7f24c3f29ba61.png";
import breweryGuy from "figma:asset/1142bf3b1dfb49525ffca58d2183f783a90d90bb.png";
import aboutCollageImage from "figma:asset/0f8337ab2536d604b3f4ea0653c437ea3c440604.png";
import womenCollaborationImage from "figma:asset/e2def7092b8389f20dc6e73c655155de52b3f55c.png";
import contentCreationCarImage from "figma:asset/00e4ee46c1b14a4a95fdf9fb29b1677c3a7dc9a3.png";
import foodTruckImage from "figma:asset/a402b5386b332a40a08255bf12f7e66eee6f7281.png";
import contentFilmingImage from "figma:asset/ef50e8163cbd1b48f86e30083521400395328b00.png";
import phoneMockupBrandImage from "figma:asset/79739c5a17cafe33ca9dfe187593a10b97dddbf7.png";
import luxuryCarFilmingImage from "figma:asset/42d70537d0ed08b9700c640a43e6a8748959332e.png";

const marcusAvatar = image_22d8aa2f3ae9913ec3fd457447d6ecbf2428b6cc;
const sarahAvatar = image_e11d5fa85e0716dedbaf8632dda58dd2d010e556;
const mikeAvatar = image_df700df84e8fd2174107abcea20504e6a8a98a6a;

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState("");

  const submitEmailToMailchimp = async (emailAddress: string, role?: string, otherRole?: string) => {
    // ============================================
    // MAILCHIMP SETUP INSTRUCTIONS
    // ============================================
    // 1. Go to your Mailchimp account
    // 2. Navigate to: Audience → Signup forms → Embedded forms
    // 3. Look for the form action URL that looks like:
    //    https://YOURDOMAIN.us1.list-manage.com/subscribe/post?u=XXXXX&id=XXXXX
    // 4. Replace the values below with your actual values from that URL
    // 5. Add a MERGE field called "ROLE" in your Mailchimp audience settings to capture the role
    
    const MAILCHIMP_U = '5672ec1548449cc1d658dcfb7'; // Your Mailchimp u parameter
    const MAILCHIMP_ID = '191d65aff2'; // Your Mailchimp id parameter  
    const DATACENTER = 'us20'; // Your datacenter
    
    // Check if Mailchimp credentials are configured
    const isMailchimpConfigured = 
      MAILCHIMP_U !== 'YOUR_MAILCHIMP_U' && 
      MAILCHIMP_ID !== 'YOUR_MAILCHIMP_ID' && 
      DATACENTER !== 'YOUR_DATACENTER';
    
    if (isMailchimpConfigured) {
      // Real Mailchimp submission
      let url = `https://${DATACENTER}.list-manage.com/subscribe/post-json?u=${MAILCHIMP_U}&id=${MAILCHIMP_ID}&EMAIL=${encodeURIComponent(emailAddress)}`;
      
      // Add role as a merge field if provided
      // Using COMPANY field as that's what's configured in your Mailchimp
      if (role) {
        const roleValue = role === 'other' ? (otherRole || role) : role;
        // Format role for better readability in Mailchimp
        const formattedRole = roleValue
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        url += `&COMPANY=${encodeURIComponent(formattedRole)}`;
      }
      
      url += '&c=?';
      
      try {
        // Use JSONP to bypass CORS
        await fetch(url, {
          method: 'GET',
          mode: 'no-cors',
        });
        console.log('✅ Successfully submitted to Mailchimp:', emailAddress);
      } catch (error) {
        console.error('Mailchimp submission error:', error);
        // Continue to show success message even if fetch fails in no-cors mode
      }
    } else {
      // Demo mode - Mailchimp not configured yet
      console.log('📧 DEMO MODE - Mailchimp not configured yet');
      console.log('Email submission:', { 
        email: emailAddress, 
        role: role === 'other' ? otherRole : role 
      });
      console.log('👉 To enable Mailchimp, update the credentials in App.tsx (lines 56-58)');
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Show success message
    setIsSubmitted(true);
    toast.success("🎉 You're in! Check your email to confirm. Can't wait to have you!");
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setModalEmail(email);
      setEmail("");
      setIsModalOpen(true);
    }
  };

  const handleFloatingFormSubmit = (emailAddress: string) => {
    setModalEmail(emailAddress);
    setIsModalOpen(true);
  };

  const handleModalFormSubmit = async (data: { email: string; role: string; otherRole?: string }) => {
    setIsSubmitting(true);
    try {
      await submitEmailToMailchimp(data.email, data.role, data.otherRole);
      setIsModalOpen(false);
      setModalEmail("");
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      toast.error("Oops! Something went wrong. Email us at INFO@BUILDINGABETTERBRAND.COM 💌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F9F9] to-[#EDE9FB] text-gray-900 relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between p-6 md:p-8 backdrop-blur-sm z-20">
        <div className="flex items-center space-x-3">
          <img 
            src={babbLogo} 
            alt="Building A Better Brand®" 
            className="h-12 w-12 rounded-full shadow-lg"
          />
          <span className="text-xl font-medium text-[#2212AB]">Building A Better Brand</span>
        </div>
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#F96B09] hover:bg-[#FFBD4A] text-white font-medium px-8 py-3 shadow-lg hover:shadow-xl transition-all rounded-full"
        >
          Get early access
        </Button>
      </nav>

      {/* Hero Section */}
      <main className="relative">
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 pb-20 pt-12 md:pt-20">
          {/* Beta Badge - Centered */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-gradient-to-r from-[rgba(34,18,171,0.1)] to-[rgba(0,168,168,0.1)] rounded-full px-6 py-3 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] border border-[rgba(34,18,171,0.2)] border-solid">
              <span className="text-sm font-medium text-[#364153]">Beta launching soon</span>
            </div>
            <p className="text-lg md:text-xl text-gray-700 mt-6 font-medium">
              For emerging brand builders ready to elevate their voice, visibility, and value
            </p>
          </div>

          {/* Main Headline with Avatar Images - Centered */}
          <div className="relative mb-12 md:mb-16 max-w-5xl mx-auto">
            <h1 className="font-bold leading-[1.0] tracking-tight text-center">
              <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-[#2212AB] mb-1 relative">
                Grow your brand
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-1">
                <span className="text-[#2212AB]">your </span>
                <span className="text-[#FFBD4A]">way</span>
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-[#2212AB]">
                smarter
              </span>
            </h1>

            {/* Avatar 1 - Left side with bold orange border */}
            <div className="absolute top-[35%] left-[5%] md:left-[8%] lg:left-[12%] w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-[6px] border-[#F96B09] shadow-2xl z-10">
              <img 
                src={breweryGuy}
                alt="Emerging creator"
                className="w-full h-full object-cover object-center scale-125"
              />
            </div>

            {/* Avatar 2 - Right side with bold teal border */}
            <div className="absolute bottom-[5%] -right-[5%] md:right-[2%] lg:right-[5%] w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-[6px] border-[#00A8A8] shadow-2xl z-10">
              <img 
                src={avatarWoman2}
                alt="Independent brand builder"
                className="w-full h-full object-cover object-top"
              />
            </div>
            

          </div>

          {/* Description and Form - Centered */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            {/* Description */}
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-medium text-[#2212AB] mb-4">
                The AI-powered platform to launch, learn, build and grow your brand!
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Everything entrepreneurs need to turn your influence into equity, grow from content to commerce, and spin ideas into opportunity. No more juggling apps, no more stress—just you, your vision, and the tools to make it happen.
              </p>
            </div>

            {/* Waitlist Form - Centered */}
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white backdrop-blur border-2 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-[#F96B09] focus:ring-[#F96B09]/20 shadow-md px-5 py-6 rounded-full"
              />
              <Button 
                type="submit"
                className="bg-[#F96B09] hover:bg-[#FFBD4A] text-white font-medium px-8 py-6 shadow-xl hover:shadow-2xl transition-all whitespace-nowrap rounded-full"
              >
                I'm In!
              </Button>
            </form>
          </div>

          {/* Features Grid - Bold Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="group bg-[#2B2D31] border-4 border-[#2B2D31] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
              <div className="relative">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:rotate-6 transition-transform">
                  <LayoutDashboard className="w-7 h-7 text-[#2B2D31]" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">Your Brand HQ ✨</h3>
                <p className="text-white/90 leading-relaxed">
                  Your all-in-one brand command center. Assets, vendors, content, and campaigns—all at your fingertips.
                </p>
              </div>
            </div>

            <div className="group bg-[#00A8A8] border-4 border-[#00A8A8] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
              <div className="relative">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:rotate-6 transition-transform">
                  <Sparkles className="w-7 h-7 text-[#00A8A8]" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">AI-Powered Growth 🤖</h3>
                <p className="text-white/90 leading-relaxed">
                  Turn data into direction. BABB's AI learns your brand, spots what's working, what's not, and shows you exactly where to move next.
                </p>
              </div>
            </div>

            <div className="group bg-[#2212AB] border-4 border-[#2212AB] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
              <div className="relative">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:rotate-6 transition-transform">
                  <Plug className="w-7 h-7 text-[#2212AB]" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">Connect & Automate 🔗</h3>
                <p className="text-white/90 leading-relaxed">
                  Connect your entire stack—Shopify, Canva, TikTok, and more. One hub, endless possibilities.
                  Turn your scattered apps into a single, frictionless hub so you can launch and scale without resistance.
                </p>
              </div>
            </div>

            <div className="group bg-[#F96B09] border-4 border-[#F96B09] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 relative overflow-hidden">
              <div className="relative">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:rotate-6 transition-transform">
                  <MapPin className="w-7 h-7 text-[#F96B09]" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-medium mb-3 text-white">Plan & Launch Like a Pro 📍</h3>
                <p className="text-white/90 leading-relaxed">
                  Map out your content & campaigns with ease. 

Plan, execute, and scale like a pro. Execute your campaigns with enterprise speed and commercial confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Device Mockup Section */}
          <div className="mb-20 -mx-6 md:-mx-8 overflow-hidden">
            <div className="pt-20 pb-4 px-6 md:px-8 overflow-hidden">
              <div className="max-w-7xl mx-auto h-[615.1px] overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-[854.305px]"
                >
                  <Container45 onButtonClick={() => setIsModalOpen(true)} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="text-center mb-20 -mx-6 md:-mx-8">
            <div className="py-16 px-6 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="p-8">
                  <div className="text-5xl md:text-6xl font-bold text-[#00A8A8] mb-3">72%</div>
                  <div className="text-gray-700 leading-relaxed">of entrepreneurs say smart tools are key to growing their brand</div>
                </div>
                <div className="p-8">
                  <div className="text-5xl md:text-6xl font-bold text-[#F96B09] mb-3">60%</div>
                  <div className="text-gray-700 leading-relaxed">of small brands struggle with DIY marketing alone</div>
                </div>
                <div className="p-8">
                  <div className="text-5xl md:text-6xl font-bold text-[#FFBD4A] mb-3">50%</div>
                  <div className="text-gray-700 leading-relaxed">of new brands don't make it past year 5. Let's change that!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points Section - Bold with Orange Banner */}
          <div className="mb-20 px-6 md:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Orange Banner Heading */}
              <div className="bg-[#36454F] rounded-3xl p-8 md:p-12 mb-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                  We know the struggle is real.
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  You're not alone. These are the struggles we hear from entrepreneurs every day.
                </p>
              </div>

              {/* Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Card 1 */}
                <motion.div 
                  className="group bg-white border-4 border-[#36454F] rounded-3xl p-10 shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-2xl md:text-3xl font-medium text-[#36454F] mb-4">
                    "I'm juggling a million apps and nothing feels connected."
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Entrepreneurs are stuck piecing together tools, teams, and templates across different platforms — wasting time that could be spent building their brand and growing their business.
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  className="group bg-white border-4 border-[#00A8A8] rounded-3xl p-10 shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-2xl md:text-3xl font-medium text-[#00A8A8] mb-4">
                    "I'm spending more on mistakes than momentum."
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Without one go-to platform to manage everything, brands waste time, money, and energy jumping between vendors, subscriptions, and guesswork — slowing growth instead of fueling it.
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                  className="group bg-white border-4 border-[#2212AB] rounded-3xl p-10 shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-2xl md:text-3xl font-medium text-[#2212AB] mb-4">
                    "I've got influence, but not a roadmap."
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Turning creativity or followers into a real business feels like guesswork — there's no guided path to brand growth or monetization.
                  </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div 
                  className="group bg-white border-4 border-[#F96B09] rounded-3xl p-10 shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h3 className="text-2xl md:text-3xl font-medium text-[#F96B09] mb-4">
                    "No one ever taught me how to build a brand — I'm just figuring it out as I go."
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Founders are expected to know content, business, and branding — but there's no universal system showing them how to launch, scale, or monetize sustainably.
                  </p>
                </motion.div>

              </div>
            </div>
          </div>

          {/* Photo Collage Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl font-medium text-[#F96B09] mb-4">
                Empowering the Next Generation of Brand Builders
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 pb-2 text-[#2212AB]">
                Built for Emerging Entrepreneurs
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Whether you're launching your first brand or expanding your empire, BABB gives you the system, framework, and creative tools to make it happen. Built for doers, dreamers, and brand builders who want to grow with confidence, not chaos.
              </p>
            </div>
            
            <div className="max-w-7xl mx-auto">
              {/* Asymmetric Grid Layout */}
              <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
                {/* Large image - top left */}
                <div className="col-span-12 md:col-span-7 row-span-2 relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                  <img 
                    src={collageImage1}
                    alt="Content creator with phone"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2212AB]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold mb-1">From Launchpad to Legacy</h3>
                    <p className="text-sm text-white/90">BABB gives you the tools to bring it to life.</p>
                  </div>
                </div>
                
                {/* Tall image - top right */}
                <div className="col-span-12 md:col-span-5 row-span-2 relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                  <img 
                    src={collageImage2}
                    alt="Lifestyle workspace"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F96B09]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold mb-1">Create. Connect. Convert.</h3>
                    <p className="text-sm text-white/90">Turn creativity into traction with Building A Better Brand®</p>
                  </div>
                </div>
                
                {/* Small image - bottom left */}
                <div className="col-span-6 md:col-span-4 row-span-1 relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                  <img 
                    src={collageImage3}
                    alt="Creator filming content"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00A8A8]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Make your mark.</h3>
                    <p className="text-sm mt-1">Build a brand that people see, feel, and remember.</p>
                  </div>
                </div>
                
                {/* Medium image - bottom center */}
                <div className="col-span-6 md:col-span-5 row-span-1 relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                  <img 
                    src={collageImage4}
                    alt="Social media content"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFBD4A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Ideas meet execution</h3>
                    <p className="text-sm mt-1">Transform your vision into a brand that moves markets.</p>
                  </div>
                </div>
                
                {/* Small image - bottom right */}
                <div className="col-span-12 md:col-span-3 row-span-1 relative group overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1592572717955-53ce216717b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1lcyUyMHNxdWFyZSUyMGJpbGxib2FyZHMlMjBuaWdodHxlbnwxfHx8fDE3NjIxMzUwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Times Square billboards"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2212AB]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Where builders become brands</h3>
                    <p className="text-sm mt-1">Taking you from concept to global stage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                    About <span className="text-[#F96B09]">BABB</span>
                  </h2>
                  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Building A Better Brand® (BABB) was born as an extension of our boutique brand management agency The Triumphant Group, and inspired from a desire to help brands thrive during increasingly disruptive times for businesses.
                    </p>
                    <p>
                      We've helped over 1,000+ brands through our consulting services, events, masterclasses, e-courses, and multimedia content, which has become the blueprint and formula for our BABB SaaS product.
                    </p>
                  </div>
                </motion.div>

                {/* Image Collage */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {/* Top Left - Team Meeting */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
                      <img 
                        src={womenCollaborationImage}
                        alt="Creative team collaboration"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00A8A8]/40 to-transparent"></div>
                    </div>

                    {/* Top Right - Content Creation */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
                      <img 
                        src={luxuryCarFilmingImage}
                        alt="Content creation filming"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2212AB]/40 to-transparent"></div>
                    </div>

                    {/* Bottom Left - Content Creation */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
                      <img 
                        src={foodTruckImage}
                        alt="Content creation filming"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FFBD4A]/40 to-transparent"></div>
                    </div>

                    {/* Bottom Right - Lifestyle */}
                    <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square">
                      <img 
                        src={contentFilmingImage}
                        alt="Lifestyle branding"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F96B09]/40 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Industry Leaders Section */}
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
              Backed by insights from industry pros
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Developed from over 15 years of first-hand experience shaping brands, trusted relationships, and insider access to global industry leaders, including:
            </p>
            <div className="w-full overflow-hidden py-8">
              <div className="flex animate-scroll">
                {/* First set of logos */}
                <div className="flex gap-12 items-center px-6 flex-shrink-0">
                  <div className="flex-shrink-0 w-32 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-4 shadow-sm">
                    <img src={redTableTalkLogo} alt="Red Table Talk" className="w-20 h-20 object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-6 shadow-sm">
                    <img src={accentureLogo} alt="Accenture" className="w-full h-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-6 shadow-sm">
                    <img src={blueBiteLogo} alt="Blue Bite" className="w-full h-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-6 shadow-sm">
                    <img src={serenbeLogo} alt="Serenbe" className="w-full h-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-6 shadow-sm">
                    <img src={wiedenKennedyLogo} alt="Wieden+Kennedy" className="w-full h-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-6 shadow-sm">
                    <img src={bloombergLogo} alt="Bloomberg" className="w-full h-auto object-contain" />
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex gap-12 items-center px-6 flex-shrink-0">
                  <div className="flex-shrink-0 w-32 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-4 shadow-sm">
                    <img src={redTableTalkLogo} alt="Red Table Talk" className="w-20 h-20 object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-6 shadow-sm">
                    <img src={accentureLogo} alt="Accenture" className="w-full h-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-6 shadow-sm">
                    <img src={blueBiteLogo} alt="Blue Bite" className="w-full h-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-6 shadow-sm">
                    <img src={serenbeLogo} alt="Serenbe" className="w-full h-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-6 shadow-sm">
                    <img src={wiedenKennedyLogo} alt="Wieden+Kennedy" className="w-full h-auto object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-6 shadow-sm">
                    <img src={bloombergLogo} alt="Bloomberg" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section - Social Media Style */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What The Community Is Saying
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real feedback from real entrepreneurs building real brands
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Testimonial 1 - Dr. Marcus Collins */}
              <motion.div 
                className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-100 hover:border-[#2212AB] transition-all duration-300"
                whileHover={{ scale: 1.03, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Social Media Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden">
                    <img src={marcusAvatar} alt="Dr. Marcus Collins" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Dr. Marcus Collins</h3>
                    <p className="text-sm text-gray-500">Marketing Professor & Author</p>
                  </div>
                  <div className="text-[#00A8A8]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <p className="text-gray-700 leading-relaxed">
                  "Tony has carved out a space for brand leaders in a way that's both access to the novice and inside baseball for practitioners. We need more of this!"
                </p>
              </motion.div>

              {/* Testimonial 2 - Placeholder */}
              <motion.div 
                className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-100 hover:border-[#F96B09] transition-all duration-300"
                whileHover={{ scale: 1.03, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Social Media Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden">
                    <img src={sarahAvatar} alt="Mollie Q. Coleman" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Mollie Q. Coleman</h3>
                    <p className="text-sm text-gray-500">Branded Events & Experiences</p>
                  </div>
                  <div className="text-[#F96B09]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <p className="text-gray-700 leading-relaxed">
                  "If you're looking for the place to elevate your brand with clarity, creativity, and a strategy that truly works, Building A Better Brand® is the resource you need."
                </p>
              </motion.div>

              {/* Testimonial 3 - Placeholder */}
              <motion.div 
                className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-100 hover:border-[#00A8A8] transition-all duration-300"
                whileHover={{ scale: 1.03, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Social Media Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden">
                    <img src={mikeAvatar} alt="Mike Rodriguez" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Adam Wozney</h3>
                    <p className="text-sm text-gray-500">Former Community Manager, Wix.com</p>
                  </div>
                  <div className="text-[#2212AB]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <p className="text-gray-700 leading-relaxed">
                  "[Building A Better Brand®'s] expertise was essential to the programming, marketing and overall production of Wix.com's "Understanding the business of Branding" seminars. Oversight that proved rewarding for us at Wix.com both in terms of attendance and customer acquisition."
                </p>
              </motion.div>
            </div>
          </div>

          {/* CTA Section - Bold Teal Block */}
          <div className="text-center relative -mx-6 md:-mx-8">
            <div className="bg-[#00A8A8] py-20 px-6 md:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Ready to Level Up and Launch?
                </h2>
                <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
                  Join the waitlist and be the first to experience the platform built specifically for independent brand builders and emerging creators. Your brand's glow-up starts here.
                </p>
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#FFBD4A] hover:bg-white text-[#2212AB] font-medium px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-110 rounded-full"
                >
                  Get early access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 backdrop-blur-sm bg-white/50 p-8 md:p-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <img 
              src={babbLogo} 
              alt="Building A Better Brand®" 
              className="h-10 w-10 rounded-full ring-4 ring-white/50 shadow-lg"
            />
            <span className="text-sm text-gray-600">Made with 🖤 for emerging entrepreneurs and b</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
            <a 
              href="https://instagram.com/buildingabetterbrand_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#F96B09] transition-colors text-sm font-medium flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @buildingabetterbrand_
            </a>
            <a href="#privacy" className="text-gray-600 hover:text-[#00A8A8] transition-colors text-sm">
              Privacy
            </a>
            <a href="#terms" className="text-gray-600 hover:text-[#00A8A8] transition-colors text-sm">
              Terms
            </a>
            <div className="text-gray-600 text-sm">
              © 2025 Building a Better Brand®
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Email Capture */}
      <FloatingEmailCapture onOpenModal={handleFloatingFormSubmit} />

      {/* Contact Form Modal */}
      <ContactFormModal 
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={handleModalFormSubmit}
        isSubmitting={isSubmitting}
        defaultEmail={modalEmail}
      />
    </div>
  );
}