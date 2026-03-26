// ── Navigation config ──────────────────────────────────────────────
const NAV = [
  {
    id: 'flujo-ot', label: 'Flujo Completo de una OT', icon: '🔄', file: 'flujo-ot.html',
    color: 'rgba(46,61,79,.12)', iconColor: '#2E3D4F',
    sections: [
      { id: 'paso-1',  label: '1. Agendar la cita' },
      { id: 'paso-2',  label: '2. Recepción' },
      { id: 'paso-3',  label: '3. Inspección técnica' },
      { id: 'paso-4',  label: '4. Presupuesto' },
      { id: 'paso-5',  label: '5. Envío al cliente' },
      { id: 'paso-6',  label: '6. Aprobación' },
      { id: 'paso-7',  label: '7. Ejecución de trabajos' },
      { id: 'paso-8',  label: '8. Finalización' },
      { id: 'paso-9',  label: '9. Pago y factura' },
      { id: 'paso-10', label: '10. Entrega' },
    ]
  },
  {
    id: 'taller', label: 'Taller', icon: '🔧', file: 'taller.html',
    color: 'rgba(94,153,184,.12)', iconColor: '#5E99B8',
    sections: [
      { id: 'ots-revisar',      label: 'OTs por revisar' },
      { id: 'torre-control',    label: 'Torre de control' },
      { id: 'ots-taller',       label: 'OTs en Taller' },
      { id: 'presupuestos',     label: 'Presupuestos' },
      { id: 'tareas-asignadas', label: 'Tareas asignadas' },
      { id: 'historico-ots',    label: 'Histórico de OTs' },
      { id: 'incidencias',      label: 'Incidencias' },
      { id: 'horas-trabajo',    label: 'Horas de trabajo' },
      { id: 'clientes',         label: 'Clientes' },
      { id: 'vehiculos',        label: 'Vehículos' },
      { id: 'reportes-mecanico',label: 'Reportes por mecánico' },
    ]
  },
  {
    id: 'ot-detalle', label: 'Vista de la OT', icon: '📋', file: 'ot-detalle.html',
    color: 'rgba(94,153,184,.12)', iconColor: '#5E99B8',
    sections: [
      { id: 'tab-general',     label: 'General' },
      { id: 'tab-cotizacion',  label: 'Editar Cotización' },
      { id: 'tab-repuestos',   label: 'Repuestos' },
      { id: 'tab-revision',    label: 'Revisión Mecánica' },
    ]
  },
  {
    id: 'presupuesto-detalle', label: 'Vista del Presupuesto', icon: '📝', file: 'presupuesto-detalle.html',
    color: 'rgba(123,189,117,.12)', iconColor: '#4a9645',
    sections: [
      { id: 'tab-general',     label: 'General' },
      { id: 'tab-cotizacion',  label: 'Editar Cotización' },
      { id: 'tab-repuestos',   label: 'Repuestos' },
    ]
  },
  {
    id: 'inventario', label: 'Inventario', icon: '📦', file: 'inventario.html',
    color: 'rgba(18,194,194,.1)', iconColor: '#12C2C2',
    sections: [
      { id: 'inv-inventario', label: 'Inventario' },
      { id: 'inv-movimientos', label: 'Movimientos' },
      { id: 'inv-solicitudes', label: 'Solicitudes de Inventario' },
      { id: 'inv-toma',       label: 'Toma de inventario' },
    ]
  },
  {
    id: 'compras', label: 'Compras', icon: '🛒', file: 'compras.html',
    color: 'rgba(247,148,29,.1)', iconColor: '#F7941D',
    sections: [
      { id: 'gestion-compra', label: 'Gestión de compra' },
      { id: 'asociar-compra', label: 'Asociar compra' },
      { id: 'proveedores',    label: 'Proveedores' },
    ]
  },
  {
    id: 'finanzas', label: 'Finanzas', icon: '💰', file: 'finanzas.html',
    color: 'rgba(123,189,117,.12)', iconColor: '#4a9645',
    sections: [
      { id: 'ingresos-ventas', label: 'Ingresos de ventas' },
      { id: 'otros-ingresos',  label: 'Otros ingresos' },
      { id: 'abonos',          label: 'Abonos' },
      { id: 'cobranzas',       label: 'Listado de cobranzas' },
      { id: 'libro-venta',     label: 'Libro de venta' },
      { id: 'gastos',          label: 'Gastos' },
      { id: 'remuneraciones',  label: 'Remuneraciones' },
      { id: 'facturas-cxp',    label: 'Facturas de compras / CxP' },
      { id: 'libros-compra',   label: 'Libros de compra' },
      { id: 'notas-credito',   label: 'Notas de crédito' },
      { id: 'eerr',            label: 'Estado de resultados' },
      { id: 'plan-cuentas',    label: 'Plan de cuentas' },
    ]
  },
  {
    id: 'administracion', label: 'Administración', icon: '⚙️', file: 'administracion.html',
    color: 'rgba(177,75,213,.1)', iconColor: '#B14BD5',
    sections: [
      { id: 'items',             label: 'Ítems' },
      { id: 'lista-precios',     label: 'Lista de precios' },
      { id: 'trabajos',          label: 'Trabajos' },
      { id: 'templates',         label: 'Templates' },
      { id: 'categorias',        label: 'Categorías' },
      { id: 'checklists',        label: 'Checklists' },
      { id: 'cargas-masivas',    label: 'Cargas masivas' },
      { id: 'tipos-incidencias', label: 'Tipos de incidencias' },
      { id: 'historial-cambios', label: 'Historial de cambios' },
      { id: 'sucursales',        label: 'Sucursales' },
      { id: 'usuarios',          label: 'Usuarios' },
      { id: 'colaboradores',     label: 'Colaboradores' },
      { id: 'encuesta-nps',      label: 'Encuesta NPS' },
    ]
  },
  {
    id: 'calendario', label: 'Calendario', icon: '📅', file: 'calendario.html',
    color: 'rgba(73,182,245,.1)', iconColor: '#49B6F5',
    sections: [
      { id: 'cal-citas',  label: 'Crear una cita' },
      { id: 'cal-vistas', label: 'Vistas y filtros' },
      { id: 'cal-ot',     label: 'Convertir cita en OT' },
    ]
  },
  {
    id: 'reportes', label: 'Reportes', icon: '📊', file: 'reportes.html',
    color: 'rgba(245,111,75,.1)', iconColor: '#F56F4B',
    sections: [
      { id: 'dashboard-general', label: 'Dashboard General' },
      { id: 'tabla-general',     label: 'Tabla General' },
    ]
  },
  {
    id: 'configuracion', label: 'Configuración', icon: '🛠️', file: 'configuracion.html',
    color: 'rgba(46,61,79,.08)', iconColor: '#2E3D4F',
    sections: [
      { id: 'config-empresa',        label: 'Perfil de empresa' },
      { id: 'config-general',        label: 'Configuración General' },
      { id: 'config-notificaciones', label: 'Notificaciones' },
      { id: 'config-perfil',         label: 'Perfil de usuario' },
      { id: 'roles-permisos',        label: 'Roles y permisos' },
      { id: 'faq',                   label: 'Preguntas frecuentes' },
    ]
  },
];

