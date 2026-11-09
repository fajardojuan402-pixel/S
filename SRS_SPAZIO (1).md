![](data:image/jpeg;base64...)

**DOCUMENTO DE REQUISITOS DEL SISTEMA**

**(SRS)**

SPAZIO: Marketplace horizontal de espacios físicos en Bogotá

**Universidad Distrital Francisco José de Caldas**

Ingeniería de software

**Autores**

Edgar Andrés Umaña Pire – 20181020152

Juan David Cardozo Fajardo – 20252678022

Santiago Sánchez Moya – 20211020032

Profesor: José Joaquín Bocanegra García

# 2. Historial de cambios

Esta tabla lleva el control de los cambios que ha tenido el documento, para seguir su evolución de forma ordenada.

**Tabla 1. Historial de cambios**

|  |  |  |
| --- | --- | --- |
| **Fecha** | **Descripción del cambio** | **Realizado por** |
| 23/09/2026 | Primera versión del documento, desarrollada hasta la sección 7 (Descripción global). | Equipo SPAZIO |
| 28/09/2026 | Se agregan los requisitos funcionales RF-01 a RF-14 (versión 0.1), con prioridad Alta o Media, y su asignación a los módulos M-01 a M-05. | Equipo SPAZIO |
| 07/10/2026 | Ajuste del alcance de los requisitos funcionales según la estimación por puntos de función. Se mantienen RF-01, RF-03, RF-05, RF-06, RF-07, RF-08, RF-12 y RF-13 (versión 0.2). Se difieren RF-02, RF-04, RF-09, RF-10 y RF-11. RF-14 se integra en RF-03. | Equipo SPAZIO |
| 07/10/2026 | Se agrega RF-15 (Consultar mis reservas) como punto de entrada para la cancelación de RF-08. La estimación se actualiza a 81 PFSA y 75 PFA (447 h a 6 h/PF y 596 h a 8 h/PF). Se precisa que el pago y el reembolso son simulados (HU03). Se agregan las secciones de requisitos diferidos, recortes y trazabilidad. | Equipo SPAZIO |
| 13/10/2026 | Incorporación de mejoras de usabilidad y UX/UI (versión 0.3) tras la evaluación de los prototipos (10 heurísticas de Nielsen y leyes de UX). Se refinan los criterios de aceptación de las historias HU01–HU03 y de los requisitos funcionales en alcance (RF-01, RF-03, RF-05, RF-06, RF-07, RF-08, RF-12, RF-13, RF-15) con validaciones, mensajes de error, estados vacíos y de carga; se refuerzan los requisitos no funcionales de usabilidad (RNF-04 y RNF-05). No se agregan requisitos nuevos ni se modifica el alcance. | Equipo SPAZIO |

*Fuente: elaboración propia.*

# 3. Prefacio

Muchas personas en Bogotá tienen espacios que no usan todo el tiempo, y otras necesitan un espacio por poco tiempo sin saber dónde buscarlo. SPAZIO junta a ambos grupos en una sola aplicación web: los anfitriones publican sus espacios y los usuarios los buscan, los reservan y los pagan.

Este Documento de Requisitos del Sistema (SRS) recoge lo que SPAZIO debe ser y hacer, para que el equipo de desarrollo, el profesor del curso y las personas interesadas entiendan lo mismo. Está escrito para quienes van a diseñar, construir, probar y revisar el producto, y para los usuarios y anfitriones potenciales que quieran conocer la propuesta.

El documento se organiza así: la sección 2 lleva el historial de cambios; la sección 4 reúne la tabla de contenidos y las listas de figuras y de tablas; la sección 5 presenta el propósito del documento y el alcance del producto; la sección 6 explica los términos usados; y la sección 7 describe el producto de forma global (perspectiva, funciones, usuarios, restricciones, modelo de dominio, suposiciones y distribución de requisitos). Los requisitos específicos y las demás secciones se entregan en versiones posteriores.

# 4. Tabla de contenidos

2. Historial de cambios 2

3. Prefacio 2

4. Tabla de contenidos 3

4.1 Lista de figuras 3

4.2 Lista de tablas 3

5. Introducción 5

5.1 Propósito del documento 5

5.2 Alcance del producto 5

6. Glosario 6

7. Descripción global 9

7.1 Perspectiva de producto 9

7.1.1 Interfaces con el sistema 9

7.1.2 Interfaces con el usuario 10

7.1.3 Interfaces con el hardware 10

7.1.4 Interfaces con el software 11

7.1.5 Interfaces de comunicación 11

7.1.6 Restricciones de memoria 11

7.1.7 Operaciones 12

7.2 Funciones del producto 12

7.2.1 Historias de usuario definidas 13

7.2.2 Funciones complementarias 14

7.2.3 Escenarios principal y alternativo 15

7.3 Características del usuario 16

7.4 Restricciones 17

7.4.1 Restricciones generales 17

7.4.2 Restricciones de software 18

7.4.3 Restricciones de hardware 19

7.5 Modelo de dominio 19

7.6 Suposiciones y dependencias 26

7.7 Distribución de requisitos 27

8. Requisitos específicos 29

8.1 Actores 29

8.2 Objetivos 30

8.3 Requisitos funcionales 30

8.4 Requisitos no funcionales 37

8.5 Requisitos de información 41

9. Proceso de ingeniería de requisitos

10. Proceso de verificación y validación 47

10.1 Validación de requisitos 47

10.2 Verificación de requisitos 49

10.3 Diagramas del proceso de validación y verificación 49

10.4 Relación con el PMP 52

11. Anexos 52

12. Referencias 52

## 4.1 Lista de figuras

Figura 1. Diagrama de casos de uso de SPAZIO 13

Figura 2. Diagrama del modelo de dominio de SPAZIO 20

Figura 3. Proceso de validación de requisitos 50

Figura 4. Proceso de verificación de requisitos 51

## 4.2 Lista de tablas

Tabla 1. Historial de cambios 2

Tabla 2. Glosario de siglas, acrónimos y conceptos 6

Tabla 3. Interfaces con el software 11

Tabla 4. Historias de usuario de SPAZIO 13

Tabla 5. Funciones complementarias del producto 14

Tabla 6. Descripción de las características del usuario 16

Tabla 7. Reglas de negocio de SPAZIO 17

Tabla 8. Documentación del elemento DOM-01: Cuenta 21

Tabla 9. Documentación del elemento DOM-02: Usuario (rol) 21

Tabla 10. Documentación del elemento DOM-03: Anfitrión (rol) 22

Tabla 11. Documentación del elemento DOM-04: Espacio físico 22

Tabla 12. Documentación del elemento DOM-05: Categoría 23

Tabla 13. Documentación del elemento DOM-06: Publicación 23

Tabla 14. Documentación del elemento DOM-07: Disponibilidad 24

Tabla 15. Documentación del elemento DOM-08: Reserva 24

Tabla 16. Documentación del elemento DOM-09: Transacción 25

Tabla 17. Documentación del elemento DOM-10: Calificación 25

Tabla 18. Suposiciones y dependencias 26

Tabla 19. Distribución de requisitos por módulo 27

Tabla 20. Requisitos planeados para futuras versiones 27

# 5. Introducción

Esta sección presenta el propósito del documento y el alcance del producto SPAZIO. Explica para qué se escribe este SRS, quién lo lee y qué se incluye y qué no se incluye en la primera versión del producto.

## 5.1 Propósito del documento

Este documento tiene como propósito especificar los requisitos de SPAZIO, una aplicación web para reservar espacios físicos por un tiempo corto en Bogotá. Es importante porque sirve de vínculo entre las personas que usarán el producto y el equipo que lo construye, y porque es la base del diseño, el desarrollo y las pruebas (PMP, Tabla 3).

## 5.2 Alcance del producto

**Producto.** SPAZIO es un marketplace horizontal de espacios físicos en Bogotá. Conecta a personas que tienen espacios que no usan todo el tiempo, llamadas anfitriones, con personas que necesitan un espacio por poco tiempo, llamadas usuarios (PMP §7.1.1).

**Funcionalidades.** La aplicación tiene una sola cuenta con dos roles, Usuario y Anfitrión. El usuario busca espacios por ubicación, los compara, reserva, paga, cancela y califica al anfitrión. El anfitrión publica un espacio con sus horarios y su precio, gestiona sus publicaciones, recibe reservas, cobra por el uso y califica al usuario. Las categorías de espacios son parqueaderos, almacenamiento, oficinas, eventos, deporte, estudios y espacios comerciales; el producto mínimo viable (MVP) empieza con parqueaderos y espacios deportivos.

**Objetivos y beneficios.** El objetivo general es desarrollar un marketplace que permita a los habitantes de Bogotá buscar, reservar y pagar espacios físicos temporales, y que permita a los dueños de esos espacios publicarlos y generar un ingreso con ellos (PMP 7.1.1). Los anfitriones aprovechan espacios vacíos y los usuarios encuentran, comparan y reservan un espacio en una sola aplicación.

**Relación con la estrategia del proyecto.** Se empieza con dos categorías de mucho uso para conseguir liquidez, es decir, suficientes anfitriones y usuarios activos, antes de agregar las demás categorías. La demanda se valida en Bogotá con encuestas, una lista de espera o un piloto manual (PMP §7.1.1).

**Fuera del alcance.** SPAZIO no compra ni vende espacios como inmuebles; solo conecta a las personas para que usen un espacio por un tiempo determinado. La primera versión trabaja solo en Bogotá, sin otras ciudades (PMP 7.1.1).

# 6. Glosario

La Tabla 2 explica las siglas, los acrónimos y los conceptos técnicos y del dominio que se usan en este documento.

**Tabla 2. Glosario de siglas, acrónimos y conceptos**

|  |  |
| --- | --- |
| Término | Definición |
| Anfitrión | Persona que dispone de un espacio físico y utiliza SPAZIO para publicarlo, establecer su disponibilidad, recibir reservas y obtener ingresos por su uso. |
| API | Interfaz de programación de aplicaciones. Conjunto de operaciones con las que el frontend y el backend de SPAZIO se comunican. |
| Backend | Parte del servidor de SPAZIO que aplica las reglas del negocio y se conecta con la base de datos y con los servicios externos. |
| Calificación | Valoración que un usuario o un anfitrión hace de la otra parte después de una reserva finalizada, con una nota de 1 a 5 y un comentario. |
| Categoría | Clasificación de los espacios: parqueaderos, almacenamiento, oficinas, eventos, deporte, estudios y espacios comerciales. |
| COP | Peso colombiano, moneda en la que se definen los precios y los pagos. |
| Cuenta | Registro de una persona en SPAZIO. Con una sola cuenta la persona puede usar los roles de Usuario y de Anfitrión. |
| DEP | Prefijo de los identificadores de dependencias (por ejemplo, DEP-01). |
| Disponibilidad | Periodos de tiempo durante los cuales un espacio publicado puede ser reservado por los usuarios. |
| DOM | Prefijo de los identificadores de los elementos del modelo de dominio (por ejemplo, DOM-01). |
| Espacio disponible | Espacio publicado que puede reservarse porque tiene disponibilidad en el periodo que pide el usuario. |
| Espacio físico | Lugar que un anfitrión pone a disposición de los usuarios durante un periodo determinado, como un parqueadero, una oficina, una bodega o un espacio deportivo. |
| Frontend | Parte de SPAZIO que ve y usa la persona en su navegador. |
| FV | Prefijo de los identificadores de requisitos planeados para futuras versiones (por ejemplo, FV-01). |
| Geocodificación | Proceso que convierte una dirección o un barrio en coordenadas geográficas, para calcular distancias. |
| HC | Prefijo de los identificadores de las funciones complementarias del producto (por ejemplo, HC01). |
| HTTPS | Protocolo de comunicación por Internet con cifrado (HTTP sobre TLS). |
| HU | Prefijo de los identificadores de las historias de usuario (por ejemplo, HU01). |
| Incremento | Parte del producto que se construye y se entrega por etapas: el incremento 1 es de parqueaderos, el 2 de espacios deportivos y el 3 de mejoras. |
| JSON | Formato de texto para intercambiar datos entre programas. |
| Liquidez de la plataforma | Situación en la que hay suficientes usuarios y anfitriones activos para que la oferta y la demanda de espacios se encuentren. |
| Marketplace horizontal | Plataforma digital que conecta oferta y demanda de diferentes categorías de productos o servicios; en este caso, diferentes tipos de espacios físicos. |
| Modelo de ingresos | Forma en que SPAZIO obtiene ingresos por las operaciones de la plataforma. En el MVP no se cobra comisión. |
| MVP | Producto Mínimo Viable. Primera versión funcional de SPAZIO, con las funcionalidades esenciales para validar la propuesta de valor. |
| PCI DSS | Estándar de seguridad para proteger los datos de las tarjetas de pago. |
| PMP | Plan de Administración del Proyecto. Documento que establece cómo se organiza, desarrolla y controla el proyecto SPAZIO. |
| Políticas de confianza | Reglas que establecen cómo se manejan situaciones como los daños en los espacios, los seguros y las disputas entre usuarios y anfitriones. |
| PSE | Pagos Seguros en Línea. Método de pago por transferencia desde una cuenta bancaria en Colombia. |
| Publicación | Información que un anfitrión registra para presentar un espacio en la plataforma: características, disponibilidad, precio y condiciones de uso. |
| REST | Estilo de diseño de APIs sobre HTTP. |
| Reserva | Acción con la que un usuario solicita y asegura el uso de un espacio disponible durante un periodo determinado. |
| RN | Prefijo de los identificadores de las reglas de negocio (por ejemplo, RN-01). |
| SRS | Documento de Requisitos del Sistema (Software Requirements Specification). |
| SUP | Prefijo de los identificadores de suposiciones (por ejemplo, SUP-01). |
| TLS | Seguridad de la capa de transporte. Protocolo que cifra la comunicación entre el navegador y el servidor. |
| Transacción | Operación realizada dentro de la plataforma, asociada con la reserva y el pago por el uso temporal de un espacio. |
| UI / UX | Interfaz de Usuario y Experiencia de Usuario. Elementos visuales y de interacción de la aplicación, y la experiencia que tiene la persona al usarla. |
| Usuario | Persona que utiliza SPAZIO para buscar espacios disponibles, compararlos, reservar y pagar. |
| Webhook | Aviso automático que un servicio externo envía a SPAZIO cuando ocurre un evento, como el resultado de un pago. |
| Wompi | Proveedor de pagos digitales que SPAZIO usa para cobrar las reservas. |

*Fuente: elaboración propia a partir del PMP de SPAZIO (§8.1 y §8.2).*

# 7. Descripción global

Esta sección presenta la información general del producto SPAZIO y los factores que afectan sus requisitos. Aquí no se especifican requisitos de forma detallada; eso se hace en la sección 8. La sección está escrita en lenguaje de usuario.

La información viene del Plan de Administración del Proyecto de SPAZIO (en adelante, PMP) y de la plantilla de SRS del curso. Las referencias entre paréntesis, por ejemplo (PMP 7.1.1), indican la sección del PMP donde está el dato. Lo que queda fuera de la primera versión se registra en la Tabla 20.

## 7.1 Perspectiva de producto

SPAZIO es un producto totalmente nuevo. No reemplaza a un sistema anterior, no es un componente de un sistema mayor y no pertenece a una familia de productos.

**Por qué se hace el producto.** En Bogotá hay espacios físicos que están vacíos gran parte del día, como parqueaderos, oficinas, bodegas o locales. El dueño no gana nada con ese espacio, y la persona que necesita un espacio por poco tiempo no encuentra opciones fáciles ni rápidas (PMP §3 y §7.1.1).

