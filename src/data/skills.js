import core from "@/core/core";
const alpha = "CC";
const colorsBackground = [
    `#5c9ead${alpha}`,
    `#ffffff${alpha}`,
    `#326273${alpha}`,
    `#eeeeee${alpha}`,
    `#e39774${alpha}`,
    `#9965f4${alpha}`,
    `#ee4fa6${alpha}`,
    `#f35f2f${alpha}`,
    `#ac6b6b${alpha}`,
    `#bb666f${alpha}`
].sort(() => Math.random() - 0.5)
const option = {
    responsive: !core.isMobile(),
    legend: {
        labels: {
            fontColor: 'whitesmoke'
        }
    },
    title: {
        display: false,
        text: 'Стек технологий',
        fontColor: 'whitesmoke'
    },
    scale: {
        ticks: {
            beginAtZero: true
        },
        reverse: false
    },
    animation: {
        animateRotate: true,
        animateScale: true
    },

    }

export default {
    hardSkills: {
        data: {
            labels: [
                'HTML5',
                'js/ES2015',
                'CSS3',
                'PHP5/7',
                'Python',
                'Vue/Vuex',
                'Vuetify',
                'React/MobX',
                'GitHub'



            ],
            datasets: [{
                data: [
                    99,
                    90,
                    93,
                    60,
                    30,
                    80,
                    93,
                    55,
                    80
                ],
                backgroundColor: colorsBackground,
                label: 'My dataset' // for legend
            }],


        },
        option: option
    },
    softSkills: {
        data: {
            labels: [
                'Коммуникативность',
                'Работа в команде',
                'Тайм-менеджмент',
                'Обучаемость',
                'Гугление🙂',
                "Инициативность"
            ],
            datasets: [{
                data: [
                    95, 90, 70, 98, 99, 80,
                ],
                backgroundColor: colorsBackground,
                label: 'My dataset' // for legend
            }],

        },
        option: option,
    },
    addedSkills:{
        data: {
            labels: [
                'Python',
                'C',
                'Разработка электроники',
                'Кибербезопасность',
                'Еще раз гугление🙂',
                "Фотография",
                "Оформление документации по ЕСКД"
            ],
            datasets: [{
                data: [
                    80, 60, 90, 90, 99, 80,96
                ],
                backgroundColor: colorsBackground,
                label: 'My dataset' // for legend
            }],

        },
        option: option,
    }
}