// ── Global search index ────────────────────────────────────────────
const SEARCH_INDEX = [
  // Flujo Completo OT
  { module: 'Flujo OT', title: '1. Agendar la cita', file: 'flujo-ot.html', hash: 'paso-1', text: 'Crear cita en el Calendario. Tipo de cita: Orden de Trabajo, Seguro, Mesón, Componentes, Presupuesto. Cliente, vehículo, mecánico asignado, servicio solicitado.' },
  { module: 'Flujo OT', title: '2. Recepción del vehículo', file: 'flujo-ot.html', hash: 'paso-2', text: 'Recepcionar Cliente desde el Calendario. Kilometraje de ingreso. Checklist de recepción: carrocería, líquidos, neumáticos, luces, interior. Omitir Recepción.' },
  { module: 'Flujo OT', title: '3. Inspección técnica', file: 'flujo-ot.html', hash: 'paso-3', text: 'Pestaña Revisión Mecánica. Calificar ítems: Bueno, Malo, 25%, 50%, 75%. Agregar trabajo, Agregar repuestos. Subir imagen. Mover Torre Control.' },
  { module: 'Flujo OT', title: '4. Confección del presupuesto', file: 'flujo-ot.html', hash: 'paso-4', text: 'Pestaña Editar Cotización. Revisar ítems auto-populados. Precios, cantidades, descuentos. Cargar trabajo. Vista Previa. Guardar como Template. Resumen financiero.' },
  { module: 'Flujo OT', title: '5. Envío del presupuesto', file: 'flujo-ot.html', hash: 'paso-5', text: 'Cambiar estado a Ppto. Enviado. Contactar cliente por WhatsApp. Enviar Mail Recordatorio. Enlace público del presupuesto.' },
  { module: 'Flujo OT', title: '6. Aprobación del presupuesto', file: 'flujo-ot.html', hash: 'paso-6', text: 'Tres resultados: Ppto. Aprobado, Ppto. Parcial (ajustar cotización), Rechazado (devolver vehículo). Cambiar estado.' },
  { module: 'Flujo OT', title: '7. Ejecución de trabajos', file: 'flujo-ot.html', hash: 'paso-7', text: 'Asignar responsables en Editar Cotización. Torre de Control Kanban. Mecánico: Tareas asignadas, Revisar OT, registrar horas. Mover Torre Control.' },
  { module: 'Flujo OT', title: '8. Finalización de la OT', file: 'flujo-ot.html', hash: 'paso-8', text: 'Verificar tareas completadas. Resumen financiero. Aprobar descuento. Cambiar estado a OT Finalizada. Garantía.' },
  { module: 'Flujo OT', title: '9. Pago, factura y conciliación', file: 'flujo-ot.html', hash: 'paso-9', text: 'Emitir boleta o factura. Pagar. Descargar PDFs. Link de Pago. Registrar forma de pago, Estado Cobro, Valor Abonado. Conciliar en Finanzas: Ingresos de ventas, Abonos, Cobranzas.' },
  { module: 'Flujo OT', title: '10. Entrega del vehículo', file: 'flujo-ot.html', hash: 'paso-10', text: 'Checklist de entrega. Kilometraje de salida. Cambiar estado a Entregada. Encuesta NPS enviada automáticamente. OT pasa a Histórico. Stock descontado.' },
  // Taller
  { module: 'Taller', title: 'OTs por revisar', file: 'taller.html', hash: 'ots-revisar', text: 'Órdenes de trabajo recién llegadas pendientes de revisión o asignación.' },
  { module: 'Taller', title: 'Torre de control', file: 'taller.html', hash: 'torre-control', text: 'Panel Kanban en tiempo real de todas las OTs activas. Filtrar por mecánico, sucursal o estado. Arrastrar OTs entre columnas.' },
  { module: 'Taller', title: 'OTs en Taller', file: 'taller.html', hash: 'ots-taller', text: 'Listado completo de Órdenes de Trabajo activas. Crear OT, estados: En Proceso, Ppto. Enviado, Ppto. Aprobado, Ppto. Parcial, OT Finalizada, Entregada, Garantía, Garantía y Entregado, Rechazado. Recepcionar, Inspeccionar. Agregar descuento. Motivo / Notas. Enlace público.' },
  { module: 'Taller', title: 'Presupuestos', file: 'taller.html', hash: 'presupuestos', text: 'Cotizaciones formales enviadas al cliente. Estados: En Proceso, Ppto. Enviado, Ppto. Aprobado, Rechazado. Crear Presupuesto. Convertir a OT.' },
  { module: 'Taller', title: 'Tareas asignadas', file: 'taller.html', hash: 'tareas-asignadas', text: 'Tareas específicas asignadas a mecánicos o colaboradores dentro de las OTs activas.' },
  { module: 'Taller', title: 'Histórico de OTs', file: 'taller.html', hash: 'historico-ots', text: 'Registro completo de órdenes de trabajo finalizadas y entregadas. Buscar, filtrar, exportar a Excel.' },
  { module: 'Taller', title: 'Incidencias', file: 'taller.html', hash: 'incidencias', text: 'Registra problemas detectados durante un trabajo: daños previos, piezas faltantes, problemas no reportados.' },
  { module: 'Taller', title: 'Horas de trabajo', file: 'taller.html', hash: 'horas-trabajo', text: 'Registro del tiempo que cada mecánico dedica a cada OT. Costo de mano de obra. Productividad.' },
  { module: 'Taller', title: 'Clientes', file: 'taller.html', hash: 'clientes', text: 'Directorio de clientes del taller, personas naturales y empresas. RUT, email, teléfono, historial de OTs, vehículos, pagos.' },
  { module: 'Taller', title: 'Vehículos', file: 'taller.html', hash: 'vehiculos', text: 'Registro de vehículos: patente, marca, modelo, año, VIN, color, kilometraje, propietario, historial de servicios.' },
  { module: 'Taller', title: 'Reportes por mecánico', file: 'taller.html', hash: 'reportes-mecanico', text: 'Rendimiento individual por mecánico: OTs atendidas, horas trabajadas, trabajos ejecutados.' },
  // Vista de OT
  { module: 'Vista de la OT', title: 'Pestaña General', file: 'ot-detalle.html', hash: 'tab-general', text: 'Resumen de la OT. Fecha Ingreso, Fecha de recepción, Fecha Revisión, Fecha estimada de entrega, Fecha de entrega, Kilometraje / Horas, OT Externa, Orden de Compra, Motivo / Notas. Botones: Cambiar estado, Mover Torre Control, Generar versión, Contactar cliente. Resumen Financiero: Costo Total Neto, Valor Total Neto, Descuento, Aprobar descuento, Valor Total con IVA, Margen Proyecto.' },
  { module: 'Vista de la OT', title: 'Pestaña Editar Cotización', file: 'ot-detalle.html', hash: 'tab-cotizacion', text: 'Editar presupuesto. Secciones: Motivo / Notas, Vehículos, Progreso, Repuestos, Imágenes, Presupuesto. Tabla de ítems: Categoría, Subcategoría, Ítem, Costo Neto Unit, Cantidad, Costo Neto Total, P. Venta Unit, Descuento, P. Venta Total, Margen. Botones: Guardar como Template, Cargar trabajo, Vista Previa, Guardar cambios. Lista de repuestos: Cantidad comprada, Cantidad recibida. Botones: Editar, Cotizar.' },
  { module: 'Vista de la OT', title: 'Pestaña Repuestos', file: 'ot-detalle.html', hash: 'tab-repuestos', text: 'Gestión de repuestos. Carrito de compras. Cotización a proveedores. Botones: Enviar Mail Recordatorio, Link de Pago, Pagar, Descargar PDFs. Solo disponible en Chile.' },
  { module: 'Vista de la OT', title: 'Pestaña Revisión Mecánica', file: 'ot-detalle.html', hash: 'tab-revision', text: 'Inspección técnica por checklist. Subir imagen, Agregar repuestos, Agregar trabajos, Notas. Estados: Bueno, Malo, Aprobado, Rechazado, 25%, 50%, 75%. Modales: Repuestos, Trabajos. Los trabajos y repuestos se agregan automáticamente a la cotización.' },
  // Vista del Presupuesto
  { module: 'Vista del Presupuesto', title: 'Pestaña General', file: 'presupuesto-detalle.html', hash: 'tab-general', text: 'Resumen del presupuesto. Fecha Ingreso, Fecha de recepción, Fecha Revisión, Fecha estimada de entrega, Fecha de entrega, Kilometraje / Horas, Motivo / Notas. Estados: En Proceso, Ppto. Enviado, Ppto. Aprobado, Rechazado. Botones: Enviar Presupuesto, Generar OT, Crear Cita, Generar versión, Contactar cliente. Resumen financiero: Valor Neto, Descuento, IVA, Total. Cobros: Fecha Facturación, Estado Cobro, Valor Abonado, Monto por pagar.' },
  { module: 'Vista del Presupuesto', title: 'Pestaña Editar Cotización', file: 'presupuesto-detalle.html', hash: 'tab-cotizacion', text: 'Formulario del presupuesto. Campos: Vendedor, Total Cotizado, Valor Neto, Margen, Total, Responsable general, Motivo / Notas. Tabla de ítems: Categoría, Subcategoría, Ítem, Costo Neto Unit, Cantidad, Costo Neto Total, P. Venta Unit, Descuento, P. Venta Total, Margen. Botones: Guardar Plantilla, Cargar Plantilla, Agregar Trabajo, Pre visualizar, Actualizar.' },
  { module: 'Vista del Presupuesto', title: 'Pestaña Repuestos', file: 'presupuesto-detalle.html', hash: 'tab-repuestos', text: 'Gestión de repuestos del presupuesto. Carrito de compras. Cotización a proveedores. Botones: Guardar, Cotizar, Pagar. Solo disponible en Chile.' },
  // Inventario
  { module: 'Inventario', title: 'Inventario (stock)', file: 'inventario.html', hash: 'inv-inventario', text: 'Stock disponible en la sucursal. Buscar ítems por nombre, código o categoría. Alertas de stock bajo.' },
  { module: 'Inventario', title: 'Movimientos', file: 'inventario.html', hash: 'inv-movimientos', text: 'Entradas, salidas, traspasos y ajustes de inventario. Movimientos automáticos al completar OTs.' },
  { module: 'Inventario', title: 'Solicitudes de Inventario', file: 'inventario.html', hash: 'inv-solicitudes', text: 'Mecánicos solicitan materiales al encargado de bodega. Aprobación automática descuenta el stock.' },
  { module: 'Inventario', title: 'Toma de inventario', file: 'inventario.html', hash: 'inv-toma', text: 'Proceso periódico para verificar stock físico versus sistema. Detectar diferencias, sobrantes y faltantes.' },
  // Compras
  { module: 'Compras', title: 'Gestión de compra', file: 'compras.html', hash: 'gestion-compra', text: 'Crear orden de compra, seleccionar proveedor, agregar ítems. Recepción de mercadería actualiza el inventario.' },
  { module: 'Compras', title: 'Asociar compra', file: 'compras.html', hash: 'asociar-compra', text: 'Vincular una compra a una OT para control preciso de costos de repuestos por trabajo.' },
  { module: 'Compras', title: 'Proveedores', file: 'compras.html', hash: 'proveedores', text: 'Directorio de proveedores: nombre, RUT, email, teléfono, dirección, condiciones de pago.' },
  // Finanzas
  { module: 'Finanzas', title: 'Ingresos de ventas', file: 'finanzas.html', hash: 'ingresos-ventas', text: 'Ingresos por OTs y presupuestos aprobados. Facturas y boletas emitidas. Filtrar por período, cliente o sucursal.' },
  { module: 'Finanzas', title: 'Otros ingresos', file: 'finanzas.html', hash: 'otros-ingresos', text: 'Ingresos que no son ventas de OTs: arriendos, ventas de activos, subsidios. Cuenta del plan de cuentas.' },
  { module: 'Finanzas', title: 'Abonos', file: 'finanzas.html', hash: 'abonos', text: 'Pagos parciales o anticipos de clientes. Saldo pendiente de cada cliente.' },
  { module: 'Finanzas', title: 'Listado de cobranzas', file: 'finanzas.html', hash: 'cobranzas', text: 'Cuentas por cobrar pendientes. OTs o facturas no pagadas totalmente. Gestión de cobros.' },
  { module: 'Finanzas', title: 'Libro de venta', file: 'finanzas.html', hash: 'libro-venta', text: 'Consolidado de facturas emitidas por período. Compatible con requerimientos tributarios. Exportar Excel o PDF.' },
  { module: 'Finanzas', title: 'Gastos', file: 'finanzas.html', hash: 'gastos', text: 'Egresos operacionales: arriendo, servicios básicos, mantenciones. Tipo de gasto y cuenta contable.' },
  { module: 'Finanzas', title: 'Remuneraciones', file: 'finanzas.html', hash: 'remuneraciones', text: 'Sueldos del personal. Sueldo bruto, descuentos previsionales, sueldo líquido. Liquidaciones de sueldo.' },
  { module: 'Finanzas', title: 'Facturas de compras / CxP', file: 'finanzas.html', hash: 'facturas-cxp', text: 'Cuentas por pagar. Facturas de proveedores pendientes. Pagos parciales o totales. Vencimientos.' },
  { module: 'Finanzas', title: 'Libros de compra', file: 'finanzas.html', hash: 'libros-compra', text: 'Consolidado de facturas de proveedores por período. Efectos tributarios. Exportar Excel o PDF.' },
  { module: 'Finanzas', title: 'Notas de crédito', file: 'finanzas.html', hash: 'notas-credito', text: 'Ajustes o devoluciones sobre facturas emitidas o recibidas.' },
  { module: 'Finanzas', title: 'Estado de resultados', file: 'finanzas.html', hash: 'eerr', text: 'Resumen financiero: ingresos totales, gastos directos, gastos operacionales, resultado neto, utilidad o pérdida.' },
  { module: 'Finanzas', title: 'Plan de cuentas', file: 'finanzas.html', hash: 'plan-cuentas', text: 'Estructura contable del taller. Cuentas de ingresos, costos y gastos. Agregar, editar o desactivar cuentas.' },
  // Administración
  { module: 'Administración', title: 'Ítems', file: 'administracion.html', hash: 'items', text: 'Catálogo de repuestos, insumos y servicios. SKU, precio de costo, precio de venta, stock mínimo, inventariable.' },
  { module: 'Administración', title: 'Lista de precios', file: 'administracion.html', hash: 'lista-precios', text: 'Precios diferenciados por tipo de cliente: lista general, empresa, distribuidor. Asignar desde ficha de cliente.' },
  { module: 'Administración', title: 'Trabajos', file: 'administracion.html', hash: 'trabajos', text: 'Tipos de servicio estándar: cambio de aceite, alineación, frenos. Precio de mano de obra por tipo de trabajo.' },
  { module: 'Administración', title: 'Templates', file: 'administracion.html', hash: 'templates', text: 'Formatos de presupuestos y facturas. Logo, datos empresa, condiciones comerciales. Encabezados y pie de página.' },
  { module: 'Administración', title: 'Categorías', file: 'administracion.html', hash: 'categorias', text: 'Organización de ítems en grupos: Lubricantes, Filtros, Neumáticos, Mano de obra.' },
  { module: 'Administración', title: 'Checklists', file: 'administracion.html', hash: 'checklists', text: 'Listas de verificación al recibir o entregar vehículo: carrocería, niveles de líquidos, neumáticos, luces.' },
  { module: 'Administración', title: 'Cargas masivas', file: 'administracion.html', hash: 'cargas-masivas', text: 'Importar datos en Excel: clientes, vehículos, ítems. Descargar plantilla, completar y subir.' },
  { module: 'Administración', title: 'Tipos de incidencias', file: 'administracion.html', hash: 'tipos-incidencias', text: 'Clasificación predefinida de problemas en OTs: daño en carrocería, pieza faltante, problema eléctrico.' },
  { module: 'Administración', title: 'Historial de cambios', file: 'administracion.html', hash: 'historial-cambios', text: 'Bitácora de auditoría. Quién hizo el cambio, qué cambió y cuándo. OTs, precios, clientes.' },
  { module: 'Administración', title: 'Sucursales', file: 'administracion.html', hash: 'sucursales', text: 'Múltiples sucursales con inventario, usuarios y configuración independientes.' },
  { module: 'Administración', title: 'Usuarios', file: 'administracion.html', hash: 'usuarios', text: 'Personas que acceden al sistema. Roles: Super Administrador, Administrador, Jefe de Taller, Vendedor, Mecánico.' },
  { module: 'Administración', title: 'Colaboradores', file: 'administracion.html', hash: 'colaboradores', text: 'Personal operativo: mecánicos, asistentes, técnicos. Cargo, sueldo, fecha de ingreso. Asignación en OTs.' },
  { module: 'Administración', title: 'Encuesta NPS', file: 'administracion.html', hash: 'encuesta-nps', text: 'Net Promoter Score. Satisfacción del cliente. Envío automático al entregar el vehículo.' },
  // Calendario
  { module: 'Calendario', title: 'Crear una cita', file: 'calendario.html', hash: 'cal-citas', text: 'Agendar citas. Tipos: Orden de Trabajo, Orden de Trabajo Seguro, Orden de Trabajo Componentes, Venta de Mesón, Presupuesto. Campos: tipo de orden, fecha y hora, fecha estimada de entrega, cliente, notificar a, vehículo, kilometraje, motivo/notas. Campos especiales: Número de Siniestro y Aseguradora para OT Seguro; Componentes y OT Externa para OT Componentes. Estados: Sin confirmación, Confirmada, Cliente llegó, Cancelada, Cliente no llegó.' },
  { module: 'Calendario', title: 'Vistas y filtros', file: 'calendario.html', hash: 'cal-vistas', text: 'Vistas: Mes, Semana, Día, Lista. Filtros: fecha ingreso o estimada de entrega, estado de cita, agendamiento taller o cliente, tipo de cita, vendedor.' },
  { module: 'Calendario', title: 'Convertir cita en OT', file: 'calendario.html', hash: 'cal-ot', text: 'Al llegar el cliente, clic en cita → Abrir OT → modal de recepción → Recepcionar o Omitir recepción. OT Seguro: Inspeccionar u Omitir pre inspección. La OT se crea con datos de la cita. Popup de cita: Abrir OT, Abrir Presupuesto, Editar cita, Eliminar cita.' },
  // Reportes
  { module: 'Reportes', title: 'Dashboard General', file: 'reportes.html', hash: 'dashboard-general', text: 'Indicadores del taller: OTs activas, ingresos del período, vehículos atendidos, productividad por mecánico, gráficos.' },
  { module: 'Reportes', title: 'Tabla General', file: 'reportes.html', hash: 'tabla-general', text: 'Vista detallada con filtros múltiples. Ordenar por columna. Exportar a Excel.' },
  // Configuración
  { module: 'Configuración', title: 'Perfil de empresa', file: 'configuracion.html', hash: 'config-empresa', text: 'RUT, razón social, nombre de fantasía, giro, dirección, sitio web, email, celular, número WhatsApp, logo. Servicios: desabolladura y pintura, compañías de seguros, laboratorio diesel. Configuración de sucursales: nombre, dirección, región, comuna.' },
  { module: 'Configuración', title: 'Configuración General', file: 'configuracion.html', hash: 'config-general', text: 'IVA, horas máximas por trabajo, solicitar compra por defecto. Campos requeridos de clientes y vehículos. Inventario: estado para reservar y descontar stock. Descuentos: aprobación vendedor. PDFs: ocultar subcategoría, formato PDF. Calendario: hora inicio/fin, días hábiles, ocultar ventas de mesón, tiempo cliente no llegó. Agendamiento: horarios, límite de citas, URL agendamiento, redirección. Contraseña para eliminar OT por sucursal.' },
  { module: 'Configuración', title: 'Notificaciones', file: 'configuracion.html', hash: 'config-notificaciones', text: 'WhatsApp: conectar número, enviar desde taller o vendedor. Email y WhatsApp automáticos por evento: nueva cita, recordatorio cita, recepción, inspección técnica, presupuesto enviado/aprobado, OT finalizada, entregado, factura, cobranza, NPS. Mensajes personalizados con parámetros {{taller}} {{cliente}} {{auto}} {{patente}} {{link}} etc. Flyers de mantención y revisión técnica.' },
  { module: 'Configuración', title: 'Perfil de usuario', file: 'configuracion.html', hash: 'config-perfil', text: 'Nombre, apellido, email (no editable), número WhatsApp, foto de perfil. Botones: Editar, Guardar, Cancelar, Cambiar contraseña. Campos cambio contraseña: contraseña actual, nueva, confirmar.' },
  { module: 'Configuración', title: 'Roles y permisos', file: 'configuracion.html', hash: 'roles-permisos', text: 'Roles del sistema: Super Administrador, Administrador, Jefe de Taller, Vendedor (descuento máximo configurable), Agendador, Mecánico, Encargado de Inventario, Encargado de Compras. Se asignan en Administración → Usuarios.' },
  { module: 'Configuración', title: 'Preguntas frecuentes', file: 'configuracion.html', hash: 'faq', text: 'Respuestas a dudas comunes: repuestos, presupuestos, historial, stock mínimo, recordatorios, exportar Excel, celular, sucursales, contraseñas, OTs por mecánico.' },
];

