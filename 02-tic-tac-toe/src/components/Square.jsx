export function Square ({ children, isSelected, updateBoard, index }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const hanldeClick = () => {
    updateBoard(index)
  }

  return (
    <div
      className={className}
      onClick={hanldeClick}
    >
      {children}
    </div>
  )
}
