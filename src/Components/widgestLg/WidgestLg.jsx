import React from 'react'
import './WidgestLg.css'

const WidgestLg = () => {

	const Button = ({ type }) => {
		return <button className={"widgestLgButton " + type}> {type}</button>
	};
	return (
		<div className="widgestLg">
			<h3 className="widgestLgTitle">Latest Transaction</h3>
			<table className="widgestLgTable">
				<tr className="widgestLgTr">
					<th className="widgestLgTh">Customer</th>
					<th className="widgestLgTh">Data</th>
					<th className="widgestLgTh">Amount</th>
					<th className="widgestLgTh">Status</th>
				</tr>
				<tr className="widgestLgTr">
					<td className="widgestLgUser">
						<img src="https://eddie-hernandez.com/wp-content/uploads/2019/07/Professional_Headshots_16.jpg" alt="" className="widgestLgImg" />
						<span className="widgestLgName">Juvana</span>
					</td>
					<td className="widgestLgDate">2 June 2021</td>
					<td className="widgestLgAmount">$122.00</td>
					<td className="widgestLStatus">
						<Button type="Approved" />
					</td>
				</tr>

				<tr className="widgestLgTr">
					<td className="widgestLgUser">
						<img src="https://i.pinimg.com/736x/33/c6/f8/33c6f839d355360e5021b2291de409f6--headshot-ideas-professional-photographer.jpg" alt="" className="widgestLgImg" />
						<span className="widgestLgName">Juvana</span>
					</td>
					<td className="widgestLgDate">2 June 2021</td>
					<td className="widgestLgAmount">$122.00</td>
					<td className="widgestLStatus">
						<Button type="Declined" />
					</td>
				</tr>

				<tr className="widgestLgTr">
					<td className="widgestLgUser">
						<img src="https://www.hagopsphotography.com/wp-content/uploads/2021/09/Team-headshot.jpg" alt="" className="widgestLgImg" />
						<span className="widgestLgName">Juvana</span>
					</td>
					<td className="widgestLgDate">2 June 2021</td>
					<td className="widgestLgAmount">$122.00</td>
					<td className="widgestLStatus">
						<Button type="Pending" />
					</td>
				</tr>
			</table>
		</div>
	)
}

export default WidgestLg
