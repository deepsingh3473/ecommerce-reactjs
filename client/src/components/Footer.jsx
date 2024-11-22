import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Aditya Clothing and Shoes</h2>
            <p className="mt-2">Your one-stop shop for the latest fashion trends.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-2">
              <Phone className="h-6 w-6" />
              <span>+91-7549228553</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-6 w-6" />
              <span>info@adityaclothing.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              <span>Main Market Khagaria, Bihar, India</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Aditya Clothing and Shoes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;