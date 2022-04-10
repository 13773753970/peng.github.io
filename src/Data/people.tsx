import Arif_Ali_Khan from '../Pages/Profile/Arif_Ali_Khan'
import Mahdi_Fahmideh from '../Pages/Profile/Mahdi_Fahmideh'
import Aakash_Ahmad from '../Pages/Profile/Aakash_Ahmad'

export enum Title {
    Professor,
    Student,
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
        image: require('../Images/default-profile.webp'),
        profile: Mahdi_Fahmideh
    },
    {
        id: 'Aakash-Ahmad',
        name: 'Aakash Ahmad',
        title: Title.Professor,
        image: require('../Images/default-profile.webp'),
        profile: Aakash_Ahmad
    }
]

export default people
