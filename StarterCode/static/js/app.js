//Grab data from samples.json() file

d3.json("../data/samples.json").then((all_data) => {

    //display all_data
    console.log(all_data)

    //display all OTU data
    var otu = all_data.samples[0]
    var otu_ids1 = otu.otu_ids
    console.log(otu)

    //display all OTU id's
    console.log(otu_ids1)
    
    //display all OTU labels
    var otu_labels1 = otu.otu_labels
    console.log(otu_labels1)

    //display all OTU values
    var sample_values1 = otu.sample_values
    console.log (sample_values1)

    var otu_ids = otu_ids1.slice(0,10).reverse();
    console.log(otu_ids)

    var otu_labels = otu_labels1.slice(0,10).reverse();
    console.log(otu_labels)

    var sample_values = sample_values1.slice(0,10).reverse()
    console.log(sample_values)

    var trace1 = {
        x: sample_values,
        y: otu_ids.map((d) => "OTU " + d),
        text: otu_labels,
        marker: {
        color: 'navy'},
        type:"bar",
        orientation: "h",
    };

    var data = [trace1];

    var layout = {
        title: "Top 10 OTU ID's & Values",
        xaxis: { title: "OTU ID" },
        yaxis: { title: "OTU Value"},
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 40
        }
    };


    Plotly.newPlot("bar", data, layout);

    var trace2 = {
        x: otu_ids1,
        y: sample_values1,
        mode: "markers",
        marker: {
            size: sample_values1,
            color: otu_ids1
        },
        text: otu_labels1
    };

    var layout2 = {
        title: "Bubble Chart OTU ID vs Value",
        xaxis: { title: "OTU ID" },
        yaxis: { title: "OTU Value"},
        margin: {
            l: 50,
            r: 5,
            t: 50,
            b: 100
        }
    
    };
    
    var data2 = [trace2];


    Plotly.newPlot('bubble', data2, layout2);


});

// function demographic(info) {


}
