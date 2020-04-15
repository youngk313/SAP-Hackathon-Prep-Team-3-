$(document).ready(function() {

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

   // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#Menu #Burgers').click(function(e) {

        // don't allow the anchor to visit the link
       // e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "burger-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#burglist").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#burglist").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    $('#Menu #Breakfast').click(function(e) {
        // don't allow the anchor to visit the link
       // e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "breaky-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#breakylist").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#breakylist").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    $('#Menu #Drinks').click(function(e) {

        // don't allow the anchor to visit the link
       // e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "drink-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#drinklist").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#drinklist").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
    $('#Menu #Burgers').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "burger-facts"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#burgerfacts");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#burgerfacts").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

$('#Menu #Drinks').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "drink-facts"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#drinkfacts");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#drinkfacts").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    $('#Menu #Breakfast').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "breaky-facts"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#breakfacts");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#breakfacts").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    // PERFORM A HTTP POST, AND GET A RESPONSE FROM THE SERVER
    $('#submit').click(function(e) {
        let formData = { firstName: $("#firstName").val(),
                         lastName: $("#lastName").val(),
                         email: $("#email").val()
                       };
        console.log("Form data to send:", formData);
        $.ajax({
            url: "/post-form",
            dataType: "json",
            type: "POST",
            data: formData,
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                // how do we know what we are getting?
                $("#p2").html(data[0] + " " + data[1]['firstName']
                              + " " + data[1]['lastName']
                              + " " + data[1]['email']
                             );

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p2").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });
		$('#Menu #Desserts').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "dessert-facts"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#dessfacts");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#dessfacts").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });
		
		$('#Menu #Desserts').click(function(e) {

        // don't allow the anchor to visit the link
       // e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "dessert-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#desslist").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#desslist").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
	$('#Menu #SandS').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "side-facts"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#sidefacts");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#sidefacts").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });
		
		$('#Menu #SandS').click(function(e) {

        // don't allow the anchor to visit the link
       // e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "side-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#sidelist").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#sidelist").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
	$('#Menu #Salads').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "salad-facts"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#saladfacts");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#saladfacts").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });
		
		$('#Menu #Salads').click(function(e) {

        // don't allow the anchor to visit the link
       // e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "salad-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#saladlist").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#saladlist").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

		

});
