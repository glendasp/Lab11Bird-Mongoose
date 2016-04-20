/**
 * Created by glendex on 4/20/16.
 */
$(document).ready(function(){

    $("#birdDescription").click(function(){

        if ($('#NewDescription').length === 1) { return; }

        var input = $("<input id='newDescription' placeholder='new description'></input>").toLowerCase();
        //var lower = input.toLowerCase();

        (input).insertAfter($(this));

        var instructions = $("<i>Press Enter to save, Esc to cancel</i>");
        instructions.insertAfter(lower);


        input.keypress(function(event){
            //Submit changes by pressing enter
            if (event.which == 13) {

                //Database update via AJAX
                var newDescription = $(this).val();
               // var name = $("#flowerName").text();
                var data = {"description": newDescription};
                var url = '/updateBird';
                $.ajax(
                    {"method" : "put" ,
                        "data" : data ,
                        'url' : url
                    }).done(function(result){
                    $("#birdDescription").text(bird.description);
                }).fail(function(){
                    console.log("error");
                });
                input.remove();
                instructions.remove();
                edit = false;
            }
        });

        //Cancel changes by pressing Esc key.
        input.keyup(function(event){
            if (event.which == 27){
                $(this).remove();
                instructions.remove();
                edit = false;
            }
        });
    });
});