**Qué beneficios trae.** SPAZIO es un marketplace horizontal: junta en una sola aplicación a las personas que tienen un espacio disponible (anfitriones) con las personas que lo necesitan por un tiempo (usuarios). El usuario puede buscar, comparar, reservar y pagar. El anfitrión puede publicar su espacio, definir sus horarios, recibir reservas y cobrar por su uso. Una misma persona puede tener los dos roles con una sola cuenta (PMP §7.1.1).

**Contexto de la primera versión.** El producto se construye por incrementos. La primera versión (MVP) es una aplicación web, trabaja solo en la ciudad de Bogotá y con dos categorías: parqueaderos (incremento 1) y espacios deportivos (incremento 2). El incremento 3 se dedica a mejoras y, si hay tiempo y recursos, a otras categorías (PMP §9.1).

**Proceso general.** El PMP describe el proceso de alto nivel (PMP, Figura 2): el anfitrión publica un espacio y define horarios y precio; el usuario busca, reserva y paga; si el espacio está disponible, el sistema confirma la reserva y cobra, registra el uso del espacio y habilita la calificación. Si el espacio no está disponible, el usuario vuelve a buscar.

**Alternativas actuales.** Las alternativas con las que hoy cuentan las personas para publicar y encontrar espacios se documentan con la validación de la demanda en Bogotá, mediante encuestas, una lista de espera o un piloto manual (PMP §7.1.1).

### 7.1.1 Interfaces con el sistema

SPAZIO se comunica con dos sistemas externos:

* **Medio de pago digital (proveedor de pagos).** Sirve para que el usuario pague la reserva dentro de la aplicación (historias HU03 y HU07) y para devolverle el dinero cuando corresponda (RN-12). Se supone que existe un medio de pago digital en Bogotá que se puede integrar a la aplicación (PMP §7.1.2). El proveedor es Wompi, una pasarela de pagos colombiana con ambiente de pruebas que acepta tarjetas, PSE y Nequi. El backend de SPAZIO llama a la API del proveedor por HTTPS y el usuario escribe los datos de pago en los componentes del proveedor, de modo que SPAZIO no guarda datos de tarjeta. Se exige que el proveedor cumpla el estándar PCI DSS; para el intercambio con entidades financieras se sigue un estándar de seguridad de la información como la ISO 17799, hoy ISO/IEC 27002. El proveedor avisa el resultado del pago con un evento firmado (webhook) y SPAZIO también consulta el estado de la transacción; una transacción nueva está pendiente hasta que llega un estado final: aprobada, rechazada, anulada o con error. SPAZIO recibe el identificador de la transacción, su estado, el monto, la moneda, la referencia de la reserva y el tipo de método de pago. Si el pago es rechazado o da error, la reserva no se confirma y el usuario puede reintentar. En el MVP se usa el ambiente de pruebas, que no mueve dinero real.
* **Servicio de geocodificación.** Convierte una dirección o un barrio en coordenadas, para calcular distancias en la búsqueda (HU01 y HU05) y para ubicar cada espacio al publicarlo (HU02 y HU06). Se usa un servicio gratuito basado en datos de OpenStreetMap (Nominatim), sujeto a sus condiciones de uso, como el límite de consultas.

El motor de base de datos y la autenticación de usuarios no se consideran sistemas externos, porque forman parte de SPAZIO.

En el MVP no se verifica la identidad de las personas ni se conecta ningún servicio externo para ello; la confianza se apoya en las calificaciones (FV-05).

### 7.1.2 Interfaces con el usuario

Las personas usarán SPAZIO mediante una aplicación web con interfaz gráfica. Las pantallas principales que menciona el PMP son: búsqueda, publicación de espacios, reserva y gestión de espacios (PMP, Tabla 3, entregable de diseño de interfaz). Por las historias de usuario, también habrá pantallas para el pago y la calificación (PMP, Tabla 26), y por las funciones HC01 a HC04, pantallas de registro y acceso, de reservas recibidas y de gestión de publicaciones. En la pantalla de búsqueda, el usuario ve una lista de espacios con su horario y su precio (HU01 y HU05).

La aplicación se adapta a pantallas de computador y de celular, y se usa con teclado y mouse o con pantalla táctil. La interfaz está en español de Colombia. En el MVP no se fija un nivel formal de accesibilidad; se aplican buenas prácticas básicas: texto legible, etiquetas en los formularios y uso completo con teclado. El PMP propone React para el frontend (PMP §9.4), lo que es compatible con esta interfaz.

### 7.1.3 Interfaces con el hardware

SPAZIO no necesita interfaces con hardware específico: no controla dispositivos ni usa puertos o protocolos de hardware propios.

La ubicación actual del usuario es opcional: el navegador la entrega a SPAZIO solo si la persona da permiso.

### 7.1.4 Interfaces con el software

La Tabla 3 lista los productos de software que el PMP propone para construir y ejecutar SPAZIO. El PMP aclara que son propuestas y que el equipo debe confirmarlas antes de iniciar el primer incremento (PMP §9.5). Las herramientas que solo se usan para gestionar el proyecto (Git, GitHub, Visual Studio Code, Figma) no son interfaces del producto y no se incluyen.

**Tabla 3. Interfaces con el software**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Producto de software | Descripción | Versión | Propósito | Estado |
| Python con FastAPI | Lenguaje y framework del backend | Estable vigente al iniciar | Construir la API del sistema | Propuesta (PMP §9.4) |
| React | Biblioteca para el frontend | Estable vigente al iniciar | Construir las pantallas de búsqueda, publicación y reservas | Propuesta (PMP §9.4) |
| Supabase (PostgreSQL) | Servicio de base de datos en la nube, con autenticación de usuarios | Estable vigente al iniciar | Guardar usuarios, anfitriones, espacios, reservas y calificaciones; autenticar usuarios | Propuesta (PMP §9.4) |
| Servicio gratuito de hospedaje | Servicio para publicar el backend y el frontend | Estable vigente al iniciar | Ofrecer una versión de prueba del sistema, si el tiempo lo permite | Propuesta, no indispensable (PMP §9.4) |
| Navegador web del usuario | Programa con el que la persona usa SPAZIO, en computador o celular. | Versiones recientes | Ejecutar la parte del usuario (frontend en React). | Chrome, Edge, Firefox y Safari |

*Fuente: elaboración propia a partir del PMP de SPAZIO (§9.4 y §9.5).*

### 7.1.5 Interfaces de comunicación

SPAZIO necesita conexión a Internet para funcionar. El PMP propone que la parte que ve el usuario (frontend en React) se comunique con la parte del servidor mediante una API construida con FastAPI (PMP 9.4 y 9.5).

El navegador y el servidor se comunican con HTTP sobre TLS (HTTPS; RFC 9110 y RFC 8446), que a su vez usa TCP/IP (RFC 9293). La API sigue el estilo REST y sus mensajes van en formato JSON. El backend también usa HTTPS para hablar con el proveedor de pago y con el servicio de geocodificación (7.1.1), y una conexión cifrada con la base de datos. Los avisos del proveedor de pago llegan a una dirección HTTPS del backend. En el MVP no se fija una velocidad mínima de conexión.

### 7.1.6 Restricciones de memoria

SPAZIO se ejecuta en el navegador del usuario y en servicios con plan gratuito (PMP 9.4). Por eso, los límites de memoria y almacenamiento vienen de esos planes; el almacenamiento gratuito de Supabase podría llegar a su límite (PMP 11.4).

Con la plataforma web, el dispositivo del usuario solo necesita ejecutar un navegador reciente; no se exige tarjeta de video ni almacenamiento local especial. En el servidor, los límites vienen de los planes gratuitos: según la documentación pública de Supabase, consultada en septiembre de 2026, el plan gratuito ofrece 500 MB para la base de datos y 1 GB para archivos, como las fotografías; por eso cada publicación admite hasta 3 fotografías. Estos valores deben confirmarse antes de implementar. La memoria del servicio de hospedaje de FastAPI y React será la que ofrezca el plan gratuito que se elija, por lo que no se suman requisitos propios.

### 7.1.7 Operaciones

* **Modos de operación.** El PMP define dos roles, Usuario y Anfitrión, que la misma persona puede usar con una sola cuenta (PMP §7.1.1). El MVP no tiene modo administrador de la plataforma: la configuración y la revisión de datos las hace el equipo directamente sobre la base de datos. El rol administrador queda como requisito futuro (FV-06).
* **Periodos de actividad e inactividad.** El MVP no garantiza un horario continuo de servicio. El PMP dice que la disponibilidad no es crítica durante el desarrollo y que debe revisarse cuando haya pruebas con usuarios de Bogotá (PMP §9.4.2). Por eso, durante cada prueba con usuarios el sistema está activo en la ventana que el equipo anuncie, y el mantenimiento se hace fuera de esas ventanas. Como el plan gratuito de Supabase pausa los proyectos que pasan una semana sin actividad (documentación pública, 2026), el equipo comprueba que el proyecto esté activo antes de cada prueba.
* **Procesos de recuperación.** Se distinguen dos tipos de copias. Las del código y los documentos del proyecto están en el repositorio remoto de Git y en una carpeta compartida en la nube (PMP §9.4.1). Los datos de SPAZIO (usuarios, espacios, reservas, pagos y calificaciones) no quedan cubiertos por esas copias, por lo que se definen aparte: una exportación manual de la base de datos al terminar cada incremento y antes de cada prueba con usuarios, guardando las dos últimas en un lugar con acceso solo para el equipo. Para recuperar los datos se restaura la copia más reciente en una base de datos nueva. El plan gratuito de Supabase no incluye copias automáticas diarias; estas son del plan de pago (documentación pública, 2026).
* **Funciones de soporte a procesamiento de datos.** El procesamiento de pagos lo hace el proveedor de pago externo y el cálculo de coordenadas, el servicio de geocodificación (ver 7.1.1). No se identifican otros productos para procesar datos.

## 7.2 Funciones del producto

La Figura 1 muestra las funciones de SPAZIO y los actores que las usan. Las funciones HU tienen una historia de usuario definida en el PMP (Tablas 25 y 26; identificadores HU01 a HU07). Las funciones HC01 a HC04 complementan esas historias: cuenta y roles, reservas recibidas, pago al anfitrión y gestión de espacios publicados. Los actores externos son el proveedor de pago y el servicio de geocodificación (ver 7.1.1). Una misma persona puede actuar como Usuario y como Anfitrión con una sola cuenta.

![Diagrama](data:image/png;base64...)

**Figura 1. Diagrama de casos de uso de SPAZIO**

*Línea continua: un actor usa una función. Línea discontinua: la función usa un actor externo. Fuente: elaboración propia a partir del PMP de SPAZIO.*

### 7.2.1 Historias de usuario definidas

La Tabla 4 presenta las historias de usuario del PMP con su criterio de aceptación. Las historias HU05, HU06 y HU07 reutilizan el diseño y el desarrollo de HU01, HU02 y HU03, ajustados a espacios deportivos (PMP, Tabla 26).

**Tabla 4. Historias de usuario de SPAZIO**

|  |  |  |  |
| --- | --- | --- | --- |
| ID | Historia de usuario | Incremento | Criterio de aceptación (PMP, Tabla 26) |
| HU01 | Como usuario, quiero buscar parqueaderos disponibles cerca de una ubicación, para poder comparar opciones antes de reservar. | 1 – Parqueaderos | Buscar parqueaderos por ubicación y ver una lista con distancia, horario y precio. **(UX)** Mientras se consulta, la pantalla muestra un estado de carga; si no hay resultados, muestra un estado vacío con las acciones «Ampliar radio» y «Cambiar sitio»; cada resultado es seleccionable en toda su área. |
| HU02 | Como anfitrión, quiero publicar un parqueadero indicando los horarios en que está disponible, para que los usuarios lo puedan encontrar. | 1 – Parqueaderos | Publicar un parqueadero con dirección, horarios y precio. **(UX)** La acción de publicar permanece deshabilitada hasta que haya dirección, precio mayor que 0 y al menos un periodo válido; si un periodo se traslapa con otro, la aplicación lo rechaza con un mensaje específico y no lo guarda. |
| HU03 | Como usuario, quiero reservar y pagar un parqueadero dentro de la aplicación, para asegurar el espacio con anticipación. | 1 – Parqueaderos | Elegir un horario, confirmar la reserva y pagarla en la aplicación (pago simulado). **(UX)** El monto se muestra desglosado antes de pagar; un aviso visible indica que el pago es simulado; un temporizador muestra el tiempo restante de la retención de 10 minutos; y el resultado se presenta en una sola pantalla según corresponda: confirmada, pago no completado o expirada. |
| HU04 | Como usuario o anfitrión, quiero calificar a la otra persona después de usar el espacio, para aportar a la confianza dentro de la plataforma. | 1 – Parqueaderos | Calificar con una nota y un comentario al terminar el uso del espacio. |
| HU05 | Como usuario, quiero buscar espacios deportivos disponibles, para poder compararlos y elegir uno. | 2 – Espacios deportivos | Buscar espacios deportivos por ubicación y ver horario y precio. |
| HU06 | Como anfitrión, quiero publicar un espacio deportivo con sus horarios disponibles, para que los usuarios lo encuentren. | 2 – Espacios deportivos | Publicar un espacio deportivo con dirección, horarios y precio. |
| HU07 | Como usuario, quiero reservar y pagar un espacio deportivo, para asegurar mi turno. | 2 – Espacios deportivos | Elegir un horario, confirmar la reserva y pagarla en la aplicación. |

*Fuente: PMP de SPAZIO (Tablas 25 y 26). Las historias se ordenan por incremento (1: parqueaderos, 2: espacios deportivos); la prioridad de cada requisito se asigna en la sección 8.*

**Calificación en el incremento 2.** La calificación entre usuario y anfitrión también aplica a espacios deportivos, con las mismas reglas de HU04. Se reutilizan su diseño y su desarrollo, como ocurre con HU05 a HU07 (DEP-05).

### 7.2.2 Funciones complementarias

La Tabla 5 lista las funciones que complementan las historias de usuario: cuenta y roles, reservas recibidas, pago al anfitrión y gestión de espacios publicados. La comparación de espacios no se lista aparte, porque HU01 y HU05 ya la mencionan como objetivo de la búsqueda.

**Tabla 5. Funciones complementarias del producto**

|  |  |  |  |
| --- | --- | --- | --- |
| ID | Función | Fuente en el PMP | Alcance |
| HC01 | Gestionar cuenta y roles (registro, acceso y uso de los dos roles con una sola cuenta) | Alcance (§7.1.1): dos roles en la misma cuenta. Autenticación de Supabase propuesta (§9.4). Función deducida. | Registro con nombre, correo electrónico y contraseña; acceso con correo y contraseña; recuperación con un enlace enviado al correo. El rol de anfitrión se activa desde la misma cuenta al publicar el primer espacio, sin aprobación previa. No hay verificación de identidad en el MVP. |
| HC02 | Gestionar las reservas recibidas (anfitrión) | Alcance (§7.1.1): el anfitrión puede recibir las reservas que le hagan. | La reserva se confirma sola, sin que el anfitrión la acepte. El anfitrión ve las reservas recibidas dentro de la aplicación, sin avisos por correo, y puede cancelar una reserva confirmada; en ese caso el usuario recibe el reembolso completo. |
| HC03 | Recibir el pago por el uso del espacio (anfitrión) | Alcance (§7.1.1): el anfitrión puede cobrar por el uso. Figura 2: «Confirmar reserva y cobrar». | Sin comisión en el MVP: el anfitrión recibe el monto de la reserva. El pago queda habilitado cuando termina el uso; el desembolso se hace fuera de la aplicación y SPAZIO registra si está pendiente o pagado. Los reembolsos siguen RN-12. |
| HC04 | Gestionar los espacios publicados (por ejemplo, actualizar la disponibilidad) | Entregables (Tabla 3): «gestión de espacios» y «gestión básica». Supuesto: el anfitrión mantiene actualizada la disponibilidad (§7.1.2). | El anfitrión puede editar su publicación, pausarla, eliminarla y actualizar su disponibilidad. No puede quitar periodos ni eliminar la publicación si tiene reservas confirmadas por atender. |

