import React, { useContext } from 'react';
import './Main.css'
import { FaCircleUser,FaRegCompass,FaRegMessage, FaCode,FaMicrophone } from "react-icons/fa6";
import { FaLightbulb,FaUserAlt } from "react-icons/fa";
import { GrGallery,GrSend  } from "react-icons/gr";
import { GiGemini } from "react-icons/gi";
import { Context } from '../../Context/Context';
const Main=()=>{
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
    return(
        <div className='main'>
            <div className='nav'>
                <p>Gemini </p>
                <img src="https://assets-global.website-files.com/636b968ac38dd1495ec4edcd/63c97bbbdeecd68494958b5d_manga-character_AI%20Avatar%20Dyvo.webp"  />
                
            </div>
            <div className='main-container'>

                {!showResult
                ?<>
                 <div className='greet'>
                    <p><span>Hello,Harish.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <div className='Icon'> <FaRegCompass /></div>
                       
                    </div>
                    <div className='card'>
                        <p>Briefly summarize this concept : urban planning</p>
                        <div className='Icon'> 
                        <FaLightbulb />    
                        </div>           
                </div>
                <div className='card'>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <div className='Icon'> 
                <FaRegMessage />
                </div>
            </div>
            <div className='card'>
                <p>Improve the readability of the following code</p>
                <div className='Icon'> 
                <FaCode />
            </div>
            </div>
             </div> 
                </>
            :<div className='result'>
                <div className='result-title'>
                <img src="https://assets-global.website-files.com/636b968ac38dd1495ec4edcd/63c97bbbdeecd68494958b5d_manga-character_AI%20Avatar%20Dyvo.webp"  />
                <p>{recentPrompt}</p>
                </div>
                <div className='result-data'>
                <img src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/IMG_20240224_201158.jpg'/>
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                    </div>
                
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                 }
                </div>
                </div>
                }
            
         <div className='main-bottom'>
            <div className='search-box'>
                <input onChange={(e)=>setInput(e.target.value)} value={input} type='text'placeholder='Enter a prompt here'/>
                <div>
                <GrGallery />
                <FaMicrophone />
                {input?<GrSend onClick={()=>onSent()}/>:null}
                
                </div>
            </div>
             <p className='bottom-info'>
                Gemini may display info,including about people, so double-check its responses.Yours privacy and Gemini Apps
             </p>
         </div>
        </div>
        
        </div>
        
    )
}
export default Main