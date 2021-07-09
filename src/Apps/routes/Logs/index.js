import React from 'react'

export default function Logs(){
    let logs = localStorage.getItem("Logs")
    console.log('logs',logs)
    return(
        <>
            <h1>Logs</h1>
            <div className="logs-container">
                {logs}
            </div>
        </>
    )
}