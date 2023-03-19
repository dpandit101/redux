import logo from './logo.svg';
import {User} from './components/user'
import HomeContainer from './Container/HomeContainer'
import './App.css';

function App() {
  const data1={
    name:'hello how r you',
    age:31,
    year:1995
  }
  return (
    <div className="App">
      <HomeContainer/>
      {/* <User data={{name:'Dhamma Pandit',age:30,year:1991}}/> */}
      
    </div>
  );
}

export default App;
