import React, { useState } from "react";
import Navbar from "./Navbar";
import FormHeading from "./form-elements/FormHeading";
import Questions from "./form-elements/Questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faT } from "@fortawesome/free-solid-svg-icons";

function CreateForm() {
  const [activeNav, setActiveNav] = useState(0);

  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  // const containerRef = useRef(null);
  const [showToolbar, setShowToolbar] = useState(false);

  const [questionDivs, setQuestionDivs] = useState([]);

  const [selectedDiv, setSelectedDiv] = useState();

  const handleHeadingClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    // const toolbarWidth = 150; // Set the desired width for the toolbar
    console.log("rect", rect);
    const newPosition = {
      top: rect.top - 65,
      left: rect.right + 10,
    };

    setToolbarPosition(newPosition);
    setShowToolbar(true);
  };
  const [headingDivs, setHeadingDivs] = useState([
    <div
      key={`heading_0`}
      className="mt-[1%] ml-[28%] w-[44%] min-h-fit cursor-pointer"
      onClick={handleHeadingClick}
    >
      {<FormHeading />}
    </div>,
  ]);

  const handleQuestionClick = (event) => {
    console.log("clicked Div")
    const rect = event.currentTarget.getBoundingClientRect();
    const toolbarWidth = 150; // Set the desired width for the toolbar

    const newPosition = {
      top: rect.top + window.scrollY,
      left: rect.right + 10,
    };

    // Adjust the position to ensure the toolbar is fully visible within the viewport
    if (newPosition.left + toolbarWidth > window.innerWidth) {
      newPosition.left = rect.left - toolbarWidth;
    }

    

    setToolbarPosition(newPosition);
    setShowToolbar(true);
  };

  const addHeadingDiv = () => {
    // Create a new unique key for each heading div
    const newKey = `heading_${headingDivs.length + 1}`;
    const newHeadingDiv = (
      <div
        key={newKey}
        className="mt-[1%] ml-[28%] w-[44%] min-h-fit "
        onClick={() => handleHeadingClick}
      >
        {<FormHeading />}
      </div>
    );
    setHeadingDivs([...headingDivs, newHeadingDiv]);
  };
  const addQuestionDiv = () => {
    // Create a new unique key for each question div
    const newKey = `question_${questionDivs.length + 1}`;
    const newQuestionDiv = (
      <div
        key={newKey}
        className="my-[1%] ml-[28%] w-[44%] min-h-[30%] "
        onClick={handleQuestionClick}
      >
        {<Questions />}
      </div>
    );
    setQuestionDivs([...questionDivs, newQuestionDiv]);
  };

  const onNavigatorCLickHandler = (index) => {
    setActiveNav(index);
  };
  return (
    <div className=" h-screen w-[100%]">
      <Navbar searchBar={false} title={false} />

      {/* SubNavBar */}
      <div className="flex  w-[100%] h-[4.5%] text-sm font-medium justify-center items-end ">
        <ul className="flex justify-center">
          <li
            className="relative mb-[3%]  group cursor-pointer "
            onClick={() => onNavigatorCLickHandler(0)}
          >
            {" "}
            Questions
            {activeNav === 0 && (
              <span className="absolute w-[100%] h-1 left-0 top-[115%] rounded-lg bg-[#754bbd] transform transition-transform scale-x-100"></span>
            )}
            {/* <span className='absolute h-1 w-16 rounded-lg bg-purple-600 transform scale-x-0 transition-transform group-hover:scale-x-100'></span> */}
          </li>
          <li
            className="relative mb-[3%] ml-[12%] group cursor-pointer "
            onClick={() => onNavigatorCLickHandler(1)}
          >
            {" "}
            Responses
            {activeNav === 1 && (
              <span className="absolute w-[100%] h-1 left-0 top-[115%] rounded-lg bg-[#754bbd] group-hover:bg-[#754bbd]"></span>
            )}{" "}
          </li>
          <li
            className="relative mb-[3%] ml-[12%] group cursor-pointer "
            onClick={() => onNavigatorCLickHandler(2)}
          >
            {" "}
            Settings
            {activeNav === 2 && (
              <span className="absolute w-[100%] h-1 left-0 top-[115%] rounded-lg bg-[#754bbd]  group-hover:bg-[#754bbd]"></span>
            )}
          </li>
        </ul>
      </div>

      {/* Body */}
      <div className="relative flex-col w-[100%] min-h-[88.5%] bg-[#f0ebf8] justify-center items-center border">
    

        {headingDivs.map((headingDiv, index) => (
          <div key={`heading_${index}`}>{headingDiv}</div>
        ))}
        {questionDivs.map((questionDiv, index) => (
          <div key={`question_${index}`} >{questionDiv}</div>
        ))}

        {/* Toolbar Div  */}
        {showToolbar && (
          <div
            className={`absolute flex-col bg-white w-12 h-32 rounded-xl border transition-all duration-300 justify-center items-center
           pt-5`}
            style={{
              top: `${toolbarPosition.top}px`,
              left: `${toolbarPosition.left}px`,
            }}
          >
            <FontAwesomeIcon
              className="my-2 font-bold text-xl cursor-pointer"
              icon={faPlus}
              onClick={addQuestionDiv}
            />
            <br />
            <FontAwesomeIcon
              className="my-1 font-bold text-lg cursor-pointer"
              icon={faT}
              onClick={addHeadingDiv}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateForm;
