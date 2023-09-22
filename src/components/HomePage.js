import React from 'react'
import plusIcon from '../assets/plus.png'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


function HomePage() {
    const navigate = useNavigate();
    const onCreateNewFormClick = () => {
        navigate("/new-form");
    }
    
    

    return (
        <div className=' w-screen h-screen'>

            {/* Header */}
            <Navbar title={true}/>

            {/* Select Form  */}
            <div className='h-[28%] bg-slate-100'>
               <div className='flex w-[100%] h-[22%]'>
                <span className='ml-[17%] mt-[1%]'>Start a new form</span>
               </div>

               <div className='flex  w-[100%] h-[51%]' onClick={onCreateNewFormClick}>
                <div className=' flex ml-[16.5%] h-[100%] w-[10%] bg-white border rounded-lg items-center justify-center hover:border-blue-700 cursor-pointer'>
                <img className='border h-[71%]'  src={plusIcon} alt='plus' />
                </div>
               </div>

               <div className='flex w-[100%] '>
                <span className='ml-[17%] mt-[0.5%] text-sm font-medium'>Blank</span>
               </div>
            </div>

            {/* Recent Forms */}
            <div className='h-[60%] border'>
            <span className='flex mt-[1%] ml-[16%] text-md font-medium'>Recent forms</span>
            <div className='flex-col h-[25%] w-[67%] ml-[16%] mt-[2%] shadow-sm  rounded-sm items-center justify-center border-[0.01px]'>
               <h1 className='pt-[3%] '>No forms yet <br/> Click + to create a new form</h1>
            </div>
            </div>


        </div>
    )
}

export default HomePage
