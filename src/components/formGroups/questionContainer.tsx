// InputContainer.tsx
import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import DraggableInput from './draggableInput';
import { CirclePlusIcon } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  placeholder: string;
}

const QuestionInputContainer: React.FC = () => {
  const { control, setValue } = useFormContext(); // Access control and setValue from form context
  const { fields, append, move, remove } = useFieldArray({
    control,
    name: 'spaces.questions', // This is the name of the array in your form state
  });

  const addInput = () => {
    if (fields.length < 5) {
      append('');
    }
  };

  return (
    <div className="flex flex-col gap-2.5 py-2">
      {fields.map((input, index) => (
        <DraggableInput
          key={input.id}
          id={Number(input.id)}
          index={index}
          moveInput={(dragIndex, hoverIndex) => move(dragIndex, hoverIndex)}
          deleteInput={() => remove(index)}
          placeholder="Enter a question..."
        />
      ))}
      {fields.length < 5 && (
        <button
          type='button'
          onClick={addInput}
          className="mt-2 px-2 text-zinc-600 font-medium text-sm rounded-md flex items-center gap-1.5"
        >
          <CirclePlusIcon className='h-4 w-4 text-gray-800' /> Add one (up to 5)
        </button>
      )}
    </div>
  );
};

export default QuestionInputContainer;
