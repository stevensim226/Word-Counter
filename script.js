var btn = document.querySelector(".btn")
var table = document.querySelector(".table")
btn.addEventListener("click",appendTable)

// Adds data to the table
function appendTable(){
    var word_count_array = process_text()
    var clearContent = table.getElementsByTagName("tr")
    var count = 1
    while (clearContent[1]) {
        table.removeChild(clearContent[1])
    }
    for ( let word of word_count_array ) {
        var tr = document.createElement("tr")
        var td_number = document.createElement("td")
        var td_word = document.createElement("td")
        var td_count = document.createElement("td")
        td_number.classList.add("middle")
        td_word.innerText = word[0]
        td_count.innerText = word[1]
        td_number.innerText = count++
        tr.appendChild(td_number)
        tr.appendChild(td_word)
        tr.appendChild(td_count)
        table.appendChild(tr)
    }
}

// Removes punctuations from the text then separates it by spaces and then counts the occurences
function process_text(){
    var textInput = document.querySelector(".textarea").value
    textInput = textInput.replace(/["'.,\/#!$%‘’\^&\*;:<>{}=\-_`~()\n]/g," ").toLowerCase()
    textInput = textInput.split(" ")

    var word_count = {}

    for (let word of textInput) {
        if (word == "" || word.length < 3) {
            continue
        }if(!(word in word_count)) {
            word_count[word] = 1
        } else {
            word_count[word] += 1
        }
    }

    var word_count_array = []
    for ( let word in word_count) {
        word_count_array.push([word,word_count[word]])
    }

    word_count_array.sort(function(a,b){
        return b[1] - a[1]
    })
    return word_count_array
    }

