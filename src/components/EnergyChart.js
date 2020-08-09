import React from 'react'
import styled from 'styled-components'
import Chart from 'react-google-charts'

export default function EnergyChart() {
  return (
    <ChartContainer>
      <Chart
        width={400}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Energy Level', 'Me', 'Others'],
          ['Mon', 100, 25],
          ['Tue', 50, 50],
          ['Wed', 75, 100],
          ['Thu', 25, 25],
          ['Fri', 75, 100],
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
        }}
      />
    </ChartContainer>
  )
}

const ChartContainer = styled.div`
  display: flex;
  margin: 10px;
  border-radius: 5px;
  background: linear-gradient(145deg, #e65fa2, #ff70c1);
  box-shadow: 12px 12px 24px #d95999, -12px -12px 24px #ff79cf;
`
