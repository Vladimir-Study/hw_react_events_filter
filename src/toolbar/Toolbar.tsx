import { useState } from "react"

export function Toolbar(props) {
  const { projects, filters, selected } = props.stats
  const listFilters = filters.map(filter => 
    <li key={filter} onClick={() => props.selectFilter(filter)} className={`toolbar__li ${filter === selected ? 'active' : ''}`}>{`${filter}`}</li>
  )

  return (
    <ul className="toolbar__ul">
      {listFilters}
    </ul>
  )
}
