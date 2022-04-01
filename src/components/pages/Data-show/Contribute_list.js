import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Contribute_list = () => {
    return (
        <div>
        <Sidebar/>
     <section className="container-fluid row">
     {/* show sidebar */}
     
     <div className="col-md-10 p-4 pr-5" style={{ marginLeft:'250px' , right: 0, backgroundColor: "#F4FDFB" }}>
         <table class="table table-hover  table-borderless table-striped ">
             <thead>
                 <tr>
                     <th scope="col">User_Name</th>
                     <th scope="col">Donation_Amount</th>
                     <th scope="col">Donation_Area</th>
                   
                     
                 </tr>
             </thead>
             {/* maping data */}
             {/* {
                 orderList.map(list => <OrderListDetails list={list} />)
             } */}
         </table>


     </div>
 </section>
 </div>
    );
};

export default Contribute_list;