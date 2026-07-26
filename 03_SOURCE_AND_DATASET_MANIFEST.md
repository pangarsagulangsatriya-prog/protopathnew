# PROTO PATH — SOURCE AND DATASET MANIFEST

## Canonical score source

```json
{
  "fileName": "Proto Path - WHERE ARE YOU DEPART FROM _gulangsatriya.pdf",
  "sizeBytes": 4251958,
  "sha256": "5856fc0ca455e65f04d0dd36802ee791501dc7114b01b095697cbab654d254e9",
  "textCompanion": "02_CANONICAL_SCORE_COMPLETE_TEXT.md"
}
```

## Mapillary points

```json
{
  "fileName": "mapillary-points - Large Dataset Bandung.json",
  "sha256": "f0f3a170d1b7bd8e8ada7c38271ef7b46c142ca0a9bc664534f19aa9e083f289",
  "geojsonType": "FeatureCollection",
  "featureCount": 110299,
  "distinctRawValueCount": 39,
  "prefixCounts": {
    "construction": 4546,
    "object": 101348,
    "marking": 4405
  },
  "propertyKeyCounts": {
    "first_seen_at": 110299,
    "id": 110299,
    "last_seen_at": 110299,
    "value": 110299
  },
  "bounds": {
    "lonMin": 107.5704699754715,
    "lonMax": 107.62459695339203,
    "latMin": -6.93054858614336,
    "latMax": -6.905050739140933
  },
  "rawValueCounts": {
    "object--support--utility-pole": 23529,
    "object--sign--advertisement": 23300,
    "object--sign--store": 19568,
    "object--street-light": 11396,
    "object--banner": 11028,
    "construction--flat--driveway": 4427,
    "object--traffic-cone": 2792,
    "marking--discrete--other-marking": 2276,
    "object--catch-basin": 2220,
    "object--trash-can": 2144,
    "object--junction-box": 1551,
    "object--manhole": 942,
    "marking--discrete--crosswalk-zebra": 827,
    "marking--discrete--symbol--bicycle": 791,
    "object--support--pole": 788,
    "object--sign--information": 720,
    "object--bench": 634,
    "marking--discrete--stop-line": 361,
    "object--cctv-camera": 225,
    "object--support--traffic-sign-frame": 142,
    "marking--discrete--arrow--straight": 120,
    "object--traffic-light--general-upright": 101,
    "construction--barrier--temporary": 76,
    "object--fire-hydrant": 76,
    "construction--flat--crosswalk-plain": 43,
    "object--parking-meter": 36,
    "object--mailbox": 28,
    "object--phone-booth": 28,
    "object--traffic-light--other": 28,
    "object--bike-rack": 26,
    "object--water-valve": 23,
    "object--traffic-light--pedestrians": 15,
    "marking--discrete--arrow--right": 13,
    "object--traffic-light--general-horizontal": 7,
    "marking--discrete--arrow--left": 6,
    "marking--discrete--arrow--split-left-or-straight": 6,
    "marking--discrete--arrow--split-right-or-straight": 4,
    "marking--discrete--give-way-row": 1,
    "object--traffic-light--general-single": 1
  }
}
```

## Mapillary traffic

