import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home , HistoryPage , Login, UploadVideo} from './pages'
import $ from 'jquery';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/history-page" component={HistoryPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/upload-video" component={UploadVideo} />
      </Switch>
      
    </Router>
  );
}

export default App;
