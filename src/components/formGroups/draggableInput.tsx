// DraggableInput.tsx
import { MoreVerticalIcon, Trash } from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";

interface DraggableInputProps {
  id: number;
  index: number;
  moveInput: (dragIndex: number, hoverIndex: number) => void;
  deleteInput: () => void;
  placeholder: string;
}

const DraggableInput: React.FC<DraggableInputProps> = ({
  id,
  index,
  moveInput,
  deleteInput,
  placeholder,
}) => {

  const {register} = useFormContext();
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex items-center -space-x-4">
        <MoreVerticalIcon className="h-6 w-6 text-gray-800 font-bold" />
      </div>
      <input
        required
        type="text"
        className="w-full py-2 px-4 rounded-md shadow-sm border border-gray-300 outline-blue-600 focus:outline-2 text-sm text-gray-700 placeholder:text-gray-500 placeholder:font-sans"
        placeholder={placeholder}
        {...register(`spaces.questions.${index}`)}
      />
      <Trash
        onClick={deleteInput}
        className="h-6 w-6 text-gray-600 hover:text-gray-500 cursor-pointer"
      />
    </div>
  );
};

export default DraggableInput;
