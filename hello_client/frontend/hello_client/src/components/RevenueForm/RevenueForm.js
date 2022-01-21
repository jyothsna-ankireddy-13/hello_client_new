import React from 'react'
import Performa from './Performa/Performa'
import Invoice from './Invoice/Invoice'
import Quotation from './Quotation/Quotation'

function RevenueForm() {
    return (
        <div>
            <Quotation/>
            <Invoice/>
            <Performa/>
        </div>
    )
}

export default RevenueForm
