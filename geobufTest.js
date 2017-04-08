/**
 * Created by marc on 17-3-13.
 */

const Pbf = require('pbf'),
    geobuf = require('geobuf'),
    msgpack = require('msgpack-lite'),
    fs = require('fs');

fs.readFile('-2.json', 'utf8', (err, data) => {
    if (err) throw err;

    const geojson = JSON.parse(data);

    const buffer1 = msgpack.encode(geojson);
    const buffer2 = geobuf.encode(geojson, new Pbf());

    console.log(data.length);
    console.log(buffer1.byteLength);
    console.log(buffer2.byteLength);

    const res = geobuf.decode(new Pbf(buffer2));
    console.log(JSON.stringify(res).length);
});

const testJson = {
    id: 'aaa',
    floors: [1,2],
    areas: {
        '1': [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                114.34858720184303,
                                30.583620522636487
                            ],
                            [
                                114.34858720184303,
                                30.583610522636484
                            ],
                            [
                                114.34857720184303,
                                30.583610522636484
                            ],
                            [
                                114.34857720184303,
                                30.583620522636487
                            ]
                        ]
                    ]
                },
                "properties": {
                    "type": "061101",
                    "id": "ZH0000060210200043",
                    "text": "热风"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                114.3483262689343,
                                30.583673987305957
                            ],
                            [
                                114.3483262689343,
                                30.583663987305954
                            ],
                            [
                                114.3483162689343,
                                30.583663987305954
                            ],
                            [
                                114.3483162689343,
                                30.583673987305957
                            ]
                        ]
                    ]
                },
                "properties": {
                    "type": "000300",
                    "id": "ZH0000060210200194",
                    "text": "非开放区域"
                }
            }
            ],
        '2': [{
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            114.34858720184303,
                            30.583620522636487
                        ],
                        [
                            114.34858720184303,
                            30.583610522636484
                        ],
                        [
                            114.34857720184303,
                            30.583610522636484
                        ],
                        [
                            114.34857720184303,
                            30.583620522636487
                        ]
                    ]
                ]
            },
            "properties": {
                "type": "061101",
                "id": "ZH0000060210200043",
                "text": "热风"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            114.3483262689343,
                            30.583673987305957
                        ],
                        [
                            114.3483262689343,
                            30.583663987305954
                        ],
                        [
                            114.3483162689343,
                            30.583663987305954
                        ],
                        [
                            114.3483162689343,
                            30.583673987305957
                        ]
                    ]
                ]
            },
            "properties": {
                "type": "000300",
                "id": "ZH0000060210200194",
                "text": "非开放区域"
            }
        }]
    }
}
console.log(JSON.stringify(testJson).length);

const buffer3 = geobuf.encode(testJson, new Pbf());
const buffer4 = msgpack.encode(testJson);
console.log('buffer3: ' + buffer3.byteLength);
console.log('buffer4: ' + buffer4.byteLength);

const res3 = geobuf.decode(new Pbf(buffer3));
console.dir(JSON.stringify(res3));

const res4 = msgpack.decode(buffer4);
console.dir(JSON.stringify(res4));