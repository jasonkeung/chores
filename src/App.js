import React from 'react';
import ChoreCard from './ChoreCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChoreCard shift={0} chore="Clean kitchen counter, coffee table, both sinks, thorough sweep of common area"></ChoreCard>
      <ChoreCard shift={1} chore="Clean bathtub"></ChoreCard>
      <ChoreCard shift={2} chore="Clean stovetop, microwave, and oven"></ChoreCard>
      <ChoreCard shift={3} chore="Clean toilet"></ChoreCard>
      <ChoreCard shift={4} chore="Nothing!"></ChoreCard>
    </div>
  );
}



export default App;
