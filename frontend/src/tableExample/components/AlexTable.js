import React, {Component} from "react";
import TableTree from '@atlaskit/table-tree';
import '@atlaskit/css-reset';
import tableItems from "../tableItems";

export default class AlexTable extends Component {

    render() {
        const Title = props => <span>{props.title}</span>;
        const Numbering = props => <span>{props.numbering}</span>;

        return  <TableTree
            headers={['Title', 'Numbering']}
            columns={[Title, Numbering]}
            columnWidths={['200px', '200px']}
            items={tableItems}
        />
    }
}