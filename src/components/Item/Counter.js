import { useEffect } from "react";
import { useState } from "react";

function Counter({ initialValue, onValueChange, onRemoveItem }) {
  const [value, setValue] = useState(0);

  const onMinItem = () => {
    if (value > 0) {
      if (value === 1) {
        onRemoveItem();
      }
      setValue(value - 1);
      onValueChange(value - 1);
    }
  };

  const onPlusItem = () => {
    setValue(value + 1);
    onValueChange(value + 1);
  };

  useEffect(() => {
    setValue(initialValue);
  }, []);

  return (
    <div className="counter">
      <button onClick={onMinItem}>-</button>
      <input type="number" value={value} />
      <button onClick={onPlusItem}>+</button>
    </div>
  );
}

export default Counter;
