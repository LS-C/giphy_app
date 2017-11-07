import React from 'react'

class GifSearch extends React.Component {

    state = {
        input: ""
    }

    handleInputChange = e => {
        const input = e.target.value
        this.setState({ input })
    }

    handleQueryUpdate = e => {
        e.preventDefault()
        this.props.handleQuery(this.state.input)
        this.setState({ input: "" })
    }

    render() {
        console.log(this.state.input)
        return (
            <div>
                <form onSubmit={this.handleQueryUpdate}>
                    <input type="text" value={this.state.input} onChange={this.handleInputChange}/>
                    <input type="submit" />
                </form>
            </div>
            )
    }

}

export default GifSearch
