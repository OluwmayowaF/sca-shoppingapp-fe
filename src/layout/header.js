import React from 'react';
import {Button }from 'react-bootstrap';

export default function header(props) {
    return (
        <div className="App-header row p-3">
          <div className='col-6'>
          <h3 className='pl-4'>MBS.co</h3>

          </div>
          <div className='col-6 pr-4'>
          <Button variant="primary header-button float-right" onClick={props.displayForm}>
       Add a Product
      </Button>
          </div>
        
         
        </div>
    )
}