*Fuente: elaboración propia a partir del PMP de SPAZIO.*

### 7.2.3 Escenarios principal y alternativo

El escenario principal sale del proceso de alto nivel del PMP (PMP, Figura 2):

1. El anfitrión publica un espacio disponible y define sus horarios y su precio.
2. El usuario busca espacios y elige uno.
3. El usuario reserva y paga el espacio.
4. El sistema revisa si el espacio está disponible y lo retiene mientras el usuario paga.
5. Si está disponible y el proveedor aprueba el pago, el sistema confirma la reserva y cobra (RN-10).
6. Cuando termina el periodo reservado, el sistema registra el uso del espacio.
7. El sistema habilita la calificación entre el usuario y el anfitrión (RN-13).

**Escenarios alternativos.** Estos casos se apartan del escenario principal:

* **Espacio no disponible (paso 4).** Si el periodo ya no está disponible, el usuario vuelve a buscar otro espacio y no se le cobra (PMP, Figura 2).
* **Pago rechazado o con error (paso 5).** La reserva no se confirma, el periodo se libera y el usuario puede reintentar el pago o elegir otro horario u otro espacio.
* **Pago no completado a tiempo.** Si el usuario no termina de pagar en 10 minutos, la reserva expira y el periodo se libera.
* **Búsqueda sin resultados (paso 2).** El sistema informa que no hay espacios en el radio indicado y permite ampliarlo o cambiar la ubicación.
* **Cancelación por el usuario.** Antes de que empiece el periodo reservado, el usuario puede cancelar; el reembolso sigue RN-12.
* **Cancelación por el anfitrión.** El anfitrión puede cancelar una reserva confirmada y el usuario recibe el reembolso completo (RN-12).
* **Daños y disputas.** Quedan fuera del MVP: no hay seguros ni mecanismo de disputa dentro de la aplicación (FV-03).

**Estados de la reserva.** Una reserva pasa por los estados siguientes y solo por estas transiciones:

* **Pendiente de pago.** Estado inicial: el usuario eligió el horario y el periodo queda retenido mientras paga. Pasa a confirmada si el pago es aprobado, o a expirada si el pago es rechazado o no se completa en 10 minutos.
* **Confirmada.** El pago fue aprobado. Pasa a cancelada si el usuario o el anfitrión la cancelan, o a finalizada cuando termina el periodo reservado.
* **Finalizada.** Terminó el uso del espacio y se habilita la calificación (RN-07 y RN-13).
* **Cancelada.** Se canceló antes de que empezara el periodo; el reembolso sigue RN-12.
* **Expirada.** El pago no se completó.

## 7.3 Características del usuario

El producto tiene dos clases de usuario: Usuario y Anfitrión. Una misma persona puede pertenecer a las dos clases con una sola cuenta. No hay otras clases de usuario en el MVP; el rol administrador es un requisito futuro (FV-06).

**Tabla 6. Descripción de las características del usuario**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Clase de usuario | Descripción y funciones | Frecuencia de uso | Experiencia técnica y nivel de estudios | Privilegios |
| Usuario | Persona en Bogotá que necesita un espacio físico por un tiempo corto. Busca y compara espacios, reserva, paga, cancela sus reservas y califica al anfitrión (HU01, HU03, HU04, HU05, HU07; HC01). | Ocasional: cuando necesita un espacio. | Básica: sabe usar un navegador o una aplicación en el celular y pagar en línea. No se exige un nivel de estudios. | Funciones del rol Usuario. Ve solo sus propias reservas, pagos y calificaciones. |
| Anfitrión | Persona que tiene un espacio disponible. Publica el espacio, define horarios y precio, recibe reservas, cobra y califica al usuario (HU02, HU04, HU06; HC01 a HC04). | Periódica: para mantener la disponibilidad y revisar reservas. | Básica: sabe usar un navegador o una aplicación en el celular y pagar en línea. No se exige un nivel de estudios. | Funciones del rol Anfitrión. Gestiona solo sus propios espacios y ve las reservas hechas sobre ellos. |

*Fuente: elaboración propia a partir del PMP de SPAZIO (§7.1.1 y §8.2).*

Usuarios y anfitriones son personas naturales mayores de 18 años con una sola cuenta; una empresa participa a través de una persona, y no se distinguen anfitriones persona natural de anfitriones empresa. La frecuencia de uso y la experiencia técnica se ajustan con la validación de la demanda en Bogotá (PMP, Tabla 16).

## 7.4 Restricciones

### 7.4.1 Restricciones generales

La Tabla 7 recoge las reglas de negocio que se pueden identificar en el PMP. Una regla de negocio es una condición o política de la organización; no es un requisito del sistema. En la sección 8, los requisitos que hagan cumplir estas reglas deberán referenciarlas por su identificador (RN-xx) y no repetirlas. Los tipos son: hecho, restricción, habilitador de acción, inferencia y cálculo.

**Tabla 7. Reglas de negocio de SPAZIO**

|  |  |  |  |
| --- | --- | --- | --- |
| ID | Regla de negocio | Tipo | Fuente |
| RN-01 | SPAZIO no compra ni vende espacios físicos como inmuebles; solo permite su uso temporal. | Restricción | PMP 7.1.1 (lo que no incluye el proyecto) |
| RN-02 | En la primera versión, SPAZIO opera solo en la ciudad de Bogotá. | Restricción | PMP 7.1.1 y 7.1.2 |
| RN-03 | El MVP maneja solo dos categorías de espacio: parqueaderos (incremento 1) y espacios deportivos (incremento 2). | Restricción | PMP 7.1.2 y 9.1 |
| RN-04 | Una misma persona puede ser usuario y anfitrión con una sola cuenta. | Hecho | PMP 7.1.1 |
| RN-05 | El anfitrión define los horarios de disponibilidad y el precio de su espacio. | Hecho | PMP 7.1.1, Figura 2 y Tabla 26 (HU02) |
| RN-06 | Un espacio solo se puede reservar en los periodos de disponibilidad publicados y mientras esté disponible. | Restricción | PMP 8.2 (Disponibilidad) y Figura 2 |
| RN-07 | Cuando el uso del espacio queda registrado, se habilita la calificación entre las partes. | Habilitador de acción | PMP Figura 2 y Tabla 26 (HU04) |
| RN-08 | El usuario y el anfitrión pueden calificarse entre sí. | Hecho | PMP 7.1.1 |
| RN-09 | SPAZIO debe cumplir las normas legales colombianas sobre pagos digitales y protección de datos personales. | Restricción | PMP 7.1.2 (sin detalle) |
| RN-10 | Una reserva pasa a confirmada solo si el periodo sigue disponible y el proveedor de pago aprueba el pago. | Inferencia | PMP, Figura 2 y Tabla 26 (HU03) |
| RN-11 | El monto de una reserva es el precio por hora del espacio multiplicado por las horas reservadas, en pesos colombianos (COP). En el MVP no se suma comisión. | Cálculo | PMP §7.1.1 (modelo de ingresos) |
| RN-12 | Si el usuario cancela una reserva confirmada con 24 horas o más de anticipación al inicio, se le reembolsa el 100 % del monto; con menos anticipación no hay reembolso. Si cancela el anfitrión, se reembolsa el 100 %. | Cálculo | PMP §7.1.1 (políticas de confianza) |
| RN-13 | Cada parte puede calificar una sola vez cada reserva finalizada, con una nota entera de 1 a 5 y un comentario, dentro de los 7 días siguientes al fin del uso. | Restricción | PMP Tabla 26 (HU04); complementa RN-07 y RN-08 |
| RN-14 | Los periodos de disponibilidad de una misma publicación no se traslapan, y un mismo periodo no puede tener dos reservas confirmadas. | Restricción | PMP §8.2 (Disponibilidad); complementa RN-06 |
| RN-15 | Solo pueden crear una cuenta las personas naturales mayores de 18 años. | Restricción | PMP §7.1.2 (confianza en la plataforma) |

*Fuente: elaboración propia a partir del PMP de SPAZIO. Hay reglas de los cinco tipos: hecho, restricción, habilitador de acción, inferencia y cálculo.*

**Políticas del producto.** Modelo de ingresos: sin comisión en el MVP (RN-11 y FV-02). Daños, seguros y disputas: fuera del MVP (DEP-03 y FV-03). Cancelación y reembolso: RN-12. Verificación de identidad: fuera del MVP (FV-05). No hay límites de duración ni de cantidad de reservas; solo aplica la disponibilidad publicada.

Otras restricciones generales que vienen del PMP:

* **Idioma y tolerancia a fallos.** La aplicación está en español de Colombia. El MVP no exige alta disponibilidad; ante una falla, la reserva solo se considera confirmada cuando el pago figura aprobado (RN-10).

### 7.4.2 Restricciones de software

* El PMP propone Python con FastAPI, React y Supabase (PostgreSQL); son propuestas por confirmar (ver Tabla 3). El producto es una aplicación web.
* Se planea usar planes gratuitos de los servicios; si un servicio llega a su límite, el equipo debe revisarlo antes de que afecte el sistema (PMP §11.4).
* **Licencias, versiones y sistema operativo.** Python, FastAPI, React y PostgreSQL se publican con licencias de código abierto o gratuitas, y Supabase ofrece un plan gratuito. El proveedor de pago tiene sus propios términos, que la persona acepta al pagar. Se usa la versión estable vigente de cada herramienta al iniciar el desarrollo, fijada en el repositorio. El sistema operativo del servidor es el del servicio de hospedaje que se elija; el equipo desarrolla en Windows, macOS o Linux (PMP §9.4).

### 7.4.3 Restricciones de hardware

Con la plataforma web, el dispositivo del usuario debe ejecutar una versión reciente de Chrome, Edge, Firefox o Safari, tener una pantalla de al menos 360 × 640 píxeles y conexión a Internet. No se exige un computador con características especiales ni una velocidad de red mínima.

## 7.5 Modelo de dominio

El modelo de dominio muestra los conceptos principales del problema y cómo se relacionan. Se construyó con los conceptos del PMP (§8.2), con las entidades del modelo de datos (PMP, Tabla 15) y con las historias de usuario. Las multiplicidades de la Figura 2 son preliminares y se confirmarán en el diseño.

Los tipos de dato se indican de forma general (texto, número, fecha y hora), porque el lenguaje y el motor de base de datos siguen siendo propuestas (PMP §9.5). Se concretarán en el modelo de datos.

El PMP (Tabla 15) nombra «usuario» y «anfitrión» como entidades del modelo de datos, pero también dice que son dos roles de una misma cuenta. Por eso el modelo muestra una Cuenta que actúa como Usuario y como Anfitrión. La forma final de guardarlos se decide en el diseño.

![Diagrama](data:image/png;base64...)

**Figura 2. Diagrama del modelo de dominio de SPAZIO**

*Gris: cuenta y roles. Azul: conceptos del dominio. Fuente: elaboración propia a partir del PMP de SPAZIO.*

**Tabla 8. Documentación del elemento DOM-01: Cuenta**

|  |  |  |
| --- | --- | --- |
| ID | DOM-01 | |
| Elemento del dominio | Cuenta | |
| Descripción | Registro de una persona en SPAZIO. Con una sola cuenta, la persona puede actuar como usuario y como anfitrión (PMP §7.1.1). | |
| Atributos | | |
| Nombre | **Descripción** | **Tipo de dato** |
| Nombre | Nombre de la persona. | Texto |
| Correo electrónico | Identifica a la persona, sirve para iniciar sesión y para recuperar el acceso. | Texto |
| Contraseña | Clave de acceso. La administra el servicio de autenticación propuesto (PMP §9.4). | Texto (protegido) |
| Rol de anfitrión activo | Indica si la persona ya activó el rol de Anfitrión. | Lógico (sí o no) |
| Objetivo | Identificar a la persona y permitirle usar los dos roles sin crear dos cuentas. | |

**Tabla 9. Documentación del elemento DOM-02: Usuario (rol)**

|  |  |  |
| --- | --- | --- |
| ID | DOM-02 | |
| Elemento del dominio | Usuario (rol) | |
| Descripción | Rol de la cuenta que busca espacios disponibles, los compara, reserva y paga (PMP §8.2). | |
| Atributos | | |
| Nombre | **Descripción** | **Tipo de dato** |
| Sin atributos propios | Los datos de la persona están en Cuenta (DOM-01); este rol no tiene atributos propios. | — |
| Objetivo | Representar a la persona cuando necesita usar un espacio por un tiempo. | |

**Tabla 10. Documentación del elemento DOM-03: Anfitrión (rol)**

|  |  |  |
| --- | --- | --- |
| ID | DOM-03 | |
| Elemento del dominio | Anfitrión (rol) | |
| Descripción | Rol de la cuenta que dispone de un espacio físico, lo publica, define su disponibilidad, recibe reservas y obtiene ingresos (PMP §8.2). | |
| Atributos | | |
| Nombre | **Descripción** | **Tipo de dato** |
| Sin atributos propios | Los datos de la persona están en Cuenta (DOM-01); este rol no tiene atributos propios. | — |
| Objetivo | Representar a la persona que ofrece espacios y recibe ingresos por su uso. | |

**Tabla 11. Documentación del elemento DOM-04: Espacio físico**

|  |  |  |
| --- | --- | --- |
| ID | DOM-04 | |
| Elemento del dominio | Espacio físico | |
| Descripción | Lugar que un anfitrión pone a disposición de los usuarios por un periodo determinado, como un parqueadero o un espacio deportivo (PMP §8.2). | |
| Atributos | | |
| Nombre | **Descripción** | **Tipo de dato** |
| Dirección | Lugar donde está el espacio. Se pide al publicar (HU02, HU06). | Texto |
| Ubicación | Coordenadas obtenidas a partir de la dirección, para calcular la distancia en la búsqueda. | Número (latitud y longitud) |
| Objetivo | Representar el lugar real que se ofrece, para poder buscarlo por ubicación (HU01, HU05). | |

**Tabla 12. Documentación del elemento DOM-05: Categoría**

|  |  |  |
| --- | --- | --- |
| ID | DOM-05 | |
| Elemento del dominio | Categoría | |
| Descripción | Clasificación que organiza los tipos de espacio: parqueaderos, almacenamiento, oficinas, eventos, deporte, estudios y espacios comerciales (PMP §8.2). El MVP usa solo parqueaderos y deporte. | |
| Atributos | | |
| Nombre | **Descripción** | **Tipo de dato** |
| Nombre | Nombre de la categoría. | Texto |
| Objetivo | Organizar los espacios y limitar el MVP a las categorías definidas (RN-03). | |

**Tabla 13. Documentación del elemento DOM-06: Publicación**

|  |  |  |
| --- | --- | --- |
| ID | DOM-06 | |
| Elemento del dominio | Publicación | |
| Descripción | Información que el anfitrión registra para presentar un espacio: sus características, su disponibilidad y sus condiciones de uso (PMP §8.2). | |
| Atributos | | |
| Nombre | **Descripción** | **Tipo de dato** |
| Título | Nombre corto con el que se muestra el espacio. | Texto |
| Características | Datos que describen el espacio según la categoría. Parqueadero: tipo de vehículo admitido (carro, moto o ambos) y si es cubierto. Espacio deportivo: deporte o actividad y capacidad de personas. | Texto y número |
| Precio | Valor por hora, en pesos colombianos (COP), que el anfitrión define para el uso del espacio (HU02, HU06). | Número (COP) |
| Condiciones de uso | Reglas que el anfitrión pone para usar el espacio, en texto libre. | Texto |
| Fotografías | Imágenes del espacio; son opcionales y se admiten hasta 3 por publicación. | Imagen (0 a 3) |
| Estado de la publicación | Indica si la publicación está activa o pausada por el anfitrión (HC04). | Texto |
| Objetivo | Mostrar el espacio a los usuarios con la información necesaria para compararlo y reservarlo. | |

