import React from 'react';
import axios from 'axios';
import history from "../history";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            oddsData: {}
        };
    }

    onClick = (e) => {
        const url = "http://localhost:8080/spreads?currentWeek=1"
        axios.get(url).then(res => {
            const response = res.data;
            this.setState({oddsData: response})
            console.log(this.state)

        })
    }

    componentDidMount() {
        const url = "http://localhost:8080/spreads?currentWeek=1"
        axios.get(url).then(res => {
            const response = res.data;
            this.setState({oddsData: response})
            console.log(this.state)
        })
    }

    render() {

        const {oddsData} = this.state
        return (

            <Table>
                <thead>
                <tr>
                    <th></th>
                    <th>Point Spread</th>

                </tr>
                </thead>
                <tbody>
                {oddsData.length ?
                    oddsData.map(oddsData => (
                        <tr>
                            <td>
                                <pre>
                                    {oddsData.awayTeam}
                                    </pre>
                                    <pre>
                                    {oddsData.homeTeam}
                                    </pre>
                            </td>
                            <td>
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
                                </td>
                        </tr>
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
        )
    };
}
export default Dashboard;