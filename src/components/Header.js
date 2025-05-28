import "./Header.css"
import logo from "../assets/sclogo.png"
import notification from "../assets/notification.png"
import bell from "../assets/bell.png"
import profilelogo from "../assets/Ellipse 6.png"
import downarrow from "../assets/down_arrow.png"
import searchIcon from "../assets/Search.png"
import greenicon from "../assets/greenicon.png"
const Header = ()=>{
    return(
        <div className="header_container">
           <div className="header-logo">
               <figure>
                 <img src={logo} alt="srichaitanyalogo"/>
               </figure>
           </div>
           <div className="header_middle">
              <div className="header_role">
                  <figure>
                     <img src={greenicon} alt="greenicon"/>
                  </figure>
                  <div className="header_role_text">
                      <p>Student</p>
                  </div>
                
              </div>
              <div className="header_input">
                  <input type="text" required/>
                  <div className="header_search_icon">
                      <figure>
                         <img src={searchIcon} alt="searchIcon"/>
                      </figure>
                  </div>
              </div> 
           </div>
            <div className="header_right">
                 <div className="notification_icon">
                    <figure>
                        <img src={notification} alt="notification_icon" />
                    </figure>
                 </div>
                 <div className="bell_icon">
                    <figure>
                        <img src={bell} alt="bell_icon"/>
                    </figure>
                 </div>
                 <div className="header_profile">
                    <div className="header_profile_logo">
                       <figure>
                         <img src={profilelogo} alt="profilelogo"/>
                       </figure>
                    </div>
                    <div className="header_profile_content">
                         <p>HYD 256789</p>
                    </div>
                    <div className="header_profile_arrow_down"> 
                         <figure>
                            <img src={downarrow} alt="downarrow"/>
                         </figure>
                    </div>
                 </div>
              </div>
        </div>
    )
}

export default Header;