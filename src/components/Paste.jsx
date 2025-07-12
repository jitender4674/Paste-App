import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import { NavLink } from 'react-router-dom';

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const[searchTerm, setSearchTerm] = useState('');

  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }




  return (
    <div className='container-main'>
      <input type="search" placeholder='search here' value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} className='search-bar'/>

        {
          filteredData.length > 0 && filteredData.map((paste) => {
            return(
              <div className='paste-container' key={paste._id}>
                <div className='paste-title-container'>
                  {paste.title}
                </div>
                <div className='paste-content-container'>
                  {paste.content}
                </div>

                <div className='paste-button-container'>
                  
                    <NavLink to={`/?pasteId=${paste?._id}`}>
                     <button className='edit-button'>
                      Edit
                      </button>
                    </NavLink>
                  

                 
                    
                    <NavLink to={`/pastes/${paste?._id}`}>
                    <button className='view-button'>
                    view
                    </button>
                    </NavLink>
                  

                  <button className='delete-button' onClick={()=> handleDelete(paste?._id)}>
                    delete
                  </button>

                  <button className='copy-button'>copy</button>

                  <button className='share-button'>share</button>
                </div>
                <div>
                  {paste.createdAt}
                </div>
              </div>
            )
          })
        }
      
        



    </div>
  )
}

export default Paste