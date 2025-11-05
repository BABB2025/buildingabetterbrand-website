import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight, X } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface FloatingEmailCaptureProps {
  onOpenModal: (email: string) => void;
}

export function FloatingEmailCapture({ onOpenModal }: FloatingEmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px (past hero section)
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 400) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onOpenModal(email);
      setEmail("");
      setIsDismissed(true);
      setIsVisible(false);
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 md:bottom-6 md:right-6 md:left-auto z-50 animate-in slide-in-from-bottom duration-500"
      style={{
        animation: isVisible ? 'slideUp 0.5s ease-out' : undefined
      }}
    >
      <div className="bg-gradient-to-r from-white to-teal-50/80 backdrop-blur-xl border-2 border-white shadow-2xl md:rounded-3xl rounded-t-3xl md:max-w-md w-full mx-auto md:mx-0 relative overflow-hidden">
        {/* Decorative gradient orb */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00A8A8]/20 to-[#F96B09]/20 rounded-full blur-2xl" />
        
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 transition-all shadow-md hover:shadow-lg"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative p-6 md:p-8">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-[#2212AB] mb-2">
              Don't miss out!
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Get Early Access (Beta)
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white border-2 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#F96B09] focus:ring-[#F96B09]/20 shadow-md px-4 py-3 rounded-full flex-1"
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-[#F96B09] to-[#FFBD4A] hover:from-[#FFBD4A] hover:to-[#F96B09] text-white font-medium px-6 py-3 shadow-xl hover:shadow-2xl transition-all whitespace-nowrap gap-2 rounded-full"
            >
              I'm In!
              <ArrowRight className="w-4 h-4" strokeWidth={3} />
            </Button>
          </form>
        </div>
      </div>

      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
