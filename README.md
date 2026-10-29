# 🛍️ API de Gestión de Productos con NestJS y PostgreSQL

Bienvenido a este proyecto. Está diseñado como un ejemplo claro y práctico de cómo funciona un sistema profesional (**CRUD**: Crear, Leer, Actualizar y Eliminar) utilizando **NestJS** y una base de datos **PostgreSQL**.

Si apenas estás empezando en la programación, este documento está pensado para que entiendas **qué hace cada pieza** sin enredarte con tecnicismos innecesarios.

---

## 💡 ¿Cómo entender NestJS? La analogía del Restaurante

Imaginá que nuestra aplicación es un restaurante bien organizado:

```
[ Cliente / Navegador ]
          │ (Pide la carta / Envía un pedido)
          ▼
   [ DTO y Validación ] ──► (El recepcionista revisa que los datos vengan bien)
          │
          ▼
    [ Controlador ]     ──► (El mozo: toma el pedido y sabe a qué mesa corresponde)
          │
          ▼
     [ Servicio ]       ──► (El cocinero: prepara y procesa lo que se pidió)
          │
          ▼
 [ Entidad y Base de Datos ] ──► (La despensa / heladera: donde se guardan los ingredientes)
```

1. **El Módulo (`products.module.ts`)**: Es como una sección del restaurante (por ejemplo, "La Cocina"). Agrupa a todas las personas y herramientas que trabajan juntas para un mismo fin.
2. **El Controlador (`products.controller.ts`)**: Es el mozo o mesero. Su único trabajo es escuchar lo que pide la gente desde internet (rutas como `/products`) y responder. No cocina ni guarda datos; sólo recibe y entrega.
3. **El Servicio (`products.service.ts`)**: Es el cocinero experto. Aquí vive la lógica real del negocio: revisar si un producto existe, calcular cosas y ordenar que se guarde o elimine.
4. **La Entidad (`product.entity.ts`)**: Es la ficha o ficha técnica del producto. Le dice a PostgreSQL: *"Un producto tiene un número (id), un nombre (texto), un precio (número) y una cantidad en stock"*.
5. **Los DTOs y la Validación automática (`create-product.dto.ts`)**: Son como las reglas del formulario. Si alguien intenta crear un producto sin nombre o con precio menor a cero, NestJS lo rechaza en la puerta y le avisa exactamente qué corrigió, sin necesidad de escribir validaciones manuales.
6. **Inyección de Dependencias**: El mozo no sale a fabricar una cocina cuando un cliente pide comida; el restaurante se la entrega lista para usar cuando él empieza su turno. En NestJS, las clases reciben lo que necesitan automáticamente.
7. **Swagger (Menú interactivo)**: Es una página web visual que se genera sola donde podés ver y probar todos los botones de la API sin instalar programas complejos.

---

## 📋 ¿Qué datos tiene un Producto?

Cada producto registrado tiene los siguientes campos:

| Campo | Tipo | ¿Para qué sirve? | Ejemplo |
| :--- | :--- | :--- | :--- |
| **id** | Número | Identificador único autogenerado | `1` |
| **name** | Texto | Nombre del producto (obligatorio, mín. 3 letras) | `"Teclado Mecánico RGB"` |
| **description** | Texto | Descripción o detalle (opcional) | `"Switches rojos, cable tipo C"` |
| **price** | Decimal | Precio del producto (mayor a 0) | `59.99` |
| **stock** | Entero | Cantidad disponible en depósito (mínimo 0) | `20` |
| **isActive** | Booleano | Si está a la venta o no | `true` o `false` |
| **createdAt** | Fecha | Momento exacto en que se creó | `2026-10-28T...` |

---

## 🚀 Cómo poner a funcionar el proyecto (Paso a Paso)

### 1. Requisitos previos
- Tener instalado **Node.js** (versión 20 o superior).
- Tener instalado el gestor de paquetes **pnpm** (o npm).
- Tener instalado y corriendo **PostgreSQL**.

---

### 2. Configurar la Base de Datos (`.env`)

En la raíz del proyecto tenés un archivo llamado `.env`. Abrilo y colocá los datos de tu PostgreSQL:

```env
PORT=3000

# Datos de tu base de datos PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_contraseña_aqui
DB_NAME=productos_db
DB_SYNC=true
```

> 📌 **Nota sobre `DB_SYNC=true`**: Le avisa a NestJS que cree automáticamente las tablas en PostgreSQL si todavía no existen. ¡No tenés que crear la tabla a mano con SQL! Solo asegurate de haber creado la base de datos `productos_db` en tu motor de base de datos.

---

### 3. Instalar dependencias

Si todavía no instalaste los paquetes, ejecutá en tu terminal:

```bash
pnpm install
```

---

### 4. Encender el servidor en modo desarrollo

Ejecutá el siguiente comando:

```bash
pnpm run start:dev
```

Verás mensajes en verde indicando que NestJS cargó los módulos y se conectó con éxito.

---

## 🎮 Probar la API de forma visual con Swagger

¡Esta es una de las grandes ventajas de NestJS! No necesitás usar programas complicados como Postman si no querés.

1. Abrí tu navegador web favorito (Chrome, Firefox, etc.).
2. Ingresá a la siguiente dirección:
   👉 **[http://localhost:3000/api](http://localhost:3000/api)**

Verás una pantalla interactiva con todos los endpoints disponibles:

- **`POST /products`**: Crear un nuevo producto (hacé clic en *Try it out*, poné los datos y dale a *Execute*).
- **`GET /products`**: Traer todos los productos guardados.
- **`GET /products/{id}`**: Buscar un producto por su número de ID.
- **`PATCH /products/{id}`**: Modificar solo los campos que quieras de un producto.
- **`DELETE /products/{id}`**: Borrar un producto.

---

## 🧪 Ejecutar Pruebas (Tests)

NestJS facilita verificar que todo funcione con pruebas automatizadas:

```bash
# Ejecutar los tests unitarios
pnpm run test

# Ejecutar las pruebas de punta a punta (e2e)
pnpm run test:e2e
```
