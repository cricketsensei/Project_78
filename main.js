var images = ["family.jpg","grandpa.jpg", "grandma.jpg", "aunt.jpg", "father.jpg" , "bro.jpg", "mother.jpg", "bro.jpg"];
           
var names = ["Fmaily Book","Dhruv Zaveri(grandpa)", "Indira Zaveri(grandma)", "Rupal Zaveri(aunt)", "Sunil Shah(father)", "Yashil Shah(brother)", "Dipali Shah(mother)", "Aarush Shah(me)"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 7
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}