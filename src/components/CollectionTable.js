import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux"
import './CollectionTable.scss';

function CollectionTable() {
  const cardCollectionState = useSelector((state) => state.cardCollectionReducer);

  return (
    <div className="collection-table-container">
        <Table hover>
            <thead>
                <tr>
                    <th>Card Name</th>
                </tr>
            </thead>

            <tbody>
              {
                cardCollectionState.cardList?.map((card, index) => (
                  <tr key={index}>
                    <td>{ card.name }</td>
                  </tr>
                ))
              }
            </tbody>
        </Table>
    </div>
  )
}

export default CollectionTable