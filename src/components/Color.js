import React, { Component } from 'react';

const ColorContext = React.createContext()

class ColorProvider extends Component {
    state= {
        color: 'seagreen'
    }

    render() {
        return (
            <div>
                <ColorContext.Provider
                    value={{
                        state: this.state
                    }}>
                    {this.props.children}
                </ColorContext.Provider>
            </div>
        );
    }
}


export default ColorProvider;
export {ColorContext};