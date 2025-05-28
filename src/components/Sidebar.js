import "./Sidebar.css"
import homeicon from "../assets/Home.png"
import menuicon from "../assets/menu.png"
import fileicon from "../assets/files.png"
import groupicon from "../assets/group.png"
import notificationicon2 from "../assets/notification2.png"
import messageicon from "../assets/message.png"
import profileicon from "../assets/profileicon.png"
import lasticon from "../assets/lasticon.png"
const Sidebar = () =>{
    return(
        <div className="sidebar_container">
            <div className="sidebar_container_1">
                <div className="sidebar_content_1">
                 <figure>
                    <img src={homeicon} alt="homeicon"/>
                 </figure>
            </div>
            <div className="sidebar_content-2"> 
                 <div className="sidebar-content_2_1">
                      <figure>
                        <img src={menuicon} alt="menuicon"/>
                      </figure>
                 </div>
                 <div className="sidebar_content_2_2">
                     <figure>
                        <img src={fileicon} alt="fileicon"/>
                     </figure>
                 </div>
            </div>
            <div className="sidebar_content_3">
                <div className="sidebar_content_3_1">
                     <figure>
                        <img src={groupicon} alt="groupicon"/>
                     </figure>
                </div>
                <div className="sidebar_content_3_2">
                      <figure>
                        <img src={notificationicon2} alt="notification_icon"/>
                      </figure>
                </div>
            </div>
            <div className="sidebar_content_4">
                <figure>
                    <img src={messageicon} alt="messageicon"/>
                </figure>
            </div>
            <div className="sidebar_content_5">
               <figure>
                 <img src={profileicon} alt="profileicon"/>
               </figure>
            </div>
            <div className="sidebar_content_6">
                <figure>
                    <img src={lasticon} alt="lasticon"/>
                </figure>
            </div>
            </div>
            <div className="sidebar_container_2">
                <div className="sidebar_con">

                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;