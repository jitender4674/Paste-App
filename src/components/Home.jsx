import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes,updateToPastes,removeFromPastes } from '../redux/pasteSlice'


const Home = () => {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes)

    useEffect(() =>{
        if(pasteId){
          const paste = allPastes.find((p) => p._id === pasteId)
          setTitle(paste.title);
          setValue(paste.content);
        }else{
          setTitle('');
          setValue('');
        }
        
      }, [pasteId])



    function createPaste(){
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata"  // for IST
      };


        const paste = {
          title: title,
          content: value,
          _id: pasteId || Date.now().toString(36),
        createdAt : new Date().toLocaleString("en-IN",options),      
      }


      


      if(pasteId){
        //update
        dispatch(updateToPastes(paste));
      }else{
        //create
        if(paste.title !== '' && paste.value !== ''){
          dispatch(addToPastes(paste));
        }
      }

      //after creation or updation
      setTitle('');
      setValue('');
      setSearchParams({});

    }

  return (
    <div className='home-container'>
        <div className='home-container-1'>
          <input type="text" 
        placeholder='Enter title here'
         value={title} onChange={(e) => setTitle(e.target.value)} className='paste-title-input'/>

        <button onClick={createPaste} className='create-update-button'>
            {
              pasteId ? "Update Paste" : "Create My Paste"
            }
        </button>
        </div>

        <div className='home-container-2'>
         <textarea name="" id="" value={value} placeholder='Enter paste content'
         onChange={(e) => setValue(e.target.value)}
         rows={20}  className="paste-content-input">
         </textarea>
        </div>
    </div>
  ) 
}

export default Home