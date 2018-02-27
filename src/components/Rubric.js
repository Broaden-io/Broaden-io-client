import React, { Component } from 'react';

const Competency = props => {
  const {name, scales} = props;
  return (
    <div> Competency </div>
  )
}

class Rubric extends Component {

  constructor(props) {
    super(props);
    this.getCompetencies = this.getCompetencies.bind(this);
  }

  getCompetencies() {
  //   const comp = [ // TODO: replace with PROPS
  //     { name: "HTML and Templating", Scales: [
  //       { name: "HTML From Memory", Criteria: [
  //         {text: "Needs to look up tags occasionally", level: 1},
  //         {text: "Can write basic and advanced HTML tags", level: 2},
  //         {text: "Uses HTML tags semantically", level: 3}
  //         ]
  //       }
  //     ]
  //   },
  //   { name: "CSS", Scales: [
  //     { name: "Basic Properties and Styles", Criteria: [
  //       {text: "Can use all basic properties and styles", level: 1},
  //       ]
  //     }
  //   ]
  // }
  // ]

    return this.props.competencies.map((competency, index) => {
      return <Competency key={index} name={competency.name} scales={competency.Scales}/>
    })
  }

  render() {
    return (
      <div>
        Testing
      </div>
    );
  }
}

export default Rubric;
