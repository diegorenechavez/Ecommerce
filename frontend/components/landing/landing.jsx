import React from 'react'; 

class Landing extends React.Component { 
    constructor(props) { 
        super(props)
    }


    render() { 
        return (
            <div>
                
                <h1>YES IT WORKED</h1>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )



    }
}

export default Landing