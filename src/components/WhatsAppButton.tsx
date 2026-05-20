export default function WhatsAppButton() {
  const phoneNumber = "919311910636";
  const message = "Hello! I am interested in your digital services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.736 5.469 2.027 7.77L0 32l8.445-2.014A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.79-1.862l-.487-.29-5.01 1.196 1.22-4.874-.317-.501A13.252 13.252 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.258-9.878c-.397-.199-2.35-1.16-2.715-1.292-.364-.133-.629-.199-.894.199-.264.397-1.026 1.292-1.258 1.558-.231.264-.463.298-.86.1-.397-.199-1.678-.619-3.196-1.973-1.181-1.054-1.978-2.354-2.21-2.751-.231-.397-.025-.612.174-.81.178-.177.397-.464.596-.695.199-.232.264-.397.397-.662.132-.264.066-.497-.033-.695-.1-.199-.894-2.157-1.225-2.952-.323-.774-.65-.67-.894-.682l-.762-.013c-.265 0-.695.1-1.059.497-.364.397-1.39 1.358-1.39 3.315 0 1.957 1.423 3.848 1.622 4.113.199.264 2.8 4.274 6.782 5.993.948.41 1.688.654 2.264.837.951.303 1.817.26 2.501.158.763-.114 2.35-.961 2.682-1.89.331-.928.331-1.724.231-1.89-.099-.166-.364-.265-.761-.464z"/>
      </svg>
    </a>
  );
}
