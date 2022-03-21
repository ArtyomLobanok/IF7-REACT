import React from "react";

class Form extends React.Component {
    state = {
        name: '',
    };

    handleClick = () => {};

    handleChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    render() {
        const { name } = this.state;

        return (
            <form onClick={this.handleClick}>
                <input name='name' value={name} onChange={this.handleChange}/>
            </form>
        );
    }
}

export default Form