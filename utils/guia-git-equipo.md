# 🧑‍💻 Guía básica para trabajar en equipo con Git y GitHub

Esta guía explica cómo varios desarrolladores pueden trabajar juntos en un mismo repositorio sin pisarse el trabajo.

---

## ✅ 1. Cloná el repositorio

```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO
```

---

## ✅ 2. Creá una nueva rama para tu funcionalidad

Cada persona debe trabajar en su propia rama para evitar conflictos:

```bash
git checkout -b nombre-de-tu-modulo
```

📌 Ejemplo:
```bash
git checkout -b login
```

---

## ✅ 3. Trabajá normalmente

- Modificá archivos, creá componentes, etc.
- Luego guardá tus cambios con:

```bash
git add .
git commit -m "Agregué el formulario de login"
git push -u origin nombre-de-tu-modulo
```

---

## 🔁 4. Si alguien más subió cambios a `main`, actualizá tu rama:

```bash
git checkout main
git pull origin main

git checkout nombre-de-tu-modulo
git merge main
```

---

## 🚀 5. Subí tu rama a GitHub y hacé un Pull Request

- Subí tu rama:
```bash
git push origin nombre-de-tu-modulo
```

- Andá a GitHub y hacé un **Pull Request (PR)** desde tu rama hacia `main`.

---

## 🔄 6. Cómo revertir un commit sin romper el historial

En lugar de usar `git reset --hard`, usá:

```bash
git revert <ID_DEL_COMMIT>
```

Esto deshace un cambio de forma segura y colaborativa.

---

## ⚠️ ¡IMPORTANTE!

❌ **NO USAR `git push --force`** si trabajás en equipo.  
Esto puede borrar cambios de tus compañeros.

✅ Usá `revert`, ramas separadas y Pull Requests para evitar conflictos.

---

## 🧪 Tip: cómo ver historial y ramas

```bash
git log --oneline --graph --all
git branch -a
```

---

Cualquier duda, ¡consultá con el equipo antes de hacer un `force` o un `reset`!
