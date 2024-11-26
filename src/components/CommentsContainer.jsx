import { comment } from "postcss"

const CommentsContainer = () => {



    const commentsData = [
        {
            name: 'Mani',
            comment: 'Hey, Are you Working?',
            reply:[{
                name: 'Vani',
                comment: 'Wait, what',
                reply:[{
                    name: 'Kani',
                    comment: 'I dont have any files',
                    reply:[{
                        name: 'Rani',
                        comment: 'We didnt got the files yet',
                        reply:[{
                            name: 'Dhoni',
                            comment: 'They will send us tomorrow',
                            reply:[]
                
                    }]
            
                }]
        
            }]
    
        }]

    },{
        name: 'Dhoni',
        comment: 'Hey, Are you Coming?',
        reply:[]

},{
    name: 'Dhoni',
    comment: 'Hey, Are you Coming?',
    reply:[]

},{
    name: 'Dhoni',
    comment: 'Hey, Are you Coming?',
    reply:[]

},{
    name: 'Dhoni',
    comment: 'Hey, Are you Coming?',
    reply:[]

},{
    name: 'Dhoni',
    comment: 'Hey, Are you Coming?',
    reply:[]

}
]



const Comment = ({comments})=>{

    return(

        <div>
            {
                comments.map((c, i)=>(
                    <div key={i}>
                <div className="flex m-3 bg-gray-100 p-2 rounded-md">
                <img 
                alt='user'
                src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
                className="w-7 h-7"
            />
            <div className="pl-2">
                <p className="font-bold">{c.name}</p>
                <p>{c.comment}</p>
            </div>
            </div>
            <div className="ml-5 pl-3 border-l-2">
            {c.reply && <Comment comments={c.reply}/>}
            </div>
            </div>

                ))}
                
            
        </div>
    )
}


  return (
    <div className="ml-3">
        <h1 className="text-2xl font-bold">Comments:</h1>
        {/* <Comment comments={commentsData[0]} /> */}
        <Comment comments={commentsData} />

    </div>
  )
}

export default CommentsContainer