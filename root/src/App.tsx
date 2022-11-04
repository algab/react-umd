import { createElement, useEffect, useState } from "react";

import loadScript from "./script";

function App() {
  const [loading, setLoading] = useState(true);

  const renderUMD = async () => {
    if ((window as any)["Component"] === undefined) {
      await loadScript("http://localhost:3000/component.js");
      setLoading(false);
    }
  }

  useEffect(() => {
    renderUMD();
  }, []);

  return (
    <>
      {!loading ? createElement((window as any)["Component"].default, { name: "Álvaro" }) : <></>}
    </>
  );
}

export default App;
