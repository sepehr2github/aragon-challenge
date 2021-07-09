import React from 'react'

export default function Logs(){
    let logs = localStorage.getItem("Logs")

    return(
        <>
            <h1>Logs</h1>
            <div className="logs-container">
                {logs}
            </div>
        </>
    )
}