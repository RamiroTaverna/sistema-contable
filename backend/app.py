from flask import Flask
from flask_cors import CORS
from routes import usuarios

app = Flask(__name__)
CORS(app)

# Registrar las rutas desde módulos separados
app.register_blueprint(usuarios.bp)

@app.route("/")
def home():
    return "API del sistema contable corriendo ✅"

if __name__ == "__main__":
    app.run(debug=True, port=5000)
