import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import "./Styles/ButtonStyles.css"
import { FcCollaboration } from "react-icons/fc";
import { FcLandscape } from "react-icons/fc";
import Grid from '@material-ui/core/Grid';

class MyButtonClass extends Component {
    render() {
        return (
            <div className="d-flex align-items-center justify-content-center  customHeight">
                <Grid>
                    <Grid item>
                        <div>
                            <Button className="btnStyles"><span className="btnTxtColor">Vijay Creations</span></Button>
                        </div>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row"
                            justify="space-around"
                            alignItems="center">
                            <Grid item>
                                <div className="my-5">
                                    <FcCollaboration size={70}></FcCollaboration>
                                </div>

                            </Grid>
                            <Grid item>
                                <div className="my-5">
                                    <FcLandscape size={70}></FcLandscape>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </div>
        )
    }
}

export default MyButtonClass
