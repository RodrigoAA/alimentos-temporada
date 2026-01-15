# Alimentos de Temporada

Web para consultar que alimentos estan de temporada en España, facilitando una compra mas sostenible y economica.

**Demo:** https://alimentos-temporada.vercel.app

## Caracteristicas

- Muestra los alimentos de temporada del mes actual
- 4 categorias: frutas, verduras, pescados y mariscos, carnes y caza
- Sistema de fases: empieza, en temporada, termina
- Diseno responsive para movil y escritorio
- Sin dependencias externas

## Contenido

| Categoria | Alimentos |
|-----------|-----------|
| Frutas | 23 |
| Verduras | 27 |
| Pescados y mariscos | 22 |
| Carnes y caza | 14 |

### Fases de temporada

- **Empieza**: El alimento comienza su temporada este mes
- **Ahora**: El alimento esta en plena temporada
- **Termina**: Ultimos dias de temporada para este alimento

## Tech Stack

- HTML5
- CSS3 (variables CSS, grid, flexbox)
- JavaScript vanilla (ES6+)

## Estructura del proyecto

```
/
├── index.html      # Pagina principal
├── styles.css      # Estilos
├── app.js          # Logica de la aplicacion
├── data.js         # Datos de alimentos por temporada
├── favicon.svg     # Icono del sitio
└── README.md       # Documentacion
```

## Anadir o modificar alimentos

Los datos estan en `data.js`. Cada alimento tiene:

```javascript
'Nombre': { months: [0, 1, 2], icon: '🍎' }
```

- `months`: Array de meses (0 = Enero, 11 = Diciembre)
- `icon`: Emoji representativo

## Desarrollo local

1. Clonar el repositorio
2. Abrir `index.html` en el navegador

No requiere build ni instalacion de dependencias.

## Despliegue

El proyecto esta desplegado en Vercel con deploy automatico desde GitHub.

- **Produccion:** https://alimentos-temporada.vercel.app
- **Repositorio:** https://github.com/RodrigoAA/alimentos-temporada

## Licencia

MIT
