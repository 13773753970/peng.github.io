import * as R from 'ramda'
import eventEmitter from './eventEmitter'

let professorsData = [
    {image: require('../images/professor-1.jpeg'), title: "What Bayesian Optimisation can teach us about baking better cookies and more"},
    {image: require('../images/professor-2.jpeg'), title: "Quicker MRIs in the future? Machine learning can help"},
    {image: require('../images/professor-3.jpeg'), title: "The Price of Diversity in Assignment Problems"},
    {image: require('../images/professor-1.jpeg'), title: "What Bayesian Optimisation can teach us about baking better cookies and more"},
    {image: require('../images/professor-2.jpeg'), title: "Quicker MRIs in the future? Machine learning can help"},
    {image: require('../images/professor-3.jpeg'), title: "The Price of Diversity in Assignment Problems"},
]

let studentsData = [
    {image: require('../images/professor-1.jpeg'), title: "What Bayesian Optimisation can teach us about baking better cookies and more"},
    {image: require('../images/professor-2.jpeg'), title: "Quicker MRIs in the future? Machine learning can help"},
    {image: require('../images/professor-3.jpeg'), title: "The Price of Diversity in Assignment Problems"},
    {image: require('../images/professor-1.jpeg'), title: "What Bayesian Optimisation can teach us about baking better cookies and more"},
    {image: require('../images/professor-2.jpeg'), title: "Quicker MRIs in the future? Machine learning can help"},
    {image: require('../images/professor-3.jpeg'), title: "The Price of Diversity in Assignment Problems"},
]

function getProfessorsHtml(title, rowItems, professorsData) {
    return R.pipe(
        R.map(getProfessorHtml),
        R.splitEvery(rowItems),
        R.map(R.pipe(
            R.join(''),
            ele => '<div class="row">' + ele + '</div>'
        )),
        R.join('<div class="spacer"></div>'),
        (ele) => `<h2>${title}</h2>` + ele + '<div class="button-wrapper"><a href="/">View more</a></div>'
    )(professorsData)
}

function getProfessorHtml(data) {
    return `
    <div class="professor-container" >
        <div class="box">
            <div class="fill-content" style="background-image: url(${data.image})">
                <p>${data.title}</p>
            </div>
        </div>
    </div>
    `
}

let largeWidthProfessorsHtml = getProfessorsHtml('Professors', 3, professorsData)
let mediumWidthProfessorsHtml = getProfessorsHtml('Professors', 2, professorsData)
let smallWidthProfessorsHtml = getProfessorsHtml('Professors', 1, professorsData)

let largeWidthStudentsHtml = getProfessorsHtml('Students', 3, studentsData)
let mediumWidthStudentsHtml = getProfessorsHtml('Students', 2, studentsData)
let smallWidthStudentsHtml = getProfessorsHtml('Students', 1, studentsData)

eventEmitter.on('widthChange', state => {
    if (state === 'largeWidth') {
        document.getElementById('professors-container').innerHTML = largeWidthProfessorsHtml
        document.getElementById('students-container').innerHTML = largeWidthStudentsHtml
    } else if (state === 'mediumWidth') {
        document.getElementById('professors-container').innerHTML = mediumWidthProfessorsHtml
        document.getElementById('students-container').innerHTML = mediumWidthStudentsHtml
    } else if (state === 'smallWidth') {
        document.getElementById('professors-container').innerHTML = smallWidthProfessorsHtml
        document.getElementById('students-container').innerHTML = smallWidthStudentsHtml
    }
})