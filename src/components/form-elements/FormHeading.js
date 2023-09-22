
import React, { useState } from 'react'

function FormHeading() {

    const [formTitle, setFormTitle] = useState("Untitled Form");
    const [formDescription, setFormDescription] = useState("Form Description");
    const [selectedDiv, setSelectedDiv] = useState(-1);

    const divOnClickHandler = (index) => {
        setSelectedDiv(index)
    }
    
    const formTitleOnChangeHandler = (e) => {
        setFormTitle(e.target.value)
    }

    const formDescriptionOnChangeHandler = (e) => {
        setFormDescription(e.target.value);
        const textarea = e.target;

    // Adjust the textarea height based on its content
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
    }
  return (
    <div className='min-h-[100%] w-[100%] rounded-lg bg-white' onClick={()=> divOnClickHandler(-1)}>
        <div className=' w-[100%] h-3 bg-[#754bbd] rounded-t-lg '>        </div>
        
        <div className=' flex w-[100%] h-[100%]' >
           <div className={`w-2 h-auto ${selectedDiv===-1 ? 'bg-[#4285f4]' : 'bg-white' } rounded-bl-lg`}>
            </div>
          
            <div className='w-[98%] h-[100%]'>
                <input value={formTitle} placeholder='Untitled Form'
                     onChange={formTitleOnChangeHandler}
                className={`text-3xl font-medium w-[96%] mt-[2%] h-[30%] outline-none whitespace-normal resize-y
                 ${selectedDiv === -1 ? 'border-b-[1px]' : ' border-transparent'} px-[0.5%] py-[1%]
                focus:border-b-[2px] focus:border-[#754bbd] focus:transition-transform duration-300 transform `}
                />

                <textarea value={formDescription} onChange={formDescriptionOnChangeHandler} placeholder='Form Description' 
                className={`w-[96%] outline-none mt-[1%] ${selectedDiv === -1 ? 'border-b-[1px]' : ' border-transparent'}  px-[0.5%] mb-3
                focus:border-b-[2px] focus:border-[#754bbd] focus:transition-transform duration-300 transform `}
                  ></textarea>


            </div>
        </div>



    </div>
  )
}

export default FormHeading
