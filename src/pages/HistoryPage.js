import React from 'react'
import $ from 'jquery';
import SideMenu from '../components/SideMenu';

const HistoryPage = () =>{
    return(
    <div>
      <div className="wrapper">
  <header>
    <div className="top_bar">
      <div className="container">
        <div className="top_header_content">
          <div className="menu_logo">
            <a href="#" title className="menu">
              <i className="icon-menu" />
            </a>
            <a href="/" title className="logo">
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
  </header>{/*header end*/}
 <SideMenu/>
  <section className="ab-history">
    <div className="history-lst">
      <div className="container">
        <div className="history-hd-head">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="watch_history_tab" data-toggle="tab" href="#watch_history" role="tab" aria-controls="watch_history_tab" aria-selected="true">Watch history</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="search_history_tab" data-toggle="tab" href="#search_history" role="tab" aria-controls="search_history_tab" aria-selected="false">Search history </a>
            </li>
          </ul>{/*nav-tabs end*/}
          <a href="#" title className="clear-history">
            <i className="icon-cancel" />
            Clear all search history
          </a>
          <div className="clearfix" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="watch_history" role="tabpanel" aria-labelledby="watch_history_tab">
          <div className="tabs_lzt">
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide1.png" alt="" />
                    <span className="vid-time">10:21</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>686K views .<small className="posted_dt">1 week ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>{/*tab-history end*/}
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide2.png" alt="" />
                    <span className="vid-time">13:49</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                  <h4><a href="Single_Channel_Playlist.html.html" title>Eros Now</a> </h4>
                  <span>283K views .<small className="posted_dt">3 months ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide3.png" alt="" />
                    <span className="vid-time">2:54</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide4.png" alt="" />
                    <span className="vid-time">5:25</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>Maketzi</a> </h4>
                  <span>612K views .<small className="posted_dt">5 months ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide5.png" alt="" />
                    <span className="vid-time">4:01</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>ScereBro</a> </h4>
                  <span>45K views .<small className="posted_dt">3 days ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide6.png" alt="" />
                    <span className="vid-time">6:20</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>A day in the life of a Google software engineer</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>MathChief</a> </h4>
                  <span>86K views .<small className="posted_dt">6 days ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide7.png" alt="" />
                    <span className="vid-time">8:16</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>Avengers: Infinity War - Gym Workout motivation 2019</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>144K views .<small className="posted_dt">6 days ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide8.png" alt="" />
                    <span className="vid-time">29:32</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>Loskes</a></h4>
                  <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
          </div>{/*tabs_lz end*/}
        </div>
        <div className="tab-pane fade" id="search_history" role="tabpanel" aria-labelledby="search_history_tab">
          <div className="tabs_lzt">
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide1.png" alt="" />
                    <span className="vid-time">10:21</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>686K views .<small className="posted_dt">1 week ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>{/*tab-history end*/}
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide2.png" alt="" />
                    <span className="vid-time">13:49</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>Eros Now</a> </h4>
                  <span>283K views .<small className="posted_dt">3 months ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide3.png" alt="" />
                    <span className="vid-time">2:54</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>Animal Planet</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>2.6M views .<small className="posted_dt">2 months ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide4.png" alt="" />
                    <span className="vid-time">5:25</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>Maketzi</a> </h4>
                  <span>612K views .<small className="posted_dt">5 months ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide5.png" alt="" />
                    <span className="vid-time">4:01</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>ScereBro</a> </h4>
                  <span>45K views .<small className="posted_dt">3 days ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide6.png" alt="" />
                    <span className="vid-time">6:20</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>A day in the life of a Google software engineer</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>MathChief</a> </h4>
                  <span>86K views .<small className="posted_dt">6 days ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide7.png" alt="" />
                    <span className="vid-time">8:16</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>Avengers: Infinity War - Gym Workout motivation 2019</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>RealLifeLore</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>144K views .<small className="posted_dt">6 days ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
            <div className="tab-history">
              <div className="videoo">
                <div className="vid_thumbainl ms">
                  <a href="#" title>
                    <img src="/assets/images/resources/vide8.png" alt="" />
                    <span className="vid-time">29:32</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info ms">
                  <h3><a href="single_video_page.html" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                  <h4><a href="Single_Channel_Playlist.html" title>Loskes</a></h4>
                  <span>408K views .<small className="posted_dt">19 hours ago</small></span>
                </div>
                <a href="#" title className="delete-video">
                  <i className="icon-cancel" />
                </a>
                <div className="clearfix" />
              </div>{/*videoo end*/}
            </div>
          </div>{/*tabs_lz end*/}
        </div>
      </div>
    </div>
  </section>{/*ab-history end*/}
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

    </div>
    );
}
export default HistoryPage;