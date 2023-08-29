import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { series as sG } from '../App';
import Chart from "react-apexcharts";
import "../CSS/PieChart.module.css"

const PieChart = () => {

    const [series, setSeries] = useAtom(sG)
    const [chartWidth, setChartWidth] = useState(window.innerWidth <= 800 ? 300 : 400);

    const updateChartWidth = () => {
        const newWidth = window.innerWidth <= 800 ? 300 : 400;
        setChartWidth(newWidth);
    };

    useEffect(() => {
        // Add a listener to update the chart width when the window is resized
        window.addEventListener('resize', updateChartWidth);

        // Clean up the listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', updateChartWidth);
        };
    }, []);
    const options = {

        chart: {

            type: 'pie',
            fontFamily: 'Poppins, sans-serif'
        },
        labels: ['', ''],
        dataLabels: {
            formatter(val) {
                return [val.toFixed(1) + '%']
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                color: '#215D4F',
                shadeTo: 'light',
                shadeIntensity: 2
            }
        },
        legend: {
            show: false
        }
    };

    return (
        <div id='piechart' className=' chart mt-8 w-max'>
            <Chart
                options={
                    options
                }
                series={ series }
                type="pie"
                width={ chartWidth }
            />
        </div>
    )
}

export default PieChart
