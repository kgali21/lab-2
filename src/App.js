import Component from './Component.js';
import images from './images.js';
import Headers from './Header.js';
import Horns from './HornsList.js';
import FilterImages from './FilterImages.js';

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

        const filterHornProps = {
            images: images,
            onFilter: (hornNum) => {
                let filteredHorns;
                if(hornNum === 'all'){
                    filteredHorns = images;
                }
                else {
                    filteredHorns = images.filter(image => { 
                        // eslint-disable-next-line
                        return image.horns == hornNum;
                    });
                }
                const updateProps = { images: filteredHorns };
                horns.update(updateProps);
            }
        };
        const filterHorns = new FilterImages(filterHornProps);
        const filterHornDOM = filterHorns.renderDOM();

        const filterSection = dom.querySelector('.filter-section');
        filterSection.appendChild(filterHornDOM);
    }

    renderHTML() {
        return /*html*/ `
        <div>
            <section class="filter-section"></section>
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