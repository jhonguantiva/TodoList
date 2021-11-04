import React from 'react'

const Header = ({handleFilter}) => {
  return (
    <div>
      <h1>todoList</h1>
      <button onClick={()=>handleFilter("Todo")}>Todo</button>
      <button onClick={()=>handleFilter("completas")}>Completa</button>
      <button onClick={()=>handleFilter("incompleta")}>incompleta</button>
    </div>
  )
}

export default Header






