import React from "react"
// import PropTypes from "prop-types";


export const MatrixCell = (props) => {
  const item = props.children;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >{item.label}</div>
  )
}

export default MatrixCell;