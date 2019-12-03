import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='sideBar'>
      <div>
        <Link className='sidebar-head' to='/dashboard'>
          Dashboard
        </Link>
      </div>
      <div>
        <Link className='sidebar-link' to='/dashboard/posts'>
          posts
        </Link>
      </div>
      <div>
        <Link className='sidebar-link' to='/dashboard/pages'>
          pages
        </Link>
      </div>
      <div>
        <Link className='sidebar-link' to='/dashboard/themes'>
          themes
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
