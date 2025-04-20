import { useId } from 'react'
import useFilters from '../hooks/useFilters'
import './Filters.css'

export default function Filter () {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPriceChange = (e) => {
    setFilters(prevState => ({
      ...prevState,
      price: e.target.value
    }))
  }

  const handleCategoryChange = (e) => {
    // Aqui algo huele mal también
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleMinPriceChange}
          value={filters.price}
        />
        <span>
          {filters.price}
        </span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleCategoryChange}>
          <option value='all'>All</option>
          <option value='electronics'>Electronics</option>
          <option value='clothes'>Clothes</option>
          <option value='housewares'>Housewares</option>
        </select>
      </div>
    </section>
  )
}
