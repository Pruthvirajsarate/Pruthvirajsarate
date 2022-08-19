import React    from "react";
import template from "./MyReuse.jsx";

class MyReuse extends React.Component {
  constructor(){
    super();
    this.players=['Dhoni','Virat','Sachin']
    this.students=['std1','std2','std3','std4']
    this.questions=[
      {
        que:'who is the pm of the india',
        option:['rahul','sanjay','modi','none']
      },
      {
        que:'Who is the caption of the india ?',
        option:['Rohit','Virat','Dhoni','Sachin']
      }
    ]

    this.reactQuetion=[
      {
        que:'ReactDOM.render take to how many arguments',
        option:['2','3','1','none']
      },
      {
        que:'how to shear a data from child to preant component',
        option:['props  ','refs  ','callback ','contaxt']
      }
    ]

  }
  render() {
    return template.call(this);
  }
}

export default MyReuse;
