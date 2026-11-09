**PLAN DE ADMINISTRACIÓN DE PROYECTO (PMP)**

SPAZIO: Marketplace horizontal de espacios físicos en Bogotá

![Datos Abiertos Bogotá](data:image/png;base64...)

Universidad Distrital Francisco José de Caldas

Ingeniería de software

JOSE JOAQUIN BOCANEGRA GARCIA

Edgar Andrés Umaña Pire - 20181020152

Juan David Cardozo Fajardo 20252678022

Santiago Sánchez Moya – 20211020032

# 1. Historial de aprobaciones

En esta sección se lleva el registro de las aprobaciones que ha tenido este documento. Como todavía no se han hecho revisiones formales, la tabla se deja con datos por definir.

Tabla 1

*Historial de aprobaciones*

| **Fecha** | **Descripción** | **Aprobado por** | **Firma** |
| --- | --- | --- | --- |
| 16/.09/2026 | Revisión de los cambios realizados al documento. | Jose Joaquin Bocanegra Garcia |  |
| 7/10/2026 | Cambio de alcance a categoría parqueaderos con pasarela de pago simulada, estimación aplicada por puntos de función, presupuesto y calendarización con valores, organigrama y diagramas BPMN |  |  |
|  |  |  |  |

# 2. Historial de cambios

Esta tabla lleva el control de los cambios que ha tenido el documento durante el proyecto, para poder seguir su evolución de forma ordenada.

Tabla 2 *Historial de cambios*

|  |  |  |
| --- | --- | --- |
| Fecha | Descripción del cambio | Realizado por |
| 26/08/2026 | Primera versión del documento, desarrollada hasta la sección 7. | Equipo SPAZIO |
| 2/09/2026 | Actualización de las secciones 8 y parte de la 9 (9.1 y 9.2) | Equipo SPAZIO |
| 9/09/2026 | Actualización de las secciones 9 y 10 |  |
| 16/09/2026 | Actualización de las secciones 11, 12, 13, 14, 15 | Equipo SPAZIO |
| 7/10/2026 | Cambio de alcance del MVP a la categoría parqueaderos, identificando los requisitos por sus códigos del SRS (RF, RNF, RI, RN, HU, HC). Sustitución de la pasarela real por un módulo propio de pasarela de pago simulada efinición de calendario con fechas reales (10 oct – 28 nov de 2026), presupuesto consolidado con totales y flujo de caja con valores. Infraestructura y herramientas completas con análisis de alternativas. | Equipo SPAZIO |

# 3. Introducción

SPAZIO es un proyecto que quiere crear un Marketplace horizontal de espacios físicos en la ciudad de Bogotá. La idea principal es conectar a personas que tienen espacios que no usan todo el tiempo, como parqueaderos, oficinas, bodegas o locales, con personas que necesitan esos espacios por un tiempo corto. El proyecto parte de la idea de que muchos espacios en la ciudad quedan vacíos gran parte del día, y eso es un problema, porque el dueño no gana nada con eso y la persona que necesita el espacio no encuentra opciones fáciles ni rápidas.

Este documento es el Plan de Administración de Proyecto (PMP) de SPAZIO. Su propósito es explicar cómo se va a organizar y a manejar el proyecto durante su desarrollo. En esta primera entrega, el documento llega hasta la sección 7, que da una vista general del proyecto: su propósito, su alcance, los supuestos y restricciones, los entregables y un resumen del calendario y el presupuesto. Las demás secciones del PMP se van a desarrollar en entregas futuras.

Este documento es importante para todas las personas que participan en el proyecto SPAZIO, porque les ayuda a entender qué se va a hacer, para qué y con qué límites. También sirve para el profesor del curso, que revisa el avance del proyecto, y para cualquier persona externa que quiera entender la idea general de SPAZIO sin necesidad de leer todo el proyecto completo

# 4. Tabla de contenidos

