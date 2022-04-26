const Gentleman = ({
  name,
  status,
  profession,
  twitter,
  picture,
  alternativeText,
  deleteIcon,
}) => {
  return (
    <>
      <li className="gentleman">
        <div className="gentleman__avatar-container">
          <img
            className="gentleman__avatar"
            src={`img/${picture}`}
            alt={alternativeText}
          />
          <span className="gentleman__initial">F</span>
        </div>
        <div className="gentleman__data-container">
          <h2 className="gentleman__name">{name}</h2>
          <ul className="gentleman__data-list">
            <li className="gentleman__data">
              <span className="gentleman__data-label">
                Profession:{profession}
              </span>
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Status:{status}</span>
            </li>
            <li className="gentleman__data">
              <span className="gentleman__data-label">Twitter:{twitter}</span>
            </li>
            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
          </ul>
        </div>
      </li>
    </>
  );
};
export default Gentleman;
