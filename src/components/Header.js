import React, { useEffect } from 'react';
import $ from 'jquery';

const Header = () => {
    useEffect (() =>{
        $(window).on("scroll", function() {
            var scroll = $(window).scrollTop();
            if (scroll > 30) {
                $(".top_bar").addClass("scroll animated slideInDown");
            } else if (scroll < 30) {
                $(".top_bar").removeClass("scroll animated slideInDown")
            }
        });

    },[])
    return (

        <header>
            <div className="top_bar">
                <div className="container">
                    <div className="top_header_content">
                        <div className="menu_logo">
                            <a href="#" title className="menu">
                                <i className="icon-menu" />
                            </a>
                            <a href="index.html" title className="logo">
                                <img src="/assets/images/logo.png" alt="" />
                            </a>
                        </div>{/*menu_logo end*/}
                        <div className="search_form">
                            <form>
                                <input type="text" name="search" placeholder="Search Videos" />
                                <button type="submit">
                                    <i className="icon-search" />
                                </button>
                            </form>
                        </div>{/*search_form end*/}
                        <ul className="controls-lv">
                            <li>
                                <a href="#" title><i className="icon-message" /></a>
                            </li>
                            <li>
                                <a href="#" title><i className="icon-notification" /></a>
                            </li>
                            <li className="user-log">
                                <div className="user-ac-img">
                                    <img src="images/resources/user-img.png" alt="" />
                                </div>
                                <div className="account-menu">
                                    <h4>AZYRUSMAX <span className="usr-status">PRO</span></h4>
                                    <div className="sd_menu">
                                        <ul className="mm_menu">
                                            <li>
                                                <span>
                                                    <i className="icon-user" />
                                                </span>
                                                <a href="#" title>My Channel</a>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="icon-paid_sub" />
                                                </span>
                                                <a href="#" title>Paid subscriptions</a>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="icon-settings" />
                                                </span>
                                                <a href="#" title>Settings</a>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="icon-logout" />
                                                </span>
                                                <a href="#" title>Sign out</a>
                                            </li>
                                        </ul>
                                    </div>{/*sd_menu end*/}
                                    <div className="sd_menu scnd">
                                        <ul className="mm_menu">
                                            <li>
                                                <span>
                                                    <i className="icon-light" />
                                                </span>
                                                <a href="#" title>Dark Theme</a>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <b className="slider round" />
                                                </label>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="icon-language" />
                                                </span>
                                                <a href="#" title>Language</a>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="icon-feedback" />
                                                </span>
                                                <a href="#" title>Send feedback</a>
                                            </li>
                                            <li>
                                                <span>
                                                    <i className="icon-location" />
                                                </span>
                                                <a href="#" title>India</a>
                                                <i className="icon-arrow_below" />
                                            </li>
                                        </ul>
                                    </div>{/*sd_menu end*/}
                                    <div className="restricted-mode">
                                        <h4>Restricted Mode</h4>
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked />
                                            <span className="slider round" />
                                        </label>
                                        <div className="clearfix" />
                                    </div>{/*restricted-more end*/}
                                </div>
                            </li>
                            <li>
                                <a href="Upload_Video.html" title className="btn-default">Upload</a>
                            </li>
                        </ul>{/*controls-lv end*/}
                        <div className="clearfix" />
                    </div>{/*top_header_content end*/}
                </div>
            </div>{/*header_content end*/}
            <div className="btm_bar">
                <div className="container">
                    <div className="btm_bar_content">
                        <nav>
                            <ul>
                                <li><a href="#" title>Pages</a>
                                    <div className="mega-menu">
                                        <ul>
                                            <li><a href="index.html" title>Homepage</a></li>
                                            <li><a href="single_video_page.html" title>Single Video Page</a></li>
                                            <li><a href="Single_Video_Simplified_Page.html" title>Single Video Simplified Page</a></li>
                                            <li><a href="single_video_fullwidth_page.html" title>Singel Video Full Width Page</a></li>
                                            <li><a href="single_video_playlist.html" title>Single Video Playlist Page</a></li>
                                            <li><a href="Upload_Video.html" title>Upload Video Page</a></li>
                                            <li><a href="Upload_Edit.html" title>Upload Video Edit Page</a></li>
                                            <li><a href="Browse_Channels.html" title>Browse channels page</a></li>
                                            <li><a href="Searched_Videos_Page.html" title>Searched videos page</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#" title>Single channel <span className="icon-arrow_below" /></a>
                                                <ul>
                                                    <li><a href="Single_Channel_Home.html" title>Single Channel Home page</a></li>
                                                    <li><a href="Single_Channel_Videos.html" title>Single Channel videos page</a></li>
                                                    <li><a href="Single_Channel_Playlist.html" title>single channel playlist page</a></li>
                                                    <li><a href="Single_Channel_Channels.html" title>single channel channels page</a></li>
                                                    <li><a href="Single_Channel_About.html" title>single channel about page</a></li>
                                                    <li><a href="Single_Channel_Products.html" title>single channel products page</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="History_Page.html" title>History page</a></li>
                                            <li><a href="Browse_Categories.html" title>Browse Categories Page</a></li>
                                            <li><a href="Updates_From_Subs.html" title>Updates from subscription page</a></li>
                                            <li><a href="login.html" title>login page</a></li>
                                            <li><a href="signup.html" title>signup page</a></li>
                                            <li><a href="User_Account_Page.html" title>User account page</a></li>
                                        </ul>
                                    </div>
                                    <div className="clearfix" />
                                </li>
                                <li><a href="Browse_Categories.html" title>Categories</a></li>
                                <li><a href="Browse_Channels.html" title>Channels</a></li>
                                <li><a href="#" title>Trending</a></li>
                                <li><a href="Single_Channel_Home.html" title>LIVE</a></li>
                                <li><a href="#" title>Movies</a></li>
                            </ul>
                        </nav>{/*navigation end*/}
                        <ul className="shr_links">
                            <li>
                                <h3>Go to : </h3>
                            </li>
                            <li>
                                <button data-toggle="tooltip" data-placement="top" title="Like">
                                    <i className="icon-like" />
                                </button>
                            </li>
                            <li>
                                <button data-toggle="tooltip" data-placement="top" title="Watch later">
                                    <i className="icon-watch_later" />
                                </button>
                            </li>
                            <li>
                                <button data-toggle="tooltip" data-placement="top" title="Playlist">
                                    <i className="icon-playlist" />
                                </button>
                            </li>
                            <li>
                                <button data-toggle="tooltip" data-placement="top" title="Purchased">
                                    <i className="icon-purchased" />
                                </button>
                            </li>
                            <li>
                                <button data-toggle="tooltip" data-placement="top" title="History">
                                    <i className="icon-history" />
                                </button>
                            </li>
                        </ul>{/*shr_links end*/}
                        <ul className="vid_thums">
                            <li>
                                <a className="active" href="#" title><i className="icon-grid" /></a>
                            </li>
                            <li>
                                <a href="#" title>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108 108" xmlSpace="preserve">
                                        <rect width={63} height={45} />
                                        <rect x={81} width={27} height={45} />
                                        <rect x={45} y={63} width={63} height={45} />
                                        <rect y={63} width={27} height={45} />
                                    </svg>
                                </a>
                            </li>
                        </ul>{/*vid_status end*/}
                        <div className="clearfix" />
                    </div>{/*btm_bar_content end*/}
                </div>
            </div>{/*btm_bar end*/}
        </header>

    );
}
export default Header;