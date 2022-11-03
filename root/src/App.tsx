import { createElement, useEffect, useState } from "react";

import loadScript from "./script";

function App() {
  const [loading, setLoading] = useState(true);

  const renderUMD = async () => {
    if ((window as any)["Component"] === undefined) {
      await loadScript();
      setLoading(false);      
    }
  }

  useEffect(() => {
    renderUMD();
  }, []);

  return (
    <div>
      {!loading ? createElement((window as any)["Component"]) : <></>}
    </div>
  );
}

export default App;
