import renderHornItem from '../src/render-horns.js';

const test = QUnit.test;

QUnit.module('Render Horns');

test('Render html from data', assert => {
    //arrange
    const horn = {
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
            <img id="horn-image" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="Uniwhal" >
        </div>
        <div class="horns-amount">
            <p>
            Horns: 1
            </p>
        </div>
    </li>
`;

    //act
    const html = renderHornItem(horn);

    //assert
    assert.htmlEqual(html, expected);
});