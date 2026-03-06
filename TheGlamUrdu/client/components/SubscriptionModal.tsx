import { X } from "lucide-react";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (mobile: string) => void;
}

export default function SubscriptionModal({ isOpen, onClose, onSubmit }: SubscriptionModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mobile = (document.getElementById("mobileInput") as HTMLInputElement).value;
    onSubmit(mobile);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">ابھی سبسکرائب کریں</h3>
          
          <div className="mb-6">
            <label htmlFor="mobileInput" className="block text-gray-700 font-semibold mb-2">
              موبائل نمبر درج کریں
            </label>
            <input
              type="tel"
              id="mobileInput"
              placeholder="xxxxxxxxxx"
              maxLength={10}
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                target.value = target.value.replace(/[^0-9]/g, '').slice(0, 10);
              }}
            />
          </div>

          <input type="hidden" id="txnid" value="" />
          <input type="hidden" id="name" value="olivemint" />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            ابھی سبسکرائب کریں
          </button>
        </form>
      </div>
    </div>
  );
}
