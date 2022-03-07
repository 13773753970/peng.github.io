import * as R from 'ramda'
import eventEmitter from './eventEmitter'

let projectsData = [
    {
        icon: "icon-eye",
        title: "Increased Visibility",
        description: "Our advanced AI-powered assistance and a vast category of products based on users’ ratings strengthen our partners’ growth and boost brand value, customer base, and sales."
    },
    {
        icon: "icon-signal",
        title: "Increased Customer Base",
        description: "Our AI-powered shopping assistant understands customers’ collective intent and comes up with products tailored to their specific needs."
    },
    {
        icon: "icon-organization",
        title: "Network of Leading Brands",
        description: "We have partnered with leading brands across various domains and we ensure their exponential growth through our AI and consumer rating assistance for product curation."
    },
    {
        icon: "icon-podcast",
        title: "In-Depth Understanding Of Products",
        description: "Our AI-powered technology achieves a deeper understanding of products to drive the target audience and potential buyers to increase revenue and grow rapidly."
    },
    {
        icon: "icon-external-link",
        title: "Access To New Markets",
        description: "We operate across a wide geographical market making it easier for merchants to introduce products in new markets and give their business a vigorous boost."
    },
    {
        icon: "icon-usd",
        title: "Risk-Free Profit Model",
        description: "Our simple integration with an immediate increase in sales creates a scalable profit model without any risks and enables businesses witness exponential bloom."
    },
    {
        icon: "icon-bulb",
        title: "Digital Innovation",
        description: "Going one step ahead and bring innovation into the approach give us a unique identity among the crowd. We further share it with our partners and help them bloom."
    },
    {
        icon: "icon-globe",
        title: "Wide-Ranging Aims",
        description: "The application of innovative technology drives us to foresee the future well and mold our strategies to achieve wide-ranging aims that also include our partners’ evolution."
    }
]

function getProjectsHtml(rowItems, projectsData) {
    return R.pipe(
        R.map(getProjectHtml),
        R.splitEvery(rowItems),
        R.map(R.pipe(
            R.join(''),
            ele => '<div class="row">' + ele + '</div>'
        )),
        R.join('<div class="spacer"></div>')
    )(projectsData)
}

function getProjectHtml(data) {
    return `
        <div class="project-container">
            <div class="box">
                <svg><use href="#${data.icon}"></use></svg>
                <h3>${data.title}</h3>
                <p>${data.description}</p>
            </div>
        </div>
    `
}

let largeWidthProjectsHtml = getProjectsHtml(4, projectsData)
let mediumWidthProjectsHtml = getProjectsHtml(2, projectsData)
let smallWidthProjectsHtml = getProjectsHtml(1, projectsData)

eventEmitter.on('widthChange', state => {
    if (state === 'largeWidth') {
        document.getElementById('projects-container').innerHTML = largeWidthProjectsHtml
    } else if (state === 'mediumWidth') {
        document.getElementById('projects-container').innerHTML = mediumWidthProjectsHtml 
    } else if (state === 'smallWidth') {
        document.getElementById('projects-container').innerHTML = smallWidthProjectsHtml
    }
})



