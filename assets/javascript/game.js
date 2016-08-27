

var kitteh = ["Paris", "Cicero", "Phoenix", "Poomba"];

var wins = 0;
var losses = 0;
var counter = 0;
var total = 0;


var myNumber = Math.floor(Math.random() * 101) + 19;
$(".myNumber").html(myNumber);

var oneNumber = Math.floor(Math.random() * 12) + 1;
var twoNumber = Math.floor(Math.random() * 12) + 1;
var threeNumber = Math.floor(Math.random() * 12) + 1;
var fourNumber = Math.floor(Math.random() * 12) + 1;


$(document).ready(function() {

            $("#Paris").on("click", function() {
                total = total + oneNumber;
                $(".theTotal").html(total);
                winning();
                

            });

            $("#Cicero").on("click", function() {
                total = total + twoNumber;
                $(".theTotal").html(total);
                winning();
                

            });

            $("#Phoenix").on("click", function() {
                total = total + threeNumber;
                $(".theTotal").html(total);
                winning();
                

            });

            $("#Poomba").on("click", function() {
                total = total + fourNumber;
                $(".theTotal").html(total);
                winning();

            });

            function winning() {
            	if (total == myNumber){
            		wins++;
            		$("#wins").html(wins);
            		alert("Congratulations! You are a winner!");


            	} else if(total > myNumber){
            		losses++;
            		$("#losses").html(losses);
            		alert("Awww, sorry, you lose!");
            	}
            }

            function reset () {}
            randomNumber = Math.floor(Math.random() * 101) + 19;
            

        });

location.reload