import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { MdMenu, MdHistory } from "react-icons/md";
import { BsNutFill, BsPlusLg } from "react-icons/bs";
import { FaRegMessage, FaRegCircleQuestion } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { Context } from '../../Context/Context';
const Sidebar = () => {

  const [extended, setExtended] = useState(false)
 const{onSent,prevPrompts,setRecentPrompt,newChat}= useContext(Context)
 const loadprompt=async(prompt)=>{
  setRecentPrompt(prompt)
  await onSent(prompt)
 }
  return (
    <div className='Sidebar'>
      <div className='top'>
        <br>
        </br>
        <div onClick={()=>setExtended(prev=>!prev)} className='menu'><MdMenu />
        </div>
        <br>
        </br>
        <div onClick={()=>newChat()} className='new-chat'><BsPlusLg />
          {extended ? <p>new chat</p> : null}
        </div>
        {extended
          ? <div className='recent'>
            <p className='recent-title'>Recent</p>
              {prevPrompts.map((item,index)=>{
              return( 
                <div onClick={()=>loadprompt(item)} className='recent-entry'><FaRegMessage />
              <p>{item.slice(0,18)} ...</p>
            </div>
              )
             })} 
            
          </div>
          : null
        }
          </div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <div className='bottom'>
        <div className='bottom-item recent-entry'><FaRegCircleQuestion />
         {extended? <p> Help</p>:null}
        </div>
        <br>
        </br>

        <div className='bottom-item recent-entry'><MdHistory />
          {extended?<p> Activity</p>:null}
        </div>
        <br>
        </br>

        <div className='bottom-item recent-entry'><IoIosSettings />
          {extended?<p> Settings</p>:null}
        </div>

      </div>
    </div>



  )
}
export default Sidebar