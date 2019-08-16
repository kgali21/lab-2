import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/ `
        <header>
            <img src="../data/cornucopia.png" class="logo" alt="Cornucopia">
            <h1>Hornucopia</h1>
        </header>
        `;
    }
}
export default Header;