
import { Switch } from '@chakra-ui/react'
import { faCopy, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import AnswerType from './AnswerType'

function Questions() {
    const [answerType, setAnswerType] = useState("radio");

    const onChangeAnswerType = (e) => {
       if(e.target.value === 'Checkboxes'){
        setAnswerType('checkbox');
       } else if(e.target.value === 'Multiple Choice'){
        setAnswerType('radio')
       } else if(e.target.value === 'Dropdown'){
        setAnswerType(e.target.value)
       } else if(e.target.value === 'Short Answer'){
        setAnswerType('text');
       } else {
        setAnswerType('textarea')
       }
    }
  return (
    <div className='w-[100%] min-h-[250px] bg-white rounded-lg'>
     
     {/* Input and  Type */}
     <div className='min-h-[100px] '>
        <div className='flex min-h-[100%]  justify-between'> 
            <input placeholder='Question'
            className='w-[55%] h-[50px] bg-slate-50 my-[2%] mx-[2%]  text-md px-[2%] border-b-[1px] border-slate-500
            focus:border-b-[2px] focus:border-ui-purple focus:transition-transform duration-300 transform
            hover:bg-slate-100
            outline-none 
            '></input>

            <select className='outline-none border h-[50px] w-[35%] px-[2%] rounded-md mx-[2%] my-[2%]' placeholder='Select option'
            onChange={onChangeAnswerType}
            >
                <option>Multiple Choice</option>
                <option>Checkboxes</option>
                <option>Paragraph</option>
                <option>Short Answer</option>
                <option>Dropdown</option>
            </select>
        </div>
     </div>

     {/* options and answers */}
     <div className='h-[40%] w-[100%] '>
        <AnswerType type={answerType}/>
     </div>

     {/* Footer to copy delete dv */}
     <div className='flex h-[30%] mx-[2%] border-t-[1px] pb-[2%] justify-end'>

        <div className='flex mt-[4%]  w-[50%] mb-[1%] items-center'>
            <div className='flex  w-[100%] h-[100%] justify-end items-center'>
        <FontAwesomeIcon className='ml-[4%] h-[60%] w-[10%] font-light' icon={faCopy} />
        <FontAwesomeIcon className='ml-[8%] h-[60%] w-[10%] font-light' icon={faTrashCan} />  
        </div>
        <div className='flex border-l-2 ml-[20%] w-[100%] '>
            <label className='mx-[10%]'>Required</label>
            <Switch size='md'></Switch>
        </div>
     </div>
     
     </div>

    </div>
  )
}

export default Questions
