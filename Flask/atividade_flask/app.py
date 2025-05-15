from flask import Flask, render_template, request, redirect, url_for, jsonify
import sqlite3

conn = sqlite3.connect('amigos.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS amigos (
                 id INTEGER PRIMARY KEY,
                 nome TEXT NOT NULL,
                 email TEXT NOT NULL)''')
c.execute('''CREATE TABLE IF NOT EXISTS produtos (
                 id INTEGER PRIMARY KEY,
                 nome TEXT NOT NULL,
                 preco REAL NOT NULL)''')
conn.commit()
conn.close()

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('amigos.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def home():
    return redirect(url_for('adicionar'))  

@app.route('/adicionar', methods=['GET', 'POST'])
def adicionar():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']

        conn = get_db_connection()
        conn.execute('INSERT INTO amigos (nome, email) VALUES (?, ?)', (nome, email))
        conn.commit()
        conn.close()

        return redirect(url_for('listar'))

    return render_template('adicionar.html')

@app.route('/listar')
def listar():
    conn = get_db_connection()
    amigos = conn.execute('SELECT * FROM amigos').fetchall()
    conn.close()
    return render_template('listar.html', amigos=amigos)

@app.route('/api/adicionar', methods=['POST'])
def api_adicionar():
    data = request.get_json()
    if not data or 'nome' not in data or 'preco' not in data:
        return jsonify({'status': 'error', 'message': 'Dados inválidos'}), 400
    nome = data['nome']
    preco = data['preco']

    conn = get_db_connection()
    conn.execute('INSERT INTO produtos (nome, preco) VALUES (?, ?)', (nome, preco))
    conn.commit()
    conn.close()

    return jsonify({'status': 'success'})

@app.route('/api/listar', methods=['GET'])
def api_listar():
    conn = get_db_connection()
    produtos = conn.execute('SELECT nome, preco FROM produtos').fetchall()
    conn.close()

    return jsonify([{'nome': produto['nome'], 'preco': produto['preco']} for produto in produtos])

if __name__ == '__main__':
    app.run(debug=True)
