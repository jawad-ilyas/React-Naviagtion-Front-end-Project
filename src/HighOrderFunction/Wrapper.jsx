import React from 'react'

function Wrapper(Component, bg ,px , py) {
    return () => (

        <div className={`container-flude mx-auto ${bg}`}>
            <div className={`container mx-auto px-8 py-4 ${px} ${py}`}>
                <Component />
            </div>
        </div>
    )
}

export default Wrapper