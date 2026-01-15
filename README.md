# Alimentos de Temporada

Web para consultar qué alimentos están de temporada en España, facilitando una compra más sostenible y económica.

**Demo:** https://alimentos-temporada.vercel.app

## Características

- Muestra los alimentos de temporada del mes actual
- 4 categorías: frutas, verduras, pescados y mariscos, carnes y caza
- Sistema de fases: empieza, en temporada, termina
- Diseño responsive para móvil y escritorio
- Sin dependencias externas

## Contenido

| Categoría | Alimentos |
|-----------|-----------|
| Frutas | 23 |
| Verduras | 27 |
| Pescados y mariscos | 22 |
| Carnes y caza | 14 |

### Fases de temporada

- **Empieza**: El alimento comienza su temporada este mes
- **Ahora**: El alimento está en plena temporada
- **Termina**: Últimos días de temporada para este alimento

## Tech Stack

- HTML5
- CSS3 (variables CSS, grid, flexbox)
- JavaScript vanilla (ES6+)

## Estructura del proyecto

```
/
├── index.html      # Página principal
├── styles.css      # Estilos
├── app.js          # Lógica de la aplicación
├── data.js         # Datos de alimentos por temporada
├── favicon.svg     # Icono del sitio
└── README.md       # Documentación
```

## Añadir o modificar alimentos

Los datos están en `data.js`. Cada alimento tiene:

```javascript
'Nombre': { months: [0, 1, 2], icon: '🍎' }
```

- `months`: Array de meses (0 = Enero, 11 = Diciembre)
- `icon`: Emoji representativo

## Desarrollo local

1. Clonar el repositorio
2. Abrir `index.html` en el navegador

No requiere build ni instalación de dependencias.

## Despliegue

El proyecto está desplegado en Vercel con deploy automático desde GitHub.

- **Producción:** https://alimentos-temporada.vercel.app
- **Repositorio:** https://github.com/RodrigoAA/alimentos-temporada

## Licencia

MIT
