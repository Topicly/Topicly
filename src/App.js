import React, { useEffect, useState } from 'react';

function App() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/public/main_page.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default App;
