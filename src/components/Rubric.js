import React, { Component } from 'react';

const Competency = props => {
  const {name, scales} = props;
  return (
    <tr>
      <td>{name}</td>
      <td className="text-right">

      </td>
      <td className="text-right">
        53.23%
      </td>
      <td className="text-right">
        53.23%
      </td>
      <td className="text-right">
        53.23%
      </td>
    </tr>
  )
}

class Rubric extends Component {

  constructor(props) {
    super(props);
    this.getCompetencies = this.getCompetencies.bind(this);
  }

  getCompetencies() {
    const comp = [ // TODO: replace with PROPS
      { name: "HTML and Templating", Scales: [
        { name: "HTML From Memory", Criteria: [
          {text: "Needs to look up tags occasionally", level: 1},
          {text: "Can write basic and advanced HTML tags", level: 2},
          {text: "Uses HTML tags semantically", level: 3}
          ]
        }
      ]
    },
    { name: "CSS", Scales: [
      { name: "Basic Properties and Styles", Criteria: [
        {text: "Can use all basic properties and styles", level: 1},
        ]
      }
    ]
  }
  ]

    return comp.map((competency) => {
      return <Competency name={competency.name} scales={competency.Scales}/>
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div
              className="card-header card-header-icon"
              data-background-color="green">
              <i className="material-icons"></i>
            </div>
            <div className="card-content">
              <h4 className="card-title">
                {this.props.name}
              </h4>
              <div className="row">
                <div className="col-md-5">
                  <div className="table-responsive table-sales">
                    <table className="table">
                      <tbody>
                        {this.getCompetencies()}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-6 col-md-offset-1">
                  <div id="worldMap" className="map" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rubric;
