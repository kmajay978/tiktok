import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home , HistoryPage ,  UploadVideo , SingleChannelAbout  , SingleVideoPage ,
   UserAccountPage, 
   UploadEdit, SearchedVideoPage, BrowserChannels} from './container/dashboard'
import { Login , Signup } from './container/account';
import ProtectedRoute from "./routes/Protected.route";

function App() {
  
 
  return (
    <Router>
      <Switch>
         <Route exact path="/login" component={Login} />
         <Route exact path="/signup" component={Signup}/>

          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/history-page" component={HistoryPage} />
          <ProtectedRoute path="/upload-video" component={UploadVideo} />
          <ProtectedRoute path="/single-Channel-about" component={SingleChannelAbout}/>
          <ProtectedRoute path="/User-Account-Page" component={UserAccountPage}/>
          <ProtectedRoute path="/single_video_page" component={SingleVideoPage}/>
          <ProtectedRoute path="/upload-edit" component={UploadEdit}/> 
          <ProtectedRoute path="/searched-videos-page" component={SearchedVideoPage}/>
          <ProtectedRoute path="/browse-channels" component={BrowserChannels}/>
      </Switch>
      
    </Router>
  );
}

export default App;
