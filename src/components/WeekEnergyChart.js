import React from 'react'
import styled from 'styled-components'
import Chart from 'react-google-charts'

export default function WeekEnergyChart() {
  return (
    <ChartContainer>
      <Chart
        width={350}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Energy Level', 'Me', 'Others'],
          ['Mon', 75, 25],
          ['Tue', 50, 50],
          ['Wed', 25, 75],
          ['Thu', 25, 75],
          ['Fri', 75, 25],
        ]}
        options={{
          title: 'Energy Level',
          chartArea: { width: '70%' },
          colors: ['#F7EBE8', '#FFA987'],
          backgroundColor: 'none',
          textStyle: {
            color: '#F7EBE8',
          },
          legend: { position: 'bottom' },
          animation: { duration: 1000, easing: 'inAndOut', startup: true },
          isStacked: true,
        }}
      />
    </ChartContainer>
  )
}

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 5px;
  background: linear-gradient(145deg, #e65fa2, #ff70c1);
  box-shadow: 12px 12px 24px #d95999, -12px -12px 24px #ff79cf;
`
