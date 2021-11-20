import React from 'react'
import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import Chart from "../../Components/chart/Chart"
import './home.css'
import { userData } from '../../dammydata';
import WidgestSm from '../../Components/widgestSm/WidgestSm'
import WidgestLg from '../../Components/widgestLg/WidgestLg'


const Home = () => {
	return (
		<div className="home">
			<Featuredinfo />
			<Chart data={userData} title="User Analytics" grid datakey="Active User" />
			<div className="homeWidgest">
				<WidgestSm />
				<WidgestLg />
			</div>

		</div>
	)
}

export default Home
