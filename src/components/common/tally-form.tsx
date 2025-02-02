import React, { useEffect } from "react";
import { Text } from "../ui/text";

interface Options {
  key?: string;
  layout?: "default" | "modal";
  width?: number;
  alignLeft?: boolean;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: {
    text: string;
    animation:
      | "none"
      | "wave"
      | "tada"
      | "heart-beat"
      | "spin"
      | "flash"
      | "bounce"
      | "rubber-band"
      | "head-shake";
  };
  autoClose?: number;
  showOnce?: boolean;
  doNotShowAfterSubmit?: boolean;
  customFormUrl?: string;
  hiddenFields?: {
    [key: string]: any;
  };
  onOpen?: () => void;
  onClose?: () => void;
  onPageView?: (page: number) => void;
  onSubmit?: (payload: any) => void;
}

const TallyFormPopup = ({
  formId,
  options = {
    layout: "modal", // Open as a centered modal
    width: 700, // Set the width of the modal
    alignLeft: false,
    hideTitle: false,
    overlay: true,
    emoji: {
      text: "",
      animation: "none",
    },
    autoClose: 5000, // Close the popup 5 seconds after form was submitted (in ms)
    onOpen: () => {
      console.log("Popup opened");
    },
    onClose: () => {
      console.log("Popup closed");
    },
    onSubmit: (payload: any) => {
      console.log("Form submitted", payload);
    },
  },
}: {
  formId: string;
  options?: any;
}) => {
  useEffect(() => {
    // Load the Tally script dynamically
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleOpenPopup = () => {
    if (window.Tally) {
      window.Tally.openPopup(formId, options);
    } else {
      console.error("Tally script not loaded yet.");
    }
  };

  const handleClosePopup = () => {
    if (window.Tally) {
      window.Tally.closePopup(formId);
    } else {
      console.error("Tally script not loaded yet.");
    }
  };

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-2">
      <button
        onClick={handleOpenPopup}
        className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
        <Text variant="sm">Give Feedback</Text>
      </button>
    </div>
  );
};

export default TallyFormPopup;
