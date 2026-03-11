"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const phone = "7448726030"; // your WhatsApp number
  const message = "Hello Twelvespace Studio, I have an enquiry.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      className="fixed bottom-5 right-5 z-50 animate-bounce bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}



