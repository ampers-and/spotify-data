import React from 'react'
import * as data from '../utils/manipulate'

const main = () => {

    const idsT = data.trackIds;
    const arr1T = data.trackIdsArr1;
    const arr2T = data.trackIdsArr2;
    console.log({idsT}, {arr1T}, {arr2T});

    const idsAT = data.artistIDsbyTrack;
    const idsA = data.artistIds;
    const arr1A = data.artistIdsArr1;
    const arr2A = data.artistIdsArr2;
    const arr3A = data.artistIdsArr3;
    console.log({idsAT}, {idsA});
    console.log({arr1A}, {arr2A}, {arr3A});

    const featT = data.trackFeatures;
    console.log({featT});


    return (
        <div>
            <p>{idsT.toString()}</p>
            <p>{arr1T.toString()}</p>
            <p>{arr2T}</p>
            <p>{arr1A.toString()}</p>
            <p>{arr2A.toString()}</p>
            <p>{arr3A.toString()}</p>
        </div>
    )
}

export default main
