import React, { PureComponent } from 'react';
import Chart from 'chart.js/auto';
import '../scss/style.scss';
import '../scss/_variables.scss';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Infographic() {
    const data = [
        { name: 'Group Affected', value: 25 },
        { name: 'Group Not Affected', value: 75 },
    ];

    const data2 = [
        { cause: 'Heart Disease', deaths: 65900 },
        { cause: 'Cancer', deaths: 599000 },
        { cause: 'Unintentional Injuries', deaths: 173000 },
        { cause: 'Chronic Lower Respiratory Disease', deaths: 156000 },
        { cause: 'Stroke', deaths: 147000 },
        { cause: 'Alzheimer\'s Disease', deaths: 121000 },
        { cause: 'Diabetes', deaths: 88000 },
        { cause: 'Nephritis', deaths: 51000 },
        { cause: 'Influenza and Pneumonia', deaths: 50000 },
        { cause: 'Suicide', deaths: 47000 },
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
            <div className='row mx-0 mb-5 mt-3 align-items-center' style={{ height: '40rem' }}>
                <div className='col d-flex justify-content-center align-items-center'>
                    <div className='text-center custom-font'>
                        <h1 className='display-1 custom-red-font'>1 in 4</h1>
                        <h1 className=''>"People will suffer from mental<br /> disorder, according to the<br /> <u className='custom-blue-font'>World Health Organization (WHO)</u>"</h1>
                    </div>
                </div>
                <div className='col row justify-content-center mx-0'>
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
            <div className='row mx-0 align-items-center' style={{ height: '40rem' }}>
                <div className='col row justify-content-center custom-height'>
                    <ResponsiveContainer width="100%" height='100%'>
                        <BarChart
                            width={500}
                            height={300}
                            data={data2}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="cause" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            <Bar dataKey="deaths" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} animationBegin={0} animationDuration={2000} />
                        </BarChart>
                    </ResponsiveContainer>
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