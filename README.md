# Amigo Secreto 🎉

¡Bienvenido al proyecto **Amigo Secreto**!.
Esta pagina web te permite agregar nombres, validar las entradas, y sortear aleatoriamente quién será el próximo amigo secreto. Perfecto para usar en empresas, familia, amigos y eventos.

---

## 📂 Estructura del Proyecto

Los archivos principales del proyecto son:

- **index.html**  
  Contiene la estructura principal de la aplicación. Incluye los campos de entrada, botones y secciones donde se muestran los resultados.

- **app.js**  
  Contiene la lógica principal de la aplicación. Aquí se realizan las validaciones, se gestiona la lista de participantes y se implementa el sorteo.

---

## 📋 Funcionalidades

### 1. **Agregar Amigos**
   - Los usuarios pueden ingresar nombres para añadir a la lista de participantes.
   - El sistema valida las entradas:
     - No permite nombres vacíos.
     - No permite números como nombres.
     - No permite nombres repetidos.

### 2. **Visualización de Lista**
   - Los nombres añadidos se muestran en una lista dinámica en la página.

### 3. **Sorteo de Amigo Secreto**
   - Al presionar el botón "Sortear amigo", la aplicación selecciona aleatoriamente un nombre de la lista.
   - El nombre sorteado se muestra en la sección de resultados.
   - El nombre sorteado se elimina de la lista para evitar duplicados en próximos sorteos.

---
