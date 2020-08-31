import React, {useState} from "react"
// import PropTypes from "prop-types";


export const MatrixCell = (props) => {
  const item = props.children;
  const mode = props.mode;
  const selected = props.selected;
  const contents = item.contents || {};


  const renderContents = () => {
    switch(mode) {
      case 'inline': {
        return null;
      }
      case 'form': {
        return selected ? String.fromCharCode(10003) : item.label;
      }
      case 'display': {
        if (contents) {
          let c = undefined;
          if (contents.clients && contents.clients.length) {
            console.log('contents found: ', contents);
            console.log('for cell: ', item);
            return (
              <div style={{fontSize: 'small', color: 'black'}}>
                  {
                  contents.clients && contents.clients.map((client) => {
                    return client.name
                  }).join(', ')
                }
              </div>
            );
          }
          if (contents.consultants && contents.consultants.length) {
            return (
              <div style={{fontSize: 'small', color: 'gray'}}>
                {
                  contents.consultants && contents.consultants.map((consultant) => {
                    return consultant.name
                  }).join(', ')
                }
              </div>
            );
          }
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >{renderContents()}</div>
  )
}

export default MatrixCell;