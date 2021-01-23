import React from 'react'
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/sunburst
import { ResponsiveSunburst } from '@nivo/sunburst'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveSunburst = ({ data /* see data tab */ }) => (
    <ResponsiveSunburst
        data={data}
        margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
        id="name"
        value="size"
        cornerRadius={2}
        borderWidth={1}
        borderColor="white"
        colors={{ scheme: 'red_blue' }}
        // childColor={{ from: 'color', modifiers: [] }}
        animate={false}
        motionConfig="gentle"
        isInteractive={true}
    />
)