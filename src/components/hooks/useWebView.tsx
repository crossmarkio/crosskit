import { useEffect, useState } from 'react';

const useWebView = () => {
  const [webView, setWebView] = useState<any>(undefined);
  useEffect(() => {
    if (typeof window.ReactNativeWebView !== 'undefined') setWebView(window.ReactNativeWebView);
    setWebView({ postMessage });
  }, []);

  return webView;
};

export default useWebView;
