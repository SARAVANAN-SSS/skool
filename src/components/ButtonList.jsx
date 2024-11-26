import Button from "./Button"


const buttonsList = ["All", "shivani", "Mani", "Kani", "Vani", "Rani", "Nani", "Dhoni", "Yani", "Tani", "Mani", "Kani", "Vani", "Rani",]


const ButtonList = () => {

  return (
    <div className="flex m-3 gap-3">
    {buttonsList.map((button, i)=>(
      <Button key={i} name={button}/>
    ))}
    </div>
  )
}

export default ButtonList