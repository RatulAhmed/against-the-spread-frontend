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
                    <th>Away</th>
                    <th>Away Spread</th>
                    <th>Home</th>
                    <th>Home Spread</th>

                </tr>
                </thead>
                <tbody>
                {oddsData.length ?
                    oddsData.map(oddsData => (
                        <tr>
                            <td>{oddsData.awayTeam}</td>
                            <td>{oddsData.awaySpread}</td>
                            <td>{oddsData.homeTeam}</td>
                            <td>{oddsData.homeSpread}</td>
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