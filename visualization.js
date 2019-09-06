
// Using jQuery, read our data and call visualize(...) only once the page is ready:
$(function() {
  d3.csv("visualization_data.csv").then(function(data) {
    // Write the data to the console for debugging:
    console.log(data);

    // Call our visualize function:
    visualize(data);
  });
});


  var visualize = function(data) {

  // Boilerplate:
  var margin = { top: 50, right: 50, bottom: 50, left: 100 },

  width = 3400 - margin.left - margin.right,
  height = 1000 - margin.top - margin.bottom;

  var svg = d3.select("#chart")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .style("width", width + margin.left + margin.right)
              .style("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var tip = d3.tip()
              .attr('class', 'd3-tip')
              .style('position','absolute')
              .html(function (d) {
                   return "<strong>" + d["Major Name"] + "</strong>" + "</br>" + "1980 Enrollment: <span style='color:red'>" + d["Total_1980"] + "</span></br>" +
                     "2018 Enrollment: <span style='color:red'>" + d["Total_2018"] + "</span>";
                });

                // {College: "UIUC",
                // Female_1980: "38",
                // Female_2018: "38",
                // Major_Name: "Engineering",
                // Male_1980: "276",
                // Male_2018: "48",
                // Total_1980: "4862",
                // Total_2018: "7469" }
    var tipUIUC = d3.tip()
                .attr('class', 'd3-tip')
                .style('position','absolute')
                .html(function (d) {
                     return "<strong>" + d["Major_Name"] + "</strong>" + "</br>" + "1980 Enrollment: <span style='color:red'>" + d["Total_1980"] + "</span></br>" +
                       "2018 Enrollment: <span style='color:red'>" + d["Total_2018"] + "</span>";
                  });

    var tipMale = d3.tip()
                .attr('class', 'd3-tip')
                .style('position','absolute')
                .html(function (d) {
                     return "<strong>" + d["Major_Name"] + " - Male" + "</strong>" + "</br>" + "1980 Enrollment: <span style='color:red'>" + d["Male_1980"] + "</span></br>" +
                       "2018 Enrollment: <span style='color:red'>" + d["Male_2018"] + "</span>";
                  });

    var tipFemale = d3.tip()
                .attr('class', 'd3-tip')
                .style('position','absolute')
                .html(function (d) {
                     return "<strong>" + d["Major_Name"] + " - Female" + "</strong>" + "</br>" + "1980 Enrollment: <span style='color:red'>" + d["Female_1980"] + "</span></br>" +
                       "2018 Enrollment: <span style='color:red'>" + d["Female_2018"] + "</span>";
                  });


  // Visualization Code:

  // Scale:
  // Left Axis
  var countScaleEngineering = d3.scaleLinear()
                         .domain([0, 2400])
                         .range([height, 0]);

  var countScaleLAS = d3.scaleLinear()
                        .domain([0, 1700])
                        .range([height, 0]);

  var countScaleACES = d3.scaleLinear()
                         .domain([0, 650]) //0 626
                         .range([height, 0]);

   var countScaleFAA = d3.scaleLinear()
                          .domain([0, 660])
                          .range([height, 0]);

  var countScaleEducation = d3.scaleLinear()
                         .domain([10, 450])
                         .range([height, 0]);

   var countScaleBusiness = d3.scaleLinear()
                          .domain([80, 1550])
                          .range([height, 0]);

  var countScaleUIUC = d3.scaleLinear()
                         .domain([0, 11000])
                         .range([height, 0]);

  var countScaleMaleFemale = d3.scaleLinear()
                        .domain([0, 6500])
                        .range([height, 0]);

   var colorGradientScale = d3.scaleLinear()
                              .domain([100, 1621])
                              .range([0.25, 1.0]);

  var yAxisLeftEngineering = d3.axisLeft()
                    .ticks(25)
                    .scale(countScaleEngineering);

  var yAxisRightEngineering = d3.axisRight()
                    .ticks(25)
                    .scale(countScaleEngineering);

  var yAxisLeftLAS = d3.axisLeft()
                       .ticks(25)
                       .scale(countScaleLAS);

 var yAxisRightLAS = d3.axisRight()
                       .ticks(25)
                       .scale(countScaleLAS);


  var yAxisLeftACES = d3.axisLeft()
  .ticks(25)
  .scale(countScaleACES);

  var yAxisRightACES = d3.axisRight()
  .ticks(25)
  .scale(countScaleACES);

  var yAxisLeftFAA = d3.axisLeft()
  .ticks(25)
  .scale(countScaleFAA);

  var yAxisRightFAA = d3.axisRight()
  .ticks(25)
  .scale(countScaleFAA);

  var yAxisLeftEducation = d3.axisLeft()
  .ticks(25)
  .scale(countScaleEducation);

  var yAxisRightEducation = d3.axisRight()
  .ticks(25)
  .scale(countScaleEducation);


  var yAxisLeftBusiness = d3.axisLeft()
  .ticks(25)
  .scale(countScaleBusiness);

  var yAxisRightBusiness = d3.axisRight()
  .ticks(25)
  .scale(countScaleBusiness);


  var yAxisLeftUIUC = d3.axisLeft()
  .ticks(25)
  .scale(countScaleUIUC);

  var yAxisRightUIUC = d3.axisRight()
  .ticks(25)
  .scale(countScaleUIUC);

  var yAxisLeftMaleFemale = d3.axisLeft()
  .ticks(25)
  .scale(countScaleMaleFemale);

  var yAxisRightMaleFemale = d3.axisRight()
  .ticks(25)
  .scale(countScaleMaleFemale);








// Add the axes to the SVG
svg.append("g")
   .attr("stroke", "orange")
   .attr("transform", "translate( " + 0 + ", 0 )")
   .call(yAxisLeftEngineering);

svg.append("g")
   .attr("stroke", "blue")
   .attr("transform", "translate( " + 200 + ", 0 )")
   .call(yAxisRightEngineering);

svg.append("text")
   .attr("transform",
         "translate(" + 100 + " ," +
         20 + ")")
   .style("font", "13px sans-serif")
   .style("text-anchor", "middle")
   .text("Engineering");

svg.append("text")
   .attr("transform",
         "translate(" + 0 + " ," +
         920 + ")")
   .style("font", "12px times")
   .style("text-anchor", "middle")
   .text("1980 Enrollment");

svg.append("text")
   .attr("transform",
         "translate(" + 200 + " ," +
         920 + ")")
   .style("font", "12px times")
   .style("text-anchor", "middle")
   .text("2018 Enrollment");

















   svg.append("g")
      .attr("stroke", "orange")
      .attr("transform", "translate( " + 400 + ", 0 )")
      .call(yAxisLeftLAS);

   svg.append("g")
      .attr("stroke", "blue")
      .attr("transform", "translate( " + 600 + ", 0 )")
      .call(yAxisRightLAS);

   svg.append("text")
      .attr("transform",
            "translate(" + 500 + " ," +
            20 + ")")
      .style("font", "13px sans-serif")
      .style("text-anchor", "middle")
      .text("LAS");

   svg.append("text")
      .attr("transform",
            "translate(" + 400 + " ," +
            920 + ")")
      .style("font", "12px times")
      .style("text-anchor", "middle")
      .text("1980 Enrollment");

   svg.append("text")
      .attr("transform",
            "translate(" + 600 + " ," +
            920 + ")")
      .style("font", "12px times")
      .style("text-anchor", "middle")
      .text("2018 Enrollment");











         svg.append("g")
            .attr("stroke", "orange")
            .attr("transform", "translate( " + 800 + ", 0 )")
            .call(yAxisLeftACES);

         svg.append("g")
            .attr("stroke", "blue")
            .attr("transform", "translate( " + 1000 + ", 0 )")
            .call(yAxisRightACES);

         svg.append("text")
            .attr("transform",
                  "translate(" + 900 + " ," +
                  20 + ")")
            .style("font", "13px sans-serif")
            .style("text-anchor", "middle")
            .text("ACES");

         svg.append("text")
            .attr("transform",
                  "translate(" + 800 + " ," +
                  920 + ")")
            .style("font", "12px times")
            .style("text-anchor", "middle")
            .text("1980 Enrollment");

         svg.append("text")
            .attr("transform",
                  "translate(" + 1000 + " ," +
                  920 + ")")
            .style("font", "12px times")
            .style("text-anchor", "middle")
            .text("2018 Enrollment");
















            svg.append("g")
               .attr("stroke", "orange")
               .attr("transform", "translate( " + 1200 + ", 0 )")
               .call(yAxisLeftFAA);

            svg.append("g")
               .attr("stroke", "blue")
               .attr("transform", "translate( " + 1400 + ", 0 )")
               .call(yAxisRightFAA);

            svg.append("text")
               .attr("transform",
                     "translate(" + 1300 + " ," +
                     20 + ")")
               .style("font", "13px sans-serif")
               .style("text-anchor", "middle")
               .text("Fine and Applied Arts");

            svg.append("text")
               .attr("transform",
                     "translate(" + 1200 + " ," +
                     920 + ")")
               .style("font", "12px times")
               .style("text-anchor", "middle")
               .text("1980 Enrollment");

            svg.append("text")
               .attr("transform",
                     "translate(" + 1400 + " ," +
                     920 + ")")
               .style("font", "12px times")
               .style("text-anchor", "middle")
               .text("2018 Enrollment");

















               svg.append("g")
                  .attr("stroke", "orange")
                  .attr("transform", "translate( " + 1600 + ", 0 )")
                  .call(yAxisLeftEducation);

               svg.append("g")
                  .attr("stroke", "blue")
                  .attr("transform", "translate( " + 1800 + ", 0 )")
                  .call(yAxisRightEducation);

               svg.append("text")
                  .attr("transform",
                        "translate(" + 1700 + " ," +
                        20 + ")")
                  .style("font", "13px sans-serif")
                  .style("text-anchor", "middle")
                  .text("Education");

               svg.append("text")
                  .attr("transform",
                        "translate(" + 1600 + " ," +
                        920 + ")")
                  .style("font", "12px times")
                  .style("text-anchor", "middle")
                  .text("1980 Enrollment");

               svg.append("text")
                  .attr("transform",
                        "translate(" + 1800 + " ," +
                        920 + ")")
                  .style("font", "12px times")
                  .style("text-anchor", "middle")
                  .text("2018 Enrollment");









                  svg.append("g")
                     .attr("stroke", "orange")
                     .attr("transform", "translate( " + 2000 + ", 0 )")
                     .call(yAxisLeftBusiness);

                  svg.append("g")
                     .attr("stroke", "blue")
                     .attr("transform", "translate( " + 2200 + ", 0 )")
                     .call(yAxisRightBusiness);

                  svg.append("text")
                     .attr("transform",
                           "translate(" + 2100 + " ," +
                           20 + ")")
                     .style("font", "13px sans-serif")
                     .style("text-anchor", "middle")
                     .text("Business");

                  svg.append("text")
                     .attr("transform",
                           "translate(" + 2000 + " ," +
                           920 + ")")
                     .style("font", "12px times")
                     .style("text-anchor", "middle")
                     .text("1980 Enrollment");

                  svg.append("text")
                     .attr("transform",
                           "translate(" + 2200 + " ," +
                           920 + ")")
                     .style("font", "12px times")
                     .style("text-anchor", "middle")
                     .text("2018 Enrollment");












                     svg.append("g")
                        .attr("stroke", "orange")
                        .attr("transform", "translate( " + 2400 + ", 0 )")
                        .call(yAxisLeftUIUC);

                     svg.append("g")
                        .attr("stroke", "blue")
                        .attr("transform", "translate( " + 2600 + ", 0 )")
                        .call(yAxisRightUIUC);

                        svg.append("text")
                           .attr("transform",
                                 "translate(" + 2500 + " ," +
                                 20 + ")")
                           .style("font", "13px sans-serif")
                           .style("text-anchor", "middle")
                           .text("Total Enrollment");

                           svg.append("text")
                              .attr("transform",
                                    "translate(" + 2500 + " ," +
                                    35 + ")")
                              .style("font", "13px sans-serif")
                              .style("text-anchor", "middle")
                              .text("by College");

                              svg.append("text")
                                 .attr("transform",
                                       "translate(" + 2500 + " ," +
                                       50 + ")")
                                 .style("font", "13px sans-serif")
                                 .style("text-anchor", "middle")
                                 .text("for Common Majors");

                     svg.append("text")
                        .attr("transform",
                              "translate(" + 2400 + " ," +
                              920 + ")")
                        .style("font", "12px times")
                        .style("text-anchor", "middle")
                        .text("1980 Enrollment");

                     svg.append("text")
                        .attr("transform",
                              "translate(" + 2600 + " ," +
                              920 + ")")
                        .style("font", "12px times")
                        .style("text-anchor", "middle")
                        .text("2018 Enrollment");










                        svg.append("g")
                           .attr("stroke", "orange")
                           .attr("transform", "translate( " + 2800 + ", 0 )")
                           .call(yAxisLeftMaleFemale);

                        svg.append("g")
                           .attr("stroke", "blue")
                           .attr("transform", "translate( " + 3000 + ", 0 )")
                           .call(yAxisRightMaleFemale);

                        svg.append("text")
                           .attr("transform",
                                 "translate(" + 2900 + " ," +
                                 20 + ")")
                           .style("font", "13px sans-serif")
                           .style("text-anchor", "middle")
                           .text("Male vs Female Enrollment");

                           svg.append("text")
                              .attr("transform",
                                    "translate(" + 2900 + " ," +
                                    35 + ")")
                              .style("font", "13px sans-serif")
                              .style("text-anchor", "middle")
                              .text("by College");

                              svg.append("text")
                                 .attr("transform",
                                       "translate(" + 2900 + " ," +
                                       50 + ")")
                                 .style("font", "13px sans-serif")
                                 .style("text-anchor", "middle")
                                 .text("for Common Majors");

                        svg.append("text")
                           .attr("transform",
                                 "translate(" + 2800 + " ," +
                                 920 + ")")
                           .style("font", "12px times")
                           .style("text-anchor", "middle")
                           .text("1980 Enrollment");

                        svg.append("text")
                           .attr("transform",
                                 "translate(" + 3000 + " ," +
                                 920 + ")")
                           .style("font", "12px times")
                           .style("text-anchor", "middle")
                           .text("2018 Enrollment");









svg.call(tip);
svg.call(tipUIUC);
svg.call(tipMale);
svg.call(tipFemale);
console.log(data);

subsetEngineering = []
data.forEach(function(d) {

        if (d.College == "Engineering") {
                subsetEngineering.push(d);
        }
});

subsetLAS = []
data.forEach(function(d) {

        if (d.College == "LAS") {

            if(Math.abs( d.Total_1980 - d.Total_2018 ) > 50)
            {
                subsetLAS.push(d);
            }
        }
});

subsetACES = []
data.forEach(function(d) {

        if (d.College == "ACES") {
                subsetACES.push(d);
        }
});

subsetFAA = []
data.forEach(function(d) {

        if (d.College == "Fine and Applied Arts") {
                subsetFAA.push(d);
        }
});


subsetEducation = []
data.forEach(function(d) {

        if (d.College == "Education") {
                subsetEducation.push(d);
        }
});


subsetBusiness = []
data.forEach(function(d) {

        if (d.College == "Business") {
                subsetBusiness.push(d);
        }
});

subsetUIUC = [

    {College: "UIUC",
    Female_1980: "38",
    Female_2018: "38",
    Major_Name: "Engineering",
    Male_1980: "276",
    Male_2018: "48",
    Total_1980: "4862",
    Total_2018: "7469" } ,

{College: "UIUC",
Female_1980: "38",
Female_2018: "38",
Major_Name: "LAS",
Male_1980: "276",
Male_2018: "48",
Total_1980: "3483",
Total_2018: "10253"} ,

{College: "UIUC",
Female_1980: "38",
Female_2018: "38",
Major_Name: "ACES",
Male_1980: "276",
Male_2018: "48",
Total_1980: "1262",
Total_2018: "1292"} ,

{College: "UIUC",
Female_1980: "38",
Female_2018: "38",
Major_Name: "Fine and Applied Arts",
Male_1980: "276",
Male_2018: "48",
Total_1980: "2586",
Total_2018: "2042"} ,

{College: "UIUC",
Female_1980: "38",
Female_2018: "38",
Major_Name: "Education",
Male_1980: "276",
Male_2018: "48",
Total_1980: "840",
Total_2018: "555"} ,

{College: "UIUC",
Female_1980: "38",
Female_2018: "38",
Major_Name: "Business",
Male_1980: "276",
Male_2018: "48",
Total_1980: "3479",
Total_2018: "2412"}

]







subsetMaleFemale = [

    {College: "UIUC",
    Female_1980: "628",
    Female_2018: "1638",
    Major_Name: "Engineering",
    Male_1980: "4684",
    Male_2018: "6153",
    Total_1980: "4862",
    Total_2018: "7469" } ,

{College: "UIUC",
Female_1980: "1174",
Female_2018: "5430",
Major_Name: "LAS",
Male_1980: "2309",
Male_2018: "5179",
Total_1980: "3483",
Total_2018: "10253"} ,

{College: "UIUC",
Female_1980: "485",
Female_2018: "1004",
Major_Name: "ACES",
Male_1980: "777",
Male_2018: "386",
Total_1980: "1262",
Total_2018: "1292"} ,

{College: "UIUC",
Female_1980: "1716",
Female_2018: "2386",
Major_Name: "Fine and Applied Arts",
Male_1980: "1959",
Male_2018: "1931",
Total_1980: "2586",
Total_2018: "2042"} ,

{College: "UIUC",
Female_1980: "651",
Female_2018: "475",
Major_Name: "Education",
Male_1980: "189",
Male_2018: "79",
Total_1980: "840",
Total_2018: "555"} ,

{College: "UIUC",
Female_1980: "1368",
Female_2018: "1141",
Major_Name: "Business",
Male_1980: "2111",
Male_2018: "1269",
Total_1980: "3479",
Total_2018: "2412"}

]


data.forEach(function(d) {

        if (d.College == "Business") {
                subsetBusiness.push(d);
        }
});

console.log(subsetEngineering);
console.log(subsetLAS);
console.log(subsetMaleFemale);

 svg.selectAll("enrollment_data")
    .data(subsetEngineering)
    .enter()
    .append("line")
    .attr("x1", 0)
    .attr("x2", 200)
    .attr("y1", function(d) {

            //if (d.College == "Engineering") {
                    return countScaleEngineering(d.Total_1980);
            //}

    })
    .attr("y2", function(d) {

            //if (d.College == "Engineering") {
                    return countScaleEngineering(d.Total_2018);
            //}

    })
    .attr("stroke-width", 3)
    .attr("stroke", function(d) {

            if (parseInt(d.Total_2018) > parseInt(d.Total_1980)) {
                    return "green";
            } else {
                    return "red";
            }

    })
    .attr("opacity", function (d) {

            return colorGradientScale(Math.abs(d.Total_2018 - d.Total_1980));
    })
    .on('mouseover', function(d){

        tip.show(d);
        tip.style('top', Math.min(countScaleEngineering(d.Total_2018), countScaleEngineering(d.Total_1980)) + Math.abs(countScaleEngineering(d.Total_2018) - countScaleEngineering(d.Total_1980))/4 + 'px');
        tip.style('left', margin.left + 120 + 'px');

    })
    .on('mouseout', tip.hide);














    svg.selectAll("enrollment_data")
       .data(subsetLAS)
       .enter()
       .append("line")
       .attr("x1", 400)
       .attr("x2", 600)
       .attr("y1", function(d) {

               //if (d.College == "Engineering") {
                       return countScaleLAS(d.Total_1980);
               //}

       })
       .attr("y2", function(d) {

               //if (d.College == "Engineering") {
                       return countScaleLAS(d.Total_2018);
               //}

       })
       .attr("stroke-width", 3)
       .attr("stroke", function(d) {

               if (parseInt(d.Total_2018) > parseInt(d.Total_1980)) {
                       return "green";
               } else {
                       return "red";
               }

       })
       .attr("opacity", function (d) {

               return colorGradientScale(Math.abs(d.Total_2018 - d.Total_1980));
       })
       .on('mouseover', function(d){

           tip.show(d);
           tip.style('top', Math.min(countScaleLAS(d.Total_2018), countScaleLAS(d.Total_1980)) + Math.abs(countScaleLAS(d.Total_2018) - countScaleLAS(d.Total_1980))/4 + 'px');
           tip.style('left', margin.left + 400 + 120 + 'px');

       })
       .on('mouseout', tip.hide);













       svg.selectAll("enrollment_data")
          .data(subsetACES)
          .enter()
          .append("line")
          .attr("x1", 800)
          .attr("x2", 1000)
          .attr("y1", function(d) {

                  //if (d.College == "Engineering") {
                          return countScaleACES(d.Total_1980);
                  //}

          })
          .attr("y2", function(d) {

                  //if (d.College == "Engineering") {
                          return countScaleACES(d.Total_2018);
                  //}

          })
          .attr("stroke-width", 3)
          .attr("stroke", function(d) {

                  if (parseInt(d.Total_2018) > parseInt(d.Total_1980)) {
                          return "green";
                  } else {
                          return "red";
                  }

          })
          .attr("opacity", function (d) {

                  return colorGradientScale(Math.abs(d.Total_2018 - d.Total_1980));
          })
          .on('mouseover', function(d){

              tip.show(d);
              tip.style('top', Math.min(countScaleACES(d.Total_2018), countScaleACES(d.Total_1980)) + Math.abs(countScaleACES(d.Total_2018) - countScaleACES(d.Total_1980))/4 + 'px');
              tip.style('left', margin.left +800 + 120 + 'px');

          })
          .on('mouseout', tip.hide);













          svg.selectAll("enrollment_data")
             .data(subsetFAA)
             .enter()
             .append("line")
             .attr("x1", 1200)
             .attr("x2", 1400)
             .attr("y1", function(d) {

                     //if (d.College == "Engineering") {
                             return countScaleFAA(d.Total_1980);
                     //}

             })
             .attr("y2", function(d) {

                     //if (d.College == "Engineering") {
                             return countScaleFAA(d.Total_2018);
                     //}

             })
             .attr("stroke-width", 3)
             .attr("stroke", function(d) {

                     if (parseInt(d.Total_2018) > parseInt(d.Total_1980)) {
                             return "green";
                     } else {
                             return "red";
                     }

             })
             .attr("opacity", function (d) {

                     return colorGradientScale(Math.abs(d.Total_2018 - d.Total_1980));
             })
             .on('mouseover', function(d){

                 tip.show(d);
                 tip.style('top', Math.min(countScaleFAA(d.Total_2018), countScaleFAA(d.Total_1980)) + Math.abs(countScaleFAA(d.Total_2018) - countScaleFAA(d.Total_1980))/4 + 'px');
                 tip.style('left', margin.left +1200 + 120 + 'px');

             })
             .on('mouseout', tip.hide);

















             svg.selectAll("enrollment_data")
                .data(subsetEducation)
                .enter()
                .append("line")
                .attr("x1", 1600)
                .attr("x2", 1800)
                .attr("y1", function(d) {

                        //if (d.College == "Engineering") {
                                return countScaleEducation(d.Total_1980);
                        //}

                })
                .attr("y2", function(d) {

                        //if (d.College == "Engineering") {
                                return countScaleEducation(d.Total_2018);
                        //}

                })
                .attr("stroke-width", 3)
                .attr("stroke", function(d) {

                        if (parseInt(d.Total_2018) > parseInt(d.Total_1980)) {
                                return "green";
                        } else {
                                return "red";
                        }

                })
                .attr("opacity", function (d) {

                        return colorGradientScale(Math.abs(d.Total_2018 - d.Total_1980));
                })
                .on('mouseover', function(d){

                    tip.show(d);
                    tip.style('top', Math.min(countScaleEducation(d.Total_2018), countScaleEducation(d.Total_1980)) + Math.abs(countScaleEducation(d.Total_2018) - countScaleEducation(d.Total_1980))/4 + 'px');
                    tip.style('left', margin.left +1600 + 120 + 'px');

                })
                .on('mouseout', tip.hide);














                svg.selectAll("enrollment_data")
                   .data(subsetBusiness)
                   .enter()
                   .append("line")
                   .attr("x1", 2000)
                   .attr("x2", 2200)
                   .attr("y1", function(d) {

                           //if (d.College == "Engineering") {
                                   return countScaleBusiness(d.Total_1980);
                           //}

                   })
                   .attr("y2", function(d) {

                           //if (d.College == "Engineering") {
                                   return countScaleBusiness(d.Total_2018);
                           //}

                   })
                   .attr("stroke-width", 3)
                   .attr("stroke", function(d) {

                           if (parseInt(d.Total_2018) > parseInt(d.Total_1980)) {
                                   return "green";
                           } else {
                                   return "red";
                           }

                   })
                   .attr("opacity", function (d) {

                           return colorGradientScale(Math.abs(d.Total_2018 - d.Total_1980));
                   })
                   .on('mouseover', function(d){

                       tip.show(d);
                       tip.style('top', Math.min(countScaleBusiness(d.Total_2018), countScaleBusiness(d.Total_1980)) + Math.abs(countScaleBusiness(d.Total_2018) - countScaleBusiness(d.Total_1980))/4 + 'px');
                       tip.style('left', margin.left +2000 + 120 + 'px');

                   })
                   .on('mouseout', tip.hide);

















                   svg.selectAll("enrollment_data")
                      .data(subsetUIUC)
                      .enter()
                      .append("line")
                      .attr("x1", 2400)
                      .attr("x2", 2600)
                      .attr("y1", function(d) {

                              //if (d.College == "Engineering") {
                                      return countScaleUIUC(d.Total_1980);
                              //}

                      })
                      .attr("y2", function(d) {

                              //if (d.College == "Engineering") {
                                      return countScaleUIUC(d.Total_2018);
                              //}

                      })
                      .attr("stroke-width", 3)
                      .attr("stroke", function(d) {

                              if (parseInt(d.Total_2018) > parseInt(d.Total_1980)) {
                                      return "green";
                              } else {
                                      return "red";
                              }

                      })
                      .attr("opacity", function (d) {

                              return colorGradientScale(Math.abs(d.Total_2018 - d.Total_1980));
                      })
                      .on('mouseover', function(d){

                          tipUIUC.show(d);
                          tipUIUC.style('top', Math.min(countScaleUIUC(d.Total_2018), countScaleUIUC(d.Total_1980)) + Math.abs(countScaleUIUC(d.Total_2018) - countScaleUIUC(d.Total_1980))/4 + 'px');
                          tipUIUC.style('left', margin.left +2500 + 60 + 'px');

                      })
                      .on('mouseout', tipUIUC.hide);
















                      // Male
                      svg.selectAll("enrollment_data")
                         .data(subsetMaleFemale)
                         .enter()
                         .append("line")
                         .attr("x1", 2800)
                         .attr("x2", 3000)
                         .attr("y1", function(d) {

                                 //if (d.College == "Engineering") {
                                         return countScaleMaleFemale(d.Male_1980);
                                 //}

                         })
                         .attr("y2", function(d) {

                                 //if (d.College == "Engineering") {
                                         return countScaleMaleFemale(d.Male_2018);
                                 //}

                         })
                         .attr("stroke-width", 3)
                         .attr("stroke", function(d) {

                                 return "#4156f4";

                         })
                         .attr("opacity", function (d) {

                                 return colorGradientScale(Math.abs(d.Male_2018 - d.Male_1980));
                         })
                         .on('mouseover', function(d){

                             tipMale.show(d);
                             tipMale.style('top', Math.min(countScaleUIUC(d.Male_2018), countScaleUIUC(d.Male_1980)) - Math.abs(countScaleUIUC(d.Male_2018) - countScaleUIUC(d.Male_1980))/4 - 100 + 'px');
                             tipMale.style('left', margin.left + 2900 + 60 + 'px');

                         })
                         .on('mouseout', tipMale.hide);











                         // Female
                         svg.selectAll("enrollment_data")
                            .data(subsetMaleFemale)
                            .enter()
                            .append("line")
                            .attr("x1", 2800)
                            .attr("x2", 3000)
                            .attr("y1", function(d) {

                                    //if (d.College == "Engineering") {
                                            return countScaleMaleFemale(d.Female_1980);
                                    //}

                            })
                            .attr("y2", function(d) {

                                    //if (d.College == "Engineering") {
                                            return countScaleMaleFemale(d.Female_2018);
                                    //}

                            })
                            .attr("stroke-width", 3)
                            .attr("stroke", function(d) {

                                    return "#f442f4";

                            })
                            .attr("opacity", function (d) {

                                    return colorGradientScale(Math.abs(d.Female_2018 - d.Female_1980));
                            })
                            .on('mouseover', function(d){

                                tipFemale.show(d);
                                tipFemale.style('top', Math.min(countScaleUIUC(d.Female_2018), countScaleUIUC(d.Female_1980)) + Math.abs(countScaleUIUC(d.Female_2018) - countScaleUIUC(d.Female_1980))/4 -100 + 'px');
                                tipFemale.style('left', margin.left + 2900 + 'px');

                            })
                            .on('mouseout', tipFemale.hide);







};
