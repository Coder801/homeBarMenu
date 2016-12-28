import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import alcohols from './alcohols.json';

export default function AlcoholsList() {

    const sortAlcoholsFunc = (a, b) => {
        return a.name >= b.name
    };

    let sortAlcohols = alcohols.sort(sortAlcoholsFunc);

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Price</TableHeaderColumn>
                        <TableHeaderColumn>Count</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody> {
                    sortAlcohols.map((item, key) => {
                        return (
                            <TableRow key={key}>
                                <TableRowColumn>{item.name}</TableRowColumn>
                                <TableRowColumn>{item.price}</TableRowColumn>
                                <TableRowColumn>{item.count}</TableRowColumn>
                            </TableRow>
                        )
                    })
                }</TableBody>
            </Table>
        </div>
    )
}
