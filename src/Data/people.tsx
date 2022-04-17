import Arif_Ali_Khan from '../Pages/Profile/Arif_Ali_Khan'
import Mahdi_Fahmideh from '../Pages/Profile/Mahdi_Fahmideh'
import Aakash_Ahmad from '../Pages/Profile/Aakash_Ahmad'
import Muhammad_Waseem from '../Pages/Profile/Muhammad_Waseem'
import Muhammad_Azeem_Akbar from '../Pages/Profile/Muhammad_Azeem_Akbar'

export enum Title {
    Professor,
    Postdoctor,
}

const people = [
    {
        id: 'Arif-Ali-Khan',
        name: 'Arif Ali Khan',
        title: Title.Professor,
        image: require('../Images/arif-profile.jpg'),
        profile: Arif_Ali_Khan
    },
    {
        id: 'Mahdi-Fahmideh',
        name: 'Mahdi Fahmideh',
        title: Title.Professor,
        image: require('../Images/Mahdi-Fahmideh-profile.jpeg'),
        profile: Mahdi_Fahmideh
    },
    {
        id: 'Aakash-Ahmad',
        name: 'Aakash Ahmad',
        title: Title.Professor,
        image: require('../Images/Aakash-Ahmad-profile.jpeg'),
        profile: Aakash_Ahmad
    },
    {
        id: 'Muhammad-Waseem',
        name: 'Muhammad Waseem',
        title: Title.Postdoctor,
        image: require('../Images/Muhammad-Waseem-profile.jpeg'),
        profile: Muhammad_Waseem
    },
    {
        id: 'Muhammad-Azeem-Akbar',
        name: 'Muhammad Azeem Akbar',
        title: Title.Postdoctor,
        image: require('../Images/Muhammad-Azeem-Akbar-profile.jpeg'),
        profile: Muhammad_Azeem_Akbar
    }
]

export default people
