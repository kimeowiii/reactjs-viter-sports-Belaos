import React from 'react'

const TableStanding = ({team, W, L, PCT}) => {
  return (
    <>
      <tr className="border-b">
                      <td className="py-2 px-4">{team}</td>
                      <td className="py-2 px-4 text-center">{W}</td>
                      <td className="py-2 px-4 text-center">{L}</td>
                      <td className="py-2 px-4 text-center">{PCT}</td>
                    </tr>
    </>
  )
}

export default TableStanding
