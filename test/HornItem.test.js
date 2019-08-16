import HornItem from '../src/HornItem.js';

const test = QUnit.test;

QUnit.module('Render Horn Item');

test('Renders html from data', assert => {
    //arrange
    const images = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
    <li title="A unicorn and a narwhal nuzzling their horns" class="horns-container">        
        <div class="title">
            <p>UniWhal</p>
        </div>
        <div class="picture-container">
            <img id="horn-image" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="UniWhal" >
        </div>
        <div class="horns-amount">
            <p>
                Horns: 1
            </p>
        </div>
    </li>
    `;
    const props = { images: images };
    const hornItem = new HornItem(props);
    const html = hornItem.renderHTML();
    //assert

    assert.htmlEqual(html, expected);

});