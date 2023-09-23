
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function AnswerType(props) {
    const [radioButtons, setRadioButtons] = useState(['Option 1']);
    const [counter, setCounter] = useState(1);
    const [textValues, setTextValues] = useState(['Option 1']);

    const textOnChangeHandler = (index, newValue) => {
       const newTextValue = [...textValues];
       newTextValue[index] = newValue;
       setTextValues(newTextValue);

    }
    
    const addRadioButton = (index) => {
       
        if(index === radioButtons.length - 1){
      const newRadioButton = `Option ${counter + 1}`;

      const newTextValue = [...textValues];
          
      setCounter(counter + 1)
      setRadioButtons([...radioButtons, newRadioButton]);
     
      
      setTextValues(newTextValue);

      console.log(radioButtons);
      console.log(textValues);
        }
    };
  
    const removeRadioButton = (radioButton, index) => {
      const updatedRadioButtons = radioButtons.filter((rb) => rb !== radioButton);
      setRadioButtons(updatedRadioButtons);

      const updateTextBox = textValues.filter((text) => text !== textValues[index]);
      setTextValues(updateTextBox);
    };
    
  return (
    <div className='h-[100%] w-[100%]  mx-[2%] mb-[3%]'>
       
       {/* <div className='h-[100%] w-[80%] '>
       {/* <input className='w-[100%] bg-slate-50 outline-none' placeholder='Option'></input> */}
       {/* </div>  */}

       {((props.type !== 'textarea') || (props.type!== 'text')) && <div className='h-[100] flex-col  items-center'>
      {radioButtons.map((radioButton, index) => (
        <div key={index} className="mb-2 flex w-[100%]  items-center"> 

         {props.type !=='Dropdown' && <input type={props.type} name="radioGroup" id={radioButton} className="mr-2" />}
         {props.type === 'Dropdown' && <label className='mr-2 flex'>{index + 1}. </label>}

          <input value={textValues[index]} onChange={(e) => textOnChangeHandler(index, e.target.value)} placeholder={radioButton} onClick={()=> addRadioButton(index)}
          className='flex outline-none w-[80%] border-b border-white hover:border-b hover:border-slate-200'></input>
          
          
         { <button onClick={() => removeRadioButton(radioButton, index)} className="ml-2 px-2 py-1 ">
            <FontAwesomeIcon icon={faXmark} />
          </button> }

        </div>
      ))}
    </div>}




    </div>
  )
}

export default AnswerType
