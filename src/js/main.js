import { getParkData, parkInfoLinks } from './parkService.mjs';
import setHeaderFooter from './setHeaderFooter.mjs';
import { parkIntroTemplate, mediaCardTemplate } from './templates.mjs';

const parkData = getParkData();

function setParkIntro(data) {
    const introEl = document.querySelector('.intro');
    introEl.insertAdjacentHTML('afterbegin', parkIntroTemplate(data));
}

function setParkInfoLinks(links) {
    const infoEl = document.querySelector('.info');
    const html = links.map(mediaCardTemplate);
    infoEl.insertAdjacentHTML('afterbegin', html.join(''));
}

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
