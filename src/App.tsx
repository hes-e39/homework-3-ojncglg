import React from 'react';
import colors from './colors.json';

interface Color {
  hex: string;
  name: string;
  comp: { hex: string; name: string }[];
}

const ColorCard: React.FC<Color> = ({ hex, name, comp }) => (
  <div className="m-4 p-4 border rounded-lg shadow-md">
    <div className="flex items-center mb-2">
      <div 
        className="w-12 h-12 rounded-full mr-4" 
        style={{ backgroundColor: `#${hex}` }}
      ></div>
      <h2 className="text-xl font-bold">{name}</h2>
    </div>
    <p className="text-gray-600 mb-2">Hex: #{hex}</p>
    <div className="flex flex-wrap">
      {comp.map((c, index) => (
        <div 
          key={index} 
          className="w-8 h-8 rounded-full mr-2 mb-2" 
          style={{ backgroundColor: `#${c.hex}` }} 
          title={c.name}
        ></div>
      ))}
    </div>
  </div>
);

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