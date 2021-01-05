import React from 'react';
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        height={1000}
        sortByValue={true}
        colors={{ scheme: 'blues' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsTextXOffset={4}
        radialLabelsTextColor={{ from: 'color', modifiers: [] }}
        radialLabelsLinkOffset={-11}
        radialLabelsLinkHorizontalLength={19}
        radialLabelsLinkStrokeWidth={2}
        radialLabelsLinkColor={{ from: 'color' }}
        enableSliceLabels={false}
        sliceLabel="value"
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        // tooltip={function(e){var t=e.datum;return o.a.createElement(s,{style:{color:t.color}},o.a.createElement(u,null,"id"),o.a.createElement(d,null,t.id),o.a.createElement(u,null,"value"),o.a.createElement(d,null,t.value),o.a.createElement(u,null,"formattedValue"),o.a.createElement(d,null,t.formattedValue),o.a.createElement(u,null,"color"),o.a.createElement(d,null,t.color))}}
        legends={[]}
    />
)