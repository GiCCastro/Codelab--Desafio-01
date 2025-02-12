function search() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let  cardContent = document.getElementsByClassName('card');
    let noResults = document.getElementById('no-results');
    let found = false;

    for (let i = 0; i <  cardContent.length; i++) {
        let card =  cardContent[i].querySelector('h2');
        if (input === "") {
             cardContent[i].style.display = "block";
            found = true;
        } else if (card.innerHTML.toLowerCase().includes(input)) {
             cardContent[i].style.display = "block";
            found = true;
        } else {
             cardContent[i].style.display = "none";
        }
    }

    if (!found && input !== ""){ 
        noResults.style.display = "flex";
    }else{
        noResults.style.display = "none";
    }
    
}