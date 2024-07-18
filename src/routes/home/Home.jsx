import { useDispatch } from "react-redux"

const home = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch({type : "CHANGE_EMAIL" , email : "123"})
  }
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
    
    
  )
}

export default home