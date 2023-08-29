import React from 'react'
import Chart from "react-apexcharts";
import "../CSS/PieChart.module.css"
import { useState } from 'react';
import { useEffect } from 'react';


const ColumnChart = () => {
    const series = [
        {
            name: "income",
            data: [100, 300, 42, 66, 111]
        },
        {
            name: "expenses",
            data: [100, 300, 42, 66, 111]
        }
    ]
    const options = {

        chart: {
            // width: 700,
            type: 'bar',
            fontFamily: 'Poppins, sans-serif'
        },
        labels: ['', ''],
        dataLabels: {
            enabled: false
        },
        theme: {
            // monochrome: {
            //     enabled: true,
            //     color: '#215D4F',
            //     shadeTo: 'light',
            //     shadeIntensity: 1
            // }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%',
                endingShape: 'rounded'
            },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
        },
        stroke: {
            show: true,
            width: 5,
            colors: ['transparent']
        },
        legend: {
            show: true
        },
        colors: ['#47E720', '#193AE9'],
        // responsive: [
        //     // {
        //     //     breakpoint: 1000,
        //     //     options: {

        //     //     }
        //     // }
        // ]
    };

    // const width = 600

    const [width, setWidth] = useState(600);

    const updateWidth = () => {
        const newWidth = window.innerWidth;
        if (newWidth <= 750) {
            setWidth(newWidth - 100);
        }
    };

    useEffect(() => {
        // Add a listener to update the width when the window is resized
        window.addEventListener('resize', updateWidth);

        // Clean up the listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return (
        <div className='chart ms mt-8'>
            <Chart
                options={
                    options
                }
                series={ series }
                type="bar"
                width={ width }
            // height={ 350 }
            />
        </div>
    )
}

export default ColumnChart
