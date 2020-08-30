import React from "react"
// import PropTypes from "prop-types";


export const MatrixCell = (props) => {
  const item = props.children;
  const renderContents = () => {
    if (props.mode === "inline") {
      return null;
    }

    if (props.mode === 'form' && props.selected) {
      return String.fromCharCode(10003);
    }

    // if (item.contents.clients ) {
    //   return (
    //     <>
    //       {
    //         item.contents.clients &&
    //         <div style={{fontSize: 'small', color: 'black'}}>
    //           {
    //             item.contents.clients && item.contents.clients.map((client) => {
    //               return client.name
    //             }).join(', ')
    //           }
    //         </div>
    //       }
    //       {
    //         item.contents.consultants &&
    //         <div style={{fontSize: 'small', color: 'navy'}}>
    //           {
    //             item.contents.consultants && item.contents.consultants.map((consultant) => {
    //               return consultant.name
    //             }).join(', ')
    //           }
    //         </div>
    //       }
          
          
    //   </>
    //   )
    // }
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