import "./MyReuse.css";
import React from "react";
import {ListResuse} from '../ListResuse';
import {SelectReuse} from '../SelectReuse'
import { QuestionReuse } from "./QuestionReuse"
import { TableReuse } from "./TableReuse"


function template() {
  return (
    <div className="my-reuse">
      <h1>MyReuse</h1>
      <TableReuse heading="players" ths={['Name','runs','loc']} />
      <TableReuse heading="students" ths={['students name','marks']} />

      <QuestionReuse  heading='React' data={this.reactQuetion}/>
      <QuestionReuse heading='GK' data={this.questions} />
      <ListResuse data={this.players} />
      <ListResuse data={this.students} />
      <SelectReuse data={this.players} heading='players' />
      <SelectReuse data={this.students} heading='students' />

     
    </div>
  );
};

export default template;
