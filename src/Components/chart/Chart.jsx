import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Chart({ title, data, datakey, grid }) {

	return (
		<div className="chart" >
			<h3 className="chartTitle">{title}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#0000ff" />
					<Line Type="monotone" dataKey={datakey} stroke="#55550db" />
					<Tooltip />
					{grid && < CartesianGrid stroke="#483d8b" strokeDasharray="5 5" />}
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Chart;
