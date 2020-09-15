import React from 'react';
import axios from 'axios';
import history from "../history";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Grid, TableContainer, TableRow} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            oddsData: {}
        };
    }
    //
    // onClick = (e) => {
    //     const url = "http://localhost:8080/spreads?currentWeek=1"
    //     axios.get(url).then(res => {
    //         const response = res.data;
    //         this.setState({oddsData: response})
    //         console.log(this.state)
    //
    //     })
    // }

    componentDidMount() {
        const url = "http://localhost:8080/spreads?currentWeek=2"
        axios.get(url).then(res => {
            const response = res.data;
            this.setState({oddsData: response})
        })
    }

    render() {

        const {oddsData} = this.state
        return (
            <Grid container spacing={3} justify={"center"}>
                <Grid item xs={6}>
            <TableContainer component={Paper}>
            <Table size={"small"}>
                <TableHead>
                <TableRow>
                    <TableCell align={"center"}>Team</TableCell>
                    <TableCell align={"left"}>Point Spread</TableCell>

                </TableRow>
                </TableHead>
                <tbody>
                {oddsData.length ?
                    oddsData.map(oddsData => (
                        <TableRow>
                            <TableCell align={"center"}>
                                <pre>
                                <Typography component="h1" variant="h5">
                                    {oddsData.awayTeam}
                                </Typography>
                                    </pre>
                                    <pre>
                                <Typography component="h1" variant="h5">
                                    {oddsData.homeTeam}
                                </Typography>
                                    </pre>
                            </TableCell>
                            <TableCell>
                                <pre>
                                    <Button color={"primary"} variant={"outlined"}>
                                {oddsData.awaySpread}
                                    </Button>
                                </pre>
                                <pre>
                                <Button color={"primary"} variant={"outlined"}>
                                {oddsData.homeSpread}
                                </Button>
                                </pre>
                                </TableCell>
                        </TableRow>
                    ))
                    :
                    (<tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>)
                }
                </tbody>
            </Table>
            </TableContainer>
            </Grid>
            </Grid>

        )
    };
}


export default Dashboard;