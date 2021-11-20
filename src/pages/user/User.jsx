import React from 'react'
import './user.css';
import {
	CalendarToday,
	LocationSearching,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish
} from "@material-ui/icons";
import { Link } from 'react-router-dom'

const User = () => {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">User Edit</h1>
				<Link to="/NewUser">
					<button className="userAddbutton">Create</button>
				</Link>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1603756572000/photosp/dc294465-328b-484a-a1d7-60cd24a3e52d/stock-photo-young-woman-woman-professional-educated-business-woman-business-professional-dc294465-328b-484a-a1d7-60cd24a3e52d.jpg" alt="" className="userShowImg" />
						<div className="userShowTitle">
							<span className="userShowUserName">Alana</span>
							<span className="userShowUserTitle">Software Engineer</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle">Account Details
						</span>
						<div className="userShowinfo">
							<PermIdentity className="UserIcon" />
							<span className="userShowInfoTitle">Annabeck99</span>
						</div>

						<div className="userShowinfo">
							<CalendarToday className="UserIcon" />
							<span className="userShowInfoTitle">10.12.1999</span>
						</div>

						<span className="userShowTitle">Contact Details
						</span>
						<div className="userShowinfo">
							<PhoneAndroid className="UserIcon" />
							<span className="userShowInfoTitle">+91 7893 4568 12</span>
						</div>

						<div className="userShowinfo">
							<MailOutline className="UserIcon" />
							<span className="userShowInfoTitle">Annabe@gmail.com</span>
						</div>
						<div className="userShowinfo">
							<LocationSearching className="UserIcon" />
							<span className="userShowInfoTitle">New York |USA</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form className="userUpdateform">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="Annabeck99"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Full Name</label>
								<input
									type="text"
									placeholder="Anna Becker"
									className="userUpdateInput"
								/>
							</div>

							<div className="userUpdateItem">
								<label>Email</label>
								<input
									type="text"
									placeholder="Email"
									className="userUpdateInput"
								/>
							</div>

							<div className="userUpdateItem">
								<label>Phone</label>
								<input
									type="text"
									placeholder="Phone Number"
									className="userUpdateInput"
								/>
							</div>

							<div className="userUpdateItem">
								<label>Address</label>
								<input
									type="text"
									placeholder="Address"
									className="userUpdateInput"
								/>
							</div>

						</div>
						<div className="UserUpdateRight">
							<div className="userUpdateUpload">
								<img src="https://2.bp.blogspot.com/-iWsindQt3R0/WpuZ2nu3w7I/AAAAAAAADWU/4KnG9K2zhZwrZ8CKznxBaQRpEOUG_4zoQCLcBGAs/s1600/professional-girl-with-green-dress.jpg" alt="" className="userUpdateImg" />
								<label htmlFor="file"><Publish className="userUpdateIcon" /></label>
								<input type="file" id="file" style={{ display: "none" }} />
							</div>
							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div >
	)
}

export default User
