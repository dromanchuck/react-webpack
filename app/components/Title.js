import React from 'react';

class Title extends React.Component {

    render() {
        return(
            <div>
                <h1>Reactive-To-Do-List</h1>
                <h2>Total:{this.props.count}</h2>
            </div>
        );
    }
}

export default Title;