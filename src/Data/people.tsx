import Arif_Ali_Khan from '../Pages/Profile/Arif_Ali_Khan'
import Mahdi_Fahmideh from '../Pages/Profile/Mahdi_Fahmideh'
import Aakash_Ahmad from '../Pages/Profile/Aakash_Ahmad'
import Muhammad_Waseem from '../Pages/Profile/Muhammad_Waseem'
import Muhammad_Azeem_Akbar from '../Pages/Profile/Muhammad_Azeem_Akbar'
import Peng_Liang from '../Pages/Profile/Peng_Liang'
import Tommi_Mikkonen from '../Pages/Profile/Tommi_Mikkonen'
import Mahmood_Niazi from '../Pages/Profile/Mahmood_Niazi'
import Peng_Zhou from '../Pages/Profile/Peng_Zhou'
import Pekka_Abrahamsson from '../Pages/Profile/Pekka_Abrahamsson'

export enum Title {
    Professor,
    Postdoctor,
    Master,
}

const people = [
    {
        id: 'Arif-Ali-Khan',
        name: 'Arif Ali Khan',
        title: Title.Professor,
        position: 'Assistant Professor',
        image: require('../Images/Arif-Ali-Khan-profile.jpeg'),
        profile: Arif_Ali_Khan
    },
    {
        id: 'Pekka-Abrahamsson',
        name: 'Pekka Abrahamsson',
        title: Title.Professor,
        position: 'Professor',
        image: require('../Images/Pekka-Abrahamsson-profile.jpeg'),
        profile: Pekka_Abrahamsson
    },
    {
        id: 'Mahdi-Fahmideh',
        name: 'Mahdi Fahmideh',
        title: Title.Professor,
        position: 'Senior Lecturer',
        image: require('../Images/Mahdi-Fahmideh-profile.jpeg'),
        profile: Mahdi_Fahmideh
    },
    {
        id: 'Aakash-Ahmad',
        name: 'Aakash Ahmad',
        title: Title.Professor,
        position: 'Assistant Professor',
        image: require('../Images/Aakash-Ahmad-profile.jpeg'),
        profile: Aakash_Ahmad
    },
    {
        id: 'Muhammad-Waseem',
        name: 'Muhammad Waseem',
        title: Title.Postdoctor,
        position: 'Postdoctoral Researcher',
        image: require('../Images/Muhammad-Waseem-profile.jpeg'),
        profile: Muhammad_Waseem
    },
    {
        id: 'Muhammad-Azeem-Akbar',
        name: 'Muhammad Azeem Akbar',
        title: Title.Postdoctor,
        position: 'Postdoctoral Researcher',
        image: require('../Images/Muhammad-Azeem-Akbar-profile.jpeg'),
        profile: Muhammad_Azeem_Akbar
    },
    {
        id: 'Peng-Liang',
        name: 'Peng Liang',
        title: Title.Professor,
        position: 'Professor',
        image: require('../Images/Peng-Liang-profile.jpeg'),
        profile: Peng_Liang
    },
    {
        id: 'Tommi_Mikkonen',
        name: 'Tommi Mikkonen',
        title: Title.Professor,
        position: 'Professor',
        image: require('../Images/Tommi-Mikkonen-profile.jpeg'),
        profile: Tommi_Mikkonen
    },
    {
        id: 'Mahmood-Niazi',
        name: 'Mahmood Niazi',
        title: Title.Professor,
        position: 'Professor',
        image: require('../Images/Mahmood-Niazi-profile.jpeg'),
        profile: Mahmood_Niazi
    },
    {
        id: 'Peng-Zhou',
        name: 'Peng Zhou',
        title: Title.Master,
        position: 'Master',
        image: require('../Images/Peng-Zhou-profile.jpeg'),
        profile: Peng_Zhou
    }
]

export default people
