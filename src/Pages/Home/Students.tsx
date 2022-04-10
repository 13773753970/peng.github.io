import React from 'react'
import * as R from 'ramda'
import PersonBox from '../../Components/Box/PersonBox'
import monitorWindowWidth from '../../Hocs/monitorWindowWidth'
import {WidthScope} from '../../helper'
import BorderButton from '../../Components/Buttons/BorderButton'

type Props = {
    widthScope: WidthScope
    forwardRef?: React.MutableRefObject<HTMLDivElement | null>
}

function Students(props: Props) {
    // const rowItems = getRowItems(props.widthScope)
    // const studentsData = R.splitEvery(rowItems, [
    //     {image: require('../../Images/arif.jpg'), title: "What Bayesian Optimisation can teach us about baking better cookies and more"},
    //     {image: require('../../Images/arif.jpg'), title: "Quicker MRIs in the future? Machine learning can help"},
    //     {image: require('../../Images/arif.jpg'), title: "The Price of Diversity in Assignment Problems"},
    //     {image: require('../../Images/arif.jpg'), title: "What Bayesian Optimisation can teach us about baking better cookies and more"},
    //     {image: require('../../Images/arif.jpg'), title: "Quicker MRIs in the future? Machine learning can help"},
    //     {image: require('../../Images/arif.jpg'), title: "The Price of Diversity in Assignment Problems"},
    // ])
    // return (
    //     <div ref={ref => {
    //         if (props.forwardRef !== undefined) {
    //             props.forwardRef.current = ref
    //         }
    //     }} className='container container-padding' id="professors-container">
    //         <h2>Students</h2>
    //         {studentsData.map((row, index) => (
    //             <React.Fragment key={index.toString()}>
    //                 <div className='row row-expand-10'>
    //                     {row.map(student => <PersonBox key={student.title} {...student}/>)}
    //                 </div>
    //                 {index !== studentsData.length - 1 && <div className="spacer"></div>}
    //             </React.Fragment>
    //         ))}
    //         <div className='center-wrapper' style={{marginTop: 20}}><BorderButton text="View more"/></div>
    //     </div>
    // )
    return null
}

function getRowItems(widthScope: WidthScope) {
    switch (widthScope) {
        case WidthScope.LargeWidth:
            return 3
        case WidthScope.MediumWidth:
            return 2
        case WidthScope.SmallWidth:
            return 1
    }
}

export default monitorWindowWidth(Students)