**Tabla 14. Documentación del elemento DOM-07: Disponibilidad**

|  |  |  |
| --- | --- | --- |
| ID | DOM-07 | |
| Elemento del dominio | Disponibilidad | |
| Descripción | Periodos durante los cuales un espacio publicado puede ser reservado (PMP §8.2). | |
| Atributos | | |
| Nombre | **Descripción** | **Tipo de dato** |
| Inicio del periodo | Fecha y hora en que empieza el periodo disponible. | Fecha y hora |
| Fin del periodo | Fecha y hora en que termina el periodo disponible. | Fecha y hora |
| Repetición | Indica si el periodo es único o se repite cada semana en los mismos días y horas. | Texto |
| Objetivo | Definir cuándo se puede reservar un espacio (RN-06 y RN-14). | |

**Tabla 15. Documentación del elemento DOM-08: Reserva**

|  |  |  |
| --- | --- | --- |
| ID | DOM-08 | |
| Elemento del dominio | Reserva | |
| Descripción | Acción con la que un usuario solicita y asegura el uso de un espacio disponible durante un periodo (PMP §8.2). | |
| Atributos | | |
| Nombre | **Descripción** | **Tipo de dato** |
| Periodo reservado | Horario que el usuario elige al reservar, en horas completas dentro de un periodo disponible (HU03, HU07). | Fecha y hora (inicio y fin) |
| Estado | Situación de la reserva: pendiente de pago, confirmada, finalizada, cancelada o expirada (7.2.3). | Texto |
| Cancelada por | Quién canceló la reserva, el usuario o el anfitrión, si aplica. | Texto |
| Objetivo | Registrar el acuerdo entre usuario y anfitrión para usar un espacio en un periodo. | |

**Tabla 16. Documentación del elemento DOM-09: Transacción**

|  |  |  |
| --- | --- | --- |
| ID | DOM-09 | |
| Elemento del dominio | Transacción | |
| Descripción | Operación asociada con la reserva y el pago por el uso temporal de un espacio (PMP §8.2). | |
| Atributos | | |
| Nombre | **Descripción** | **Tipo de dato** |
| Monto | Valor pagado por la reserva, en COP: precio por hora por horas reservadas, sin comisión en el MVP (RN-11). | Número (COP) |
| Estado del pago | Pendiente, aprobada, rechazada, anulada, con error o reembolsada. | Texto |
| Identificador del proveedor | Código de la transacción en el proveedor de pago, para consultar su estado. | Texto |
| Método de pago | Tipo de método usado, como tarjeta, PSE o Nequi. No incluye datos de tarjeta. | Texto |
| Fecha y hora | Momento en que se registró la transacción. | Fecha y hora |
| Estado del pago al anfitrión | Pendiente o pagado. | Texto |
| Objetivo | Registrar el pago de la reserva (HU03, HU07) y el pago al anfitrión (HC03). | |

**Tabla 17. Documentación del elemento DOM-10: Calificación**

|  |  |  |
| --- | --- | --- |
| ID | DOM-10 | |
| Elemento del dominio | Calificación | |
| Descripción | Valoración que el usuario o el anfitrión hace sobre la otra parte después de usar el espacio, como mecanismo de confianza (PMP §8.2). | |
| Atributos | | |
| Nombre | **Descripción** | **Tipo de dato** |
| Nota | Valoración numérica entera de 1 a 5 (HU04). | Número |
| Comentario | Texto que acompaña la nota, de hasta 500 caracteres (HU04). | Texto |
| Autor | Indica si califica el usuario o el anfitrión (RN-08). | Referencia al rol |
| Fecha | Momento en que se hizo la calificación; permite comprobar el plazo de 7 días (RN-13). | Fecha y hora |
| Objetivo | Aportar confianza entre las partes de la plataforma. | |

*Fuente: elaboración propia a partir del PMP de SPAZIO (§8.2, Tablas 15 y 26).*

## 7.6 Suposiciones y dependencias

La Tabla 18 lista los factores que afectan los requisitos. Solo se incluyen las suposiciones del PMP que se relacionan con el producto; las que tratan del equipo o del curso (por ejemplo, el tiempo y los conocimientos del equipo) pertenecen al PMP. Si una suposición resulta falsa o una dependencia no se cumple, los requisitos relacionados pueden cambiar.

**Tabla 18. Suposiciones y dependencias**

|  |  |  |  |
| --- | --- | --- | --- |
| ID | Tipo | Descripción | Efecto si no se cumple |
| SUP-01 | Suposición | En Bogotá hay suficientes espacios que no se usan todo el tiempo, y sus dueños los alquilarían por poco tiempo (PMP §7.1.2). | No habría espacios publicados y las historias de búsqueda y reserva perderían sentido. |
| SUP-02 | Suposición | En Bogotá hay personas que necesitan espacios por periodos cortos y hoy no tienen una forma fácil de encontrarlos (PMP §7.1.2). | No habría demanda para validar el producto. |
| SUP-03 | Suposición | La demanda en parqueaderos y espacios deportivos es suficiente para que la plataforma funcione desde el inicio (PMP §7.1.2). | Podría cambiar la elección de las categorías del MVP (RN-03). |
| SUP-04 | Suposición | Las personas confiarán en una aplicación para reservar y pagar, si tiene seguridad como verificación de identidad o calificaciones (PMP §7.1.2). | Podrían hacer falta funciones de confianza adicionales, como la verificación de identidad (FV-05). |
| SUP-05 | Suposición | Los anfitriones mantendrán actualizada la disponibilidad de sus espacios (PMP §7.1.2). | Podrían aparecer espacios que no están realmente disponibles (ver RN-06). |
| SUP-06 | Suposición | Las personas que usan SPAZIO tienen un computador o un celular con un navegador reciente y conexión a Internet. | Habría que ofrecer otra forma de acceso, como una aplicación móvil nativa (FV-08). |
| DEP-01 | Dependencia | Existe un medio de pago digital en Bogotá que se puede integrar a la aplicación (PMP §7.1.2). Se propone Wompi, con su ambiente de pruebas. | No se podría cumplir el pago dentro de la aplicación (HU03, HU07) y habría que cambiar de proveedor. |
| DEP-02 | Dependencia | Las herramientas propuestas (Python, FastAPI, React, Supabase) se confirman y sus planes gratuitos alcanzan para el MVP (PMP §9.5 y §11.4). | Cambiarían las interfaces de software y las restricciones (7.1.4 y 7.4.2). |
| DEP-03 | Dependencia | El equipo define más adelante el modelo de ingresos y las políticas de daños, seguros y disputas (PMP §7.1.2). Mientras tanto, el MVP no cobra comisión ni incluye esos mecanismos. | Hasta entonces no se pueden escribir requisitos sobre comisiones, daños o disputas. |
| DEP-04 | Dependencia | El equipo precisa las normas colombianas de pagos digitales y protección de datos personales que aplican (PMP §7.1.2). | Podrían aparecer requisitos de seguridad y de manejo de datos personales. |
| DEP-05 | Dependencia | Las historias del incremento 2 (HU05 a HU07) reutilizan el diseño y el desarrollo del incremento 1 (PMP, Tabla 26). | Un cambio en HU01 a HU03 puede afectar HU05 a HU07. |
| DEP-06 | Dependencia | Existe un servicio gratuito de geocodificación (propuesta: Nominatim de OpenStreetMap) y sus condiciones de uso alcanzan para el MVP. | Habría que cambiar de servicio o pedir la ubicación de otra forma, por ejemplo solo por barrio. |

*Fuente: elaboración propia a partir del PMP de SPAZIO.*

## 7.7 Distribución de requisitos

Esta sección relaciona las funciones del producto con módulos preliminares. Los módulos se agrupan según los artefactos de diseño que el PMP asocia a cada historia (PMP, Tabla 26). La arquitectura de software todavía no está definida (PMP, Tabla 3), por lo que estos módulos son una agrupación funcional inicial y pueden cambiar.

Como la sección 8 todavía no está escrita, el mapeo se hace a nivel de historia de usuario. La última columna se completará con los identificadores de los requisitos cuando se especifiquen.

**Tabla 19. Distribución de requisitos por módulo**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Módulo | Nombre (preliminar) | Funciones | Incremento | Requisitos (sección 8) |
| M-01 | Búsqueda de espacios | HU01, HU05 | 1 y 2 | Por asignar |
| M-02 | Publicación y disponibilidad | HU02, HU06; HC04 | 1 y 2 | Por asignar |
| M-03 | Reservas y pagos | HU03, HU07; HC02 y HC03; cancelaciones | 1 y 2 | Por asignar |
| M-04 | Calificaciones | HU04 | 1 y 2 | Por asignar |
| M-05 | Cuentas y roles | HC01 | 1 | Por asignar |

*Fuente: elaboración propia a partir del PMP de SPAZIO (Tablas 25 y 26). HU: historia definida en el PMP. HC: función complementaria (Tabla 5).*

**Requisitos para futuras versiones.** La Tabla 20 lista lo que queda para más adelante o fuera de la primera versión.

**Tabla 20. Requisitos planeados para futuras versiones**

|  |  |  |
| --- | --- | --- |
| ID | Descripción | Situación en el PMP |
| FV-01 | Incorporar otras categorías de espacio: almacenamiento, oficinas, eventos, estudios y espacios comerciales. | Posible en el incremento 3, según el tiempo y los recursos (PMP §9.1). |
| FV-02 | Modelo de ingresos definitivo (por ejemplo, comisión por transacción o tarifa al anfitrión). | Modelo de cobro definitivo. El MVP no cobra comisión. |
| FV-03 | Políticas de confianza: daños, seguros y disputas entre usuarios y anfitriones. | Quedan fuera del MVP; se definen en una versión futura. |
| FV-04 | Expansión a otras ciudades distintas de Bogotá. | Fuera de la primera versión; podría pensarse más adelante (PMP §7.1.1). |
| FV-05 | Verificación de identidad de usuarios y anfitriones. | El MVP no verifica la identidad; la confianza se apoya en las calificaciones. |
| FV-06 | Rol administrador de la plataforma (revisar publicaciones, resolver disputas, configuración general). | El MVP no tiene rol administrador; el equipo gestiona los datos directamente. |
| FV-07 | Desembolso automático del dinero al anfitrión desde la plataforma. | El MVP solo registra si el pago al anfitrión está pendiente o pagado; el desembolso se hace fuera de la aplicación. |
| FV-08 | Aplicación móvil nativa. | El MVP es una aplicación web adaptable a celular. |
| FV-09 | Avisos por correo o mensaje (nuevas reservas, cancelaciones, recordatorios). | El MVP muestra los avisos solo dentro de la aplicación. |

*Fuente: elaboración propia a partir del PMP de SPAZIO.*

# Requisitos específicos

Esta sección traduce en requisitos verificables lo que se presentó de forma general en la sección 7. Cada requisito parte de una historia de usuario (HU) o de una función complementaria (HC), sigue las reglas de negocio (RN) de 7.4 y queda ubicado en un módulo (M) de 7.7, de modo que se conserva la trazabilidad Historia de usuario → Regla de negocio → Requisito → Módulo → Criterio de medición. Los requisitos se agrupan en funcionales (RF), no funcionales (RNF) y de información (RI).

## 8.1 Actores

La Tabla 21 presenta los actores que interactúan con SPAZIO, dos internos (personas) y dos externos (sistemas), ya introducidos en 7.1.1 y 7.3.

**Tabla 22. Actores de SPAZIO**

|  |  |
| --- | --- |
| Actor | Descripción |
| Usuario | Persona que busca, compara, reserva, paga y cancela el uso de un espacio, y que califica al anfitrión. |
| Anfitrión | Persona que publica un espacio, define su disponibilidad y su precio, gestiona las reservas recibidas, cobra por el uso y califica al usuario. |
| Proveedor de pago | Sistema externo (Wompi) que procesa el pago de la reserva y avisa a SPAZIO el resultado de la transacción. |
| Servicio de geocodificación | Sistema externo que convierte una dirección o un barrio en coordenadas, para la búsqueda por ubicación y para publicar un espacio. |

*Fuente: elaboración propia a partir del PMP de SPAZIO (7.1.1) y de la sección 7.1.1 de este documento.*

## 8.2 Objetivos

Cada actor interno persigue objetivos concretos dentro de SPAZIO, que se traducen en los requisitos funcionales de 8.3:

* **Usuario.** Encontrar un espacio adecuado cerca de una ubicación, compararlo con otros, reservarlo y pagarlo con seguridad, y dejar constancia de su experiencia mediante una calificación.
* **Anfitrión.** Publicar un espacio con su disponibilidad y su precio, recibir reservas sin gestión manual adicional, cobrar por el uso del espacio y conocer la opinión del usuario.
* **Usuario y Anfitrión.** Acceder a la plataforma con una sola cuenta y usar ambos roles cuando lo necesiten, con confianza en que sus datos y su dinero están protegidos.

## 8.3 Requisitos funcionales

La Tabla 19 (7.7) ubica cada requisito funcional en su módulo. Los identificadores HU, HC y RN citados en cada ficha remiten a las tablas 4, 5 y 6 de la sección 7.

**RF-01. Buscar espacios disponibles por ubicación**

|  |  |
| --- | --- |
| **Campo** | **Valor** |
| ID | RF-01 |
| Tipo | Funcional |
| Historias de uso asociadas | HU01 |
| Descripción | El sistema permite al usuario indicar una dirección, un barrio o su ubicación actual, y muestra los parqueaderos disponibles dentro de un radio de 1 km, con su distancia, horario y precio. El usuario puede ampliar el radio de búsqueda. Mientras se procesa la consulta, el sistema muestra un estado de carga; si no hay resultados en la zona, muestra un estado vacío con las opciones de ampliar el radio o cambiar la ubicación, y solo en ese caso se muestra ese mensaje. Cada resultado de la lista es seleccionable en toda su área para abrir el detalle. |
| Razón | Sin una búsqueda por ubicación el usuario no puede encontrar parqueaderos cercanos, que es el punto de partida de HU01. El estado de carga y el estado vacío mantienen visible el estado del sistema (usabilidad). |
| Autor | Equipo SPAZIO |
| Criterio de medición | (1) Dada una ubicación con al menos un parqueadero disponible en el radio configurado, el sistema muestra la lista con distancia, horario y precio en menos de 3 segundos, y el mensaje de «sin resultados» no aparece. (2) Si no hay parqueaderos en el radio, el sistema muestra el estado vacío con las acciones «Ampliar radio» y «Cambiar sitio». (3) Al seleccionar cualquier parte de una tarjeta de resultado, se abre el detalle del parqueadero. |
| Prioridad | Alta |
| Módulo asociado | M-01 |
| Versión | 0.3 |
| Fecha | 13/10/2026 |

**RF-03. Publicar un espacio**

|  |  |
| --- | --- |
| **Campo** | **Valor** |
| ID | RF-03 |
| Tipo | Funcional |
| Historias de uso asociadas | HU02 |
| Descripción | El sistema permite al anfitrión crear una publicación con categoría (parqueadero en esta versión), dirección, características según la categoría, precio por hora, condiciones de uso y hasta 3 fotografías (opcionales, de 0 a 3), y guardarla como activa. La acción de publicar permanece deshabilitada mientras falten los datos obligatorios (dirección, precio por hora mayor que 0 y al menos un periodo de disponibilidad válido), e indica qué falta. El precio se valida como un valor mayor que 0 y se muestra con formato de miles. Al guardar la primera publicación de una cuenta, el sistema activa el rol de anfitrión sobre esa misma cuenta, sin aprobación previa, e informa al anfitrión de que su rol quedó activado. |
| Razón | HU02 pide que el anfitrión pueda publicar un espacio con sus horarios y su precio para que los usuarios lo encuentren. La validación previa y el aviso de activación del rol previenen errores y mantienen informado al usuario (usabilidad). |
| Autor | Equipo SPAZIO |
| Criterio de medición | (1) Con los campos obligatorios completos (categoría, dirección, precio mayor que 0 y un periodo válido) y al guardar, la publicación aparece en los resultados de búsqueda que correspondan a su categoría y ubicación. (2) Si falta un dato obligatorio o el precio es 0, el sistema no permite publicar e indica el dato faltante. (3) Si es la primera publicación de la cuenta, el rol de anfitrión queda activo de inmediato y el sistema lo informa. |
| Prioridad | Alta |
| Módulo asociado | M-02 |
| Versión | 0.3 |
| Fecha | 13/10/2026 |

