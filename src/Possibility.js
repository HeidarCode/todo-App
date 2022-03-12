import React from "react";
import "./possibility.css"
class Possibility extends React.Component {
    render() {
        return (
            <div id = "center">
            <div id="myProgress">
                <div id="myBar">10%</div>
                
            </div>
            <table id = "table" style = {{width: "50%"}}>
                    <tr>
                        <th>do work</th>
                        <td>time</td>
                        <td>Rest</td>
                    </tr>
                    <tr>
                        <th>do work</th>
                        <td>time</td>
                        <td>Rest</td>
                    </tr>
                    <tr>
                        <th>do work</th>
                        <td>time</td>
                        <td>Rest</td>
                    </tr>

                </table>

            </div>
        )
    }
}
export default Possibility