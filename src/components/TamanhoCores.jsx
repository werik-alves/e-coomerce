import { useState } from 'react';

const TamanhoCores = () => {
  const sizeOptions = ["39", "40", "41", "42", "43"];
  const colorOptions = ["#00e5ff", "#ff1744", "#424242", "#7e57c2"];

  const [selectedSize, setSelectedSize] = useState("41"); // Tamanho selecionado
  const [selectedColor, setSelectedColor] = useState("#ff1744"); // Cor selecionada

  return (
    <div>
      {/* Opções de Tamanho */}
      <div className="mt-4">
        <h4 className="text-gray-700 mb-2">Tamanho</h4>
        <div className="flex space-x-2">
          {sizeOptions.map((size) => (
            <button
              key={size}
              className={`border p-2 rounded ${
                selectedSize === size ? 'bg-primary text-white' : 'bg-white text-gray-800 border-gray-300'
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Opções de Cor */}
      <div className="mt-4">
        <h4 className="text-gray-700 mb-2">Cor</h4>
        <div className="flex space-x-2">
          {colorOptions.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                selectedColor === color ? 'border-2 border-red-500' : 'border'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TamanhoCores;