**RF-05. Definir la disponibilidad de un espacio**

|  |  |
| --- | --- |
| **Campo** | **Valor** |
| ID | RF-05 |
| Tipo | Funcional |
| Historias de uso asociadas | HU02, RN-06, RN-14 |
| Descripción | El sistema permite al anfitrión crear periodos de disponibilidad, únicos o repetidos cada semana, sin que se traslapen entre sí, como parte del flujo de publicación de un espacio (RF-03). Cuando un periodo se traslapa con otro ya existente, el sistema no lo guarda y muestra un mensaje de error específico que indica con qué periodo se cruza y sugiere elegir otra fecha u horas que no se superpongan. |
| Razón | Un espacio solo se puede reservar en los periodos que su anfitrión publicó y mientras estén disponibles (RN-06 y RN-14). HU02 pide publicar con horarios disponibles. El mensaje de error específico ayuda al usuario a corregir el problema (usabilidad). |
| Autor | Equipo SPAZIO |
| Criterio de medición | (1) Al guardar un periodo que se traslapa con otro ya existente de la misma publicación, el sistema lo rechaza y muestra un mensaje que identifica el periodo en conflicto. (2) Un periodo sin traslape se guarda y queda disponible para reservar, y el contador de periodos agregados se actualiza. |
| Prioridad | Alta |
| Módulo asociado | M-02 |
| Versión | 0.3 |
| Fecha | 13/10/2026 |

**RF-06. Reservar y pagar un espacio**

|  |  |
| --- | --- |
| **Campo** | **Valor** |
| ID | RF-06 |
| Tipo | Funcional |
| Historias de uso asociadas | HU03 |
| Descripción | El sistema permite al usuario elegir horas completas dentro de un periodo disponible, ver el monto a pagar desglosado (precio por hora × horas) en el mismo detalle del espacio antes de pagar, y completar el pago simulado con la pasarela propia del proyecto, sin salir de la aplicación. El sistema valida la selección de horario: si la hora de salida es anterior o igual a la de entrada, o si el rango queda fuera del horario disponible del espacio, no permite continuar y lo indica. Antes de ir al pago, el sistema aclara que aún no se realiza ningún cobro y que el pago es simulado. |
| Razón | HU03 pide reservar y pagar un espacio dentro de la aplicación (pago simulado), para asegurarlo con anticipación. La validación del horario y el aviso de no cobro previenen errores y reducen la incertidumbre del usuario (usabilidad). |
| Autor | Equipo SPAZIO |
| Criterio de medición | (1) Al elegir un horario válido, el usuario ve el monto desglosado y correcto (precio por hora × horas) antes de pagar. (2) Si la salida es anterior o igual a la entrada, o el rango excede el horario disponible, el sistema no permite reservar y muestra el motivo. (3) En el paso de pago aparece el aviso visible de pago simulado y, al completar un pago simulado válido, el sistema muestra una confirmación. |
| Prioridad | Alta |
| Módulo asociado | M-03 |
| Versión | 0.3 |
| Fecha | 13/10/2026 |

**RF-07. Confirmar automáticamente una reserva**

|  |  |
| --- | --- |
| **Campo** | **Valor** |
| ID | RF-07 |
| Tipo | Funcional |
| Historias de uso asociadas | HU03, RN-10 |
| Descripción | El sistema retiene el periodo elegido durante 10 minutos mientras se procesa el pago simulado, y confirma la reserva sola cuando la pasarela simulada aprueba el pago y el periodo sigue disponible. Durante la retención, el sistema muestra un temporizador con el tiempo restante que gana énfasis visual en el último minuto; al agotarse, la reserva pasa a expirada. El resultado del pago se presenta en una sola pantalla a la vez, según corresponda: confirmada, pago no completado (rechazado o sin respuesta) o expirada, cada una con la acción siguiente adecuada. |
| Razón | La reserva se confirma sin que el anfitrión la acepte manualmente (RN-10), lo que exige que el sistema controle la retención y la confirmación automática del periodo. El temporizador visible y la pantalla de resultado única mantienen informado al usuario y evitan confusión (usabilidad). |
| Autor | Equipo SPAZIO |
| Criterio de medición | (1) Con un pago simulado aprobado dentro de los 10 minutos, la reserva pasa a confirmada y se muestra la pantalla de confirmación. (2) Si el pago es rechazado o da error, se muestra la pantalla de pago no completado, con opción de reintentar mientras la retención siga vigente. (3) Si transcurren los 10 minutos sin completar el pago, el periodo se libera, la reserva pasa a expirada y se muestra la pantalla de expiración con la opción de buscar otro horario. En ningún momento se muestran a la vez dos resultados distintos. |
| Prioridad | Alta |
| Módulo asociado | M-03 |
| Versión | 0.3 |
| Fecha | 13/10/2026 |

**RF-08. Cancelar una reserva y calcular el reembolso**

|  |  |
| --- | --- |
| **Campo** | **Valor** |
| ID | RF-08 |
| Tipo | Funcional |
| Historias de uso asociadas | HU03, RN-12 |
| Descripción | El sistema permite al usuario cancelar, desde su lista de reservas (RF-15), una reserva confirmada antes de que empiece el periodo, aplicando el reembolso según RN-12. El reembolso es simulado. Antes de confirmar, el sistema muestra en un diálogo el reembolso que se aplicará (100 % si faltan 24 horas o más; 0 % si falta menos de 24 horas) y advierte que la cancelación no se puede deshacer y libera el periodo. La acción de confirmar la cancelación se presenta de forma diferenciada por tratarse de una acción irreversible. |
| Razón | RN-12 define el reembolso según la anticipación con que cancela el usuario; el sistema debe calcularlo sin intervención manual. Mostrar el reembolso antes de confirmar y advertir que es irreversible previene errores y evita sorpresas (usabilidad). |
| Autor | Equipo SPAZIO |
| Criterio de medición | (1) Antes de confirmar, el diálogo muestra el porcentaje y el monto de reembolso correctos según la anticipación (100 % con 24 h o más; 0 % con menos de 24 h). (2) Al confirmar con 24 horas o más de anticipación, el sistema registra un reembolso simulado del 100 % del monto; con menos de 24 horas, registra un reembolso del 0 %. (3) Tras confirmar, la reserva queda cancelada, el periodo se libera y el estado se refleja en la lista de reservas. |
| Prioridad | Alta |
| Módulo asociado | M-03 |
| Versión | 0.3 |
| Fecha | 13/10/2026 |

**RF-12. Registrarse en SPAZIO**

|  |  |
| --- | --- |
| **Campo** | **Valor** |
| ID | RF-12 |
| Tipo | Funcional |
| Historias de uso asociadas | HC01 |
| Descripción | El sistema permite crear una cuenta con nombre, correo electrónico y contraseña, validando que el correo tenga un formato válido y que no esté registrado. El campo de contraseña indica su requisito mínimo (al menos 8 caracteres) y permite mostrar u ocultar lo escrito. El registro requiere la aceptación explícita de los Términos de uso y la Política de privacidad (enlaces visibles). Si el correo ya existe, el sistema lo indica y ofrece ir a iniciar sesión. |
| Razón | HC01 pide que la persona pueda registrarse para usar la aplicación con sus dos roles. La ayuda de contraseña, la validación del correo y el consentimiento explícito previenen errores y apoyan el cumplimiento de datos personales (RNF-08). |
| Autor | Equipo SPAZIO |
| Criterio de medición | (1) Con un correo con formato válido no registrado, una contraseña de al menos 8 caracteres y la aceptación de los términos, la cuenta se crea y queda disponible para iniciar sesión. (2) Con un correo ya registrado, el sistema rechaza el registro, lo indica con un mensaje claro y ofrece ir a iniciar sesión. (3) Con un correo de formato inválido o una contraseña demasiado corta, el sistema lo señala en el campo antes de enviar. |
| Prioridad | Alta |
| Módulo asociado | M-05 |
| Versión | 0.3 |
| Fecha | 13/10/2026 |

**RF-13. Iniciar sesión**

|  |  |
| --- | --- |
| **Campo** | **Valor** |
| ID | RF-13 |
| Tipo | Funcional |
| Historias de uso asociadas | HC01 |
| Descripción | El sistema permite iniciar sesión con correo y contraseña. Si las credenciales son incorrectas, muestra un mensaje de error claro sobre el formulario y marca los campos afectados, sin revelar cuál de los dos datos falló. Durante el proceso, el botón de iniciar sesión muestra un estado de carga y se deshabilita para evitar envíos repetidos. La recuperación de acceso queda diferida, pero la interfaz reserva su lugar. |
| Razón | HC01 pide acceso con correo y contraseña. El mensaje de error y el estado de carga ayudan al usuario a recuperarse del error y evitan acciones duplicadas (usabilidad). |
| Autor | Equipo SPAZIO |
| Criterio de medición | (1) Con un correo y una contraseña correctos, el sistema inicia la sesión y lleva al usuario a la búsqueda. (2) Con datos incorrectos, el sistema rechaza el ingreso y muestra el mensaje «Correo o contraseña incorrectos». (3) Mientras valida, el botón permanece en estado de carga y no admite un segundo envío. |
| Prioridad | Alta |
| Módulo asociado | M-05 |
| Versión | 0.3 |
| Fecha | 13/10/2026 |

**RF-15. Consultar mis reservas**

|  |  |
| --- | --- |
| **Campo** | **Valor** |
| ID | RF-15 |
| Tipo | Funcional |
| Historias de uso asociadas | HU03, RN-12 |
| Descripción | El sistema muestra al usuario, dentro de la aplicación, la lista de sus reservas con el espacio, la fecha y el horario, el monto y el estado (confirmada, cancelada o expirada), y le permite iniciar desde esa lista la cancelación de una reserva confirmada según RF-08. Cuando el usuario no tiene reservas, el sistema muestra un estado vacío con un mensaje y un acceso directo para buscar un parqueadero. En las reservas que no se pueden cancelar (canceladas o expiradas), el sistema explica brevemente el motivo en lugar de ofrecer la acción. La lista se adapta a pantallas pequeñas mostrando cada reserva como una tarjeta (RNF-04). |
| Razón | El usuario necesita volver a encontrar sus reservas después de pagar, y sin esa lista no podría cancelarlas, que es lo que exige RF-08. El estado vacío, el motivo de no-cancelable y la adaptación a móvil mejoran la comprensión y el uso (usabilidad). |
| Autor | Equipo SPAZIO |
| Criterio de medición | (1) Al confirmarse una reserva, esta aparece en la lista con su estado actualizado. (2) Al cancelarla desde la lista, el estado cambia a cancelada y se muestra el reembolso simulado aplicado. (3) Si el usuario no tiene reservas, se muestra el estado vacío con el acceso a buscar parqueadero. (4) En una pantalla de 360 × 640 píxeles, cada reserva se presenta como una tarjeta legible, sin desbordar el ancho. |
| Prioridad | Alta |
| Módulo asociado | M-03 |
| Versión | 0.3 |
| Fecha | 13/10/2026 |

### **Requisitos diferidos**

Estos requisitos salen del alcance del incremento 1 por la estimación de esfuerzo (81 PFSA y 75 PFA, para 7 semanas y 3 personas). Su texto original se conserva en el SRS v0.1.

|  |  |  |  |
| --- | --- | --- | --- |
| **Requisito** | **Estado** | **Orden de reincorporación** | **Nota** |
| RF-09 Gestionar las reservas recibidas | Diferido | 1 | Reserva de alcance del PMP. No entra junto con RF-15 sin superar la capacidad a 6 h/PF. Al reincorporarlo se puede restituir la cancelación por parte del anfitrión en RF-08. |
| RF-11 Calificar a la otra parte | Diferido | 2 | HU04 se mueve a incremento posterior en el PMP. |
| RF-02 Comparar y ordenar los resultados | Diferido | 3 | Bajo costo. |
| RF-04 Editar, pausar y eliminar una publicación | Diferido | 4 | Mientras tanto, las correcciones se hacen directamente en la base de datos. |
| RF-10 Registrar el pago al anfitrión | Diferido | 5 |  |
| RF-14 Activar el rol de anfitrión | Absorbido por RF-03 | N/A | Ya no es un requisito aparte. |

Fuera de alcance: incremento 2 (espacios deportivos, HU05 a HU07, hoja de ruta) y los requisitos futuros FV-01 a FV-09.

### **Recortes dentro de requisitos Alta**

|  |  |  |
| --- | --- | --- |
| **Requisito** | **Qué se recortó** | **Siguiente recorte si hace falta** |
| RF-05 | Quitar un periodo de disponibilidad y el listado "Mis publicaciones" (la disponibilidad se define al publicar). | Dejar solo periodos únicos, sin repetición semanal. |
| RF-06 | Pantalla aparte de resumen del monto (va dentro del detalle del espacio). | N/A |
| RF-08 | Cancelación por parte del anfitrión, diferida junto con RF-09. | N/A |
| RF-13 | Recuperación de acceso por correo. | N/A |

## 8.4 Requisitos no funcionales

Los requisitos no funcionales describen cualidades del sistema, no funciones puntuales, y se apoyan en las restricciones de 7.1 y 7.4.

RNF-01. Seguridad de los datos de pago

|  |  |
| --- | --- |
| ID | RNF-01 |
| Tipo | No funcional |
| Historias de uso asociadas | HU03, HU07 |
| Descripción | El sistema no almacena datos de tarjeta ni de método de pago sensible; esos datos se capturan y se procesan en los componentes del proveedor de pago, que cumple el estándar PCI DSS. |
| Razón | El pago se hace dentro de la aplicación, pero delegar la captura de datos sensibles al proveedor reduce el riesgo para SPAZIO y para el usuario. |
| Autor | Equipo SPAZIO |
| Criterio de medición | Una revisión de la base de datos de SPAZIO no encuentra números de tarjeta, códigos de seguridad ni fechas de vencimiento almacenados en ningún registro. |
| Prioridad | Alta |
| Módulo asociado | M-03 |
| Versión | 0.1 |
| Fecha | 28/09/2026 |

RNF-02. Comunicación cifrada

|  |  |
| --- | --- |
| ID | RNF-02 |
| Tipo | No funcional |
| Historias de uso asociadas | Todas |
| Descripción | Todas las comunicaciones entre el navegador y el servidor, y entre el servidor y los sistemas externos (proveedor de pago, servicio de geocodificación), usan HTTPS con TLS. |
| Razón | Los datos de cuenta, reserva y pago viajan por Internet y deben protegerse contra intercepción. |
| Autor | Equipo SPAZIO |
| Criterio de medición | Una revisión de las direcciones que usa la aplicación (frontend, backend, proveedor de pago, geocodificación) muestra que todas empiezan por https://, sin ninguna en http:// simple. |
| Prioridad | Alta |
| Módulo asociado | M-05 |
| Versión | 0.1 |
| Fecha | 28/09/2026 |

RNF-03. Compatibilidad con navegadores

