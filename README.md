# 🎯 Custom Cursor

![npm version](https://img.shields.io/npm/v/custom-cursor)
![license](https://img.shields.io/npm/l/custom-cursor)
![downloads](https://img.shields.io/npm/dm/custom-cursor)

A beautiful, customizable cursor effects library for React applications with smooth animations and preset styles.

![Custom Cursor Demo](https://via.placeholder.com/800x400?text=Custom+Cursor+Demo)

## ✨ Features

- 🎨 **Multiple Preset Styles**
    - Simple Replace - Basic cursor replacement
    - Simple Follow - Smooth following cursor
    - Blended - Advanced blend mode effects
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 🎯 **Smart Element Detection** - Automatic cursor changes for links, buttons, and more
- 🛠️ **Fully Customizable** - Easy-to-use API for custom styles and behaviors

## 🚀 Getting Started

### Installation

```bash
npm install custom-cursor
```

## 📖 Usage

Here are some examples of how to use the custom cursor library:

```jsx
import { CustomCursor } from 'custom-cursor';
import { useCursorPresets, PresetMode } from 'custom-cursor/hooks/useCursorPresets';

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
```

## 💖 Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website.

[Become a sponsor](https://github.com/sponsors/your-username)

## 🤝 Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
