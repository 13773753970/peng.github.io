import debounceMonitor from './debounceMonitor'
import eventEmitter from './eventEmitter'

debounceMonitor(
    [{getValue: () => window.scrollY, listener: (callback) => window.addEventListener('scroll', () => callback(window.scrollY))}],
    (scrollY) => scrollY >= 0 && scrollY < 80,
    1000,
    (lessThan) => {
        if (lessThan) {
            setTimeout(() => document.getElementById("main-menu").classList.remove("is-sticky"), 0)
        } else {
            setTimeout(() => document.getElementById("main-menu").classList.add("is-sticky"), 0)
        }
    }
)

let navItems = {
    description: [document.getElementById('nav-item-description'), document.getElementById('mobile-nav-item-description')],
    projects: [document.getElementById('nav-item-projects'), document.getElementById('mobile-nav-item-projects')],
    professors: [document.getElementById('nav-item-professors'), document.getElementById('mobile-nav-item-professors')],
    students: [document.getElementById('nav-item-students'), document.getElementById('mobile-nav-item-students')],
    contact: [document.getElementById('nav-item-contact'), document.getElementById('mobile-nav-item-contact')]
}
let containers = {
    description: document.getElementById('description-container'),
    projects: document.getElementById('projects-container'),
    professors: document.getElementById('professors-container'),
    students: document.getElementById('students-container'),
    contact: document.getElementById('cta-container')
}

// 自动检测当前在哪块区域
let regionMonitor = debounceMonitor(
    [
        {getValue: () => window.scrollY, listener: (callback) => eventEmitter.on('scrollEnd', callback)},
        {getValue: () => undefined, listener: (callback) => eventEmitter.on('resizeEnd', callback)},
    ],
    () => {
        let descriptionRect = containers.description.getBoundingClientRect()
        let projectsRect = containers.projects.getBoundingClientRect()
        let professorsRect = containers.professors.getBoundingClientRect()
        let studentsRect = containers.students.getBoundingClientRect()
        let contactRect = containers.contact.getBoundingClientRect()
        if (window.innerHeight / 2 >= descriptionRect.top && window.innerHeight / 2 < descriptionRect.top + descriptionRect.height) {
            return 'description'
        } else if (window.innerHeight / 2 >= projectsRect.top && window.innerHeight / 2 < projectsRect.top + projectsRect.height) {
            return 'projects'
        } else if (window.innerHeight / 2 >= professorsRect.top && window.innerHeight / 2 < professorsRect.top + professorsRect.height) {
            return 'professors'
        } else if (window.innerHeight / 2 >= studentsRect.top && contactRect.top + contactRect.height * 2 / 3 > window.innerHeight) {
            return 'students'
        } else {
            return 'contact'
        }
    },
    0,
    (name) => {
        setTimeout(() => {
            for (let _name in navItems) {
                if (_name === name) {
                    navItems[_name].forEach(ele => {
                        ele.classList.add('active')
                    })
                } else {
                    navItems[_name].forEach(ele => {
                        ele.classList.remove('active')
                    })
                }
            }
        }, 0)
    }
)

// 菜单栏点击
let headerHeight = 110
eventEmitter.on('widthChange', state => headerHeight = state === 'largeWidth' ? 110 : 80)
let mobileMenu = document.getElementById('mobile-menu')
let headerButton = document.getElementById('menu-button')
for (let itemName in navItems) {
    navItems[itemName].forEach(item => {
        item.addEventListener('click', e => {
            mobileMenu.classList.remove('active')
            headerButton.classList.remove('active')
            regionMonitor.changeState(itemName)
            scrollTo({
                top: containers[itemName].offsetTop - headerHeight - 10,
                behavior: 'smooth'
            })
        })
    })
}

function monitorHeaderButton() {
    headerButton.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            headerButton.classList.remove('active')
            mobileMenu.classList.remove('active')
        } else {
            headerButton.classList.add('active')
            mobileMenu.classList.add('active')
        }
    })
}

monitorHeaderButton()

