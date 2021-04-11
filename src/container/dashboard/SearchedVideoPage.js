import React from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu'

const SearchedVideoPage = () => {
    return(
        <div className="wrapper hp_1">
            <Header />
            <SideMenu/>
        <section className="filter-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                <div className="filter">
                  <h3 className="fl-head"><i className="icon-filter" /> Filter</h3>
                </div>{/*filter end*/}						
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                <div className="filter">
                  <h3 className="fl-head"><i className="icon-calender" /> Upload Date</h3>
                  <ul className="lnks">
                    <li><a href="#" title>Last hour</a></li>
                    <li><a href="#" title>Today</a></li>
                    <li><a href="#" title>This week</a></li>
                    <li><a href="#" title>This month</a></li>
                    <li><a href="#" title>This year</a></li>
                  </ul>
                </div>{/*filter end*/}
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                <div className="filter">
                  <h3 className="fl-head"><i className="icon-playlist" /> Type</h3>
                  <ul className="lnks">
                    <li><a href="#" title>Video <i className="icon-cancel" /></a></li>
                    <li><a href="#" title>Channel</a></li>
                    <li><a href="#" title>Playlist</a></li>
                    <li><a href="#" title>Movie</a></li>
                    <li><a href="#" title>Show</a></li>
                  </ul>
                </div>{/*filter end*/}
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                <div className="filter">
                  <h3 className="fl-head"><i className="icon-watch_later" /> Duration</h3>
                  <ul className="lnks">
                    <li><a href="#" title>Short ( 4 min)</a></li>
                    <li><a href="#" title>Long ( 20 min)</a></li>
                  </ul>
                </div>{/*filter end*/}
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                <div className="filter">
                  <h3 className="fl-head"><i className="icon-features" /> Features</h3>
                  <ul className="lnks">
                    <li><a href="#" title>Live</a></li>
                    <li><a href="#" title>4K</a></li>
                    <li><a href="#" title>HD <i className="icon-cancel" /></a></li>
                    <li><a href="#" title>360</a></li>
                    <li><a href="#" title>3D</a></li>
                  </ul>
                </div>{/*filter end*/}
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6 full_wdth">
                <div className="filter">
                  <h3 className="fl-head"><i className="icon-star" /> Sort by</h3>
                  <ul className="lnks">
                    <li><a href="#" title>Relevance </a></li>
                    <li><a href="#" title>Upload data</a></li>
                    <li><a href="#" title>View count</a></li>
                    <li><a href="#" title>Rating</a></li>
                  </ul>
                </div>{/*filter end*/}
              </div>
            </div>
          </div>
        </section>{/*filter-sec end*/}
        <section className="vds-main">
          <div className="vidz-row">
            <div className="container">
              <div className="vidz_list m-0">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>686K views .<small className="posted_dt">1 week ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Eros Now</a> </h4>
                        <span>283K views .<small className="posted_dt">3 months ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Maketzi</a> </h4>
                        <span>612K views .<small className="posted_dt">5 months ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>ScereBro</a> </h4>
                        <span>45K views .<small className="posted_dt">3 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>MathChief</a> </h4>
                        <span>86K views .<small className="posted_dt">6 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>144K views .<small className="posted_dt">6 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Loskes</a></h4>
                        <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                </div>
              </div>{/*vidz_list end*/}
            </div>
          </div>{/*vidz-row end*/}
          <div className="vidz-row">
            <div className="container">
              <div className="vidz_list m-0">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>ScereBro</a> </h4>
                        <span>45K views .<small className="posted_dt">3 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>MathChief</a> </h4>
                        <span>86K views .<small className="posted_dt">6 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>144K views .<small className="posted_dt">6 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Loskes</a> </h4>
                        <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                </div>
              </div>{/*vidz_list end*/}
            </div>
          </div>{/*vidz-row end*/}
          <div className="vidz-row">
            <div className="container">
              <div className="vidz_list m-0">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>686K views .<small className="posted_dt">1 week ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Eros Now</a> </h4>
                        <span>283K views .<small className="posted_dt">3 months ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Maketzi</a> </h4>
                        <span>612K views .<small className="posted_dt">5 months ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>ScereBro</a> </h4>
                        <span>45K views .<small className="posted_dt">3 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>MathChief</a> </h4>
                        <span>86K views .<small className="posted_dt">6 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>144K views .<small className="posted_dt">6 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Loskes</a></h4>
                        <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                </div>
              </div>{/*vidz_list end*/}
            </div>
          </div>{/*vidz-row end*/}
          <div className="vidz-row">
            <div className="container">
              <div className="vidz_list m-0">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>686K views .<small className="posted_dt">1 week ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Eros Now</a> </h4>
                        <span>283K views .<small className="posted_dt">3 months ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Maketzi</a> </h4>
                        <span>612K views .<small className="posted_dt">5 months ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>ScereBro</a> </h4>
                        <span>45K views .<small className="posted_dt">3 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>MathChief</a> </h4>
                        <span>86K views .<small className="posted_dt">6 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                        <span>144K views .<small className="posted_dt">6 days ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-6 full_wdth">
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
                        <h4><a href="Single_Channel_Home.html" title>Loskes</a></h4>
                        <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                      </div>
                    </div>{/*videoo end*/}
                  </div>
                </div>
              </div>{/*vidz_list end*/}
            </div>
          </div>{/*vidz-row end*/}
        </section>{/*vds-main end*/}
        <section className="more_items_sec mgt-50 text-center">
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
export default SearchedVideoPage;