const myLibrary = []
const library = document.querySelector(".library")

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    const uid = crypto.randomUUID
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
        if (myLibrary[i].read) {
            read.textContent = "Read"
            read.style.backgroundColor = "rgba(0, 255, 0, 0.2)"
        } else {
            read.textContent = "Not Read"
            read.style.backgroundColor = "rgba(255, 0, 0, 0.2)"
        }
        const remove = document.createElement("button")
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

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 297, true)
addBookToLibrary("Game of Thrones", "George R.R Martin", 367, false)

displayLibrary()