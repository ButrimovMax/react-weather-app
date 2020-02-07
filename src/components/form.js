import React from "react"

class From extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.weatherFunc}>
                    <input type="text" name="city" placeholder="Город" />
                    <button>Получить погоду</button>
                </form>
            </div>
        );
    }
}

export default From;