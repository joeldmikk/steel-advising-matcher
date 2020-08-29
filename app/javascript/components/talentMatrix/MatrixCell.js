import React from "react"
// import PropTypes from "prop-types";


export const MatrixCell = (props) => {
  const item = props.children;
  // console.log('item: ', item);
  console.log('MatrixCell props: ', props);
  const renderContents = () => {
    if (props.mode === "inline") {
      return null;
    }
    if (props.mode === 'form' && props.selected) {
      return String.fromCharCode(10003);
    }
    return item.label
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