// src/components/admin/Dashboard.js
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import OwnersList from './OwnersList';
import BooksApproval from './BooksApproval';
import Stats from './Statistics';
import './Dashboard.css';


const Dashboard = () => {
    return (
        <div className="dashboard">

            <div className="side-bar">
            <div>  <h1>Book Rent</h1></div>
<div className="first">
                <ul>
                    <li><Link to="/admin/owners">Dashboard</Link></li>
                    <li><Link to="/admin/books">Book Upload</Link></li>
                    <li><Link to="/admin/stats">Other</Link></li>
                    <li><Link to="/admin/stats">Other</Link></li>
                    <li><Link to="/admin/stats">Other</Link></li>
                </ul>
</div>

<div className="second">
                <ul>
                    <li><Link to="">Notification</Link></li>
                    <li><Link to="">Setting</Link></li>
                    <li><Link to="">Login Us Owner</Link></li>
                </ul>
</div>

<div>
                 <button className="btn">LogOut</button>
</div>

            </div>

            <div className="dashboard-content">
                <Switch>
                    <Route path="/admin/dashboard" component={Dashboard} />
                    <Route path="/admin/OwnersList" component={OwnersList} />
                    <Route path="/admin/BooksApproval" component={BooksApproval} />
                    <Route path="/admin/Statistics" component={Statistics} />
                </Switch>

                <div>
                    <h1>Admin/Dashboard</h1>
                </div>

                <div className="sttcs">
                    <H3>This Month Statistics</H3>
                    <p>Tue, 14 Nov, 2024, 11.30 </p>

                    <div className='income'>
                        <h4>Income</h4>
                        <button>this Month</button>
                        <h1><bold>ETB 9460.00 </bold></h1> <P>1.5%</P>

                        </div>

                        <div className="avail">

                        <h3>Available Books</h3>
                        </div>

                </div>

                <div className="book-satus">
                    <h4><bold>Live Book Status</bold></h4>
                    <table>

                        <th>

                        </th>
                    </table>


                </div>

                <div>

                    <bold>Earning Summary</bold> <p></p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
