import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home , HistoryPage , Login, UploadVideo , SingleChannelAbout , Signup , SingleVideoPage ,
   UserAccountPage , UploadEdit, SearchedVideoPage , BrowserChannels} from './pages'
import $ from 'jquery';
import { useEffect } from 'react';


function App() {
  
 
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/history-page" component={HistoryPage} />
          <Route path="/login" component={Login} />
          <Route  path="/upload-video" component={UploadVideo} />
          <Route  path="/single-Channel-about" component={SingleChannelAbout}/>
          <Route path="/signup" component={Signup}/>
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
