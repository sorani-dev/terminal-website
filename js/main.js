const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color')
console.log(textColor);

const createBox = (title, top, right, bottom, left, mount) => {
    return new WinBox({
        title,
        width: '400px',
        height: '400px',
        top,
        right,
        bottom,
        left,
        mount,
        onfocus() {
            this.setBackground(textColor)
        },
        onblur() {
            this.setBackground('#777')
        }
    })
}

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        // modal: true,
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus() {
            this.setBackground(textColor)
        },
        onblur() {
            this.setBackground('#777')
        }
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: contactContent,
        onfocus() {
            this.setBackground(textColor)
        },
        onblur() {
            this.setBackground('#777')
        }
    })
})