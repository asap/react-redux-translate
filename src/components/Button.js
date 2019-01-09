import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  renderSubmitText(value) {
    return value === 'english' ? 'Submit' : 'Αποστολή';
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => this.renderSubmitText(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
