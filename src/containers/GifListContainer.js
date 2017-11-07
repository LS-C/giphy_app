import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        dataLoad: false,
        gifs: [],
        gif: [],
        query: ""
    }



    fetchGiphy = (newQuery) => {
        const randNum = Math.floor(Math.random() * 10)
        const QUERY = newQuery
        const API_KEY = 'o0ILf90X1kNh1nFH87wQMgk0vWa1h40O'
        const URL =  `http://api.giphy.com/v1/gifs/search?q=`+ QUERY +`&api_key=` + API_KEY
        fetch(URL)
        .then( res => res.json())
        .then( gifs => this.setState({
            dataLoad: true,
            gifs: gifs.data,
            gifURL: gifs.data[randNum].url.replace('gifs', 'embed'),
            giphys: gifs.data.slice(1,4)
        }))
    }

    handleQuery = newQuery => {
        this.setState({ query: newQuery })
        this.fetchGiphy(newQuery)

    }


    render() {
        console.log(this.state.giphys)
        console.log(this.state.gif)
        console.log(this.state.gifURL)
        return (
                <div>
                <GifSearch handleQuery={this.handleQuery}/>
                {this.state.dataLoad ? <GifList gif={this.state.gifURL} giphys={this.state.giphys}/> : null }

                </div>
            )
    }
}

export default GifListContainer
