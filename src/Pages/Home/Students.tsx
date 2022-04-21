import React from 'react'
import * as R from 'ramda'
import PersonBox, {BlankPersonBox} from '../../Components/Box/PersonBox'
import monitorWindowWidth from '../../Hocs/monitorWindowWidth'
import {WidthScope} from '../../helper'
// import BorderButton from '../../Components/Buttons/BorderButton'
import people, {Title} from '../../Data/people'
import {useNavigate} from 'react-router-dom'

type Props = {
    widthScope: WidthScope
    forwardRef?: React.MutableRefObject<HTMLDivElement | null>
}

function Students(props: Props) {
    const rowItems = getRowItems(props.widthScope)
    const professorsData = R.splitEvery(rowItems, people.filter(x => x.title === Title.Master))
    const navigate = useNavigate()
    return (
        <div ref={ref => {
            if (props.forwardRef !== undefined) {
                props.forwardRef.current = ref
            }
        }} className='container container-padding' id="professors-container">
            <h2>Students</h2>
            {professorsData.map((row, index) => (
                <React.Fragment key={index.toString()}>
                    <div className='row row-expand-10'>
                        {row.map(professor => 
                            <PersonBox key={professor.id} name={professor.name} position={professor.position} image={professor.image} onClick={() => {
                                navigate(`/people/${professor.id}`)
                            }}/>
                        )}
                        {new Array(rowItems - row.length).fill(1).map((x, i) => <BlankPersonBox key={i.toString()}/>)}
                    </div>
                    {index !== professorsData.length - 1 && <div className="spacer"></div>}
                </React.Fragment>
            ))}
            {/* <div className='center-wrapper' style={{marginTop: 20}}><BorderButton text="View more"/></div> */}
        </div>
    )
}

function getRowItems(widthScope: WidthScope) {
    switch (widthScope) {
        case WidthScope.LargeWidth:
            return 3
        case WidthScope.MediumWidth:
            return 1
        case WidthScope.SmallWidth:
            return 1
    }
}

export default monitorWindowWidth(Students)