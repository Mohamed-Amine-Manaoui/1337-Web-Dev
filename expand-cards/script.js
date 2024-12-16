let imgCard = document.querySelectorAll(".img-card");

imgCard.forEach(element =>
{
    element.addEventListener("click", function(e)
    {
        imgCard.forEach(element => {
            element.classList.remove("active");
        });
        element.classList.add("active");
    })
});