import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';


const ViewPaste = () => {

  const {id} = useParams();
  console.log(id)

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];


  return (
    <div className='view-paste-container'>
      <h2 className='view-paste-title'>
        {paste.title}
        </h2>
        <p className='view-paste-content'>
            <input type="text" value={paste.content} />
        </p>
      
    </div>
  )
}

export default ViewPaste