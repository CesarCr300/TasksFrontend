## Configuración

Asegúrate de instalar las dependencias:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Servidor de Desarrollo

Inicia el servidor de desarrollo en `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

**Nota:** Se recomienda no cambiar el puerto 3000 para el frontend.

## Producción

Construye la aplicación para producción:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Previsualiza localmente la construcción de producción:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Cambiar la URL del API

Si deseas cambiar la URL del API, puedes hacerlo en el archivo [`task.service.ts`](services/task.service.ts). Busca la constante `API_BASE` y modifica su valor:

```ts
export const useTaskService = () => {
  const API_BASE = "http://localhost:4000";

  const get = async () => {
    const response = (await $fetch(`${API_BASE}/tasks`)) as any;
    return response;
  };

  // Otros métodos...
};
```

## Decisiones Técnicas

1. **Gestión del Estado con Pinia**:
   - Se utiliza Pinia para la gestión del estado global de la aplicación debido a que la documentación oficial lo recomienda.

2. **Componentes Asíncronos**:
   - Se implementó el lazy loading de componentes utilizando `defineAsyncComponent` para mejorar el rendimiento de la aplicación cargando componentes solo cuando son necesarios.

3. **Manejo de Errores**:
   - Se configuró un manejador de errores global en Nuxt para capturar principalmente los errores y registrarlos en consola.

4. **Estructura**
   - Seguí las indicaciones brindadas por la documentación para estructurar el proyecto

## Dificultades al Aprender NuxtJS

Al comenzar a aprender NuxtJS, lo primero que hice fue recurrir a la documentación oficial, explorando poco a poco las funcionalidades que ofrecía. Para interiorizar los conceptos, comencé desarrollando funcionalidades de forma sencilla, y posteriormente las modularizaba en diferentes archivos para lograr una estructura más organizada y escalable.

Durante mi aprendizaje, utilicé varias fuentes de apoyo:

- **Documentación oficial de NuxtJS:** Para comprender los conceptos básicos y profundizar en sus funcionalidades.
- **Stack Overflow:** Para resolver dudas específicas y puntuales.
- **Tutoriales prácticos:** Encontrados en internet, que me ayudaron a visualizar implementaciones en escenarios reales.

### Principales desafíos enfrentados

1. **Diferencias con React:**  
   Estoy acostumbrado a trabajar con React, pero NuxtJS introdujo conceptos nuevos, como el **renderizado del lado del servidor (SSR)**, que requerían un cambio en mi forma de manejar los datos y diseñar la experiencia del usuario.

2. **Concepto de los "emits":**  
   Al principio me costó entender el propósito y la implementación de los `emits`. No estaba familiarizado con esta forma de comunicación entre componentes en Vue/Nuxt, pero con práctica y ejemplos logré comprender su importancia y cómo aplicarlos de manera efectiva.
