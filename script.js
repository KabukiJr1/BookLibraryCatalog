// Initial Book Data (State)
let myLibrary = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isBorrowed: false },
    { id: 2, title: "1984", author: "George Orwell", isBorrowed: true }
];

// 1. Add Book Function
function handleAddBook() {
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;

    if (title && author) {
        const newBook = {
            id: Date.now(),
            title: title,
            author: author,
            isBorrowed: false
        };
        myLibrary.push(newBook);
        clearInputs();
        render();
    }
}

// 2. Remove Book Function
function removeBook(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);
    render();
}

// 3. Toggle Borrow Status
function toggleStatus(id) {
    const book = myLibrary.find(b => b.id === id);
    if (book) {
        book.isBorrowed = !book.isBorrowed;
        render();
    }
}

// 4. Statistics Function (Key Concept: Functions for Stats)
function updateStats() {
    const total = myLibrary.length;
    const borrowed = myLibrary.filter(b => b.isBorrowed).length;
    
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = `
        <div class="stat-item">Total: ${total}</div>
        <div class="stat-item">Borrowed: ${borrowed}</div>
        <div class="stat-item">Available: ${total - borrowed}</div>
    `;
}

// 5. Search Function (Key Concept: Loops for searching)
function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    render(query);
}

// 6. Render Function
function render(filterTerm = "") {
    const grid = document.getElementById('libraryGrid');
    grid.innerHTML = "";

    // Loop through library
    myLibrary.forEach(book => {
        if (book.title.toLowerCase().includes(filterTerm) || book.author.toLowerCase().includes(filterTerm)) {
            const card = document.createElement('div');
            card.className = 'book-card card';
            card.innerHTML = `
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <span class="status-badge ${book.isBorrowed ? 'borrowed' : 'available'}">
                    ${book.isBorrowed ? 'Borrowed' : 'Available'}
                </span>
                <div style="margin-top: 15px;">
                    <button onclick="toggleStatus(${book.id})" class="btn-primary" style="width: auto;">Toggle Status</button>
                    <button onclick="removeBook(${book.id})" class="remove-btn">Remove</button>
                </div>
            `;
            grid.appendChild(card);
        }
    });

    updateStats();
}

function clearInputs() {
    document.getElementById('titleInput').value = "";
    document.getElementById('authorInput').value = "";
}

// Initial Load
render();