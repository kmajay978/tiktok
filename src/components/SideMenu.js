import React, { useEffect } from 'react'
import $ from 'jquery'

const SideMenu = () => {
    useEffect(() => {
        var header_height = $(".top_bar").innerHeight();
    
        $(".side_menu").css({
            "top": header_height
        });
    
        $(".menu").on("click", function(){
          $(".side_menu").toggleClass("active");
          return false;
        });
    
        $("html").on("click", function() {
            $(".side_menu").removeClass("active");
        });
        $(".menu, .side_menu").on("click", function(e){
            e.stopPropagation();
        });
    
        $(".user-log").on("click", function() {
            $(".account-menu").slideToggle();
        });
        $("html").on("click", function() {
            $(".account-menu").slideUp();
        });
        $(".user-log, .account-menu").on("click", function(e) {
            e.stopPropagation();
        });
    
    }, [])

    return (
            <div className="side_menu">
                <div className="form_dvv">
                    <a href="#" title className="login_form_show">Sign in</a>
                </div>
                <div className="sd_menu">
                    <ul className="mm_menu">
                        <li>
                            <span>
                                <i className="icon-home" />
                            </span>
                            <a href="#" title>Home</a>
                        </li>
                        <li>
                            <span>
                                <i className="icon-fire" />
                            </span>
                            <a href="#" title>Trending</a>
                        </li>
                        <li>
                            <span>
                                <i className="icon-subscriptions" />
                            </span>
                            <a href="#" title>Subscriptions</a>
                        </li>
                    </ul>
                </div>{/*sd_menu end*/}
                <div className="sd_menu">
                    <h3>Library</h3>
                    <ul className="mm_menu">
                        <li>
                            <span>
                                <i className="icon-history" />
                            </span>
                            <a href="#" title>History</a>
                        </li>
                        <li>
                            <span>
                                <i className="icon-watch_later" />
                            </span>
                            <a href="#" title>Watch Later</a>
                        </li>
                        <li>
                            <span>
                                <i className="icon-purchased" />
                            </span>
                            <a href="#" title>Purchases</a>
                        </li>
                        <li>
                            <span>
                                <i className="icon-like" />
                            </span>
                            <a href="#" title>Liked Videos</a>
                        </li>
                        <li>
                            <span>
                                <i className="icon-play_list" />
                            </span>
                            <a href="#" title>Playlist</a>
                        </li>
                    </ul>
                </div>{/*sd_menu end*/}
                <div className="sd_menu subs_lst">
                    <h3>Subscriptions</h3>
                    <ul className="mm_menu">
                        <li>
                            <span className="usr_name">
                                <img src="/assets/images/resources/th1.png" alt="" />
                            </span>
                            <a href="#" title>Dr Disrespect</a>
                            <small>3</small>
                        </li>
                        <li>
                            <span className="usr_name">
                                <img src="/assets/images/resources/th2.png" alt="" />
                            </span>
                            <a href="#" title>ASMR</a>
                            <small>6</small>
                        </li>
                        <li>
                            <span className="usr_name">
                                <img src="/assets/images/resources/th3.png" alt="" />
                            </span>
                            <a href="#" title>Rivvrs</a>
                            <small>2</small>
                        </li>
                        <li>
                            <span className="usr_name">
                                <img src="/assets/images/resources/th4.png" alt="" />
                            </span>
                            <a href="#" title>The Verge</a>
                            <small>11</small>
                        </li>
                        <li>
                            <span className="usr_name">
                                <img src="/assets/images/resources/th5.png" alt="" />
                            </span>
                            <a href="#" title>Seeker</a>
                            <small>3</small>
                        </li>
                        <li>
                            <span className="usr_name">
                                <img src="/assets/images/resources/sn.png" alt="" />
                            </span>
                            <a href="#" title>Music</a>
                            <small>20</small>
                        </li>
                    </ul>
                    <a href="#" title className="more-ch"><i className="icon-arrow_below" /> Show 14 more</a>
                </div>{/*sd_menu end*/}
                <div className="sd_menu">
                    <ul className="mm_menu">
                        <li>
                            <span>
                                <i className="icon-settings" />
                            </span>
                            <a href="#" title>Settings</a>
                        </li>
                        <li>
                            <span>
                                <i className="icon-flag" />
                            </span>
                            <a href="#" title>Report history</a>
                        </li>
                        <li>
                            <span>
                                <i className="icon-logout" />
                            </span>
                            <a href="#" title>Sign out</a>
                        </li>
                    </ul>
                </div>{/*sd_menu end*/}
                <div className="sd_menu m_linkz">
                    <ul className="mm_menu">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Community Rules </a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Contracts </a></li>
                        <li><a href="#">Donate</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                    <span>azyrusthemes</span>
                </div>{/*sd_menu end*/}
                <div className="sd_menu bb-0">
                    <ul className="social_links">
                        <li>
                            <a href="#" title>
                                <i className="icon-facebook-official" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title>
                                <i className="icon-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#" title>
                                <i className="icon-instagram" />
                            </a>
                        </li>
                    </ul>{/*social_links end*/}
                </div>{/*sd_menu end*/}
                <div className="dd_menu" />
            </div>
        
    );
}
export default SideMenu;