// Importing React from the React package
// Importing colors from the our file path ./colors.json
import React, { useState } from 'react';
import colors from './colors.json';

//Interface Color and what you expect, hex, name, and comp
interface Color {
  hex: string;
  name: string;
  comp: { hex: string; name: string }[];
}

//Create a state variable that will give us our main color first
//State variable gets upadted and rerendered 
const ColorCard: React.FC<Color> = ({ hex, name, comp }) => {
    const [displayHex, setDisplayHex] = useState(hex);


//Define Onmouse what happens when a user hovers over the element
//When the mouse enters the div, it calls displayHex and rerenders the component
    return (
      <div className="m-4 p-4 border rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <div 
            className="w-12 h-12 rounded-full mr-4" 
            style={{ backgroundColor: `#${hex}` }}
            onMouseEnter={() => setDisplayHex(hex)}
          ></div>
          <h2 className="text-xl font-bold">{name}</h2>
        </div>
        <p className="text-gray-600 mb-2">Hex: #{displayHex}</p>
        <div className="flex flex-wrap">
          {comp.map((c, index) => (
    // When you move your mouse over a complementary color swatch,
    //it changes the displayed hex code to that color's hex code.
    //When you move your mouse away from a complementary color swatch, 
    //it changes the displayed hex code back to the main color's hex code.
            <div 
              key={index} 
              className="w-8 h-8 rounded-full mr-2 mb-2" 
              style={{ backgroundColor: `#${c.hex}` }} 
              title={c.name}
              onMouseEnter={() => setDisplayHex(c.hex)}
              onMouseLeave={() => setDisplayHex(hex)}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  function App() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Color Palette</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colors.map((color: Color, index: number) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>
      </div>
    );
  }
  
  export default App;