import React, { useState } from 'react';

function GoogleFormsContainer() {
  const [questionType, setQuestionType] = useState('text');
  const [options, setOptions] = useState(['']);

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleDeleteOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <label htmlFor="questionType" className="block text-sm font-medium text-gray-700">
          Select question type:
        </label>
        <select
          id="questionType"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          value={questionType}
          onChange={handleQuestionTypeChange}
        >
          <option value="text">Text</option>
          <option value="checkbox">Checkbox</option>
        </select>
      </div>
      <div className="mb-4">
        {options.map((option, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type={questionType === 'checkbox' ? 'checkbox' : 'text'}
              className="mr-2"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <span
              onClick={() => handleDeleteOption(index)}
              className="cursor-pointer text-red-500"
            >
              Delete
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddOption}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Add Option
      </button>
    </div>
  );
}

export default GoogleFormsContainer;
