# 🐾 Refugio Animal - Frontend (Angular)

Este proyecto representa la interfaz de usuario del sistema de adopciones y apadrinamientos de mascotas del Refugio Animal. Desarrollado con **Angular**, ofrece una experiencia clara y amigable para el público general y los administradores del refugio.

## 🚀 Características principales

- 🐶 Vista pública de mascotas disponibles
- ❤️ Formulario de adopción con pasos progresivos
- 🐕 Vista de apadrinamiento con integración de PayPal
- 🔐 Panel administrativo para gestionar mascotas y padrinos
- 📱 Diseño responsive usando Bootstrap 5

## 🛠️ Tecnologías usadas

- Angular 17+
- TypeScript
- Bootstrap
- RxJS
- Angular CLI
- HTML / SCSS


---

## 🧩 Estructura del proyecto

El frontend sigue una estructura modular por carpetas:

📂 src/app
├── 📁 components # Componentes visuales reutilizables
│ ├── mascota/ # Mostrar mascotas
│ ├── adopcion/ # Proceso de adopción por mascota
│ ├── apadrinar/ # Proceso de apadrinamiento por mascota
│ └── admin/ # Panel de administración
│ ├── admin-mascotas/
│ ├── admin-apadrinamientos/
│ └── admin-adopciones/
├── 📁 models # Interfaces TypeScript (Mascota, Apadrinamiento, Adopcion)
├── 📁 services # Comunicación con la API backend
│ ├── mascota.service.ts
│ ├── adopcion.service.ts
│ └── apadrinamiento.service.ts
├── 📁 assets # Archivos estáticos, imágenes, logos
├── app.component.ts # Componente raíz
├── app.module.ts # Módulo principal (importaciones)
└── app-routing.module.ts # Ruteo entre vistas

---


##📦 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/nombre-repo-frontend.git
   cd nombre-repo-frontend
2. Instala las dependencias:

  ```bash
  npm install
  ```
3. Ejecuta la aplicación:
  ```bash
  ng serve
  ```
4. Abre tu navegador en:
   ```bash
   http://localhost:4200
  `

##🤝 Autor
Desarrollado por Carlos Jesús Ocaña Huamán

Proyecto académico con propósito social ❤️
