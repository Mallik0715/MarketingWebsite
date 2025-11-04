// src/components/sections/ContactSection.tsx
import { Phone, Mail, MapPin} from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-500 to-emerald-600">
      <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Restaurant?
        </h2>
        <p className="text-xl text-green-100 mb-10">
          Join 500+ restaurants already using Marinate360. Start your 14-day free trial today!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-10 py-5 bg-white text-green-600 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            Start Free Trial
          </button>
          <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all">
            Schedule Demo
          </button>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-white">
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-6 h-6" />
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-6 h-6" />
            <span>hello@marinate360.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <MapPin className="w-6 h-6" />
            <span>Hyderabad, India</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;