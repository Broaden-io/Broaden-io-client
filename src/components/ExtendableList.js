import React from 'react';
import Input from './Input';

const ExtendableList = props => {
  return (
    <div>
      <h4 className="text-default">{props.childCategory} for <b>{props.parentCategory}</b></h4>

      {props.items.map((value, index) => {
        return (
          <div className="row" key={props.pIndex * 100 + index}>
            <label className="col-sm-2 label-on-left">{props.inputLabels ? props.inputLabels[index] : `${props.childCategory} ${index + 1}`}</label>
            <div className="col-sm-10">
              <div className="form-group label-floating is-empty">
                <Input
                  onChange={(newValue) => props.updateInputList(newValue, `${props.childCategory}`, props.pIndex, index)}
                  text={value}
                  placeholder={props.placeholder}
                  helpBlock={props.helpBlock}
                />
              </div>
            </div>
          </div>
        )
      })}

      {props.addItemList && <button type="button" onClick={() => props.addItemList(props.childCategory, props.pIndex)} className="btn btn-success pull-right"><i class="material-icons">add</i>{` Add ${props.childCategory}`}</button>}
      <div>&nbsp;</div>
    </div>
  )
}

export default ExtendableList
