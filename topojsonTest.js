/**
 * Created by marc on 17-3-14.
 */

const topojson = require('topojson'),
    fs = require('fs');

fs.readFile('bd.json', 'utf8', (err, data) => {
    if (err) throw err;

    const geojson = JSON.parse(data);
    const topology = topojson.topology(geojson);

    fs.writeFile('bd_topo.json', JSON.stringify(topology), 'utf8', (err) => {
        if (err) throw  err;
        console.log('success');
    });
});