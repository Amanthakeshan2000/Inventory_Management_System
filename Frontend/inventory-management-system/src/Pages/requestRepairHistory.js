import React from 'react'
import '../Css/requestRepairHistory.css'
import Trash from '../Assets/Trash.png'

function RequestRepairHistory() {
    const getStatusClass = (status) => {
        if (status === 'Pending') {
            return 'pending';
        } else if (status === 'Rejected') {
            return 'rejected';
        } else if (status === 'Approved') {
            return 'approved';
        } else if (status === 'Repaired') {
            return 'repaired';
        } else if (status === 'Repairing') {
            return 'repairing';
        }
    }
/*sample data*/
  const data = [
      { requestedDate: '12/05/2020',category:'Electric', items:'LED TV', requiredDate:'25/05/2020', location:'FOC, Ground Floor, 009 hall',status: 'Pending' },
      { requestedDate: '12/05/2020', category:'Electric', items: 'Projector', requiredDate: '25/05/2020', location: 'FOC, First Basement, 009 hall', status: 'Rejected' },
      { requestedDate: '12/05/2020',category:'Electric', items:'Microphone', requiredDate:'25/05/2020', location:'FOC, Second Basement, 009 hall',status: 'Approved' },
      { requestedDate: '12/05/2020',category:'Electric', items:'LED TV', requiredDate:'25/05/2020', location:'FOC, First Floor, 009 hall',status: 'Repaired' },
      { requestedDate: '12/05/2020',category:'Electric', items:'LED TV', requiredDate:'25/05/2020', location:'FOC, Second floor, 009 hall',status: 'Repairing' },
   
    
  ];
  return (
      <>
          <div className='repair-request-history'>
              <h1 className='main-heading'>Repair Request History</h1>
              <div className='page-body'>
              <div className='history-data-table'>
              <table className='history-table'>
                  <thead>
                      <th className='table-heading'>REQUESTED DATE</th>
                      <th className='table-heading'>CATEGORY</th>
                      <th className='table-heading'>ITEMS</th>
                      <th className='table-heading'>REQUIRED DATE</th>
                      <th className='table-heading'>LOCATION</th>
                      <th className='table-heading'>STATUS</th>
                      <th className='table-heading'></th>
                  </thead>
                  <tbody>
                  {data.map((row, index) => (
                  <tr key={index}>
                  <td className='table-data'>{row.requestedDate}</td>
                  <td className='table-data'>{row.category}</td>
                  <td className='table-data'>{row.items}</td>
                  <td className='table-data'>{row.requestedDate}</td>
                  <td className='table-data'>{row.location}</td>
                  <td className="table-data">
                  <div className={`status-box ${getStatusClass(row.status)}`}>
                    {row.status}
                  </div>
                </td>
                  <td className='table-data'><img src={Trash} alt='Trash' className='trash-img' /></td>
                  </tr>
                   ))}
                        
                 </tbody>
                </table>
              </div>
            </div>
          </div>
      </>
  )
}

export default RequestRepairHistory