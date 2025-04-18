import { forwardRef, TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      rows={1}
      className={`w-full resize-none rounded-xl border border-gray-300 p-3 text-sm focus:border-[#eebbc3] focus:outline-none ${className} text-white`}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";

export default Textarea;
