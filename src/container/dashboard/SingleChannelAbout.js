import React from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu'

const SingleChannelAbout = () =>{
return(
    <div className="wrapper">
        <Header/>
        <SideMenu/>
       <section className="channel-cover">
      <img src="/assets/images/resources/channel-banner.jpg" alt="" />
    </section>{/*channel-cover end*/}
    <section className="videso_section">
      <div className="info-pr-sec">
        <div className="container">
          <div className="vcp_inf cr">
            <span className="vc_hd">
              <img src="/assets/images/resources/sn.png" alt="" />
            </span>
            <div className="vc_info pr">
              <h4>ScereBro <span className="verify_ic"><i className="icon-tick" /></span></h4>
              <span>375,437 subscribers</span>
            </div>
          </div>{/*vcp_inf end*/}
          <ul className="chan_cantrz">
            <li>
              <a href="#" title className="donate">Donate</a>
            </li>
            <li>
              <a href="#" title className="subscribe">Subscribe <strong>12.3M</strong></a>
            </li>
          </ul>{/*chan_cantrz end*/}
          <div className="search_form">
            <form>
              <input type="text" name="search" placeholder="Search Videos" />
              <button type="submit">
                <i className="icon-search" />
              </button>
            </form>
          </div>
          <div className="clearfix" />
        </div>
      </div>{/*info-pr-sec end*/}
      <div className="history-lst tbY">
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link" id="home_tab" data-toggle="tab" href="#home_vidz" role="tab" aria-controls="home_tab" aria-selected="true">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="videos_taab" data-toggle="tab" href="#vvideo_tabz" role="tab" aria-controls="videos_taab" aria-selected="false">Videos </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="playlist-tab" data-toggle="tab" href="#playlist_tab" role="tab" aria-controls="playlist-tab" aria-selected="false">Playlist</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="channels-tab" data-toggle="tab" href="#channels_tab" role="tab" aria-controls="channels-tab" aria-selected="false">Channels</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" id="about-tab" data-toggle="tab" href="#about_tab" role="tab" aria-controls="about-tab" aria-selected="false">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="amazon-tab" data-toggle="tab" href="#amazong-tb" role="tab" aria-controls="amazon-tab" aria-selected="false">Amazon Products</a>
            </li>
          </ul>{/*nav-tabs end*/}
          <div className="clearfix" />
        </div>
      </div>{/*history-lst end*/}
      <div className="tab-content p-0" id="myTabContent">
        <div className="tab-pane fade" id="home_vidz" role="tabpanel" aria-labelledby="home_tab">
          <div className="home_tb_details">
            <div className="viddz">
              <div className="container">
                <div className="ftz-vidz">
                  <h3>Featured Videos</h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vid-medium.jpg" alt="" />
                            <span className="vid-time">10:21</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                          <h4><a href="Single_Channel_Videos.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                          <span>686K views .<small className="posted_dt">1 week ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vid-medium2.jpg" alt="" />
                            <span className="vid-time">10:21</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                          <h4><a href="Single_Channel_Videos.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                          <span>283K views .<small className="posted_dt">3 months ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                  </div>
                </div>{/*ftz-vidz end*/}
              </div>
            </div>{/*viddz end*/}
            <div className="viddz">
              <div className="container">
                <div className="vidz_sec">
                  <h3>Recent Uploads</h3>
                  <a href="#" title>View all</a>
                  <div className="clearfix" />
                  <div className="vidz_list">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide1.png" alt="" />
                              <span className="vid-time">10:21</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>686K views .<small className="posted_dt">1 week ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide2.png" alt="" />
                              <span className="vid-time">13:49</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>Eros Now</a> </h4>
                            <span>283K views .<small className="posted_dt">3 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide3.png" alt="" />
                              <span className="vid-time">2:54</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide4.png" alt="" />
                              <span className="vid-time">5:25</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>Maketzi</a> </h4>
                            <span>612K views .<small className="posted_dt">5 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                    </div>
                  </div>{/*vidz_list end*/}
                </div>{/*vidz_videos end*/}
              </div>
            </div>{/*viddz end*/}
            <div className="viddz">
              <div className="container">
                <div className="vidz_sec">
                  <h3>Popular Videos</h3>
                  <a href="#" title>View all</a>
                  <div className="clearfix" />
                  <div className="vidz_list">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide5.png" alt="" />
                              <span className="vid-time">4:01</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>ScereBro</a> </h4>
                            <span>45K views .<small className="posted_dt">3 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide6.png" alt="" />
                              <span className="vid-time">6:20</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>A day in the life of a Google software engineer</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>MathChief</a> </h4>
                            <span>86K views .<small className="posted_dt">6 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide7.png" alt="" />
                              <span className="vid-time">8:16</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Avengers: Infinity War - Gym Workout motivation 2019</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>144K views .<small className="posted_dt">6 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide8.png" alt="" />
                              <span className="vid-time">29:32</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>Loskes</a></h4>
                            <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                    </div>
                  </div>{/*vidz_list end*/}
                </div>{/*vidz_videos end*/}
              </div>
            </div>{/*viddz end*/}
            <div className="viddz">
              <div className="container">
                <div className="vidz_sec">
                  <h3>France Tour Videos</h3>
                  <a href="#" title>View all</a>
                  <div className="clearfix" />
                  <div className="vidz_list">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide9.png" alt="" />
                              <span className="vid-time">4:01</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>ScereBro</a> </h4>
                            <span>45K views .<small className="posted_dt">3 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide10.png" alt="" />
                              <span className="vid-time">6:20</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>A day in the life of a Google software engineer</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>MathChief</a> </h4>
                            <span>86K views .<small className="posted_dt">6 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide11.png" alt="" />
                              <span className="vid-time">8:16</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Avengers: Infinity War - Gym Workout </a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>144K views .<small className="posted_dt">6 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide12.png" alt="" />
                              <span className="vid-time">29:32</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>Loskes</a> </h4>
                            <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                    </div>
                  </div>{/*vidz_list end*/}
                </div>{/*vidz_videos end*/}
              </div>
            </div>{/*viddz end*/}
            <div className="viddz">
              <div className="container">
                <div className="vidz_sec">
                  <h3>Daily Vlogs 2019</h3>
                  <a href="#" title>View all</a>
                  <div className="clearfix" />
                  <div className="vidz_list">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide13.png" alt="" />
                              <span className="vid-time">10:21</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>686K views .<small className="posted_dt">1 week ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide14.png" alt="" />
                              <span className="vid-time">13:49</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>Eros Now</a> </h4>
                            <span>283K views .<small className="posted_dt">3 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide15.png" alt="" />
                              <span className="vid-time">2:54</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide16.png" alt="" />
                              <span className="vid-time">5:25</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                            <h4><a href="Single_Channel_Videos.html" title>Maketzi</a> </h4>
                            <span>612K views .<small className="posted_dt">5 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                    </div>
                  </div>{/*vidz_list end*/}
                </div>{/*vidz_videos end*/}
              </div>
            </div>{/*viddz end*/}
          </div>{/*home_tb_details end*/}
        </div>
        <div className="tab-pane" id="vvideo_tabz" role="tabpanel" aria-labelledby="videos_taab">
          <div className="videso_tb_details">
            <div className="container">
              <div className="vidz_sec">
                <h3>Uploads</h3>
                <a href="#" title><i className="icon-sort_by" />Sort By</a>
                <div className="clearfix" />
                <div className="vidz_list">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide1.png" alt="" />
                            <span className="vid-time">10:21</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                          <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                          <span>686K views .<small className="posted_dt">1 week ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide2.png" alt="" />
                            <span className="vid-time">13:49</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                          <h4><a href="#" title>Eros Now</a> </h4>
                          <span>283K views .<small className="posted_dt">3 months ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide3.png" alt="" />
                            <span className="vid-time">2:54</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                          <h4><a href="#" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                          <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide4.png" alt="" />
                            <span className="vid-time">5:25</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                          <h4><a href="#" title>Maketzi</a> </h4>
                          <span>612K views .<small className="posted_dt">5 months ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide5.png" alt="" />
                            <span className="vid-time">4:01</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                          <h4><a href="#" title>ScereBro</a> </h4>
                          <span>45K views .<small className="posted_dt">3 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide6.png" alt="" />
                            <span className="vid-time">6:20</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>A day in the life of a Google software engineer</a></h3>
                          <h4><a href="#" title>MathChief</a> </h4>
                          <span>86K views .<small className="posted_dt">6 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide7.png" alt="" />
                            <span className="vid-time">8:16</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Avengers: Infinity War - Gym Workout motivation 2019</a></h3>
                          <h4><a href="#" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                          <span>144K views .<small className="posted_dt">6 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide8.png" alt="" />
                            <span className="vid-time">29:32</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                          <h4><a href="#" title>Loskes</a></h4>
                          <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide9.png" alt="" />
                            <span className="vid-time">4:01</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                          <h4><a href="#" title>ScereBro</a> </h4>
                          <span>45K views .<small className="posted_dt">3 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide10.png" alt="" />
                            <span className="vid-time">6:20</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>A day in the life of a Google software engineer</a></h3>
                          <h4><a href="#" title>MathChief</a> </h4>
                          <span>86K views .<small className="posted_dt">6 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide11.png" alt="" />
                            <span className="vid-time">8:16</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Avengers: Infinity War - Gym Workout </a></h3>
                          <h4><a href="#" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                          <span>144K views .<small className="posted_dt">6 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide12.png" alt="" />
                            <span className="vid-time">29:32</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                          <h4><a href="#" title>Loskes</a> </h4>
                          <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide13.png" alt="" />
                            <span className="vid-time">10:21</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                          <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                          <span>686K views .<small className="posted_dt">1 week ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide14.png" alt="" />
                            <span className="vid-time">13:49</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                          <h4><a href="#" title>Eros Now</a> </h4>
                          <span>283K views .<small className="posted_dt">3 months ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide15.png" alt="" />
                            <span className="vid-time">2:54</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                          <h4><a href="#" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                          <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide16.png" alt="" />
                            <span className="vid-time">5:25</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                          <h4><a href="#" title>Maketzi</a> </h4>
                          <span>612K views .<small className="posted_dt">5 months ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide17.png" alt="" />
                            <span className="vid-time">4:01</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                          <h4><a href="#" title>ScereBro</a> </h4>
                          <span>45K views .<small className="posted_dt">3 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide18.png" alt="" />
                            <span className="vid-time">6:20</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>A day in the life of a Google software engineer</a></h3>
                          <h4><a href="#" title>MathChief</a> </h4>
                          <span>86K views .<small className="posted_dt">6 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide19.png" alt="" />
                            <span className="vid-time">8:16</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Avengers: Infinity War - Gym Workout motivation 2019</a></h3>
                          <h4><a href="#" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                          <span>144K views .<small className="posted_dt">6 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide20.png" alt="" />
                            <span className="vid-time">29:32</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                          <h4><a href="#" title>Loskes</a></h4>
                          <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="images/resources/vide8.png" alt="" />
                            <span className="vid-time">29:32</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                          <h4><a href="#" title>Loskes</a></h4>
                          <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide9.png" alt="" />
                            <span className="vid-time">4:01</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                          <h4><a href="#" title>ScereBro</a> </h4>
                          <span>45K views .<small className="posted_dt">3 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide10.png" alt="" />
                            <span className="vid-time">6:20</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>A day in the life of a Google software engineer</a></h3>
                          <h4><a href="#" title>MathChief</a> </h4>
                          <span>86K views .<small className="posted_dt">6 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                      <div className="videoo">
                        <div className="vid_thumbainl">
                          <a href="#" title>
                            <img src="/assets/images/resources/vide11.png" alt="" />
                            <span className="vid-time">8:16</span>
                            <span className="watch_later">
                              <i className="icon-watch_later_fill" />
                            </span>
                          </a>	
                        </div>{/*vid_thumbnail end*/}
                        <div className="video_info">
                          <h3><a href="single_video_page.html" title>Avengers: Infinity War - Gym Workout </a></h3>
                          <h4><a href="#" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                          <span>144K views .<small className="posted_dt">6 days ago</small></span>
                        </div>
                      </div>{/*videoo end*/}
                    </div>
                  </div>
                </div>{/*vidz_list end*/}
              </div>{/*vidz_videos end*/}
            </div>
          </div>{/*videso_tb_details end*/}
        </div>
        <div className="tab-pane fade" id="playlist_tab" role="tabpanel" aria-labelledby="playlist-tab">
          <div className="playlist_tab">
            <div className="viddz">
              <div className="container">
                <div className="vidz_sec">
                  <h3>SNL Season 43 Episode 15 Sterling K. Brown - 21</h3>
                  <a href="#" title>View all</a>
                  <div className="clearfix" />
                  <div className="vidz_list">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide1.png" alt="" />
                              <span className="vid-time">10:21</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                            <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>686K views .<small className="posted_dt">1 week ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide2.png" alt="" />
                              <span className="vid-time">13:49</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                            <h4><a href="#" title>Eros Now</a> </h4>
                            <span>283K views .<small className="posted_dt">3 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide3.png" alt="" />
                              <span className="vid-time">2:54</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                            <h4><a href="#" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide4.png" alt="" />
                              <span className="vid-time">5:25</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                            <h4><a href="#" title>Maketzi</a> </h4>
                            <span>612K views .<small className="posted_dt">5 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                    </div>
                  </div>{/*vidz_list end*/}
                </div>{/*vidz_videos end*/}
              </div>
            </div>{/*viddz end*/}
            <div className="viddz">
              <div className="container">
                <div className="vidz_sec">
                  <h3>Cut for Time: Star Warriors - SNL - 30</h3>
                  <a href="#" title>View all</a>
                  <div className="clearfix" />
                  <div className="vidz_list">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide5.png" alt="" />
                              <span className="vid-time">4:01</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                            <h4><a href="#" title>ScereBro</a> </h4>
                            <span>45K views .<small className="posted_dt">3 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide6.png" alt="" />
                              <span className="vid-time">6:20</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>A day in the life of a Google software engineer</a></h3>
                            <h4><a href="#" title>MathChief</a> </h4>
                            <span>86K views .<small className="posted_dt">6 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide7.png" alt="" />
                              <span className="vid-time">8:16</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Avengers: Infinity War - Gym Workout motivation 2019</a></h3>
                            <h4><a href="#" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>144K views .<small className="posted_dt">6 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide8.png" alt="" />
                              <span className="vid-time">29:32</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                            <h4><a href="#" title>Loskes</a></h4>
                            <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                    </div>
                  </div>{/*vidz_list end*/}
                </div>{/*vidz_videos end*/}
              </div>
            </div>{/*viddz end*/}
            <div className="viddz">
              <div className="container">
                <div className="vidz_sec">
                  <h3>Natalie Portman is Back - 6</h3>
                  <a href="#" title>View all</a>
                  <div className="clearfix" />
                  <div className="vidz_list">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide9.png" alt="" />
                              <span className="vid-time">4:01</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                            <h4><a href="#" title>ScereBro</a> </h4>
                            <span>45K views .<small className="posted_dt">3 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide10.png" alt="" />
                              <span className="vid-time">6:20</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>A day in the life of a Google software engineer</a></h3>
                            <h4><a href="#" title>MathChief</a> </h4>
                            <span>86K views .<small className="posted_dt">6 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide11.png" alt="" />
                              <span className="vid-time">8:16</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Avengers: Infinity War - Gym Workout </a></h3>
                            <h4><a href="#" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>144K views .<small className="posted_dt">6 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide12.png" alt="" />
                              <span className="vid-time">29:32</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                            <h4><a href="#" title>Loskes</a> </h4>
                            <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                    </div>
                  </div>{/*vidz_list end*/}
                </div>{/*vidz_videos end*/}
              </div>
            </div>{/*viddz end*/}
            <div className="viddz">
              <div className="container">
                <div className="vidz_sec">
                  <h3>SNL Season 43 Episode 12 Will Ferrell - 37</h3>
                  <a href="#" title>View all</a>
                  <div className="clearfix" />
                  <div className="vidz_list">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide1.png" alt="" />
                              <span className="vid-time">10:21</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                            <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>686K views .<small className="posted_dt">1 week ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide2.png" alt="" />
                              <span className="vid-time">13:49</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                            <h4><a href="#" title>Eros Now</a> </h4>
                            <span>283K views .<small className="posted_dt">3 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide3.png" alt="" />
                              <span className="vid-time">2:54</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                            <h4><a href="#" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide4.png" alt="" />
                              <span className="vid-time">5:25</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                            <h4><a href="#" title>Maketzi</a> </h4>
                            <span>612K views .<small className="posted_dt">5 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                    </div>
                  </div>{/*vidz_list end*/}
                </div>{/*vidz_videos end*/}
              </div>
            </div>{/*viddz end*/}
            <div className="viddz">
              <div className="container">
                <div className="vidz_sec">
                  <h3>SNL Season 43 Episode 11 Jessica Chastain - 23</h3>
                  <a href="#" title>View all</a>
                  <div className="clearfix" />
                  <div className="vidz_list">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide1.png" alt="" />
                              <span className="vid-time">10:21</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                            <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>686K views .<small className="posted_dt">1 week ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide2.png" alt="" />
                              <span className="vid-time">13:49</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                            <h4><a href="#" title>Eros Now</a> </h4>
                            <span>283K views .<small className="posted_dt">3 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide3.png" alt="" />
                              <span className="vid-time">2:54</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                            <h4><a href="#" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide4.png" alt="" />
                              <span className="vid-time">5:25</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                            <h4><a href="#" title>Maketzi</a> </h4>
                            <span>612K views .<small className="posted_dt">5 months ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                    </div>
                  </div>{/*vidz_list end*/}
                </div>{/*vidz_videos end*/}
              </div>
            </div>{/*viddz end*/}
            <div className="viddz">
              <div className="container">
                <div className="vidz_sec">
                  <h3>Kevin Hart is Back - 6</h3>
                  <a href="#" title>View all</a>
                  <div className="clearfix" />
                  <div className="vidz_list">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide5.png" alt="" />
                              <span className="vid-time">4:01</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                            <h4><a href="#" title>ScereBro</a> </h4>
                            <span>45K views .<small className="posted_dt">3 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide6.png" alt="" />
                              <span className="vid-time">6:20</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>A day in the life of a Google software engineer</a></h3>
                            <h4><a href="#" title>MathChief</a> </h4>
                            <span>86K views .<small className="posted_dt">6 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide7.png" alt="" />
                              <span className="vid-time">8:16</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>Avengers: Infinity War - Gym Workout motivation 2019</a></h3>
                            <h4><a href="#" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                            <span>144K views .<small className="posted_dt">6 days ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
                        <div className="videoo">
                          <div className="vid_thumbainl">
                            <a href="#" title>
                              <img src="/assets/images/resources/vide8.png" alt="" />
                              <span className="vid-time">29:32</span>
                              <span className="watch_later">
                                <i className="icon-watch_later_fill" />
                              </span>
                            </a>	
                          </div>{/*vid_thumbnail end*/}
                          <div className="video_info">
                            <h3><a href="single_video_page.html" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                            <h4><a href="#" title>Loskes</a></h4>
                            <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                          </div>
                        </div>{/*videoo end*/}
                      </div>
                    </div>
                  </div>{/*vidz_list end*/}
                </div>{/*vidz_videos end*/}
              </div>
            </div>{/*viddz end*/}
          </div>{/*home_tb_details end*/}
        </div>
        <div className="tab-pane fade" id="channels_tab" role="tabpanel" aria-labelledby="channels-tab">
          <div className="container">
            <div className="browse_catgs">
              <div className="brws-head">
                <h3>Featured Channels</h3>
                <div className="clearfix" />
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl1.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb1.png" alt="" />
                        </div>
                        <h4><a href="#" title>Newfox Media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>13M Subscribers . 72 Videos 374M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl2.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb2.png" alt="" />
                        </div>
                        <h4><a href="#" title>Adaptable</a> </h4>
                        <span>6M Subscribers . 106 Videos 218M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl3.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb3.png" alt="" />
                        </div>
                        <h4><a href="#" title>Immense </a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>28K Subscribers . 32 Videos 3M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl4.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb4.png" alt="" />
                        </div>
                        <h4><a href="#" title>Kittens</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>8M Subscribers . 340 Videos 637M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl5.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb5.png" alt="" />
                        </div>
                        <h4><a href="#" title>Shoe</a> </h4>
                        <span>2M Subscribers . 62 Videos 4M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl6.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb6.png" alt="" />
                        </div>
                        <h4><a href="#" title>Pink</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>49K Subscribers . 13 Videos 890K views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl7.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb7.png" alt="" />
                        </div>
                        <h4><a href="#" title>Teeny-tiny</a></h4>
                        <span>98K Subscribers . 45 Videos 6M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl8.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb8.png" alt="" />
                        </div>
                        <h4><a href="#" title>Intelligent </a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>74K Subscribers . 49 Videos 3M views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/*brws-head end*/}
              <div className="brws-head">
                <h3>Recomended Channels</h3>
                <div className="clearfix" />
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl9.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb9.png" alt="" />
                        </div>
                        <h4><a href="#" title>Woozy</a> </h4>
                        <span>19M Subscribers . 117 Videos 43M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl10.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb10.png" alt="" />
                        </div>
                        <h4><a href="#" title>Laugh </a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>53K Subscribers . 76 Videos 24M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl11.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb11.png" alt="" />
                        </div>
                        <h4><a href="#" title>Breakable </a> </h4>
                        <span>2M Subscribers . 40 Videos 13M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl12.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb12.png" alt="" />
                        </div>
                        <h4><a href="#" title>Morning</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>54K Subscribers . 35 Videos 6M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl13.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb13.png" alt="" />
                        </div>
                        <h4><a href="#" title>Fire</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>52M Subscribers . 266 Videos 2340M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl14.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb14.png" alt="" />
                        </div>
                        <h4><a href="#" title>Swanky</a> </h4>
                        <span>55K Subscribers . 36 Videos 16M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl15.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb15.png" alt="" />
                        </div>
                        <h4><a href="#" title>Miscreant</a> </h4>
                        <span>80K Subscribers . 71 Videos 32M views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl16.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb16.png" alt="" />
                        </div>
                        <h4><a href="#" title>Woebegone </a> </h4>
                        <span>47K Subscribers . 380 Videos 182M views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/*brws-head end*/}
              <div className="brws-head">
                <h3>Subscribed Channels</h3>
                <div className="clearfix" />
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl17.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb17.png" alt="" />
                        </div>
                        <h4><a href="#" title>Develop</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>2K Subscribers . 7 Videos 7K views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl18.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb18.png" alt="" />
                        </div>
                        <h4><a href="#" title>Picture</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>253 Subscribers . 6 Videos 24K views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl19.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb19.png" alt="" />
                        </div>
                        <h4><a href="#" title>Weather </a> </h4>
                        <span>282 Subscribers . 3 Videos 18K views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl20.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb20.png" alt="" />
                        </div>
                        <h4><a href="#" title>Word</a> </h4>
                        <span>2K Subscribers . 16 Videos 28K views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl21.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb21.png" alt="" />
                        </div>
                        <h4><a href="#" title>Maximum</a> </h4>
                        <span>3K Subscribers . 9 Videos 12K views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl22.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb22.png" alt="" />
                        </div>
                        <h4><a href="#" title>Media Laws</a> </h4>
                        <span>23 Subscribers . 2 Videos 3K views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl23.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb23.png" alt="" />
                        </div>
                        <h4><a href="#" title>Light</a> </h4>
                        <span>380 Subscribers . 3 Videos 6K views</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="videoo">
                      <div className="vid_thumbainl">
                        <a href="single_video_page.html" title>
                          <img src="/assets/images/resources/cl24.jpg" alt="" />
                        </a>	
                      </div>{/*vid_thumbnail end*/}
                      <div className="video_info">
                        <div className="vid_thumb">
                          <img src="/assets/images/resources/vid-thumb24.png" alt="" />
                        </div>
                        <h4><a href="#" title>New Trailers </a> </h4>
                        <span>2K Subscribers . 6 Videos 28K views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/*brws-head end*/}
            </div>{/*browse_catgs end*/}
          </div>
        </div>
        <div className="tab-pane fade show active" id="about_tab" role="tabpanel" aria-labelledby="about-tab">
          <div className="about_tab_content">
            <div className="container">
              <div className="description">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="decp_cotnet">
                      <h2 className="ab-fd">Description </h2>
                      <p>Welcome to the official Saturday Night Live channel on YouTube!  Here you will find your favorite sketches, behind the scenes clips and web exclusives, featuring all your favorite hosts and cast members.  Check out more SNL at http://www.nbc.com/</p>
                    </div>{/*abt-founder end*/}
                    <div className="link-pr">
                      <h2 className="ab-fd">Links </h2>
                      <ul className="csl-link-1">
                        <li><a href="#" title>SNL on NBC</a></li>
                        <li><a href="#" title> Facebook</a></li>
                        <li><a href="#" title>Twitter</a></li>
                      </ul>
                      <ul className="csl-link-2">
                        <li><a href="#" title>Instagram</a></li>
                        <li><a href="#" title>Subscribe to SNL on Oren</a></li>
                        <li><a href="#" title>Google+</a></li>
                      </ul>
                      <div className="clearfix" />
                    </div>
                    <div className="link-pr">
                      <h2 className="ab-fd">Business enquiries </h2>
                      <ul>
                        <li><a href="mailto:example@example.com" title>sample@sample.com</a></li>
                        <li><a href="#" title>scerebro@gmail.com</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="stats">
                      <h2 className="ab-fd">Stats</h2>
                      <ul>
                        <li>Joined Jul 2019 </li>
                        <li>3,741,400,119 views</li>
                        <li>25,345,348 subscribers</li>
                        <li>729 videos</li>
                      </ul>
                    </div>{/*stats end*/}
                    <div className="flagg">
                      <ul>
                        <li>
                          <a href="#" title>
                            <i className="icon-flag" />
                          </a>		
                        </li>
                        <li>
                          <a href="#" title>
                            <i className="icon-message" />
                          </a>		
                        </li>
                      </ul>
                    </div>{/*flagg end*/}
                  </div>
                </div>
              </div>
            </div>
          </div>{/*about_tab_content end*/}
        </div>
        <div className="tab-pane fade" id="amazong-tb" role="tabpanel" aria-labelledby="amazon-tab">
          <div className="container">
            <div className="amz_products_content">
              <div className="amazon">
                <div className="abt-amz">
                  <div className="amz-hd">
                    <h2>Get my merchandise </h2>
                    <h3>Use CODE:<span> ScereBro26</span> 10% Discount</h3>
                  </div>{/*amz-hd end*/}
                  <div className="amz-lg">
                    <img src="/assets/images/resources/cp-logo.png" alt="" />
                  </div>{/*amz-lg end*/}
                  <div className="clearfix" />
                </div>{/*abt-amz end*/}
                <div className="amz-img-inf">
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro1.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3><a href="#" title>HEMOON Men’s casual sportswear..</a></h3>
                          <span>$32.99</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro2.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3><a href="#" title> Men's Insulated Front-Zip Jacket </a></h3>
                          <span className="pr-d">$34.90</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro3.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Dickies Men's Sanded Duck Jacket </a></h3>
                          <span className="pr-d">$17.49</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro4.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Men's Big-Tall Lined Eisenhower Jacket </a></h3>
                          <span className="pr-d">$39.00</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro5.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Dickies Men's Sanded Duck Jacket </a></h3>
                          <span className="pr-d">$17.49</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro6.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Men's Big-Tall Lined Eisenhower Jacket </a></h3>
                          <span className="pr-d">$39.00</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                  </div>
                </div>{/*amz-img-in*/}
              </div>{/*amazon end*/}
              <div className="amazon">
                <div className="abt-amz">
                  <div className="amz-hd">
                    <h2>Get my merchandise </h2>
                    <h3>Use CODE:<span> ScereBro26</span> 10% Discount</h3>
                  </div>{/*amz-hd end*/}
                  <div className="amz-lg">
                    <img src="/assets/images/resources/cp-logo.png" alt="" />
                  </div>{/*amz-lg end*/}
                  <div className="clearfix" />
                </div>{/*abt-amz end*/}
                <div className="amz-img-inf">
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro7.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3><a href="#" title>HEMOON Men’s casual sportswear..</a></h3>
                          <span>$32.99</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro8.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3><a href="#" title> Men's Insulated Front-Zip Jacket </a></h3>
                          <span className="pr-d">$34.90</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro9.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Dickies Men's Sanded Duck Jacket </a></h3>
                          <span className="pr-d">$17.49</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro10.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Men's Big-Tall Lined Eisenhower Jacket </a></h3>
                          <span className="pr-d">$39.00</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro11.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Dickies Men's Sanded Duck Jacket </a></h3>
                          <span className="pr-d">$17.49</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro12.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Men's Big-Tall Lined Eisenhower Jacket </a></h3>
                          <span className="pr-d">$39.00</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                  </div>
                </div>{/*amz-img-in*/}
              </div>{/*amazon end*/}
              <div className="amazon">
                <div className="abt-amz">
                  <div className="amz-hd">
                    <h2>Get my merchandise </h2>
                    <h3>Use CODE:<span> ScereBro26</span> 10% Discount</h3>
                  </div>{/*amz-hd end*/}
                  <div className="amz-lg">
                    <img src="/assets/images/resources/cp-logo.png" alt="" />
                  </div>{/*amz-lg end*/}
                  <div className="clearfix" />
                </div>{/*abt-amz end*/}
                <div className="amz-img-inf">
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro13.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3><a href="#" title>HEMOON Men’s casual sportswear..</a></h3>
                          <span>$32.99</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro14.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3><a href="#" title> Men's Insulated Front-Zip Jacket </a></h3>
                          <span className="pr-d">$34.90</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro15.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Dickies Men's Sanded Duck Jacket </a></h3>
                          <span className="pr-d">$17.49</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro16.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Men's Big-Tall Lined Eisenhower Jacket </a></h3>
                          <span className="pr-d">$39.00</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro17.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Dickies Men's Sanded Duck Jacket </a></h3>
                          <span className="pr-d">$17.49</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro18.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Men's Big-Tall Lined Eisenhower Jacket </a></h3>
                          <span className="pr-d">$39.00</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                  </div>
                </div>{/*amz-img-in*/}
              </div>{/*amazon end*/}
              <div className="amazon">
                <div className="abt-amz">
                  <div className="amz-hd">
                    <h2>Get my merchandise </h2>
                    <h3>Use CODE:<span> ScereBro26</span> 10% Discount</h3>
                  </div>{/*amz-hd end*/}
                  <div className="amz-lg">
                    <img src="/assets/images/resources/cp-logo.png" alt="" />
                  </div>{/*amz-lg end*/}
                  <div className="clearfix" />
                </div>{/*abt-amz end*/}
                <div className="amz-img-inf">
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro19.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3><a href="#" title>HEMOON Men’s casual sportswear..</a></h3>
                          <span>$32.99</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro20.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3><a href="#" title> Men's Insulated Front-Zip Jacket </a></h3>
                          <span className="pr-d">$34.90</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro21.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Dickies Men's Sanded Duck Jacket </a></h3>
                          <span className="pr-d">$17.49</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro22.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Men's Big-Tall Lined Eisenhower Jacket </a></h3>
                          <span className="pr-d">$39.00</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro23.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Dickies Men's Sanded Duck Jacket </a></h3>
                          <span className="pr-d">$17.49</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 col-6 full_wdth">
                      <div className="mg-inf">
                        <div className="img-sr">
                          <a href="#" title>
                            <img src="/assets/images/resources/pro24.png" alt="" />
                          </a>
                        </div>
                        <div className="info-sr">
                          <h3> <a href="#" title>Men's Big-Tall Lined Eisenhower Jacket </a></h3>
                          <span className="pr-d">$39.00</span>
                        </div>
                      </div>{/*mg-inf end*/}
                    </div>
                  </div>
                </div>{/*amz-img-in*/}
              </div>{/*amazon end*/}
            </div>{/*amz_products_content end*/}
          </div>
        </div>
      </div>
    </section>{/*Featured Videos end*/}
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
  
)
}
export default SingleChannelAbout;