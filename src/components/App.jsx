import React, { Component } from 'react';
import Card from '../Card';
import Logo from './images.js';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            people: [],
            isLoaded: false,
            
        }

    }


    loadMovies = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    movies: json,
                })
            });

    }
    loadPeople = () => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    people: json,
                })
            });
    }


    render() {



        return (

            <div className="content-container">
            <Logo />
                <button onClick={this.loadMovies}>Load Movies</button>
                <button onClick={this.loadPeople}>Load People</button>
                {this.state.movies.map(item => {

                    return <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />



                })}
                {this.state.people.map(item => {

                    return <Card
                        key={item.id}
                        title={item.name}
                        description={item.gender}
                    />



                })}
            </div>


        );
    }









}

export default App;