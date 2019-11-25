import React from "react"

import useDarkMode from "use-dark-mode"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div className="dark-mode-toggle">
      <button onClick={darkMode.toggle}>{darkMode.value ? "◐" : "◑"}</button>
    </div>
  )
}

export default DarkModeToggle
