import React from 'react'
import './WidgestSm.css'
import { Visibility } from '@material-ui/icons';
const WidgestSm = () => {
	return (
		<div className="widgestSm">
			<span className="widgetSmTitle">New join Members</span>
			<ul className="widgetSmList">
				<li className="widgetSmListItem">
					<img src="https://www.superprof.co.in/images/teachers/teacher-home-professional-teach-french-lessons-indian-students-upto-class.jpg" alt="" className="widgestSmImg" />

					<div className="widgestSmUser">
						<span className="widgestSmUserName">Jone Make</span>
						<span className="widgestSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgestSmButton">
						<Visibility className="widgestSmIcon" />
						display
					</button>
				</li>
			</ul>


			<ul className="widgetSmList">
				<li className="widgetSmListItem">
					<img src="https://4.bp.blogspot.com/-jIdjlG_QTbM/WzD27vmMtDI/AAAAAAAAARU/T4_pkDIOWtgOsfT0EVBRnP7GvwirVss5QCLcBGAs/s1600/Sharmila-Nicollet-Hot-Golf-Player.jpg" alt="" className="widgestSmImg" />

					<div className="widgestSmUser">
						<span className="widgestSmUserName">Jone Make</span>
						<span className="widgestSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgestSmButton">
						<Visibility />
						display
					</button>
				</li>
			</ul>

			<ul className="widgetSmList">
				<li className="widgetSmListItem">
					<img src="https://st.depositphotos.com/1011643/1248/i/600/depositphotos_12485614-stock-photo-asian-businesswoman-with-tablet-computer.jpg" alt="" className="widgestSmImg" />

					<div className="widgestSmUser">
						<span className="widgestSmUserName">Jone Make</span>
						<span className="widgestSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgestSmButton">
						<Visibility />
						display
					</button>
				</li>
			</ul>
		</div>
	)
}

export default WidgestSm;
