import React, { useState } from 'react'
import Navbar from './Navbar'
import FormHeading from './form-elements/FormHeading';
import Questions from './form-elements/Questions';


function CreateForm() {

  const [activeNav, setActiveNav] = useState(0);

  const onNavigatorCLickHandler = (index) => {
    setActiveNav(index);
  }
  return (
    <div className=' h-screen w-[100%]'>
      <Navbar searchBar={false} title={false}/>

      {/* SubNavBar */}
      <div className='flex  w-[100%] h-[4.5%] text-sm font-medium justify-center items-end '>
       <ul className='flex justify-center'>
        <li className='relative mb-[3%]  group cursor-pointer ' onClick={() => onNavigatorCLickHandler(0)}> Questions 
        {activeNav === 0 && <span className='absolute w-[100%] h-1 left-0 top-[115%] rounded-lg bg-[#754bbd] transform transition-transform scale-x-100'></span>}
        {/* <span className='absolute h-1 w-16 rounded-lg bg-purple-600 transform scale-x-0 transition-transform group-hover:scale-x-100'></span> */}
        </li>
        <li className='relative mb-[3%] ml-[12%] group cursor-pointer ' onClick={() => onNavigatorCLickHandler(1)}> Responses
        {activeNav === 1 && <span className='absolute w-[100%] h-1 left-0 top-[115%] rounded-lg bg-[#754bbd] group-hover:bg-[#754bbd]'></span>} </li>
        <li className='relative mb-[3%] ml-[12%] group cursor-pointer ' onClick={() => onNavigatorCLickHandler(2)}> Settings 
        {activeNav === 2 && <span className='absolute w-[100%] h-1 left-0 top-[115%] rounded-lg bg-[#754bbd] group-hover:bg-[#754bbd]'></span>}
        </li>
       </ul>
      </div>

      {/* Body */}
      <div className='flex-col w-[100%] min-h-[88.5%] bg-[#f0ebf8] justify-center items-center border'>

        <div className=' mt-[1%] ml-[28%] w-[44%] min-h-fit'>
          <FormHeading/>
        </div>
        <div className='my-[1%] ml-[28%] w-[44%] min-h-[30%]  '>
          <Questions/>
          
        </div> 
      </div>  




</div>

  )
}

export default CreateForm
