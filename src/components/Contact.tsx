"use client";

import { Mail, Phone, MapPin, Code2, Globe, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="text-blue-600" size={24} />,
    label: "Email",
    value: "chengedejing@outlook.com",
    href: "mailto:chengedejing@outlook.com",
  },
  {
    icon: <Phone className="text-green-600" size={24} />,
    label: "Phone",
    value: "+86 150-7528-3903",
    href: "tel:+8615075283903",
  },
  {
    icon: <MapPin className="text-red-600" size={24} />,
    label: "Location",
    value: "Hong Kong / Shenzhen",
    href: null,
  },
];

const socialLinks = [
  {
    icon: <Code2 className="text-slate-800" size={24} />,
    label: "GitHub",
    href: "https://github.com/Lionheart784",
    description: "Check out my open source projects",
  },
  {
    icon: <Globe className="text-blue-700" size={24} />,
    label: "LinkedIn",
    href: "https://linkedin.com",
    description: "Professional profile & network",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Contact Info
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Feel free to reach out through any of the channels below. Whether it&apos;s
              job opportunities, project collaboration, or tech discussions,
              I&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg"
                >
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-slate-900">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Social Media
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Follow me on social media to learn more about my projects and tech shares.
            </p>

            <div className="space-y-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group"
                >
                  <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.label}
                    </p>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                  <Send
                    className="ml-auto text-slate-400 group-hover:text-blue-600 transition-colors"
                    size={18}
                  />
                </a>
              ))}
            </div>

            {/* Quick Email CTA */}
            <div className="mt-8 p-6 bg-blue-600 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Send Email Directly</h4>
              <p className="text-blue-100 text-sm mb-4">
                The fastest way to reach me. I typically respond within 24 hours.
              </p>
              <a
                href="mailto:chengedejing@outlook.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <Mail size={18} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
