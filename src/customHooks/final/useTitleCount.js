import { useEffect } from "react";

function useTitlteCount(count) {
  useEffect(() => {
    document.title = `count - ${count}`;
  }, [count]);
}

export default useTitlteCount;