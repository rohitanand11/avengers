import React ,{useState} from 'react';
import Header from '../../components/header/Header';
import Corousal from '../../components/corousal/Corousal';

import DataArr from '../../data/dataArray/dataArray'
import Classes from './App.module.css';

const App = () => {

  const [dataArray,] = useState([...DataArr]); 

  return (
    <div className={Classes.app}>
      <Header/>
      <Corousal data = {dataArray}/>
    </div>
  );
}

export default App;
