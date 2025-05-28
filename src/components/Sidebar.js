import "./Sidebar.css"
import homeicon from "../assets/Home.png"
import menuicon from "../assets/menu.png"
import fileicon from "../assets/files.png"
import groupicon from "../assets/group.png"
import notificationicon2 from "../assets/notification2.png"
import messageicon from "../assets/message.png"
import profileicon from "../assets/profileicon.png"
import lasticon from "../assets/lasticon.png"
import icon1 from "../assets/1.png" 
import cottonicon from "../assets/cotton 1.png"
import helpicon from "../assets/help.png"
const Sidebar = () =>{
    return(
        <div className="sidebar_container">
            <div className="sidebar_container_1">
                <div className="sidebar_content">
                 <figure>
                    <img src={homeicon} alt="homeicon"/>
                 </figure>
            </div>
            <hr className="first_hr"></hr>
            <div className="sidebar_content"> 
                 <div className="sidebar-content_1">
                      <figure>
                        <img src={menuicon} alt="menuicon"/>
                      </figure>
                 </div>
                 <div className="sidebar_content_2">
                     <figure>
                        <img src={fileicon} alt="fileicon"/>
                     </figure>
                 </div>
            </div>
            <hr className="first_hr"></hr>
            <div className="sidebar_content">
                <div className="sidebar_content_1">
                     <figure>
                        <img src={groupicon} alt="groupicon"/>
                     </figure>
                </div>
                <div className="sidebar_content_2">
                      <figure>
                        <img src={notificationicon2} alt="notification_icon"/>
                      </figure>
                </div>
            </div>
            <hr className="first_hr"></hr>
            <div className="sidebar_content">
                <figure>
                    <img src={messageicon} alt="messageicon"/>
                </figure>
            </div>
            <hr className="first_hr"></hr>
            <div className="sidebar_content">
               <figure>
                 <img src={profileicon} alt="profileicon"/>
               </figure>
            </div>
            <hr className="first_hr"></hr>
            <div className="sidebar_content">
                <figure>
                    <img src={lasticon} alt="lasticon"/>
                </figure>
            </div>
            </div>
            <div className="sidebar_container_2">
                <div className="sidebar_content_2_1">
                    <figure>
                        <img src={icon1} alt="icon_1"/>
                    </figure>
                    <hr className="second_hr"></hr>
                    <figure>
                        <img src={cottonicon} alt="cottonicon"/>
                    </figure>
                    <hr className="second_hr"></hr>
                    <figure>
                        <img src={helpicon} alt="helpicon"/>
                    </figure>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;