import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import { UserData } from './Data'

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: 'Users Gained',
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        'orange',
        'gray',
        'aqua',
        'navy blue',
        'green',
        'red',
        'olive'
      ]
    }]
  })

  return (
    <div className="App">
      <BarChart chartData={userData}/>
      <LineChart chartData={userData}/>
      <div className="pieChart">
        <PieChart chartData={userData}/>
      </div>
    </div>
  );
}

export default App;
