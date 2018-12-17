import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import createTrie from 'autosuggest-trie';

import "./../styles/masthead-search.css";


class MastheadSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };

    this.flatMenuArray = [];
    const _flattenMenu = (item, container) => {
      container.push(item);
      if (item.menu && item.menu.length !== 0) {
        const parentId = item._id;
        item.menu.forEach(menu => {
          menu.parentId = parentId;
          _flattenMenu(menu, container);
        });
      }
    }
    props.items.forEach(menu => {
      _flattenMenu(menu, this.flatMenuArray);
    });

  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    const trie = createTrie(this.flatMenuArray, 'title');
    return inputLength === 0 ? [] : trie.getMatches(inputValue);

  };

  getSuggestionValue = suggestion => suggestion.title;

  getParents(id) {

    const parents = [];

    const searchArray = (id) => {
      const currentItem = this.flatMenuArray.find(item => item._id === id);
      parents.push(currentItem._id);
      if (currentItem.parentId) {
        const parent = this.flatMenuArray.find(item => item._id === currentItem.parentId);
        searchArray(parent._id);
      }
    }

    searchArray(id);
    return parents.reverse();

  }

  _handleClick = (id) => {
    const menuState = this.getParents(id);
    this.props.handleSuggestionClick(menuState);
  }

  renderSuggestion = suggestion => {
    return suggestion.menu && suggestion.menu.length !== 0
    ?
    <button onClick={() => this._handleClick(suggestion._id)} target="_blank">
      <div className="text-overflow">{suggestion.title}</div>
    </button>
    :
    <a href={suggestion.url} target="_blank">
      <div className="text-overflow">{suggestion.title}</div>
      {suggestion.url !== "/" && <div className="muted font-sm text-overflow">{suggestion.url}</div>}
    </a>
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search the menu...',
      value,
      onChange: this.onChange
    };

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