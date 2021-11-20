import React from 'react'
import './newuser.css'
const Newuser = () => {
	return (
		<div className="newUser">
			<h1 className="newUserTitle">New User</h1>
			<form className="newUserForm">
				<div className="newUserItem">
					<label>UserName</label>
					<input type="text" placeholder="Jone" />
				</div>

				<div className="newUserItem">
					<label>Full Name</label>
					<input type="text" placeholder="Jone Smith" />
				</div>

				<div className="newUserItem">
					<label>Email</label>
					<input type="email" placeholder="JoneSmith@gamil.com" />
				</div>

				<div className="newUserItem">
					<label>Password</label>
					<input type="password" placeholder="password" />
				</div>

				<div className="newUserItem">
					<label>Phone</label>
					<input type="password" placeholder="+91 12345 78994" />
				</div>

				<div className="newUserItem">
					<label>Address</label>
					<input type="password" placeholder="New York" />
				</div>

				<div className="newUserItem">
					<label>Gender</label>
					<div className="newUserGender">
						<input type="radio" name="gender" id="male" value="male" />
						<label for="male">Male</label>

						<input type="radio" name="gender" id="female" value="female" />
						<label for="female">Female</label>

						<input type="radio" name="gender" id="others" value="others" />
						<label for="others">Others</label>
					</div>
				</div>
				<div className="newUserItem">
					<label>Active</label>
					<select className="newUserSelect" name="active" id="active">
						<option value="yes">Yes</option>
						<option value="No">No</option>
					</select>
				</div>
			</form>
			<button className="newUserButton">Create</button>
		</div>
	)
}

export default Newuser
