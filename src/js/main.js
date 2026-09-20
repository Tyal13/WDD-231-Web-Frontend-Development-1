import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
  return `<a href="#" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.textContent = parkData.fullName;

document.querySelector("head > title").textContent = parkData.fullName;
const heroImage = document.querySelector(".hero-banner > img");
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;
document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(parkData);