[1. Historial de aprobaciones 1](#_Toc118690096)

[2. Historial de cambios 2](#_Toc1693801828)

[3. Introducción 2](#_Toc599373868)

[4. Tabla de contenidos 3](#_Toc1910646025)

[5. Lista de figuras 4](#_Toc193564191)

[6. Lista de tablas 5](#_Toc1164577269)

[7. Vista general del proyecto 7](#_Toc1059673631)

[7.1 Resumen del proyecto 8](#_Toc2020858256)

[7.1.1 Propósito, alcance y objetivos 8](#_Toc2058013562)

[7.1.2 Supuestos y restricciones 11](#_Toc1926752356)

[7.1.3 Entregables 13](#_Toc511683877)

[7.1.4 Resumen de calendarización y presupuesto 15](#_Toc610613488)

[7.1.5 Evolución del plan 17](#_Toc1453058999)

[8. Definiciones 18](#_Toc1617186826)

[9. Contexto del proyecto 22](#_Toc584451070)

[9.1 Modelo de proceso 23](#_Toc863105382)

[9.2 Análisis de alternativas y justificación 28](#_Toc1177288972)

[9.2.1 Alternativas investigadas para la mejora del proceso 28](#_Toc696428638)

[Alternativa A: Modelos de madurez de procesos (CMMI-DEV / MoProSoft / ISO 15504) 29](#_Toc1223238644)

[Alternativa B: Retrospectivas ágiles con enfoque en equipos autoorganizados 30](#_Toc1524681031)

[Alternativa C: Mejora dirigida por métricas y análisis cuantitativo (GQM/PSM) 31](#_Toc2100125632)

[Alternativa D: Mejora basada en lecciones aprendidas y gestión del conocimiento 32](#_Toc1399048972)

[9.2.2 Criterios de evaluación y análisis comparativo 33](#_Toc263805127)

[9.2.3 Justificación detallada de la selección 36](#_Toc1061117076)

[9.2.3.1 Coherencia con el modelo de ciclo de vida incremental 37](#_Toc1886109406)

[9.2.3.2 Adaptabilidad ante la incertidumbre del producto y el mercado 37](#_Toc1117648205)

[9.2.3.3 Bajo esfuerzo y adecuación al contexto académico 38](#_Toc1686345162)

[9.2.3.4 Fomento de la autogestión y la cohesión del equipo 38](#_Toc1865564085)

[9.2.3.5 Complementariedad con otras prácticas de gestión 39](#_Toc1731334297)

[9.2.3.6 Evidencia empírica de efectividad 39](#_Toc1288759492)

[9.2.4 Plan de implementación de la alternativa seleccionada 40](#_Toc2134604293)

[9.2.5 Riesgos asociados a la alternativa seleccionada y medidas de mitigación 41](#_Toc736201329)

[9.3 Plan de mejora del proceso 43](#_Toc627519628)

[9.4 Infraestructura y sistemas facilitadores 48](#_Toc1968131899)

[9.4.1 Copias de seguridad y control de acceso 50](#_Toc1630742404)

[9.4.2 Conectividad y disponibilidad 50](#_Toc1146685313)

[9.4.3 Administración y mantenimiento de los recursos 51](#_Toc722438360)

[9.5 Métodos, herramientas y técnicas 51](#_Toc2012474902)

[9.6 Plan de aceptación del producto 53](#_Toc1698754235)

[10. Administración del proyecto 56](#_Toc348363394)

[10.1 Inicio del proyecto 57](#_Toc918714248)

[Organigrama inicial del proyecto 58](#_Toc556846059)

[Partes interesadas externas 58](#_Toc576710902)

[10.2 Estimación 61](#_Toc239860462)

[Método utilizado 61](#_Toc691211158)

[Herramientas utilizadas 62](#_Toc1194593743)

[Estimación del software 62](#_Toc1842040306)

[Estimación del proyecto 62](#_Toc1808904401)

[Dónde se muestran las estimaciones 62](#_Toc1026876897)

[10.3 Entrenamiento del personal 63](#_Toc1412226675)

[10.3.1 Descripción de roles 64](#_Toc489189315)

[10.4 Planes de trabajo del proyecto 66](#_Toc1306544915)

[10.5 Actividades de trabajo 67](#_Toc2108518902)

[10.6 Calendarización 69](#_Toc526630333)

[10.7 Asignación de recursos 70](#_Toc1102556407)

[10.8 Asignación de presupuesto 71](#_Toc141105349)

[10.9 Contratación 73](#_Toc213499012)

[10.10 Desmantelamiento 74](#_Toc451784898)

[11. Monitoreo y control del proyecto 75](#_Toc484890219)

[11.1 Administración de requisitos 76](#_Toc1452538723)

[Artefactos de la administración de requisitos 76](#_Toc1107877237)

[Diagrama del proceso de administración de requisitos 77](#_Toc999330971)

[Requisitos de los dos incrementos principales 78](#_Toc1223912982)

[Relación entre requisitos, diseño, desarrollo y pruebas 79](#_Toc1595135)

[Matriz de trazabilidad de requisitos 80](#_Toc2040382276)

[11.2 Control de cambio del alcance 81](#_Toc1133732683)

[11.3 Control del calendario 83](#_Toc449310155)

[11.4 Control del presupuesto 84](#_Toc1442467179)

[11.5 Control de calidad 86](#_Toc1887451419)

[11.6 Cierre del proyecto 88](#_Toc1630433669)

[12. Entrega del producto 88](#_Toc2049999134)

[13. Procesos de soporte 90](#_Toc1013535097)

[13.1 Supervisión del proyecto y del ambiente de trabajo 91](#_Toc1332713475)

[Seguimiento del ambiente de trabajo 92](#_Toc906991651)

[13.2 Análisis y administración de riesgos 92](#_Toc270405711)

[Plan de riesgos 92](#_Toc1112016480)

[Proceso de identificación y tratamiento de riesgos 93](#_Toc41618145)

[Figura 5. BPMN simplificado del proceso de identificación y administración de riesgos. 93](#_Toc1791957240)

[Momentos de aplicación: 93](#_Toc1742089926)

[Registro priorizado de riesgos 94](#_Toc812525111)

[Riesgos principales y acciones 94](#_Toc1520788403)

[13.3 Administración de configuración 96](#_Toc429073200)

[Ítems de configuración identificados 96](#_Toc1962522011)

[Líneas base y convenciones 97](#_Toc1783550763)

[Proceso de control de cambios a los ítems de configuración 97](#_Toc794124457)

[Evolución de los artefactos durante el proyecto 98](#_Toc2096547467)

[13.4 Control de calidad 98](#_Toc1564739442)

[Procesos de control de calidad 98](#_Toc1386514160)

[Verificación y validación 99](#_Toc1373820443)

[BPMN del proceso de control de calidad 99](#_Toc192853332)

[Figura 7. BPMN simplificado del control de calidad y tratamiento de defectos. 99](#_Toc823217604)

[Revisiones y auditoría interna 100](#_Toc2110938789)

[Criterio para cerrar una funcionalidad 101](#_Toc1483630691)

[Criterio para cerrar un incremento 101](#_Toc1929489377)

[13.5 Métricas 101](#_Toc853272049)

[Métricas a utilizar y relación con los planes 101](#_Toc804717537)

[Proceso de recolección, procesamiento y uso de métricas 102](#_Toc433470216)

[Consolidación y almacenamiento 103](#_Toc50744442)

[Cierre de la sección 13 103](#_Toc800215887)

[14. Anexos 103](#_Toc1882234668)

[15. Referencias 103](#_Toc561734708)

# 5. Lista de figuras

**Figura 1:** Ciclo de vida incremental del proyecto SPAZIO
 **Figura 2:** Diagrama de proceso de alto nivel de SPAZIO

**Figura** 3: Organograma de SPAZIO

**Figura** 4: diagrama BPMN de la iteración

**Figura 5** Carta Gantt

**Figura 6** Diagrama BPMN del proceso de administración de requisitos.

**Figura 7:** BPMN simplificado del proceso de identificación y administración de riesgos.

**Figura 8:** BPMN simplificado del control de cambios de configuración.

**Figura 9:** BPMN simplificado del control de calidad y tratamiento de defectos.

# 6. Lista de tablas

* Tabla 1: Historial de aprobaciones
* Tabla 2: Historial de cambios
* Tabla 3: Entregables del proyecto SPAZIO
* Tabla 4: Fases e hitos principales del proyecto
* Tabla 5. Resumen de presupuesto del proyecto
* Tabla 6: Siglas y acrónimos
* Tabla 7: Conceptos del dominio
* Tabla-8: Conceptos de gestión del proyecto
* Tabla-9: Ponderaciones asignadas
* Tabla 10: Matriz de resultados
* Tabla 11: Riegos potenciales
* *Tabla 12:*  Plan *general de evaluación del proceso*
* Tabla 13 Infraestructura y recursos
* Tabla 14 *Métodos, herramientas y técnicas por categoría*
* Tabla 15 Criterios de aceptación de los entregables del proyecto SPAZIO
* Tabla 16 Interfaces externas del proyecto SPAZIO
* Tabla 17 Interfaces internas del equipo de SPAZIO
* Tabla 18 Descripción de roles del proyecto SPAZIO
* Tabla 19: WBS del incremento 1 (parqueaderos)
* Tabla 20: Calendario relativo del incremento 1 (parqueaderos)
* Tabla 21 Recursos por actividad del WBS (incremento 1)
* Tabla 22: Flujo de caja simplificado del proyecto
* Tabla 23: Bienes y servicios necesarios
* Tabla 24: Plan de desmantelamiento del proyecto
* Tabla 25 Historias de usuario
* Tabla 26 Matriz de trazabilidad
* Tabla 27 Reglas de trabajo y mecanismos de cumplimiento
* Tabla 28 Momentos de aplicación:
* Tabla 29 Registro priorizado de riesgos
* Tabla 30 Riesgos principales y acciones
* Tabla 31 Ítems de configuración identificados
* Tabla 32 Evolución de los artefactos durante el proyecto
* Tabla 33 Procesos de control de calidad
* Tabla 34 Preguntas de control
* Tabla 35 Métricas a utilizar y relación con los planes
* Tabla 36 Proceso de recolección, procesamiento y uso de métricas
* Tabla 37 Herramientas de SPAZIO
* Tabla 38: Análisis de alternativas tecnológicas (sección 9.4)
* Tabla 39: Especificaciones mínimas de hardware del equipo de desarrollo (sección 9.4)
* Tabla 40: Estimación por puntos de función del nuevo alcance (sección 10.2)
* Tabla 41: Factor de ajuste (sección 10.2)
* Tabla 42: Escenarios de esfuerzo, tiempo y costo (sección 10.2)
* Tabla 43: Distribución del esfuerzo por fase del ciclo de vida (sección 10.2)

# 7. Vista general del proyecto

Esta sección presenta una vista general del proyecto SPAZIO, para que el lector pueda entender los aspectos más importantes sin tener que leer todo el documento. Está escrita en un lenguaje simple, porque también puede ser leída por personas externas al equipo, como el cliente o el profesor del curso.

## 7.1 Resumen del proyecto

### 7.1.1 Propósito, alcance y objetivos

**Propósito**

El propósito del proyecto es construir una aplicación web que permita a las personas en Bogotá buscar y reservar espacios físicos por horas, y a los propietarios de esos espacios publicarlos y recibir reservas. El problema que atiende SPAZIO es doble: por un lado, existe una oferta de espacios subutilizados, como parqueaderos; por otro, existe una demanda de uso temporal que hoy no cuenta con un canal sencillo para buscar, reservar y pagar. SPAZIO reúne en una sola aplicación a los anfitriones y a los usuarios, con una cuenta única que habilita ambos roles.

La visión de este proyecto es que cualquier persona pueda darle valor a un espacio físico que no esté usando en un momento determinado, y que otra persona pueda encontrarlo de forma simple, confiable y rápida, sin importar la categoría del espacio.

**Alcance**

El alcance de esta versión del PMP corresponde exactamente a lo que se implementará durante el periodo del proyecto (siete semanas, del 10 de octubre al 28 de noviembre de 2026) según el SRS de SPAZIO. A diferencia de la versión anterior, el alcance se reduce a la categoría de parqueaderos y se identifica por los códigos de requisito del SRS. La reducción es resultado de la estimación de la sección 10.2, que demostró que el alcance anterior (dos categorías y un incremento de mejoras) no cabe en el periodo disponible con tres personas. El cambio se tramita formalmente según las secciones 7.1.5 y 11.2.

*Qué incluye el proyecto:*

* Diseño y construcción de una aplicación con dos roles, Usuario y Anfitrión, que pueden estar en la misma cuenta de la misma persona, es decir, la persona no necesita crear dos cuentas diferentes para usar los dos roles.
* El rol de Usuario, en el que la persona puede buscar espacios disponibles, compararlos entre sí, hacer la reserva y pagarla, todo dentro de la misma aplicación.
* El rol de Anfitrión, donde la persona puede publicar un espacio, decir en qué horarios está disponible, recibir las reservas que le hagan, calificar al usuario y ser calificado por él, y cobrar por el uso del espacio.
* Las categorías de espacios que se van a tener en cuenta al inicio del proyecto: parqueaderos, almacenamiento, oficinas, eventos, deporte, estudios y espacios comerciales.
* El enfoque geográfico inicial, que es solo la ciudad de Bogotá, sin pensar todavía en otras ciudades.
* La construcción de un producto mínimo viable, o MVP, enfocado solo en dos categorías de mucho uso, por ejemplo, parqueaderos y espacios de deporte. La idea de empezar con pocas categorías es conseguir liquidez más rápido en la aplicación, es decir, que haya suficientes anfitriones y usuarios activos, antes de agregar las demás categorías.

*Qué no incluye el proyecto:*

* La compra o venta de espacios físicos como inmuebles. SPAZIO no vende ni compra propiedades, solo conecta a las personas para que usen un espacio por un tiempo determinado.
* La expansión de la aplicación a otras ciudades diferentes de Bogotá. Esto se podría pensar más adelante, pero no hace parte de esta primera versión del proyecto.
* La definición final y muy detallada del modelo de ingresos, porque este tema todavía se tiene que trabajar con más profundidad más adelante.
* La integración con una pasarela de pagos real (Wompi) y el movimiento real de dinero.

**Objetivos**

**Objetivo general**

Desarrollar un producto mínimo viable de SPAZIO, en la categoría de parqueaderos, que permita a un usuario registrarse, buscar un parqueadero por ubicación, reservarlo y completar el flujo de pago mediante una pasarela de pago simulada, y que permita a un anfitrión publicar un parqueadero, definir su disponibilidad y consultar las reservas recibidas, dentro del periodo comprendido entre el 10 de octubre y el 28 de noviembre de 2026.

**Objetivos específicos**

* Implementar la gestión de cuenta y roles con una sola cuenta por persona
* Implementar la publicación de parqueaderos y la definición de disponibilidad sin traslapes
* Implementar la búsqueda de parqueaderos por ubicación con el servicio de geocodificación Nominatim
* Implementar la reserva con retención de 10 minutos, el pago simulado y la confirmación automática (RF-06, RF-07).
* Implementar la cancelación con cálculo de reembolso simulado y la consulta de reservas recibidas por el anfitrión (RF-08, RF-09).
* Aplicar la estimación por puntos de función para dimensionar el esfuerzo y verificar la viabilidad del alcance frente a la capacidad del equipo (sección 10.2).
* Documentar como mejoras futuras la integración de una pasarela de pago real, las calificaciones y las demás funciones pospuestas.

### 7.1.2 Supuestos y restricciones

**Supuestos**

Los supuestos son las cosas que el equipo da por ciertas para que el proyecto se pueda desarrollar. Si alguno de estos supuestos no es verdad, el proyecto podría tener problemas para avanzar como se espera. A continuación, se agrupan por tipo, como se acostumbra a hacer en la gestión de proyectos.

* Se supone que en Bogotá hay una cantidad suficiente de espacios físicos que no se están usando todo el tiempo, como parqueaderos, oficinas y bodegas, y que sus dueños estarían dispuestos a alquilarlos por un tiempo corto.
* Se supone que en Bogotá hay personas que necesitan este tipo de espacios por periodos cortos de tiempo, y que hoy no tienen una forma fácil de encontrarlos.
* Se supone que la demanda de espacios en las dos categorías del MVP, parqueaderos y deporte, es suficiente para que la plataforma pueda funcionar desde el principio.
* Se supone que las personas van a confiar en una aplicación digital para reservar y pagar un espacio físico, siempre que la plataforma les dé algún tipo de seguridad, como verificación de identidad o calificaciones.
* Se supone que los anfitriones van a estar dispuestos a mantener actualizada la disponibilidad de sus espacios dentro de la aplicación.
* Se supone que existe algún medio de pago digital disponible para los usuarios en Bogotá, que se pueda integrar a la aplicación.
* Se supone que el equipo va a contar con el tiempo y los conocimientos técnicos necesarios para desarrollar el MVP dentro del curso.
* Se supone que el servicio gratuito de geocodificación Nominatim, basado en datos de OpenStreetMap, cubre las necesidades de la búsqueda por ubicación dentro de los límites de uso de su plan gratuito.
* Se supone que los planes gratuitos de Supabase y del servicio de hospedaje son suficientes para el volumen de datos y de tráfico de un MVP académico.
* Se supone que el equipo dispone de tres computadores personales que cumplen las especificaciones mínimas de la Tabla 39, y de conexión a Internet para el trabajo diario y las pruebas.

**Restricciones**

Las restricciones son las limitaciones que tiene el proyecto o el producto final. También se agrupan por tipo para que sea más claro de dónde viene cada una.

* El periodo del proyecto está fijado entre el sábado 10 de octubre y el sábado 28 de noviembre de 2026 (siete semanas).
* El equipo está conformado por tres personas, con una jornada de cinco horas diarias de lunes a viernes.
* Dentro del periodo hay tres festivos nacionales en Colombia en los que el equipo no trabaja: lunes 12 de octubre, lunes 2 de noviembre y lunes 16 de noviembre. En consecuencia, el periodo cuenta con 32 días hábiles, no 35.
* La capacidad total del periodo es de 32 días hábiles × 3 personas × 5 horas = 480 horas-persona, lo que condiciona el alcance (ver sección 10.2).
* El proyecto se limita a la ciudad de Bogotá y a la categoría de parqueaderos.
* No se dispone de presupuesto monetario: se emplean exclusivamente servicios con plan gratuito.
* El pago es simulado: no hay integración con pasarela real ni movimiento de dinero, por decisión del equipo registrada en esta versión.

**Restricciones de producto y regulación**

* El modelo de ingresos final de la plataforma todavía no se ha decidido, por lo que en esta entrega solo se mencionan alternativas generales, como comisión por transacción o tarifa de anfitrión.
* Las políticas de confianza, daños, seguros y disputas todavía no están definidas en detalle, y se deben trabajar en las siguientes entregas del proyecto.
* El proyecto debe cumplir con las normas legales colombianas relacionadas con el manejo de pagos digitales y protección de datos personales, aunque esto todavía no se ha definido con detalle.

### 7.1.3 Entregables

Propósito

Los entregables del proyecto SPAZIO representan los productos y documentos que serán generados durante el desarrollo del proyecto. Estos permiten verificar el avance del equipo, validar el cumplimiento de los objetivos planteados y facilitar la comunicación entre los participantes del proyecto.

Los entregables incluyen tanto productos dirigidos al usuario final, como documentos internos necesarios para la gestión, diseño, desarrollo y validación de la solución.

Tabla 3 Entregables del proyecto SPAZIO

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Entregable** | **Cantidad** | **Descripción** | **Dirigido a** | **Fecha de entrega** |
| Documento Plan de Administración del Proyecto (PMP), versión 2.0 | 1 | Documento que define la organización del proyecto, el alcance ajustado a la categoría parqueaderos, los supuestos, las restricciones, los entregables, el cronograma y el presupuesto. | Equipo del proyecto, profesor y partes interesadas. | 11 de octubre de 2026 |
| Documento de requisitos del sistema (SRS) actualizado | 1 | Documento con los requisitos funcionales, no funcionales y de información alineados con el alcance de parqueaderos y con la pasarela de pago simulada. | Equipo de desarrollo y cliente académico. | 16 de octubre de 2026 |
| Diseño de arquitectura de software | 1 | Documento técnico con la estructura de la solución, los componentes principales (incluida la pasarela de pago simulada) y su comunicación. | Equipo técnico. | 16 de octubre de 2026 |
| Diseño de interfaz de usuario (UI/UX) | 1 | Prototipos de las pantallas de registro, acceso, publicación, búsqueda, reserva, pago simulado y reservas recibidas. | Equipo de desarrollo. | 23 de octubre de 2026 |
| Modelo de datos | 1 | Diseño de la estructura de información para cuentas, publicaciones, disponibilidad, reservas y transacciones simuladas. | Equipo de desarrollo. | 16 de octubre de 2026 |
| Producto mínimo viable (MVP) de SPAZIO (parqueaderos) | 1 | Primera versión funcional con registro y acceso, publicación y disponibilidad, búsqueda por ubicación, reserva con retención de 10 minutos, pago simulado, cancelación con reembolso simulado y reservas recibidas. | Usuarios y anfitriones de Bogotá (contexto de validación). | 20 de noviembre de 2026 |
| Pruebas del sistema | 1 conjunto | Evidencias de las pruebas funcionales de los requisitos implementados, incluidos los escenarios de la pasarela simulada (aprobado, rechazado, sin respuesta y expiración). | Equipo del proyecto y cliente académico. | 25 de noviembre de 2026 |
| Manual de usuario | 1 | Instrucciones de uso de la aplicación en los roles de usuario y de anfitrión, con el aviso de pago simulado. | Usuarios finales. | 27 de noviembre de 2026 |
| Informe final del proyecto | 1 | Documento con resultados, avances, dificultades y conclusiones del desarrollo. | Profesor y partes interesadas. | 28 de noviembre de 2026 |

Los entregables principales están relacionados con el objetivo general del proyecto: desarrollar una aplicación tipo Marketplace horizontal que permita buscar, reservar y pagar espacios físicos temporales, además de permitir a los propietarios publicar dichos espacios.

### 7.1.4 Resumen de calendarización y presupuesto

Resumen de calendarización

El proyecto se ejecuta en un único incremento de siete semanas (10 de octubre – 28 de noviembre de 2026), enfocado en la categoría de parqueaderos. La calendarización considera los tres festivos del periodo y, por tanto, 32 días hábiles. La Tabla 4 presenta las fases, sus actividades, el hito esperado y las fechas; su detalle operativo, con precedencias, se encuentra en la Tabla 20, y su representación gráfica en la carta Gantt (Figura 5, ver sección 10.6)

Tabla 4 Fases e hitos principales del proyecto

|  |  |  |  |
| --- | --- | --- | --- |
| **Fase** | **Actividades principales** | **Hito esperado** | **Fecha** |
| Inicio y planeación | Ajuste del PMP y del SRS, diseño de arquitectura, modelo de datos, configuración del repositorio y de Supabase, diseño de la pasarela de pago simulada. | Plan y entorno base aprobados. | 10 – 16 de octubre de 2026 (Semana 1, lunes 12 festivo) |
| Diseño y cuentas | Diseño UI/UX y desarrollo de la gestión de cuenta y roles (RF-12, RF-13, RF-14). | Registro, inicio de sesión y activación de rol operativos. | 19 – 23 de octubre de 2026 (Semana 2) |
| Publicación y disponibilidad | Publicación de parqueaderos y definición de disponibilidad (RF-03, RF-05). | Publicación y disponibilidad operativas. | 26 – 30 de octubre de 2026 (Semana 3) |
| Búsqueda por ubicación | Búsqueda de parqueaderos con geocodificación (RF-01). | Búsqueda por ubicación operativa. | 3 – 6 de noviembre de 2026 (Semana 4, lunes 2 festivo) |
| Reserva, pago simulado y confirmación | Reserva con retención de 10 minutos, pago simulado y confirmación automática (RF-06, RF-07). | Flujo de reserva y pago simulado operativo. | 9 – 13 de noviembre de 2026 (Semana 5) |
| Cancelación, reservas recibidas e integración | Cancelación con reembolso simulado (RF-08), reservas recibidas (RF-09) e integración. | MVP integrado. | 17 – 20 de noviembre de 2026 (Semana 6, lunes 16 festivo) |
| Pruebas, documentación y cierre | Pruebas, correcciones, manual de usuario e informe final. | Entrega final. | 23 – 28 de noviembre de 2026 (Semana 7; entrega el sábado 28) |

Resumen de presupuesto

El proyecto no dispone de presupuesto monetario y se ejecuta con servicios de plan gratuito. No obstante, la norma exige una estimación de referencia con supuestos explícitos. Por ello, el presupuesto consolidado incluye el costo de referencia del software, derivado de la estimación por puntos de función (sección 10.2), y el costo de la infraestructura, que es cero mientras no se superen los límites de los planes gratuitos. El costo de referencia del software no representa un desembolso real del equipo; se presenta como valorización del esfuerzo, de acuerdo con el ejercicio del curso.

Supuestos del presupuesto: jornada de 5 horas diarias por persona; 20 días hábiles por mes; 3 personas; salario mensual de referencia de $2.359.685 COP por persona, escenario de productividad de 6 horas por punto de función, por tratarse de un stack ya conocido (Supabase y React). Con 75 puntos de función, el esfuerzo es de aproximadamente 447 horas y el costo de referencia del software es de aproximadamente $10,9 millones de COP (ver sección 10.2, Tabla 42).

Tabla 5 Resumen de presupuesto del proyecto

|  |  |  |
| --- | --- | --- |
| **Ítem** | **Descripción** | **Costo estimado (COP)** |
| Costo de referencia del software | Valorización del esfuerzo de desarrollo: 447 horas ≈ 4,64 meses-persona × $2.359.685, escenario de 6 h/PF (sección 10.2). | ≈$10.500.000 (referencia, sin desembolso real) |
| Infraestructura tecnológica | Supabase (base de datos y autenticación) y servicio de hospedaje, en plan gratuito. | $0 (plan gratuito; ver límites en la sección 9.4) |
| Herramientas de desarrollo y diseño | Visual Studio Code, GitHub, Figma, en plan gratuito. | $0 |
| Servicio de geocodificación | Nominatim (OpenStreetMap), uso gratuito dentro de sus límites. | $0 |
| Pasarela de pago simulada | Módulo propio del proyecto; no genera costo de licenciamiento. | $0 |
| Comunicación | WhatsApp o Discord, en plan gratuito. | $0 |
| Costo total de referencia del proyecto | — | $10.948.937 (referencia); desembolso real: $0 |

### 7.1.5 Evolución del plan

El Plan de Administración del Proyecto (PMP) será un documento dinámico que podrá modificarse durante el desarrollo de SPAZIO cuando existan cambios importantes en el alcance, cronograma, presupuesto, riesgos o entregables definidos inicialmente.

Los cambios al plan deberán ser registrados en el historial de cambios del documento, indicando la fecha, descripción del cambio realizado y responsable de la modificación. Esto permitirá mantener trazabilidad sobre la evolución del proyecto.

El proceso general para realizar cambios será:

1. Identificación de la necesidad de cambio por parte del equipo del proyecto o una parte interesada.
2. Evaluación del impacto del cambio sobre el alcance, tiempo, costos y entregables.
3. Revisión y aprobación del cambio por los responsables definidos del proyecto.
4. Actualización de las secciones correspondientes del PMP.
5. Registro del cambio en el historial de cambios del documento.

Los cambios de alcance se reflejan en la sección 7.1.1; los cambios de entregables, fechas o costos actualizan las secciones 7.1.3 y 7.1.4. La versión 2.0 de este documento es, en sí misma, un ejemplo de aplicación de este proceso: la estimación de la sección 10.2 evidenció que el alcance anterior (dos categorías y un incremento de mejoras) no era viable en siete semanas con tres personas, por lo que el equipo tramitó un cambio de alcance hacia la categoría de parqueaderos con pasarela de pago simulada. Este caso se documenta en detalle en la sección 11.2.

Actualmente el documento cuenta con un historial de cambios inicial donde se registra que esta primera versión fue desarrollada hasta la sección 7

# 8. Definiciones

El objetivo de esta sección es establecer un lenguaje común para los lectores del documento y facilitar la comprensión de los conceptos propios del proyecto SPAZIO. Se incluyen las siglas, acrónimos y términos técnicos o relacionados con el dominio del problema que son utilizados a lo largo del Plan de Administración del Proyecto.

***8.1 Siglas y acrónimos***

|  |  |  |
| --- | --- | --- |
| Sigla / acrónimo | Significado | Descripción |
| PMP | *Project Management Plan* | Plan de Administración del Proyecto. Documento que establece cómo se organizará, desarrollará y controlará el proyecto SPAZIO. |
| MVP | *Minimum Viable Product* | Producto Mínimo Viable. Primera versión funcional de SPAZIO que contiene las funcionalidades esenciales para validar la propuesta de valor del proyecto. |
| UI | *User Interface* | Interfaz de Usuario. Elementos visuales y de interacción mediante los cuales los usuarios utilizan la aplicación. |
| UX | *User Experience* | Experiencia de Usuario. Percepción y experiencia que tiene una persona al interactuar con la plataforma. |
| BPMN | *Business Process Model and Notation* | Notación utilizada para representar gráficamente procesos de negocio y sus actividades, eventos y decisiones. |
| WBS | *Work Breakdown Structure* | Estructura de Descomposición del Trabajo. Herramienta utilizada para dividir el trabajo del proyecto en componentes manejables. |

***8.2 Conceptos del dominio***

|  |  |
| --- | --- |
| Concepto | Definición |
| SPAZIO | Plataforma tipo Marketplace horizontal orientado a conectar personas que disponen de espacios físicos con personas que necesitan utilizarlos temporalmente en Bogotá. |
| Marketplace horizontal | Plataforma digital que permite conectar oferta y demanda de diferentes categorías de productos o servicios, en este caso, diferentes tipos de espacios físicos. |
| Usuario | Persona que utiliza SPAZIO para buscar espacios disponibles, compararlos, realizar reservas y efectuar el pago correspondiente. |
| Anfitrión | Persona que dispone de un espacio físico y utiliza SPAZIO para publicarlo, establecer su disponibilidad, recibir reservas y obtener ingresos por su utilización. |
| Espacio físico | Lugar que un anfitrión pone a disposición de los usuarios durante un periodo determinado. Puede corresponder, entre otros, a un parqueadero, oficina, bodega, espacio deportivo o espacio comercial. |
| Reserva | Acción mediante la cual un usuario solicita y asegura el uso de un espacio disponible durante un periodo determinado. |
| Disponibilidad | Periodos de tiempo durante los cuales un espacio publicado puede ser reservado por los usuarios. |
| Publicación | Información registrada por un anfitrión para presentar un espacio en la plataforma, incluyendo sus características, disponibilidad y condiciones de uso. |
| Categoría | Clasificación utilizada para organizar los diferentes tipos de espacios disponibles en SPAZIO. Entre las categorías consideradas se encuentran parqueaderos, almacenamiento, oficinas, eventos, deporte, estudios y espacios comerciales. |
| MVP | Primera versión de SPAZIO enfocada en un conjunto reducido de funcionalidades y categorías, con el objetivo de validar la propuesta y conseguir liquidez en la plataforma antes de ampliar su alcance. |
| Liquidez de la plataforma | Situación en la que existe una cantidad suficiente de usuarios y anfitriones activos para que la oferta y la demanda de espacios puedan encontrarse de manera efectiva. |
| Calificación | Valoración que un usuario o anfitrión puede realizar sobre la otra parte después de una interacción o reserva, como mecanismo de confianza dentro de la plataforma. |
| Modelo de ingresos | Forma mediante la cual SPAZIO podría generar ingresos a partir de las operaciones realizadas en la plataforma, por ejemplo, mediante una comisión por transacción o una tarifa para los anfitriones. |
| Políticas de confianza | Reglas y condiciones destinadas a establecer cómo se manejarán situaciones como daños en los espacios, seguros y disputas entre usuarios y anfitriones. |
| Transacción | Operación realizada dentro de la plataforma asociada con la reserva y pago por el uso temporal de un espacio. |
| Espacio disponible | Espacio físico publicado en SPAZIO que puede ser reservado porque cuenta con disponibilidad durante el periodo solicitado por un usuario. |
| Producto mínimo viable | Ver **MVP**. Se refiere a la primera versión funcional de la solución que contiene las características necesarias para probar su funcionamiento y validar la propuesta de valor. |

***8.3 Conceptos de gestión del proyecto***

|  |  |
| --- | --- |
| Concepto | Definición |
| SPAZIO | Plataforma tipo marketplace horizontal orientada a conectar personas que disponen de espacios físicos con personas que necesitan utilizarlos temporalmente en Bogotá. |
| Marketplace horizontal | Plataforma digital que conecta oferta y demanda de distintas categorías de espacios físicos. |
| Usuario | Persona que utiliza SPAZIO para buscar espacios disponibles, reservarlos y pagarlos. |
| Anfitrión | Persona que dispone de un espacio físico y lo publica, establece su disponibilidad y recibe reservas. |
| Espacio físico | Lugar que un anfitrión pone a disposición de los usuarios durante un periodo determinado. En este alcance, un parqueadero. |
| Reserva | Acción mediante la cual un usuario asegura el uso de un espacio disponible durante un periodo determinado. |
| Disponibilidad | Periodos de tiempo durante los cuales un espacio publicado puede ser reservado. |
| Publicación | Información que registra un anfitrión para presentar un espacio: características, disponibilidad, precio y condiciones de uso. |
| Categoría | Clasificación de los espacios. El alcance de esta entrega se limita a la categoría parqueaderos. |
| Pasarela de pago simulada | Módulo propio de SPAZIO que reproduce el comportamiento de un pago sin integración con una pasarela real ni movimiento de dinero. Responde «aprobado», «rechazado» o «sin respuesta» según el escenario de prueba, y permite demostrar el flujo completo de reserva. |
| Retención | Bloqueo temporal de un periodo de disponibilidad durante 10 minutos mientras el usuario completa el pago simulado (RN-10). |
| Reembolso simulado | Cálculo del monto de devolución según RN-12 con registro del estado «reembolsado», sin movimiento real de dinero. |
| Geocodificación | Conversión de una dirección o un barrio en coordenadas geográficas, para calcular distancias en la búsqueda. Se usa Nominatim (OpenStreetMap). |
| Transacción | Registro de la operación de pago asociada a una reserva. En este alcance, siempre simulada. |
| Liquidez de la plataforma | Situación en la que existe una cantidad suficiente de usuarios y anfitriones activos para que oferta y demanda se encuentren. |
| Modelo de ingresos | Forma en que SPAZIO podría generar ingresos. En el MVP no se cobra comisión. |

# 9. Contexto del proyecto

En esta sección se describe cómo se organizará el desarrollo del proyecto SPAZIO, indicando el modelo de proceso que se utilizará y las principales prácticas que seguirá el equipo durante la construcción del producto. También se explica brevemente la razón por la cual se seleccionó este modelo de proceso.

## 9.1 Modelo de proceso

El equipo del proyecto SPAZIO decidió utilizar un modelo de ciclo de vida incremental. Esto significa que el producto no se desarrollará completamente de una sola vez, sino que se construirá y entregará progresivamente mediante diferentes incrementos. Cada incremento permitirá desarrollar un conjunto de funcionalidades del sistema y obtener retroalimentación antes de continuar con el siguiente.

**Descripción del modelo de ciclo de vida**

El proyecto comienza con una planeación general en la que se definen el problema, el alcance, los objetivos y la categoría de espacios, de acuerdo con la sección 7. A continuación se ejecuta el desarrollo mediante incrementos; para cada incremento se realizan actividades de ajuste de requisitos, diseño, desarrollo, pruebas y revisión del resultado.

En esta entrega, el incremento 1 abarca las siete semanas completas del proyecto (10 de octubre – 28 de noviembre de 2026) y se concentra en la categoría de parqueaderos, con la pasarela de pago simulada. Los incrementos 2 (espacios deportivos y calificaciones) y 3 (mejoras y otras categorías) se describen como hoja de ruta y quedan fuera del alcance de implementación de esta entrega. De este modo, la planificación refleja la decisión de ajustar el alcance a la capacidad real del equipo, documentada en las secciones 10.2 y 11.2.

Los principales hitos del ciclo de vida son:

* **Hito 1:** Plan y entorno base aprobados (fin de la Semana 1).
* **Hito 2:** Gestión de cuenta y roles operativa (fin de la Semana 2).
* **Hito 3:** Publicación y disponibilidad operativas (fin de la Semana 3).
* **Hito 4:** Búsqueda por ubicación operativa (fin de la Semana 4).
* **Hito 5:** Flujo de reserva y pago simulado operativo (fin de la Semana 5).
* **Hito 6:** MVP integrado (fin de la Semana 6).
* **Hito 7:** Entrega final del MVP de parqueaderos (sábado 28 de noviembre de 2026).

Los principales entregables serán la documentación inicial del proyecto, las funcionalidades desarrolladas en cada incremento, las versiones parciales del sistema, los resultados de las pruebas y la versión final del MVP.

La **Figura 1** presenta una visión general del ciclo de vida incremental de SPAZIO, mostrando la planeación inicial, los diferentes incrementos, las revisiones realizadas después de cada uno y la entrega final del MVP.

![](data:image/png;base64...)

**Figura 1. Ciclo de vida incremental del proyecto SPAZIO**

La **Figura 2** presenta el proceso general de SPAZIO mediante un **diagrama BPMN de alto nivel**. El diagrama representa la interacción entre el anfitrión, el usuario y el sistema SPAZIO, desde la publicación de un espacio hasta su reserva, utilización y posterior calificación. Este proceso servirá como referencia para mantener consistencia con los demás diagramas BPMN que se presenten en el documento.

![](data:image/png;base64...)

**Figura 2. Diagrama BPMN de proceso de alto nivel de SPAZIO**

**Prácticas**

El modelo incremental establece la forma general en que se organizará el desarrollo, pero no define todas las actividades que el equipo realizará durante el trabajo diario. Por esta razón, se utilizarán diferentes prácticas para apoyar la gestión, el desarrollo y la calidad del proyecto.

Las principales prácticas serán:

* **Historias de usuario:** los requisitos de cada incremento se expresarán mediante historias de usuario sencillas, permitiendo describir las funcionalidades desde la perspectiva de los usuarios del sistema.
* **Tablero Kanban:** se utilizará un tablero con las columnas **Por hacer, En progreso y Terminado**, con el propósito de visualizar las tareas pendientes y realizar seguimiento al avance del equipo.
* **Reuniones periódicas:** los integrantes realizarán reuniones cortas de seguimiento para revisar las actividades realizadas, las tareas pendientes y las dificultades encontradas durante el desarrollo.
* **Control de versiones con Git:** el código fuente se gestionará mediante Git. Para cada nueva funcionalidad se podrá utilizar una rama independiente, integrando los cambios a la rama principal después de realizar las revisiones y pruebas correspondientes.
* **Pruebas de software:** se realizarán pruebas sobre las funcionalidades principales desarrolladas en cada incremento, especialmente aquellas relacionadas con la búsqueda de espacios, las reservas y los procesos asociados a estas.
* **Revisión de código:** antes de integrar cambios importantes a la rama principal, otro integrante del equipo realizará una revisión para detectar errores y mantener una calidad uniforme en el código.
* **Integración frecuente:** los cambios desarrollados por los integrantes se integrarán periódicamente para detectar conflictos o errores de integración de manera temprana.
* **Documentación de incrementos:** al finalizar cada incremento se registrarán las funcionalidades implementadas, los resultados obtenidos y los aspectos que hayan quedado pendientes para etapas posteriores.

Estas prácticas serán descritas con mayor detalle en las secciones correspondientes del PMP. En esta sección se presentan únicamente como parte de la definición general del proceso de desarrollo.

## 9.2 Análisis de alternativas y justificación

La presente subsección tiene como objetivo exponer de manera sistemática y rigurosa el proceso de investigación y análisis realizado por el equipo del proyecto SPAZIO para definir el enfoque de mejora del proceso que se aplicará durante el desarrollo. La mejora del proceso es un componente crítico en la gestión de proyectos de software, pues permite identificar oportunamente desviaciones, corregir prácticas ineficientes y adaptar la dinámica de trabajo a las condiciones cambiantes del entorno y del producto. Dado que SPAZIO se desarrolla bajo un modelo de ciclo de vida incremental (descrito en la sección 9.1), la selección de un mecanismo adecuado para la evaluación y ajuste del proceso debe considerar no solo la eficacia técnica, sino también la viabilidad operativa y el contexto académico en el que se enmarca el proyecto.

En este análisis se presentan las alternativas investigadas, se describen sus fundamentos teóricos, se evalúan sus ventajas y desventajas a la luz de las características particulares de SPAZIO y, finalmente, se justifica la elección del enfoque que guiará las actividades de mejora continua. Este ejercicio no solo cumple con un requisito formal del plan, sino que también constituye una práctica de reflexión crítica que fortalece la capacidad del equipo para tomar decisiones informadas.

### 9.2.1 Alternativas investigadas para la mejora del proceso

El equipo de SPAZIO realizó una revisión bibliográfica y un análisis de casos de estudio en proyectos de similar envergadura para identificar los enfoques más representativos de mejora del proceso. Se consideraron tanto modelos tradicionales de gestión de calidad como enfoques ágiles y contemporáneos. A continuación, se describen las cuatro alternativas principales que fueron objeto de estudio.

#### Alternativa A: Modelos de madurez de procesos (CMMI-DEV / MoProSoft / ISO 15504)

Los modelos de madurez, como CMMI-DEV (Capability Maturity Model Integration for Development), MoProSoft (Modelo de Procesos de Software para la Industria Mexicana) y la norma ISO/IEC 15504 (SPICE), proponen un marco de referencia para evaluar y mejorar los procesos de una organización a través de niveles de capacidad o madurez. Estos modelos establecen un conjunto de áreas de proceso (p. ej., gestión de requisitos, gestión de configuración, aseguramiento de calidad) y definen prácticas específicas que deben implementarse para alcanzar un determinado nivel. La mejora se concibe como un recorrido gradual desde un nivel inicial (caótico) hasta un nivel optimizado, donde los procesos están cuantitativamente gestionados y mejorados continuamente (Chrissis, Konrad y Shrum, 2011).

**Ventajas identificadas**:

* Proporcionan un enfoque estructurado y estandarizado, ampliamente reconocido en la industria, lo que facilita la comparabilidad y la certificación.
* Promueven la documentación exhaustiva y la institucionalización de buenas prácticas, reduciendo la dependencia de personas clave.
* Permiten identificar brechas de capacidad de manera objetiva y establecer hojas de ruta claras para la maduración organizacional.

**Desventajas identificadas**:

* Requieren una inversión significativa en tiempo, recursos y capacitación, lo que los hace poco adecuados para proyectos de corta duración o equipos pequeños (Humphrey, 2002).
* Su rigidez puede limitar la adaptabilidad ante cambios en los requisitos o en el entorno del proyecto, ya que los procesos formalizados son difíciles de modificar sobre la marcha.
* La carga administrativa y burocrática asociada puede desviar la atención del objetivo principal: entregar valor al cliente de manera rápida y eficiente.

#### Alternativa B: Retrospectivas ágiles con enfoque en equipos autoorganizados

Esta alternativa se fundamenta en los principios del Manifiesto Ágil y en marcos de trabajo como Scrum, Kanban y XP. La mejora del proceso se aborda a través de reuniones periódicas (retrospectivas) en las que el equipo reflexiona sobre su desempeño, identifica oportunidades de mejora y acuerda acciones concretas para implementar en el siguiente ciclo de trabajo. La retrospectiva sigue una estructura típica que incluye: establecer el contexto, recopilar datos, generar insights, decidir qué hacer y cerrar la sesión con un plan de acción (Derby y Larsen, 2006). Esta práctica se basa en el ciclo de aprendizaje de Deming (Planificar-Hacer-Verificar-Actuar) y en la teoría de equipos de alto rendimiento.

**Ventajas identificadas**:

* Es un enfoque ligero, de bajo costo y fácil de implementar, que no requiere herramientas sofisticadas ni capacitación extensa.
* Fomenta la participación activa de todos los miembros del equipo, promoviendo la propiedad colectiva del proceso y la cultura de mejora continua.
* Se adapta naturalmente a ciclos de desarrollo cortos e incrementales, permitiendo ajustes rápidos y frecuentes.
* Facilita la identificación de problemas tanto técnicos como interpersonales, mejorando la comunicación y la cohesión del equipo.

**Desventajas identificadas**:

* Su efectividad depende en gran medida de la madurez y la disciplina del equipo; si no se lleva a cabo con seriedad, puede convertirse en una reunión superficial y sin impacto real.
* Puede carecer de objetividad si no se apoya con datos cuantitativos, ya que las percepciones subjetivas pueden sesgar el diagnóstico.
* La implementación de acciones de mejora puede ser inconsistente si no se hace un seguimiento adecuado de los acuerdos.

#### Alternativa C: Mejora dirigida por métricas y análisis cuantitativo (GQM/PSM)

Este enfoque se basa en la recolección sistemática de métricas objetivas sobre el desempeño del proyecto y el producto, y su posterior análisis para identificar áreas de mejora. Métodos como GQM (Goal-Question-Metric) y PSM (Practical Software Measurement) proponen un marco para definir metas medibles, formular preguntas relevantes y seleccionar métricas que permitan responderlas (Basili, Caldiera y Rombach, 1994). El análisis puede incluir técnicas estadísticas, gráficos de control, análisis de tendencias y modelos de predicción. La mejora se dirige a aquellos aspectos que muestran desviaciones significativas con respecto a los objetivos establecidos.

**Ventajas identificadas**:

* Proporciona una base objetiva y cuantificable para la toma de decisiones, reduciendo la subjetividad y el sesgo cognitivo.
* Permite detectar problemas de manera temprana, antes de que se materialicen en fallos o retrasos críticos.
* Facilita la comunicación con los interesados (stakeholders) al presentar evidencia numérica del progreso y la calidad.
* Puede integrarse con herramientas de automatización para la recolección continua de datos (p. ej., integración continua, sistemas de seguimiento de incidencias).

**Desventajas identificadas**:

* Requiere un esfuerzo inicial significativo para definir las métricas adecuadas, implementar los mecanismos de recolección y capacitar al equipo en su interpretación.
* La sobrecarga de datos puede llevar a una parálisis analítica si no se priorizan correctamente las métricas.
* Las métricas por sí solas no explican las causas subyacentes de los problemas; es necesario complementarlas con análisis cualitativos.
* En equipos pequeños y proyectos de corta duración, el costo de implementación puede no justificar el beneficio obtenido.

#### Alternativa D: Mejora basada en lecciones aprendidas y gestión del conocimiento

Esta alternativa se centra en la captura, almacenamiento y difusión del conocimiento generado durante el proyecto, con el fin de evitar la repetición de errores y replicar prácticas exitosas. Se utilizan repositorios de lecciones aprendidas, bases de datos de experiencias, comunidades de práctica y sesiones de intercambio de conocimientos. La mejora del proceso se concibe como un aprendizaje organizacional que trasciende el proyecto individual y beneficia a futuros proyectos (Nonaka y Takeuchi, 1995; Schindler y Eppler, 2003).

**Ventajas identificadas**:

* Promueve una cultura de aprendizaje continuo y capitalización del conocimiento tácito y explícito.
* Puede generar beneficios a largo plazo para la organización, incluso más allá del proyecto actual.
* Es complementaria a otros enfoques, ya que las lecciones aprendidas pueden alimentar retrospectivas y análisis de métricas.

**Desventajas identificadas**:

* Requiere disciplina para documentar de manera sistemática y accesible las lecciones aprendidas, lo que puede resultar engorroso.
* El conocimiento capturado puede volverse obsoleto rápidamente si no se actualiza.
* En proyectos de corta duración, el retorno de la inversión en gestión del conocimiento puede ser limitado.

### 9.2.2 Criterios de evaluación y análisis comparativo

Para seleccionar la alternativa más adecuada para SPAZIO, el equipo definió un conjunto de criterios de evaluación que reflejan las prioridades y restricciones del proyecto, tal como se describen en la sección 7.1.2 (Supuestos y restricciones). Los criterios fueron los siguientes:

1. **Esfuerzo requerido**: tiempo y recursos humanos necesarios para implementar y mantener el enfoque de mejora. Se valoró positivamente un bajo esfuerzo, dado que el proyecto se desarrolla en un contexto académico con plazos ajustados.
2. **Curva de aprendizaje**: facilidad con la que los integrantes del equipo pueden comprender y aplicar el enfoque. Se prefirieron alternativas con una curva de aprendizaje suave, que no requieran capacitación extensa ni conocimientos especializados.
3. **Capacidad de adaptación**: flexibilidad del enfoque para ajustarse a cambios en los requisitos, el alcance o la dinámica del equipo. Se valoró la capacidad de respuesta rápida y la ausencia de rigidez burocrática.
4. **Alineación con el ciclo de vida incremental**: grado en que el enfoque se integra naturalmente con el modelo de desarrollo incremental seleccionado (sección 9.1). Se priorizaron alternativas que permitan evaluaciones al final de cada incremento, sin interrumpir el flujo de trabajo.
5. **Efectividad para la mejora real**: capacidad demostrada del enfoque para generar mejoras tangibles en la calidad del producto y la eficiencia del proceso, basada en evidencia empírica y casos de estudio.
6. **Sostenibilidad en el tiempo**: posibilidad de mantener el enfoque a lo largo de todo el proyecto sin que se degrade su efectividad o se convierta en una carga.

Cada criterio fue ponderado según su importancia relativa para SPAZIO, utilizando una escala de 1 a 5 (siendo 5 la máxima prioridad). La siguiente tabla muestra las ponderaciones asignadas:

**Tabla 9 Ponderaciones asignadas**

|  |  |  |
| --- | --- | --- |
| Criterio | Ponderación (1-5) | Justificación |
| Esfuerzo requerido | 5 | El tiempo es el recurso más escaso; cualquier enfoque que consuma demasiado esfuerzo compromete el desarrollo del MVP. |
| Curva de aprendizaje | 4 | El equipo no tiene experiencia previa en modelos formales de mejora; se busca una adopción rápida. |
| Capacidad de adaptación | 5 | Los requisitos y supuestos del proyecto son inciertos (sección 7.1.2); se necesita flexibilidad para ajustar el proceso. |
| Alineación con ciclo incremental | 5 | El ciclo de vida es la columna vertebral del proyecto; la mejora debe encajar sin fricción. |
| Efectividad para la mejora real | 4 | Es fundamental que el enfoque realmente ayude a corregir problemas y no sea solo un ejercicio formal. |
| Sostenibilidad en el tiempo | 3 | El proyecto dura un semestre; la sostenibilidad a largo plazo es menos crítica que la efectividad inmediata. |

Con base en estas ponderaciones, se realizó una evaluación cuantitativa de cada alternativa, asignando una calificación de 1 a 5 para cada criterio (5 = excelente, 1 = deficiente). Los resultados se muestran en la siguiente matriz:

**Tabla 10 Matriz de resultados**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Alternativa | Esfuerzo (5) | Curva (4) | Adaptación (5) | Alineación (5) | Efectividad (4) | Sostenibilidad (3) | Puntuación ponderada |
| A. Modelos de madurez | 2 | 2 | 2 | 2 | 4 | 5 | (2×5)+(2×4)+(2×5)+(2×5)+(4×4)+(5×3) = 10+8+10+10+16+15 = **69** |
| B. Retrospectivas ágiles | 5 | 5 | 5 | 5 | 4 | 4 | (5×5)+(5×4)+(5×5)+(5×5)+(4×4)+(4×3) = 25+20+25+25+16+12 = **123** |
| C. Métricas cuantitativas | 3 | 3 | 4 | 4 | 5 | 4 | (3×5)+(3×4)+(4×5)+(4×5)+(5×4)+(4×3) = 15+12+20+20+20+12 = **99** |
| D. Lecciones aprendidas | 4 | 4 | 3 | 3 | 3 | 3 | (4×5)+(4×4)+(3×5)+(3×5)+(3×4)+(3×3) = 20+16+15+15+12+9 = **87** |

La puntuación ponderada confirma que la **Alternativa B (Retrospectivas ágiles)** es la que mejor se ajusta a las necesidades y restricciones de SPAZIO, superando ampliamente a las demás opciones. La Alternativa C (Métricas) ocupa el segundo lugar, lo que sugiere que puede ser un complemento útil. Las Alternativas A y D obtuvieron puntuaciones más bajas debido a su mayor requerimiento de esfuerzo y menor adaptabilidad.

### 9.2.3 Justificación detallada de la selección

Con base en los resultados de la matriz de decisión y en un análisis cualitativo adicional, el equipo de SPAZIO selecciona la **Alternativa B: Retrospectivas ágiles** como el mecanismo principal para la mejora del proceso. A continuación, se exponen las razones que fundamentan esta elección, articuladas en torno a las características específicas del proyecto.

#### 9.2.3.1 Coherencia con el modelo de ciclo de vida incremental

El proyecto SPAZIO adopta un modelo incremental, estructurado en tres incrementos principales (parqueaderos, deportes y mejoras). Este modelo establece puntos naturales de revisión al final de cada incremento, lo que se alinea perfectamente con la cadencia de las retrospectivas ágiles. Realizar una retrospectiva al término de cada incremento permite evaluar el desempeño del equipo durante un período completo de trabajo, identificar patrones y proponer ajustes que puedan aplicarse en el siguiente incremento. Esta sincronización evita interrupciones innecesarias y aprovecha los hitos del proyecto como momentos de reflexión estratégica.

En contraste, los modelos de madurez (Alternativa A) suelen operar a nivel organizacional y con horizontes temporales más largos, lo que dificulta su aplicación en ciclos cortos. La mejora basada en métricas (Alternativa C) podría integrarse con el ciclo incremental, pero requiere de un período de maduración para recolectar datos suficientes, lo que retrasa la retroalimentación. Las lecciones aprendidas (Alternativa D) podrían realizarse al final de cada incremento, pero su enfoque en la documentación pasiva no impulsa el cambio activo con la misma inmediatez que las retrospectivas.

#### 9.2.3.2 Adaptabilidad ante la incertidumbre del producto y el mercado

La sección 7.1.2 de este documento establece supuestos críticos sobre la demanda de espacios en Bogotá, la disposición de los anfitriones y la confianza de los usuarios. Estos supuestos aún no han sido validados empíricamente, lo que introduce un nivel significativo de incertidumbre. En este contexto, un enfoque de mejora rígido (como CMMI) sería contraproducente, ya que dificultaría la adaptación del proceso a medida que se obtenga nueva información del mercado o de las pruebas piloto. Las retrospectivas ágiles, por su naturaleza iterativa y centrada en el equipo, permiten ajustar no solo las prácticas técnicas, sino también las prioridades y la planificación, respondiendo ágilmente a los hallazgos de validación. Esta capacidad de pivotar es esencial para un proyecto como SPAZIO, que busca validar su modelo de negocio antes de escalar (Ries, 2011).

#### 9.2.3.3 Bajo esfuerzo y adecuación al contexto académico

El equipo de SPAZIO está conformado por tres estudiantes que deben compatibilizar el proyecto con otras obligaciones académicas. El tiempo disponible para actividades de gestión es limitado. Las retrospectivas ágiles, tal como se conciben en marcos como Scrum, requieren típicamente entre 60 y 90 minutos por iteración (Schwaber y Sutherland, 2020). Este nivel de esfuerzo es asumible y no desvía recursos significativos del desarrollo del producto. Por el contrario, la implementación de un modelo de madurez implicaría la elaboración de documentación extensa, la definición formal de procesos y posiblemente auditorías, lo que consumiría un tiempo que el equipo no puede destinar sin afectar el cronograma del MVP. La mejora basada en métricas también requiere un esfuerzo no despreciable en la definición e instrumentación de métricas, que podría no ser rentable en un proyecto de corta duración (McGarry et al., 2002).

#### 9.2.3.4 Fomento de la autogestión y la cohesión del equipo

La retrospectiva ágil es un espacio seguro donde cada integrante puede expresar sus percepciones, frustraciones y sugerencias sin temor a represalias. Este ejercicio fortalece la comunicación, la confianza y el compromiso mutuo, elementos que son especialmente importantes en equipos pequeños donde la interdependencia es alta (Cockburn, 2006). Al involucrar a todos en la identificación de problemas y la generación de soluciones, se promueve un sentido de propiedad compartida sobre el proceso, lo que aumenta la motivación y la responsabilidad colectiva. Los otros enfoques, al ser más prescriptivos o unidireccionales, no fomentan el mismo nivel de participación activa y empoderamiento.

#### 9.2.3.5 Complementariedad con otras prácticas de gestión

La elección de las retrospectivas ágiles no implica el abandono de otros enfoques; por el contrario, el equipo planea integrar métricas cuantitativas (Alternativa C) como insumo para las sesiones retrospectivas. Por ejemplo, se recolectarán datos sobre el tiempo de ciclo de las tareas, la frecuencia de integración y los defectos encontrados en las pruebas, y estos datos se presentarán en la retrospectiva para enriquecer el debate con evidencia objetiva. De esta manera, se combina la riqueza cualitativa de la reflexión grupal con la precisión de los datos cuantitativos, superando las limitaciones individuales de cada enfoque (Basili et al., 1994). Asimismo, las lecciones aprendidas (Alternativa D) se documentarán como salida de las retrospectivas, creando un repositorio de conocimiento que podrá ser consultado en incrementos posteriores.

#### 9.2.3.6 Evidencia empírica de efectividad

Numerosos estudios y reportes de la industria respaldan la efectividad de las retrospectivas ágiles para mejorar el desempeño de equipos de desarrollo. Por ejemplo, Dingsøyr et al. (2012) encontraron que las retrospectivas son una de las prácticas ágiles más valoradas por los equipos, ya que contribuyen a la mejora continua y a la satisfacción laboral. Sutherland y Altman (2012) documentan casos donde retrospectivas regulares permitieron reducir el tiempo de entrega y aumentar la calidad del software en equipos Scrum. Esta evidencia empírica refuerza la confianza del equipo en que la alternativa seleccionada no solo es viable, sino que tiene un alto potencial de generar beneficios reales para SPAZIO.

### 9.2.4 Plan de implementación de la alternativa seleccionada

Para garantizar que las retrospectivas ágiles se ejecuten de manera efectiva, el equipo ha definido un plan de implementación que incluye los siguientes elementos:

* **Frecuencia**: se realizará una retrospectiva al final de cada incremento (tres en total). Adicionalmente, si el equipo lo considera necesario, se podrán realizar retrospectivas intermedias al final de cada iteración dentro del incremento, aunque esto no es obligatorio.
* **Duración**: cada sesión tendrá una duración aproximada de 60 a 90 minutos, siguiendo la estructura recomendada por Derby y Larsen (2006): establecer el escenario, recopilar datos, generar insights, decidir acciones y cerrar.
* **Participantes**: todos los integrantes del equipo de desarrollo asistirán a la retrospectiva. En caso de ser pertinente, se podrá invitar a un observador externo (por ejemplo, el profesor) para que aporte una perspectiva neutral.
* **Herramientas de soporte**: se utilizará una plantilla digital para documentar los puntos clave de la reunión, así como un tablero virtual (p. ej., Miro o Trello) para organizar las ideas y priorizar las acciones. Las métricas recolectadas durante el incremento se presentarán al inicio de la sesión para contextualizar el análisis.
* **Seguimiento de acciones**: las acciones de mejora acordadas se registrarán en el tablero Kanban del proyecto como tareas específicas, con un responsable y una fecha de vencimiento. En la siguiente retrospectiva se revisará el estado de cumplimiento de dichas acciones y su efectividad.

### 9.2.5 Riesgos asociados a la alternativa seleccionada y medidas de mitigación

Si bien la alternativa B es la más adecuada, no está exenta de riesgos. El equipo ha identificado los siguientes riesgos potenciales y ha definido medidas para mitigarlos:

**Tabla 11: Riesgos potenciales**

|  |  |  |  |
| --- | --- | --- | --- |
| Riesgo | Probabilidad | Impacto | Medida de mitigación |
| Las retrospectivas se vuelven rutinarias y superficiales, sin generar mejoras reales. | Media | Alto | Rotar el rol de facilitador en cada sesión para mantener la frescura; utilizar técnicas variadas (p. ej., "Start-Stop-Continue", "Mad-Sad-Glad", "5 Porqués") para estimular la reflexión. |
| El equipo no implementa las acciones acordadas por falta de tiempo o priorización. | Alta | Medio | Limitar el número de acciones a un máximo de tres por retrospectiva, asegurando que sean concretas y alcanzables. Asignar un "guardián de las mejoras" que haga seguimiento semanal de las acciones. |
| Los miembros del equipo no se sienten en confianza para expresar opiniones honestas. | Baja | Alto | Establecer explícitamente un ambiente de "seguridad psicológica" al inicio de cada retrospectiva; recordar que el objetivo es mejorar el proceso, no buscar culpables. Utilizar técnicas anónimas para temas sensibles. |
| La falta de datos objetivos dificulta la identificación de problemas reales. | Media | Medio | Implementar un conjunto mínimo de métricas (tiempo de ciclo, defectos, avance en Kanban) y presentarlas al inicio de la retrospectiva. Complementar con ejemplos concretos de incidentes ocurridos. |
| El tiempo dedicado a la retrospectiva se percibe como una carga adicional. | Media | Bajo | Enfatizar los beneficios tangibles de la retrospectiva, mostrando cómo las mejoras implementadas han reducido el esfuerzo en incrementos posteriores. Ajustar la duración si es necesario. |

El análisis exhaustivo de las alternativas disponibles para la mejora del proceso, basado en criterios ponderados y en el contexto específico del proyecto SPAZIO, conduce a la selección inequívoca de las **retrospectivas ágiles** como el enfoque principal. Esta decisión se fundamenta en la coherencia con el ciclo de vida incremental, la adaptabilidad ante la incertidumbre, el bajo esfuerzo requerido, el fomento de la autogestión y la evidencia empírica de su efectividad. El equipo reconoce que ninguna alternativa es perfecta, por lo que se han previsto mecanismos de mitigación para los riesgos asociados. Además, se integrarán complementariamente métricas cuantitativas y lecciones aprendidas para enriquecer el proceso, logrando así un sistema de mejora híbrido que maximice las fortalezas de cada enfoque y minimice sus debilidades. De esta manera, el proyecto SPAZIO contará con un plan de mejora del proceso que no solo cumple con los requisitos formales del PMP, sino que también contribuye activamente a la entrega exitosa del producto mínimo viable, en línea con la visión y los objetivos definidos en la sección 7.1.1.

## 9.3 Plan de mejora del proceso

Esta sección explica de forma concreta cómo el equipo de SPAZIO va a evaluar el proceso de trabajo durante el proyecto y cómo se van a definir las mejoras necesarias. En la sección 9.2 ya se explicó por qué se eligieron las retrospectivas ágiles como el mecanismo principal de mejora, comparándolas con otras alternativas como los modelos de madurez, las métricas y las lecciones aprendidas. Por esta razón, en esta parte no se repite ese análisis, sino que se presenta el plan concreto que el equipo va a seguir para poner en práctica esa decisión durante los tres incrementos del proyecto. En otras palabras, mientras la sección 9.2 explica por qué se eligió este mecanismo, esta sección 9.3 explica cómo y cuándo se va a aplicar dentro de SPAZIO.

**9.3.1 Plan periódico de evaluación del proceso**

El proceso se evalúa de forma periódica. En esta entrega, con un único incremento de siete semanas, la evaluación principal se realiza a su cierre, y se prevén evaluaciones intermedias al final de las semanas 2, 4 y 6, coincidentes con los hitos de la sección 9.1. La semana 2 adquiere especial importancia, pues su cierre es el punto de medición de la productividad real que puede motivar una replanificación del alcance (sección 10.2).

Además, si el equipo lo considera necesario, se pueden hacer retrospectivas más cortas dentro de un mismo incremento, pero esto no es obligatorio y depende de cómo vaya avanzando el trabajo. La idea principal es que la evaluación del proceso no se quede solo en el papel, sino que tenga un momento claro y repetido a lo largo del proyecto.

***Tabla 12:*  Plan *general de evaluación del proceso***

|  |  |  |  |
| --- | --- | --- | --- |
| Momento o hito | Actividad de evaluación | Información que se revisará | Resultado esperado |
| Fin de la Semana 2 (Hito 2) | Retrospectiva intermedia y medición de productividad | Horas reales por punto de función, historias completadas, errores encontrados | Decisión de continuar o replanificar; hasta tres acciones de mejora |
| Fin de la Semana 4 (Hito 4) | Retrospectiva intermedia | Seguimiento de acciones, avance frente al cronograma, errores encontrados | Confirmación de acciones efectivas y nueva lista de hasta tres acciones |
| Fin de la Semana 6 (Hito 6) | Retrospectiva intermedia | Estado de la integración, defectos abiertos, riesgos materializados | Acciones para la semana de pruebas y cierre |
| Fin de la Semana 7 (Hito 7) | Retrospectiva principal del incremento | Balance del incremento, historias validadas, lecciones aprendidas | Lecciones aprendidas finales y hoja de ruta para incrementos futuros |

**9.3.2 Desarrollo de la retrospectiva**

Cada retrospectiva se va a desarrollar siguiendo una estructura simple, basada en lo que ya se describió en la sección 9.2.4. Primero, el equipo va a revisar qué ocurrió durante el incremento, recordando de forma breve los eventos más importantes. Después, se van a revisar algunos datos o métricas sencillas del incremento, como se explica en la sección 9.3.6. Luego, con esta información, el equipo va a identificar problemas y oportunidades de mejora. A partir de esto, se van a proponer acciones concretas, se van a asignar responsables, y en la siguiente retrospectiva se va a hacer seguimiento para revisar si esas acciones funcionaron. Esta forma de trabajar está tomada de Derby y Larsen (2006), que ya se menciona como referencia en este documento.

**9.3.3 Identificación de problemas y de oportunidades de mejora**

Durante la retrospectiva, cada integrante del equipo va a poder mencionar los problemas que encontró durante el incremento, ya sean problemas técnicos, de organización o de comunicación entre el equipo. También se van a identificar oportunidades de mejora, que no necesariamente son problemas, sino formas de hacer las cosas de una manera más eficiente. Por ejemplo, un problema podría ser que las pruebas se hicieron muy tarde dentro del incremento, y una oportunidad de mejora podría ser empezar a probar cada funcionalidad apenas se termine de desarrollar, en lugar de dejarlo todo para el final. Otro ejemplo simple podría ser que alguna historia de usuario del incremento de parqueaderos quedó mal explicada al inicio, y esto generó dudas dentro del equipo.

**9.3.4 Seguimiento de las acciones de mejora**

En la siguiente retrospectiva, antes de empezar a hablar de nuevos problemas, el equipo va a revisar rápidamente el estado de las acciones que se acordaron en la retrospectiva anterior. Cada acción puede quedar en una de estas situaciones: que se haya completado, que haya quedado pendiente porque no dio tiempo de hacerla, que ya no aplique porque la situación del proyecto cambió, o que se haya realizado pero no haya dado el resultado esperado. Este paso es importante porque, si no se hace seguimiento, las retrospectivas se pueden convertir en una reunión donde solo se habla de problemas, pero nunca se resuelven de verdad.

**9.3.5 Uso de métricas como apoyo a la mejora**

Aunque las retrospectivas ágiles son el mecanismo principal de mejora, el equipo va a usar algunas métricas sencillas como apoyo, tal como se explicó en la sección 9.2.3.5. Estas métricas no reemplazan la conversación del equipo, pero ayudan a que la retrospectiva no se base solo en opiniones. Las métricas que se van a usar son las siguientes:

* **Historias de usuario planeadas frente a completadas:** sirve para saber si el equipo está cumpliendo con lo que se propuso al inicio del incremento, o si hay algo que está afectando el ritmo de trabajo.
* **Cantidad de errores encontrados:** sirve para saber si la calidad del trabajo está mejorando o empeorando de un incremento a otro.
* **Tiempo aproximado de las tareas:** sirve para identificar si alguna parte del proceso está tomando más tiempo del esperado, lo cual puede ser una señal de un problema en el flujo de trabajo.

Estas métricas se van a presentar al inicio de la retrospectiva, de forma simple, para que sirvan como punto de partida de la conversación y no como el único criterio para tomar decisiones.

**9.3.6 Lecciones aprendidas**

Al final de cada retrospectiva, el equipo va a escribir una lección aprendida corta, relacionada con lo que se discutió en la sesión. Esta lección se va a guardar en un documento compartido del proyecto, organizada por incremento, para que se pueda consultar más adelante. Las lecciones aprendidas pueden ser de tipo técnico, de organización del equipo o relacionadas con el proceso mismo, y sirven principalmente para que el equipo no repita los mismos errores en los siguientes incrementos.

**9.3.7 Verificación de la efectividad de una mejora**

Una acción de mejora no se considera terminada solamente porque ya se realizó. Es necesario, además, revisar más adelante si esa acción realmente ayudó al proceso del equipo. Por esto, en la retrospectiva siguiente a la que aplicó la acción, el equipo va a comparar la situación antes y después de aplicarla, usando la conversación del equipo y, cuando sea posible, alguna de las métricas mencionadas en la sección 9.3.6. Por ejemplo, si la acción fue empezar a probar cada funcionalidad antes de terminar el incremento, en la siguiente retrospectiva se puede preguntar si esto realmente redujo la cantidad de errores encontrados al final. Si el equipo percibe una mejora clara, la acción se puede mantener como parte de la forma de trabajar del equipo.

**9.3.8 Qué hacer cuando una mejora no produce el resultado esperado**

Puede pasar que una acción de mejora no funcione como se esperaba. En ese caso, el equipo la va a discutir abiertamente en la siguiente retrospectiva, sin buscar culpables, tratando de entender por qué no funcionó. Después de esta conversación, el equipo tiene tres opciones: ajustar la acción para que se adapte mejor a la situación real, probar una alternativa diferente, o eliminarla si ya no tiene sentido seguir con ella. Esta situación también se registra como una lección aprendida, porque saber qué no funcionó es igual de útil que saber qué sí funcionó.

**9.3.9 Incorporación de las mejoras al siguiente incremento**

Las acciones de mejora que el equipo decide mantener no se quedan solamente como una conversación de la retrospectiva. Estas acciones pasan a ser tareas normales dentro del tablero Kanban del siguiente incremento, junto con las historias de usuario que se van a desarrollar en ese periodo. De esta manera, la mejora del proceso se convierte en trabajo real dentro de la planeación, siguiendo el mismo modelo incremental descrito en la sección 9.1.

## 9.4 Infraestructura y sistemas facilitadores

Esta sección define la infraestructura y los sistemas que apoyan el desarrollo de SPAZIO: hardware, sistema operativo, red, software, servicios en la nube, políticas y procedimientos. A diferencia de la versión anterior, las decisiones quedan definidas y se acompañan de un análisis de alternativas tecnológicas (Tabla 38). Las especificaciones de hardware se redactan como requisito del equipo, no como inventario de los equipos reales de los integrantes. La Tabla 13 resume la infraestructura y los recursos; la Tabla 38 presenta el análisis de alternativas tecnológicas; y la Tabla 39 detalla las especificaciones mínimas de hardware.

**Tabla 13 Infraestructura y recursos**

|  |  |
| --- | --- |
| Recurso | Descripción |
| Equipos de trabajo | Cada integrante usa su computador personal, conforme a las especificaciones mínimas de la Tabla 39. El proyecto no cuenta con equipos exclusivos asignados por la universidad. |
| Sistema operativo | No se exige un sistema operativo único: el stack es multiplataforma. Se admiten Windows 10/11, macOS 12 o superior y distribuciones Linux recientes. |
| Entorno de desarrollo | Visual Studio Code, por ser gratuito, liviano y compatible con Python y JavaScript. |
| Herramientas para programación | Backend en Python con FastAPI; frontend en React, para las pantallas de registro, publicación, búsqueda, reserva y pago simulado (sección 7.1.1). |
| Base de datos y autenticación | Supabase (PostgreSQL), para almacenar cuentas, publicaciones, disponibilidad, reservas y transacciones simuladas, y para autenticar usuarios (RI-01 a RI-04). |
| Pasarela de pago | Módulo propio de pasarela de pago simulada, desarrollado en el backend; reproduce el flujo de pago (aprobado, rechazado, sin respuesta) y la expiración de la retención, sin integración externa ni movimiento de dinero. |
| Geocodificación | Nominatim (OpenStreetMap), para convertir direcciones en coordenadas en la búsqueda por ubicación (RF-01). |
| Control de versiones | Git, con repositorio en GitHub. |
| Herramientas de gestión del proyecto | Tablero de proyectos de GitHub, para el Kanban (sección 9.1). |
| Herramientas de diseño y prototipado | Figma, para las pantallas principales de la aplicación. |
| Herramientas para pruebas | Pruebas manuales guiadas por casos de prueba y pytest para el backend; pruebas de componentes de React cuando el tiempo lo permita. |
| Herramientas de documentación | Procesador de texto compartido para los documentos de gestión y Markdown en el repositorio para la documentación técnica. |
| Servicios para ejecutar el sistema | Servicio gratuito de hospedaje para el backend (FastAPI) y el frontend (React); Supabase aporta la base de datos en la nube. |
| Conectividad de red | Conexión a Internet de cada integrante para el repositorio, los servicios en la nube y las reuniones virtuales; no se requiere red dedicada. |
| Copias de seguridad | Respaldo del código en el repositorio remoto y de los datos de la aplicación por exportación manual de Supabase (RNF-07). |
| Seguridad de equipos y repositorios | Cuentas personales con contraseña; el repositorio y el proyecto de Supabase se mantienen privados. |
| Administración y mantenimiento | Responsabilidad compartida de los tres integrantes, con verificación al cierre de cada semana clave (sección 9.4.3). |

* **Red y conectividad.** El proyecto se apoya en la conexión a Internet de cada integrante para el repositorio, los servicios en la nube y las reuniones virtuales. No se requiere infraestructura de red dedicada. La comunicación entre el frontend y el backend, y entre el backend y los servicios externos, usa HTTPS con TLS (RNF-02).
* **Software y servicios (con criterio de versión).** Se adopta la versión estable vigente de cada herramienta al iniciar el desarrollo, fijada en el repositorio mediante los archivos de dependencias (requirements.txt para Python y package.json para Node), con el fin de garantizar reproducibilidad. Los componentes son: Python 3.12 o superior con FastAPI; Node 20 LTS o superior con React 18; PostgreSQL gestionado por Supabase; y el módulo propio de pasarela de pago simulada, desarrollado en el backend.
* **Servicios en la nube y límites del plan gratuito.** El proyecto emplea exclusivamente planes gratuitos. Según la documentación pública de Supabase vigente al elaborar este documento, el plan gratuito ofrece 500 MB de base de datos y 1 GB de almacenamiento de archivos, y pausa los proyectos tras una semana de inactividad; por ello cada publicación admite hasta tres fotografías y el equipo verifica que el proyecto esté activo antes de cada prueba. El equipo debe confirmar estos valores en la documentación oficial de Supabase antes de implementar. El servicio de hospedaje gratuito del backend y del frontend aporta los límites de memoria y de cómputo de su plan, que el equipo monitorea (sección 11.4). El servicio de geocodificación Nominatim está sujeto a su política de uso justo, que limita la frecuencia de consultas; el equipo aplica almacenamiento en caché de las coordenadas para no exceder ese límite.

Análisis de alternativas tecnológicas. La Tabla 38 compara las principales decisiones del stack con criterios explícitos y justifica la elección.

|  |  |  |  |
| --- | --- | --- | --- |
| Decisión | Alternativas | Criterios (costo, curva de aprendizaje, ajuste al stack, documentación) | Elección y justificación |
| Framework del backend | FastAPI, Django, Node/Express | Costo: todas gratuitas. Curva: FastAPI y Express bajas, Django media. Ajuste: FastAPI aprovecha Python y la tipificación con Pydantic; Django incluye ORM y panel de administración, útiles pero no requeridos; Express exigiría otro lenguaje. Documentación: amplia en los tres. | **FastAPI.** Ofrece una API REST con validación automática y documentación interactiva con bajo esfuerzo, reutiliza el conocimiento de Python del equipo y es liviano frente a Django para un MVP acotado. |
| Base de datos y autenticación | Supabase (PostgreSQL), Firebase (Firestore), PostgreSQL autogestionado | Costo: Supabase y Firebase con plan gratuito; autogestión implica operar un servidor. Curva: Supabase media, Firebase media, autogestión alta. Ajuste: Supabase ofrece PostgreSQL relacional y autenticación integrada; Firebase es NoSQL, menos natural para datos relacionales de reservas; la autogestión añade carga operativa. | **Supabase.** Aporta una base de datos relacional PostgreSQL, adecuada para cuentas, publicaciones, disponibilidad y reservas, con autenticación integrada y plan gratuito, sin carga de operación de servidor. |
| Biblioteca del frontend | React, Vue, Angular | Costo: todas gratuitas. Curva: React y Vue bajas-medias, Angular alta. Ajuste: React tiene el mayor ecosistema y es la propuesta del curso. Documentación: amplia en los tres. | **React.** Ecosistema maduro, amplia documentación en español y conocimiento previo del equipo. |
| Geocodificación | Nominatim (OpenStreetMap), Google Maps Geocoding, Mapbox | Costo: Nominatim gratuito; Google y Mapbox requieren tarjeta y facturación por volumen. Curva: baja en los tres. Ajuste: Nominatim cubre direcciones de Bogotá dentro de su política de uso. | **Nominatim.** Único servicio sin costo ni requisito de facturación, suficiente para el volumen de un MVP, con almacenamiento en caché para respetar su límite de consultas. |
| Pasarela de pago | Pasarela de pago simulada (propia), Wompi (real) | Costo: la simulada no tiene costo; una real exige cuenta de comercio y cumplimiento. Alcance: la simulada demuestra el flujo sin movimiento de dinero; la real excede el periodo del proyecto. | **Pasarela de pago simulada.** Permite demostrar el flujo completo de reserva, incluida la expiración de la retención, sin integración externa; la pasarela real queda como mejora futura. |

**Hardware y sistema operativo.** El equipo requiere tres estaciones de trabajo que cumplan las especificaciones mínimas de la Tabla 39 para desarrollar y ejecutar el stack (backend FastAPI, frontend React y acceso a Supabase en la nube). No se requiere hardware especializado adicional.

**Tabla 39 Especificaciones mínimas de hardware del equipo de desarrollo**

|  |  |  |
| --- | --- | --- |
| Componente | Requisito mínimo | Justificación |
| Procesador | Doble núcleo a 2,0 GHz o superior (x86-64) | Ejecutar el entorno de desarrollo, el servidor local de FastAPI y la compilación de React. |
| Memoria RAM | 8 GB | Operar simultáneamente el editor, el navegador, el servidor local y los contenedores o procesos del proyecto. |
| Almacenamiento | 20 GB libres en disco de estado sólido (SSD) recomendado | Repositorio, dependencias de Node y de Python, e imágenes de prueba. |
| Sistema operativo | Windows 10/11, macOS 12 o superior, o una distribución Linux reciente | El stack es multiplataforma; se fija una versión mínima para asegurar compatibilidad de herramientas. |
| Pantalla | Resolución mínima 1366 × 768 | Trabajo con el editor y los prototipos de interfaz. |
| Conectividad | Conexión a Internet de banda ancha (mínimo 10 Mbps) | Acceso a Supabase, al servicio de geocodificación, al repositorio y a las reuniones. |

### 9.4.1 Copias de seguridad y control de acceso

Como se explicó en la tabla anterior, el respaldo principal del proyecto va a ser el repositorio remoto de Git, que guarda todo el historial de cambios del código. Además de esto, los documentos de gestión, como el PMP, se van a mantener en una carpeta compartida en la nube entre los tres integrantes, para que ninguno dependa de un solo computador. En cuanto al control de acceso, se propone que el repositorio se mantenga privado y que solo los integrantes del equipo, y si es necesario el profesor, tengan acceso a él.

### 9.4.2 Conectividad y disponibilidad

El proyecto no requiere infraestructura de red especial. La disponibilidad del sistema no es crítica durante el desarrollo; para las pruebas con usuarios, el equipo anuncia una ventana de actividad y verifica que el proyecto de Supabase esté activo, dado que el plan gratuito lo pausa tras una semana de inactividad

### 9.4.3 Administración y mantenimiento de los recursos

La administración de las herramientas e infraestructura va a ser una responsabilidad compartida entre los tres integrantes del equipo, sin que exista una persona dedicada exclusivamente a esta tarea, dado el tamaño del equipo. Sin embargo, se recomienda revisar periódicamente, por ejemplo, al final de cada incremento, que las cuentas, los accesos y las copias de seguridad sigan funcionando correctamente, para evitar sorpresas cerca de una entrega.

## 9.5 Métodos, herramientas y técnicas

En esta sección se presentan los métodos, lenguajes, frameworks y herramientas que el equipo de SPAZIO planea utilizar durante el desarrollo del proyecto, organizados por categoría. Algunas de estas decisiones ya están definidas en el documento, como el uso de Git o del modelo BPMN, y otras todavía son propuestas que el equipo debe confirmar antes de empezar el primer incremento. Ninguna herramienta se incluye solo para llenar espacio: todas están relacionadas con una necesidad real del proyecto, ya sea de desarrollo, gestión o documentación

**Tabla 14** *Métodos, herramientas y técnicas por categoría*

|  |  |  |
| --- | --- | --- |
| Categoría | Herramienta o técnica | Para qué se usa |
| Lenguajes de programación | Python para el backend; JavaScript para el frontend, con React | Construir el backend y el frontend de SPAZIO. |
| Frameworks | FastAPI para el backend; React para el frontend | Construir la API REST y las pantallas del MVP. |
| Modelado | BPMN para los procesos de negocio; UML para diagramas técnicos de diseño | BPMN se usa en las Figuras 2 a 7; UML se emplea para el diseño de clases y de datos. |
| Base de datos | Supabase (PostgreSQL) | Almacenar cuentas, publicaciones, disponibilidad, reservas y transacciones simuladas; autenticar usuarios. |
| Pasarela de pago simulada | Módulo propio desarrollado en el backend | Reproducir el flujo de pago (aprobado, rechazado, sin respuesta) y la expiración de la retención, sin movimiento de dinero. |
| Geocodificación | Nominatim (OpenStreetMap) | Convertir direcciones en coordenadas para la búsqueda por ubicación (RF-01). |
| Desarrollo | Visual Studio Code | Entorno de edición y revisión de código. |
| Control de versiones | Git, con repositorio en GitHub | Gestionar el historial de cambios y el trabajo en ramas. |
| Gestión de tareas | Tablero de proyectos de GitHub | Visualizar las tareas del incremento en Por hacer, En progreso y Terminado. |
| Pruebas | Pruebas manuales guiadas por casos de prueba; pytest para el backend y pruebas de componentes de React cuando el tiempo lo permita | Verificar los requisitos del incremento antes de darlos por terminados. |
| Documentación | Procesador de texto compartido para los documentos de gestión; Markdown en el repositorio para la documentación técnica | Mantener el PMP, el SRS y las notas técnicas. |
| Comunicación | WhatsApp o Discord; reuniones periódicas | Coordinar el trabajo diario del equipo. |
| Despliegue | Servicio gratuito de hospedaje para el backend y el frontend; Supabase aporta la base de datos en la nube | Publicar una versión de prueba del sistema para las validaciones. |

## 9.6 Plan de aceptación del producto

El propósito de esta sección es dejar claros los criterios que se van a usar para aceptar cada entregable del proyecto SPAZIO, de manera que el equipo y quien revisa el proyecto tengan la misma idea de cuándo un entregable está realmente terminado. Como el proyecto todavía no cuenta con un cliente externo definido (ver sección 10.1), en esta etapa el profesor del curso cumple, en parte, ese papel de validar los entregables, junto con el propio equipo de desarrollo.

Los criterios que se presentan a continuación se basan en los entregables ya definidos en la Tabla 3, en la sección 7.1.3, y no se agregan entregables nuevos que no estén en esa tabla. Además, dado que SPAZIO usa un ciclo de vida incremental, es muy importante tener en cuenta que las funcionalidades del MVP se deben aceptar incremento por incremento, y no solamente al final del proyecto. Esto quiere decir que las funcionalidades de parqueaderos se deben validar al terminar el primer incremento, las de espacios deportivos al terminar el segundo, y así sucesivamente, en lugar de esperar hasta el final para revisar todo junto.

**Tabla 15** **Criterios de aceptación de los entregables del proyecto SPAZIO**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Entregable | Criterio de aceptación | Cómo se comprobará | Responsable de verificar | Condición de aceptación o rechazo |
| Documento PMP (v2.0) | Incluye las secciones acordadas, con el alcance de parqueaderos, el presupuesto con valores y las figuras completas, sin contradecir la información definida. | Revisión contra el índice y la rúbrica. | Equipo y profesor. | Se acepta si no faltan secciones obligatorias; en caso contrario, se ajusta antes de la fecha final. |
| SRS actualizado | Los requisitos reflejan el alcance de parqueaderos y la pasarela de pago simulada, con las reformulaciones y las fichas nuevas (RF-15, RF-16, RF-17). | Revisión cruzada entre PMP y SRS. | Equipo de desarrollo. | Se acepta si ambos documentos son consistentes; si no, se corrige el SRS. |
| Diseño de arquitectura | Describe los componentes, incluida la pasarela de pago simulada, y su comunicación, coherente con la categoría parqueaderos. | Revisión técnica interna. | Equipo de desarrollo. | Se acepta si permite construir las funciones del incremento sin cambios mayores. |
| Diseño UI/UX | Los prototipos cubren registro, acceso, publicación, disponibilidad, búsqueda, reserva, pago simulado y reservas recibidas, con el aviso de pago simulado. | Revisión visual contra las historias. | Equipo de desarrollo. | Se acepta si permiten los flujos principales; si no, se ajustan. |
| Modelo de datos | Representa cuenta, publicación, disponibilidad, reserva y transacción simulada, sin duplicar información. | Revisión del modelo. | Equipo de desarrollo. | Se acepta si soporta los requisitos del incremento. |
| MVP de parqueaderos | Las funciones RF-01, RF-03, RF-05, RF-06, RF-07, RF-08, RF-09, RF-12, RF-13 y RF-14 cumplen sus criterios de medición del SRS. | Ejecución de las pruebas funcionales, incluidos los escenarios de la pasarela simulada. | Equipo de desarrollo y profesor. | Se acepta si las pruebas pasan sin errores críticos. |
| Pruebas del sistema | Evidencias completas y legibles de los requisitos implementados y de los escenarios de pago simulado. | Revisión cruzada de evidencias. | Equipo de desarrollo. | Se acepta si las evidencias respaldan lo implementado. |
| Manual de usuario | Explica el uso en ambos roles e indica que el pago es simulado. | Lectura por un integrante que no lo escribió. | Equipo del proyecto. | Se acepta si una persona externa puede seguirlo sin ayuda. |
| Informe final | Refleja con fidelidad lo realizado, con dificultades y aprendizajes. | Revisión conjunta contra el avance registrado. | Equipo y profesor. | Se acepta si es coherente con el avance documentado. |

**9.6.1 Aceptación por incremento**

Como ya se mencionó, la aceptación del MVP no se va a dejar solo para el final del proyecto. Al terminar cada incremento, el equipo va a revisar las historias de usuario correspondientes a ese incremento y va a comprobar que cada una cumple su criterio de aceptación antes de considerar el incremento como cerrado. Esto está relacionado directamente con la sección 9.3, porque si una funcionalidad no cumple su criterio de aceptación, esto se puede convertir en un tema de conversación en la retrospectiva de ese incremento, y de ahí puede salir una acción de mejora concreta para el siguiente incremento.

# 10. Administración del proyecto

Esta sección explica cómo está organizado el equipo del proyecto SPAZIO, quien participa, qué responsabilidad tiene cada parte y cómo se comunican entre ellos. También se explica quién toma las decisiones, quién revisa el trabajo, quién desarrolla y quién valida los resultados. Como SPAZIO es un proyecto académico desarrollado por tres estudiantes, esta organización es sencilla y no busca imitar la estructura de una empresa grande.

## 10.1 Inicio del proyecto

El inicio del proyecto SPAZIO se hace de forma sencilla, porque se trata de un proyecto académico desarrollado por tres estudiantes dentro de un curso de Ingeniería de Software, y no de un proyecto con un cliente y un patrocinador externos. Antes de comenzar el primer incremento, que ya se describió en la sección 9.1 (categoría de parqueaderos), el equipo debe cumplir con las siguientes actividades:

1. Reunión de arranque (kick-off) entre los tres integrantes del equipo, en la que se revisa todo el contenido de este PMP y se confirma que todos entienden el alcance, los objetivos y el modelo de ciclo de vida definidos en las secciones 7 y 9.
2. Entrega y sustentación del PMP ante el profesor del curso (ver Tabla 16), para que dé su retroalimentación y se pueda considerar aprobado el inicio formal del desarrollo.
3. Creación de las herramientas base del proyecto: el repositorio en GitHub, el tablero de tareas y la carpeta compartida en la nube para los documentos, tal como ya se definió en la sección 9.4.
4. Definición inicial de la organización del equipo, presentada más adelante en el organigrama de esta sección, sabiendo que la asignación de tareas específicas se hace incremento por incremento.
5. Identificación de las partes interesadas externas al equipo, que se presentan en la Tabla 16.

Con estas cinco actividades cumplidas, se considera que el proyecto queda formalmente iniciado y el equipo puede empezar a trabajar en el primer incremento.

### Organigrama inicial del proyecto

Como ya se explicó en la sección 9.1, el equipo no tiene una jerarquía estricta entre sus tres integrantes. Sin embargo, al iniciar el proyecto se deja establecida la siguiente estructura general, de forma textual porque el equipo no cuenta con una herramienta para generar un organigrama gráfico dentro de este documento:

* Nivel 1: Profesor del curso (José Joaquín Bocanegra García) — cumple un papel de evaluador y asesor académico del proyecto.
* Nivel 2: Equipo del proyecto SPAZIO (Edgar Andrés Umaña Pire, Juan David Cardozo Fajardo y Santiago Sánchez Moya) — trabajan de forma horizontal, sin que exista un jefe fijo entre ellos.
* Nivel 3: Roles funcionales del proyecto, compartidos entre los tres integrantes según el incremento: gestión del proyecto, levantamiento de requisitos, diseño, desarrollo, pruebas, revisión de código, control de versiones, gestión del tablero de tareas, retrospectivas, documentación y validación del producto.

La Figura 3 representa gráficamente esta estructura.

![](data:image/png;base64...)

**Figura 3. Organigrama del proyecto SPAZIO**

### Partes interesadas externas

A continuación, se presentan las entidades identificadas hasta el momento que están fuera del equipo de desarrollo, pero que tienen alguna relación con el proyecto SPAZIO, junto con su papel frente al proyecto y la forma en la que se comunican con el equipo.

Las interfaces externas son las entidades que están fuera del equipo de desarrollo, pero que tienen alguna relación con el proyecto SPAZIO. A continuación, se presentan las entidades identificadas hasta el momento, junto con su papel frente al proyecto y la forma en la que se comunican con el equipo.

Tabla 16 Interfaces externas del proyecto SPAZIO

|  |  |  |  |
| --- | --- | --- | --- |
| Entidad | Descripción | Responsabilidades frente al proyecto | Medio de comunicación |
| Profesor del curso (José Joaquín Bocanegra García) | Docente encargado del curso de Ingeniería de Software en el que se desarrolla el proyecto. | Revisar los avances del proyecto, dar retroalimentación y aprobar las entregas académicas del PMP. | Reuniones de clase y correo institucional. |
| Universidad Distrital Francisco José de Caldas | Institución académica dentro de la cual se desarrolla el proyecto SPAZIO. | Definir el marco general del curso, los tiempos académicos y los criterios de evaluación. | Canales institucionales de la universidad. |
| Cliente o interesado externo | Por definir. El proyecto todavía no cuenta con un cliente real distinto al contexto académico. | Mientras no se defina un cliente externo, el equipo y el profesor cumplen parcialmente este papel. | Por definir. |
| Usuarios y anfitriones potenciales (validación) | Personas de Bogotá que podrían participar en actividades de validación de la demanda, como encuestas o pruebas piloto, mencionadas en la sección 7.1.1. | Dar retroalimentación sobre la propuesta de valor y, más adelante, sobre el uso del MVP. | Por definir (por ejemplo, formularios o entrevistas cortas). |

**Interfaces internas**

Las interfaces internas explican cómo está organizado el trabajo dentro del equipo de SPAZIO. Como el equipo está formado por tres estudiantes, no existen departamentos separados como en una empresa grande, sino grupos de responsabilidad que, en la práctica, son asumidos por los mismos tres integrantes según la actividad y el incremento en el que se esté trabajando.

Tabla 17 Interfaces internas del equipo de SPAZIO

|  |  |  |  |
| --- | --- | --- | --- |
| Grupo de responsabilidad | Descripción | Responsabilidades | Medio de comunicación |
| Gestión del proyecto | Actividad compartida entre los tres integrantes, relacionada con organizar el cronograma, el tablero Kanban y las reuniones del equipo. | Actualizar el tablero Kanban, organizar las reuniones periódicas y mantener actualizado el PMP. | Reuniones periódicas y tablero compartido. |
| Desarrollo | Actividad compartida entre los tres integrantes, según su disponibilidad y conocimientos técnicos para cada incremento. | Construir las funcionalidades definidas en las historias de usuario de cada incremento. | Repositorio Git y reuniones de seguimiento. |
| Pruebas y calidad | Actividad realizada por un integrante distinto al que desarrolló la funcionalidad, siguiendo la práctica de revisión de código de la sección 9.1. | Ejecutar pruebas sobre las funcionalidades desarrolladas y revisar el código antes de integrarlo a la rama principal. | Revisión de código dentro del repositorio. |
| Documentación | Actividad compartida entre los tres integrantes, relacionada con mantener actualizados los documentos del proyecto. | Actualizar el PMP y los demás documentos del proyecto al finalizar cada incremento. | Documento compartido del proyecto. |

Es importante aclarar que estos grupos no son cargos fijos asignados a una sola persona, sino formas de organizar el trabajo. La asignación específica de qué integrante hace qué tarea en cada incremento queda por definir, y se acuerda dentro de las reuniones periódicas del equipo, mencionadas en la sección 9.1.

## 10.2 Estimación

El equipo de SPAZIO todavía no cuenta con estimaciones numéricas finales de tiempo ni de presupuesto, porque esto depende de decisiones que se deben tomar antes de empezar el primer incremento, como ya se explicó en la sección 7.1.4. Sin embargo, en esta parte se explica el método que el equipo va a usar para hacer esas estimaciones y en qué parte del documento se van a mostrar.

El tamaño del software se estima con puntos de función, mediante el método IFPUG visto en el curso, aplicado sobre los requisitos del nuevo alcance (sección 7.1.1). El planning poker se mantiene únicamente como apoyo para repartir tareas entre los integrantes. Esta sección sustituye la decisión anterior de estimar con puntos de historia, atendiendo la retroalimentación del profesor sobre la necesidad de aplicar la estimación, no solo describirla.

**Método.** El procedimiento es el siguiente:

1. Clasificar las funciones en entradas externas (EI), salidas externas (EO), consultas externas (EQ), archivos lógicos internos (ILF) y archivos de interfaz externa (EIF).
2. Multiplicar cada función por el peso de complejidad IFPUG correspondiente (baja, media o alta):
3. Sumar los valores para obtener los puntos de función sin ajustar (PFSA).
4. Calcular el factor de ajuste (FA) sumando el grado (de 0 a 5) de 14 características generales del sistema.
5. Aplicar la fórmula PFA = PFSA × (0,65 + 0,01 × FA).
6. Derivar el esfuerzo multiplicando los PFA por las horas por punto de función.

**Clasificación de las funciones del alcance (PFSA = 84).** La Tabla 40 presenta la clasificación y la ponderación.

**Tabla 40 Estimación por puntos de función del nuevo alcance**

|  |  |  |  |
| --- | --- | --- | --- |
| Tipo | Función | Complejidad | PF |
| EI | Registro (RF-12) | Baja | 3 |
| EI | Inicio de sesión (RF-13) | Baja | 3 |
| EI | Publicar espacio, incluye activación del rol (RF-03) | Media | 4 |
| EI | Crear periodo de disponibilidad (RF-05) | Media | 4 |
| EI | Reservar con retención de 10 min (RF-06/RF-07) | Alta | 6 |
| EI | Procesar pago simulado y confirmar (RF-07) | Media | 4 |
| EI | Cancelar reserva y reembolso simulado (RF-08) | Media | 4 |
| **Subtotal EI** |  |  | **28** |
| EO | Mis reservas (RF-15) | Baja | 4 |
| **Subtotal EO** |  |  | **4** |
| EQ | Buscar espacios por ubicación (RF-01) | Alta | 6 |
| EQ | Ver detalle y disponibilidad de un espacio | Media | 4 |
| **Subtotal EQ** |  |  | **10** |
| ILF | Cuenta | Baja | 7 |
| ILF | Publicación | Media | 10 |
| ILF | Disponibilidad | Baja | 7 |
| ILF | Reserva y transacción | Media | 10 |
| **Subtotal ILF** |  |  | **34** |
| EIF | Nominatim (geocodificación) | Baja | 5 |
| **Subtotal EIF** |  |  | **5** |
| **PFSA total** |  |  | **81** |
|  |  |  |  |

La pasarela de pago es simulada y propia del proyecto; por ello no se contabiliza como archivo de interfaz externa (EIF). El único EIF es el servicio de geocodificación Nominatim.

**Factor de ajuste (FA = 27).** La Tabla 41 presenta el grado de las 14 características generales del sistema.

**Tabla 41 Factor de ajuste**

|  |  |  |
| --- | --- | --- |
| # | Característica | Grado (0-5) |
| 1 | Comunicación de datos | 4 |
| 2 | Procesamiento distribuido | 3 |
| 3 | Objetivos de rendimiento | 1 |
| 4 | Configuración del equipamiento | 2 |
| 5 | Tasa de transacciones | 0 |
| 6 | Entrada de datos en línea | 5 |
| 7 | Interfaz con el usuario | 4 |
| 8 | Actualización en línea | 3 |
| 9 | Procesamiento complejo | 3 |
| 10 | Reusabilidad | 1 |
| 11 | Facilidad de implementación | 0 |
| 12 | Facilidad de operación | 1 |
| 13 | Instalaciones múltiples | 0 |
| 14 | Facilidad de cambios | 0 |
| FA total |  | **27** |

**Resultado.** Aplicando la fórmula:

PFA = PFSA × (0,65 + 0,01 × FA) = 84 × (0,65 + 0,27) = 81 × 0,92 ≈ **75 puntos de función**.

**Esfuerzo, tiempo y costo.** Supuestos: 5 horas diarias por persona; 20 días hábiles por mes; 3 personas; salario mensual de referencia de $2.359.685 COP por persona. El costo se calcula como meses-persona × salario, donde un mes-persona equivale a 100 horas (20 días × 5 horas). Las horas por punto de función del curso cubren todo el ciclo de vida (diseño, desarrollo, pruebas y documentación).

**Tabla 42 Escenarios de esfuerzo, tiempo y costo**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Escenario** | **Horas/PF** | **Esfuerzo (75 PF)** | **Días hábiles (3 personas, 15 h/día)** | **Meses-persona** | **Costo de referencia (COP)** |
| Referencia del curso | 8 | ≈596 h | ≈40 | ≈5,96 | ≈$14.100.000 |
| Con Supabase y React ya conocidos | 6 | ≈447 h | ≈30 | ≈4,47 | ≈$10.500.000 |

**Capacidad real y riesgo.**

La capacidad del periodo es de 32 días hábiles × 3 personas × 5 horas = 480 horas. En el escenario de 6 h/PF, el plan requiere unas 447 horas y cabe, con un margen de unas 33 horas (aproximadamente el 7 %). En el escenario de 8 h/PF requiere unas 596 horas y no cabe: faltarían unas 116 horas. Este resultado se mantiene como riesgo explícito (sección 13.2, riesgo R-CAP) con las mismas mitigaciones:

* (a) Medir la productividad real (horas por punto de función) al cierre de la Semana 2 y replanificar si el valor observado se acerca al escenario de 8 h/PF.
* (b) Trabajar dos sábados de 5 horas por persona si hay atraso, lo que añade 30 horas de capacidad.
* Reserva de alcance: Las funciones que el PMP tenía como reserva ya se aplicaron: RF-09 se difiere y RF-14 se integra en RF-03. Si el atraso persiste, el siguiente recorte es dejar RF-05 solo con periodos únicos, sin repetición semanal. Ese recorte ahorra horas de desarrollo, pero casi no cambia los puntos de función. Después de eso solo queda replanificar con el cliente.

**Distribución del esfuerzo por fase.** Las horas por punto de función cubren todo el ciclo de vida. La Tabla 43 distribuye el esfuerzo del escenario de referencia principal (447 horas) entre las fases, lo que conecta la estimación con la calendarización (sección 10.6) y con el presupuesto (sección 10.8).

**Tabla 43 Distribución del esfuerzo por fase del ciclo de vida**

|  |  |  |
| --- | --- | --- |
| Fase | Porcentaje | Horas (de 447) |
| Planeación y requisitos | 10 % | ≈ 45 |
| Diseño (arquitectura, datos, UI/UX) | 20 % | ≈ 89 |
| Desarrollo | 45 % | ≈ 201 |
| Pruebas | 15 % | ≈ 67 |
| Documentación y cierre | 10 % | ≈ 45 |
| Total | **100 %** | **≈ 447** |

Las herramientas de estimación empleadas son una hoja de cálculo para el conteo de puntos de función y el tablero del proyecto para registrar la productividad real por semana. Las estimaciones se actualizan tras la

## 10.3 Entrenamiento del personal

El equipo de SPAZIO está formado por tres estudiantes que no tienen el mismo nivel de experiencia en todas las tecnologías que se van a usar en el proyecto (ver Tabla 13 y Tabla 14, sección 9.4 y 9.5). Por esta razón, se necesita un pequeño plan de entrenamiento, tanto al inicio como durante el proyecto, para que los tres integrantes puedan aportar en las distintas partes del sistema.

**Necesidad 1: FastAPI (backend en Python):** Quién recibe el entrenamiento: los integrantes con menos experiencia en FastAPI. Quién enseña: el integrante del equipo que ya conoce el framework. Cómo: una sesión práctica corta donde se construye en conjunto un ejemplo pequeño de la API (por ejemplo, un endpoint para publicar un espacio), seguida de práctica individual con la documentación oficial. Cuándo: antes de empezar el primer incremento.

**Necesidad 2: React (frontend):** Quién recibe: los integrantes con menos experiencia en React. Quién enseña: el integrante con más experiencia en frontend. Cómo: una sesión guiada construyendo un componente sencillo, como una tarjeta de espacio disponible, seguida de tutoriales cortos que cada integrante revisa por su cuenta. Cuándo: antes de empezar el primer incremento, en paralelo con el entrenamiento de FastAPI.

**Necesidad 3: Supabase (base de datos):** Quién recibe: todo el equipo, porque ninguno tiene experiencia previa con esta herramienta. Quién enseña: el integrante encargado del modelo de datos investiga primero y después explica a los demás cómo crear las tablas y conectarlas con el backend. Cómo: una guía corta escrita por quien investigó, más una sesión de preguntas del equipo. Cuando: al inicio del incremento de parqueaderos, cuando se empiece a definir el modelo de datos.

**Necesidad 4: Figma (diseño de interfaces):** Quién recibe: los integrantes que no han usado Figma antes. Quién enseña: el integrante encargado del diseño de interfaz. Cómo: mostrar cómo se organizan los archivos y componentes en Figma, usando una pantalla del MVP como ejemplo guía. Cuando: antes de empezar el diseño de interfaz del primer incremento.

Todos estos entrenamientos son cortos y de tipo práctico, porque el tiempo del equipo es limitado, tal como ya se explicó en la sección 7.1.2. No se busca que los tres integrantes se vuelvan expertos en todas las tecnologías, sino que cada uno tenga el conocimiento mínimo necesario para avanzar y sepa a quién pedir ayuda cuando lo necesite.

### 10.3.1 Descripción de roles

A continuación, se describen los principales roles funcionales necesarios para el desarrollo de SPAZIO. Estos roles están relacionados con las actividades y prácticas que ya se mencionan en la sección 9.1 del documento. La asignación de un integrante específico a cada rol, en cada incremento, queda por definir dentro de las reuniones periódicas del equipo.

Tabla 18 Descripción de roles del proyecto SPAZIO

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Rol | Descripción | Responsabilidades | Autoridad / decisiones | Comunicación |
| Gestión del proyecto | Organiza el trabajo general del equipo. | Mantener el tablero, organizar reuniones, seguir el cronograma y coordinar la gestión de riesgos. | Propone ajustes al cronograma; las decisiones relevantes se acuerdan en equipo. | Reuniones periódicas. |
| Levantamiento de requisitos | Identifica y escribe las historias de usuario y los requisitos del incremento. | Convertir necesidades en historias claras con criterio de aceptación y mantener su registro. | Propone las historias, revisadas por el equipo. | Reuniones de planeación. |
| Diseño | Diseña la solución a nivel de arquitectura, datos e interfaz. | Elaborar los diagramas, el modelo de datos y los prototipos, incluida la pasarela simulada. | Propone el diseño, validado por el equipo. | Revisión técnica interna. |
| Desarrollo | Construye las funcionalidades del sistema. | Implementar las historias siguiendo el diseño acordado. | Decide detalles de implementación respetando el diseño general. | Repositorio Git y reuniones de seguimiento. |
| Pruebas | Verifica que las funcionalidades cumplan sus criterios de aceptación. | Ejecutar pruebas, incluidos los escenarios de pago simulado, y reportar errores. | Puede bloquear el cierre de una historia que no pasa las pruebas. | Reuniones de seguimiento. |
| Revisión de código | Revisa el código antes de integrarlo a la rama principal. | Verificar la calidad del código y solicitar ajustes antes de la integración (sección 9.1). | Puede rechazar una integración que no cumpla la calidad acordada. | Revisión de código en el repositorio. |
| Control de versiones | Gestiona el repositorio Git y la integración de ramas. | Administrar ramas, integraciones y la rama principal como línea base; archivar el repositorio en el cierre (Tabla 24). | Define la convención de ramas y aprueba las integraciones a la línea base. | Repositorio Git/GitHub. |
| Documentación | Mantiene actualizados los documentos del proyecto. | Actualizar el PMP, el SRS, la matriz de trazabilidad y el historial de cambios; preparar los documentos del cierre (Tabla 24). | Propone la versión vigente de cada documento, revisada por el equipo. | Documento compartido del proyecto. |
| Retrospectivas | Facilita las retrospectivas de mejora del proceso (sección 9.3). | Preparar y moderar las retrospectivas, registrar las acciones de mejora y darles seguimiento. | Propone acciones de mejora, que el equipo acuerda. | Plantilla de retrospectiva. |
| Validación del producto | Verifica el cumplimiento del plan de aceptación al cierre del incremento. | Comprobar los criterios de aceptación (sección 9.6) y validar el incremento antes de darlo por cerrado. | Puede bloquear el cierre del incremento si no se cumplen los criterios. |  |

Como se puede ver en la tabla anterior, ningún rol tiene autoridad absoluta sobre el proyecto. Las decisiones más importantes, como cambios en el alcance o en el cronograma, se toman de manera conjunta entre los tres integrantes del equipo, siguiendo el proceso de evolución del plan descrito en la sección 7.1.5. Los roles descritos aquí sirven principalmente para organizar el trabajo del día a día, más que para establecer una jerarquía formal dentro del equipo.

## 10.4 Planes de trabajo del proyecto

El plan de trabajo general de SPAZIO sigue el modelo de ciclo de vida incremental que ya se explicó en la sección 9.1. A continuación se resume este plan, respondiendo quién ejecuta las actividades, cómo se ejecutan, cuándo, con qué herramientas y qué actividades se hacen.

**Quién ejecuta las actividades:** los tres integrantes del equipo (ver sección 10.7 y Tabla 18), que se reparten los roles según el incremento en el que se esté trabajando, sin que exista una asignación fija de una sola persona para cada rol.

**Cómo se ejecutan:** siguiendo las prácticas ya definidas en la sección 9.1: historias de usuario, tablero de tareas, reuniones periódicas, control de versiones con Git, pruebas, revisión de código, integración frecuente y documentación de incrementos.

**Cuando se ejecutan:** el trabajo se organiza en tres incrementos principales (parqueaderos, espacios deportivos y mejoras), cuyas fechas aproximadas se detallan en la calendarización de la sección 10.6.

**Con qué herramientas:** las mismas que ya se listan en la Tabla 13 y la Tabla 14 (secciones 9.4 y 9.5), como Visual Studio Code, GitHub, el tablero de tareas y Figma.

**Qué actividades se realizan:** para cada incremento se repite un mismo ciclo de trabajo: levantamiento de requisitos, diseño, desarrollo, pruebas y retrospectiva. Estas actividades se descomponen con más detalle en el WBS de la sección 10.5.

Este plan de trabajo es general y se aplica de la misma manera a los tres incrementos, cambiando solamente la categoría de espacios en la que se enfoca cada uno, tal como ya se explicó en la sección 9.1.

## 10.5 Actividades de trabajo

Como SPAZIO usa un ciclo de vida incremental, no se hace un WBS de los tres incrementos completos, sino que se descompone solamente uno, tal como lo permite la sección 7.7.3.2 de la guía del curso. Se eligió descomponer el primer incremento, enfocado en la categoría de parqueaderos, porque es el que sirve de base para los incrementos siguientes. La siguiente tabla presenta las actividades principales y su descomposición, indicando de qué actividad más grande hace parte cada una (relación de agregación).

Tabla 19 WBS del incremento 1 (parqueaderos)

|  |  |  |  |
| --- | --- | --- | --- |
| ID | Actividad | Hace parte de | Descripción breve |
| 1 | Gestión del incremento | — | Actividades de organización y seguimiento durante el incremento. |
| 1.1 | Reuniones de seguimiento | 1 | Reuniones cortas periódicas para revisar avance y dificultades. |
| 1.2 | Actualización del tablero de tareas | 1 | Mantener las tarjetas del tablero al día con el estado real del trabajo. |
| 2 | Levantamiento de requisitos | — | Identificación y redacción de las necesidades de la categoría de parqueaderos. |
| 2.1 | Identificar necesidades de usuarios y anfitriones | 2 | Conversaciones internas del equipo sobre lo que debe hacer el sistema. |
| 2.2 | Redactar historias de usuario | 2 | Escribir las historias de usuario con su criterio de aceptación. |
| 2.3 | Revisar y aprobar historias de usuario | 2 | El equipo revisa cada historia antes de pasar a diseño. |
| 3 | Diseño | — | Diseño técnico y de interfaz de la categoría de parqueaderos. |
| 3.1 | Diseño de arquitectura | 3 | Definir los componentes principales y su comunicación. |
| 3.2 | Diseño del modelo de datos | 3 | Diseñar las tablas necesarias en Supabase. |
| 3.3 | Diseño de interfaz (UI/UX) | 3 | Prototipos en Figma de búsqueda, publicación y reserva. |
| 4 | Desarrollo | — | Construcción de las funcionalidades del incremento. |
| 4.1 | Desarrollo del backend | 4 | Construcción de la API en FastAPI. |
| 4.2 | Desarrollo del frontend | 4 | Construcción de las pantallas en React. |
| 4.3 | Integración backend-frontend | 4 | Conectar las pantallas con la API construida. |
| 5 | Pruebas | — | Verificación de las funcionalidades desarrolladas. |
| 5.1 | Pruebas funcionales | 5 | Ejecutar los casos de prueba de cada historia de usuario. |
| 5.2 | Corrección de errores | 5 | Solucionar los errores encontrados en las pruebas. |
| 6 | Cierre del incremento | — | Actividades para dar por terminado el incremento. |
| 6.1 | Retrospectiva del incremento | 6 | Reunión de mejora del proceso (ver sección 9.3). |
| 6.2 | Validación del incremento | 6 | Comprobar los criterios de aceptación (sección 9.6). |

## 10.6 Calendarización

La calendarización emplea fechas reales del periodo, con los festivos marcados y las precedencias entre actividades. La Tabla 20 detalla el calendario, la Figura 4 representa la estructura interna de la iteración y la Figura 5 presenta la carta Gantt. El periodo cuenta con 32 días hábiles por los tres festivos (12 de octubre, 2 de noviembre y 16 de noviembre).

Tabla 20 Calendario relativo del incremento 1 (parqueaderos)

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Actividad | Inicio | Fin | Días hábiles | Precedencia |
| Planeación, ajuste de PMP y SRS, arquitectura, modelo de datos, configuración y diseño de la pasarela simulada (2, 3.1, 3.2) | 12 oct | 16 oct | 4 ( |  |
| Diseño UI/UX y desarrollo de cuenta y roles (3.3, 4.1) | 19 oct | 23 oct | 5 | Planeación y arquitectura |
| Publicación y disponibilidad (4.2) | 26 oct | 30 oct | 5 | Cuenta y roles |
| Búsqueda por ubicación (4.3) | 3 nov | 6 nov | 4 | Publicación y disponibilidad |
| Reserva, pago simulado y confirmación (4.4) | 9 nov | 13 nov | 5 | Búsqueda por ubicación |
| Cancelación, reembolso simulado, reservas recibidas e integración (4.5) | 17 nov | 20 nov | 4 | Reserva y pago simulado |
| Pruebas, correcciones, manual de usuario e informe final (5, 6) | 23 nov | 27 nov | 5 | Integración |
| Entrega final del MVP | 28 nov | 28 nov | 1 | Pruebas y cierre |

![](data:image/png;base64...)Para explicar mejor la estructura interna de un incremento, la Figura 4 muestra un diagrama BPMN de la iteración, complementario a la Figura 2 (proceso general de SPAZIO).

La carta Gantt de la Figura 5 muestra la secuencia de las siete semanas, con las precedencias

![](data:image/png;base64...)

**Figura 5 Carta Gantt**

#### 10.7 Asignación de recursos

Esta sección relaciona las actividades principales del WBS (Tabla 20) con los recursos y los roles necesarios para ejecutarlas. Como ya se explicó en la sección 10.4, los tres integrantes del equipo se reparten estos roles según el incremento, y no existe una asignación fija de una sola persona para cada actividad.

Primero se presentan los grupos de responsabilidad dentro del equipo, que agrupan actividades parecidas, y después la descripción detallada de cada rol funcional.

Tabla 21 Recursos por actividad del WBS (incremento 1)

|  |  |  |
| --- | --- | --- |
| Actividad (ver Tabla 19) | Recursos necesarios | Rol requerido |
| 1. Gestión del incremento | Tablero de tareas, documento del PMP | Gestión del proyecto |
| 2. Levantamiento de requisitos | Plantilla de historias de usuario | Levantamiento de requisitos |
| 3. Diseño | Figma, herramienta de diagramas | Diseño |
| 4. Desarrollo | Computador personal, VS Code, Python/FastAPI, React, Supabase | Desarrollo |
| 5. Pruebas | Casos de prueba, aplicación desplegada localmente | Pruebas y control de versiones |
| 6. Cierre del incremento | Plantilla de retrospectiva, criterios de aceptación (sección 9.6) | Retrospectivas y validación del producto |

## 10.8 Asignación de presupuesto

SPAZIO es un proyecto académico y, por ahora, no maneja un presupuesto real ni flujos de dinero entre partes, porque el equipo no está pagando ni recibiendo dinero por el desarrollo. Sin embargo, se presenta a continuación una tabla de flujo de caja simplificada, que muestra en qué actividades podría haber alguna salida de dinero, en caso de que se necesite algún servicio de pago durante el proyecto.

Tabla 22 Flujo de caja simplificado del proyecto

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Periodo | Actividad relacionada | Días hábiles | Entrada | Salida real | Costo de referencia del software (valorización) |
| Semana 1 (12–16 oct) | Planeación, requisitos, arquitectura, datos, pasarela simulada | 4 | $0 | $0 (planes gratuitos) | ≈ $1.368.600 |
| Semana 2 (19–23 oct) | Diseño UI/UX y cuentas | 5 | $0 | $0 | ≈ $1.710.800 |
| Semana 3 (26–30 oct) | Publicación y disponibilidad | 5 | $0 | $0 | ≈ $1.710.800 |
| Semana 4 (3–6 nov) | Búsqueda por ubicación | 4 | $0 | $0 | ≈ $1.368.600 |
| Semana 5 (9–13 nov) | Reserva, pago simulado y confirmación | 5 | $0 | $0 | ≈ $1.710.800 |
| Semana 6 (17–20 nov) | Cancelación, reservas recibidas e integración | 4 | $0 | $0 | ≈ $1.368.600 |
| Semana 7 (23–28 nov) | Pruebas, documentación y cierre | 5 | $0 | $0 | ≈ $1.710.800 |
| Riesgo de infraestructura | Supabase/hospedaje si se supera el plan gratuito | — | $0 | Por confirmar: plan Supabase Pro ≈ US$25/mes si se excede el límite de 500 MB; dominio propio ≈ $60.000/año (opcional) | — |
| Totales | — | **2** | **$0** | **$0 real** | **≈ $10.949.000 (referencia)** |

El costo total de referencia del software (≈ $10.948.937, equivalente a 4,64 meses-persona × $2.359.685 en el escenario de 6 h/PF de la Tabla 42) se distribuye en proporción a los días hábiles de cada semana: cada día hábil representa aproximadamente $342.154 (≈ $10.948.937 ÷ 32 días), de modo que una semana de 4 días hábiles vale ≈ $1.368.600 y una de 5 días hábiles ≈ $1.710.800.

## 10.9 Contratación

Dado que SPAZIO es un proyecto académico y no cuenta con presupuesto propio (ver sección 10.8), el equipo no va a contratar bienes ni servicios de pago mientras el MVP esté en desarrollo. La siguiente tabla resume los bienes y servicios que el proyecto necesita y cómo se van a obtener.

Tabla 23 Bienes y servicios necesarios

|  |  |  |
| --- | --- | --- |
| Bien o servicio | Necesario para | Cómo se obtiene |
| Equipos de cómputo | Desarrollo y diseño | Computador personal de cada integrante, conforme a la Tabla 39. |
| Repositorio de código | Control de versiones (sección 9.1) | Cuenta gratuita en GitHub. |
| Base de datos y autenticación | Almacenar la información y autenticar usuarios | Plan gratuito de Supabase. |
| Herramienta de diseño | Prototipos de interfaz | Cuenta gratuita de Figma. |
| Servicio de geocodificación | Búsqueda por ubicación (RF-01) | Nominatim (OpenStreetMap), uso gratuito. |
| Pasarela de pago simulada | Demostrar el flujo de pago | Módulo propio desarrollado por el equipo; no se contrata. |
| Hospedaje del mvp | Publicar una versión de prueba | Servicio gratuito de hospedaje |

Si en algún momento del proyecto se necesita contratar un servicio de pago, por ejemplo, un plan superior de Supabase o un dominio propio, la decisión se debe tomar en conjunto entre los tres integrantes del equipo, siguiendo el mismo proceso de aprobación de cambios explicado en la sección 7.1.5.

## 10.10 Desmantelamiento

El desmantelamiento de SPAZIO ocurre al finalizar el curso, cuando el proyecto llega a su cierre académico (ver sección 9.1, Hito 5). Como el proyecto no tiene usuarios reales todavía, este desmantelamiento consiste principalmente en organizar y conservar la información generada, más que en apagar un sistema en producción con usuarios activos.

Tabla 24 Plan de desmantelamiento del proyecto

|  |  |  |
| --- | --- | --- |
| Actividad | Responsable | Requisito necesario |
| Archivar el repositorio de Git con el código final | Rol de control de versiones (Tabla 18) | Que todo el código esté integrado en la rama principal. |
| Entregar la versión final del PMP y los demás documentos | Rol de documentación (Tabla 18) | Que los documentos estén actualizados con el estado final del proyecto. |
| Cerrar o dejar en pausa los servicios gratuitos usados (Supabase, hospedaje) | Equipo del proyecto | Hay que confirmar que ya no se necesitan para la evaluación final. |
| Guardar copia de los documentos en la carpeta compartida en la nube | Equipo del proyecto | Que la carpeta compartida siga activa después del curso. |
| Entregar el informe final del proyecto al profesor | Equipo del proyecto | Que el informe final esté aprobado (ver Tabla 15). |

Si más adelante el equipo decide continuar con SPAZIO fuera del contexto académico, este plan de desmantelamiento no se ejecutaría de la misma forma, porque en ese caso el sistema seguiría activo con usuarios reales. Por ahora, este plan aplica solamente al cierre del proyecto dentro del curso

# 11. Monitoreo y control del proyecto

El propósito de esta sección es que los administradores del proyecto, es decir, los tres integrantes del equipo de SPAZIO, sepan cómo conocer el estado real del proyecto en cualquier momento y qué acciones de control deben tomar cuando algo no está saliendo como se planeó. Los mecanismos que se explican aquí se aplican durante los tres incrementos definidos en la sección 9.1, y se apoyan en algunas prácticas que ya se mencionaron antes, como las retrospectivas (sección 9.3) y el tablero de tareas (sección 9.4).

## 11.1 Administración de requisitos

El objetivo de esta sección es explicar cómo el equipo va a detectar, reportar y controlar los cambios en los requisitos del producto SPAZIO durante el desarrollo, y cuáles son las responsabilidades del equipo y de las personas externas, como el profesor, dentro de este proceso.

### Artefactos de la administración de requisitos

Durante el proyecto se van a generar los siguientes artefactos como resultado de administrar los requisitos:

* **Historias de usuario:** documento donde se describen las funcionalidades del sistema desde el punto de vista del usuario o del anfitrión, como ya se explicó en la sección 9.1.
* **Matriz de trazabilidad:** tabla que relaciona cada historia de usuario con el incremento al que pertenece, con el criterio de aceptación correspondiente (sección 9.6) y con la funcionalidad del sistema que la implementa.
* **Registro de cambios de requisitos:** lista donde se anota cada vez que una historia de usuario se agrega, se modifica o se elimina, indicando la fecha, el motivo del cambio y quién lo propuso.
* **Casos de prueba asociados:** documento donde se relaciona cada historia de usuario con las pruebas que se le hicieron, para poder verificar que el requisito realmente se cumplió.

### Diagrama del proceso de administración de requisitos

A continuación, se presenta el diagrama BPMN del proceso de administración de requisitos de SPAZIO. El diagrama tiene dos carriles: uno para el rol de Levantamiento de requisitos y otro para el equipo de Desarrollo, que en este caso agrupa también las actividades de Diseño, Pruebas y Validación, para no hacer el diagrama demasiado complicado.

![](data:image/png;base64...)

*Figura 6. Diagrama BPMN del proceso de administración de requisitos.*

El proceso inicia cuando se identifica una necesidad de un usuario o un anfitrión, y desde ahí el rol de Levantamiento de requisitos redacta la historia de usuario, define su criterio de aceptación y la registra en la matriz de trazabilidad. Luego, el equipo de Desarrollo revisa la historia y decide si cumple los criterios de calidad de la sección 11.1. Si no los cumple, la historia regresa para corregirse; si los cumple, se aprueba, se actualiza la matriz de trazabilidad y avanza por diseño, desarrollo, pruebas y validación. Al final del incremento se revisa si el requisito necesita algún cambio; si lo necesita, se actualiza y se vuelve a revisar, y si no, el proceso termina con el requisito validado

### Requisitos de los dos incrementos principales

El alcance del MVP de SPAZIO, definido en la sección 7.1.1, se enfoca en dos categorías principales, parqueaderos y espacios deportivos, que corresponden a los incrementos 1 y 2 del proyecto (sección 9.1). Por esta razón, la administración de requisitos se explica pensando en estos dos incrementos, y no solamente en el primero, aunque el WBS detallado de la Tabla 19 se haya hecho únicamente sobre el incremento de parqueaderos.

Para los dos incrementos, las historias de usuario giran alrededor de las mismas acciones principales, que ya se mencionaron en la sección 9.1 y en la Tabla 21: buscar un espacio, publicarlo y reservarlo. La diferencia entre un incremento y otro no está en el tipo de historia, sino en la categoría de espacio a la que aplica cada una. A continuación, se muestra un resumen de las historias más importantes de cada incremento.

**Tabla 25: Historias de usuario**

|  |  |  |  |
| --- | --- | --- | --- |
| incremento | Historia de usuario (resumen) | Rol relacionado | Estado |
| 1 – Parqueaderos | HU01. Como usuario, quiero buscar parqueaderos disponibles cerca de una ubicación, para comparar opciones antes de reservar. | Usuario | Se implementa |
| 1 – Parqueaderos | HU02. Como anfitrión, quiero publicar un parqueadero indicando sus horarios disponibles, para que los usuarios lo encuentren. | Anfitrión | Se implementa |
| 1 – Parqueaderos | HU03. Como usuario, quiero reservar y pagar un parqueadero dentro de la aplicación (pago simulado), para asegurar el espacio. | Usuario | Se implementa (pago simulado) |
| Posterior | HU04. Como usuario o anfitrión, quiero calificar a la otra parte después de usar el espacio. | Usuario / Anfitrión | Se mueve a incremento posterior |
| 2 – Espacios deportivos | HU05. Como usuario, quiero buscar espacios deportivos disponibles. | Usuario | Hoja de ruta |
| 2 – Espacios deportivos | HU06. Como anfitrión, quiero publicar un espacio deportivo con sus horarios. | Anfitrión | Hoja de ruta |
| 2 – Espacios deportivos | HU07. Como usuario, quiero reservar y pagar un espacio deportivo. | Usuario | Hoja de ruta |

Cada una de estas historias, cuando se termine de redactar por completo, debe tener también su criterio de aceptación, que es lo que después va a usar el rol de Pruebas para saber si la funcionalidad quedó bien hecha. Como todavía no todos los criterios están escritos con el detalle final, en esta sección solamente se deja el resumen de la historia, y no el criterio de aceptación completo, para no inventar información que no está definida en otras partes del PMP.

### Relación entre requisitos, diseño, desarrollo y pruebas

Una historia de usuario aprobada no se queda solamente como un texto guardado, sino que se convierte en el punto de partida de las siguientes actividades del WBS (Tabla 19): primero pasa al rol de Diseño (actividad 3), después al rol de Desarrollo (actividad 4) y finalmente al rol de Pruebas (actividad 5), que verifica que la funcionalidad cumpla el criterio de aceptación. Al final, el rol de Validación del producto revisa el resultado como parte del cierre del incremento (actividad 6, y sección 9.6 del PMP). Esta cadena de requisito hacia diseño, desarrollo, prueba y validación es la que se sigue en la matriz de trazabilidad.

### Matriz de trazabilidad de requisitos

Esta matriz sirve para hacer seguimiento a cada historia de usuario desde que se identifica hasta que se valida. Se debe ir actualizando durante todo el incremento, cada vez que una historia cambie de estado. Por ahora se presenta con la información que ya se conoce del proyecto, dejando como pendiente lo que todavía no se ha definido.

**Tabla 26 Matriz de trazabilidad**

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Requisito (SRS) | Historia / Regla | Módulo | Criterio de aceptación (SRS) | Diseño | Desarrollo | Prueba | Validación | Estado |
| RF-12 | HC01 | M-05 | Con un correo no registrado y una contraseña válida, la cuenta se crea; con un correo ya registrado, se rechaza. | Prototipo registro (3.3); modelo de datos (3.2). | Endpoint y pantalla de registro (4.1). | Prueba funcional de registro (5.1). | Cierre del incremento (6.2). | Planeada |
| RF-13 (solo inicio de sesión) | HC01 | M-05 | Con correo y contraseña correctos, el sistema inicia la sesión. | Prototipo acceso (3.3). | Endpoint y pantalla de acceso (4.1). | Prueba funcional de acceso (5.1). | Cierre del incremento (6.2). | Planeada |
| RF-14 | HC01 | M-05 | Al guardar la primera publicación, se activa el rol de anfitrión. | Diseño de activación (3.1). | Lógica de activación (4.1). | Prueba de activación de rol (5.1). | Cierre del incremento (6.2). | Planeada |
| RF-03 | HU02 | M-02 | Al guardar los campos obligatorios, la publicación aparece en la búsqueda. | Prototipo publicación (3.3); modelo de datos (3.2). | Endpoint y pantalla de publicación (4.2). | Prueba funcional de publicación (5.1). | Cierre del incremento (6.2). | Planeada |
| RF-05 (solo crear periodos) | HC04, RN-06, RN-14 | M-02 | Un periodo traslapado se rechaza; uno sin traslape queda disponible. | Diseño de disponibilidad (3.1, 3.2). | Lógica de periodos (4.2). | Prueba de traslapes (5.1). | Cierre del incremento (6.2). | Planeada |
| RF-01 | HU01 | M-01 | Dada una ubicación con espacios en el radio, se muestra la lista con distancia, horario y precio en menos de 3 s. | Prototipo búsqueda (3.3); integración Nominatim (3.1). | Endpoint de búsqueda y pantalla de resultados (4.3). | Prueba funcional de búsqueda (5.1). | Cierre del incremento (6.2). | Planeada |
| RF-06 | HU03 | M-03 | Al elegir un horario y completar el pago simulado, se muestra el monto correcto y la confirmación. | Prototipo reserva/pago simulado (3.3); modelo de datos (3.2). | Endpoint de reserva y módulo de pasarela simulada (4.4). | Prueba de reserva y de los escenarios de pago simulado (5.1). | Cierre del incremento (6.2). | Planeada |
| RF-07 | RN-10 | M-03 | Con pago aprobado dentro de 10 min, la reserva pasa a confirmada; si se rechaza, da error o vence el tiempo, se libera y expira. | Diseño de retención y confirmación (3.1). | Lógica de retención y confirmación automática (4.4). | Prueba de confirmación y expiración (5.1). | Cierre del incremento (6.2). | Planeada |
| RF-08 | RN-12 | M-03 | Cancelación del usuario con ≥24 h o del anfitrión: reembolso del 100 %; usuario con <24 h: 0 %. | Diseño de cancelación y reembolso simulado (3.1). | Lógica de cancelación y cálculo de reembolso (4.5). | Prueba de cálculo de reembolso simulado (5.1). | Cierre del incremento (6.2). | Planeada |
| RF-09 | HC02 | M-03 | Al confirmarse una reserva, aparece en la lista de reservas recibidas del anfitrión con su estado. | Prototipo reservas recibidas (3.3). | Pantalla y consulta de reservas recibidas (4.5). | Prueba de reservas recibidas (5.1). | Cierre del incremento (6.2). | Planeada |

La columna Estado se debe ir actualizando a medida que avanza cada incremento, por ejemplo: planificada, en diseño, en desarrollo, en pruebas o validada. El rol de Documentación (Tabla 18) es el que se encarga de mantener esta matriz al día, apoyado por los demás roles cuando una historia cambia de estado.

## 11.2 Control de cambio del alcance

El control de cambio del alcance busca detectar a tiempo cuando una actividad, una funcionalidad o un requisito se está saliendo de lo que se definió como alcance del proyecto en la sección 7.1.1. Esto es importante en SPAZIO porque, al ser un proyecto académico con pocos integrantes, es fácil que en algún momento alguien proponga agregar algo que suena interesante, pero que no estaba pensado dentro del MVP, y eso podría atrasar el cronograma o hacer que el equipo no alcance a terminar lo más importante.

Para detectar posibles cambios de alcance, el equipo va a comparar de forma constante lo que se está trabajando con lo que dice la sección 7.1.1, en especial con la parte de "Qué incluye el proyecto" y "Qué no incluye el proyecto". Esta comparación se hace principalmente en dos momentos: cuando se revisan las historias de usuario nuevas (actividad 2.3 del WBS), y cuando alguna parte interesada, como el profesor del curso, propone una idea nueva durante el desarrollo.

* Comparación con el alcance aprobado: cada historia de usuario nueva se debe revisar contra la sección 7.1.1, para confirmar que la categoría de espacio y la funcionalidad todavía hacen parte del alcance definido.
* Revisión de historias de usuario: si una historia describe algo que no está en el alcance, por ejemplo, una categoría de espacio distinta a parqueaderos o espacios deportivos se marca como una posible solicitud de cambio y no se aprueba directamente.
* Identificación de solicitudes nuevas: cualquier integrante del equipo, o una parte interesada externa, puede proponer un cambio, pero debe quedar registrado antes de empezar a trabajar en él.
* Evaluación del impacto: se analiza cómo afectaría ese cambio al alcance, al tiempo, a los costos y a los entregables ya definidos, siguiendo el mismo proceso de la sección 7.1.5.
* Aprobación o rechazo: la decisión se toma entre los tres integrantes del equipo, tal como se explicó para los roles de Gestión del proyecto y Documentación en la Tabla 18.
* Actualización de documentación: si el cambio se aprueba, se deben actualizar las secciones correspondientes del PMP, por ejemplo, la 7.1.1, la 7.1.3 o la matriz de trazabilidad de la sección 11.1.
* Registro del cambio: el cambio queda anotado en el historial de cambios del documento (sección 2), indicando la fecha, la descripción y el responsable.

En resumen, el proceso que se sigue para el control de cambio del alcance es el mismo que ya está definido en la sección 7.1.5 del PMP, aplicado de forma específica a los casos donde el cambio afecta directamente qué está o no está dentro del alcance del proyecto:

* 1. Identificación de la necesidad de cambio.
* 2. Evaluación del impacto sobre alcance, tiempo, costos y entregables.
* 3. Revisión y aprobación por parte del equipo.
* 4. Actualización de las secciones correspondientes del PMP.
* 5. Registro en el historial de cambios del documento.

## 11.3 Control del calendario

Como se explicó en la sección 10.6, SPAZIO no maneja un cronograma con fechas exactas de calendario, sino un calendario relativo por semanas, porque todavía no se conoce por completo el calendario académico del curso. Por esta razón, el control del calendario no se hace comparando fechas específicas, sino comparando en qué semana del incremento se esperaba tener cierto avance, contra en qué semana se tiene en realidad.

* Revisión de actividades realizadas: en cada reunión de seguimiento (actividad 1.1 del WBS, Tabla 19), el equipo revisa cuáles actividades de la Tabla 19 ya se terminaron y cuáles siguen abiertas.
* Comparación entre avance planeado y real: se compara la semana en la que se esperaba terminar una actividad, según la calendarización de la sección 10.6, contra la semana en la que realmente se terminó o se sigue trabajando en ella.
* Uso del tablero Kanban: el tablero con las columnas Por hacer, Haciendo y Hecho (sección 9.1) es la principal herramienta para ver el avance real del incremento, porque ahí se refleja el estado de cada tarea del día a día.
* Reuniones de seguimiento: estas reuniones cortas y periódicas sirven para que el equipo comente si hay dificultades que están atrasando alguna actividad.
* Detección de retrasos: un retraso se detecta cuando una actividad sigue en la columna Haciendo del tablero después de la semana en la que se esperaba pasar a Hecho.
* Identificación de actividades afectadas: cuando se detecta un retraso, el equipo revisa si otras actividades dependen de la que está atrasada, usando la relación de "Hace parte de" de la Tabla 19 como referencia.
* Acciones correctivas: dependiendo del caso, las acciones pueden ser redistribuir el trabajo entre los integrantes, simplificar el alcance de una historia de usuario sin sacarla del incremento, o pedir ayuda a otro rol del equipo.
* Actualización del cronograma: si después de aplicar una acción correctiva el retraso sigue afectando el incremento completo, se debe actualizar la calendarización de la sección 10.6 y registrar ese cambio en el historial de cambios (sección 2), siguiendo el mismo proceso de la sección 7.1.5.

Este control del calendario se hace incremento por incremento, y no para todo el proyecto de una sola vez, porque como se explicó en la sección 10.5, el detalle de actividades solamente se hizo para el primer incremento. Cuando empiece el incremento de espacios deportivos, el equipo va a construir una tabla de actividades parecida a la Tabla 19, y sobre esa tabla nueva se va a aplicar el mismo control que se describe aquí.

## 11.4 Control del presupuesto

SPAZIO es un proyecto académico y, como ya se explicó en la sección 10.8, por ahora no tiene un presupuesto real ni flujos de dinero entre partes. Por esta razón, el control del presupuesto en este proyecto no se hace comparando gastos reales de dinero, sino revisando que el equipo siga usando únicamente los servicios gratuitos que se definieron en la Tabla 22, y detectando a tiempo si en algún momento se necesita un servicio de pago.

* Registro de costos: aunque no hay dinero real de por medio, el equipo debe dejar anotado en la Tabla 22 (sección 10.8) cada vez que se empiece a usar un servicio nuevo, indicando si tiene algún costo asociado.
* Comparación con lo planeado: se revisa que las herramientas que se están usando, como GitHub, Supabase, Figma y las herramientas de comunicación, se mantengan dentro de los planes gratuitos que se definieron desde el principio.
* Control de posibles gastos: si algún servicio gratuito llega a su límite, por ejemplo el almacenamiento de Supabase, el equipo debe revisarlo antes de que se vuelva un problema, y no esperar a que el sistema deje de funcionar.
* Aprobación de un gasto: si en algún momento se necesita contratar un servicio de pago, por ejemplo un plan superior de Supabase o un dominio propio, la decisión se debe tomar entre los tres integrantes del equipo, tal como ya se indicó en la sección 10.9, y no puede decidirla una sola persona.
* Cambios de presupuesto: si se aprueba un gasto nuevo, esto se trata como un cambio dentro del proyecto y debe seguir el mismo proceso general de la sección 7.1.5.
* Actualización del PMP: cualquier cambio relacionado con el presupuesto se debe reflejar en la Tabla 22 (sección 10.8) y también en el historial de cambios del documento (sección 2).

No se van a inventar valores monetarios dentro de este control, porque como se explicó en la sección 10.8, todavía no se tiene una cantidad exacta de horas dedicadas al proyecto, y por lo tanto tampoco un valor estimado del costo del software. Cuando el equipo tenga ese dato más adelante, se podrá comparar el estimado con el uso real de horas, pero por ahora el control se enfoca solamente en el uso correcto de los servicios gratuitos.

## 11.5 Control de calidad

El control de calidad de SPAZIO busca asegurar que lo que se está construyendo cumpla con lo que se definió en las historias de usuario, y que el código se mantenga en buen estado durante todo el proyecto. Este control se relaciona directamente con la cadena que ya se mencionó en la sección 11.1: requisitos, diseño, desarrollo, pruebas y validación, porque en cada uno de estos pasos hay una forma distinta de revisar la calidad del trabajo.

* Revisión de historias de usuario: antes de pasar a diseño, cada historia se revisa con los diez criterios de calidad de la sección 11.1, para evitar que un requisito mal escrito llegue hasta el desarrollo.
* Criterios de aceptación: cada historia debe tener un criterio de aceptación claro, que es lo que el rol de Pruebas va a usar para decidir si la funcionalidad está terminada o no.
* Pruebas funcionales: el rol de Pruebas (Tabla 18) ejecuta casos de prueba sobre cada funcionalidad desarrollada, comparando el resultado contra el criterio de aceptación de la historia.
* Corrección de errores: si una prueba encuentra un error, este se reporta y el rol de Desarrollo lo corrige antes de dar la historia por terminada, como se indica en la actividad 5.2 del WBS (Tabla 19).
* Revisión de código: antes de integrar un cambio a la rama principal del repositorio, el rol de Revisión de código (Tabla 18) revisa el código y puede pedir ajustes, siguiendo la práctica que ya se definió en la sección 9.1.
* Integración frecuente: usar Git con integraciones frecuentes, en vez de dejar todo el código para integrarlo al final, ayuda a encontrar errores más rápido y a que sean más fáciles de corregir.
* Validación del producto: al final de cada incremento, el rol de Validación del producto revisa junto con el equipo si las funcionalidades cumplen lo definido en el plan de aceptación (sección 9.6), antes de dar el incremento por cerrado.
* Retrospectivas: la retrospectiva de cierre de cada incremento (sección 9.3) también sirve como un espacio para hablar de problemas de calidad que se hayan presentado, y para proponer mejoras que se apliquen en el siguiente incremento.
* Documentación: el rol de Documentación mantiene actualizada la matriz de trazabilidad y el historial de cambios, para que cualquier problema de calidad se pueda relacionar con el requisito, el diseño o el desarrollo que lo originó.

Cuando se detecta un problema de calidad, por ejemplo, un error encontrado en pruebas o una observación del rol de Revisión de código, este se registra en el tablero Kanban como una tarea nueva, de la misma forma en que ya se explicó para el manejo de defectos en la sección 9.3. De esta manera, el problema no se queda solamente como un comentario, sino que se convierte en una tarea que alguien del equipo va a resolver y que se puede seguir en el tablero hasta que se cierre.

## 11.6 Cierre del proyecto

El cierre del proyecto ocurre al terminar el curso, y está relacionado directamente con el plan de desmantelamiento ya definido en la sección 10.10. Para cerrar el proyecto, el equipo debe verificar que todos los entregables definidos en la sección 7.1.3 estén completos, revisar el estado final de las funcionalidades desarrolladas y hacer una última validación con el rol de Validación del producto. También se debe revisar que toda la documentación, incluyendo este PMP, quede actualizada con los cambios que se hayan hecho durante el proyecto, y registrar cualquier tema que quede pendiente para el futuro, en caso de que el equipo decida continuar con SPAZIO después del curso.

Como parte del cierre también se debe hacer una retrospectiva final o un post-mortem del proyecto completo, distinto de las retrospectivas de cada incremento, para reflexionar sobre todo el proceso seguido. Con esta información se prepara un informe administrativo o gerencial final, se organizan los documentos del proyecto en la carpeta compartida y se hace la entrega final al profesor, siguiendo lo que ya se indicó en la Tabla 24. Los servicios gratuitos usados, como Supabase o el hospedaje del MVP, se cierran o se dejan en pausa únicamente cuando ya no se necesiten para la evaluación final del curso

# 12. Entrega del producto

El proceso de transición de SPAZIO estará orientado a realizar la entrega formal del producto mínimo viable (MVP) y de la documentación asociada al finalizar el semestre. Debido a que el proyecto se desarrolla en un contexto académico y no cuenta actualmente con un cliente externo definido, la transición se realizará principalmente mediante la presentación y validación del sistema ante el profesor y las partes interesadas del proyecto. Esta actividad seguirá los criterios establecidos en el Plan de aceptación del producto (sección 9.6), de manera que la entrega final se realice únicamente después de comprobar el cumplimiento de los requisitos y funcionalidades definidos.

Antes de la entrega final, el equipo realizará una revisión de la versión definitiva del sistema, verificando el funcionamiento de las funcionalidades desarrolladas, los resultados de las pruebas y la corrección de los errores identificados. Posteriormente, se realizará una demostración del MVP, en la que se presentarán los principales flujos de uso de la plataforma, incluyendo la búsqueda y publicación de espacios y el proceso de reserva. La aceptación se sustentará en las evidencias de pruebas y en los criterios definidos para los entregables.

Los principales artefactos que serán entregados son: (1) la versión funcional del MVP de SPAZIO, (2) las evidencias y resultados de las pruebas del sistema, (3) el manual de usuario y (4) la documentación final del proyecto. Estos corresponden a los entregables definidos previamente en el PMP. La entrega se realizará en el Hito 5: Entrega final del MVP, después de completar los tres incrementos y su respectiva validación.

El equipo de desarrollo será responsable de preparar la versión final, organizar los artefactos y realizar la demostración. El responsable de pruebas verificará las evidencias y el cumplimiento de los criterios de aceptación, mientras que el profesor y las partes interesadas realizarán la revisión final y validación de los entregables. Una vez aceptados, el código fuente y la documentación quedarán disponibles en el repositorio y medios definidos por el equipo para facilitar su consulta, continuidad o evolución posterior.

# 13. Procesos de soporte

Los procesos de soporte de SPAZIO permiten mantener controlado el trabajo del equipo y sostener la ejecución de los tres incrementos definidos en la sección 9.1. Estos procesos son transversales al proyecto y complementan el monitoreo y control presentado en la sección 11. Para SPAZIO, el soporte se organiza alrededor de la supervisión del trabajo, la gestión de riesgos, la administración de configuración, el control de calidad y la medición del proceso.

El criterio general es mantener mecanismos simples y trazables, apropiados para un equipo académico de tres integrantes, evitando introducir actividades de gestión que no aporten información útil para tomar decisiones sobre el MVP. La asignación de responsabilidades es rotativa y se acuerda en la planeación de cada incremento, de acuerdo con la Tabla 18 del PMP.

## 13.1 Supervisión del proyecto y del ambiente de trabajo

El propósito de la supervisión es asegurar que el equipo mantenga una forma de trabajo ordenada, que las actividades se ejecuten de acuerdo con el incremento vigente y que los problemas se hagan visibles a tiempo.

La supervisión se apoya en el tablero Kanban, las reuniones periódicas, el control de versiones, la revisión de cambios y las retrospectivas. Las decisiones relevantes continúan siendo colectivas: ningún rol posee autoridad absoluta sobre el proyecto, tal como se establece en la sección 10.3.1.

**Tabla 27 Reglas de trabajo y mecanismos de cumplimiento**

|  |  |  |  |
| --- | --- | --- | --- |
| Regla | Mecanismo de control | Responsable | Artefacto |
| Las tareas deben estar registradas y tener un estado actualizado. | Revisión del tablero en las reuniones de seguimiento y actualización inmediata cuando cambia el estado. | Gestión del proyecto + todos | Tablero Kanban |
| Los cambios de código no se integran a la rama principal sin revisión. | Uso de ramas y revisión de código antes de integrar cambios importantes. | Desarrollo + Revisión de código | Repositorio Git/GitHub |
| Una historia no pasa a desarrollo sin criterio de aceptación y revisión del equipo. | Revisión de historias y actualización de la matriz de trazabilidad. | Levantamiento de requisitos + equipo | Historias + matriz de trazabilidad |
| Los problemas encontrados deben quedar visibles y con responsable. | Creación de una tarea o incidencia en el tablero y seguimiento hasta su cierre. | Pruebas + Gestión del proyecto | Kanban + registro de incidencias |
| Las decisiones que cambian alcance, cronograma o presupuesto requieren acuerdo del equipo. | Evaluación del impacto y aprobación conjunta según la sección 7.1.5. | Los tres integrantes | PMP + historial de cambios |
| La comunicación debe ser respetuosa y orientada al trabajo. | Revisión de problemas en reuniones y tratamiento de conflictos durante retrospectivas. | Todos | Minutas/plantilla de retrospectiva |

### Seguimiento del ambiente de trabajo

* La reunión de seguimiento se utiliza para revisar actividades terminadas, actividades en curso, bloqueos y dependencias.
* El tablero Kanban debe reflejar el estado real del trabajo; una tarea que permanece en “Haciendo” más allá de la semana prevista se considera una señal de retraso.
* Los bloqueos técnicos o de coordinación se registran y se discuten en la reunión de seguimiento. Cuando afectan el incremento, se redistribuye el trabajo o se ajusta la planificación.
* Al final de cada incremento se realiza una retrospectiva para identificar qué funcionó, qué debe cambiar y qué acciones concretas se llevarán al siguiente incremento.
* La supervisión del ambiente de trabajo también considera la disponibilidad de las herramientas: GitHub, Figma, Supabase, entorno de desarrollo y medios de comunicación definidos en las secciones 9.4 y 9.5.

La evidencia de la supervisión se consolida en el tablero, el historial de cambios, las matrices de requisitos y las plantillas de retrospectiva. Esto permite que el equipo pueda reconstruir qué ocurrió durante cada incremento sin depender únicamente de la memoria de los integrantes.

## 13.2 Análisis y administración de riesgos

El plan de riesgos de SPAZIO busca anticipar situaciones que puedan afectar el alcance, cronograma, calidad, continuidad del desarrollo o disponibilidad de los recursos.

La gestión de riesgos se mantendrá activa durante los tres incrementos y se revisará en las reuniones de seguimiento y en las retrospectivas. La prioridad se determina a partir de la combinación de probabilidad e impacto, usando una escala cualitativa de Bajo, Medio y Alto.

### Plan de riesgos

* **Responsable operativo:** el rol de Gestión del proyecto coordina la identificación y actualización del registro, con participación de los tres integrantes.
* **Identificación:** se revisan riesgos técnicos, de requisitos, de calendario, de herramientas, de coordinación y de calidad al inicio de cada incremento y cuando aparece una nueva situación durante la ejecución.
* **Análisis:** para cada riesgo se estiman probabilidad e impacto. Los riesgos de mayor combinación reciben primero acciones de prevención y seguimiento.
* **Prevención:** se definen medidas que reduzcan la probabilidad, por ejemplo, revisión temprana de requisitos, integración frecuente o entrenamiento técnico.
* **Mitigación:** cuando el riesgo ocurre, se aplican acciones para reducir sus consecuencias y se registra la situación en el tablero o en el registro de riesgos.
* **Revisión:** al final de cada incremento se verifica si cambió la probabilidad, el impacto, la acción o el responsable.

### ![](data:image/png;base64...)Proceso de identificación y tratamiento de riesgos

Figura 7. BPMN simplificado del proceso de identificación y administración de riesgos.

### El proceso comienza con la identificación de una situación incierta. Después se valora su probabilidad e impacto. Si el riesgo tiene prioridad alta, se define una acción de prevención y/o mitigación antes de cerrar el registro. Finalmente se asigna un responsable y se monitorea el riesgo en las reuniones de seguimiento. Un riesgo puede permanecer abierto entre incrementos y cambiar de prioridad a medida que se obtiene nueva información.

### Tabla 28 Momentos de aplicación:

|  |  |  |
| --- | --- | --- |
| Momento | Actividad | Resultado esperado |
| Inicio del proyecto | Identificación inicial de riesgos relacionados con alcance, tecnología, aprendizaje y cronograma. | Registro inicial priorizado. |
| Planeación de cada incremento | Revisar riesgos heredados y detectar riesgos específicos del incremento. | Registro actualizado y responsables definidos. |
| Reuniones de seguimiento | Revisar riesgos abiertos y señales de materialización. | Acciones de mitigación o cambios de prioridad. |
| Pruebas y validación | Identificar riesgos de calidad que se hagan evidentes durante las pruebas. | Nuevos riesgos o acciones correctivas registradas. |
| Retrospectiva y cierre de incremento | Evaluar qué riesgos ocurrieron, cuáles se mitigaron y qué lecciones deben conservarse. | Actualización para el siguiente incremento. |

**Tabla 29 Registro priorizado de riesgos**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| ID | Riesgo | Probabilidad | Impacto | Prioridad | Nivel de seguimiento |
| R-CAP | Capacidad insuficiente: el esfuerzo estimado (hasta 618 h a 8 h/PF) supera la capacidad de 480 h del periodo. | Alta | Alto | Alta | Alta |
| R1 | Cambios frecuentes de requisitos o alcance. | Media | Alto | Alta | Alta |
| R2 | Retrasos por disponibilidad limitada del equipo. | Alta | Alto | Alta | Alta |
| R3 | Errores de integración entre frontend, backend y Supabase. | Media | Alto | Alta | Alta |
| R4 | Defectos detectados tarde por pruebas insuficientes. | Media | Alto | Alta | Media |
| R-SIM | La pasarela de pago simulada no refleja la complejidad de un pago real, lo que puede ocultar casos que surgirían con una pasarela real. | Media | Medio | Media | Media |
| R5 | Curva de aprendizaje en FastAPI, React, Supabase o Figma. | Media | Medio | Media | Media |
| R6 | Dependencia de planes gratuitos o límites de infraestructura (Supabase 500 MB, Nominatim). | Media | Medio | Media | Media |
| R7 | Pérdida o confusión de cambios de documentación o código. | Baja | Alto | Media | Media |
| R8 | Falta de disponibilidad oportuna de decisiones del equipo. | Media | Medio | Media | Media |

La tabla se actualiza cuando cambian las condiciones del proyecto. La prioridad no representa una predicción del resultado del proyecto; se utiliza como criterio operativo para decidir qué riesgos requieren atención antes que otros.

**Tabla 30 Riesgos principales y acciones**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Riesgo | Prevención | Mitigación | Responsable | Recursos |
| R-CAP – Capacidad insuficiente | Dimensionar el alcance con la estimación por puntos de función (sección 10.2) y fijar la reserva de alcance. | Medir la productividad al cierre de la Semana 2 y replanificar; trabajar dos sábados de 5 h; recortar primero RF-09 y luego RF-14. | Gestión del proyecto + equipo | Tabla 42, calendario, capacidad |
| R1 – Cambio de requisitos/alcance | Revisar cada requisito contra el alcance (sección 7.1.1) antes de aprobarlo. | Aplicar el proceso de cambio (sección 7.1.5) y actualizar PMP + trazabilidad. | Levantamiento de requisitos + equipo | SRS, matriz, PMP |
| R2 – Retrasos del equipo | Reuniones periódicas, reparto claro de tareas y seguimiento del Kanban. | Redistribuir trabajo, simplificar tareas sin salir del alcance y ajustar el cronograma. | Gestión del proyecto + equipo | Kanban, calendario |
| R3 – Integración frontend/backend/Supabase | Integrar con frecuencia y probar interfaces antes de acumular cambios. | Aislar la integración con pruebas, corregir por prioridad y usar ramas. | Desarrollo + revisión de código | GitHub, VS Code, entorno de prueba |
| R4 – Defectos tardíos | Diseñar casos de prueba desde los criterios de aceptación y probar por historia. | Registrar el defecto en Kanban, corregir, repetir la prueba y bloquear el cierre de la historia. | Pruebas + Desarrollo | Casos de prueba, Kanban |
| R-SIM – Simulación de pago poco realista | Documentar con claridad los escenarios simulados (aprobado, rechazado, sin respuesta, expiración) y sus límites. | Registrar como mejora futura la integración de una pasarela real con conciliación y seguridad; dejar el módulo simulado desacoplado para facilitar el reemplazo. | Diseño + Desarrollo | Diseño de arquitectura, SRS |
| R5 – Curva de aprendizaje | Entrenamientos cortos antes de usar herramientas nuevas (sección 10.3). | Apoyo del integrante con mayor experiencia y consulta de documentación. | Rol técnico de la semana | Guías, documentación oficial |
| R6 – Límites de servicios gratuitos | Revisar periódicamente el uso de Supabase, el hospedaje y Nominatim. | Evaluar una alternativa gratuita o aprobar colectivamente un servicio de pago si fuera necesario. | Gestión del proyecto + equipo | Tabla 22, consola del servicio |
| R7 – Pérdida de trazabilidad | Git para el código y control de cambios para la documentación. | Recuperar la versión estable, reconciliar cambios y actualizar el historial. | Documentación + equipo | GitHub, PMP, matriz |
| R8 – Decisiones tardías | Resolver temas bloqueantes en las reuniones de seguimiento. | Escalar el asunto a decisión conjunta y registrar el acuerdo. | Los tres integrantes | Reuniones, minutas |

## 13.3 Administración de configuración

La administración de configuración permite saber qué versión de cada artefacto está vigente, quién realizó el cambio y cómo se relaciona con los requisitos y pruebas.

En SPAZIO, la configuración se centra en el código fuente, los prototipos, el modelo de datos, los documentos de gestión y las evidencias de pruebas. El control se apoya en Git/GitHub para el código y en un esquema de versiones y registro de cambios para los demás documentos.

### Tabla 31 Ítems de configuración identificados

|  |  |  |  |
| --- | --- | --- | --- |
| Ítem | Contenido | Control | Momento de actualización |
| Código fuente | Backend FastAPI, frontend React e integraciones. | Ramas, commits, revisión antes de integrar y rama principal como línea base funcional. | Cada cambio y al cierre de cada incremento. |
| Modelo de datos | Tablas y estructuras de Supabase. | Versiones documentadas del modelo y revisión antes de cambios que afecten requisitos. | Diseño y evolución de cada incremento. |
| Diseño UI/UX | Prototipos y componentes en Figma. | Archivo compartido, organización por incremento y registro de cambios relevantes. | Durante diseño y cuando se ajuste una historia. |
| Historias y requisitos | Historias, criterios de aceptación y matriz de trazabilidad. | Identificador estable, estado y registro de cambios. | Antes de diseño, durante cambios y en validación. |
| Casos y evidencias de prueba | Casos ejecutados, resultados y defectos. | Asociación con historia y versión evaluada. | Durante pruebas de cada incremento. |
| PMP y documentos de gestión | Secciones del PMP, tablas y anexos. | Historial de cambios, revisión del equipo y versión vigente del documento. | Cada entrega o cambio aprobado. |

### Líneas base y convenciones

* La rama principal representa la versión integrada que el equipo considera estable para la demostración o validación del incremento.
* Las funcionalidades nuevas se trabajan preferentemente en ramas independientes y se integran después de revisión y pruebas.
* Las historias de usuario y la matriz de trazabilidad conservan identificadores estables para evitar perder la relación entre requisito, diseño, desarrollo y prueba.
* Los documentos del PMP mantienen su historial de cambios; no se reemplaza una decisión sin dejar registro de qué cambió, cuándo y quién lo realizó.

### Proceso de control de cambios a los ítems de configuración

![](data:image/png;base64...)
Figura 8. BPMN simplificado del control de cambios de configuración.

El proceso inicia con una solicitud de cambio sobre un ítem identificado. El equipo analiza su impacto en requisitos, diseño, desarrollo, pruebas, alcance y cronograma.

Si el cambio es aprobado, se actualiza la versión correspondiente, se realizan las revisiones y pruebas necesarias y finalmente se integra o publica. Si no se aprueba, la solicitud queda registrada sin modificar la línea base.

### Tabla 32 Evolución de los artefactos durante el proyecto

|  |  |  |  |
| --- | --- | --- | --- |
| Artefacto | Creación | Refinamiento | Responsable principal |
| Historias de usuario | Inicio de cada incremento. | Ajuste del criterio de aceptación, estado o alcance. | Levantamiento de requisitos |
| Matriz de trazabilidad | Cuando se aprueba la historia. | Se actualiza al pasar por diseño, desarrollo, pruebas y validación. | Documentación + equipo |
| Arquitectura | Durante diseño del incremento. | Cuando una decisión técnica o integración cambia. | Diseño |
| Modelo de datos | Durante diseño. | Cuando nuevas historias requieren nuevas estructuras o relaciones. | Diseño / equipo técnico |
| Prototipos UI/UX | Durante diseño. | Ajustes derivados de requisitos, validación o usabilidad. | Diseño |
| Código fuente | Durante desarrollo. | Cada funcionalidad, corrección e integración. | Desarrollo |
| Casos de prueba | Antes o al inicio de pruebas. | Cuando cambia el criterio de aceptación o se detecta un nuevo caso. | Pruebas |
| Evidencias de pruebas | Durante ejecución de pruebas. | Al repetir pruebas después de correcciones. | Pruebas |
| PMP y documentos | En cada entrega o cuando se define un proceso. | Ante cambios aprobados de alcance, cronograma, presupuesto o decisiones de gestión. | Documentación + equipo |

## 13.4 Control de calidad

El control de calidad integra verificación, validación, revisiones y auditorías internas sobre requisitos, diseño, código, pruebas y documentación.

Se busca detectar errores lo más cerca posible del momento en que se introducen, sin separar la calidad del flujo normal del incremento. Por ello, las revisiones de calidad se incorporan en las actividades ya definidas en el WBS y en la administración de requisitos de la sección 11.1.

**Tabla 33 Procesos de control de calidad**

|  |  |  |  |
| --- | --- | --- | --- |
| Proceso | Momento | Responsable | Evidencia |
| Revisión de historias de usuario | Antes de diseño y ante cambios importantes. | Levantamiento de requisitos + equipo | Historia aprobada + criterio de aceptación + matriz |
| Revisión técnica de diseño | Durante diseño de cada incremento. | Diseño + equipo de desarrollo | Diagramas, modelo de datos y prototipos revisados |
| Revisión de código | Antes de integrar cambios importantes. | Revisor de código / otro integrante | Pull request o registro de revisión + commit |
| Pruebas funcionales | Durante y al cierre del desarrollo de cada incremento. | Pruebas | Casos ejecutados y resultados |
| Gestión de defectos | Después de cualquier fallo detectado. | Pruebas + Desarrollo | Incidencia Kanban + evidencia de corrección |
| Validación del incremento | Al finalizar cada incremento. | Pruebas + equipo / validación del producto | Criterios de aceptación y demostración |
| Revisión de documentación | En cada entrega y antes del cierre. | Documentación + equipo | PMP, matrices y anexos actualizados |
| Revisión final | Hito 5, antes de entrega. | Equipo + profesor / partes interesadas | Demostración, resultados de pruebas y documentos finales |
| Auditoría interna ligera | Al final de cada incremento. | Gestión del proyecto + equipo | Lista de comprobación de proceso |

### Verificación y validación

**Verificación:** comprobar que los artefactos y la implementación cumplen lo especificado. Incluye revisión de historias, diseño, código y pruebas contra criterios de aceptación.

**Validación:** comprobar que el incremento satisface los objetivos y criterios definidos para el producto. Se realiza mediante la demostración y revisión del resultado al cierre del incremento.

Las dos actividades se relacionan con la matriz de trazabilidad para conservar la cadena:

**Requisito → Diseño → Desarrollo → Prueba → Validación**

### BPMN del proceso de control de calidad

![](data:image/png;base64...)

**Figura 9. BPMN simplificado del control de calidad y tratamiento de defectos.**

El flujo de calidad se repite hasta que la evidencia demuestra el cumplimiento del criterio de aceptación. Los defectos se registran como trabajo visible en el tablero; así se evita que un problema quede únicamente como una observación verbal.

En la revisión final, el equipo comprueba además que las evidencias y la documentación sean coherentes con la versión del producto que se entrega.

### Revisiones y auditoría interna

La revisión de calidad de documentos se realizará al menos al finalizar cada incremento y antes de una entrega formal. Se verificará consistencia entre el PMP, historias, matriz de trazabilidad, resultados de pruebas y estado real del producto.

La auditoría interna será ligera: se utilizará una lista de comprobación para confirmar que las actividades críticas del incremento se realizaron y que sus evidencias están disponibles.

**Tabla 34 Preguntas de control**

|  |  |  |
| --- | --- | --- |
| Punto de revisión | Pregunta de control | Evidencia |
| Requisitos | ¿Cada historia aprobada tiene criterio de aceptación y estado? | Historias + matriz |
| Diseño | ¿El diseño corresponde a las historias vigentes? | Figma + diagramas |
| Código | ¿Los cambios integrados fueron revisados y probados? | GitHub + pruebas |
| Pruebas | ¿Las funcionalidades principales tienen evidencia de ejecución? | Casos + resultados |
| Defectos | ¿Los errores críticos tienen responsable y cierre? | Kanban + evidencia de corrección |
| Documentación | ¿Los cambios del proyecto están reflejados en el PMP? | Historial de cambios |

### Criterio para cerrar una funcionalidad

Una funcionalidad podrá considerarse terminada cuando se cumplan las siguientes condiciones:

* La historia está desarrollada de acuerdo con su diseño aprobado.
* El criterio de aceptación está cubierto y existe evidencia de prueba.
* Los defectos que bloqueen el criterio de aceptación han sido corregidos y reprobados con éxito.
* La implementación está integrada en la versión correspondiente y la matriz de trazabilidad refleja el estado real.

### Criterio para cerrar un incremento

Un incremento podrá considerarse cerrado cuando:

* Las historias previstas para el incremento fueron verificadas y validadas o quedaron explícitamente registradas como pendientes.
* La demostración del incremento fue realizada y se cuenta con las evidencias de prueba.
* La documentación y la matriz de trazabilidad están actualizadas.
* Se realizó la retrospectiva y se registraron acciones de mejora para el siguiente incremento.

## 13.5 Métricas

Las métricas de SPAZIO se utilizarán para observar el avance y la calidad sin convertir la medición en una carga excesiva.

El conjunto mínimo se selecciona a partir de lo ya definido en el PMP: estimación por puntos de historia, seguimiento del tablero, frecuencia de integración, defectos en pruebas y uso de los recursos.

Las métricas servirán como insumo para las retrospectivas y para justificar ajustes en planificación, pruebas o distribución del trabajo. Esto es consistente con la decisión previa de complementar las retrospectivas con información cuantitativa.

### Tabla 35 Métricas a utilizar y relación con los planes

|  |  |  |  |
| --- | --- | --- | --- |
| Métrica | Definición | Plan / sección relacionada | Uso |
| Puntos de historia por incremento | Suma de puntos asignados a historias. | 10.2 Estimación | Comparar tamaño estimado y capacidad de trabajo. |
| Historias terminadas por incremento | Cantidad de historias que llegan a validación. | 10.5 / 11.1 | Medir avance funcional. |
| Tiempo de ciclo de tarea | Tiempo aproximado entre inicio y término de una tarea del Kanban. | 9.3 Plan de mejora | Detectar cuellos de botella. |
| Retrabajo por defectos | Cantidad de correcciones posteriores a la primera prueba. | 11.5 / 13.4 Calidad | Identificar problemas de calidad recurrentes. |
| Defectos por incremento | Cantidad de errores encontrados en pruebas. | 11.5 Control de calidad | Observar tendencias de calidad. |
| Frecuencia de integración | Cantidad de integraciones relevantes a la rama principal por periodo. | 9.1 / 13.3 Configuración | Observar integración frecuente y conflictos. |
| Cumplimiento de tareas planificadas | Proporción de tareas del incremento terminadas dentro de la semana prevista. | 10.6 / 11.3 | Detectar retrasos. |
| Riesgos abiertos de alta prioridad | Cantidad de riesgos de prioridad alta sin cerrar. | 13.2 Riesgos | Concentrar seguimiento. |
| Uso de servicios / límites gratuitos | Registro de consumo relevante y cercanía a límites. | 10.8 / 11.4 | Prevenir interrupciones por infraestructura. |

### Tabla 36 Proceso de recolección, procesamiento y uso de métricas

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Métrica | Quién recolecta | Cuando | Herramienta | Quién consolida y cómo | Uso de la información |
| Puntos de historia / historias terminadas | Gestión del proyecto con apoyo de requisitos | Planeación y cierre del incremento | Kanban / plantilla de estimación | Gestión del proyecto suma puntos y registra resultado por incremento. | Ajustar capacidad y estimación del siguiente incremento. |
| Tiempo de ciclo / cumplimiento | Gestión del proyecto | Durante el incremento y al cierre semanal | Kanban | Comparar estado y semana prevista frente a semana real. | Detectar retrasos y reasignar trabajo. |
| Defectos / retrabajo | Pruebas | En cada ejecución de pruebas | Casos de prueba + Kanban | Agrupar por historia, causa y estado de cierre. | Priorizar correcciones y mejorar prevención. |
| Frecuencia de integración | Desarrollo | Durante cada incremento | GitHub | Revisar historial de commits e integraciones relevantes. | Identificar periodos de integración tardía o conflictiva. |
| Riesgos | Gestión del proyecto + equipo | Inicio, seguimiento y retrospectiva | Registro de riesgos | Actualizar probabilidad, impacto, prioridad y estado. | Concentrar acciones en riesgos de mayor prioridad. |
| Uso de servicios | Responsable de gestión técnica del incremento | Durante el desarrollo y antes de cierre | Paneles de Supabase/hospedaje + Tabla 22 | Comparar consumo con límites gratuitos y registrar cambios. | Evitar interrupciones y anticipar necesidades de infraestructura. |

### Consolidación y almacenamiento

* La información mínima se puede mantener en el tablero Kanban y en tablas simples asociadas al incremento; no se requiere una herramienta especializada de medición.
* Cada cierre de incremento debe dejar un pequeño resumen de métricas, problemas observados y acciones acordadas.
* Las tendencias relevantes se incorporan a la retrospectiva para decidir acciones de mejora; cuando una métrica se usa para justificar un cambio de proceso, la decisión se registra como parte de las acciones del incremento.
* Los datos deben corresponder a la versión del producto y al periodo del incremento para mantener trazabilidad.

### Cierre de la sección 13

En conjunto, los procesos de soporte permiten que el desarrollo incremental de SPAZIO mantenga control sobre el trabajo, los riesgos, las versiones, la calidad y la información objetiva del proyecto.

Estos procesos no sustituyen los mecanismos de monitoreo y control de la sección 11; los complementan y establecen las prácticas operativas que permiten ejecutar dichos controles durante cada incremento. Esto mantiene la coherencia con el enfoque incremental del proyecto y con las prácticas ya establecidas de seguimiento, integración, pruebas, revisión de código y retrospectivas.

# 14. Anexos

Esta sección reúne información adicional que complementa algunos temas ya explicados en el documento.

**Anexo A. Enlaces de referencia de las herramientas y tecnologías usadas en SPAZIO**

Este anexo complementa las secciones 9.4 y 9.5, donde se presentan las herramientas y tecnologías que el equipo planea usar durante el desarrollo del proyecto. Aquí se listan enlaces a la documentación oficial de cada una, por si el lector quiere consultar más detalles técnicos que no hacen parte del alcance de este PMP.

**Tabla 37 Herramientas de SPAZIO**

|  |  |  |
| --- | --- | --- |
| Herramienta o tecnología | Uso en SPAZIO | Enlace de referencia |
| Python | Lenguaje del backend (secciones 9.4 y 9.5) | https://docs.python.org/es/3/ |
| FastAPI | Framework del backend (secciones 9.4 y 9.5) | https://fastapi.tiangolo.com/ |
| React | Framework del frontend (secciones 9.4 y 9.5) | https://es.react.dev/ |
| Supabase | Base de datos y autenticación (secciones 9.4 y 9.5) | https://supabase.com/docs |
| PostgreSQL | Motor de base de datos usado por Supabase (sección 9.5) | https://www.postgresql.org/docs/ |
| Git | Control de versiones del código (secciones 9.1 y 9.4) | https://git-scm.com/doc |
| GitHub | Repositorio y tablero de tareas del proyecto (secciones 9.4 y 9.5) | https://docs.github.com/ |
| Figma | Diseño de interfaz y prototipos (secciones 9.4 y 12.2) | https://help.figma.com/ |
| Visual Studio Code | Entorno de desarrollo propuesto (sección 9.4) | https://code.visualstudio.com/docs |
| BPMN | Notación usada en los diagramas de proceso del PMP (sección 8.1) | https://www.bpmn.org/ |

# 15. Referencias

Basili, V. R., Caldiera, G., y Rombach, H. D. (1994). The Goal Question Metric Approach. *Encyclopedia of Software Engineering*, 2, 528-532.

Chrissis, M. B., Konrad, M., y Shrum, S. (2011). *CMMI for Development: Guidelines for Process Integration and Product Improvement* (3.a ed.). Addison-Wesley.

Cockburn, A. (2006). *Agile Software Development: The Cooperative Game* (2.a ed.). Addison-Wesley.

Derby, E., y Larsen, D. (2006). *Agile Retrospectives: Making Good Teams Great*. Pragmatic Bookshelf.

Dingsøyr, T., Nerur, S., Balijepally, V., y Moe, N. B. (2012). A decade of agile methodologies: Towards explaining agile software development. *Journal of Systems and Software*, 85(6), 1213-1221.

Humphrey, W. S. (2002). *Introduction to the Personal Software Process*. Addison-Wesley.

McGarry, J., Card, D., Jones, C., Layman, B., Clark, E., Dean, J., y Hall, F. (2002). *Practical Software Measurement: Objective Information for Decision Makers*. Addison-Wesley.

Nonaka, I., y Takeuchi, H. (1995). *The Knowledge-Creating Company*. Oxford University Press.

Ries, E. (2011). *The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses*. Crown Business.

Schindler, M., y Eppler, M. J. (2003). Harvesting project knowledge: a review of project learning methods and success factors. *International Journal of Project Management*, 21(3), 219-228.

Schwaber, K., y Sutherland, J. (2020). *The Scrum Guide*. Scrum.org.

Sutherland, J., y Altman, I. (2012). Scrum: A Brief Introduction. *Encyclopedia of Software Engineering*, 1-11.

*ISO/IEC/IEEE. (2026). ISO/IEC/IEEE 12207:2026 — Systems and software engineering — Software life cycle processes. International Organization for Standardization. ISO/IEC/IEEE 12207:2026*

*ISO/IEC/IEEE. (2018). ISO/IEC/IEEE 29148:2018 — Systems and software engineering — Life cycle processes — Requirements engineering. International Organization for Standardization. ISO/IEC/IEEE 29148:2018*

*Rukšėnas, R., et al. (2017). User acceptance testing for Agile-developed web-based applications: Empowering customers through wikis and mind maps. Journal of Systems and Software, 133, 212–229. Artículo en Journal of Systems and Software*

*Project Management Institute. Project closing. PMI. Esta fuente respalda específicamente actividades como obtener la aprobación del cliente, formalizar la finalización y realizar la transición de los entregables hacia la organización*