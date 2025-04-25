# Proyecto: Serverless API in APX.school

Link al proyecto: [https://apx-n3-10-01-serverless-api.vercel.app/](https://apx-n3-10-01-serverless-api.vercel.app/)

Este proyecto es una API serverless diseñada para manejar autenticación de usuarios, gestión de datos de usuario, búsqueda de productos y procesamiento de órdenes de compra. ES LA CONFIG BASE PARA PROYECTO FUTURO. A continuación, se describen los endpoints disponibles y su funcionalidad:

## Endpoints

### Autenticación

- **POST /auth**  
  Recibe un email, encuentra o crea un usuario con ese email y le envía un código de verificación por email.

- **POST /auth/token**  
  Recibe un email y un código, valida que sean correctos. Si lo son, devuelve un token e invalida el código.

### Gestión de Usuario

- **GET /me**  
  Devuelve la información del usuario asociado al token proporcionado.

- **PATCH /me**  
  Permite modificar ciertos datos del usuario autenticado.

- **PATCH /me/address**  
  Permite modificar la dirección del usuario autenticado.

### Productos

- **GET /search?q=query&offset=0&limit=10**  
  Permite buscar productos en la base de datos, verificando stock y otros detalles necesarios.

- **GET /products/{id}**  
  Obtiene toda la información de un producto específico.

### Órdenes de Compra

- **POST /order?productId={id}**  
  Genera una compra en la base de datos y crea una orden de pago en MercadoPago. Devuelve una URL para redirigir al usuario al proceso de pago.

- **POST /ipn/mercadopago**  
  Recibe notificaciones de MercadoPago para confirmar pagos exitosos. Cambia el estado de la compra en la base de datos, envía un email al usuario confirmando el pago y genera un aviso interno (por ejemplo, un email o registro en Airtable).

## Notas

- Por ahora, los endpoints solo necesitan responder con un status `200` para las rutas y verbos correctos.
- Este proyecto servirá como base para futuros desafíos.

## Licencia

Este proyecto está bajo la licencia MIT.
