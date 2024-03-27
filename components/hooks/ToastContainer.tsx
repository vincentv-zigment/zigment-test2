import React from "react";
import { useToast } from "@/components/hooks/useToast";
import { MdErrorOutline, MdClose, MdInfoOutline } from "react-icons/md";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-2">
      {toasts.map((toast) => (
        <>
          {toast.type === "error" && (
            <div
              key={toast.id}
              className={`p-4 text-sm rounded-lg shadow-lg cursor-pointer toast-animate1 top-0 right-0 translate-x-[100%] bg-red-100 text-red-500 flex items-center gap-2`}
            >
              <MdErrorOutline className="w-5 h-5 text-red-600" />
              <span>{toast.message}</span>
              <button className="" onClick={() => removeToast(toast.id)}>
                <MdClose className="w-5 h-5 text-gray-500 hover:text-black" />
              </button>
              <div className="toast-timer absolute bottom-0 left-0 h-2 bg-red-500"></div>
            </div>
          )}

          {toast.type === "success" && (
            <div
              key={toast.id}
              className={`p-4 text-sm rounded-lg shadow-lg cursor-pointer toast-animate1 top-0 right-0 translate-x-[100%] bg-green-50 text-green-600 flex items-center gap-2`}
            >
              <CheckCircleIcon className="w-5 h-5 text-green-600" />
              <span>{toast.message}</span>
              <button className="" onClick={() => removeToast(toast.id)}>
                <MdClose className="w-5 h-5 text-gray-600 hover:text-black" />
              </button>
              <div className="toast-timer absolute bottom-0 left-0 h-2 bg-green-600"></div>
            </div>
          )}

{toast.type === "info" && (
            <div
              key={toast.id}
              className={`p-4 text-sm rounded-lg shadow-lg cursor-pointer toast-animate1 top-0 right-0 translate-x-[100%] bg-blue-50 text-blue-600 flex items-center gap-2`}
            >
              <MdInfoOutline  className="w-5 h-5 text-blue-600" />
              <span>{toast.message}</span>
              <button className="" onClick={() => removeToast(toast.id)}>
                <MdClose className="w-5 h-5 text-gray-600 hover:text-black" />
              </button>
              <div className="toast-timer absolute bottom-0 left-0 h-2 bg-blue-600"></div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default ToastContainer;
