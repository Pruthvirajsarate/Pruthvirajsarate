import React from "react";

export const TableReuse = ( props) => {
return(
    <div>
        <h3>{props.heading}</h3>
        <table border='1px'>
                 <thead>
                       <tr>
                         {
                             props.ths.map((v,i)=>{
                                 return <th key={i} > {v} </th>
                             })
                         
                         }
                        </tr>
                 </thead>
                 <tbody>

                 </tbody>

        </table>
             
    </div>
)
}