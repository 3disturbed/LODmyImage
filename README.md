# LODmyImage.js 🎨
"Because nobody deserves a high-res image on dial-up."
[Test the class](https://3disturbed.github.io/LODmyImage/test.html)


Welcome to **LODmyImage.js**, the ES6 JavaScript library that benchmarks your connection speed to decide if your device deserves the Mona Lisa or a pixelated potato. With LOD (Level of Detail) logic, it ensures only the right images are loaded—keeping your site speedy and your users happy.


# Credits
This module was inspired by a suggestion from Ali Garrido, who proposed creating a simple yet effective solution to dynamically control image sizes sent to the client based on an initial quick speed test. Their idea helped shape the approach used in this module, enabling more efficient and responsive image delivery.

Thank you, Ali, for your valuable input and inspiration!

A discussion with John Rearden of Code Institute then provoked the idea of building it into a simple form that can be easily built into the front end of a website.

---

## Table of Contents 📚
1. [Introduction](#introduction-)
2. [Features](#features-)
3. [How It Works](#how-it-works-)
4. [Installation](#installation-)
5. [Usage Example](#usage-example-)
6. [Contributing](#contributing-)
7. [License](#license-)

---

## Introduction 🎉
Are you tired of forcing your users to download billboard-sized JPEGs on their coffee-shop Wi-Fi? **LODmyImage.js** benchmarks your connection speed with `benchmark.jpg` and chooses the right image resolution—high, medium, or low—faster than you can say "loading spinner."

Because, let’s face it, nobody wants a full-res cat photo over a 2G connection. Unless, of course, they hate their data plan.

[Return to Table of Contents](#table-of-contents-)

---

## Features ✨
- **Dynamic LOD Images**: Automatically loads low, medium, or high-res images based on connection speed.
- **Custom Thresholds**: Configure what counts as "low" or "high" speed. Feel like 4 Mbps is "medium"? Go ahead.
- **Fast Benchmarking**: Utilizes a small file (`benchmark.jpg`) to gauge speed without hogging resources.
- **Simple Integration**: A few lines of code, and you're good to go.

[Return to Table of Contents](#table-of-contents-)

---

## How It Works 🛠️
### 1. **Benchmark Your Speed**:
Downloads a small file (`benchmark.jpg`) and measures the time taken.

### 2. **Calculate Mbps**:
Uses a simple formula to determine the connection speed:

\[
\text{Speed (Mbps)} = \frac{\text{File Size (bytes)}}{\text{Time Taken (seconds)} \times 125000}
\]

### 3. **Choose LOD**:
Depending on your speed, picks one of the three LODs:
- **Low**: For speeds slower than a tired snail (<5 Mbps).
- **Medium**: A sensible middle ground (5–20 Mbps).
- **High**: Blazing fast (>20 Mbps).

### 4. **Load Images**:
Finds images with `data-low`, `data-medium`, and `data-high` attributes and loads the correct one.

[Return to Table of Contents](#table-of-contents-)

---

## Installation 💾
### 1. **Download the Library**:
Clone the repo or download the file directly:
```bash
git clone https://github.com/3disturbed/LODmyImage.js.git
```

### 2. **Include in Your Project**:
Import it as an ES6 module:
```javascript
import LODmyImage from './LODmyImage.js';
```

[Return to Table of Contents](#table-of-contents-)

---

## Usage Example 🚀

### HTML
Add the `data-low`, `data-medium`, and `data-high` attributes to your images:
```html
<img
    data-low="images/low-res.jpg"
    data-medium="images/medium-res.jpg"
    data-high="images/high-res.jpg"
    alt="Dynamic LOD Image">
```

### JavaScript
Initialize the library and let it work its magic:
```javascript
import LODmyImage from './LODmyImage.js';

const lod = new LODmyImage({
    benchmarkFile: "benchmark.jpg",
    thresholds: { low: 5, medium: 20 },
    onComplete: (speed, lod) => {
        console.log(`Speed: ${speed} Mbps, LOD: ${lod}`);
    }
});

lod.init();
```

### Result
The appropriate image will be loaded dynamically based on the user's connection speed. Voilà! No more buffering embarrassment.

[Return to Table of Contents](#table-of-contents-)

---

## Contributing 👩‍💻👨‍💻
We’d love for you to contribute! Feel free to:
1. **Fork the repo** 🍴
2. **Create a feature branch** 🚀
3. **Submit a pull request** 📩

Just make sure to include plenty of comments and add yourself to the contributor list. Bonus points for humorous commit messages.

[Return to Table of Contents](#table-of-contents-)

---

## License 📜
This project is licensed under the MIT License. Basically, you can do almost anything with it except blame us if it doesn’t work.

---

Enjoy the library, and remember: just because your connection is fast doesn’t mean everyone else’s is. Be kind. Load wisely. 🎨

