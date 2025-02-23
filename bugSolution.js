```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState({ value: 0 });

  useEffect(() => {
    // Solution: Use JSON.stringify for deep comparison
    const prevCountJSON = JSON.stringify(prevCount);
    const currentCountJSON = JSON.stringify(count);
    if (prevCountJSON !== currentCountJSON) {
      console.log('Count changed!');
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count.value}</p>
      <button onClick={() => setCount({ value: count.value + 1 })}>Increment</button>
    </div>
  );
}
```