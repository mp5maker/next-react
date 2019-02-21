import React, { Fragment, Component } from 'react'

class Prices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currency: "USD"
        }
    }

    render() {
        const { bpi } = this.props
        const { currency } = this.state
        return(
            <Fragment>
                <div>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div>
                                Bitcoin rate for {bpi[currency].description }
                            </div>
                            <div className="badge badge-primary">
                                <span>
                                    { bpi[currency].code }: { bpi[currency].rate }
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export default Prices