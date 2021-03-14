import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JobRequest from './components/job-request/JobRequest';
import SuccessPage from './components/SuccessPage';
import ServiceList from './components/service/List';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ServiceList} />
        <Route path='/request/:pageNumber' component={JobRequest}></Route>
        <Route path='/success' component={SuccessPage}></Route>
      </Switch>
    </Router>
  );
};

export default App;
