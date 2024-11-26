
const ChatMessage = ({name, message}) => {

  return (
    <div>
        <div className="flex items-center shadow-md py-2">
        <img className="h-5" alt='User' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
        </div>

    </div>
  )
}

export default ChatMessage