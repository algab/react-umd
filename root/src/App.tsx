import React, { createElement } from "react";

function App() {

  const renderLink = () => {
    return createElement('div', null, 'TESTE 2');
  };

  return (
    <div>
      Teste
      {renderLink()}
    </div>
  );
}

export default App;
