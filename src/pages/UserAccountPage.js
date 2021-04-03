import React from 'react';
import Flatpickr from "react-flatpickr";
import Header from '../components/Header';
import SideMenu from '../components/SideMenu'

const UserAccountPage = () => {
    return (
        <div className="wrapper">
         <Header/>
         <SideMenu/>
            <section className="user-account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="sidebar">
                                <div className="widget video_info pr sp">
                                    <span className="vc_hd">
                                        <img src="/assets/images/resources/sn.png" alt="" />
                                    </span>
                                    <h4>ScereBro</h4>
                                    <p>since: Dec 17, 2017 </p>
                                    <span>Last Login: 42 minutes ago</span>
                                </div>{/*video_info pr*/}
                                <div className="widget account">
                                    <h2 className="hd-uc"> <i className="icon-user" /> Account</h2>
                                    <ul>
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Blocked Users</a></li>
                                        <li><a href="#"> Change Password</a></li>
                                        <li><a href="#">Change Email</a></li>
                                        <li><a href="#">Manage Subscriptions </a></li>
                                        <li><a href="#">Contacts Manager </a></li>
                                    </ul>
                                </div>{/*account end*/}
                                <div className="widget notifications">
                                    <h2 className="hd-uc"><i className="icon-notification" />Notifications</h2>
                                    <a href="#" title>Manage Notifications</a>
                                </div>{/*notifications end*/}
                                <div className="widget donation">
                                    <h2 className="hd-uc"><i className="icon-donations" />Donations </h2>
                                    <ul>
                                        <li><a href="#">Manage Donations </a></li>
                                        <li><a href="#">Add Credit</a></li>
                                    </ul>
                                </div>{/*donation end*/}
                                <div className="widget chanel-pro">
                                    <h2 className="hd-uc"><i className="icon-preferences" />Channel and Profile</h2>
                                    <ul>
                                        <li><a href="#"> Account Settings</a></li>
                                        <li><a href="#"> Profile Settings </a></li>
                                        <li><a href="#"> Change Avatar</a></li>
                                    </ul>
                                </div>{/*chanel-pro end*/}
                                <div className="widget vid-ac">
                                    <h2 className="hd-uc"><i className="icon-play" />Videos </h2>
                                    <ul>
                                        <li><a href="#">Uploaded Videos </a></li>
                                        <li><a href="#"> Favorite Videos </a></li>
                                    </ul>
                                </div>{/*vid-ac end*/}
                                <div className="widget playlist">
                                    <h2 className="hd-uc"><i className="icon-add_to_playlist" />Playlists</h2>
                                    <span><a href="#"> Manage Playlists</a></span>
                                </div>{/*playlist end*/}
                                <div className="widget messages">
                                    <h2 className="hd-uc"><i className="icon-message" /> Messages</h2>
                                    <ul>
                                        <li><a href="#">New Message</a></li>
                                        <li><a href="#"> Inbox (10)</a></li>
                                        <li><a href="#"> Sent</a></li>
                                    </ul>
                                </div>{/*messages end*/}
                                <div className="widget contacts">
                                    <h2 className="hd-uc"><i className="icon-group" />Contacts</h2>
                                    <ul>
                                        <li><a href="#" title> Manage Contacts</a></li>
                                        <li><a href="#" title>Add Contact </a></li>
                                    </ul>
                                </div>{/* Contacts  end*/}
                            </div>{/*sidebar end*/}
                        </div>
                        <div className="col-lg-9">
                            <div className="video-details">
                                <div className="latest_vidz">
                                    <div className="latest-vid-option">
                                        <h2 className="hd-op"> Latest Videos</h2>
                                        <a href="#" title className="op-1">Video Details</a>
                                        <a href="#" title className="op-2"> Options</a>
                                        <div className="clearfix" />
                                    </div>{/*latest-vid-option end*/}
                                    <div className="vidz_list">
                                        <div className="tb-pr">
                                            <div className="row">
                                                <div className="col-xl-8 col-lg-9 col-md-9 col-sm-12">
                                                    <div className="tab-history acct_page">
                                                        <div className="videoo">
                                                            <div className="vid_thumbainl ms br">
                                                                <a href="single_video_page.html" title>
                                                                    <img src="/assets/images/resources/vide1.png" alt="" />
                                                                    <span className="vid-time">30:32</span>
                                                                    <span className="watch_later">
                                                                        <i className="icon-watch_later_fill" />
                                                                    </span>
                                                                </a>
                                                            </div>{/*vid_thumbnail end*/}
                                                            <div className="video_info ms br">
                                                                <h3><a href="single_video_page.html" title>Kingdom Come: Deliverance Funny Moments and Fails Compilation</a></h3>
                                                                <h4><a href="Single_Channel_Home.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                                <span>686K views . 1 week ago</span>
                                                                <ul>
                                                                    <li><span className="br-1">Inactive</span></li>
                                                                    <li><span className="br-2">Successful</span></li>
                                                                </ul>
                                                            </div>
                                                            <div className="clearfix" />
                                                        </div>{/*videoo end*/}
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-3 col-md-3 col-sm-12">
                                                    <div className="icon-list">
                                                        <ul>
                                                            <li><a href="#" title><i className="icon-play" /></a></li>
                                                            <li><a href="#" title><i className="icon-pencil" /></a></li>
                                                            <li><a href="#" title><i className="icon-cancel" /></a></li>
                                                        </ul>
                                                    </div>{/*icon-list end*/}
                                                </div>
                                            </div>
                                        </div>{/*tb-pr end*/}
                                        <div className="tb-pr">
                                            <div className="row">
                                                <div className="col-xl-8 col-lg-9 col-md-9 col-sm-12">
                                                    <div className="tab-history acct_page">
                                                        <div className="videoo">
                                                            <div className="vid_thumbainl ms br">
                                                                <a href="single_video_page.html" title>
                                                                    <img src="/assets/images/resources/vide2.png" alt="" />
                                                                    <span className="vid-time">30:32</span>
                                                                    <span className="watch_later">
                                                                        <i className="icon-watch_later_fill" />
                                                                    </span>
                                                                </a>
                                                            </div>{/*vid_thumbnail end*/}
                                                            <div className="video_info ms br">
                                                                <h3><a href="single_video_page.html" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                                                                <h4><a href="Single_Channel_Home.html" title>Eros Now</a></h4>
                                                                <span>283K views . 3 months ago</span>
                                                                <ul>
                                                                    <li><span className="br-1">Inactive</span></li>
                                                                    <li><span className="br-2">Successful</span></li>
                                                                </ul>
                                                            </div>
                                                            <div className="clearfix" />
                                                        </div>{/*videoo end*/}
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-3 col-md-3 col-sm-12">
                                                    <div className="icon-list">
                                                        <ul>
                                                            <li><a href="#" title><i className="icon-play" /></a></li>
                                                            <li><a href="#" title><i className="icon-pencil" /></a></li>
                                                            <li><a href="#" title><i className="icon-cancel" /></a></li>
                                                        </ul>
                                                    </div>{/*icon-list end*/}
                                                </div>
                                            </div>
                                        </div>{/*tb-pr end*/}
                                        <div className="tb-pr">
                                            <div className="row">
                                                <div className="col-xl-8 col-lg-9 col-md-9 col-sm-12">
                                                    <div className="tab-history acct_page">
                                                        <div className="videoo">
                                                            <div className="vid_thumbainl ms br">
                                                                <a href="single_video_page.html" title>
                                                                    <img src="/assets/images/resources/vide3.png" alt="" />
                                                                    <span className="vid-time">30:32</span>
                                                                    <span className="watch_later">
                                                                        <i className="icon-watch_later_fill" />
                                                                    </span>
                                                                </a>
                                                            </div>{/*vid_thumbnail end*/}
                                                            <div className="video_info ms br">
                                                                <h3><a href="single_video_page.html" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                                                                <h4><a href="Single_Channel_Home.html" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                                <span>2.6M views . 2 months ago</span>
                                                                <ul>
                                                                    <li><span className="br-3">Active</span></li>
                                                                    <li><span className="br-2">Successful</span></li>
                                                                </ul>
                                                            </div>
                                                            <div className="clearfix" />
                                                        </div>{/*videoo end*/}
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-lg-3 col-md-3 col-sm-12">
                                                    <div className="icon-list">
                                                        <ul>
                                                            <li><a href="#" title><i className="icon-play" /></a></li>
                                                            <li><a href="#" title><i className="icon-pencil" /></a></li>
                                                            <li><a href="#" title><i className="icon-cancel" /></a></li>
                                                        </ul>
                                                    </div>{/*icon-list end*/}
                                                </div>
                                            </div>
                                        </div>{/*tb-pr end*/}
                                    </div>{/*vidz_list end*/}
                                </div>{/*latest_vidz end*/}
                                <div className="blocked-users">
                                    <h2 className="hd-op">  Blocked Users </h2>
                                    <form>
                                        <input type="text" placeholder=" Separate usernames by comma" />
                                        <button type="submit"> Update</button>
                                    </form>
                                    <ul className="optz_list">
                                        <li><a href="#" title>User</a></li>
                                        <li><a href="#" title>Options</a></li>
                                    </ul>{/*optz_list end*/}
                                    <div className="clearfix" />
                                </div>{/*Blocked Users end*/}
                                <div className="blocked-pr">
                                    <div className="blocked-vcp">
                                        <div className="vcp_inf">
                                            <span className="vc_hd">
                                                <img src="/assets/images/resources/sn.png" alt="" />
                                            </span>
                                            <div className="vc_info st">
                                                <h4><a href="#" title>ScereBro</a></h4>
                                                <span>Blocked on Oct 22, 2017</span>
                                            </div>
                                        </div>{/*vcp_inf end*/}
                                        <a href="#" title className="play_ms">
                                            <i className="icon-blocked" />
                                        </a>
                                    </div>{/*blocked-vcp*/}
                                    <div className="blocked-vcp">
                                        <div className="vcp_inf">
                                            <span className="vc_hd">
                                                <img src="/assets/images/resources/th1.png" alt="" />
                                            </span>
                                            <div className="vc_info st">
                                                <h4><a href="#" title>Doge</a></h4>
                                                <span>Blocked 20 hours ago</span>
                                            </div>
                                        </div>{/*vcp_inf end*/}
                                        <a href="#" title className="play_ms">
                                            <i className="icon-blocked" />
                                        </a>
                                    </div>{/*blocked-vcp*/}
                                    <div className="blocked-vcp">
                                        <div className="vcp_inf">
                                            <span className="vc_hd">
                                                <img src="/assets/images/resources/th3.png" alt="" />
                                            </span>
                                            <div className="vc_info st">
                                                <h4><a href="#" title>Menji</a></h4>
                                                <span>Blocked 1 week ago</span>
                                            </div>
                                        </div>{/*vcp_inf end*/}
                                        <a href="#" title className="play_ms">
                                            <i className="icon-blocked" />
                                        </a>
                                    </div>{/*blocked-vcp*/}
                                </div>{/*blocked-pr end*/}
                                <div className="change-pswd">
                                    <h2 className="hd-op">Change password</h2>
                                    <form>
                                        <div className="ch-pswd">
                                            <input type="password" name="old_password" placeholder="Old Password" />
                                        </div>{/*ch-pswd end*/}
                                        <div className="ch-pswd">
                                            <input type="password" name="new_password" placeholder=" New Password" />
                                        </div>{/*ch-pswd end*/}
                                        <div className="ch-pswd">
                                            <input type="password" name="confirm_password" placeholder="Confirm New Password" />
                                        </div>{/*ch-pswd end*/}
                                        <div className="ch-pswd">
                                            <button type="submit"> Update</button>
                                        </div>{/*ch-pswd end*/}
                                    </form>
                                </div>{/*change-pswd end*/}
                                <div className="blocked-pr mange_sub">
                                    <div className="manage-sub">
                                        <h2 className="hd-op"> Manage Subscriptions </h2>
                                        <ul className="optz_list">
                                            <li><a href="#" title>User</a></li>
                                            <li><a href="#" title>Options</a></li>
                                        </ul>{/*optz_list end*/}
                                        <div className="clearfix" />
                                    </div>{/*Manage-Sub end*/}
                                    <div className="blckd_list">
                                        <div className="blocked-vcp">
                                            <div className="vcp_inf">
                                                <span className="vc_hd">
                                                    <img src="/assets/images/resources/th4.png" alt="" />
                                                </span>
                                                <div className="vc_info st">
                                                    <h4><a href="#" title>ScereBro</a></h4>
                                                    <span>Subscribed 3 months ago</span>
                                                </div>
                                            </div>{/*vcp_inf end*/}
                                            <span className="active-mb pr"> Active</span>
                                            <a href="#" title className="play_ms">
                                                Action
                          <i className="icon-arrow_below" />
                                            </a>
                                            <div className="clearfix" />
                                        </div>{/*blocked-vcp*/}
                                        <div className="blocked-vcp">
                                            <div className="vcp_inf">
                                                <span className="vc_hd">
                                                    <img src="/assets/images/resources/th5.png" alt="" />
                                                </span>
                                                <div className="vc_info st">
                                                    <h4><a href="#" title>Doge</a></h4>
                                                    <span>Subscribed 16 months ago</span>
                                                </div>
                                            </div>{/*vcp_inf end*/}
                                            <a href="#" title className="play_ms">
                                                Action
                          <i className="icon-arrow_below" />
                                            </a>
                                            <span className="active-mb sr"> Inactive</span>
                                            <div className="clearfix" />
                                        </div>{/*blocked-vcp*/}
                                        <div className="blocked-vcp">
                                            <div className="vcp_inf">
                                                <span className="vc_hd">
                                                    <img src="/assets/images/resources/th3.png" alt="" />
                                                </span>
                                                <div className="vc_info st">
                                                    <h4><a href="#" title>Menji</a></h4>
                                                    <span>Subscribed 2 years ago</span>
                                                </div>
                                            </div>{/*vcp_inf end*/}
                                            <a href="#" title className="play_ms">
                                                Action
                          <i className="icon-arrow_below" />
                                            </a>
                                            <span className="active-mb mr">  Paused</span>
                                            <div className="clearfix" />
                                        </div>{/*blocked-vcp*/}
                                    </div>
                                </div>{/*blocked-pr end*/}
                                <div className="account-details">
                                    <div className="account_details_content">
                                        <h2 className="hd-op">  Account Details </h2>
                                        <h4 className="slct-hd">Country</h4>
                                        <div className="slct_optz">
                                            <select>
                                                <option>United States</option>
                                                <option>United States</option>
                                                <option>United States</option>
                                                <option>United States</option>
                                            </select>
                                            <a href="#" title className="arw_vz">
                                                <i className="icon-arrow_below" />
                                            </a>
                                        </div>
                                        <h4 className="slct-hd"> Gender</h4>
                                        <ul className="gend">
                                            <li>
                                                <div className="chekbox-lg">
                                                    <label>
                                                        <input type="radio" name="gender" defaultValue="male" />
                                                        <b className="checkmark" />
                                                        <span>Male</span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="chekbox-lg">
                                                    <label>
                                                        <input type="radio" name="gender" defaultValue="female" />
                                                        <b className="checkmark"> </b>
                                                        <span>Female</span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                        <h4 className="slct-hd">Account Details </h4>
                                        <div className="slct_optz">
                                            <select>
                                                <option> ABGC</option>
                                                <option> ABGC</option>
                                                <option> ABGC</option>
                                                <option> ABGC</option>
                                            </select>
                                            <a href="#" title className="arw_vz">
                                                <svg width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9394 7.51447L22.0607 9.63579L12 19.6964L1.93936 9.63579L4.06068 7.51447L12 15.4538L19.9394 7.51447Z" fill="#9494A0" />
                                                </svg>
                                            </a>
                                        </div>
                                        <h4 className="slct-hd">Date of Birth </h4>
                                        <div className="dob flatpickr">
                                            <input type="number" name="date" className="flatpickr-input" placeholder="Select Date..." data-input />
                                            <a href="#" title className="arw_vz">
                                                <i className="icon-arrow_below" />
                                            </a>
                                        </div>
                                        <div className="ch-pswd">
                                            <button type="submit"> Update</button>
                                        </div>{/*ch-pswd end*/}
                                    </div>{/*account_details_content end*/}
                                    <div className="clearfix" />
                                </div>{/*Account Details end*/}
                            </div>{/*video-details end*/}
                        </div>
                    </div>
                </div>
            </section>{/*user-account end*/}
        </div>

    )
}
export default UserAccountPage;