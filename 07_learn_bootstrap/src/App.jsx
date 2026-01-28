import './App.css'

function App() {

  return (
    <div className='d-flex flex-column gap-3'>
      <h1>hello</h1>

      <div className="progress ">
        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: '50%' }}>
        </div>
      </div>

      <div className="spinner-border"></div>

      <div className="spinner-grow"></div>

      <ul className="pagination">
        <li className="page-item active"><a className="page-link" href="/">1</a></li>
        <li className="page-item"><a className="page-link" href="/">2</a></li>
      </ul>

      <ul className="breadcrumb">
        <li className="breadcrumb-item">1</li>
        <li className="breadcrumb-item">2</li>
      </ul>


      <ul className="list-group">
        <li className="list-group-item">First item</li>
        <li className="list-group-item">Second item</li>
        <li className="list-group-item">Third item</li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">First item</li>
        <li className="list-group-item">Second item</li>
        <li className="list-group-item">Third item</li>
      </ul>

    </div>
  )
}

export default App
