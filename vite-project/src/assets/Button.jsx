export function Button(props){
   let number = 7
   let displayString

   if(number > 10){
    displayString = "Big Number"
   } else {
    displayString = "Small Number"
   }
    
    return(
        <button onClick={() => props.func(props.msg)} style = {{backgroundColor: props.color}}>
            <p>{props.text}</p>
        </button>
    )
}