|  |  |
| --- | --- |
| ID | RNF-03 |
| Tipo | No funcional |
| Historias de uso asociadas | HC01 |
| Descripción | La aplicación funciona en las versiones recientes de Chrome, Edge, Firefox y Safari, en computador y en celular. |
| Razón | El producto es una aplicación web y debe llegar a los navegadores que usan los usuarios y anfitriones de Bogotá. |
| Autor | Equipo SPAZIO |
| Criterio de medición | Las funciones de búsqueda, publicación, reserva, pago y calificación se prueban y funcionan sin errores visuales ni de funcionamiento en las últimas dos versiones de cada uno de los cuatro navegadores. |
| Prioridad | Media |
| Módulo asociado | M-05 |
| Versión | 0.1 |
| Fecha | 28/09/2026 |

RNF-04. Diseño adaptable a computador y celular

|  |  |
| --- | --- |
| ID | RNF-04 |
| Tipo | No funcional |
| Historias de uso asociadas | HU01 a HU07 |
| Descripción | Las pantallas de SPAZIO se ajustan al tamaño de la ventana, desde 360 × 640 píxeles en celular hasta pantallas de computador, y se pueden usar con teclado, mouse o pantalla táctil. En pantallas pequeñas, las listas que en escritorio se muestran como tabla (por ejemplo, «Mis reservas», RF-15) se reorganizan en tarjetas apiladas. Los controles interactivos (botones, enlaces con acción, campos y chips seleccionables) tienen un área táctil de al menos 44 × 44 píxeles. |
| Razón | Una parte importante de los usuarios de Bogotá revisará espacios y hará reservas desde el celular; un objetivo táctil suficiente evita errores de toque (usabilidad, ley de Fitts). |
| Autor | Equipo SPAZIO |
| Criterio de medición | En una pantalla de 360 × 640 píxeles, cada pantalla se ve completa, sin desbordar el ancho ni superponer elementos; las tablas se muestran como tarjetas; y cada control interactivo mide al menos 44 × 44 píxeles y se puede accionar solo con el dedo. |
| Prioridad | Alta |
| Módulo asociado | M-01 |
| Versión | 0.3 |
| Fecha | 13/10/2026 |

RNF-05. Idioma y accesibilidad básica

|  |  |
| --- | --- |
| ID | RNF-05 |
| Tipo | No funcional |
| Historias de uso asociadas | Todas |
| Descripción | Toda la interfaz de SPAZIO está en español de Colombia, con textos legibles, etiquetas visibles en los formularios y navegación completa con teclado. El foco del teclado sigue un orden lógico y es visible en el elemento activo. Los mensajes de error son claros, se ubican junto al campo o acción afectada y describen cómo corregir el problema. El texto mantiene un contraste suficiente con el fondo para su lectura. |
| Razón | Las personas que usan SPAZIO en Bogotá hablan español, y una interfaz sin etiquetas, sin foco visible o con bajo contraste deja por fuera a parte de los usuarios. Mensajes de error claros ayudan a recuperarse del error (usabilidad). |
| Autor | Equipo SPAZIO |
| Criterio de medición | (1) Cada campo de cada formulario tiene una etiqueta visible. (2) Cada pantalla se puede recorrer y usar completamente con Tab y Enter, con el foco siempre visible. (3) Cada validación muestra un mensaje de error junto al campo o acción afectada. (4) El texto principal mantiene un contraste de al menos 4.5:1 con su fondo. |
| Prioridad | Media |
| Módulo asociado | M-05 |
| Versión | 0.3 |
| Fecha | 13/10/2026 |

RNF-06. Tiempo de respuesta de la búsqueda

|  |  |
| --- | --- |
| ID | RNF-06 |
| Tipo | No funcional |
| Historias de uso asociadas | HU01, HU05 |
| Descripción | El sistema devuelve los resultados de una búsqueda por ubicación en menos de 3 segundos, para una consulta con condiciones normales de red. |
| Razón | Una búsqueda lenta desanima al usuario y lo aleja de comparar y reservar, que es el objetivo de HU01 y HU05. |
| Autor | Equipo SPAZIO |
| Criterio de medición | En 9 de cada 10 búsquedas realizadas en condiciones normales de red, el resultado aparece en pantalla en 3 segundos o menos. |
| Prioridad | Media |
| Módulo asociado | M-01 |
| Versión | 0.1 |
| Fecha | 28/09/2026 |

RNF-07. Copias de seguridad de los datos

|  |  |
| --- | --- |
| ID | RNF-07 |
| Tipo | No funcional |
| Historias de uso asociadas | Todas |
| Descripción | Los datos de SPAZIO (cuentas, publicaciones, reservas, transacciones y calificaciones) se copian al terminar cada incremento y antes de cada prueba con usuarios, conservando las dos copias más recientes. |
| Razón | Los datos de la aplicación no quedan cubiertos por las copias del código del proyecto y necesitan su propio respaldo. |
| Autor | Equipo SPAZIO |
| Criterio de medición | Antes de cada prueba con usuarios existe una copia de los datos con fecha igual o posterior al cierre del incremento anterior, y es posible restaurarla en una base de datos nueva. |
| Prioridad | Media |
| Módulo asociado | M-05 |
| Versión | 0.1 |
| Fecha | 28/09/2026 |

RNF-08. Cumplimiento legal sobre pagos y datos personales

|  |  |
| --- | --- |
| ID | RNF-08 |
| Tipo | No funcional |
| Historias de uso asociadas | RN-09 |
| Descripción | SPAZIO cumple las normas legales colombianas sobre pagos digitales y protección de datos personales que apliquen a sus operaciones. |
| Razón | RN-09 exige este cumplimiento como restricción del sistema, dado que SPAZIO procesa pagos y datos personales de sus usuarios. |
| Autor | Equipo SPAZIO |
| Criterio de medición | La aplicación cuenta con una política de tratamiento de datos personales visible para el usuario, y el flujo de pago se realiza a través de un proveedor autorizado para operar en Colombia. |
| Prioridad | Alta |
| Módulo asociado | M-05 |
| Versión | 0.1 |
| Fecha | 28/09/2026 |

## 8.5 Requisitos de información

Los requisitos de información describen los datos que SPAZIO debe almacenar para cumplir los requisitos funcionales, a partir del modelo de dominio de 7.5.

RI-01. Datos de la cuenta

|  |  |
| --- | --- |
| ID | RI-01 |
| Tipo | De información |
| Historias de uso asociadas | HC01, DOM-01 |
| Descripción | El sistema almacena, para cada cuenta, el nombre, el correo electrónico, la contraseña y si el rol de anfitrión está activo. |
| Razón | Estos datos son necesarios para el registro, el inicio de sesión y la recuperación de acceso (RF-12, RF-13) y para saber si la cuenta puede usar las funciones de anfitrión (RF-14). |
| Autor | Equipo SPAZIO |
| Criterio de medición | Cada cuenta registrada tiene, sin campos vacíos, un nombre, un correo único, una contraseña protegida y un indicador de rol de anfitrión. |
| Prioridad | Alta |
| Módulo asociado | M-05 |
| Versión | 0.1 |
| Fecha | 28/09/2026 |

RI-02. Datos de la publicación de un espacio

|  |  |
| --- | --- |
| ID | RI-02 |
| Tipo | De información |
| Historias de uso asociadas | HU02, HU06, DOM-04, DOM-06 |
| Descripción | El sistema almacena, para cada publicación, la categoría, la dirección, la ubicación (coordenadas), las características según la categoría, el precio por hora, las condiciones de uso, hasta 3 fotografías y el estado de la publicación. |
| Razón | Estos datos son los que la búsqueda (RF-01, RF-02) y la ficha del espacio muestran al usuario, y los que el anfitrión define al publicar (RF-03). |
| Autor | Equipo SPAZIO |
| Criterio de medición | Cada publicación activa tiene registrados su categoría, su dirección, su ubicación, su precio y su estado, y aparece en la búsqueda con esos datos. |
| Prioridad | Alta |
| Módulo asociado | M-02 |
| Versión | 0.1 |
| Fecha | 28/09/2026 |

RI-03. Datos de la disponibilidad de un espacio

|  |  |
| --- | --- |
| ID | RI-03 |
| Tipo | De información |
| Historias de uso asociadas | HC04, DOM-07 |
| Descripción | El sistema almacena, para cada periodo de disponibilidad de una publicación, la fecha y hora de inicio, la fecha y hora de fin, y si el periodo se repite cada semana. |
| Razón | Un espacio solo se puede reservar en los periodos publicados (RN-06); el sistema necesita esos periodos guardados para validar cada reserva. |
| Autor | Equipo SPAZIO |
| Criterio de medición | Cada periodo de disponibilidad tiene una fecha y hora de inicio, una de fin y un valor de repetición, y no se traslapa con otro periodo de la misma publicación. |
| Prioridad | Alta |
| Módulo asociado | M-02 |
| Versión | 0.1 |
| Fecha | 28/09/2026 |

RI-04. Datos de la reserva y su pago

|  |  |
| --- | --- |
| ID | RI-04 |
| Tipo | De información |
| Historias de uso asociadas | HU03, HU07, DOM-08, DOM-09 |
| Descripción | El sistema almacena, para cada reserva, el periodo reservado, el estado, quién la canceló si aplica, y los datos de su transacción de pago: monto, estado del pago, identificador del proveedor, método de pago, fecha y hora, y estado del pago al anfitrión. |
| Razón | Estos datos permiten confirmar, cancelar y consultar una reserva (RF-06 a RF-10) y registrar el pago al anfitrión (RF-10). |
| Autor | Equipo SPAZIO |
| Criterio de medición | Cada reserva confirmada tiene un periodo, un estado y una transacción asociada con monto y estado del pago; el monto registrado coincide con el precio por hora multiplicado por las horas reservadas. |
| Prioridad | Alta |
| Módulo asociado | M-03 |
| Versión | 0.1 |
| Fecha | 28/09/2026 |

RI-05. Datos de la calificación

|  |  |
| --- | --- |
| ID | RI-05 |
| Tipo | De información |
| Historias de uso asociadas | HU04, DOM-10 |
| Descripción | El sistema almacena, para cada calificación, la nota (de 1 a 5), el comentario, el autor (usuario o anfitrión) y la fecha en que se hizo. |
| Razón | Estos datos son los que RF-11 registra y los que muestran la reputación de un usuario o un anfitrión dentro de la plataforma. |
| Autor | Equipo SPAZIO |
| Criterio de medición | Cada calificación enviada queda con una nota entre 1 y 5, un autor identificado y una fecha, asociada a una única reserva finalizada. |
| Prioridad | Media |
| Módulo asociado | M-04 |
| Versión | 0.1 |
| Fecha | 28/09/2026 |

# 9. Proceso de ingeniería de requisitos

## Propósito

El proceso de ingeniería de requisitos de SPAZIO tiene como propósito establecer las actividades, responsables, técnicas, mecanismos de documentación y criterios utilizados para identificar, analizar, especificar, validar, verificar y mantener los requisitos del sistema durante su ciclo de desarrollo.

El proceso busca garantizar que los requisitos representen las necesidades del producto y de sus interesados, que sean comprensibles para los integrantes del equipo, que puedan ser verificados mediante criterios objetivos y que mantengan una trazabilidad suficiente hacia sus fuentes, historias de usuario, reglas de negocio, módulos y artefactos de desarrollo.

El proceso se desarrolla de manera iterativa. Esto significa que los requisitos no se consideran necesariamente definitivos desde su primera identificación, sino que pueden ser refinados, aclarados, divididos o modificados a medida que se obtiene nueva información, se realizan revisiones con los clientes académicos o se identifican restricciones técnicas y de negocio.

Esta concepción es consistente con ISO/IEC/IEEE 29148:2018, que considera la ingeniería de requisitos como un proceso que comprende, entre otras actividades, descubrir, elicitar, desarrollar, analizar, verificar, validar, comunicar, documentar y gestionar requisitos durante el ciclo de vida. La misma norma diferencia la validación —determinar si se está definiendo el sistema correcto para las necesidades de los interesados— de la verificación —comprobar que los requisitos están correctamente formulados y cumplen las características esperadas—.

Para SPAZIO, el proceso se divide en las siguientes etapas:

1. Planeación.
2. Levantamiento.
3. Análisis y consolidación.
4. Especificación.
5. Validación.
6. Verificación.
7. Seguimiento y mantenimiento.

Las actividades de control de cambios, gestión de versiones, localización y trazabilidad se complementan con lo establecido en la sección de **Control de Requisitos del SPMP/PMP**, de manera que esta sección se concentra en cómo se construyen y mantienen los requisitos y no en definir nuevamente el procedimiento administrativo para aprobar cambios.

El proceso general puede representarse de la siguiente manera:

**Planeación → Levantamiento → Análisis y consolidación → Especificación → Validación → Verificación → Seguimiento**

Cuando durante una revisión se identifica una inconsistencia, información faltante o cambio en las necesidades, el requisito puede regresar a una etapa anterior para ser refinado. Por lo tanto, el proceso no debe entenderse como estrictamente secuencial, sino como un proceso iterativo.

# 9.1 Planeación

## Propósito

La planeación tiene como objetivo establecer las actividades necesarias para ejecutar el proceso de ingeniería de requisitos de SPAZIO, definiendo quién participa en cada actividad, cuándo se realiza, qué información se necesita, qué técnicas se utilizarán y cuáles serán los productos resultantes.

La planeación permite evitar que el levantamiento y la especificación de requisitos se realicen de manera improvisada y permite coordinar las actividades de requisitos con el desarrollo incremental definido para el proyecto.

SPAZIO se desarrolla mediante incrementos, comenzando por las funcionalidades relacionadas con parqueaderos y posteriormente incorporando espacios deportivos. Por esta razón, la planeación del proceso de requisitos se realiza inicialmente para establecer el conjunto general de necesidades del producto y posteriormente se revisa antes de cada incremento. El SRS actualmente establece que el MVP se desarrolla en incrementos y que las historias HU01-HU04 corresponden al primer incremento, mientras que HU05-HU07 reutilizan parte del diseño y desarrollo del incremento anterior.

### Encargados

La planeación estará a cargo del **equipo de desarrollo de SPAZIO**, con participación de los integrantes responsables de la ingeniería de requisitos y de los responsables del desarrollo.

Dentro del proceso se establecen los siguientes roles:

|  |  |
| --- | --- |
| **Rol** | **Responsabilidad dentro del proceso** |
| Equipo de ingeniería de requisitos | Planear las actividades, recopilar información, documentar requisitos y mantener la trazabilidad. |
| Equipo de desarrollo | Aportar información sobre restricciones técnicas, viabilidad e impacto de los requisitos. |
| Responsable de validación | Coordinar la revisión de los requisitos y consolidar las observaciones recibidas. |
| Cliente académico / profesor | Revisar los requisitos y proporcionar observaciones y validación sobre el alcance académico del producto. |
| Equipo completo | Participar en las revisiones y verificar que los requisitos sean consistentes con el producto. |

Los roles anteriores corresponden a **responsabilidades dentro del proceso** y no necesariamente implican que cada responsabilidad corresponda exclusivamente a una persona.

### Frecuencia de planeación

La planeación del proceso de requisitos se realizará:

* Al inicio del proyecto.
* Al inicio de cada incremento.
* Cuando exista un cambio significativo en el alcance.
* Cuando se identifique que las actividades inicialmente planeadas son insuficientes para obtener o validar la información requerida.
* Antes de una revisión formal de requisitos con los clientes académicos.

### Actividades de planeación

Para cada ciclo de trabajo se realizarán las siguientes actividades:

1. Revisar el alcance vigente del producto.
2. Revisar las historias de usuario, funciones complementarias y reglas de negocio existentes.
3. Identificar los requisitos que deben ser levantados o refinados.
4. Identificar las fuentes de información disponibles.
5. Determinar los interesados que deben participar.
6. Seleccionar las técnicas de levantamiento apropiadas.
7. Definir las sesiones o actividades de revisión necesarias.
8. Determinar los requisitos que deben ser especificados durante el ciclo.
9. Identificar las relaciones de trazabilidad que deberán establecerse.
10. Definir las actividades de validación y verificación.
11. Registrar los resultados obtenidos.
12. Actualizar la planeación cuando se presenten cambios.

