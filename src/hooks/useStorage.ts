import { useState, useEffect } from "react";

const useStorage = (
  key: string,
  initialItem: unknown,
  storage: Storage,
) => {
  const [item, setItem] = useState(() => {
    const _item = storage.getItem(key);
    return _item ? JSON.parse(_item) : initialItem;
  });

  useEffect(() => {
    storage.setItem(key, JSON.stringify(item));
  }, [key, item, storage]);

  return [item, setItem] as [typeof item, typeof setItem];
};

export default useStorage;