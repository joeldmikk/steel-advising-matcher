import React, {useEffect} from "react"
// import PropTypes from "prop-types";
import { MatrixCellDisplay } from './MatrixCellDisplay';


export const MatrixCell = (props) => {
  const item = props.children;
  const mode = props.mode;
  const selected = props.selected;
  const contents = item.contents || {};
  // const context = props.context;

  // useEffect((nextProps) => {
  //   // console.log('nextProps: ', nextProps);
  //   // console.log('newprops');
  // }), [props]


  const renderContents = () => {
    // console.log(props);
    switch(mode) {
      case 'inline': {
        return null;
      }
      case 'form': {
        return selected ? String.fromCharCode(10003) : item.label;
      }
      case 'display': {
        if (Object.keys(contents).length) {
          const {clients, consultants, context} = contents;
          return <MatrixCellDisplay clients={clients} consultants={consultants} context={props.context} />
        }
      }
      default: {
        return item.label
      }
    }
  }

  return (
    <div
      style={{
        // display: 'flex',
        // flexBasis: 0,
        // alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >{renderContents()}</div>
  )
}

export default MatrixCell;