import React from 'react'

const Description = ({ desc, pool }) => {
    return (
        <div>
            <span>
                {desc}
                <br></br>
                {
                    pool && <>
                        <strong>Pool Information: </strong><span>{`Height : ${pool.height}m - Width : ${pool.width}m - Depth : ${pool.depth}m`}</span>
                    </>
                }
            </span>
        </div>
    )
}

export default Description