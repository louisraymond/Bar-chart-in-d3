/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

const data = d3.json('../data/revenues.json')
  .then( (data) => {
  //everything happens inside here

  //Turn the numbers in to numbers in JS
  data.forEach(data => {
    data.revenue = +data.revenue
    data.profit = +data.profit
  })


  //Create some Margins
  const margin = { left:40, right:20, top:10, bottom:30}
  const width = 600 - margin.left-margin.right
  const height = 400 - margin.top - margin.bottom



    //creating the scales
  let x = d3.scaleBand()
  .domain(data.map(datum => datum.month))
  .range([0,width])
  .paddingInner(0.3)
  .paddingOuter(0.2)

  let y = d3.scaleLinear()
  .domain(data.map(datum => datum.revenue))
  .range([0,height])


  //Create Our Chart
  let graph = d3.select("#chart-area")
      .append('svg')
        .attr('width',  width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
            .attr("transform", "transform", `translate(" + margin.left
                + ", " + margin.top + ")`);



  console.log(x)
  console.table(data.map(datum =>datum.month))

})
