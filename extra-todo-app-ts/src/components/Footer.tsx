import { FilterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
  activeCount: number,
  completedCount: number,
  filterSelected: FilterValue,
  onClearCompleted: () => void,
  onFilterChange: (filter: FilterValue) => void,
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  onClearCompleted,
  onFilterChange,
  filterSelected
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> pending
      </span>
      <Filters 
        filterSelected={filterSelected}
        onFilterChange={onFilterChange}
      />
      {
        completedCount > 0 && (
          <button
            className="clear-completed"
            onClick={onClearCompleted}
          >
            Clear completed
          </button>
        )
      }
    </footer>
  )
}