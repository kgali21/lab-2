import Component from './Component.js';
import images from './images.js';
import Headers from './Header.js';
import Horns from './HornsList.js';

class Apps extends Component {

    onRender(dom) {
        const header = new Headers();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const horns = new Horns(props);
        const hornsDOM = horns.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(hornsDOM);
    }

    renderHTML() {
        return /*html*/ `
        <div>
            <section>
                <div class="sorter">
                    <p>Sort By:</p>
                </div>
            </section>
            <section class="list-section">
                <ul class="horns"></ul>
            </section>
            <footer>
            </footer>
        </div>
        `;
    }
}

export default Apps;