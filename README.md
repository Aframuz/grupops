# PS Grupo Hunting - Prueba Técnica

Prueba técnica para postulación de trabajo en **PS Grupo Hunting**.

## 📋 Descripción

Aplicación web desarrollada en **Angular 16** que presenta un dashboard de productos con las siguientes características:

- **Catálogo de productos**: Visualización de productos obtenidos desde la API pública [Fake Store API](https://fakestoreapi.com)
- **Eliminación de productos**: Funcionalidad para remover productos del catálogo
- **Modal de agregar producto**: Interfaz de usuario para agregar productos (sin funcionalidad backend implementada)
- **Diseño responsivo**: Implementado con SCSS utilizando CSS Grid y Flexbox para adaptarse a diferentes tamaños de pantalla

## 🛠️ Tecnologías Utilizadas

- **Framework**: Angular 16.2.16
- **Estilos**: SCSS con diseño mobile-first
- **Layout**: CSS Grid y Flexbox
- **UI Components**: ng-bootstrap para modales
- **Iconos**: Font Awesome (WhatsApp y navegación)
- **API**: [Fake Store API](https://fakestoreapi.com)

## 🚀 Instalación y Configuración

### Requisitos previos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd grupops
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm start
```

4. Abrir el navegador en `http://localhost:4200/`

## 📦 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run build -- --configuration development` - Construye el proyecto en modo desarrollo
- `npm test` - Ejecuta las pruebas unitarias con Karma
- `npm run watch` - Construye el proyecto en modo watch

## 🎨 Características de Diseño

### Responsive Design

El proyecto implementa un diseño responsive mobile-first con los siguientes breakpoints:

- **Mobile**: < 576px
- **Tablet**: 576px - 767px
- **Medium**: 768px - 1199px (con menú hamburguesa)
- **Desktop**: ≥ 1200px

### Componentes Principales

- **Products Dashboard**: Página principal con grid de productos
- **Product Card**: Tarjeta individual de producto con imagen, título, precio y acciones
- **Add Product Modal**: Modal para agregar nuevos productos
- **Navbar**: Navegación responsive con menú hamburguesa en viewports medianos

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/
│   │   ├── components/
│   │   │   ├── add-product-modal/
│   │   │   ├── product/
│   │   │   └── products-list/
│   │   ├── models/
│   │   │   └── product.interface.ts
│   │   ├── pages/
│   │   │   └── products-dashboard/
│   │   └── services/
│   │       └── product.service.ts
│   ├── app-routing.module.ts
│   └── app.module.ts
└── assets/
    ├── fonts/
    └── images/
```

## 🔧 Funcionalidades Implementadas

✅ Visualización de catálogo de productos desde API externa  
✅ Diseño responsivo con Grid y Flexbox  
✅ Eliminación de productos del catálogo  
✅ Modal de agregar producto (UI únicamente)  
✅ Menú de navegación responsive con hamburguesa  
✅ Integración con Font Awesome para iconos

## ⚠️ Limitaciones Conocidas

- La funcionalidad de agregar productos solo muestra el modal, no persiste datos
- Los cambios en el catálogo no se persisten (solo en memoria durante la sesión)
- El build de producción excede el presupuesto de CSS configurado (considerar ajustar `angular.json` o refactorizar estilos)

## 👤 Autor

Desarrollado por **Aframuz** como prueba técnica para PS Grupo Hunting.

## 📄 Licencia

Este proyecto fue creado con fines de evaluación técnica.

<small>Este README fue generado con IA</small>
