import './index.scss'
import React, { useState, useEffect } from 'react'

function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX + 15, y: event.clientY - 10 })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const divStyle = {
    left: cursorPosition.x,
    top: cursorPosition.y,
  }

  return <div id="cursor" style={divStyle}></div>
}

export default Cursor
