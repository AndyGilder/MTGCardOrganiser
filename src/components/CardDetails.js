import { useSelector } from "react-redux"

function CardDetails() {
  const cardCollectionState = useSelector((state) => state.cardCollectionReducer);

  return (
    <div className="mt-3">
      <form className="d-flex">
        <div>
          <img
            src={cardCollectionState.card.image_uris?.small}
            alt={cardCollectionState.card.name}
          />
        </div>

        <div className="mx-3 w-25">
          <div className="my-2">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input type="number" id="quantity" name="quantity" min="0" defaultValue="1" required className="form-control" />
          </div>
        </div>

        <div className="mx-3 w-75">
          <div className="my-2">
              <label htmlFor="condition" className="form-label">Condition</label>
              <select className="form-select">
                <option>Mint</option>
                <option>Near Mint</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Light Played</option>
                <option>Played</option>
                <option>Poor</option>
              </select>
            </div>
        </div>
      </form>
    </div>
  )
}

export default CardDetails