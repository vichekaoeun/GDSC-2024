import React, { PureComponent } from 'react';
import Chart from 'chart.js/auto';
import '../scss/style.scss';
import '../scss/_variables.scss';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export default function Infographic() {
    const data = [
        { name: 'Group Affected', value: 25 },
        { name: 'Group Not Affected', value: 75 },
    ];

    const COLORS = ['#01CDA9', '#B9F1E7'];
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <div className='row'>
                <div className='col d-flex justify-content-center align-items-center'>
                    <div className='text-center custom-font'>
                        <h1 className='display-1 custom-red-font'>1 in 4</h1>
                        <h1 className='fs-5'>"People will suffer from mental<br /> disorder, according to the<br /> <u className='custom-blue-font'>World Health Organization (WHO)</u>"</h1>
                    </div>
                </div>
                <div className='col row justify-content-center'>
                    <PieChart width={500} height={500}>
                        <Pie
                            data={data}
                            cx={250}
                            cy={250}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={200}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
            <div className='row'>
                <div className='col'>Bar Chart</div>
                <div className='col'>10th leading cause of death in the U.S. "The Centers for Disease Control and Prevention (CDC)
                    reports suicide being a major risk factor."</div>
            </div>
        </>
    )
}