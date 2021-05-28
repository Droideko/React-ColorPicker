import { useCallback, useEffect, RefObject } from 'react';


export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: Function) => {
  const handleClickOutside = useCallback(({ target }) => {
    if (!ref.current?.contains(target as HTMLElement)) {      
      callback();      
    }
  }, [ref, callback]);  

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside)

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    }
  }, [handleClickOutside]);
};