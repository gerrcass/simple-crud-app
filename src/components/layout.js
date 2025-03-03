import React from 'react'

const Layout = ({children}) => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand">CRUD</span>
            </nav>
            <div className="container">
                <div className="row p-3">
                    <div className="offset-3 col-6">
                        {children}
                    </div>

                </div>

            </div>
        </>

    )
}

export default Layout