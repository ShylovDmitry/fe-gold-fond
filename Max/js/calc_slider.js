$( function() {
    $( "#sum" ).slider({
        range: "min",
        value: 15000,
        step: 1000,
        min: 3000,
        max: 30000,
        slide: function( event, ui ) {
            $( "#result_sum" ).html( ui.value + " руб.");
            $( "#result_overpayment" ).html( Math.round( ui.value *  $( "#day" ).slider("value") * 0.0055) + " руб.");
            $( "#result_return" ).html( Math.round( ui.value + ui.value * $( "#day" ).slider("value") * 0.0055) + " руб.");
            $( "#show_sum" ).html( ui.value + " руб.");
        }
    });

    $( "#day" ).slider({
        range: "min",
        value: 7,
        min: 1,
        max: 30,
        slide: function( event, ui ) {
            $( "#result_overpayment" ).html( Math.round( ui.value * $( "#sum" ).slider("value") * 0.0055 ) + " руб.");
            $( "#result_return" ).html( Math.round( ui.value * $( "#sum" ).slider("value") * 0.0055 + $( "#sum" ).slider("value")) + " руб.");
            $( "#show_day" ).html( ui.value + " дн.");
        }
    });
} );
