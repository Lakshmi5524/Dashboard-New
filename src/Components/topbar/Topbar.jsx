import React from 'react'
import "./Topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
const Topbar = () => {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">Admin</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topIconBadge">2</span>
					</div>

					<div className="topbarIconContainer">
						<Language />
						<span className="topIconBadge">2</span>
					</div>

					<div className="topbarIconContainer">
						<Settings />
					</div>
					<img src="https://us.123rf.com/450wm/fizkes/fizkes2001/fizkes200101262/137537874-head-shot-studio-portrait-millennial-indial-pretty-smiling-girl-wearing-eyeglasses-looking-at-camera.jpg?ver=6.jpg" alt="" className=" topAvatar" />
				</div>
			</div>
		</div>
	)
}

export default Topbar