```json
{
  "fileName": "mapillary-traffic - Large Dataset Bandung.json",
  "sha256": "4db2a07a8b75e5b26cfdb64adda5278eda1c90fd238c9c1762862497f93b9c2f",
  "geojsonType": "FeatureCollection",
  "featureCount": 3778,
  "distinctRawValueCount": 91,
  "prefixCounts": {
    "regulatory": 2937,
    "warning": 530,
    "information": 308,
    "complementary": 3
  },
  "propertyKeyCounts": {
    "first_seen_at": 3778,
    "id": 3778,
    "last_seen_at": 3778,
    "value": 3778
  },
  "bounds": {
    "lonMin": 107.57048606872559,
    "lonMax": 107.62459695339203,
    "latMin": -6.93054858614336,
    "latMax": -6.905077366682946
  },
  "rawValueCounts": {
    "regulatory--no-parking--g2": 1123,
    "regulatory--no-stopping--g5": 695,
    "regulatory--no-entry--g1": 473,
    "warning--pedestrians-crossing--g4": 243,
    "regulatory--no-right-turn--g1": 145,
    "information--parking--g1": 110,
    "regulatory--no-left-turn--g1": 81,
    "information--pedestrians-crossing--g1": 77,
    "information--highway-interchange--g1": 71,
    "warning--traffic-signals--g3": 68,
    "regulatory--no-u-turn--g1": 67,
    "regulatory--keep-left--g1": 57,
    "warning--other-danger--g3": 54,
    "regulatory--turn-left--g1": 49,
    "warning--children--g2": 41,
    "information--parking--g5": 36,
    "warning--crossroads--g3": 28,
    "regulatory--keep-right--g1": 27,
    "warning--railroad-crossing-with-barriers--g4": 27,
    "regulatory--pass-on-either-side--g1": 18,
    "regulatory--stop--g1": 18,
    "regulatory--turn-right--g1": 15,
    "regulatory--maximum-speed-limit-30--g1": 14,
    "regulatory--no-heavy-goods-vehicles--g2": 12,
    "regulatory--weight-limit-per-axle--g1": 11,
    "regulatory--one-way-straight--g1": 10,
    "warning--junction-with-a-side-road-perpendicular-left--g2": 10,
    "warning--junction-with-a-side-road-perpendicular-right--g3": 10,
    "regulatory--go-straight--g1": 9,
    "regulatory--no-bicycles--g2": 9,
    "regulatory--no-parking--g9": 9,
    "regulatory--one-way-right--g1": 9,
    "warning--t-roads--g2": 8,
    "warning--traffic-merges-left--g1": 8,
    "regulatory--priority-road--g1": 7,
    "regulatory--end-of-maximum-speed-limit-20--g1": 6,
    "regulatory--u-turn--g1": 6,
    "regulatory--weight-limit--g1": 6,
    "warning--crossroads--g2": 6,
    "warning--two-way-traffic--g2": 6,
    "regulatory--bicycles-only--g1": 5,
    "warning--junction-with-a-side-road-perpendicular-left--g3": 5,
    "regulatory--maximum-speed-limit-5--g1": 4,
    "regulatory--no-horn--g1": 4,
    "regulatory--one-way-left--g1": 4,
    "regulatory--roundabout--g1": 4,
    "regulatory--trams-and-buses-only--g1": 4,
    "warning--height-restriction--g2": 4,
    "information--dead-end--g1": 3,
    "information--parking--g2": 3,
    "information--rest-area--g1": 3,
    "regulatory--maximum-speed-limit-20--g1": 3,
    "regulatory--no-heavy-goods-vehicles--g1": 3,
    "regulatory--road-closed-to-vehicles--g1": 3,
    "warning--double-side-roads-right--g1": 3,
    "regulatory--height-limit--g1": 2,
    "regulatory--maximum-speed-limit-10--g1": 2,
    "regulatory--motorcycles-only--g1": 2,
    "regulatory--no-motor-vehicles-except-motorcycles--g2": 2,
    "regulatory--no-straight-through--g1": 2,
    "regulatory--yield--g1": 2,
    "warning--bicycles-crossing--g2": 2,
    "warning--junction-with-a-side-road-perpendicular-right--g2": 2,
    "complementary--chevron-left--g1": 1,
    "complementary--distance--g1": 1,
    "complementary--obstacle-delineator--g2": 1,
    "information--bicycles-crossing--g1": 1,
    "information--cycling-two-abreast-permitted--g1": 1,
    "information--end-of-built-up-area--g3": 1,
    "information--parking--g6": 1,
    "information--subway--g1": 1,
    "regulatory--end-of-no-overtaking--g1": 1,
    "regulatory--lane-control--g1": 1,
    "regulatory--maximum-speed-limit-40--g1": 1,
    "regulatory--maximum-speed-limit-70--g1": 1,
    "regulatory--no-left-turn--g2": 1,
    "regulatory--no-motorcycles--g1": 1,
    "regulatory--no-motorcycles--g2": 1,
    "regulatory--no-parking-or-no-stopping--g1": 1,
    "regulatory--no-parking-or-no-stopping--g2": 1,
    "regulatory--no-straight-through--g2": 1,
    "regulatory--no-vehicles-carrying-dangerous-goods--g1": 1,
    "regulatory--radar-enforced--g1": 1,
    "regulatory--speeding-fines-increased--g1": 1,
    "regulatory--stop--g10": 1,
    "regulatory--text--g1": 1,
    "warning--curve-left--g2": 1,
    "warning--railroad-crossing--g2": 1,
    "warning--road-narrows--g2": 1,
    "warning--slippery-motorcycles--g1": 1,
    "warning--turn-left--g1": 1
  }
}
```

## JSONL contract

Every line in a data chunk contains one original GeoJSON Feature plus source metadata:

```json
{
  "datasetId": "mapillary-points",
  "sourceFile": "mapillary-points - Large Dataset Bandung.json",
  "featureIndex": 0,
  "feature": {
    "type": "Feature",
    "geometry": {},
    "properties": {}
  }
}
```

The `feature` object must remain unchanged.

## Score bounds

```json
{
  "score01": {
    "lonMin": 107.610,
    "lonMax": 107.625,
    "latMin": -6.930,
    "latMax": -6.905
  },
  "score02": {
    "lonMin": 107.570,
    "lonMax": 107.586,
    "latMin": -6.931,
    "latMax": -6.905
  }
}
```

## Required source resolution statuses

```text
EXACT_PROPERTY_ID
EXACT_COORDINATE
NEAR_COORDINATE_ROUNDED
VALUE_AND_SCORE_BOUNDS
VALUE_ONLY_AMBIGUOUS
MANUAL_VERIFIED
RAW_VALUE_NOT_FOUND
SCORE_SYSTEM_DATUM
UNRESOLVED
```
