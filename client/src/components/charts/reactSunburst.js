import React from 'react';
import Sunburst from 'react-d3-zoomable-sunburst';

export const MySunburst = ({data}) => (

<Sunburst
                data={data}
                scale="exponential"
                tooltipContent={ <div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" /> }
                tooltip
                tooltipPosition="right"
                keyId="Sunburst"
                width={window.innerWidth * 0.8}
                value={data.criteria}
                height={window.innerHeight * 0.8}
            />
)