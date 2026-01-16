<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Libro | Professional Catalog</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Book Library <span>Catalog</span></h1>
            <div id="stats-container" class="stats-bar">
                </div>
        </header>

        <section class="controls">
            <div class="card add-book-form">
                <h3>Add New Book</h3>
                <input type="text" id="titleInput" placeholder="Book Title">
                <input type="text" id="authorInput" placeholder="Author">
                <button onclick="handleAddBook()" class="btn-primary">Add to Library</button>
            </div>

            <div class="card search-box">
                <h3>Quick Search</h3>
                <input type="text" id="searchInput" placeholder="Search by title or author..." onkeyup="handleSearch()">
            </div>
        </section>

        <main id="libraryGrid" class="library-grid">
            </main>
    </div>
    <script src="script.js"></script>
</body>
</html>