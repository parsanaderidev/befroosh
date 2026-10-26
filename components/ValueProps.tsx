import React from "react";

export default function ValueProps() {
  return (
    <div className="w-full max-w-5xl mx-auto px-5 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 justify-center md:justify-start">
      <div className="flex flex-col items-center justify-start gap-3 max-w-xs md:max-w-none">
        <div className="w-10 h-9 rounded-full corner-superellipse/1.125 bg-purple-a1 flex items-center justify-center">
          <svg
            className="text-purple-4"
            fill="none"
            height="20"
            viewBox="0 0 16 16"
            width="20"
          >
            <path
              d="M10.2703 6.48649L8.19668 10.4609M14.0541 10.8378H1.94595M12.9497 3.05026C10.2161 0.316581 5.78393 0.316581 3.05026 3.05026C0.316581 5.78391 0.316581 10.2161 3.05026 12.9497C5.78391 15.6834 10.2161 15.6834 12.9497 12.9497C15.6834 10.2161 15.6834 5.78393 12.9497 3.05026Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <h3 className="text-lg/6 font-medium text-center text-fg-4">
          5-minute setup.{" "}
          <span className="text-fg-3">
            Connect your account easily without technical skills or complex setup.
          </span>
        </h3>
      </div>

      <div className="flex flex-col items-center justify-start gap-3 max-w-xs md:max-w-none">
        <div className="w-10 h-9 rounded-full corner-superellipse/1.125 bg-purple-a1 flex items-center justify-center">
          <svg
            className="text-purple-4"
            fill="none"
            height="20"
            viewBox="0 0 16 16"
            width="20"
          >
            <path
              d="M8 4.78378V8L10.0811 10.0811M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <h3 className="text-lg/6 font-medium text-center text-fg-4">
          Simple by design.{" "}
          <span className="text-fg-3">
            Intuitive interface to build sales scenarios and manage automated DMs.
          </span>
        </h3>
      </div>

      <div className="flex flex-col items-center justify-start gap-3 max-w-xs md:max-w-none">
        <div className="w-10 h-9 rounded-full corner-superellipse/1.125 bg-purple-a1 flex items-center justify-center">
          <svg
            className="text-purple-4"
            fill="none"
            viewBox="0 0 17 16"
            width="20"
          >
            <path
              d="M16 6.25C16 11.2813 9.12497 15 8.5 15C7.87503 15 1 11.2813 1 6.25C1 2.75 3.08333 1 5.16667 1C7.24997 1 8.5 2.3125 8.5 2.3125C8.5 2.3125 9.75003 1 11.8333 1C13.9167 1 16 2.75 16 6.25Z"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <h3 className="text-lg/6 font-medium text-center text-fg-4">
          Fast expert support.{" "}
          <span className="text-fg-3">
            Responsive guidance and advice from real experts at every stage of growth.
          </span>
        </h3>
      </div>
    </div>
  );
}
