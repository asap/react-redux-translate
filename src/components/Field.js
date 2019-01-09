import React from 'react';

class Field extends React.Component {
  render() {
    return (
      <div className="ui field">
	<label>Name</label>
        <input type="text" placeholder="What is your name?" />
      </div>
    );
  }
}

export default Field;
