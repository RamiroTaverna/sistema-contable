
# 📘 Guía Básica de Git y GitHub desde la Terminal de VSCode

---

## 👤 Trabajar Solo

### 🔧 Requisitos Previos
- Instalar **Git**: https://git-scm.com/downloads
- Instalar **Visual Studio Code**: https://code.visualstudio.com/

### 🛠 Configuración Inicial
Abre la terminal de VSCode (`Ctrl + Ñ`) y ejecuta:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tucorreo@ejemplo.com"
```

### 🗂 Crear un Proyecto con Git

1. Crea la carpeta raíz del proyecto.
2. Desde la terminal:

```bash
git init
git add .
git commit -m "Primer commit"
```

### ☁ Subir a GitHub

1. Crear un repositorio en GitHub (sin README ni `.gitignore`).
2. Copia la URL del repositorio (por ejemplo: `https://github.com/usuario/nombre-proyecto.git`).

En la terminal:

```bash
git remote add origin https://github.com/usuario/nombre-proyecto.git
git branch -M main
git push -u origin main
```

### ✏ Hacer cambios y subirlos

```bash
git status                      # Ver qué cambió
git add .                       # Agregar todos los cambios
git commit -m "Descripción"     # Guardar los cambios
git push                        # Subirlos a GitHub
```

---

## 🤝 Trabajar en Conjunto

### 📥 Clonar un Repositorio

```bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
code .  # Abre el proyecto en VSCode
```

### 🌿 Crear una Rama

```bash
git checkout -b mi-nueva-rama
```

### ✍ Hacer Cambios en la Rama

```bash
git add .
git commit -m "Cambios en mi rama"
git push origin mi-nueva-rama
```

### 📤 Hacer un Pull Request (PR)

1. Ve a GitHub.
2. Haz clic en "Compare & pull request".
3. Describe tu cambio y crea el PR.

### 🔄 Traer Cambios del Equipo

```bash
git checkout main
git pull origin main
```

### 📜 Ver Historial de Cambios

```bash
git log --oneline --graph --all
```

---

¡Listo para trabajar profesionalmente con Git y GitHub desde VSCode!
