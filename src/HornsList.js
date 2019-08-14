import Component from './Component.js';
import HornItem from './HornItem.js';

class Horns extends Component{
    
    onRender(dom){
        const horns = this.props.images;
        
        horns.forEach(images => {
            const props = { images: images };
            const hornItem = new HornItem(props);
            const hornItemDOM = hornItem.renderDOM();
            dom.appendChild(hornItemDOM);
        });
    }

    renderHTML(){
        return /*html*/ `
            <ul class="horns"></ul>
        
        `;
    }
}

export default Horns;