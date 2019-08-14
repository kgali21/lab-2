import Component from './Component.js';

class FilterImages extends Component{

    onRender(select){
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML(){
        const images = this.props.images;
        const horns = getHornNum(images);
        const optionsHTML = renderOptionsHTML(horns);

        return /*html*/ `
            
                    <select class="filter">
                        <option value="all">All Horns</option>
                        ${optionsHTML}
                    </select>
            

        `;
    }
}

function getHornNum(images){
    const horns = [];
    
    images.forEach(image => {
        if(!horns.includes(image.horns)){
            horns.push(image.horns);
        }
    });
    
    console.log('hrons', horns);

    return horns;
}

function renderOptionsHTML(horns) {
    const hornOptions = horns.map(horn => {
        return /*html*/ `
        <option value="${horn}">${horn}</option>
        `;
    });

    return hornOptions.join('');
}
export default FilterImages;