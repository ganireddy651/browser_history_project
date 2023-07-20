import './index.css'

const History = props => {
  const {eachList, onRemoveHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachList

  const onDelete = () => {
    onRemoveHistory(id)
  }

  return (
    <li>
      <div className="container">
        <div className="time-accessed-container">
          <p>{timeAccessed}</p>
          <div className="logo-container">
            <img className="company-logo" src={logoUrl} alt={title} />
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button onClick={onDelete} className="delete-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default History
