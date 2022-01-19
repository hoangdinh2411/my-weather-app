import React from 'react'
import { Outlet } from 'react-router-dom'

function Actions() {
    return (
        <div>
            <h1>Actions</h1>
            <Outlet />
        </div>
    )
}

export default Actions
