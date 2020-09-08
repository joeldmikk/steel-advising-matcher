import React, {useState} from "react"

export const MatrixCellDisplay = (props) => {
  const {clients, consultants, context} = props;

  const renderContents = () => {
    if ((clients && clients.length || consultants && consultants.length) && context == 'overview') {
      return (
        <div>
          <div style={{fontSize: '20px', color: 'black'}}>{clients.length}:{consultants.length}</div>
        </div> 
      );
    } else if (clients && clients.length && context == 'clients-overview') {
      return (
        <div style={{fontSize: '12px', color: 'black'}}>{clients.map((client) => { return client.name }).join(', ')}</div>
      );
    } else if (consultants && consultants.length && context == 'consultants-overview') {
      return (
        <div style={{fontSize: '12px', color: 'black'}}>{consultants.map((consultant) => { return consultant.name }).join(', ')}</div>
      );
     }
     return '';
  }

  return renderContents();
}