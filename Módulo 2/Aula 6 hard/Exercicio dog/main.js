$.ajax({url:'https://api.TheDogAPI.com/v1/breeds',
success: function(result) {
    for(raa in result){
        console.log(result[raa].name);
    }
}
})

// $.ajax({url:'https://api.TheDogAPI.com/v1/breeds',
// success: function(result) {
//         console.log(result);
// }
// })
