// import PermanentDrawerLeft from "./UI_Drawer";
// import List from "@mui/material/List";
import BasicList from "./UI_List";
import LineChart from "./LineChart";

const LeftMenu = (props) => {
  return (
    <aside className="menu">
      <p className="menu-label">General</p>
      <ul className="menu-list">
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <a>Customers</a>
        </li>
      </ul>
      <p className="menu-label">Administration</p>
      <ul className="menu-list">
        <li>
          <a>Team Settings</a>
        </li>
        <li>
          <a className="is-active">Manage Your Team</a>
          <ul>
            <li>
              <a>Members</a>
            </li>
            <li>
              <a>Plugins</a>
            </li>
            <li>
              <a>Add a member</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Invitations</a>
        </li>
        <li>
          <a>Cloud Storage Environment Settings</a>
        </li>
        <li>
          <a>Authentication</a>
        </li>
      </ul>
      <p className="menu-label">Transactions</p>
      <ul className="menu-list">
        <li>
          <a>Payments</a>
        </li>
        <li>
          <a>Transfers</a>
        </li>
        <li>
          <a>Balance</a>
        </li>
      </ul>
    </aside>
  );
};
const Dashboard = (props) => {
  return (
    <div className="container">
      <div className="notification is-primary">
        <div className="columns">
          <div className="column is-one-quarter">
            <div className="box">
              {/* <LeftMenu /> */}
              {/* <List /> */}
              <BasicList />
            </div>
          </div>
          <div className="column">
            <div className="box">
              <div className="container">
                {/* <LineChart /> */}
                {/* <Dashboard /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
