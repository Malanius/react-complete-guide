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
    const WithClass = class extends Component {
        render() {
            return (
                < div className={className} >
                    <WrappedComponent ref={this.props.forwarderRef} {...this.props} />
                </div >
            );
        }

    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwarderRef={ref}/>
    });
}

export default withClass;