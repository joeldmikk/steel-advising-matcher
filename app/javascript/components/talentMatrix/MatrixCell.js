import React, {useEffect} from "react"
// import PropTypes from "prop-types";
import { MatrixCellDisplay } from './MatrixCellDisplay';


export const MatrixCell = (props) => {
  const item = props.children;
  const mode = props.mode;
  const selected = props.selected;
  const contents = item.contents || {};

  useEffect(() => {
  }), [props]

  const renderStyle = () => {
    const size = selected ? '36px' : ''
    return(
      {
        color: 'white',
        fontSize: size,
      } 
    )
  }


  const renderContents = () => {
    switch(mode) {
      case 'inline': {
        return null;
      }
      case 'form': {
        return selected ? String.fromCharCode(10003) : item.label;
        
      }
      case 'display': {
        if (Object.keys(contents).length) {
          const {clients, consultants } = contents;
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
      style={renderStyle()}
    >{renderContents()}</div>
  )
}

export default MatrixCell;