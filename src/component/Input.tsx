import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, { 
  placeholder: string; 
  reference?: React.Ref<HTMLInputElement>; 
  type?: string; 
}>(({ placeholder, reference, type }, ref) => {
  return (
    <div className="pb-4"> 
      <input
        ref={reference || ref}  // Use either the passed reference or the forwarded ref
        type={type} 
        className="h-16 w-[300px] placeholder-gray-500 p-4 border rounded-md border-gray-400" 
        placeholder={placeholder} 
      />
    </div>
  );
});