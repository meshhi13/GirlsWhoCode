'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';
import piecharts from '../images/pctwo.png';

const ContactUs = ({ isMobile = false }) => {
  const statusData = [
    { name: 'First-Time', value: 52, color: '#FFFFFF' },
    { name: 'Returning', value: 48, color: '#A19BA9' },
  ];

  const genderData = [
    { name: 'Women', value: 70, color: '#A9C4F7' },
    { name: 'Men', value: 28, color: '#7E9EE0' },
    { name: 'Non-Binary', value: 2, color: '#FFFFFF' },
  ];

  const classYearData = [
    { name: 'Sophomore', value: 52, color: '#F381B9' },
    { name: 'Junior', value: 18, color: '#E4A2D0' },
    { name: 'Senior', value: 16, color: '#B37D9E' },
    { name: 'Freshman', value: 14, color: '#FFFFFF' },
  ];

  const renderPie = (data, textSize = 2) => {
    let cumulative = 0;
    return data.map((slice, i) => {
      const startAngle = (2 * Math.PI * cumulative) / 100;
      cumulative += slice.value;
      const endAngle = (2 * Math.PI * cumulative) / 100;

      const startX = 16 + 16 * Math.cos(startAngle);
      const startY = 16 + 16 * Math.sin(startAngle);
      const endX = 16 + 16 * Math.cos(endAngle);
      const endY = 16 + 16 * Math.sin(endAngle);
      const largeArcFlag = slice.value > 50 ? 1 : 0;

      const pathData = `M16,16 L${startX},${startY} A16,16 0 ${largeArcFlag} 1 ${endX},${endY} Z`;

      const midAngle = (startAngle + endAngle) / 2;
      const labelX = 16 + 8 * Math.cos(midAngle);
      const labelY = 16 + 8 * Math.sin(midAngle);

      return (
        <g key={i}>
          <path
            d={pathData}
            fill={slice.color}
            style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.25))' }}
          />
          {slice.value > 5 && (
            <text
              x={labelX}
              y={labelY}
              fontSize={`${textSize}px`}
              fill="#000"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {slice.name} ({slice.value}%)
            </text>
          )}
        </g>
      );
    });
  };

  return (
    <div
      className={`notebook-page w-full h-full ${
        isMobile ? 'p-4 pt-6 pb-6' : 'p-6 pt-20 pb-6 pl-24'
      } relative`}
    >
      <div className={`${isMobile ? 'px-4' : 'ml-12'}`}>
        <h2 className="text-lg font-bold text-gray-800 mb-2">2024 stats</h2>
        <p className="text-gray-700 text-sm mb-6 pb-3">
          230+ Registrations from all different skill levels!
        </p>

        <div className="relative w-full h-[450px]">
          <svg
            viewBox="0 0 32 32"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              overflow: 'visible',
              width: '200px',
              height: '200px',
            }}
          >
            {renderPie(statusData)}
          </svg>

          <svg
            viewBox="0 0 32 32"
            style={{
              position: 'absolute',
              top: 100,
              right: 0,
              overflow: 'visible',
              width: '200px',
              height: '200px',
            }}
          >
            {renderPie(genderData)}
          </svg>

          <svg
            viewBox="0 0 32 32"
            style={{
              position: 'absolute',
              top: 220,
              left: 0,
              overflow: 'visible',
              width: '240px',
              height: '240px',
            }}
          >
            {renderPie(classYearData, 1.5)}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

