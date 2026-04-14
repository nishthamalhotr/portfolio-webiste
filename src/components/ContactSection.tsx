import { Mail, MapPin, Send, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:lovemyselfnishtha2345@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold mb-2">Contact</p>
          <h2 className="text-4xl font-bold">Let’s Connect</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            I'm open to internships, collaborations, and exciting opportunities in AI, 
            full-stack development, and innovative tech solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Info */}
          <div className="space-y-6">

            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-xl border hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground text-sm">
                  lovemyselfnishtha2345@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl border hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-muted-foreground text-sm">
                  Delhi, India
                </p>
              </div>
            </div>

            {/* Phone (optional but powerful) */}
            <div className="flex items-center gap-4 p-4 rounded-xl border hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground text-sm">
                  +91 8130809356
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-card p-6 rounded-2xl border shadow-sm 
            hover:shadow-lg transition-all duration-300"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border bg-background text-foreground 
              placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border bg-background text-foreground 
              placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border bg-background text-foreground 
              placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              required
            />

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 
              bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold 
              hover:scale-[1.02] hover:shadow-md transition-all duration-300"
            >
              Send Message <Send size={16} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;