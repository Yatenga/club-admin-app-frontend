import React, { Component } from 'react'

export class HomeHome extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-white fixed-top">
                    <a class="navbar-brand" href="index.html">Concept</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <ul className="navbar-nav ml-auto navbar-right-top">
                            <li className="nav-item">
                                <div id="custom-search" className="top-search-bar">
                                    <input className="form-control" type="text" placeholder="Search.."/>
                                </div>
                            </li>
                            <li class="nav-item dropdown notification">
                                <ul class="dropdown-menu dropdown-menu-right notification-dropdown">
                                    <li>
                                        <div class="notification-title"> Notification</div>
                                        <div class="notification-list">
                                        <div class="list-group">
                                        <a href={HomeHome} class="list-group-item list-group-item-action active">
                                            <div class="notification-info">
                                                <div class="notification-list-user-img"><img src="assets/images/avatar-2.jpg" alt="" class="user-avatar-md rounded-circle"/></div>
                                                <div class="notification-list-user-block"><span class="notification-list-user-name">Jeremy Rakestraw</span>accepted your invitation to join the team.
                                                    <div class="notification-date">2 min ago</div>
                                                </div>
	                                        </div>
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="notification-info">
                                                <div class="notification-list-user-img"><img src="assets/images/avatar-3.jpg" alt="" class="user-avatar-md rounded-circle"/></div>
                                                <div class="notification-list-user-block"><span class="notification-list-user-name">John Abraham </span>is now following you
                                                    <div class="notification-date">2 days ago</div>
                                                </div>
                                            </div>
	                                    </a>
                                        </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HomeHome