La planeación deberá considerar las dependencias y suposiciones que puedan afectar los requisitos. Por ejemplo, SPAZIO identifica dependencias relacionadas con el proveedor de pagos, las herramientas tecnológicas propuestas y el servicio de geocodificación; si alguna de estas dependencias cambia, los requisitos relacionados podrían requerir modificaciones.

# 9.2 Levantamiento

## Propósito

El levantamiento de requisitos tiene como propósito identificar, recopilar y documentar las necesidades, expectativas, restricciones y condiciones que debe cumplir SPAZIO.

En esta etapa se busca transformar información proveniente de los interesados, documentos del proyecto, historias de usuario, reglas de negocio, restricciones técnicas y otras fuentes en información suficientemente clara para posteriormente analizarla y convertirla en requisitos verificables.

El levantamiento no implica que toda la información recopilada se convierta automáticamente en un requisito. La información obtenida debe ser posteriormente analizada para determinar su pertinencia, consistencia, alcance y relación con el producto.

ISO/IEC/IEEE 29148 define la elicitación de requisitos como el uso de técnicas sistemáticas para identificar y documentar las necesidades de clientes y usuarios.

### Encargados

El levantamiento estará a cargo del **equipo de ingeniería de requisitos**, con participación del equipo completo cuando la información recopilada pueda tener impacto sobre el diseño, desarrollo, arquitectura o pruebas.

Cuando sea necesario obtener información de los usuarios o interesados, participarán los representantes correspondientes.

### Frecuencia

El levantamiento se realizará:

* Al inicio del proyecto para identificar las necesidades generales.
* Antes de cada incremento.
* Cuando una historia de usuario requiera mayor detalle.
* Cuando exista información ambigua o contradictoria.
* Cuando aparezca una nueva restricción.
* Cuando se solicite una modificación del alcance.
* Cuando una validación determine que la información existente es insuficiente.

Debido a que SPAZIO es un producto que se desarrolla incrementalmente, el levantamiento podrá repetirse durante el desarrollo y no se limita a una única actividad inicial.

### Técnicas de levantamiento

Para SPAZIO se podrán utilizar las siguientes técnicas:

**a. Revisión documental**

Consiste en revisar documentos existentes del proyecto, especialmente el PMP/SPMP, el SRS, historias de usuario, reglas de negocio, modelos de dominio, restricciones y otros artefactos.

Esta técnica es particularmente importante en SPAZIO porque los requisitos específicos deben mantener relación con información previamente documentada. Actualmente, por ejemplo, las historias de usuario HU01-HU07 provienen del PMP y los requisitos específicos se relacionan posteriormente con dichas historias y reglas de negocio.

**b. Entrevistas o reuniones con interesados**

Se utilizarán reuniones estructuradas o semiestructuradas para aclarar necesidades, restricciones, expectativas y dudas sobre funcionalidades.

**c. Revisión de historias de usuario**

Las historias de usuario serán utilizadas como una fuente primaria para identificar necesidades funcionales. Por ejemplo, HU01 establece la necesidad de que un usuario pueda buscar parqueaderos disponibles cerca de una ubicación.

**d. Análisis de reglas de negocio**

Las reglas de negocio serán utilizadas para identificar restricciones o condiciones que los requisitos deben cumplir. SPAZIO ya cuenta con reglas RN-01 a RN-15, que incluyen condiciones sobre disponibilidad, reservas, pagos, cancelaciones y calificaciones.

**e. Análisis de dependencias y restricciones**

Se revisarán las dependencias técnicas, legales, económicas y externas que puedan condicionar los requisitos.

**f. Prototipos o modelos**

Cuando exista ambigüedad sobre una funcionalidad, podrán utilizarse prototipos, diagramas, modelos o representaciones de interfaz para facilitar la comprensión y validación.

### Procedimiento

El procedimiento de levantamiento será:

1. Identificar la fuente de información.
2. Registrar la información obtenida.
3. Identificar necesidades y expectativas.
4. Identificar restricciones y reglas de negocio relacionadas.
5. Identificar posibles requisitos.
6. Eliminar duplicidades.
7. Detectar información ambigua o incompleta.
8. Clasificar preliminarmente cada requisito como funcional, no funcional o de información.
9. Relacionar el requisito con la historia de usuario, función complementaria o regla de negocio correspondiente.
10. Enviar la información a la etapa de análisis y especificación.

Como resultado del levantamiento se obtendrá un conjunto de necesidades y posibles requisitos que posteriormente serán analizados y formalizados.

# 9.3 Análisis y consolidación

## Propósito

Esta etapa tiene como propósito analizar la información obtenida durante el levantamiento para determinar si constituye un requisito válido, identificar conflictos, eliminar duplicidades y establecer las relaciones existentes entre los diferentes elementos del proyecto.

Aunque esta etapa no aparece como una subsección independiente en la estructura inicial propuesta, se incorpora para evitar que el levantamiento y la especificación sean considerados actividades directamente consecutivas sin una etapa de análisis.

### Actividades

El equipo realizará:

1. Clasificación del requisito.
2. Identificación de duplicados.
3. Identificación de dependencias.
4. Identificación de conflictos.
5. Análisis de factibilidad.
6. Determinación del alcance.
7. Relación con historias de usuario.
8. Relación con reglas de negocio.
9. Relación con módulos.
10. Definición preliminar de prioridad.
11. Definición preliminar del criterio de aceptación.
12. Identificación de información faltante.

En esta etapa también se comprobará que el requisito esté expresado de forma suficientemente clara y que pueda ser posteriormente verificado.

La consolidación es importante en SPAZIO debido a que el SRS utiliza diferentes fuentes para construir los requisitos. Actualmente, cada requisito específico parte de una historia de usuario o función complementaria, considera las reglas de negocio y se ubica en un módulo, manteniendo una cadena de trazabilidad.

# 9.4 Especificación

## Propósito

La especificación tiene como objetivo convertir la información analizada en requisitos documentados de forma clara, consistente, identificable y verificable.

Cada requisito debe contener la información necesaria para que cualquier integrante del equipo pueda comprender qué debe realizar el sistema, por qué es necesario, cuál es su origen, cómo se relaciona con otros elementos y cómo se comprobará su cumplimiento.

La especificación deberá utilizar una estructura uniforme para todos los requisitos.

### Encargados

La especificación estará a cargo del **equipo de ingeniería de requisitos**, con revisión del equipo de desarrollo para validar la viabilidad técnica y detectar impactos.

### Frecuencia

Los requisitos serán especificados:

* Después de cada actividad de levantamiento que produzca información suficiente.
* Antes del inicio de la implementación del requisito.
* Cuando un requisito sea modificado.
* Cuando un requisito deba dividirse o combinarse.
* Cuando una revisión detecte que su especificación es insuficiente.

### Identificación de requisitos

Los requisitos deberán utilizar identificadores únicos.

Para SPAZIO se utilizará la siguiente estructura:

**R + categoría + número**

Sin embargo, debido a la clasificación que ya utiliza el SRS, se recomienda que la categoría se represente explícitamente:

* **RF-XX:** Requisito funcional.
* **RNF-XX:** Requisito no funcional.
* **RI-XX:** Requisito de información.

Por ejemplo:

* RF-01: Buscar espacios disponibles por ubicación.
* RF-02: Comparar y ordenar resultados.
* RI-01: Datos de la cuenta.

Esta convención es consistente con la sección 8 actual del SRS, donde los requisitos se clasifican como funcionales, no funcionales y de información.

### Plantilla de especificación

Cada requisito deberá documentarse utilizando como mínimo los siguientes campos:

|  |  |
| --- | --- |
| **Campo** | **Descripción** |
| **ID** | Identificador único del requisito. |
| **Requisito** | Enunciado breve y claro de lo que debe cumplir el sistema. |
| **Descripción / especificación** | Explicación detallada del comportamiento, características, condiciones y restricciones asociadas. |
| **Origen** | Fuente que originó el requisito: historia de usuario, función complementaria, regla de negocio, interesado, restricción técnica, decisión del equipo, etc. |
| **Tipo** | Funcional, no funcional o de información. |
| **Historia de usuario asignada** | HU relacionada, cuando corresponda. |
| **Función complementaria asignada** | HC relacionada, cuando corresponda. |
| **Regla de negocio relacionada** | RN relacionada, cuando corresponda. |
| **Módulo asociado** | Módulo del sistema al que pertenece el requisito. |
| **Prioridad** | Prioridad definida mediante el esquema de priorización. |
| **Estado** | Estado actual del requisito dentro del ciclo de vida definido. |
| **Criterio de aceptación / aspecto de aceptación** | Condición objetiva mediante la cual se determina el cumplimiento del requisito. |
| **Versión** | Versión actual del requisito. |
| **Fecha** | Fecha de creación o última modificación. |
| **Responsable** | Integrante o rol responsable de gestionar el requisito. |
| **Trazabilidad** | Relaciones del requisito con necesidades, historias, reglas, diseño, código y pruebas. |

Esta estructura amplía ligeramente los campos definidos inicialmente en el documento para incorporar elementos que facilitan la gestión y trazabilidad durante el desarrollo.

El propio SRS de SPAZIO ya utiliza una estructura similar. Por ejemplo, RF-01 contiene ID, tipo, historias asociadas, descripción, razón, autor, criterio de medición, prioridad, módulo, versión y fecha.

### Redacción de los requisitos

Los requisitos deberán redactarse utilizando lenguaje claro, preciso y verificable.

Se evitarán:

* Expresiones ambiguas como "rápidamente", "fácilmente" o "de ser posible".
* Requisitos que contengan múltiples comportamientos independientes sin necesidad.
* Términos que puedan tener diferentes interpretaciones.
* Requisitos que describan directamente una solución técnica cuando esta no sea una restricción necesaria.
* Criterios de aceptación que no permitan determinar objetivamente si el requisito fue cumplido.

Siempre que sea necesario establecer una condición cuantificable, deberá expresarse mediante un valor medible.

Por ejemplo, en SPAZIO se establece para RF-01 que los resultados de búsqueda deben mostrarse en menos de 3 segundos bajo la condición definida en su criterio de medición. Esto permite verificar objetivamente el cumplimiento.

# 9.5 Esquema de priorización

La prioridad de los requisitos se determinará mediante el esquema **MoSCoW**, que clasifica los requisitos de acuerdo con su importancia para el producto.

Se utilizarán las siguientes categorías:

|  |  |  |
| --- | --- | --- |
| **Prioridad** | **Significado** | **Aplicación en SPAZIO** |
| **Must** | Debe implementarse obligatoriamente para que el incremento sea considerado funcional. | Funcionalidades indispensables del MVP, como buscar, publicar, reservar y pagar. |
| **Should** | Es importante, pero el sistema puede funcionar sin ella temporalmente. | Funcionalidades relevantes que pueden ser desarrolladas después de los elementos obligatorios. |
| **Could** | Deseable, pero de menor impacto sobre el funcionamiento principal. | Mejoras que aportan valor sin ser indispensables. |
| **Won't** | No se implementará en el alcance actual. | Funcionalidades previstas para versiones futuras. |

La asignación de prioridad deberá considerar:

1. Contribución al objetivo del producto.
2. Necesidad para el funcionamiento del MVP.
3. Dependencias con otros requisitos.
4. Impacto sobre usuarios.
5. Riesgo asociado.
6. Restricciones técnicas.
7. Tiempo y recursos disponibles.
8. Dependencias externas.

En SPAZIO, por ejemplo, las funciones de búsqueda, publicación, reserva y pago constituyen elementos centrales del producto, mientras que determinadas funciones ya fueron identificadas como futuras, como la aplicación móvil nativa, el rol administrador y la expansión a otras ciudades.

La prioridad podrá cambiar cuando cambien el alcance, las restricciones, las dependencias o las necesidades del producto. Todo cambio deberá conservar el historial correspondiente.

# 9.6 Estados de los requisitos

Cada requisito tendrá un estado que permita conocer su avance.

Se establecen los siguientes estados:

### Validado

El requisito ha sido revisado y se ha determinado que representa una necesidad válida del sistema y que existe suficiente información para continuar con su especificación.

### Especificado

El requisito ha sido documentado utilizando la plantilla establecida, priorizado y relacionado con los elementos correspondientes de trazabilidad.

### Verificado

El requisito ha sido revisado para comprobar que está correctamente formulado, es consistente con los demás requisitos y cumple las características necesarias para ser utilizado en las siguientes actividades.

### Implementado

El requisito ha sido desarrollado y el producto ha sido sometido a las pruebas correspondientes, obteniéndose evidencia suficiente de que cumple el criterio establecido.

Por tanto, el ciclo básico será:

**Validado → Especificado → Verificado → Implementado**

Un requisito podrá regresar a un estado anterior cuando se detecte una inconsistencia, una modificación o una necesidad de refinamiento.

# 9.7 Validación de requisitos

## Propósito

La validación busca determinar que los requisitos representan correctamente las necesidades y objetivos que debe satisfacer SPAZIO.

La validación responde principalmente a la pregunta:

**¿Estamos definiendo el sistema que realmente se necesita?**

ISO/IEC/IEEE 29148 diferencia la validación de la verificación: la validación busca confirmar que los requisitos definen el sistema correcto de acuerdo con la intención de los interesados, mientras que la verificación se orienta a comprobar que los requisitos están correctamente formulados.

### Encargados

La validación será realizada por:

* Equipo de ingeniería de requisitos.
* Equipo de desarrollo.
* Clientes académicos o profesor, cuando corresponda.

### Frecuencia

Se realizará:

* Después de la especificación inicial.
* Antes de iniciar la implementación de un incremento.
* Cuando se produzcan cambios importantes.
* Cuando exista una discrepancia entre requisitos.
* Cuando aparezca información nueva que pueda afectar el alcance.

### Técnicas

Podrán utilizarse:

* Revisión por pares.
* Reuniones de revisión.
* Walkthrough de requisitos.
* Revisión contra historias de usuario.
* Revisión contra reglas de negocio.
* Revisión mediante prototipos.
* Revisión de escenarios.
* Revisión de criterios de aceptación.

### Criterios de validación

Un requisito será considerado validado cuando:

1. Tiene una fuente identificada.
2. Está relacionado con una necesidad del producto.
3. No contradice el alcance establecido.
4. No contradice otros requisitos.
5. Está dentro del alcance del incremento correspondiente.
6. Tiene suficiente información para ser especificado.
7. Posee un criterio que permita comprobar posteriormente su cumplimiento.

# 9.8 Verificación de requisitos

## Propósito

La verificación busca comprobar que los requisitos están correctamente especificados y que cumplen las características necesarias para ser utilizados como base para el diseño, desarrollo y pruebas.

La pregunta principal de esta actividad es:

**¿El requisito está correctamente definido y puede ser utilizado para construir y comprobar el sistema?**

### Características verificadas

Cada requisito será revisado para comprobar:

* **Correctitud:** representa lo que debe hacer el sistema.
* **Claridad:** puede ser comprendido por los integrantes del proyecto.
* **No ambigüedad:** admite una única interpretación razonable.
* **Completitud:** contiene la información necesaria.
* **Consistencia:** no contradice otros requisitos.
* **Verificabilidad:** puede comprobarse objetivamente.
* **Trazabilidad:** tiene relaciones identificables con su origen y elementos derivados.
* **Prioridad:** tiene una prioridad definida.
* **Identificación:** posee un identificador único.
* **Factibilidad:** puede ser implementado dentro de las restricciones conocidas.

Estas características son coherentes con el propósito de ISO/IEC/IEEE 29148 de establecer requisitos bien formados y proporcionar información estructurada para su ingeniería y gestión.

