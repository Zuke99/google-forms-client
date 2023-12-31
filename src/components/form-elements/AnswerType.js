import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {  useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addQuestion } from '../../features/user/QuestionSlice';

function AnswerType(props) {
    const [radioButtons, setRadioButtons] = useState(['Option 1']);
    const [counter, setCounter] = useState(1);
    const [textValues, setTextValues] = useState(['Option 1']);
    const [allQuestion, setAllQuestions] = useState([]);

    // useEffect = () => {
    //   console.log("AnswersSet", allQuestion);
    // }

    const dispatch = useDispatch();

    const textOnChangeHandler = (index, newValue) => {
       const newTextValue = [...textValues];
       newTextValue[index] = newValue;
       setTextValues(newTextValue);
       saveAnswers();

       

    }


    //adding new RadioButton/Checkbox
    const addRadioButton = (index) => {
       
        if(index === radioButtons.length - 1){
      const newRadioButton = 'Add Option';

      const newTextValue = '';
          
      setCounter(counter + 1)
      //const lastValue = 'Add option'
      setRadioButtons([...radioButtons, newRadioButton]);

      //If user do not mention any value to the Option, then the text automatically gets updated
      for(let i = 0; i< textValues.length ; i++){
        if(textValues[i] === ''){
            textValues[i] = `Option ${i+1}`;
            let updatedTextvalues = [...textValues];
            updatedTextvalues.splice(i,1,radioButtons[i]);
            setTextValues(updatedTextvalues);
        }
      }

      
      setTextValues([...textValues,newTextValue]);

      console.log(radioButtons);
      console.log(textValues);
        }
        saveAnswers();

    };


    const saveAnswers = () => {

      const data = {
          type : props.type,
          question : props.question,
          options : textValues
      }
     
      setAllQuestions(data);
      let display = JSON.parse(localStorage.getItem("questionSets")) || [];
      console.log("propIndex", props.index);
      display.splice(props.index, 1 , data);
      localStorage.setItem("questionSets",JSON.stringify(display));

      //console.log("display", JSON.parse(display));
      //localStorage.setItem("questionSets",JSON.stringify(data));
      //console.log("All Question",allQuestion)
     // dispatch(addQuestion(allQuestion));

  }

    
    

    const removeRadioButton = async (radioButton, index, textValue) => {
      const updatedRadioButtons = [...radioButtons];
      updatedRadioButtons.splice(index, 1);
      
      const updatedTextValues = [...textValues];
      updatedTextValues.splice(index, 1);
  
      // Update state with the new arrays
      setRadioButtons(updatedRadioButtons);
      setTextValues(updatedTextValues);
    };

  return (
    <div className='h-[100%] w-[100%]  mx-[2%] mb-[3%]'>
       
       {/* <div className='h-[100%] w-[80%] '>
       {/* <input className='w-[100%] bg-slate-50 outline-none' placeholder='Option'></input> */}
       {/* </div>  */}

       {((props.type !== 'textarea') && (props.type!== 'text')) && <div className='h-[100] flex-col  items-center'>
      {radioButtons.map((radioButton, index) => (
        <div key={index} className="mb-2 flex w-[100%]  items-center"> 

         {props.type !=='Dropdown' && <input type={props.type} name="radioGroup" disabled id={radioButton} className="mr-2" />}
         {props.type === 'Dropdown' && <label className='mr-2 flex'>{index + 1}. </label>}

          <input value={textValues[index]} onChange={(e) => textOnChangeHandler(index, e.target.value)} placeholder={radioButton} onClick={()=> addRadioButton(index)}
          className='flex outline-none w-[80%] border-b border-white hover:border-b hover:border-slate-200'></input>
          
          
         {index!==textValues.length -1 &&  <button onClick={() => removeRadioButton(radioButton, index, textValues[index])} className="ml-2 px-2 py-1 ">
            <FontAwesomeIcon icon={faXmark}  className=' rounded-full px-4 py-3 hover:bg-slate-50'/>
          </button> }

        </div>
      ))}
    </div>}

            {(props.type === 'text' || props.type === 'textarea') && <div className='h-[100] flex-col justify-center items-center'>
              <span className='flex text-sm font-light'>{`${props.type === 'text' ? 'Short answer text' : 'Long answer text'}`}</span>
              <div className="mb-2 flex w-[80%] border items-center"> 
                
              </div>

            </div>}








    </div>
  )
}

export default AnswerType
