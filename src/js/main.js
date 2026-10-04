import { getParkData, getInfoLinks } from './parkService.mjs';
import setHeaderFooter from './setHeaderFooter.mjs';
import { parkIntroTemplate, mediaCardTemplate } from './templates.mjs';

function setParkIntro(data) {
    const introEl = document.querySelector('.intro');
    introEl.insertAdjacentHTML('afterbegin', parkIntroTemplate(data));
}

function setParkInfoLinks(links) {
    const infoEl = document.querySelector('.info');
    const html = links.map(mediaCardTemplate);
    infoEl.insertAdjacentHTML('afterbegin', html.join(''));
}

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(links);
}

init();
