import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import {
	LineStyle, Timeline, TrendingUp, People, ShoppingCart, AttachMoney, MailOutline, DynamicFeed, ChatBubbleOutline, CallToAction, ShowChart, ShutterSpeed



} from '@material-ui/icons';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to='/' className="links">
							<li className="sidebarListItem active">
								<LineStyle className="sidebarIcon" />
								Home
							</li>
						</Link>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<TrendingUp className="sidebarIcon" />
							Sales
						</li>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						<Link to="/users" className="links">
							<li className="sidebarListItem active">
								<People className="sidebarIcon" />
								Users
							</li>
						</Link>
						<Link to="/products" className="links">
							<li className="sidebarListItem">
								<ShoppingCart className="sidebarIcon" />
								Products
							</li>
						</Link>

						<li className="sidebarListItem" >
							<AttachMoney className="sidebarIcon" />
							Transaction
						</li>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Notification</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem active">
							<CallToAction className="sidebarIcon" />
							Manage
						</li>
						<li className="sidebarListItem">
							<ShowChart className="sidebarIcon" />
							Analistics
						</li>
						<li className="sidebarListItem">
							<ChatBubbleOutline className="sidebarIcon" />
							Sales
						</li>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Stuff</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem active">
							<LineStyle className="sidebarIcon" />
							Home
						</li>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<ShutterSpeed className="sidebarIcon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div >
	)
}
export default Sidebar