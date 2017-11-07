import React from 'react'
import { replace } from '../services/gifs'

const GifList = (props) => {
    const giphy = props.giphys.map( giphy => {
        return (
            <li>{giphy.url}</li>
            )
    })

    return (
        <div>
            <ul>
                {giphy}
            </ul>


                <iframe src={props.gif} width="600" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bashful-10I4df63lDcj28">via GIPHY</a></p>

        </div>

        )
}

export default GifList
