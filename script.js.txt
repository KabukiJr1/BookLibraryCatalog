:root {
    --primary: #2563eb;
    --dark: #1e293b;
    --light: #f8fafc;
    --danger: #ef4444;
    --success: #22c55e;
}

body {
    font-family: 'Inter', system-ui, sans-serif;
    background-color: var(--light);
    color: var(--dark);
    margin: 0;
    padding: 20px;
}

.container { max-width: 1100px; margin: 0 auto; }

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
}

h1 span { color: var(--primary); }

.stats-bar { display: flex; gap: 20px; }
.stat-item { background: white; padding: 10px 20px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); font-weight: bold; }

.controls {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    margin-bottom: 40px;
}

.card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

input {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 2px solid #e2e8f0;
    border-radius: 6px;
    box-sizing: border-box;
}

.btn-primary {
    background: var(--primary);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    width: 100%;
}

.library-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.book-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    border-left: 5px solid var(--primary);
    position: relative;
    transition: transform 0.2s;
}

.book-card:hover { transform: translateY(-5px); }

.status-badge {
    font-size: 0.8rem;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
}

.borrowed { background: #fee2e2; color: var(--danger); }
.available { background: #dcfce7; color: var(--success); }

.remove-btn { margin-top: 15px; background: none; border: none; color: var(--danger); cursor: pointer; text-decoration: underline; }