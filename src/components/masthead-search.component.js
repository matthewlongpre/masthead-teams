import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import createTrie from 'autosuggest-trie';


class MastheadSearch extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    // Convert the menu data into a flat array
    const flatMenuArray = [];
    const _flattenMenu = (item, container) => {
      container.push(item);
      if (item.menu && item.menu.length !== 0) {
        item.menu.forEach(menu => {
          _flattenMenu(menu, container);
        });
      }
    }
    this.props.items.forEach(menu => {
      _flattenMenu(menu, flatMenuArray);
    });

    // Create a trie so that matches can be found for
    // any part of the title string
    const trie = createTrie(flatMenuArray, 'title');
    return inputLength === 0 ? [] : trie.getMatches(inputValue);

  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = suggestion => suggestion.title;

  // Use your imagination to render suggestions.
  renderSuggestion = suggestion => (
    <div>
      {suggestion.title}
      {suggestion.url !== "/" && <div className="muted">{suggestion.url}</div>}
    </div>
  );

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default MastheadSearch;