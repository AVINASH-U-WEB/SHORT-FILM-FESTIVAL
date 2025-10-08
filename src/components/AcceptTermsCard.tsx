import { useState } from "react";
import { Link } from "react-router-dom";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScVFiy7lHw--Ig3T_OngiFgpb8Zi43ebTS2VOW2gFXIen638w/viewform";

export default function AcceptTermsCard() {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleContinue = () => {
    if (hasAccepted) {
      window.open(REGISTRATION_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    // Main Card: Centered, white, with rounded corners and a soft shadow
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-10">
      
      {/* Header Section */}
      <h2 className="text-3xl font-bold text-gray-800">Terms & Conditions</h2>
      <p className="mt-2 text-gray-500">
        Please read and accept the following terms before proceeding.
      </p>

      {/* Terms List Container with Custom Scrollbar */}
      <div className="mt-6 border rounded-md p-4 max-h-60 overflow-y-auto custom-scrollbar">
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>The short film duration must be between 1 to 15 minutes. All genres are accepted.</li>
          <li>Multiple entries are allowed per filmmaker.</li>
          <li>Films may be shot on camera or mobile; worldwide entries are accepted.</li>
          <li>Submissions can include released or unreleased short films.</li>
          <li>Non-Tamil films require English subtitles.</li>
          <li>Submit via a video link (Google Drive or unlisted YouTube).</li>
          <li>The entry fee is 999 per film and is non-refundable.</li>
          <li>Judging considers content, quality, and performance.</li>
          <li>Top three short films receive cash prizes; category winners receive trophies/medals.</li>
          <li>Winners may get an opportunity to narrate a story to a leading Tamil film producer.</li>
          <li>Selected films will be notified at least 15 days before the event.</li>
          <li>Screening depends on jury suggestions and the organization’s decision.</li>
          <li>Submission deadline: Nov 14, 2025.</li>
          <li>Films must be original; legal claims are the creator’s responsibility.</li>
          <li>For enquiries, contact: +91 9655 404 111 | 9655 707 111.</li>
        </ol>
      </div>

      {/* Checkbox Section */}
      <div className="mt-6 flex items-center">
        <input
          id="terms-checkbox"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
          checked={hasAccepted}
          onChange={(e) => setHasAccepted(e.target.checked)}
        />
        <label htmlFor="terms-checkbox" className="ml-3 text-sm text-gray-600">
          I have read and accept the Terms & Conditions.
        </label>
      </div>

      {/* Action Buttons Section */}
      <div className="mt-6 flex items-center gap-6">
        {/* Styled Orange Button */}
        <button 
          onClick={handleContinue} 
          disabled={!hasAccepted} 
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-sm transition-colors duration-200 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Agree & Continue to Registration
        </button>
        
        <Link
          to="/"
          className="text-sm text-gray-500 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}