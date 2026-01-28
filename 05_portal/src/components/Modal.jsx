import React from 'react'
import ReactDom from 'react-dom';

export default function Modal({open, onClose, children}) {

  if(!open) return null;
  return ReactDom.createPortal(
    <div>
      <button onClick={onClose}>Close Modal</button>
        {children}
    </div>,
    document.getElementById('portal')
  )
}
