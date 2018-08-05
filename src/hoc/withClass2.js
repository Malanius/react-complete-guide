import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {
//     //Sped operator on props ensures that the wrapped component gets all original props
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     );
// }

const withClass = (WrappedComponent, className) => {
    //Sped operator on props ensures that the wrapped component gets all original props
    return class extends Component {
        render() {
            return (
                < div className={className} >
                    <WrappedComponent {...this.props} />
                </div >
            );
        }

    }
}

export default withClass;