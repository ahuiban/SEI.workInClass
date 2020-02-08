console.log("testing")


// We would like to run a function that will populate our page with names and addresses from an array of objects

// Data
// Add the array of objects

const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
];

//Write a loop that iterates over the array
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

//We will now be interacting with the DOM so wrap the code in jQuery's DOM on-load function.

//Create a container that will house each name and address. Give it a class we can adjust later

$(() => {

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const $infoContainer = $('<div>').addClass('info-container');
        //Add in the name div, whose text comes from the array. Give it a class we can adjust later.
        const $nameDiv = $('<div>').addClass('name').text(data[i].name);
        //And the address div, whose text comes from the array. Give it a class we can adjust later.
        const $addressDiv = $('<div>').addClass('address').text(data[i].address);
    }

});

//   Append the divs to the container div
// Finished result

$(() => {

    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const $infoContainer = $('<div>').addClass('info-container');
        const $nameDiv = $('<div>').addClass('name').text(data[i].name);
        const $addressDiv = $('<div>').addClass('address').text(data[i].address);
        $infoContainer.append($nameDiv);
        $infoContainer.append($addressDiv);
        $('body').append($infoContainer);
    }

});



//Write in a function that will 'populate' the page

const populateData = () => {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const $infoContainer = $('<div>').addClass('info-container');
        const $nameDiv = $('<div>').addClass('name').text(data[i].name);
        const $addressDiv = $('<div>').addClass('address').text(data[i].address);
        $infoContainer.append($nameDiv);
        $infoContainer.append($addressDiv);
        $('body').append($infoContainer);
    }
}
//Now we can move the function out of the window onload, and just invoke the function within the window onload.

$(() => {

    populateData();

});
//Adding data
//Write a function that will push new data in to the array.
// The function should take name and address as parameters
// The function should then run the 'populateData' function

/*
const addData = (name, address) => {
    data.push({ name: name, address: address });
    populateData();
}

$(() => {
    populateData();
    addData('Karolin', 'NY');
});

*/

//The function 'doubles' the information. To fix this, we should clear out the old information before it populates. $('body').empty();

const addData = (name, address) => {
    data.push({ name: name, address: address });
    $('body').empty();
    populateData();
}

$(() => {
    populateData();
    addData('Karolin', 'NY');
});