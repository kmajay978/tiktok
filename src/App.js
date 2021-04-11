import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home , HistoryPage ,  UploadVideo , SingleChannelAbout  , SingleVideoPage ,
   UserAccountPage, 
   UploadEdit, SearchedVideoPage, BrowserChannels} from './container/dashboard'
import $ from 'jquery';
import { useEffect } from 'react';
import { Login , Signup } from './container/account';


function App() {
  
 
  return (
    <Router>
      <Switch>
         <Route exact path="/login" component={Login} />
         <Route path="/signup" component={Signup}/>

          <Route  path="/" component={Home} />
          <Route  path="/history-page" component={HistoryPage} />
          <Route  path="/upload-video" component={UploadVideo} />
          <Route  path="/single-Channel-about" component={SingleChannelAbout}/>
          <Route path="/User-Account-Page" component={UserAccountPage}/>
          <Route path="/single_video_page" component={SingleVideoPage}/>
          <Route path="/upload-edit" component={UploadEdit}/> 
          <Route path="/searched-videos-page" component={SearchedVideoPage}/>
          <Route path="/browse-channels" component={BrowserChannels}/>
      </Switch>
      
    </Router>
  );
}

export default App;