# 9.9 Aspecto de aceptación

Cada requisito deberá establecer un criterio de aceptación que permita determinar de manera objetiva si el requisito fue cumplido.

El criterio de aceptación deberá responder, como mínimo:

* ¿Qué condición debe cumplirse?
* ¿Qué comportamiento debe observarse?
* ¿Qué resultado se espera?
* ¿Bajo qué condiciones se comprobará?
* ¿Qué evidencia permitirá demostrar el cumplimiento?

Los criterios deberán ser verificables.

Por ejemplo, para un requisito de búsqueda:

**Condición:** existe al menos un espacio disponible dentro del radio configurado.

**Resultado esperado:** el sistema muestra los espacios disponibles junto con distancia, horario y precio.

**Criterio de aceptación:** al proporcionar una ubicación válida, el sistema muestra los espacios disponibles que cumplen las condiciones de búsqueda dentro del tiempo establecido.

Este enfoque es consistente con el SRS actual de SPAZIO, donde cada requisito cuenta con un "criterio de medición". Por ejemplo, RF-01 especifica la condición de búsqueda, los datos que deben aparecer y un límite temporal de respuesta.

# 9.10 Versionamiento de requisitos

Los requisitos deberán contar con un mecanismo de versionamiento que permita identificar su evolución.

La versión inicial de cada requisito será:

**0.1**

Mientras el requisito no haya sido presentado formalmente a los clientes académicos, los cambios realizados sobre su contenido incrementarán el segundo componente de la versión.

Ejemplo:

* 0.1 → primera especificación.
* 0.2 → modificación antes de la primera presentación.
* 0.3 → nueva modificación antes de la primera presentación.

Una vez presentado formalmente a los clientes académicos, el requisito pasará a una nueva versión mayor:

* 1.1 → primera versión presentada.
* 1.2 → modificación posterior a la presentación.
* 1.3 → segunda modificación posterior.

Cuando se realice una nueva presentación formal, se incrementará el primer componente de la versión y se conservará el segundo componente correspondiente al estado de cambios.

Ejemplo:

**0.1 → 0.2 → 1.2 → 1.3 → 2.3**

Cada modificación deberá registrar además la fecha y una descripción del cambio en el mecanismo de control de versiones correspondiente.

Este esquema debe mantenerse coordinado con el historial general de cambios del SRS. Actualmente SPAZIO ya utiliza un historial de cambios para controlar la evolución del documento.

# 9.11 Trazabilidad de requisitos

## Propósito

La trazabilidad tiene como objetivo permitir identificar el origen de cada requisito, los elementos que se derivan de él y los artefactos del proyecto en los cuales se encuentra representado.

ISO/IEC/IEEE 29148 define la trazabilidad de requisitos como la identificación y documentación del camino de derivación de los requisitos hacia niveles superiores y de su asignación o flujo hacia niveles inferiores. También reconoce la matriz de trazabilidad como un artefacto estructurado que relaciona requisitos con necesidades superiores o con elementos de implementación.

Para SPAZIO se utilizará una trazabilidad **vertical y horizontal**.

### Trazabilidad vertical

Relaciona el requisito con elementos de diferente nivel de abstracción.

Se utilizará la siguiente cadena:

**Necesidad → Historia de usuario / Función complementaria → Requisito → Diseño → Código → Prueba → Evidencia**

Por ejemplo:

**HU01 → RF-01 → M-01 → componente de búsqueda → prueba de búsqueda → evidencia de ejecución**

### Trazabilidad horizontal

Relaciona el requisito con otros elementos del mismo nivel que puedan afectarlo o complementar su comportamiento.

Por ejemplo:

**RF-01 ↔ RF-02 ↔ RN-06 ↔ RI-02**

Esto permite identificar posibles impactos cuando se modifica un requisito.

El SRS de SPAZIO ya establece explícitamente una cadena de trazabilidad:

**Historia de usuario → Regla de negocio → Requisito → Módulo → Criterio de medición.**

La trazabilidad se extenderá durante las fases posteriores de diseño, implementación y pruebas.

### Matriz de trazabilidad

Se utilizará una matriz con una estructura similar a la siguiente:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Requisito** | **HU/HC** | **RN** | **Módulo** | **Diseño** | **Código** | **Prueba** | **Estado** |
| RF-01 | HU01, HU05 | RN-06 | M-01 | Diseño búsqueda | Componente/API búsqueda | PR-01 | Implementado |
| RF-02 | HU01, HU05 | — | M-01 | Diseño resultados | Componente ordenamiento | PR-02 | Especificado |
| RF-03 | HU02, HU06 | RN-05 | M-02 | Diseño publicación | Módulo publicación | PR-03 | Verificado |

La matriz deberá actualizarse cuando:

* Se cree un requisito.
* Se modifique un requisito.
* Se cree una historia de usuario.
* Se modifique una regla de negocio.
* Se modifique un módulo.
* Se cree o modifique un artefacto de diseño.
* Se implemente un requisito.
* Se cree una prueba asociada.

El objetivo es que ningún requisito implementado quede sin una relación identificable con su origen y su evidencia de cumplimiento.

# 9.12 Seguimiento y mantenimiento

El proceso de ingeniería de requisitos no finaliza cuando un requisito es especificado. Los requisitos deberán mantenerse durante el desarrollo para garantizar que continúen siendo consistentes con el producto.

El seguimiento estará orientado a:

1. Revisar el estado de cada requisito.
2. Detectar requisitos pendientes.
3. Identificar requisitos bloqueados.
4. Identificar requisitos modificados.
5. Revisar su trazabilidad.
6. Verificar que los cambios se propaguen a los artefactos relacionados.
7. Comprobar el cumplimiento de los criterios de aceptación.
8. Mantener actualizado el historial de versiones.

Cuando un cambio afecte un requisito existente, se deberá analizar su impacto sobre:

* Historias de usuario.
* Reglas de negocio.
* Otros requisitos.
* Módulos.
* Modelo de dominio.
* Diseño.
* Código.
* Pruebas.
* Documentación.

Esto resulta especialmente relevante en SPAZIO porque existen dependencias entre funcionalidades. Por ejemplo, el proyecto documenta que las historias HU05-HU07 reutilizan diseño y desarrollo de HU01-HU03, por lo que un cambio en las primeras historias puede afectar las funcionalidades del segundo incremento.

Los cambios deberán gestionarse mediante el mecanismo definido en la sección de **Control de Requisitos del SPMP/PMP**, evitando realizar modificaciones directamente sobre requisitos controlados sin registrar su impacto, aprobación y nueva versión.

# 9.13 Flujo resumido del proceso

El proceso de ingeniería de requisitos de SPAZIO se resume en las siguientes actividades:

**1. Planeación**

→ determinar actividades, responsables, fuentes y técnicas.

**2. Levantamiento**

→ obtener necesidades, restricciones, expectativas y condiciones.

**3. Análisis y consolidación**

→ clasificar, depurar, analizar y relacionar la información.

**4. Especificación**

→ documentar formalmente el requisito mediante su plantilla.

**5. Validación**

→ confirmar que el requisito representa la necesidad correcta.

**6. Verificación**

→ comprobar que el requisito está correctamente formulado y puede ser utilizado.

**7. Implementación y seguimiento**

→ llevar el requisito al diseño, código y pruebas, manteniendo su trazabilidad.

**8. Mantenimiento**

→ gestionar cambios, versiones, impactos y relaciones de trazabilidad.

El proceso es iterativo, por lo que un requisito puede regresar a cualquiera de las etapas anteriores cuando una revisión, cambio o nueva información lo requiera.

# 9.14 Artefactos generados

Como resultado del proceso de ingeniería de requisitos se generarán o mantendrán los siguientes artefactos:

|  |  |
| --- | --- |
| **Artefacto** | **Propósito** |
| Historias de usuario | Representar necesidades desde la perspectiva del usuario. |
| Registro de levantamiento | Documentar información obtenida durante las actividades de elicitación. |
| Catálogo de requisitos | Mantener los requisitos identificados y su información asociada. |
| SRS | Documentar formalmente los requisitos del sistema. |
| Matriz de trazabilidad | Relacionar requisitos con sus fuentes, diseño, implementación y pruebas. |
| Registro de cambios | Mantener el historial de modificaciones. |
| Prototipos / modelos | Apoyar la comprensión y validación de requisitos. |
| Criterios de aceptación | Definir las condiciones para comprobar el cumplimiento. |
| Evidencias de verificación | Demostrar el cumplimiento de los requisitos. |

## 10.1 Validación de requisitos

Validar un requisito es comprobar que representa realmente una necesidad del proyecto y que está correctamente definido, antes de que el equipo invierta tiempo en diseñarlo o construirlo. La Tabla 24 presenta los doce criterios con los que se valida cada requisito de SPAZIO, junto con la forma en que se comprueba cada uno.

**Tabla 24. Criterios de validación de requisitos**

|  |  |  |
| --- | --- | --- |
| **Criterio** | **Qué significa** | **Cómo se comprueba en SPAZIO** |
| Atómico | Tiene un solo propósito y no se puede dividir en más de una parte. | Se revisa que la descripción del requisito use una sola oración con un solo verbo principal; si describe más de una acción, se separa en varios requisitos. |
| Correcto | Proviene de una historia de usuario, una función complementaria o una regla de negocio reales del proyecto. | Se compara el requisito con las historias de usuario, las funciones de 7.2 y las reglas de negocio de 7.4; si no se encuentra relación, el requisito se descarta o se ajusta. |
| No ambiguo | Admite una sola interpretación, sin importar quién lo lea. | Se revisa que use los términos definidos en el glosario (6) y que no queden palabras vagas como "rápido" o "fácil" sin una medida asociada. |
| Completo | Incluye descripción, razón y criterio de medición, entre otros campos de la Tabla 21. | Se revisa que la ficha del requisito no tenga campos vacíos antes de marcarlo como Especificado. |
| Consistente | No contradice otro requisito ni otra sección del documento. | Se compara el requisito con los ya especificados en el mismo módulo (7.7) y con la descripción global de la sección 7. |
| Importante | Tiene asignada una prioridad, según el esquema de 9.3. | Se revisa que el campo Prioridad de la ficha no esté vacío y que corresponda al incremento en curso. |
| Verificable | Su criterio de medición permite comprobar, con una prueba concreta, si el requisito se cumplió. | Se revisa que el criterio de medición incluya una condición y un resultado esperado, y no solo una intención general. |
| Modificable | Puede cambiar sin afectar la estructura de la ficha ni la numeración de los demás requisitos. | Se revisa que el requisito no dependa del contenido exacto de otro; si depende, se referencia por su ID en vez de repetirlo. |
| Trazable | Declara con claridad la historia de usuario, la función o la regla de negocio de la que proviene. | Se revisa que el campo Historias de uso asociadas de la ficha no esté vacío. |
| Asociado a una versión | Tiene una versión y una fecha, según el esquema de 9.3. | Se revisa que los campos Versión y Fecha de la ficha estén diligenciados. |
| No redundante | Aparece una sola vez en el documento. | Se compara el enunciado del requisito nuevo con los ya especificados en el mismo módulo, para descartar duplicados. |
| Preciso | No necesita una explicación adicional para entenderse. | Se revisa que una persona distinta a su autor pueda leer el requisito y entender qué debe hacer el sistema, sin tener que preguntar. |

*Fuente: elaboración propia a partir de la plantilla de SRS del curso.*

Los requisitos de las secciones 8.3 a 8.5 de este documento pasaron por esta validación y se encuentran en estado Especificado (9.3).

## 10.2 Verificación de requisitos

Verifica**r** un requisito es comprobar que se mantiene reflejado correctamente en los artefactos del proyecto y en la implementación, a medida que el sistema se construye. Mientras la validación revisa el requisito en sí mismo, antes de desarrollarlo, la verificación revisa su desarrollo, después de especificarlo.

La verificación de cada requisito de SPAZIO sigue la cadena de trazabilidad vertical de 9.3, apoyada en la matriz de trazabilidad del PMP (§11.1, Tabla 26), con estas actividades:

* **Revisión de requisitos.** Confirmar que el requisito sigue vigente y que su enunciado no cambió sin actualizar su versión.
* **Revisión de trazabilidad.** Confirmar que el requisito sigue asociado a su historia de usuario, su regla de negocio y su módulo.
* **Revisión de diseño.** Confirmar que el requisito está representado en los artefactos de diseño correspondientes.
* **Revisión de código.** Confirmar que el código implementa lo que el requisito describe.
* **Revisión de pruebas.** Confirmar que existe al menos una prueba que ejercita el requisito.
* **Comprobación del criterio de aceptación.** Ejecutar la prueba y comparar su resultado con el criterio de medición de la ficha del requisito.
* **Seguimiento del estado.** Actualizar el estado del requisito (9.3) según el resultado de las actividades anteriores.

Estas actividades las realizan los roles de Diseño, Desarrollo, Pruebas y Validación del producto que define el PMP (§9.6 y §11.5), sin que este documento fije una herramienta específica para ejecutarlas.

## 10.3 Diagramas del proceso de validación y verificación

Las figuras 3 y 4 detallan el proceso de validación y el proceso de verificación descritos en 10.1 y 10.2, incluyendo los roles del PMP (§9.6) que participan en cada paso y los cambios de estado del requisito (9.3).

![](data:image/png;base64...)

**Figura 3. Proceso de validación de requisitos**

*Fuente: elaboración propia.*

![](data:image/png;base64...)La figura 3 agrupa los doce criterios de la Tabla 24 en cuatro revisiones sucesivas: atómico y correcto; no ambiguo y completo; consistente e importante; y verificable, modificable, trazable, no redundante, preciso y asociado a una versión. Si el requisito supera las cuatro revisiones, se aprueba, su estado pasa a Validado y la validación queda registrada en la matriz de trazabilidad del PMP (§11.1), antes de continuar con la especificación. Si no las supera, se registran las observaciones sobre el criterio incumplido, se ajusta el requisito y se vuelve a la primera revisión.

**Figura 4. Proceso de verificación de requisitos**

*Fuente: elaboración propia.*

La figura 4 asigna cada actividad de 10.2 a uno de los roles del PMP (§9.6): Validación del producto revisa el requisito y su trazabilidad, Diseño revisa el artefacto de diseño y Desarrollo revisa el código; al superar esas tres revisiones, el estado del requisito pasa a Verificado y el rol de Pruebas ejecuta las pruebas correspondientes. Si el resultado cumple el criterio de medición de la ficha, el estado pasa a Implementado y el requisito queda marcado como tal; si no lo cumple, Pruebas registra los hallazgos, Diseño o Desarrollo realizan los ajustes necesarios, y el proceso vuelve a la revisión del código.

# Anexos

No hay información adicional para anexar en esta versión del documento. El diagrama de casos de uso (Figura 1) y el modelo de dominio (Figura 2) de la sección 7 son la referencia visual para los requisitos de esta sección.

# 12. Referencias

[1] Equipo SPAZIO, "Plan de Administración del Proyecto de SPAZIO," Universidad Distrital Francisco José de Caldas, Bogotá, Colombia, 2026.

[2] Universidad Distrital Francisco José de Caldas, "Plantilla de Documento de Requisitos del Sistema (SRS)," material del curso de Ingeniería de Software, Bogotá, Colombia, 2026.

[3] Wompi S.A., "Documentación para desarrolladores," [En línea]. Disponible: https://docs.wompi.co/. [Accedido: sep. 2026].

[4] Supabase Inc., "Pricing y documentación de Supabase," [En línea]. Disponible: https://supabase.com/docs. [Accedido: sep. 2026].

[5] OpenStreetMap Foundation, "Nominatim Usage Policy," [En línea]. Disponible: https://operations.osmfoundation.org/policies/nominatim/. [Accedido: sep. 2026].