import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Sparkles } from "lucide-react";

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: { email: string; role: string; otherRole?: string }) => void;
  isSubmitting?: boolean;
  defaultEmail?: string;
}

export function ContactFormModal({
  open,
  onOpenChange,
  onSubmit,
  isSubmitting = false,
  defaultEmail = "",
}: ContactFormModalProps) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [otherRole, setOtherRole] = useState("");

  // Populate email when modal opens with defaultEmail
  useEffect(() => {
    if (open && defaultEmail) {
      setEmail(defaultEmail);
    }
  }, [open, defaultEmail]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && role) {
      onSubmit({
        email,
        role,
        ...(role === "other" && { otherRole }),
      });
      // Reset form
      setEmail("");
      setRole("");
      setOtherRole("");
    }
  };

  const isFormValid = email && role && (role !== "other" || otherRole);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-white to-teal-50/50 border-2 border-teal-100">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Join the Waitlist!
          </DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            Tell us a bit about yourself and we'll keep you updated on our
            launch.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-900">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-gray-200 focus:border-[#2212AB] transition-colors"
            />
          </div>

          {/* Role Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="role" className="text-gray-900">
              What best describes you?
            </Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger
                id="role"
                className="border-2 border-gray-200 focus:border-[#2212AB] transition-colors"
              >
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="content-creator">
                  Content Creator 🎥
                </SelectItem>
                <SelectItem value="influencer">Influencer ✨</SelectItem>
                <SelectItem value="entrepreneur">
                  Entrepreneur 🚀
                </SelectItem>
                <SelectItem value="small-business-owner">
                  Small Business Owner 🏪
                </SelectItem>
                <SelectItem value="freelancer">Freelancer 💼</SelectItem>
                <SelectItem value="brand-strategist">
                  Brand Strategist 🎯
                </SelectItem>
                <SelectItem value="marketing-professional">
                  Marketing Professional 📈
                </SelectItem>
                <SelectItem value="designer">Designer 🎨</SelectItem>
                <SelectItem value="student">Student 📚</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Other Role Field - Conditional */}
          {role === "other" && (
            <div className="space-y-2">
              <Label htmlFor="otherRole" className="text-gray-900">
                Please specify
              </Label>
              <Input
                id="otherRole"
                type="text"
                placeholder="Tell us your role"
                value={otherRole}
                onChange={(e) => setOtherRole(e.target.value)}
                required
                className="border-2 border-gray-200 focus:border-[#2212AB] transition-colors"
              />
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-gradient-to-r from-[#F96B09] to-[#FFBD4A] hover:from-[#FFBD4A] hover:to-[#F96B09] text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? "Joining..." : "Join the Waitlist 🎉"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
