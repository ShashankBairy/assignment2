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
                  <div className="header_role_x">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.99998 6.0501L1.32498 9.7251C1.18748 9.8626 1.01248 9.93135 0.799976 9.93135C0.587476 9.93135 0.412475 9.8626 0.274975 9.7251C0.137475 9.5876 0.0687256 9.4126 0.0687256 9.2001C0.0687256 8.9876 0.137475 8.8126 0.274975 8.6751L3.94998 5.0001L0.274975 1.3251C0.137475 1.1876 0.0687256 1.0126 0.0687256 0.800098C0.0687256 0.587598 0.137475 0.412597 0.274975 0.275097C0.412475 0.137597 0.587476 0.0688477 0.799976 0.0688477C1.01248 0.0688477 1.18748 0.137597 1.32498 0.275097L4.99998 3.9501L8.67498 0.275097C8.81248 0.137597 8.98748 0.0688477 9.19998 0.0688477C9.41248 0.0688477 9.58747 0.137597 9.72497 0.275097C9.86247 0.412597 9.93123 0.587598 9.93123 0.800098C9.93123 1.0126 9.86247 1.1876 9.72497 1.3251L6.04998 5.0001L9.72497 8.6751C9.86247 8.8126 9.93123 8.9876 9.93123 9.2001C9.93123 9.4126 9.86247 9.5876 9.72497 9.7251C9.58747 9.8626 9.41248 9.93135 9.19998 9.93135C8.98748 9.93135 8.81248 9.8626 8.67498 9.7251L4.99998 6.0501Z" fill="black"/>
</svg>

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