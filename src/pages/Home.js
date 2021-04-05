import React, { useEffect } from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import $ from 'jquery';
// import {sideMenuJs} from  '../components/commonFunction';

const Home = () => {
 
   
    return (
       
        <div className="wrapper hp_1">
            <Header/>
             <SideMenu/>
            <section className="banner-section">
                <div className="container">
                    <div className="banner-text">
                        <h2>Watch share and upload with friends</h2>
                        <a href="#" title>Create my account</a>
                    </div>{/*banner-text end*/}
                    <h3 className="headline">Video of the Day by <a href="#" title>newfox media</a></h3>
                </div>
            </section>{/*banner-section end*/}
            <section className="services-sec">
                <div className="container">
                    <div className="services-row">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="service-col">
                                    <img src="/assets/images/sv1.png" alt="" />
                                    <h3>Get paid by your fans</h3>
                                    <p>Accept money from your fans through tips.</p>
                                </div>{/*service-col end*/}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="service-col">
                                    <img src="/assets/images/sv2.png" alt="" />
                                    <h3>Grow your audience</h3>
                                    <p>Join a growing community of young millennialaas &amp; get new fans. </p>
                                </div>{/*service-col end*/}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="service-col">
                                    <img src="/assets/images/sv3.png" alt="" />
                                    <h3>Simple transfer from YouTube</h3>
                                    <p>Upload your videos from YouTube with an easy link copy/paste.</p>
                                </div>{/*service-col end*/}
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="service-col">
                                    <img src="/assets/images/sv4.png" alt="" />
                                    <h3>Make money with Amazon </h3>
                                    <p>Extra income through Amazon Affiliates on your channel.</p>
                                </div>{/*service-col end*/}
                            </div>
                        </div>
                    </div>{/*services-row end*/}
                </div>
            </section>{/*services-sec end*/}
            <section className="vds-main">
                <div className="vidz-row">
                    <div className="container">
                        <div className="vidz_sec">
                            <h3>Featured Videos</h3>
                            <div className="vidz_list">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide1.png" alt="" />
                                                    <span className="vid-time">10:21</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                <span>686K views .<small className="posted_dt">1 week ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide2.png" alt="" />
                                                    <span className="vid-time">13:49</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Eros Now</a> </h4>
                                                <span>283K views .<small className="posted_dt">3 months ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide3.png" alt="" />
                                                    <span className="vid-time">2:54</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide4.png" alt="" />
                                                    <span className="vid-time">5:25</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Maketzi</a> </h4>
                                                <span>612K views .<small className="posted_dt">5 months ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide5.png" alt="" />
                                                    <span className="vid-time">4:01</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>ScereBro</a> </h4>
                                                <span>45K views .<small className="posted_dt">3 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide6.png" alt="" />
                                                    <span className="vid-time">6:20</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>A day in the life of a Google software engineer</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>MathChief</a> </h4>
                                                <span>86K views .<small className="posted_dt">6 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide7.png" alt="" />
                                                    <span className="vid-time">8:16</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Avengers: Infinity War - Gym Workout motivation 2019</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                <span>144K views .<small className="posted_dt">6 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide8.png" alt="" />
                                                    <span className="vid-time">29:32</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Loskes</a></h4>
                                                <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                </div>
                            </div>{/*vidz_list end*/}
                        </div>{/*vidz_videos end*/}
                    </div>
                </div>{/*vidz-row end*/}
                <div className="vidz-row">
                    <div className="container">
                        <div className="vidz_sec">
                            <h3>Updates from Subscriptions</h3>
                            <a href="#" title className="view-btn">View all</a>
                            <div className="vidz_list">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vcp_inf">
                                                <div className="vc_hd">
                                                    <img src="/assets/images/resources/th1.png" alt="" />
                                                </div>
                                                <div className="vc_info">
                                                    <h4><a href="Single_Channel_Home.html" title>TrashPanda</a></h4>
                                                </div>
                                                <span className="vc-count">3</span>
                                            </div>
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide9.png" alt="" />
                                                    <span className="vid-time">4:01</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>ScereBro</a> </h4>
                                                <span>45K views .<small className="posted_dt">3 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vcp_inf">
                                                <div className="vc_hd">
                                                    <img src="/assets/images/resources/th2.png" alt="" />
                                                </div>
                                                <div className="vc_info">
                                                    <h4><a href="Single_Channel_Home.html" title>The 80’s Guy</a></h4>
                                                </div>
                                                <span className="vc-count">6</span>
                                            </div>
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide10.png" alt="" />
                                                    <span className="vid-time">6:20</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>A day in the life of a Google software engineer</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>MathChief</a> </h4>
                                                <span>86K views .<small className="posted_dt">6 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vcp_inf">
                                                <div className="vc_hd">
                                                    <img src="/assets/images/resources/th3.png" alt="" />
                                                </div>
                                                <div className="vc_info">
                                                    <h4><a href="Single_Channel_Home.html" title>Seeker</a></h4>
                                                </div>
                                                <span className="vc-count">2</span>
                                            </div>
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide11.png" alt="" />
                                                    <span className="vid-time">8:16</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Avengers: Infinity War - Gym Workout </a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                <span>144K views .<small className="posted_dt">6 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vcp_inf">
                                                <div className="vc_hd">
                                                    <img src="/assets/images/resources/th4.png" alt="" />
                                                </div>
                                                <div className="vc_info">
                                                    <h4><a href="Single_Channel_Home.html" title>Rivvrs</a></h4>
                                                </div>
                                                <span className="vc-count">7</span>
                                            </div>
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide12.png" alt="" />
                                                    <span className="vid-time">29:32</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Loskes</a> </h4>
                                                <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                </div>
                            </div>{/*vidz_list end*/}
                        </div>{/*vidz_videos end*/}
                    </div>
                </div>{/*vidz-row end*/}
                <div className="vidz-row">
                    <div className="container">
                        <div className="vidz_sec">
                            <h3>New Videos</h3>
                            <div className="vidz_list">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide13.png" alt="" />
                                                    <span className="vid-time">10:21</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                <span>686K views .<small className="posted_dt">1 week ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide14.png" alt="" />
                                                    <span className="vid-time">13:49</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Eros Now</a> </h4>
                                                <span>283K views .<small className="posted_dt">3 months ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide15.png" alt="" />
                                                    <span className="vid-time">2:54</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide16.png" alt="" />
                                                    <span className="vid-time">5:25</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Maketzi</a> </h4>
                                                <span>612K views .<small className="posted_dt">5 months ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide17.png" alt="" />
                                                    <span className="vid-time">4:01</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>ScereBro</a> </h4>
                                                <span>45K views .<small className="posted_dt">3 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide18.png" alt="" />
                                                    <span className="vid-time">6:20</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>A day in the life of a Google software engineer</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>MathChief</a> </h4>
                                                <span>86K views .<small className="posted_dt">6 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide19.png" alt="" />
                                                    <span className="vid-time">8:16</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Avengers: Infinity War - Gym Workout motivation 2019</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                <span>144K views .<small className="posted_dt">6 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide20.png" alt="" />
                                                    <span className="vid-time">29:32</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Loskes</a></h4>
                                                <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                </div>
                            </div>{/*vidz_list end*/}
                        </div>{/*vidz_videos end*/}
                    </div>
                </div>{/*vidz-row end*/}
                <div className="vidz-row">
                    <div className="container">
                        <div className="vidz_sec">
                            <h3>Popular Videos</h3>
                            <div className="vidz_list">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide1.png" alt="" />
                                                    <span className="vid-time">10:21</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                <span>686K views .<small className="posted_dt">1 week ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide2.png" alt="" />
                                                    <span className="vid-time">13:49</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Eros Now</a> </h4>
                                                <span>283K views .<small className="posted_dt">3 months ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide3.png" alt="" />
                                                    <span className="vid-time">2:54</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide4.png" alt="" />
                                                    <span className="vid-time">5:25</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Maketzi</a> </h4>
                                                <span>612K views .<small className="posted_dt">5 months ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide5.png" alt="" />
                                                    <span className="vid-time">4:01</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>ScereBro</a> </h4>
                                                <span>45K views .<small className="posted_dt">3 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide6.png" alt="" />
                                                    <span className="vid-time">6:20</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>A day in the life of a Google software engineer</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>MathChief</a> </h4>
                                                <span>86K views .<small className="posted_dt">6 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide7.png" alt="" />
                                                    <span className="vid-time">8:16</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>Avengers: Infinity War - Gym Workout motivation 2019</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                                                <span>144K views .<small className="posted_dt">6 days ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="/single_video_page" title>
                                                    <img src="/assets/images/resources/vide8.png" alt="" />
                                                    <span className="vid-time">29:32</span>
                                                    <span className="watch_later">
                                                        <i className="icon-watch_later_fill" />
                                                    </span>
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="/single_video_page" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                                                <h4><a href="Single_Channel_Home.html" title>Loskes</a></h4>
                                                <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                </div>
                            </div>{/*vidz_list end*/}
                        </div>{/*vidz_videos end*/}
                    </div>
                </div>{/*vidz-row end*/}
                <div className="vidz-row pop_channels">
                    <div className="container">
                        <div className="vidz_sec">
                            <h3>Popular Channels</h3>
                            <div className="vidz_list">
                                <div className="row">
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="Single_Channel_Home.html" title>
                                                    <img src="/assets/images/resources/ch1.jpg" alt="" />
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="Single_Channel_Home.html" title>BattleState</a></h3>
                                                <span>230K Followers</span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="Single_Channel_Home.html" title>
                                                    <img src="/assets/images/resources/ch2.jpg" alt="" />
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="Single_Channel_Home.html" title>BlackPink</a></h3>
                                                <span>191K Followers</span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="Single_Channel_Home.html" title>
                                                    <img src="/assets/images/resources/ch3.jpg" alt="" />
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="Single_Channel_Home.html" title>Vevo</a> <span className="verify_ic"><i className="icon-tick" /></span></h3>
                                                <span>12M Followers</span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="Single_Channel_Home.html" title>
                                                    <img src="/assets/images/resources/ch4.jpg" alt="" />
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="Single_Channel_Home.html" title>Official PSY</a> <span className="verify_ic"><i className="icon-tick" /></span></h3>
                                                <span>48M Followers</span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="Single_Channel_Home.html" title>
                                                    <img src="/assets/images/resources/ch5.jpg" alt="" />
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="Single_Channel_Home.html" title>People</a></h3>
                                                <span>954K Followers</span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                                        <div className="videoo">
                                            <div className="vid_thumbainl">
                                                <a href="Single_Channel_Home.html" title>
                                                    <img src="/assets/images/resources/ch6.jpg" alt="" />
                                                </a>
                                            </div>{/*vid_thumbnail end*/}
                                            <div className="video_info">
                                                <h3><a href="Single_Channel_Home.html" title>SmTown</a></h3>
                                                <span>1.3M Followers</span>
                                            </div>
                                        </div>{/*videoo end*/}
                                    </div>
                                </div>
                            </div>{/*vidz_list end*/}
                        </div>{/*vidz_videos end*/}
                    </div>
                </div>{/*vidz-row end*/}
            </section>{/*vds-main end*/}
            <section className="more_items_sec text-center">
                <div className="container">
                    <a href="#" title>
                        <svg width={19} height={24} viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1618 24.0001H0.838235C0.374412 24.0001 0 23.6261 0 23.1628V5.86052C0 5.39727 0.374412 5.02332 0.838235 5.02332H18.1618C18.6256 5.02332 19 5.39727 19 5.86052V23.1628C19 23.6261 18.6256 24.0001 18.1618 24.0001ZM1.67647 22.3256H17.3235V6.69773H1.67647V22.3256Z" fill="#9494A0" />
                            <g opacity="0.25">
                                <path opacity="0.25" d="M13.1324 4.18605C12.6685 4.18605 12.2941 3.81209 12.2941 3.34884V1.67442H6.70589V3.34884C6.70589 3.81209 6.33148 4.18605 5.86765 4.18605C5.40383 4.18605 5.02942 3.81209 5.02942 3.34884V0.83721C5.02942 0.373954 5.40383 0 5.86765 0H13.1324C13.5962 0 13.9706 0.373954 13.9706 0.83721V3.34884C13.9706 3.81209 13.5962 4.18605 13.1324 4.18605Z" fill="#9494A0" />
                            </g>
                            <path d="M9.50001 19.3479C9.28487 19.3479 9.06972 19.267 8.90766 19.1024L5.92634 16.1275C5.59942 15.801 5.59942 15.2707 5.92634 14.9442C6.25325 14.6177 6.78413 14.6177 7.11104 14.9442L9.50001 17.3275L11.8862 14.9442C12.2131 14.6177 12.744 14.6177 13.0709 14.9442C13.3978 15.2707 13.3978 15.801 13.0709 16.1275L10.0924 19.1024C9.93031 19.267 9.71516 19.3479 9.50001 19.3479Z" fill="#9494A0" />
                            <path d="M9.49999 18.4186C9.03617 18.4186 8.66176 18.0447 8.66176 17.5814V10.3256C8.66176 9.86236 9.03617 9.4884 9.49999 9.4884C9.96382 9.4884 10.3382 9.86236 10.3382 10.3256V17.5814C10.3382 18.0447 9.96382 18.4186 9.49999 18.4186Z" fill="#9494A0" />
                            <g opacity="0.5">
                                <path opacity="0.5" d="M15.6471 6.69764C15.1832 6.69764 14.8088 6.32369 14.8088 5.86043V4.18601H4.19118V5.86043C4.19118 6.32369 3.81677 6.69764 3.35294 6.69764C2.88912 6.69764 2.51471 6.32369 2.51471 5.86043V3.34881C2.51471 2.88555 2.88912 2.5116 3.35294 2.5116H15.6471C16.1109 2.5116 16.4853 2.88555 16.4853 3.34881V5.86043C16.4853 6.32369 16.1109 6.69764 15.6471 6.69764Z" fill="#9494A0" />
                            </g>
                        </svg>
                    </a>
                </div>
            </section>{/*more_items_sec end*/}
        </div>


    );
}
export default Home;