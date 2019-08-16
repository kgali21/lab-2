import Component from './Component.js';

class HornItem extends Component{
    renderHTML(){
        const items = this.props.images;

        return /*html*/`
        <li title="${items.description}" class="horns-container">        
            <div class="title">
                <p>${items.title}</p>
            </div>
            <div class="picture-container">
                <img id="horn-image" src="${items.url}" alt="${items.title}" >
            </div>
            <div class="horns-amount">
                <p>
                    Horns: ${items.horns}
                </p>
            </div>
        </li>
        `;
    }
}

export default HornItem;