import React from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu'

const UploadEdit = () => {
    return (
        <div className="wrapper">
            <Header />
            <SideMenu />
            <section className="upload-detail">
                <div className="container">
                    <h3> Upload Details</h3>
                    <div className="vid_thumbainl tr">
                        <a href="#" title>
                            <img src="/assets/images/resources/vide1.png" alt="" />
                            <span className="vid-time">30:32</span>
                        </a>
                    </div>{/*vid_thumbnail tr end*/}
                    <div className="video_info sr">
                        <h3><a href="#" title>30-Minute Beginner's Strength Training workout</a></h3>
                        <h4>102.6 MB, 2:13 MIN Remaining</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '45%' }}>
                                <span className="sr-only">70% Complete</span>
                            </div>
                        </div>
                        <a href="#" title className="cancel_vid">
                            <i className="icon-cancel" />
                        </a>
                        <p> Your Video is still uploading, please keep this page open util it’s done.</p>
                    </div>{/*videoo end*/}
                    <div className="clearfix" />
                </div>
            </section>{/*upload-detail end*/}
            <section className="vid-title-sec">
                <div className="container">
                    <form>
                        <div className="vid-title">
                            <h2 className="title-hd">Video Title </h2>
                            <div className="form_field">
                                <input type="text" placeholder="Add here (99 characters remaining)" />
                            </div>
                        </div>{/*vid-title*/}
                        <div className="abt-vidz-pr">
                            <h2 className="title-hd"> About </h2>
                            <div className="form_field">
                                <textarea placeholder="Description" defaultValue={""} />
                            </div>
                        </div>{/*abt-vidz*/}
                        <div className="cls-vidz">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="option">
                                        <h2 className="title-hd">Orientation </h2>
                                        <div className="form_field">
                                            <select>
                                                <option>Straight</option>
                                                <option>Straight</option>
                                                <option>Straight</option>
                                                <option>Straight</option>
                                            </select>
                                            <a href="#" title className="arw_vz">
                                                <svg width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9394 7.51447L22.0607 9.63579L12 19.6964L1.93936 9.63579L4.06068 7.51447L12 15.4538L19.9394 7.51447Z" fill="#9494A0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>{/*option end*/}
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="option">
                                        <h2 className="title-hd">Privacy Settings</h2>
                                        <div className="form_field">
                                            <select>
                                                <option>Public</option>
                                                <option>Public</option>
                                                <option>Public</option>
                                                <option>Public</option>
                                            </select>
                                            <a href="#" title className="arw_vz">
                                                <svg width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9394 7.51447L22.0607 9.63579L12 19.6964L1.93936 9.63579L4.06068 7.51447L12 15.4538L19.9394 7.51447Z" fill="#9494A0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>{/*option end*/}
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="option">
                                        <h2 className="title-hd">Monetize </h2>
                                        <div className="form_field">
                                            <select>
                                                <option>Yes</option>
                                                <option>Yes</option>
                                                <option>Yes</option>
                                                <option>Yes</option>
                                            </select>
                                            <a href="#" title className="arw_vz">
                                                <svg width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9394 7.51447L22.0607 9.63579L12 19.6964L1.93936 9.63579L4.06068 7.51447L12 15.4538L19.9394 7.51447Z" fill="#9494A0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>{/*option end*/}
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                    <div className="option">
                                        <h2 className="title-hd">License </h2>
                                        <div className="form_field">
                                            <select>
                                                <option>Standard</option>
                                                <option>Standard</option>
                                                <option>Standard</option>
                                                <option>Standard</option>
                                            </select>
                                            <a href="#" title className="arw_vz">
                                                <svg width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9394 7.51447L22.0607 9.63579L12 19.6964L1.93936 9.63579L4.06068 7.51447L12 15.4538L19.9394 7.51447Z" fill="#9494A0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>{/*option end*/}
                                </div>
                            </div>
                        </div>{/*cls-vidz end*/}
                        <div className="abt-tags">
                            <div className="row">
                                <div className="col-lg-9 col-md-9 col-sm-8 col-12">
                                    <h2 className="title-hd">Tags (13 Tags Remaining) </h2>
                                    <div className="form_field pr">
                                        <input type="text" placeholder="#gaming #PS4 #funny" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-12">
                                    <div className="option">
                                        <h2 className="title-hd">License </h2>
                                        <div className="form_field">
                                            <select>
                                                <option>Standard</option>
                                                <option>Standard</option>
                                                <option>Standard</option>
                                                <option>Standard</option>
                                            </select>
                                            <a href="#" title className="arw_vz">
                                                <svg width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9394 7.51447L22.0607 9.63579L12 19.6964L1.93936 9.63579L4.06068 7.51447L12 15.4538L19.9394 7.51447Z" fill="#9494A0" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>{/*option end*/}
                                </div>
                            </div>
                        </div>{/*abt-tags-*/}
                        <div className="amazon-products">
                            <h2 className="title-hd">Amazon affiliate product links (Add upto 4 products) </h2>
                            <div className="prodcts-sec">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                        <div className="form_field pr">
                                            <input type="text" placeholder="Add Link " />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                        <div className="form_field pr">
                                            <input type="text" placeholder="Add Link " />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                        <div className="form_field pr">
                                            <input type="text" placeholder="Add Link " />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                        <div className="form_field pr">
                                            <input type="text" placeholder="Add Link " />
                                        </div>
                                    </div>
                                </div>
                            </div>{/*prodcts-sec end*/}
                        </div>{/*amazon-products end*/}
                        <div className="category">
                            <h2 className="title-hd">Category (select upto 6 categories)</h2>
                            <div className="category-typ">
                                <ul className="catgss_list">
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="abaft" defaultValue="ab" />
                                                <b className="checkmark" />
                                                <span>Abaft</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Brick" defaultValue="ab" />
                                                <b className="checkmark" />
                                                <span>Brick</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Purpose" defaultValue="ab" />
                                                <b className="checkmark" />
                                                <span>Purpose</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Shallow" defaultValue="ab" />
                                                <b className="checkmark" />
                                                <span>Shallow</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Spray" defaultValue="brick" />
                                                <b className="checkmark" />
                                                <span>Spray</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Seashore" defaultValue="brick" />
                                                <b className="checkmark" />
                                                <span>Seashore</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Orange" defaultValue="brick" />
                                                <b className="checkmark" />
                                                <span>Orange</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Dynamic" defaultValue="brick" />
                                                <b className="checkmark" />
                                                <span>Dynamic</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Planes" defaultValue="purpose" />
                                                <b className="checkmark" />
                                                <span>Planes</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Comfortable" defaultValue="purpose" />
                                                <b className="checkmark" />
                                                <span>Comfortable</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Leg" defaultValue="purpose" />
                                                <b className="checkmark" />
                                                <span>Leg</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Fall" defaultValue="purpose" />
                                                <b className="checkmark" />
                                                <span>Fall</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Pin" defaultValue="shallow" />
                                                <b className="checkmark" />
                                                <span>Pin</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Trouble" defaultValue="shallow" />
                                                <b className="checkmark" />
                                                <span>Trouble</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Cemetery" defaultValue="shallow" />
                                                <b className="checkmark" />
                                                <span>Cemetery</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Sort" defaultValue="shallow" />
                                                <b className="checkmark" />
                                                <span>Sort</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Respect" defaultValue="spray" />
                                                <b className="checkmark" />
                                                <span>Respect</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Rice" defaultValue="spray" />
                                                <b className="checkmark" />
                                                <span>Rice</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Disagreeable" defaultValue="spray" />
                                                <b className="checkmark" />
                                                <span>Disagreeable</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Minister" defaultValue="spray" />
                                                <b className="checkmark" />
                                                <span>Minister</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Quiet" defaultValue="seashore" />
                                                <b className="checkmark" />
                                                <span>Quiet</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Rescue" defaultValue="seashore" />
                                                <b className="checkmark" />
                                                <span>Rescue</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Agonizing" defaultValue="seashore" />
                                                <b className="checkmark" />
                                                <span>Agonizing</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Stitch" defaultValue="seashore" />
                                                <b className="checkmark" />
                                                <span>Stitch</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Scissors" defaultValue="orange" />
                                                <b className="checkmark" />
                                                <span>Scissors</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Spiffy" defaultValue="orange" />
                                                <b className="checkmark" />
                                                <span>Spiffy</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Tin" defaultValue="orange" />
                                                <b className="checkmark" />
                                                <span>Tin</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Rambunctious" defaultValue="orange" />
                                                <b className="checkmark" />
                                                <span>Rambunctious</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Sordid" defaultValue="dynamic" />
                                                <b className="checkmark" />
                                                <span>Sordid</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Wise" defaultValue="dynamic" />
                                                <b className="checkmark" />
                                                <span>Wise</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Boy" defaultValue="dynamic" />
                                                <b className="checkmark" />
                                                <span>Boy</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Fold" defaultValue="dynamic" />
                                                <b className="checkmark" />
                                                <span>Fold</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Moan" defaultValue="planes" />
                                                <b className="checkmark" />
                                                <span>Moan</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Overjoyed" defaultValue="planes" />
                                                <b className="checkmark" />
                                                <span>Overjoyed</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Obsequious" defaultValue="planes" />
                                                <b className="checkmark" />
                                                <span>Obsequious</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Heat" defaultValue="planes" />
                                                <b className="checkmark" />
                                                <span>Heat</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Incompetent" defaultValue="comfortable" />
                                                <b className="checkmark" />
                                                <span>Incompetent</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Grin" defaultValue="comfortable" />
                                                <b className="checkmark" />
                                                <span>Grin</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Fat" defaultValue="comfortable" />
                                                <b className="checkmark" />
                                                <span>Fat</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="chekbox-lg">
                                            <label>
                                                <input type="checkbox" name="Gate" defaultValue="comfortable" />
                                                <b className="checkmark" />
                                                <span>Gate</span>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <div className="clearfix" />
                                <div className="btn-sbmit">
                                    <button type="submit">Save</button>
                                </div>{/*btn-sbmit end*/}
                            </div>{/*category-typ*/}
                        </div>{/*Category*/}
                    </form>
                </div>
            </section>{/*vid-title-sec*/}
            <section className="suggestions">
                <div className="container">
                    <div className="sgst_content">
                        <h3>Help &amp; Suggestions</h3>
                        <p>By submitting your videos to ProjectFitnessTV, you acknowledge that you agree to ProjectFitnessTV’s<a href="#" title> Terms of Service</a>and<a href="#" title>Community Guidelines</a>. Please be sure not to violate others’ copyright or privacy rights.<a href="#"> Learn more</a></p>
                    </div>
                </div>
            </section>{/*Suggestions end*/}
            <div className="abt-vidz">
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
            </div>{/*abt-vidz*/}
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
export default UploadEdit;