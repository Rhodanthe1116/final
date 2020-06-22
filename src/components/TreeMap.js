import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash.isempty';

// examples:
import GoogleMap from './GoogleMap';

// component

// my component
import TreeMarker from './TreeMarker'

const ntuLocation = {
    center: {
        lat: 25.017319,
        lng: 121.538977
    },
    zoom: 16,
}
const NTU_CENTER = [25.017319, 121.538977]

function TreeMap({ trees, onLearnMoreClick }) {


    // // onChildClick callback can take two arguments: key and childProps
    // function onChildClickCallback(key) {
    //     const index = trees.findIndex(e => e.id === key);
    //     let newTrees = trees
    //     newTrees[index].show = !newTrees[index].show; // eslint-disable-line no-param-reassign
    //     setTrees(newTrees)
    // };

    // function onChildMouseEnterCallback(key) {
    //     const index = trees.findIndex(e => e.id === key);
    //     let newTrees = trees
    //     newTrees[index].show = true // eslint-disable-line no-param-reassign
    //     console.log(newTrees)
    //     setTrees(newTrees)
    // };

    // function onChildMouseLeaveCallback(key) {
    //     const index = trees.findIndex(e => e.id === key);
    //     let newTrees = trees
    //     newTrees[index].show = false // eslint-disable-line no-param-reassign
    //     console.log(newTrees)
    //     setTrees(newTrees)
    // };


    return (
        <GoogleMap
            defaultZoom={ntuLocation.zoom}
            defaultCenter={NTU_CENTER}
        >
            {!isEmpty(trees) && trees.map(tree =>
                (<TreeMarker
                    key={tree.id}
                    lat={tree.lat}
                    lng={tree.lng}
                    show={true}
                    tree={tree}
                    onLearnMoreClick={onLearnMoreClick}
                />))}
        </GoogleMap>
    );
}

export default TreeMap;
