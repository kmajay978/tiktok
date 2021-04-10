import React, { useEffect } from 'react'
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu'
import $ from 'jquery';


const UploadVideo = () => {
    useEffect(() => {
       
    })

    return (
        <div className="wrapper">
           <Header/>
           <SideMenu/>
            <section className="upload-videooz">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="video-file">
                                <i className="icon-graphics_05" />
                                <h3>Select video files to upload </h3>
                                <span>or drag &amp; drop video files</span>
                                <form>
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        Upload Video
                                  </label>
                                    <input id="file-upload" type="file" />
                                </form>
                            </div>{/*video-file end*/}
                        </div>
                        <div className="col-lg-6">
                            <div className="youtube-dwn">
                                <i className="icon-graphics_03" />
                                <h3>Import videos from YouTube </h3>
                                <span>Copy / Paste your video link here</span>
                                <form>
                                    <input type="text" name="import_video" placeholder="Paste link here" />
                                    <button type="submit">Import Video</button>
                                </form>
                            </div>{/*youtube-dwn end*/}
                        </div>
                    </div>
                </div>
            </section>{/*upload-videooz end*/}
            <section className="suggestions">
                <div className="container">
                    <div className="sgst_content">
                        <h3>Help &amp; Suggestions</h3>
                        <p>By submitting your videos to ProjectFitnessTV, you acknowledge that you agree to ProjectFitnessTV’s<a href="#" title> Terms of Service</a>and<a href="#" title>Community Guidelines</a>. Please be sure not to violate others’ copyright or privacy rights.<a href="#"> Learn more</a></p>
                    </div>
                </div>
            </section>{/*Suggestions end*/}
            <section className="abt-vidz">
                <ul>
                    <li>
                        <a href="#">Upload Instructions </a>
                    </li>
                    <li>
                        <a href="#">Troubleshooting </a>
                    </li>
                    <li>
                        <a href="#">Mobile Upload </a>
                    </li>
                </ul>
            </section>{/*abt-vidz*/}
            <footer>
                <div className="container">
                    <div className="top-footer">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ft-logo">
                                    <img src="/assets/images/ft-logo.png" alt="" />
                                </div>{/*ft-logo end*/}
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="widget">
                                    <h3 className="widget-title">pages</h3>
                                    <ul className="pages-link">
                                        <li><a href="#" title>About</a></li>
                                        <li><a href="#" title>Community Rules</a></li>
                                        <li><a href="#" title>Privacy</a></li>
                                        <li><a href="#" title>Terms</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="widget">
                                    <h3 className="widget-title">Links</h3>
                                    <ul className="pages-link">
                                        <li><a href="#" title>Blog</a></li>
                                        <li><a href="#" title>Contact</a></li>
                                        <li><a href="#" title>Donate</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                                <div className="widget">
                                    <h3 className="widget-title">support</h3>
                                    <ul className="pages-link">
                                        <li><a href="#" title>Support</a></li>
                                        <li><a href="#" title>FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-6 col-12">
                                <div className="widget widget-information">
                                    <h3 className="widget-title">Information</h3>
                                    <p>Oren is a video sharing platform created for the discovery &amp; promotion of content creators. It's home to breaking news in social media, &amp; urban cultural entertainment.</p>
                                </div>{/*widget-information end*/}
                            </div>
                        </div>
                    </div>{/*top-footer end*/}
                    <div className="bottom-strip">
                        <p>© azyrusthemes    <i className="icon-like" /> Made in India</p>
                        <ul className="social-links">
                            <li><a href="#" title><i className="icon-facebook-official" /></a></li>
                            <li><a href="#" title><i className="icon-twitter" /></a></li>
                            <li><a href="#" title><i className="icon-instagram" /></a></li>
                        </ul>
                        <div className="clearfix" />
                    </div>{/*bottom-strip end*/}
                </div>
            </footer>{/*footer end*/}
        </div>

    )
}
export default UploadVideo;