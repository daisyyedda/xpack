const data = [
  { id: 'A', x: 80, r: 25, score: 0.9 },
  { id: 'B', x: 130, r: 20, score: 0.8 },
  { id: 'C', x: 190, r: 30, score: 0.85 },
  { id: 'D', x: 250, r: 18, score: 0.95 },
  { id: 'E', x: 300, r: 10, score: 0.5 },
  { id: 'A', x: 80, r: 25, score: 0.9 },
  { id: 'B', x: 130, r: 20, score: 0.8 },
  { id: 'C', x: 190, r: 30, score: 0.85 },
  { id: 'D', x: 250, r: 18, score: 0.95 },
  { id: 'E', x: 300, r: 10, score: 0.5 }, 
  { id: 'A', x: 80, r: 25, score: 0.9 },
  { id: 'B', x: 130, r: 20, score: 0.8 },
  { id: 'C', x: 190, r: 30, score: 0.85 },
  { id: 'D', x: 250, r: 18, score: 0.95 },
  { id: 'E', x: 300, r: 10, score: 0.5 }, 
  { id: 'A', x: 80, r: 25, score: 0.9 },
  { id: 'B', x: 130, r: 20, score: 0.8 },
  { id: 'C', x: 190, r: 30, score: 0.85 },
  { id: 'D', x: 250, r: 18, score: 0.95 },
  { id: 'E', x: 300, r: 10, score: 0.5 }, 
  { id: 'A', x: 80, r: 25, score: 0.9 },
  { id: 'B', x: 130, r: 20, score: 0.8 },
  { id: 'C', x: 190, r: 30, score: 0.85 },
  { id: 'D', x: 250, r: 18, score: 0.95 },
  { id: 'E', x: 300, r: 10, score: 0.5 }, 
  { id: 'A', x: 80, r: 25, score: 0.9 },
  { id: 'B', x: 130, r: 20, score: 0.8 },
  { id: 'C', x: 190, r: 30, score: 0.85 },
  { id: 'D', x: 250, r: 18, score: 0.95 },
  { id: 'E', x: 300, r: 10, score: 0.5 }, 
];

const pack = xpack()
  .xpos(d => d.x)
  .radius(d => d.r)
  .score(d => d.score);

const result = pack(data, 0.5); // threshold filter

const svg = d3.select("svg");

svg.selectAll("circle")
  .data(result.nodes)
  .enter()
  .append("circle")
  .attr("cx", d => d.px)
  .attr("cy", d => 150 + d.py)
  .attr("r", d => d.r)
  .attr("fill", "steelblue")
  .attr("stroke", "#333");

svg.selectAll("text")
  .data(result.nodes)
  .enter()
  .append("text")
  .attr("x", d => d.px)
  .attr("y", d => 155 + d.py)
  .attr("text-anchor", "middle")
  .text(d => d.id);
