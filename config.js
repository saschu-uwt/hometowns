function myFunction() {
  alert("Welcome to Steve's hometowns\n\nMoving to Tacoma put me into my 39th home (not counting deployments or extended training evolutions).\n\nThis map graphically displays the jarring effect of a lifetime of habitual relocation.\n\nBuckle up, keep your limbs inside the vehicle, and click to start.")
}

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FzY2h1IiwiYSI6ImNrbmFxYmpxazFjc2EycG96NnF2a3AwcjYifQ.vpHCnM6mDBep0XURHJHt1g';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/saschu/cknrwdky510at17lfwce3gwh8',
  center: [-119.4179, 36.7783],
  maxZoom: 16,
  minZoom: 1,
  zoom: 4
});

var title = document.getElementById('location-title');
var description = document.getElementById('location-description');

var locations = [
  {
  'title': 'Saugus, CA',
  'description':'Where it all began',
  'camera': {
  center: [-118.54045, 34.41653],
  zoom: 13,
  bearing: 0,
  pitch: 50
  }
  },
  {
  'title': 'Orange, CA',
  'description':'Early years',
  'camera': {
  center: [-117.853104, 33.787914],
  zoom: 12,
  pitch: 50
  }
  },
  {
  'title': 'Fresno, CA',
  'description':'Early years',
  'camera': {
  center: [-119.787125, 36.737797],
  // bearing: -8.9,
  zoom: 11
  }
  },
  {
  'title': 'Fresno, CA (again)',
  'description':'Early years',
  'camera': {
  center: [-119.787125, 36.737797],
  bearing: 180,
  zoom: 9
  }
  },
  {
  'title': 'Boulder Creek, CA',
  'description':'Early years',
  'camera': {
  center: [-122.12249, 37.13],
  bearing: 0,
  zoom: 14
  }
  },
  {
  'title': 'Anaheim, CA',
  'description':'Early years',
  'camera': {
  center: [-117.914299, 33.836594],
  // bearing: 28.4,
  zoom: 12
  }
  },
  {
  'title': 'Lindsay, CA',
  'description':'Early years',
  'camera': {
  center: [-119.08938358857866, 36.209079420624526],
  // bearing: 28.4,
  zoom: 13
  }
  },
  {
  'title': 'Porterville, CA',
  'description':'Early years',
  'camera': {
  center: [-119.03032649275308, 36.068686948164],
  // bearing: 28.4,
  zoom: 13
  }
  },{
  'title': 'Santa Maria, CA',
  'description':'Early years',
  'camera': {
  center: [-120.46089276921819, 34.926097970828],
  // bearing: 28.4,
  zoom: 12
  }
  },{
  'title': 'Santa Maria, CA (again)',
  'description':'Early years',
  'camera': {
  center: [-120.42320640628286, 34.956035071428],
  bearing: 180,
  zoom: 10
  }
  },{
  'title': 'Cambria, CA',
  'description':'High school',
  'camera': {
  center: [-121.08813644951806, 35.552299724178],
  bearing: 0,
  zoom: 14
  }
  },{
  'title': 'Shell Beach, CA',
  'description':'High school',
  'camera': {
  center: [-120.69982797083199, 35.174089228000],
  // bearing: 28.4,
  zoom: 14
  }
  },{
  'title': 'Arroyo Grande, CA',
  'description':'High school',
  'camera': {
  center: [-120.58926363370031, 35.119075695619],
  // bearing: 28.4,
  zoom: 12
  }
  },{
  'title': 'San Jose, CA',
  'description':'College',
  'camera': {
  center: [-121.86963007627263, 37.320561968260],
  // bearing: 28.4,
  zoom: 12
  }
  },{
  'title': 'San Luis Obispo, CA',
  'description':'College',
  'camera': {
  center: [ -120.6614617141812, 35.278081554920],
  // bearing: 28.4,
  zoom: 12
  }
  },{
  'title': 'San Jose, CA (again)',
  'description':'College',
  'camera': {
  center: [-121.86963007627263, 37.320561968260],
  // bearing: 28.4,
  zoom: 11
  }
  },{
  'title': 'San Jose, CA (yet, again)',
  'description':'College years',
  'camera': {
  center: [-121.86963007627263, 37.320561968260],
  bearing: 180,
  zoom: 9
  }
  },{
  'title': 'Santa Cruz, CA',
  'description':'College',
  'camera': {
  center: [-122.02962923311532, 36.974499437352],
  bearing: 0,
  zoom: 11
  }
  },{
  'title': 'Santa Cruz, CA (again)',
  'description':'College',
  'camera': {
  center: [-122.02962923311532, 36.974499437352],
  bearing: 180,
  zoom: 9
  }
  },{
  'title': 'Los Osos, CA',
  'description':'College',
  'camera': {
  center: [-120.83987677228092, 35.313294886370],
  bearing: 0,
  zoom: 14
  }
  },{
  'title': 'Coos Bay, OR',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-124.2214417571425, 43.366077839444],
  // bearing: 28.4,
  zoom: 13
  }
  },{
  'title': 'Kodiak, AK',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-152.38440602261198, 57.802337590420],
  // bearing: 28.4,
  zoom: 13
  }
  },{
  'title': 'Kodiak, AK (again)',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-152.49543965339572, 57.746341959167],
  bearing: 180,
  zoom: 11
  }
  },{
  'title': 'Kodiak, AK (yet again)',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-152.49717427478373, 57.764106995455],
  bearing: 0,
  zoom: 9
  }
  },{
  'title': 'Kodiak, AK (last time)',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-152.34978183024137, 57.813835425237],
  bearing: 180,
  zoom: 7
  }
  },{
  'title': 'Honolulu, HI',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-157.85744713062593, 21.304307963989],
  bearing: 0,
  zoom: 13
  }
  },{
  'title': 'Port Orchard, WA',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-122.64263233697558, 47.515570426950],
  // bearing: 28.4,
  zoom: 13
  }
  },{
  'title': 'Poulsbo, WA',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-122.63424574837639, 47.731239420231],
  // bearing: 28.4,
  zoom: 13
  }
  },{
  'title': 'Shoreline, WA',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-122.35509098231114, 47.763710740999],
  // bearing: 28.4,
  zoom: 12
  }
  },{
  'title': 'Alameda, CA',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-122.28802204857543, 37.772987751126],
  // bearing: 28.4,
  zoom: 12
  }
  },{
  'title': 'Alameda, CA (again)',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-122.28802204857543, 37.772987751126],
  bearing: 180,
  zoom: 10
  }
  },{
  'title': 'San Diego, CA',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-117.17905008516456, 32.735335942035],
  bearing: 0,
  zoom: 12
  }
  },{
  'title': 'San Diego, CA (again)',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-117.17905008516456, 32.735335942035],
  bearing: 180,
  zoom: 10
  }
  },{
  'title': 'Alameda, CA (again)',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-122.23795273588348, 37.763052282498],
  bearing: 0,
  zoom: 12
  }
  },{
  'title': 'Albany, CA',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-122.29680494749647, 37.888853276272],
  // bearing: 28.4,
  zoom: 12
  }
  },{
  'title': 'El Cerrito, CA',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-122.30439093544258, 37.917206825589],
  bearing: 180,
  zoom: 12
  }
  },{
  'title': 'Shoreline, WA',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-122.35509098231114, 47.763710740999],
  bearing: 0,
  zoom: 12
  }
  },{
  'title': 'Auburn, WA',
  'description':'U.S. Coast Guard',
  'camera': {
  center: [-122.20386428097707, 47.308196405258],
  // bearing: 28.4,
  zoom: 12
  }
  },{
  'title': 'Tacoma, WA',
  'description':'Graduate School',
  'camera': {
  center: [-122.46266, 47.24504],
  // bearing: 28.4,
  // pitch: 50,
  zoom: 11
  }
  },
];

function playback(index) {
  title.textContent = locations[index].title;
  description.textContent = locations[index].description;

  // Animate the map position based on camera properties
  map.flyTo(locations[index].camera);

  map.once('moveend', function () {
    // Duration the slide is on screen after interaction
    window.setTimeout(function () {
      // Increment index
      index = index + 1;
      playback(index);
    }, 1000); // After callback, show the location for 1 second.
  });
}

map.on('load', function () {
  // Start the playback animation
  playback(0);
});
