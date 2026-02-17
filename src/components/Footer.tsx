import { Gift, Mail, Candy, Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#AC1514] text-white relative overflow-hidden">
      {/* Decorative icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Mail className="absolute top-4 left-12 w-12 h-12 opacity-20 rotate-12" />
        <Gift className="absolute top-32 left-8 w-16 h-16 opacity-20 -rotate-12" />
        <Candy className="absolute top-8 right-12 w-10 h-10 opacity-20 rotate-45" />
        <div className="absolute top-32 right-16 w-20 h-24 opacity-20">
          <Gift className="w-full h-full" />
        </div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <span className="text-2xl">✦</span>
          <span className="text-xl">✦</span>
        </div>
        <div className="absolute top-12 right-1/4 flex gap-2">
          <span className="text-xl">✦</span>
          <span className="text-2xl">✦</span>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Subscribe to our newsletter to stay updated with the latest news, exclusive content, and special offers. Join our
          community and be the first to know about exciting events and opportunities. Don't miss out—sign up today!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-[hsl(var(--footer-input))]  border-none rounded-full px-6 h-12 flex-1 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button className="bg-[hsl(var(--footer-input))] text-[hsl(var(--footer-red))] hover:bg-white/90 rounded-full px-8 h-12 font-semibold transition-colors cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      {/* Links Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">About</a></li>
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">Partner with us</a></li>
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">Donate</a></li>
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">Podcast</a></li>
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">Contact</a></li>
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">Newsletter</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-bold mb-6">Explore</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">Understanding Family Violence</a></li>
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">Working in Family Violence</a></li>
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">Our Impact</a></li>
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">Training & Development</a></li>
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">Consultancy Services</a></li>
            <li><a href="#" className="hover:underline text-sm uppercase tracking-wide">Join Our Community</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Call Us: (833) Recruit (833) 732-7848</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Email: info@1-800-hotels.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <span className="text-sm">
                19605 Santa Monica Blvd, Suite# 448<br />
                West Hollywood, CA 90025
              </span>
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Policy & Advocacy</h4>
            <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Resource Library</h4>
            <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Legal Updates</h4>
            <h4 className="font-semibold text-sm uppercase tracking-wide">Upcoming Events</h4>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4  text-center">
          <img src="footerlogo.svg"
           className="mx-auto mb-4"/> 
          <p className="max-w-3xl mx-auto text-sm leading-relaxed mb-8">
        Pakistan's Digital Domestic Violence Resource Center and Social Impact Advocacy Firm
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs flex flex-col sm:flex-row items-center justify-center gap-4">
            <span>Copyright © LOGO HERE. All Rights Reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
