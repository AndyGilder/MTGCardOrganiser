import Table from 'react-bootstrap/Table';
import './CollectionTable.scss';

function CollectionTable() {
  return (
    <div className="collection-table-container">
        <Table hover>
            <thead>
                <tr>
                    <th>Card Name</th>
                </tr>
            </thead>

            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default CollectionTable