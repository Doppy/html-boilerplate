console.log('Start Main');

// var shape = new mojs.Shape({
//   shape: 'circle',
//   isShowStart: true,
// });

const shape = new mojs.Shape({
  shape:          'rect',
  fill:           'none',
  stroke:         'cyan',
  radius:         10,
  strokeWidth:    20,
  angle:          { [-180] : 0 },
  duration:       600
}).then({
  strokeWidth:    { 50 : 0 },
  stroke:         { 'magenta' : 'yellow'  }
});
