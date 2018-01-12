import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './sidebaritem.css';

const SideBarItem = props => (
  <li className="nav-item">
    <div className="nav-item-icon">
      <i className={props.item.icon} />
    </div>
    <Link to={'/' + props.item.id}>{props.item.text}</Link>
    {props.item.notification ? (
      <div className="nav-item-notif">
        <span>+99</span>
      </div>
    ) : null}
  </li>
);

SideBarItem.propTypes = {
  item: PropTypes.object
};

export default SideBarItem;