import { useState } from 'react';

export default function useToggleState(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => {
    setValue(!value);
  };

  return [value, toggleValue];
}
