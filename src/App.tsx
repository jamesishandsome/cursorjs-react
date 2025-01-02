import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { useCursorPresets, PresetMode } from './components/CustomCursor/hooks/useCursorPresets';

function App() {
  const { setPreset } = useCursorPresets();

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-gray-100">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Custom Cursor Demo</h1>
          <p className="text-lg mb-4">Move your mouse around to see the custom cursor in action!</p>
          
          <div className="space-x-4 mb-8">
            <button 
              onClick={() => setPreset('simpleReplace')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Simple Replace
            </button>
            <button 
              onClick={() => setPreset('simpleFollow')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Simple Follow
            </button>
            <button 
              onClick={() => setPreset('blended')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Blended
            </button>
          </div>
          
          <a href="#" className="text-blue-500 hover:text-blue-700 block mb-4">
            Hover over this link
          </a>
          
          <button className="bg-green-500 text-white px-4 py-2 rounded mb-4">
            Hover over this button
          </button>
          
          <img 
            src="https://picsum.photos/200"
            alt="Random image"
            className="w-48 h-48 object-cover mb-4"
          />
          
          <input
            type="range"
            min="0"
            max="100"
            className="slider w-48"
          />
        </div>
      </div>
    </>
  );
}

export default App;