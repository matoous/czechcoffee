import {Popup} from "react-map-gl";


const CafePopup = ({cafe, close}) => {
  return (
    <Popup
      tipSize={5}
      anchor="top"
      longitude={cafe.location.longitude}
      latitude={cafe.location.latitude}
      closeOnClick={false}
      onClose={close}
    >
      <div className="popup">
        <img src={cafe.image}/>
        <div>
          <a href={`/cafes/${cafe.id}`}>
            {cafe.name}
          </a>
        </div>
      </div>
      <style jsx>{`
        .popup {
          max-width: 200px;
        }

        img {
          width: 100%;
        }
      `}</style>
    </Popup>
  )
}

export default CafePopup;
