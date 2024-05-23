import React, { Component } from 'react'


type WithSelectableProps = {
    OrignalComponent: React.ComponentType
}

const withSelectable = ({ OrignalComponent }: WithSelectableProps) => {
    class WithSelectable extends Component {
        state = {

        }


        render() {
            return (
                <OrignalComponent {...this.props} />
            )
        }
    }

    return WithSelectable
}

export default withSelectable
