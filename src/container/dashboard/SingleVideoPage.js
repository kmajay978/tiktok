import React from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';

const SingleVideoPage = () => {
    return(
        <div className="wrapper">
 <Header/>
 <SideMenu/>
  <section className="mn-sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="mn-vid-sc single_video">
            <div className="vid-1">
              <div className="vid-pr">
                <video id="my-video" className="video-js" controls preload="auto" width={640} height={264} poster="/assets/images/resources/poster-img.jpg" data-setup="{}">
                  <source src="demo_video.mp4" type="video/mp4" />
                  <source src="demo_video.webm" type="video/webm" />
                </video>
              </div>{/*vid-pr end*/}
              <div className="vid-info">
                <h3>Kingdom Come: Deliverance Funny Moments and Fails Compilation</h3>
                <div className="info-pr">
                  <span>60,723,169 views</span>
                  <ul className="pr_links">
                    <li>
                      <button data-toggle="tooltip" data-placement="top" title="I like this">
                        <i className="icon-thumbs_up_fill" />
                      </button>
                      <span>388K</span>
                    </li>
                    <li>
                      <button data-toggle="tooltip" data-placement="top" title="I dislike this">
                        <i className="icon-thumbs_down_fill" />
                      </button>
                      <span>28K</span>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>{/*info-pr end*/}
              </div>{/*vid-info end*/}
            </div>{/*vid-1 end*/}
            <div className="abt-mk">
              <div className="info-pr-sec">
                <div className="vcp_inf cr">
                  <div className="vc_hd">
                    <img src="/assets/images/resources/th5.png" alt="" />
                  </div>
                  <div className="vc_info pr">
                    <h4><a href="#" title>ScereBro</a></h4>
                    <span>Published on Oct 22, 2017</span>
                  </div>
                </div>{/*vcp_inf end*/}							
                <ul className="chan_cantrz">
                  <li>
                    <a href="#" title className="donate">Donate</a>
                  </li>
                  <li>
                    <a href="#" title className="subscribe">Subscribe <strong>13M</strong></a>
                  </li>
                </ul>{/*chan_cantrz end*/}
                <ul className="df-list">
                  <li>
                    <button data-toggle="tooltip" data-placement="top" title="Add to playlist">
                      <i className="icon-add_to_playlist" />
                    </button>
                  </li>
                  <li>
                    <button data-toggle="tooltip" data-placement="top" title="Favorite">
                      <i className="icon-like" />
                    </button>
                  </li>
                  <li>
                    <button data-toggle="tooltip" data-placement="top" title="Watch Later">
                      <i className="icon-watch_later" />
                    </button>
                  </li>
                  <li>
                    <button data-toggle="tooltip" data-placement="top" title="Share">
                      <i className="icon-share" />
                    </button>
                  </li>
                  <li>
                    <button data-toggle="tooltip" data-placement="top" title="Report Video">
                      <i className="icon-flag" />
                    </button>
                  </li>
                </ul>{/*df-list end*/}
                <div className="clearfix" />
              </div>
              <div className="clearfix" />
              <div className="about-ch-sec">
                <div className="abt-rw">
                  <h4>Cast:</h4>
                  <ul>
                    <li><span>Nathan Drake</span></li>
                    <li><span>Victor Sullivan </span></li>
                    <li><span>Sam Drake </span></li>
                    <li><span>Elena Fisher</span></li>
                  </ul>
                </div>
                <div className="abt-rw">
                  <h4>Category : </h4>
                  <ul>
                    <li><span>Gaming</span></li>
                    <li><span>PS4 Exclusive</span></li>
                    <li><span>Gameplay</span></li>
                    <li><span>1080p</span></li>
                  </ul>
                </div>
                <div className="abt-rw">
                  <h4>About : </h4>
                  <p> Three years after the events of Uncharted 3: Drake's Deception, Nathan Drake, now retired as a fortune hunter, has settled into a normal life with his wife Elena Fisher. His world is then turned upside down when his older brother Sam, long believed to be dead, suddenly reappears seeking Drake's help. </p>
                </div>
                <div className="abt-rw tgs">
                  <h4>Tags : </h4>
                  <ul>
                    <li><a href="#" title>#Kingdom</a></li>
                    <li><a href="#" title>#ImStillHereBecause </a></li>
                    <li><a href="#" title>#denim</a></li>
                    <li><a href="#" title>#tshirt</a></li>
                  </ul>
                </div>
              </div>{/*about-ch-sec end*/}
            </div>{/*abt-mk end*/}
            <div className="amazon">
              <div className="abt-amz">
                <div className="amz-hd">
                  <h2>Products used in this video </h2>
                  <h3>Use CODE:<span> ScereBro26</span> 10% Discount</h3>
                </div>{/*amz-hd end*/}
                <div className="amz-lg">
                  <img src="/assets/images/resources/cp-logo.png" alt="" />
                </div>{/*amz-lg end*/}
                <div className="clearfix" />
              </div>{/*abt-amz end*/}
              <div className="amz-img-inf">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
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
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
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
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
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
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 full_wdth">
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
                </div>
              </div>{/*amz-img-in*/}
            </div>{/*amazon end*/}
            <div className="cmt-bx">
              <ul className="cmt-pr">
                <li><span>18,386</span> Comments</li>
                <li>
                  <span><i className="icon-sort_by" /><a href="#" title>Sort By</a></span>
                </li>
              </ul>
              <div className="clearfix" />
              <div className="clearfix" />
              <div className="vcp_inf pc">
                <div className="vc_hd">
                  <img src="/assets/images/resources/th1.png" alt="" />
                </div>
                <form>
                  <input type="text" placeholder="Add a public comment" />
                  <button type="submit">Comment</button>
                </form>
                <div className="clearfix" />
                <div className="rt-cmt">
                  <a href="#" title>
                    <i className="icon-cancel" />
                  </a>
                  <div className="clearfix" />
                </div>{/*vcp_inf end*/}
              </div>{/*cmt-bx end*/}
              <ul className="cmn-lst">
                <li>
                  <div className="vcp_inf">
                    <div className="vc_hd">
                      <img src="/assets/images/resources/th2.png" alt="" />
                    </div>
                    <div className="coments">
                      <div className="pinned-comment">
                        <span><i className="icon-pinned" />Pinned by ScereBro</span>
                      </div>
                      <h2>ScereBro <small className="posted_dt"> . 18 hours ago</small></h2>
                      <p>Where does Thor: Ragnarok rank amongst the other Thor movies? Amongst the rest of the MCU? Let us know in the comments below and tell us which other movies you'd like to see us make Honest.</p>
                      <ul className="cmn-i">
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_up" />
                          </a>
                          <span>680</span>
                        </li>
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_down" />
                          </a>
                          <span>21</span>
                        </li>
                      </ul>
                      <a href="#" title>View all 164 replies</a>
                    </div>{/*coments end*/}
                  </div>{/*vcp_inf end*/}
                </li>
                <li>
                  <div className="vcp_inf">
                    <div className="vc_hd">
                      <img src="/assets/images/resources/th3.png" alt="" />
                    </div>
                    <div className="coments">
                      <h2>Doge <small className="posted_dt"> . 2 hours ago</small></h2>
                      <p>Depressive Alcoholics are my favorite superheroes </p>
                      <ul className="cmn-i">
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_up" />
                          </a>
                          <span>61</span>
                        </li>
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_down" />
                          </a>
                          <span>3</span>
                        </li>
                      </ul>
                      <a href="#" title>View all 26 replies</a>
                    </div>{/*coments end*/}
                  </div>{/*vcp_inf end*/}
                </li>
                <li>
                  <div className="vcp_inf">
                    <div className="vc_hd">
                      <img src="/assets/images/resources/th4.png" alt="" />
                    </div>
                    <div className="coments">
                      <h2>Juan Lacanaria <small className="posted_dt"> . 12 hours ago</small></h2>
                      <p>Can you please say "winner winner , chicken dinner" </p>
                      <ul className="cmn-i">
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_up" />
                          </a>
                          <span>22</span>
                        </li>
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_down" />
                          </a>
                          <span />
                        </li>
                      </ul>
                      <a href="#" title>View all 9 replies</a>
                    </div>{/*coments end*/}
                  </div>{/*vcp_inf end*/}
                </li>
                <li>
                  <div className="vcp_inf">
                    <div className="vc_hd">
                      <img src="/assets/images/resources/th5.png" alt="" />
                    </div>
                    <div className="coments">
                      <h2>Comander Lucky <small className="posted_dt"> . 2 weeks ago</small></h2>
                      <p>It looked like electro shuffle was most synced</p>
                      <ul className="cmn-i">
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_up" />
                          </a>
                          <span>37</span>
                        </li>
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_down" />
                          </a>
                          <span>3</span>
                        </li>
                      </ul>
                      <a href="#" title>View all 12 replies</a>
                    </div>{/*coments end*/}
                  </div>{/*vcp_inf end*/}
                </li>
                <li>
                  <div className="vcp_inf">
                    <div className="vc_hd">
                      <img src="/assets/images/resources/th1.png" alt="" />
                    </div>
                    <div className="coments">
                      <h2>Menji <small className="posted_dt"> . 1 week ago</small></h2>
                      <p>The floss, fresh, flapper, ride the pony were all in sync if you ask me plus if they used the original music they would be copyrighted. Plus the original music made it worst for these dances. </p>
                      <ul className="cmn-i">
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_up" />
                          </a>
                          <span>147</span>
                        </li>
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_down" />
                          </a>
                          <span>8</span>
                        </li>
                      </ul>
                      <a href="#" title>View all 7 replies</a>
                    </div>{/*coments end*/}
                  </div>{/*vcp_inf end*/}
                </li>
                <li>
                  <div className="vcp_inf">
                    <div className="vc_hd">
                      <img src="/assets/images/resources/th3.png" alt="" />
                    </div>
                    <div className="coments">
                      <h2>Storax Storm <small className="posted_dt"> . 11 hours ago</small></h2>
                      <p>Well Epic Games would have gotten Copyrighted if they used the original music but yea I see you</p>
                      <ul className="cmn-i">
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_up" />
                          </a>
                          <span>71</span>
                        </li>
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_down" />
                          </a>
                          <span>28</span>
                        </li>
                      </ul>
                      <a href="#" title>View all 21 replies</a>
                    </div>{/*coments end*/}
                  </div>{/*vcp_inf end*/}
                </li>
                <li>
                  <div className="vcp_inf">
                    <div className="vc_hd">
                      <img src="/assets/images/resources/th2.png" alt="" />
                    </div>
                    <div className="coments">
                      <h2>Nick Jacobs <small className="posted_dt"> . 6 hours ago</small></h2>
                      <p>Electro shuffle best dance hands down </p>
                      <ul className="cmn-i">
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_up" />
                          </a>
                          <span>42</span>
                        </li>
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_down" />
                          </a>
                          <span />
                        </li>
                      </ul>
                      <a href="#" title>View all 32 replies</a>
                    </div>{/*coments end*/}
                  </div>{/*vcp_inf end*/}
                </li>
                <li>
                  <div className="vcp_inf">
                    <div className="vc_hd">
                      <img src="/assets/images/resources/th4.png" alt="" />
                    </div>
                    <div className="coments">
                      <h2>Jumpman30  <small className="posted_dt"> . 2 hours ago</small></h2>
                      <p>bruh okay the original fresh music is the best hands down, it looks classy. the music they put on the fresh in fort nite  makes it worse </p>
                      <ul className="cmn-i">
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_up" />
                          </a>
                          <span>48</span>
                        </li>
                        <li>
                          <a href="#" title>
                            <i className="icon-thumbs_down" />
                          </a>
                          <span>2</span>
                        </li>
                      </ul>
                      <a href="#" title>View all 3 replies</a>
                    </div>{/*coments end*/}
                  </div>{/*vcp_inf end*/}
                </li>
              </ul>{/*comment list end*/}
            </div>
          </div>{/*mn-vid-sc end-*/}
        </div>{/*-col-lg-9 end*/}
        <div className="col-lg-3">
          <div className="sidebar">
            <div className="vidz-prt">
              <h2 className="sm-vidz">Similar Videos</h2>
              <h3 className="aut-vid">
                <span>Autoplay </span>
                <label className="switch">
                  <input type="checkbox" />
                  <b className="slider round" />
                </label> 
              </h3>
              <div className="clearfix" />
            </div>{/*vidz-prt end*/}
            <div className="videoo-list-ab">
              <div className="videoo">
                <div className="vid_thumbainl">
                  <a href="single_video_page.html" title>
                    <img src="/assets/images/resources/vide1.png" alt="" />
                    <span className="vid-time">10:21</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info">
                  <h3><a href="#" title>Kingdom Come: Deliverance Funny Moments and Fails</a></h3>
                  <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>686K views .<small className="posted_dt">1 week ago</small></span>
                </div>
              </div>{/*videoo end*/}
              <div className="videoo">
                <div className="vid_thumbainl">
                  <a href="single_video_page.html" title>
                    <img src="/assets/images/resources/vide2.png" alt="" />
                    <span className="vid-time">13:49</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info">
                  <h3><a href="#" title>DR DISRESPECT - Before They Were Famous - Twitch Streamer</a></h3>
                  <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>686K views .<small className="posted_dt">1 week ago</small></span>
                </div>
              </div>{/*videoo end*/}
              <div className="videoo">
                <div className="vid_thumbainl">
                  <a href="single_video_page.html" title>
                    <img src="/assets/images/resources/vide3.png" alt="" />
                    <span className="vid-time">2:54</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info">
                  <h3><a href="#" title>Top Perectly Timed Twitch Moments 2017 #7</a></h3>
                  <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>686K views .<small className="posted_dt">1 week ago</small></span>
                </div>
              </div>{/*videoo end*/}
              <div className="ad-rw">
                <img src="/assets/images/resources/ad-img.jpg" alt="" />
              </div>
              <div className="videoo">
                <div className="vid_thumbainl">
                  <a href="single_video_page.html" title>
                    <img src="/assets/images/resources/vide4.png" alt="" />
                    <span className="vid-time">5:25</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info">
                  <h3><a href="#" title>Top 5 Amazing Bridge Block ever in PUBG</a></h3>
                  <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>686K views .<small className="posted_dt">1 week ago</small></span>
                </div>
              </div>{/*videoo end*/}
              <div className="videoo">
                <div className="vid_thumbainl">
                  <a href="single_video_page.html" title>
                    <img src="/assets/images/resources/vide5.png" alt="" />
                    <span className="vid-time">4:01</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info">
                  <h3><a href="#" title>Trailer Park Boys Season 12 - Official Trailer</a></h3>
                  <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>686K views .<small className="posted_dt">1 week ago</small></span>
                </div>
              </div>{/*videoo end*/}
              <div className="videoo">
                <div className="vid_thumbainl">
                  <a href="single_video_page.html" title>
                    <img src="/assets/images/resources/vide6.png" alt="" />
                    <span className="vid-time">6:20</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info">
                  <h3><a href="#" title>A day in the life of a Google software engineer</a></h3>
                  <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>686K views .<small className="posted_dt">1 week ago</small></span>
                </div>
              </div>{/*videoo end*/}
              <div className="videoo">
                <div className="vid_thumbainl">
                  <a href="single_video_page.html" title>
                    <img src="/assets/images/resources/vide7.png" alt="" />
                    <span className="vid-time">8:16</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info">
                  <h3><a href="#" title>Avengers: Infinity War - Gym Workout</a></h3>
                  <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>686K views .<small className="posted_dt">1 week ago</small></span>
                </div>
              </div>{/*videoo end*/}
              <div className="videoo">
                <div className="vid_thumbainl">
                  <a href="single_video_page.html" title>
                    <img src="/assets/images/resources/vide8.png" alt="" />
                    <span className="vid-time">29:32</span>
                    <span className="watch_later">
                      <i className="icon-watch_later_fill" />
                    </span>
                  </a>	
                </div>{/*vid_thumbnail end*/}
                <div className="video_info">
                  <h3><a href="#" title>How the Universe Works - The Milky Way Galaxy - Space</a></h3>
                  <h4><a href="#" title>newfox media</a> <span className="verify_ic"><i className="icon-tick" /></span></h4>
                  <span>686K views .<small className="posted_dt">1 week ago</small></span>
                </div>
              </div>{/*videoo end*/}
            </div>{/*videoo-list-ab end*/}
          </div>{/*side-bar end*/}
        </div>
      </div>
    </div>
  </section>{/*mn-sec end*/}
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
export  default SingleVideoPage;