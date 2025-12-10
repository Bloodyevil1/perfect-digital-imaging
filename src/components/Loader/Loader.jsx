import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="loader-overlay xray-loader">
      <span className="xray-text">Perfect Digital</span>
      <div className="xray-scan-line"></div>
    </div>
  );
}