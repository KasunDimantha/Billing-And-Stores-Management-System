import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Store() {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async() => {
        const result = await axios.get("http://localhost:8080/getItems");
        setUser(result.data);
    }

  return (
    <>
        <div className='store-container'>
            <div className="store-body">
                <div className="store-head">
                    <Link className='store-head-but' to="/addItem">Add New Item</Link>
                    <Link className="store-head-close" to = "/"><ion-icon name="close"></ion-icon></Link>
                </div>
                <div className="store-table">
                    <table className='content-table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Qty</th>
                                <th>Item</th>
                                <th>Get Price</th>
                                <th>Sell Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr>
                                        <td key={index}>{index+1}</td>
                                        <td>{user.squentity}</td>
                                        <td>{user.spname}</td>
                                        <td>{user.sgetprice}</td>
                                        <td>{user.ssellprice}</td>
                                        <td>
                                            <Link to="/editItem"><ion-icon name="create-outline"></ion-icon></Link>
                                            <button><span className='store-del'><ion-icon name="trash-outline"></ion-icon></span></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    </>
  )
}
