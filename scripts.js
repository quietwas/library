let myLibrary = []
const library = document.querySelector(".library")
const newBook = document.querySelector(".new-book")
const dialog = document.querySelector("dialog")
const form = document.querySelector("form")

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.uid = crypto.randomUUID()
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

function displayLibrary() {
    library.replaceChildren()
    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement("div")
        div.className = "card"
        const title = document.createElement("div")
        title.className = "title"
        title.textContent = `"${myLibrary[i].title}"`
        const author = document.createElement("div")
        author.className = "author"
        author.textContent = myLibrary[i].author
        const separator = document.createElement("hr")
        const pages = document.createElement("div")
        pages.className = "pages"
        pages.textContent = `${myLibrary[i].pages} pages`
        const read = document.createElement("button")
        read.className = "status"
        read.id = myLibrary[i].uid
        if (myLibrary[i].read) {
            read.textContent = "Read"
            read.style.backgroundColor = "rgba(0, 255, 0, 0.2)"
        } else {
            read.textContent = "Not Read"
            read.style.backgroundColor = "rgba(255, 0, 0, 0.2)"
        }
        const remove = document.createElement("button")
        remove.className = "remove"
        remove.id = myLibrary[i].uid
        remove.textContent = "Remove"
        div.appendChild(title)
        div.appendChild(author)
        div.appendChild(separator)
        div.appendChild(pages)
        div.appendChild(read)
        div.appendChild(remove)
        library.appendChild(div)
    }
}

newBook.addEventListener("click", () => {
    dialog.showModal()
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const read = document.querySelector("#read").checked

    addBookToLibrary(title, author, pages, read)
    dialog.close()
    displayLibrary()
})

library.addEventListener("click", (e) => {
    if (e.target.classList.contains("status")){
        const bookID = e.target.id

        const book = myLibrary.find(item => item.uid === bookID)

        if (book){
            book.read = !book.read
        }

        displayLibrary()
    }
    if (e.target.classList.contains("remove")){
        const bookID = e.target.id

        const index = myLibrary.findIndex(item => item.uid === bookID);
        console.log(index);
        
        if (index !== -1) {
            myLibrary.splice(index, 1)
        }

        displayLibrary()
    }
})