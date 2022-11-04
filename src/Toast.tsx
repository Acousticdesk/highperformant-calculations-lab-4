import './Toast.css'
import { useEffect, useState } from 'react';

const TOAST_PERSISTENCE_TIME_MS = 5000;

export function Toast({ message }: { message: string }) {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    // Get it some time before attaching the "show" class. Otherwise, the "fade in" animation doesn't work properly
    window.setTimeout(() => { setShow(true) }, 100);
    window.setTimeout(() => { setShow(false) }, TOAST_PERSISTENCE_TIME_MS)

    // Give it some time to handle the animation before removing the element from DOM completely
    window.setTimeout(() => { setHide(true) }, TOAST_PERSISTENCE_TIME_MS + 1000)
  }, [])
  return (
    !hide ? <div className={`toast ${show ? 'show' : ''}`}>{message}</div> : null
  )
}
