// src/mockBins.js
export const mockBins = [
  {
    binId: 'ICK-01',
    location: { type: 'Point', coordinates: [74.4685, 16.7033] }, // Near Rajwada
    fillLevel: 85,
    status: 'Full',
  },
  {
    binId: 'ICK-02',
    location: { type: 'Point', coordinates: [74.4751, 16.6989] }, // Near Bus Stand
    fillLevel: 40,
    status: 'Half-Full',
  },
  {
    binId: 'ICK-03',
    location: { type: 'Point', coordinates: [74.4582, 16.7091] }, // Near DKTE College
    fillLevel: 95,
    status: 'Overflow',
  },
  {
    binId: 'ICK-04',
    location: { type: 'Point', coordinates: [74.4611, 16.6925] }, // Industrial Area
    fillLevel: 15,
    status: 'Empty',
  },
];
