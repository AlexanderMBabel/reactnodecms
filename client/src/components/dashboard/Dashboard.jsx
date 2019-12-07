import React from 'react';

import SideNav from './SideNav';
import Posts from './Posts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ auth: { user } }) => {
  let newuser = user;
  console.table(newuser);
  return (
    <div className='container d-flex'>
      <SideNav className='float-left' />

      <main className='align-content-center align-items-center text-center w-75'>
        {user !== null && <p>{user[0].name}</p>}
      </main>
    </div>
  );
};

Dashboard.PropType = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
