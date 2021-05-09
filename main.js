/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

$(document).delegate(".project", "click", function() {
    window.location = $(this).find("a").attr("href");
 });
$(document).ready(function(){
    $('.submitBtn').click(function(event){
        console.log('Clicked submit')

        var name = document.getElementById("name").value;
        var subject = document.getElementById("subject").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var error_message = document.getElementById("error_message");
        
        error_message.style.padding = "10px";
        
        var text;
        if(name.length < 3){
          text = "Please Enter valid Name";
          error_message.innerHTML = text;
          event.preventDefault()
        }
        if(subject.length < 2){
          text = "Please Enter Correct Subject";
          error_message.innerHTML = text;
          event.preventDefault()
        }
     
        if(email.indexOf("@") == -1 || email.length < 6){
          text = "Please Enter valid Email";
          error_message.innerHTML = text;
          event.preventDefault()
        }
        if(message.length <= 20){
          text = "Please Enter More Than 20 Characters";
          error_message.innerHTML = text;
          event.preventDefault()
        }
      
    })
})

$('document').ready(function(){
const pages = document.querySelectorAll(".parallax");

const options = { 
    root: null,    // it is the viewport
    threshold: 0,
    rootMargin: "15%"
};

const observer = new IntersectionObserver(function(entries, observer)
{
    entries.forEach(entry => {
        //console.log(entry);
    });
}, options);

pages.forEach(page => {
    observer.observe(page)
})

});


 
