import {Helmet} from "react-helmet"
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
    const location = window.location.href
    const person = people.find(x => x.id === params.id)
    const contactUsRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => window.scrollTo(0, 0), [])
    // useEffect(() => {
    //     (function(d, s, id) {
    //         var js: any, fjs: any = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) return;
    //         js = d.createElement(s); js.id = id;
    //         js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    //         fjs.parentNode.insertBefore(js, fjs);
    //         }(document, 'script', 'facebook-jssdk'))
    // }, [])
    const [regions, _setRegions] = useState<{title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]>([])
    const setRegions = useCallback((regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => {
        _setRegions(regions.concat([{title: 'Contact', domRef: contactUsRef}]))
    }, [])
    if (person === undefined || person.profile === undefined) {
        return <Page404/>
    }
    const Profile = person.profile
    // console.log(location)
    return (
        <>
            <Helmet>
                <meta property="og:url" content={location} />
                <meta property="og:type" content="profile" />
                <meta property="og:profile:username" content={person.name}/>
                <meta property="og:title" content={`Digital Transformation Lab, ${person.position}: ${person.name}`} />
                <meta property="og:description" content="profile" />
                <meta property="og:image" content={person.image}/>
            </Helmet>
            <Header regions={regions}/>
            <Profile setRegions={setRegions}/>
            {/* <div className="fb-share-button" 
data-href="https://digital-transformation-lab.github.io/Arif-Ali-Khan" 
data-layout="button_count">
</div> */}
            <ContactUs forwardRef={contactUsRef}/>
        </>
    )
}

export default ProfilePage