# Estudio Contable Morales & Asociados

Plataforma institucional corporativa para Estudio Contable Morales & Asociados (Ramos Mejía, Buenos Aires, Argentina), especializada en asesoramiento integral de PyMEs, liquidación de sueldos e impuestos.

## Especificaciones de Arquitectura

- **Framework**: React.js 18
- **Bundler**: Vite
- **Navegación**: React Router v6
- **Estilos**: Vanilla CSS con variables nativas escalables (CSS Custom Properties).
- **Iconografía**: Lucide React
- **Arquitectura de UI**: Mobile-first y accesibilidad estandarizada.
- **Optimización**: Code Spliting y Lazy Loading integrados a nivel general.

## Comandos del Entorno Local

Instalación de dependencias estructurales:
```bash
npm install
```

Despliegue del entorno de desarrollo (con *Hot Module Replacement* activo):
```bash
npm run dev
```

Empaquetado de producción (generación de bundles optimizados):
```bash
npm run build
```

Ejecución estática (Test local sobre lo empaquetado del build):
```bash
npm run preview
```

## Patrones Activos (Principios SOLID & DRY aplicados)

- Centralización Semántica: Toda data blanda (Textos de servicios, videos, links) inyectada dinámicamente desde `/src/data/`.
- Lazy Loading Activo: Carga asincrónica de las rutas del React Router que optimizan los recursos descargados en el tiempo número de render cero (*TTR* base reducido).
- Componentización Limpia: Diseño escalable re-utilizables como componentes autónomos (`WhatsAppButton`, `ServicesPreview`).
