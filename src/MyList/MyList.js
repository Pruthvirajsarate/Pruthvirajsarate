import React    from "react";
import template from "./MyList.jsx";

class MyList extends React.Component {
  constructor (){
    super();
    this.players=['Dhoni','Kohli','Sachin','Rayna'] 
    this.data=[
      {
          name:'Dhoni',
          runs:'5000'
      },
      {
          name:'Kohli',
          runs:'4000'
      },
      {
          name:'Sachin',
          runs:'3000'
      },
      {
        name:'Rayna',
        runs:'3500'
    }


    ]

  }
  render() {
    return template.call(this);
  }
}

export default MyList;
