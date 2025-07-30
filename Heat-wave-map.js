 cor  = [
  [79.34567941441642, 5.836743277333047], 
  [82.18015207066642, 5.836743277333047], 
  [82.18015207066642, 9.949315020518133], 
  [79.34567941441642, 9.949315020518133], 
  [79.34567941441642, 5.836743277333047]
];

var geometry = ee.Geometry.Polygon(cor)

var temp = ee.ImageCollection("ECMWF/ERA5_LAND/MONTHLY_AGGR")
  .select('temperature_2m')
  .filterDate('2000', '2025')
  .map(function(img) {
    return img.clip(geometry); // 👈 clip to Sri Lanka
  });


var baseline = temp.reduce(ee.Reducer.percentile([90])).clip(geometry);

Map.addLayer(baseline,[],'baseline',false)

var heatwave = temp.filterDate('2005','2010')
.map(function(img){
  return img.gt(baseline);                
  }).sum()
  .clip(geometry);
  
// Visualization parameters
var visParams = {
  min: 0,
  max: 7,
  palette: ['white', '#ffffcc', '#ffeda0', '#feb24c', '#fd8d3c', '#f03b20', '#bd0026', '#800026']
};


// Add heatwave map to the Map
Map.centerObject(geometry, 7);
Map.addLayer(heatwave, visParams, 'Heatwave Index (2005–2010)');

// --- UI: Add Title ---
var title = ui.Label({
  value: 'Heatwave Frequency Index in Sri Lanka (2005–2010)',
  style: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '10px 5px'
  }
});
Map.add(title);

// --- UI: Add Legend ---
// Create legend panel
var legend = ui.Panel({
  style: {
    position: 'bottom-right',
    padding: '8px 15px'
  }
});

var legendTitle = ui.Label({
  value: 'Heatwave Index\n(Months > 90th percentile)',
  style: {
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0 0 8px 0',
    padding: '0'
  }
});
legend.add(legendTitle);


// Legend colors and labels
var makeRow = function(color, label) {
  var colorBox = ui.Label({
    style: {
      backgroundColor: color,
      padding: '8px',
      margin: '0 0 4px 0'
    }
  });
  var labelText = ui.Label({
    value: label,
    style: {margin: '0 0 4px 6px'}
  });
  return ui.Panel({
    widgets: [colorBox, labelText],
    layout: ui.Panel.Layout.Flow('horizontal')
  });
};


var palette = visParams.palette;
var labels = ['0', '1', '2', '3', '4', '5', '6','7'];

for (var i = 0; i < palette.length; i++) {
  legend.add(makeRow(palette[i], labels[i]));
}

Map.add(legend);