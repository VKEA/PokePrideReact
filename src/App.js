import React from 'react';

import PokePrideCanvas from './PokePrideCanvas';
import PokemonSelector from './PokemonSelector';
import FlagSelector from './FlagSelector';
import SizeSlider from './SizeSlider';
import RandomButton from './RandomButton';
import Instructions from './Instructions';
import Copyright from './Copyright';


function App() {
  return (
    <div className="App">
      <PokePrideCanvas />
      <PokemonSelector />
      <FlagSelector />
      <SizeSlider />
      <RandomButton />
      <Instructions />
      <Copyright />
    </div>
  );
}

export default App;
