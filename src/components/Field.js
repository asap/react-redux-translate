import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const {label, placeholder} = this.context.language === 'english'
      ? { label: 'Name', placeholder: 'What is your name?'}
      : { label: 'Ονομα', placeholder: 'Πως σε λένε?'};
    return (
      <div className="ui field">
	<label>{label}</label>
        <input type="text" placeholder={placeholder} />
      </div>
    );
  }
}

export default Field;
