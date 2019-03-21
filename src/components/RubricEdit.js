import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import * as Actions from '../actions/rubric';
import mixpanel from 'mixpanel-browser';
import Input from './Input';
import ExtendableList from './ExtendableList';

class RubricEdit extends Component {
  // Needed for this.state to correctly reference state when function is passed down
  constructor(props) {
    super(props)
    this.state = {
      needsNewRubric: false,
      nameInput: "",
      rubric: {
        id: '',
        name: '',
        description: '',
        userId: '',
        levelOne: '',
        levelTwo: '',
        levelThree: '',
        levelFour: '',
        Competencies: [['']],
        Skills: [['']],
        Evaluations: [['', '', '', '']]
      }
    }

    this.componentWillMount = this.componentWillMount.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.redirect = this.redirect.bind(this)
    this.goBack = this.goBack.bind(this)
    this.updateNameInput = this.updateNameInput.bind(this)
    this.updateInputList = this.updateInputList.bind(this)
    this.addItemList = this.addItemList.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  // 1. Check to see if it is in 'edit' or 'new' mode
  // 2. Map state to props
  // 3. Render the component
  // 4. Update the model onChange (Debounce function?)

  componentWillMount() {
    const { createNewRubric, getRubricById } = this.props
    const { pathname } = this.props.location
    const { rubricId, userId } = this.props.match.params
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const newRubric = {
      name: `${firstName} ${lastName}'s New Roadmap`
    }

    if (pathname.includes('rubric/new')) {
      this.setState({needsNewRubric: true})
      createNewRubric(userId, newRubric)
    } else {
      getRubricById(rubricId);
    }
  }

  componentDidMount() {
    mixpanel.init('333f6269317ae9b78a29c535e29f00bf')
    mixpanel.track("Rubrics Index Component Page");
  }

  redirect(isFetching, needsNewRubric, userId, id) {
    if (!isFetching && needsNewRubric) {
      return <Redirect from={`/users/${userId}/rubric/new`} to={`/users/${userId}/rubrics/${id}`} />
    }
  }

  goBack() {
    this.props.history.goBack()
  }

  updateNameInput(value, key) {
    this.setState({...this.state, rubric: {...this.state.rubric, [key]: value}})
  }

  updateInputList(value, key, pIndex, cIndex) {
    const updatedList = [...this.state.rubric[key]]
    updatedList[pIndex][cIndex] = value
    this.setState({...this.state, rubric: {...this.state.rubric, [key]: updatedList}})
  }

  addItemList(key, pIndex) {
    const updatedList = [...this.state.rubric[key]]
    updatedList[pIndex].push('')
    this.setState({...this.state, rubric: {...this.state.rubric, [key]: updatedList}})

    if (key === "Competencies") {
      const skillList = [...this.state.rubric["Skills"], ['']]
      const evalList = [...this.state.rubric["Evaluations"], ['', '', '', '']]
      this.setState({...this.state, rubric: {...this.state.rubric, ["Skills"]: skillList, ["Evaluations"]: evalList}})
    }
    if (key === "Skills") {
      const evalList = [...this.state.rubric["Evaluations"], ['', '', '', '']]
      this.setState({...this.state, rubric: {...this.state.rubric, ["Evaluations"]: evalList}})
    }
  }

  submitForm(e) {
    e.preventDefault()
  }

  render() {
    const { needsNewRubric } = this.state
    const { isFetching, rubric } = this.props
    const { name, id, userId, iconName, iconColor, description, levelOne, levelTwo, levelThree, levelFour } = rubric
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const allSkills = this.state.rubric.Skills.reduce((acc, skillGroup) => [...acc, ...skillGroup])
    const evalLabels = [this.state.rubric.levelOne, this.state.rubric.levelTwo, this.state.rubric.levelThree, this.state.rubric.levelFour]
    return (
      <div className="col-sm-10 col-md-9 col-lg-8">
        {/* {this.redirect(isFetching, needsNewRubric, userId, id)} */}
        <button onClick={this.goBack} style={{padding: '0'}} className="btn btn-lg btn-info btn-round btn-simple">
          <i className="material-icons">arrow_back_ios</i> back
        </button>
        <div className="card">
          <div className="card-header card-header-icon" data-background-color={iconColor}>
            <i className="material-icons">{iconName}</i>
          </div>
          <div className="card-content">
            <h2 className={`card-title text-${iconColor}`}><small>Edit <b>{name}</b> Roadmap...</small></h2>
            <div className="form-horizontal">

              <form onSubmit={this.submitForm}>
                <h4>What skillset does this roadmap assess/achieve?</h4>
                <div className="row">
                  <label className="col-sm-2 label-on-left">Name (Title)</label>
                  <div className="col-sm-10">
                    <div className="form-group label-floating is-empty">
                      <Input
                        text={this.state.rubric.name}
                        onChange={(newValue) => this.updateNameInput(newValue, "name")}
                        placeholder="e.g. Code Review..."
                        autoFocus={true}
                        helpBlock="What skillset does this roadmap assess/achieve?"
                      />
                    </div>
                  </div>
                </div>
                <div>&nbsp;</div>

                <h4>How would you describe this roadmap in more detail?</h4>
                <div className="row">
                  <label className="col-sm-2 label-on-left">Description</label>
                  <div className="col-sm-10">
                    <div className="form-group label-floating is-empty">
                      <textarea
                        className="form-control text-info"
                        onChange={(e) => this.updateNameInput(e.target.value, "description")}
                        rows="5"
                        text={this.state.rubric.description}
                        placeholder={`e.g. "A comprehensive roadmap for getting a job as a data scientist. I made this roadmap because..."`}
                      ></textarea>
                      <span className="help-block">Enter any detailed information about you'd like to share about this roadmap.  What inspired you to make it?  Why are you're qualified to make it?  What a person could expect to achieve by completing it?</span>
                    </div>
                  </div>
                </div>
                <div>&nbsp;</div>

                <h4 className="text-default">Describe the 4 different levels of skill for <b>{name}</b></h4>
                <div className="row">
                  <label className="col-sm-2 label-on-left">Level 1</label>
                  <div className="col-sm-10">
                    <div className="form-group label-floating is-empty">
                      <Input
                        onChange={(newValue) => this.updateNameInput(newValue, "levelOne")}
                        text={this.state.rubric.levelOne}
                        placeholder="e.g. Unsatisfactory, Beginner, Initial..."
                        helpBlock="How would you describe the initial level of mastery of your Roadmap?"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label className="col-sm-2 label-on-left">Level 2</label>
                  <div className="col-sm-10">
                    <div className="form-group label-floating is-empty">
                      <Input
                        onChange={(newValue) => this.updateNameInput(newValue, "levelTwo")}
                        text={this.state.rubric.levelTwo}
                        placeholder="e.g. Competant, Intermediate, Approaching..."
                        helpBlock="How would you describe the second level of mastery of your Roadmap?"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label className="col-sm-2 label-on-left">Level 3</label>
                  <div className="col-sm-10">
                    <div className="form-group label-floating is-empty">
                      <Input
                        onChange={(newValue) => this.updateNameInput(newValue, "levelThree")}
                        text={this.state.rubric.levelThree}
                        placeholder="e.g. Proficient, Advanced, Overtaking..."
                        helpBlock="How would you describe the third level of mastery of your Roadmap?"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label className="col-sm-2 label-on-left">Level 4</label>
                  <div className="col-sm-10">
                    <div className="form-group label-floating is-empty">
                      <Input
                        onChange={(newValue) => this.updateNameInput(newValue, "levelFour")}
                        text={this.state.rubric.levelFour}
                        placeholder="e.g. Professional, Expert, Innovating..."
                        helpBlock="How would you describe the last level of mastery of your Roadmap?"
                      />
                    </div>
                  </div>
                </div>

                <ExtendableList
                  childCategory={"Competencies"}
                  childCategorySingular={"Competency"}
                  parentCategory={this.state.rubric.name}
                  items={this.state.rubric.Competencies[0]}
                  updateInputList={this.updateInputList}
                  placeholder={"e.g. Testing (in CS), Inequalities (in Algebra)..."}
                  helpBlock={"What categories or topics are prevalent in this subject?"}
                  pIndex={0}
                  addItemList={this.addItemList}
                />

                {this.state.rubric.Competencies[0].map((competency, index) => {
                  return (
                    <ExtendableList
                      childCategory={"Skills"}
                      childCategorySingular={"Skill"}
                      parentCategory={this.state.rubric.Competencies[0][index]}
                      items={this.state.rubric.Skills[index]}
                      updateInputList={this.updateInputList}
                      placeholder={"e.g. Body Language (when Speaking), Citing (when Writing)..."}
                      helpBlock={"What is a skill to have to be knowledgeable in this competency?"}
                      pIndex={index}
                      addItemList={this.addItemList}
                    />
                  )
                })}

                {allSkills.map((skill, index) => {
                  return (
                    <ExtendableList
                      childCategory={"Evaluations"}
                      inputLabels={evalLabels}
                      parentCategory={allSkills[index]}
                      items={this.state.rubric.Evaluations[index]}
                      updateInputList={this.updateInputList}
                      placeholder={"e.g. Knowing common elements (Competant), Knowing all elements (Proficient)..."}
                      helpBlock={"How would you evaluate this skill at this level?"}
                      pIndex={index}
                    />
                  )
                })}

                <button type="submit" className="btn btn-success pull-right"><i class="material-icons">done</i> Submit Rubric</button>
                <div className="clearfix"></div>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    ...state.rubric,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RubricEdit));
