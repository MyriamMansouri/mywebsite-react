import { useRef, useEffect} from 'react';

// Pass state variable to hook and get previous state value
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

export default usePrevious;