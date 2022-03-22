import {Link} from 'react-router-dom'
function Error () {
    return(
        <section className="error-page section">
            <div className="error-container">
                <h1>oops! It's a dead end</h1>
                <Link to="/" className="btn btn-primary">
                    home page
                </Link>
            </div>
            <h2>error page</h2>
        </section>
    )
}
export default Error