
import { useState } from 'react';
import formIcon from '../assets/forms.png'
import { useSelector } from 'react-redux';
function Navbar(props) {
    const image = useSelector((state) => state.user.imageUrl);
    const [formTitle, setFormTitle] = useState("Untitled form");

    const titleOnChangeHandler = (e) => {
        setFormTitle(e.value);
    }

    return (
        <div className='flex items-center justify-between h-[7%]  '>
            <div className='flex items-center w-[25%] '>
                <img className='ml-5 h-[9%] w-[9%] ' src={formIcon} alt='gforms' />
                {props.title && <p className='ml-3 font-normal text-2xl'>Forms</p>}
                {!props.title && <input className='ml-3 text-lg font-normal max-w-[60%] h-[100%] border-none selection:border-b-8' type='text' value={formTitle} onChange={titleOnChangeHandler}></input>}
            </div>

            <div className='flex w-[50%] h-[80%] items-center'>
                {props.searchBar && <input className='h-[100%] w-[100%] px-[2%] rounded-xl bg-slate-100' type='text' placeholder='Search'></input>}
            </div>

            {image && <div className='flex w-[25%]  items-center justify-end mr-5'>
                <img className='rounded-full w-[8%] h-[8%] ' src={image} alt='gforms' />
            </div>}
        </div>
    )
}

export default Navbar
