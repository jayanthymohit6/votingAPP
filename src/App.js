import React ,{Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { voteAngular, voteReact, voteVueJs } from './actions/action';

class App extends Component {
constructor(props) {
  super(props);
  this.store = this.props.store;
}

handleVoteAngular = () => {
this.store.dispatch(voteAngular())
}
handleVoteReact = () => {
  this.store.dispatch(voteReact())
}
handleVoteVuejs =() => {
  this.store.dispatch(voteVueJs())
}

render() {
  return (
    <div>
    
      <h2>What is your favorite front-end development framework ?</h2>
      <h4>Click on the logos below to vote!</h4>
      <br />
      <div className="row">
        <div className="col-xs-offset-3 col-xs-2">
          <img src={require('../src/assets/angular.png')} height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
        </div>
        <div className="col-xs-2">
          <img src={require('../src/assets/react.png')} height="96" alt="React" onClick={this.handleVoteReact}></img>
        </div>
        <div className="col-xs-2">
          <img src={require('../src/assets/vue.png')} height="96" alt="Vue.js" onClick={this.handleVoteVuejs}></img>
        </div>
      </div>
    </div>
 
  );
}
}

export default App;
