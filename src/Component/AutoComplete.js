import React, { Component } from "react";
import PropTypes from "prop-types";
import './AutoComplete.css';
import APIKEY from './env';


const axios = require('axios').default;

export class Autocomplete extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };
    static defaultProperty = {
        suggestions: []
    };
    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ""
        };
    }

    onChange = e => {
        // const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        // const filteredSuggestions = suggestions.filter(
        //   suggestion =>
        //     suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        // );

        axios({
            method: 'get',
            url: 'https://api.spoonacular.com/food/ingredients/autocomplete',
            params: {
                apiKey: APIKEY,
                query: userInput,
                // ingredients: ingredientStr,

                number: 5,
                metaInformation: false,
                intolerances: '',
            }

        })
            .then(

                (res) => {

                    // this.setState(() => ({
                    //     tempMenu: res.data
                    // }));

                    let ingredientList = [];

                    res.data.map((data, index) =>
                        ingredientList.push(data.name)
                    )

                    this.setState({
                        activeSuggestion: 0,
                        filteredSuggestions: ingredientList,
                        showSuggestions: true,
                        // userInput: e.currentTarget.value
                    });


                })

        this.setState({

            userInput: e.currentTarget.value
        });


    };

    onClick = e => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };

    onAddBtn =()=>{

        this.props.onAdd(this.state.userInput);
        this.setState({

            userInput: ''
        });

    }

    //   onKeyDown = e => {
    //     const { activeSuggestion, filteredSuggestions } = this.state;

    //     if (e.keyCode === 13) {
    //       this.setState({
    //         activeSuggestion: 0,
    //         showSuggestions: false,
    //         userInput: filteredSuggestions[activeSuggestion]
    //       });
    //     } else if (e.keyCode === 38) {
    //       if (activeSuggestion === 0) {
    //         return;
    //       }

    //       this.setState({ activeSuggestion: activeSuggestion - 1 });
    //     } else if (e.keyCode === 40) {
    //       if (activeSuggestion - 1 === filteredSuggestions.length) {
    //         return;
    //       }

    //       this.setState({ activeSuggestion: activeSuggestion + 1 });
    //     }
    //   };

    render() {
        const {
            onChange,
            onClick,
            // onKeyDown,
            state: {
                // activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;
        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="suggestionsList rounded border">
                        {filteredSuggestions.map((suggestion, index) => {
                            // let className;

                            // if (index === activeSuggestion) {
                            //     className = "";
                            // }

                            return (
                                <li 
                                key={suggestion} 
                                onClick={onClick}
                                className="suggestions"
                                >
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className="no-suggestions">
                        <em>No suggestions</em>
                    </div>
                );
            }
        }

        return (
            <React.Fragment>

                <div className="input-group">
                    <input
                        type="search"
                        className="form-control"
                        onChange={onChange}
                        // onKeyDown={onKeyDown}
                        value={userInput}
                    />
                    <div className="input-group-append">
                        <button 
                        className="btn btn-success " 
                        type="button"
                        onClick={this.onAddBtn}
                        >Add</button>
                    </div>
                </div>
                {suggestionsListComponent}
            </React.Fragment>
        );
    }
}

export default Autocomplete;