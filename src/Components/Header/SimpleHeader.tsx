import './index.css'

type Props = {

}

function SimpleHeader(props: Props) {
    return (
        <div className={`main-menu is-sticky`} id="main-menu">
            <div className="container">
                <nav className="navbar">
                    <a className="navbar-brand" href="/">
                        Digital Transformation Lab
                    </a>
                    <div className="navbar-collapse">
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default SimpleHeader