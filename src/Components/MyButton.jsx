import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import "./Styles/ButtonStyles.css"

class MyButtonClass extends Component {
    render() {
        return (
            <div className="d-flex align-items-center justify-content-center  customHeight">
                <Button className="btnStyles"><span className="btnTxtColor">Vijay Creations</span></Button>
            </div>
        )
    }
}

export default MyButtonClass
