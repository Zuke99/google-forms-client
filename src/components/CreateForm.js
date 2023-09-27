import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FormHeading from "./form-elements/FormHeading";
import Questions from "./form-elements/Questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faT } from "@fortawesome/free-solid-svg-icons";
import {v4 as uuidv4} from 'uuid';

function CreateForm() {
  const [activeNav, setActiveNav] = useState(0);

  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  // const containerRef = useRef(null);
  const [showToolbar, setShowToolbar] = useState(false);

  const [questionDivs, setQuestionDivs] = useState([]);



  const [selectedDivIndex, setSelectedDivIndex] = useState(-1);

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
      className="  w-[100%] min-h-fit cursor-pointer"
      onClick={handleHeadingClick}
    >
      {<FormHeading />}
    </div>,
  ]);
  useEffect(() => {
    console.log("alldivs",questionDivs)
  })

  const handleQuestionClick = (event, index) => {
    
    console.log("clickedDiv", event.currentTarget)
    //Get the Div's index
  

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
    SetCurrentDivHandler(index);
  };

  const addHeadingDiv = () => {
    // Create a new unique key for each heading div
    const newKey = `heading_${headingDivs.length + 1}`;
    const newHeadingDiv = (
      <div
        key={newKey}
        className="mt-[1%] ml-[100%] w-[100%] min-h-fit "
        onClick={ handleHeadingClick}
      >
        {<FormHeading />}
      </div>
    );
    setHeadingDivs([...headingDivs, newHeadingDiv]);
  };



    
  const addQuestionDiv = () => {
  
    //const newKey = `question_${questionDivs.length + 1}`;
    const newKey = uuidv4();
    const newQuestionDivs = [...questionDivs];

    let newDiv =(<div
      key={newKey}
      className="my-[1%] w-[100%] min-h-[30%]"
      onClick={handleQuestionClick}
      >
      {<Questions />}
      </div>);

      //if the page renders for first time
      if(selectedDivIndex === -1){
        localStorage.removeItem("questionSets");
      }

    newQuestionDivs.splice(selectedDivIndex + 1, 0, newKey);


    let localStorageQuestions = JSON.parse(localStorage.getItem("questionSets")) || [];
    console.log("from LocalStorage", localStorageQuestions);
    if (!Array.isArray(localStorageQuestions)) {
      localStorageQuestions = [];
    }
    const data = {
      type: "",
      question: "",
      options: []
    };

    localStorageQuestions.splice(selectedDivIndex + 1, 0, data);
    console.log("loclstorage after splice", localStorageQuestions);
    console.log("InsertAt", selectedDivIndex + 1);
    localStorage.setItem("questionSets",JSON.stringify(localStorageQuestions)); 


    setQuestionDivs(newQuestionDivs);

  };
  // const addQuestionDiv = () => {  
  //   const newKey = `question_${questionDivs.length + 1}`;

  //   let newDiv =( <div
      
  //     className="my-[1%] ml-[28%] w-[44%] min-h-[30%]"
  //     onClick={handleQuestionClick}
  //     >
  //     {<Questions />}
  //     </div>);

  //     const updateQuestionDiv = [
  //           ...questionDivs.slice(0,selectedDivIndex+1), 
  //           newDiv,
  //           ...questionDivs.slice(selectedDivIndex+1)
  //     ]

  //     setQuestionDivs(updateQuestionDiv);

  // };
  

  const SetCurrentDivHandler = (index) => {
    setSelectedDivIndex(index);
    
  }

  const onNavigatorCLickHandler = (index) => {
    setActiveNav(index);
  };

  const onSaveButtonClick = () => {
    questionDivs.forEach((questionId) => {
      const divElement = React.querySelector(`div[key="${questionId}"]`);
      const inputElements = divElement.querySelectorAll("input");
    
      inputElements.forEach((inputElement) => {
        console.log(inputElement.value);
      });
    });
  }



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
      <div className="relative flex-col w-[100%] min-h-[88.5%] bg-[#f0ebf8]  border">

      <div className="w-[100%] ">
    

          <div className=" w-[100%] mt-5 mb-2  justify-center flex flex-col items-center">
        {headingDivs.map((headingDiv, index) => (
          <div className="w-[40%]" key={`heading_${index}`} >{headingDiv}</div>
        ))}
        </div>
       
       <div className="w-[100%] flex flex-col items-center justify-center" >
       {questionDivs.map((questionId, index) => (
        <div className="w-[40%] my-2" key={questionId} onClick={(event) => handleQuestionClick(event, index)}>
          <Questions index={index}/>
        </div>


      ))}
      </div>
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
        <button className=" bg-ui-purple text-white px-7 py-2 rounded-md my-2" onClick={onSaveButtonClick}> Save </button>
      </div>
     
    </div>
  );
}

export default CreateForm;


// const addQuestionDiv = () => {
//   console.log("inside fuunction")
//   const newKey = `question_${questionDivs.length + 1}`;
//   const newQuestionDivs = [...questionDivs];

//   let copyDivs = [];

//   for(let i = 0;i<= selectedDivIndex ; i++){
//     console.log("present befrloop questiondiv", questionDivs[i]);
//     copyDivs[i] = questionDivs[i];
//   }

//   let newDiv =( <div
//     key={newKey}
//     className="my-[1%] ml-[28%] w-[44%] min-h-[30%]"
//     onClick={handleQuestionClick}
//     >
//     {<Questions key={newKey+1}/>}
//     {/* <input className="bg-slate-100"></input> */}
//     </div>);
// copyDivs[selectedDivIndex+1]= newDiv;

// //console.log("CopyDiv",copyDivs);

// for(let i = selectedDivIndex + 1; i<questionDivs.length ;i++){
//   console.log("present afterloop questiondiv", questionDivs[i]);
//   copyDivs[i+1] = questionDivs[i];

// }


//  const swapDivs = [...questionDivs];
// //setQuestionDivs([...questionDivs,newDiv]);
// swapDivs.splice(selectedDivIndex + 1, 1, newDiv);






// // const tempDiv = swapDivs[swapDivs.length-1];
// // for(let i = swapDivs.length-1;i>selectedDivIndex+1;i--){
// //     swapDivs[i] = swapDivs[i-1];
// // }
// // swapDivs[selectedDivIndex+1] = tempDiv;


// setQuestionDivs(swapDivs);



  
//   newQuestionDivs.splice(selectedDivIndex + 1, 0, (
//     <div
//       key={newKey}
//       className="my-[1%] ml-[28%] w-[44%] min-h-[30%]"
//       onClick={handleQuestionClick}
//     >
//       {<Questions key={newKey}/>}
//     </div>
//   ));

//  //setQuestionDivs(newQuestionDivs);
// };