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
            <div className='row mb-5 mt-3'>
                <div className='col d-flex justify-content-center align-items-center'>
                    <div className='text-center custom-font'>
                        <h1 className='display-1 custom-red-font'>1 in 4</h1>
                        <h1 className=''>"People will suffer from mental<br /> disorder, according to the<br /> <u className='custom-blue-font'>World Health Organization (WHO)</u>"</h1>
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
                <div className='col'>
                    Bar Chart
                </div>
                <div className='col d-flex justify-content-center align-items-center'>
                    <div className='text-center custom-font'>
                        <h1><span style={{ fontSize: '1.5em' }} className='custom-red-font'>10th</span> leading cause of death in<br /> the U.S.</h1>
                        <h3>
                            "<u className='custom-blue-font'>The Centers for Disease Control and<br /> Prevention (CDC)</u> reports suicide<br /> being a major risk factor."
                        </h3>
                    </div>
                </div>
            </div >
        </>
    )
}