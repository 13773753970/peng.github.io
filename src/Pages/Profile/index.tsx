import Header from '../../Components/Header'
import ContactUs from '../../Components/ContactUs'
import { useParams } from "react-router-dom";
import people from '../../Data/people'
import React, { useEffect, useRef, useCallback, useState } from 'react';
import Page404 from '../404'

type Props = {

}

function ProfilePage(props: Props) {
    const params = useParams()
    const person = people.find(x => x.id === params.id)
    const contactUsRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => window.scrollTo(0, 0), [])
    const [regions, _setRegions] = useState<{title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]>([])
    const setRegions = useCallback((regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => {
        _setRegions(regions.concat([{title: 'Contact', domRef: contactUsRef}]))
    }, [])
    if (person === undefined) {
        return <Page404/>
    }
    const Profile = person.profile
    return (
        <>
            <Header regions={regions}/>
            <Profile setRegions={setRegions}/>
            <ContactUs forwardRef={contactUsRef}/>
        </>
    )
}

export default ProfilePage