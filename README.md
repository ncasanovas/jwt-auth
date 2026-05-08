🚀 JWT Auth API (Node.js & MySQL)
Esta es una API de autenticación robusta construida con Node.js, Express y Sequelize. Utiliza JSON Web Tokens (JWT) para la seguridad y Bcrypt para el hashing de contraseñas, siguiendo una arquitectura limpia de capas (Routes, Controllers, Services).

🛠️ Tecnologías utilizadas
Node.js & Express.

Sequelize - ORM para la gestión de la base de datos MySQL.

MySQL2 - Driver de MySQL para Node.js.

JWT (jsonwebtoken) - Manejo de autenticación basada en tokens.

Bcryptjs - Encriptación de contraseñas.

Dotenv - Gestión de variables de entorno.

CORS - Manejo de solicitudes entre orígenes.

📂 Estructura del Proyecto

```plaintext
jwt-auth/
├── src/
│   ├── configs/      # Configuración de DB y variables
│   ├── controllers/  # Lógica de comunicación HTTP
│   ├── models/       # Modelos de Sequelize (Tablas)
│   ├── routes/       # Definición de rutas y endpoints
│   ├── services/     # Lógica de negocio y autenticación
│   ├── app.js        # Configuración de Express y Middlewares
│   └── server.js     # Punto de entrada y levantamiento del server
├── .env              # Variables sensibles 
└── package.json      # Dependencias y scripts
```


⚙️ Instalación y Configuración

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/jwt-auth.git
cd jwt-auth
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:
Crea un archivo `.env` en la raíz del proyecto y añade lo siguiente:

```env
PORT=5000
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=jwt_auth
DB_HOST=127.0.0.1
NODE_ENV=development
JWT_SECRET=tu_clave_secreta_generada
```

4. Preparar la Base de Datos:
Crea la base de datos manualmente en MySQL:

```sql
CREATE DATABASE jwt_auth;
```

Luego, Sequelize sincronizará automáticamente las tablas al iniciar la aplicación.

🚀 Ejecución

```bash
npm start
```

📋 Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | /api/users/register | Crea un nuevo usuario y encripta la contraseña |
| POST | /api/users/login | Autentica al usuario y devuelve un JWT |
| GET | /api/users/user-list | Obtiene la lista de todos los usuarios registrados |
| GET | / | Comprobación de estado de la API |

🔒 Seguridad
Las contraseñas se procesan con un Salt de 10 rondas antes de ser hasheadas.

El acceso a rutas protegidas requiere el encabezado Authorization: Bearer <token>.

Se utiliza cors para gestionar el intercambio de recursos de origen cruzado.
