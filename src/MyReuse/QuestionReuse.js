import React from "react";

export const QuestionReuse = (props) => {
    return(
        <div>
            <h3>{props.heading}</h3>
            
                 {
                    props.data.map((obj,index)=>{
                      return <div key={index}>
                        <h4>{index+1} . {obj.que}</h4>
                        {
                          obj.option.map((v,i)=>{
                            return <p key={i}><input name={index} type='radio' /> {v}</p>
                          })
                        }
                      </div>
            
                    })
                  }
            
        </div>
    ) 
}