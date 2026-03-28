# FEM Site - Next.js + Sanity CMS

Este proyecto es una plataforma web para **FEM**, construida con **Next.js 15 (App Router)** y gestionada por **Sanity.io**. Utiliza una arquitectura de monorepositorio donde el frontend y el panel de administración (Studio) coexisten para facilitar el desarrollo y la edición visual.

![Preview de Edición Visual](/sanity-next-preview.png)

## 🏗️ Arquitectura del Proyecto

El proyecto está dividido en dos carpetas principales:

-   **/frontend**: Aplicación Next.js con soporte multilingüe, optimización de imágenes y actualizaciones en tiempo real.
-   **/studio**: Panel de administración de Sanity donde se gestiona todo el contenido.

---

## 📄 Estructura de Contenidos (Sanity Docs)

El CMS está configurado con diversos tipos de documentos adaptados a las necesidades de FEM:

### 1. Documentos Principales
-   **Páginas (`page`)**: Constructor de páginas flexible con soporte para español e inglés. Permite crear estructuras dinámicas.
-   **Proyectos (`project`)**: Gestión del portafolio. Incluye metadatos técnicos, galerías, ubicación y descripciones localizadas.
-   **Posts (`post`)**: Blog de noticias y actualizaciones de la empresa.
-   **Personas (`person`)**: Miembros del equipo y perfiles profesionales.

### 2. Documentos de Seguimiento y Marketing
-   **Clientes (`customer`)**: Logotipos y nombres de empresas con las que FEM ha trabajado.
-   **Colaboradores (`colaborator`)**: Socios estratégicos y aliados.
-   **Galería de Obra (`constructionGallery`)**: Seguimiento visual de los proyectos en curso.
-   **Visitas de Obra (`siteVisit`)**: Registro detallado de inspecciones y avances en campo.

### 3. Configuración Global (Singletons)
-   **Ajustes (`settings`)**: Configuración general del sitio (SEO, Redes Sociales, Menús de navegación, etc.).

---

## 🚀 Integración con Next.js

La aplicación utiliza las últimas tecnologías de Sanity para ofrecer una experiencia de usuario y de edición excepcional:

-   **Live Content API (`next-sanity/live`)**: El contenido se actualiza en el frontend instantáneamente al publicar en Sanity, sin necesidad de reconstruir el sitio (ISR bajo demanda).
-   **Visual Editing (Stega)**: Al navegar por el sitio en modo borrador desde el Studio, puedes hacer clic directamente en cualquier texto o imagen para editarlo en el CMS.
-   **Multilingüe (i18n)**: El frontend utiliza rutas dinámicas `/[locale]` para gestionar contenido en Español e Inglés, sincronizado con los campos localizados de Sanity.
-   **Optimización de Imágenes**: Uso de `@sanity/image-url` para servir imágenes transformadas y ligeras según el dispositivo.

---

## 🛠️ Desarrollo Local

### 1. Requisitos previos
Asegúrate de tener instalados Node.js y el CLI de Sanity:
```bash
npm install -g sanity@latest
```

### 2. Configuración
Crea un archivo `.env` en `/frontend` y `/studio` basándote en los archivos `.env.example`. Necesitarás el `PROJECT_ID` (v5aqd90t).

### 3. Ejecución
Desde la raíz del proyecto, puedes instalar las dependencias y correr ambos entornos:

```bash
# Instalar dependencias
npm install

# Correr Frontend (localhost:3000) y Studio (localhost:3333)
npm run dev
```

---

## 📤 Despliegue

-   **Studio**: Se despliega en la infraestructura de Sanity con `npx sanity deploy` desde la carpeta `/studio`.
-   **Frontend**: Optimizado para **Vercel**. Asegúrate de configurar los Webhooks de Sanity para la revalidación automática del contenido.

---

## 📚 Recursos Adicionales

-   [Documentación de Sanity](https://www.sanity.io/docs)
-   [Documentación de Next.js](https://nextjs.org/docs)
-   [GROQ Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet)
