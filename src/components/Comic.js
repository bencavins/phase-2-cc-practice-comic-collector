import { useState } from "react"

function Comic({ id, image_url, title, issue, setComics }) {
  const [isCover, setIsCover] = useState(true)

  function handleClick() {
    setIsCover(prev => !prev)
  }

  function handleDelete() {
    fetch(`http://localhost:8004/comics/${id}`, {
      method: 'DELETE'
    })

    setComics(prevComics => prevComics.filter(comic => {
      return comic.id !== id
    }))
  }

  let cardElements = null
  if (isCover) {
    cardElements = <img src={image_url} alt={"Comic Issue Image"} /> 
  } else {
    cardElements = (
      <>
        <h3>{title}</h3>
        <h4>{issue}</h4>
        <button onClick={handleDelete}>Remove</button>
      </>
    )
  }

  return (
    <div className="comic-item" onClick={handleClick}>
      {cardElements}
    </div>
  )

}

export default Comic
