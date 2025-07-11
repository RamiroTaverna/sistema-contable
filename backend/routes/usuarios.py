from flask import Blueprint, request, jsonify
import mysql.connector

bp = Blueprint("usuarios", __name__, url_prefix="/api")

# Conexión directa (puede pasarse a db.py después)
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="sistema_contable"
)
cursor = db.cursor()

@bp.route("/registrar", methods=["POST"])
def registrar_usuario():
    data = request.json
    try:
        sql = """
        INSERT INTO usuarios (nombre, correo, contrasena, rol, empresa)
        VALUES (%s, %s, %s, %s, %s)
        """
        valores = (
            data["nombre"],
            data["correo"],
            data["contrasena"],
            data["rol"],
            data["empresa"]
        )
        cursor.execute(sql, valores)
        db.commit()
        return jsonify({"mensaje": "Usuario registrado correctamente"}), 201

    except mysql.connector.IntegrityError as e:
        if "Duplicate entry" in str(e):
            return jsonify({"error": "El correo ya está registrado"}), 409
        else:
            return jsonify({"error": str(e)}), 500

