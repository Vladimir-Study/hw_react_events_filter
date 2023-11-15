import { useState } from "react";

export function ProjectList(props) {

  const items = props.items
  // const [currentItems, setItems] = useState(items.projects)
  // const filterProject = () => {
  //   setItems(items.projects.filter(item => 
  //     item.category === 'Websites'))
  // }
  // filterProject()
  const listImages = items.map(item => 
    <img key={item.id} className="board__item" src={`${item.img}`} alt="" />
  )
  const arrLenght = items.length
  const chankArray = Math.round(arrLenght/3)
  
  return (
    <div className="boards">
      <div className="board">
        {
          listImages.slice(0, chankArray)
        }
      </div>
      <div className="board">
        {
          listImages.slice(chankArray, chankArray*2)
        }
      </div>
      <div className="board">
        {
          listImages.slice(chankArray*2, arrLenght)
        }
      </div>
    </div>
  )
}
