
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-ngdi-600 text-white font-bold text-xl p-2 rounded-md">
                NGDI
              </div>
              <span className="text-lg font-medium">
                Portal
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Nigeria's central platform for geospatial data management, discovery, and sharing.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="facebook" />
              <SocialLink href="#" icon="linkedin" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About NGDI</FooterLink>
              <FooterLink href="/committee">NGDI Committee</FooterLink>
              <FooterLink href="/publications">Publications</FooterLink>
              <FooterLink href="/metadata/add">Add Metadata</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/accessibility">Accessibility</FooterLink>
              <FooterLink href="/sitemap">Sitemap</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-ngdi-600 mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">National Geospatial Data Infrastructure, Abuja, Nigeria</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-ngdi-600 mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">contact@ngdi.gov.ng</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-ngdi-600 mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">+234 (0) 123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Nigeria Geospatial Data Infrastructure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link
        to={href}
        className="text-gray-600 text-sm hover:text-ngdi-600 transition-smooth"
      >
        {children}
      </Link>
    </li>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-ngdi-600 transition-smooth"
    >
      {icon === 'twitter' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )}
      {icon === 'facebook' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )}
      {icon === 'linkedin' && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )}
    </a>
  );
};

export default Footer;
