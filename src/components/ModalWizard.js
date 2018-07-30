import React from 'react';
import {SkyLightStateless} from 'react-skylight';

class ModalWizard extends React.Component {

  render() {

    return (
      <div className="col-md-8 mr-auto ml-auto">
        <SkyLightStateless isVisible={this.props.isVisible} onCloseClicked={() => {
          this.props.toggle()
        }} >
          <div className="wizard-container">
            <div className="card card-wizard" data-color="rose" id="wizardProfile">
              <form action="" method="" novalidate="novalidate">
                {/*<!-- You can switch " data-color="primary" " with one of the next bright colors: "green", "orange", "red", "blue" -->*/}
                <div className="card-header text-center">
                  <h3 className="card-title">
                Build Your Profile
                  </h3>
                  <h5 className="card-description">This information will let us know more about you.</h5>
                </div>
                <div className="wizard-navigation">
                  <ul className="nav nav-pills">
                    <li className="nav-item" style={{width: `33.3333%`}}>
                      <a className="nav-link active" href="#about" data-toggle="tab" role="tab">
                    About
                      </a>
                    </li>
                    <li className="nav-item" style={{width: `33.3333%`}}>
                      <a className="nav-link" href="#account" data-toggle="tab" role="tab">
                    Account
                      </a>
                    </li>
                    <li className="nav-item" style={{width: `33.3333%`}}>
                      <a className="nav-link" href="#address" data-toggle="tab" role="tab">
                    Address
                      </a>
                    </li>
                  </ul>
                  <div className="moving-tab" style={{width: `195.552px`, transform: `translate3d(-8px, 0px, 0px)`, transition: `transform 0s`}}>
                About
                  </div>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active" id="about">
                      <h5 className="info-text">
                    Let's start with the basic information (with validation)</h5>
                      <div className="row justify-content-center">
                        <div className="col-sm-4">
                          <div className="picture-container">
                            <div className="picture">
                              <img src="../../assets/img/default-avatar.png" className="picture-src" id="wizardPicturePreview" title=""/>
                              <input type="file" id="wizard-picture"/>
                            </div>
                            <h6 className="description">Choose Picture</h6>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-group form-control-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">face</i>
                              </span>
                            </div>
                            <div className="form-group bmd-form-group">
                              <label for="exampleInput1" className="bmd-label-floating">First Name (required)</label>
                              <input type="text" className="form-control" id="exampleInput1" name="firstname" required="" aria-required="true"/>
                            </div>
                          </div>
                          <div className="input-group form-control-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">record_voice_over</i>
                              </span>
                            </div>
                            <div className="form-group bmd-form-group">
                              <label for="exampleInput11" className="bmd-label-floating">Second Name</label>
                              <input type="text" className="form-control" id="exampleInput11" name="lastname" required="" aria-required="true"/>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-10 mt-3">
                          <div className="input-group form-control-lg">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">email</i>
                              </span>
                            </div>
                            <div className="form-group bmd-form-group">
                              <label for="exampleInput1" className="bmd-label-floating">Email (required)</label>
                              <input type="email" className="form-control" id="exampleemalil" name="email" required="" aria-required="true"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="account">
                      <h5 className="info-text">
                      What are you doing? (checkboxes)
                      </h5>
                      <div className="row justify-content-center">
                        <div className="col-lg-10">
                          <div className="row">
                            <div className="col-sm-4">
                              <div className="choice" data-toggle="wizard-checkbox">
                                <input type="checkbox" name="jobb" value="Design"/>
                                <div className="icon">
                                  <i className="fa fa-pencil"></i>
                                </div>
                                <h6>Design</h6>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="choice" data-toggle="wizard-checkbox">
                                <input type="checkbox" name="jobb" value="Code"/>
                                <div className="icon">
                                  <i className="fa fa-terminal"></i>
                                </div>
                                <h6>Code</h6>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="choice" data-toggle="wizard-checkbox">
                                <input type="checkbox" name="jobb" value="Develop"/>
                                <div className="icon">
                                  <i className="fa fa-laptop"></i>
                                </div>
                                <h6>Develop</h6>
                              </div>
                              <div className="btn-group bootstrap-select">
                                <button type="button" className="dropdown-toggle bs-placeholder btn btn-primary btn-round" data-toggle="dropdown" role="button" title="Choose city">
                                  <span className="filter-option pull-left">Choose city</span>&nbsp;<span className="bs-caret">
                                    <span className="caret"></span>
                                  </span>
                                </button>
                                <div className="dropdown-menu open" role="combobox">
                                  <ul className="dropdown-menu inner" role="listbox" aria-expanded="false">
                                    <li data-original-index="1" className="disabled selected">
                                      <a tabindex="-1" className="" data-tokens="null" role="option" href="#" aria-disabled="true" aria-selected="true">
                                        <span className="text">Choose city</span>
                                        <span className="material-icons  check-mark">
                                        done
                                        </span>
                                      </a>
                                    </li>
                                    <li data-original-index="2">
                                      <a tabindex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                        <span className="text">Foobar</span>
                                        <span className="material-icons  check-mark">
                                        done
                                        </span>
                                      </a>
                                    </li>
                                    <li data-original-index="3">
                                      <a tabindex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                        <span className="text">Is great</span>
                                        <span className="material-icons  check-mark">
                                        done
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <select className="selectpicker" data-style="btn btn-primary btn-round" title="Single Select" data-size="7" tabindex="-98">
                                  <option className="bs-title-option" value="">Single Select</option>
                                  <option disabled="" selected="">Choose city</option>
                                  <option value="2">Foobar</option>
                                  <option value="3">Is great</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="address">
                      <div className="row justify-content-center">
                        <div className="col-sm-12">
                          <h5 className="info-text">
                          Are you living in a nice area?
                          </h5>
                        </div>
                        <div className="col-sm-7">
                          <div className="form-group bmd-form-group">
                            <label className="bmd-label-static">Street Name</label>
                            <input type="text" className="form-control" name="streetName" required="" aria-required="true"/></div>
                        </div>
                        <div className="col-sm-3">
                          <div className="form-group bmd-form-group">
                            <label className="bmd-label-static">Street No.</label>
                            <input type="number" className="form-control" name="streetNo" required="" aria-required="true"/></div>
                        </div>
                        <div className="col-sm-5">
                          <div className="form-group bmd-form-group">
                            <label className="bmd-label-static">City</label>
                            <input type="text" className="form-control" name="city" required="" aria-required="true"/></div>
                        </div>
                        <div className="col-sm-5">
                          <div className="form-group">
                            <label>Country</label>
                            <div className="btn-group bootstrap-select">
                              <button type="button" className="btn dropdown-toggle bs-placeholder select-with-transition" data-toggle="dropdown" role="button" title="Single Select">
                                <span className="filter-option pull-left">
                                      Single Select
                                </span>
                                    &nbsp;
                                <span className="bs-caret">
                                  <span className="caret"></span>
                                </span>
                              </button>
                              <div className="dropdown-menu open" role="combobox">
                                <ul className="dropdown-menu inner" role="listbox" aria-expanded="false">
                                  <li data-original-index="1">
                                    <a tabindex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                      <span className="text">
                                            Afghanistan
                                      </span>
                                      <span className="material-icons  check-mark">
                                            done
                                      </span>
                                    </a>
                                  </li>
                                  <li data-original-index="2">
                                    <a tabindex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                      <span className="text">
                                            Albania
                                      </span>
                                      <span className="material-icons  check-mark">
                                            done
                                      </span>
                                    </a>
                                  </li>
                                  <li data-original-index="3">
                                    <a tabindex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                      <span className="text">
                                            Algeria
                                      </span>
                                      <span className="material-icons  check-mark">
                                            done
                                      </span>
                                    </a>
                                  </li>
                                  <li data-original-index="4">
                                    <a tabindex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                      <span className="text">
                                            American Samoa
                                      </span>
                                      <span className="material-icons  check-mark">
                                            done
                                      </span>
                                    </a>
                                  </li>
                                  <li data-original-index="5">
                                    <a tabindex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                      <span className="text">
                                            Andorra
                                      </span>
                                      <span className="material-icons  check-mark">
                                            done
                                      </span>
                                    </a>
                                  </li>
                                  <li data-original-index="6">
                                    <a tabindex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                      <span className="text">
                                            Angola
                                      </span>
                                      <span className="material-icons  check-mark">
                                            done
                                      </span>
                                    </a>
                                  </li>
                                  <li data-original-index="7">
                                    <a tabindex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                      <span className="text">
                                            Anguilla
                                      </span>
                                      <span className="material-icons  check-mark">
                                            done
                                      </span>
                                    </a>
                                  </li>
                                  <li data-original-index="8">
                                    <a tabindex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                      <span className="text">
                                            Antarctica
                                      </span>
                                      <span className="material-icons  check-mark">
                                            done
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <select className="selectpicker" data-size="7" data-style="select-with-transition" title="Single Select" tabindex="-98">
                                <option className="bs-title-option" value="">
                                      Single Select
                                </option>
                                <option value="Afghanistan">
                                      Afghanistan
                                </option>
                                <option value="Albania">
                                      Albania
                                </option>
                                <option value="Algeria">
                                      Algeria
                                </option>
                                <option value="American Samoa">
                                      American Samoa
                                </option>
                                <option value="Andorra">
                                      Andorra
                                </option>
                                <option value="Angola">
                                      Angola
                                </option>
                                <option value="Anguilla">
                                      Anguilla
                                </option>
                                <option value="Antarctica">
                                      Antarctica
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="mr-auto">
                    <input type="button" className="btn btn-previous btn-fill btn-default btn-wd disabled" name="previous" value="Previous"/>
                  </div>
                  <div className="ml-auto">
                    <input type="button" className="btn btn-next btn-fill btn-rose btn-wd" name="next" value="Next"/>
                    <input type="button" className="btn btn-finish btn-fill btn-rose btn-wd" name="finish" value="Finish" style={{display: `none`}}/>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </form>
            </div>
          </div>
        </SkyLightStateless>
      </div>
    )
  }
}

ModalWizard.displayName = 'Message';

export default ModalWizard;
