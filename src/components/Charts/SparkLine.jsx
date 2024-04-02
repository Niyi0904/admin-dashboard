import React from 'react';
import { Inject, SparklineTooltip, SparklineComponent } from '@syncfusion/ej2-react-charts'


const SparkLine = ({currentColor, id, type, height, width, data, color}) => {
  return (
    <div>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        LineWidth={1}
        valueType='Numeric'
        fill={color}
        border={{ color:currentColor, width: 2 }}
        dataSource={data}
        xName='x'
        yName='y'
        type={type}
        tooltipSettings={{
          visible:true,
          format:'${x} : data ${y}',
          trackLineSettings: {
            visible: true
          }
        }}
      >
        <Inject 
          services={[SparklineTooltip]}
        />
      </SparklineComponent>
    </div>
  )
}

export default SparkLine
