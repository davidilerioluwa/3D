import React from 'react'
import CustomButton from './CustomButton'

const AiPicker = ({prompt,setPrompt,generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
        className='ask Ai'
        // value={prompt}
        rows={5}
        placeholder='enter a prompt'
        onChange={(e)=>setPrompt(e.target.value)}
      />  
      <div className='flex flex-wrap gap-3'>
        {generatingImg?(
          <CustomButton
            type="outline"
            title="asking Ai..."
            customStyles="text-xs"
          />):
          (<>
            <CustomButton
              type="outline"
              title="Ai Logo"
              handleClick={()=>{handleSubmit("logo")}}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="Ai Full"
              handleClick={()=>{handleSubmit("full")}}
              customStyles="text-xs"
            />
          </>)
      }
      </div>
    </div>
  )
}

export default AiPicker