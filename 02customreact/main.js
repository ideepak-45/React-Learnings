
const mainContainer = document.getElementById('root');

const customReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        children: 'Go to Google'
    }
};

function customRender(element, container) {
    const domElement = document.createElement(element.type);

    for (const prop in element.props) {
        if (prop === 'children') {
            domElement.textContent = element.props[prop];
        } else {
            domElement.setAttribute(prop, element.props[prop]);
        }
    }

    container.appendChild(domElement);
}
customRender(customReactElement, mainContainer);
