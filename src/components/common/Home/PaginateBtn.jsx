import React from 'react'

export default function PaginateBtn({paginate, total_btn}) {
    const pag_btn = []
    for(let i=1; i<=total_btn; i++){
        pag_btn.push(i)
    }
    return (
        <div className="row">
            <h4>Jump On :</h4>
            {pag_btn.map(num=>{
                return <button key={num} onClick={()=>paginate(num)} className="mx-1 btn btn-outline-dark">
                        {num}
                     </button>
            })}
        </div>
    )
}
