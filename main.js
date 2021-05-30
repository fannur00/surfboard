const init = () => {
    const myMap = new ymaps.Map("map", {
        center: [55.796627, 49.119409],
        zoom: 13,
        controls: [] 
    });

    const coords = [
        [55.791805, 49.113666],
        [55.809899, 49.093185],
        [55.822082, 49.142545]
    ];
    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/marker.svg',
        iconImageSize: [44, 54],
        iconImageOffset: [-3, -42]
    });
    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });
    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);