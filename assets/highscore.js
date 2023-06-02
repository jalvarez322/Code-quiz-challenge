retreiveUserObjString();

function retreiveUserObjString() {
    // retrieve the stored data and parse it back into an array
    const retrieveStoredArrayString = localStorage.getItem("highscores");
    const retrieveQuestionArray = JSON.parse(retrieveStoredArrayString);
    const highScoresList = document.querySelector("#highscores-list");
    console.log(retrieveStoredArrayString);
    for (let i = 0; i < retrieveQuestionArray.length; i++) {
        let newListItem = document.createElement("p");
        let newObj = retrieveQuestionArray[i];
        newListItem.textContent = `${newObj.initialsValue} ${"-"} ${newObj.score}`
        newListItem.setAttribute("style", "margin-top: 5px;")
        highScoresList.prepend(newListItem);
        console.log(newObj);
    }
}

let clearHighscoresBtn = document.querySelector("#clear-highscores-btn");
clearHighscoresBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    localStorage.clear();

    document.querySelector("#highscores-list").innerHTML = ``;

})
