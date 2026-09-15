export default function WhatsAppButton({ whatsappNumber }: { whatsappNumber?: string }) {
  const number = whatsappNumber?.replace(/[^0-9]/g, "");
  const href = number ? `https://wa.me/${number}` : "https://wa.me/";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.35.62 4.55 1.7 6.46L4 29l7.7-1.65a11.9 11.9 0 0 0 4.32.8c6.62 0 12.02-5.4 12.02-12.03C28.04 8.4 22.64 3 16.02 3zm0 21.9c-1.94 0-3.75-.55-5.28-1.5l-.38-.23-4.57.98.98-4.46-.25-.4a9.9 9.9 0 0 1-1.55-5.27c0-5.5 4.48-9.98 9.98-9.98s9.98 4.48 9.98 9.98c0 5.5-4.48 9.88-9.9 9.88zm5.47-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.5.71.3 1.27.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
