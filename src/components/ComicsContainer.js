import Comic from "./Comic"

function ComicsContainer({ comics, setComics }) {

  return (
    <>
      {comics.map(comic => {
        return <Comic key={comic.id} {...comic} setComics={setComics} />
      })}
    </>
  )

}

export default ComicsContainer
