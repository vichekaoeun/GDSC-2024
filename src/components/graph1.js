import React, { PureComponent, useState } from 'react';
import '../scss/style.scss';
import '../scss/_variables.scss';
import './Animation.css';
import { PieChart, Pie, Cell } from 'recharts';
import VisibilitySensor from 'react-visibility-sensor';

export default function Graph1() {
    const [isVisible, setIsVisible] = useState(false);

    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

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
        <div className='row mx-0 align-items-center' style={{ height: '40rem' }}>
            <div className='col d-flex justify-content-center align-items-center mx-0'>
                <div className='text-center custom-font rounded bg-white p-3 shadow'>
                    <h1 className='display-1 custom-red-font'>1 in 4</h1>
                    <h2 className=''>"People will suffer from mental<br /> disorder, according to the<br /> <u className='custom-blue-font'>World Health Organization (WHO)</u>"</h2>
                </div>
            </div>
            <div className='col row justify-content-center mx-0'>
                <VisibilitySensor onChange={onVisibilityChange}>
                    <PieChart width={500} height={500}>
                        <Pie
                            data={isVisible ? data : []}
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
                </VisibilitySensor>
            </div>
        </div>
    )
}