// ── Render nav ─────────────────────────────────────────────────────
function initNav(currentPage) {
  // Topbar
  const topbar = document.createElement('header');
  topbar.className = 'topbar';
  topbar.innerHTML = `
    <button class="hamburger" id="hamburgerBtn" aria-label="Menú">
      <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
    <a href="index.html" class="topbar-logo">
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#5E99B8"/>
        <path d="M6 22l4-8 4 5 4-9 4 7 4-4" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      GestionCar
    </a>
    <div class="topbar-divider"></div>
    <span class="topbar-title">Manual de Usuario</span>
    <div class="search-wrap">
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input type="text" id="searchInput" placeholder="Buscar en el manual…" autocomplete="off"/>
    </div>
  `;
  document.body.prepend(topbar);

  // Search results container
  const resultsDiv = document.createElement('div');
  resultsDiv.id = 'searchResults';
  document.body.appendChild(resultsDiv);

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebarOverlay';
  document.body.appendChild(overlay);

  // Sidebar
  const sidebar = document.createElement('nav');
  sidebar.className = 'sidebar';
  sidebar.id = 'sidebar';

  let sidebarHTML = `
    <div class="sidebar-top-links">
      <a href="index.html" class="sidebar-top-link ${currentPage === 'index' ? 'active' : ''}">
        <span>🏠</span> Inicio
      </a>
    </div>
    <hr class="sidebar-hr">
  `;

  NAV.forEach(mod => {
    const isActive = currentPage === mod.id;
    const subLinksHTML = mod.sections.map(sec => `
      <a href="${mod.file}#${sec.id}" class="sidebar-link">${sec.label}</a>
    `).join('');

    sidebarHTML += `
      <div class="sidebar-section">
        <a href="${mod.file}" class="sidebar-module-btn ${isActive ? 'active-page open' : ''}" data-module="${mod.id}">
          <span class="mod-icon" style="background:${mod.color};color:${mod.iconColor}">${mod.icon}</span>
          ${mod.label}
          <span class="chevron">▾</span>
        </a>
        <div class="sidebar-links ${isActive ? 'open' : ''}" id="links-${mod.id}">
          ${subLinksHTML}
        </div>
      </div>
    `;
  });

  sidebar.innerHTML = sidebarHTML;

  // Insert sidebar after topbar
  document.querySelector('.layout').prepend(sidebar);

  // Scroll-to-top button
  const scrollBtn = document.createElement('button');
  scrollBtn.id = 'scrollTop';
  scrollBtn.innerHTML = '↑';
  scrollBtn.setAttribute('aria-label', 'Volver arriba');
  document.body.appendChild(scrollBtn);

  // ── Event listeners ──────────────────────────────────────────────

  // Sidebar accordion (non-active pages toggle on click)
  document.querySelectorAll('.sidebar-module-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      // Only toggle if clicking directly (not navigating)
      const modId = btn.dataset.module;
      if (!modId) return;
      const links = document.getElementById('links-' + modId);
      if (!links) return;
      const isOpen = links.classList.contains('open');
      // Close all others
      document.querySelectorAll('.sidebar-links').forEach(l => l.classList.remove('open'));
      document.querySelectorAll('.sidebar-module-btn').forEach(b => b.classList.remove('open'));
      if (!isOpen) {
        links.classList.add('open');
        btn.classList.add('open');
      }
    });
  });

  // Scroll spy for sub-links (same page)
  const anchors = Array.from(document.querySelectorAll('.section-anchor'));
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
    let current = '';
    for (const el of anchors) {
      if (el.getBoundingClientRect().top <= 85) current = el.id;
    }
    document.querySelectorAll('.sidebar-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      const hash = href.split('#')[1] || '';
      link.classList.toggle('active', hash === current && current !== '');
    });
  }, { passive: true });

  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Hash scroll on load
  if (location.hash) {
    setTimeout(() => {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  // Mobile
  const hamburger = document.getElementById('hamburgerBtn');
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 720) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      }
    });
  });

  // ── Search ───────────────────────────────────────────────────────
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    if (q.length < 2) { hideSearch(); return; }
    const results = SEARCH_INDEX.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.text.toLowerCase().includes(q) ||
      item.module.toLowerCase().includes(q)
    );
    renderSearch(results, q);
  });

  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') { hideSearch(); searchInput.value = ''; }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#searchInput') && !e.target.closest('#searchResults')) hideSearch();
  });

  function hl(text, q) {
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  function renderSearch(results, q) {
    resultsDiv.style.display = 'block';
    if (!results.length) {
      resultsDiv.innerHTML = `<h3>Sin resultados</h3><div class="no-results">No se encontraron resultados para "<strong>${q}</strong>"</div>`;
      return;
    }
    let html = `<h3>${results.length} resultado${results.length !== 1 ? 's' : ''} para "<strong>${q}</strong>"</h3>`;
    results.forEach(r => {
      html += `
        <a href="${r.file}#${r.hash}" class="result-card" style="display:block;">
          <div class="result-module">${r.module}</div>
          <h4>${hl(r.title, q)}</h4>
          <p>${hl(r.text.substring(0, 200), q)}…</p>
        </a>`;
    });
    resultsDiv.innerHTML = html;
  }

  function hideSearch() {
    resultsDiv.style.display = 'none';
  }
}
