var slider,
    content,
    buttons,
    headerContainer,
    contentContainer,
    counter,
    timeID,
    targetID,
    i,
    j;

slider = [
    "<figure><img src=\"./img/sunflower.jpg\" alt\"image\"><figcaption>A word with out polution.</figcaption></figure>",
    "<figure><img src=\"./img/field-of-rapeseeds.jpg\" alt\"image\"><figcaption>Using the nature to create energy.</figcaption></figure>",
    "<figure><img src=\"./img/renewable.jpg\" alt\"image\"><figcaption>Wind and Sun.</figcaption></figure>",
    "<figure><img src=\"./img/mill.jpg\" alt\"image\"><figcaption>For a better world.</figcaption></figure>"
];

headerContainer = document.querySelector(".masthead");
counter = 1;

function imageChange() {
    "use strict";
    if (counter < slider.length) {
        headerContainer.innerHTML = slider[counter];
        counter += 1;
        if (counter === slider.length) {
            counter = 0;
        }
    }
}

timeID = window.setInterval(imageChange, 6000);

content = {
    B1: "<figure><img src=\"./img/solar.jpg\" alt\"image\"><figcaption>Solar power is anticipated to become the world's largest source of electricity by 2050, with solar photovoltaics and concentrated solar power contributing 16 and 11 percent to the global overall consumption, respectively<br> *International Energy Agency (2014). \"Technology Roadmap: Solar Photovoltaic Energy\" (PDF). iea.org. IEA. Archived from the original on 7 October 2014. Retrieved 7 October 2014.</figcaption></figure>",
    B2: "<figure><img src=\"./img/led.jpg\" alt\"image\"><figcaption>The useful life of LED lighting products is defined differently than that of other light sources, such as incandescent or CFL. This is because LEDs typically do not “burn out” or fail. Instead, they experience lumen depreciation, where the amount of light produced decreases and light color appearance can shift over time.<br> *\"Learn About LED Bulbs\". energystar.gov. Retrieved 25 March 2017. </figcaption></figure>",
    B3: "<figure><img src=\"./img/wind-turbine.jpg\" alt\"image\"><figcaption>Small-scale wind power is the name given to wind generation systems with the capacity to produce up to 50 kW of electrical power.* Isolated communities, that may otherwise rely on diesel generators, may use wind turbines as an alternative.<br> *\"Small-scale wind energy\". Carbontrust.co.uk. Retrieved 29 August 2010. </figcaption></figure>"
};

buttons = document.querySelectorAll("button");
contentContainer = document.querySelector(".figure");

function checkButton(ev) {
    "use strict";
    targetID = ev.target.id;
    contentContainer.innerHTML = content[targetID];
    for (j = 0; j < buttons.length; j += 1) {
        buttons[j].className = "";
    }
    ev.target.className = "active";

}

for (i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", checkButton, false);
}