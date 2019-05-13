import React, { useReducer } from 'react';
import TabNavigator from './AppStackNavigator';
import songsReducer from './Reducers/songsReducer';
import ChartContext from './chart.context';

function App() {
  const initialState = [];
  const [store, dispatch] = useReducer(songsReducer, initialState);

  return (
    <ChartContext.Provider value={{ store, dispatch }}>
      <TabNavigator />
    </ChartContext.Provider>
  ); 
}
console.disableYellowBox = true;
export default App;