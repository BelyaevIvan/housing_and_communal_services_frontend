export interface TableRow {
    number : number
    status : string
    order_Date : string
    formationDate : string
    completitionDate : string
    total_amount : number
    address : string
}

export interface TableProps {
    data : TableRow[]
}