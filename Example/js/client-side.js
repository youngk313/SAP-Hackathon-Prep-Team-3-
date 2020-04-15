$(document).ready(function() {

    let deckid;
    // CONTACT THE SERVER AND GET THE DATE FROM THE SERVER
    $('#homePage').ready(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET",
            dataType: "static",
            type: "GET",
            success: function(data) {

                console.log("SUCCESS:", data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
    $('#deck').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "https://deckofcardsapi.com/api/deck/new/shuffle",
            dataType: "json",
            type: "GET",
            data: { format: "deckOfCards"},
            success: function(data) {
                deckid = data.deck_id;
                $("#cardCounter").html("Number of Cards Remaining:" + data.remaining);
                console.log("SUCCESS JSON:", data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#cards").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#card').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "https://deckofcardsapi.com/api/deck/" + deckid + "/draw/",
            dataType: "json",
            type: "GET",
            data: { format: "deckOfCards"},
            success: function(data) {
                $("#cardCounter").html("Number of Cards Remaining:" + data.remaining);
                $("#drawnCard").html("Your card:" + data.cards[0].code);
                console.log("SUCCESS JSON:", data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#cards").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#reshuffle').click(function(e) {

            // don't allow the anchor to visit the link
            e.preventDefault();

            $.ajax({
                url: "https://deckofcardsapi.com/api/deck/" + deckid + "/shuffle/",
                dataType: "json",
                type: "GET",
                data: { format: "deckOfCards"},
                success: function(data) {
                    $("#cardCounter").html("Number of Cards Remaining:" + data.remaining);
                    console.log("SUCCESS JSON:", data);

                },
                error: function(jqXHR, textStatus, errorThrown) {
                    $("#cards").text(jqXHR.statusText);
                    console.log("ERROR:", jqXHR, textStatus, errorThrown);
                }
            });
        });



});
