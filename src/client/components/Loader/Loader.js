import React from 'react';
import './Loader.style.css';

export default function Loader() {
  return (
    <div>
      <div className="lds-roller">
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
      </div>
    </div>
  );
}
