import React, { useState } from 'react'
import { getTicket } from '../../service/config'

const Ticket = ({ cid }) => {
    const [ticket, setTicket] = useState(null)
    const handleTicket = () => {
       const userTicket= getTicketbyUid(cid)
       console.log(userTicket)
    }
    return (
        <div>
            <h1 className='text-center'>Ticket</h1>
        </div>
    )
}

export default Ticket