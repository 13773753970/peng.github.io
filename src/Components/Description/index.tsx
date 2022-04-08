import { ReactElement } from 'react'
import './index.css'

type Props = {
    forwardRef?: React.MutableRefObject<HTMLDivElement | null>
    description: ReactElement
}

function Description(props: Props) {
    return (
        <div ref={ref => {
            if (props.forwardRef !== undefined) {
                props.forwardRef.current = ref
            }
        }} className="description" id="description-container">
            {/* <div id="description-background"></div> */}
            <div className="container">
                {props.description}
            </div>
        </div>
    )
}

export default Description