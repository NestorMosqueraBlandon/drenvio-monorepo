import { Messages } from "../types";

export const errorMessages: Messages = {
    // General errors
    400: { en: 'Bad Request', es: 'Solicitud incorrecta' },
    401: { en: 'Unauthorized', es: 'No autorizado' },
    402: { en: 'Payment Required', es: 'Pago requerido' },
    403: { en: 'Forbidden', es: 'Prohibido' },
    404: { en: 'Not Found', es: 'No encontrado' },
    405: { en: 'Method Not Allowed', es: 'Método no permitido' },
    406: { en: 'Not Acceptable', es: 'No aceptable' },
    407: { en: 'Proxy Authentication Required', es: 'Autenticación de proxy requerida' },
    408: { en: 'Request Timeout', es: 'Tiempo de espera de la solicitud' },
    409: { en: 'Conflict', es: 'Conflicto' },
    410: { en: 'Gone', es: 'Desaparecido' },
    411: { en: 'Length Required', es: 'Longitud requerida' },
    412: { en: 'Precondition Failed', es: 'Error de precondición' },
    413: { en: 'Payload Too Large', es: 'Carga demasiado grande' },
    414: { en: 'URI Too Long', es: 'URI demasiado largo' },
    415: { en: 'Unsupported Media Type', es: 'Tipo de medio no soportado' },
    416: { en: 'Range Not Satisfiable', es: 'Rango no satisfactorio' },
    417: { en: 'Expectation Failed', es: 'Fallo de expectativa' },
    418: { en: "I'm a teapot", es: 'Soy una tetera' },
    422: { en: 'Unprocessable Entity', es: 'Entidad no procesable' },
    425: { en: 'Too Early', es: 'Demasiado temprano' },
    426: { en: 'Upgrade Required', es: 'Actualización requerida' },
    428: { en: 'Precondition Required', es: 'Precondición requerida' },
    429: { en: 'Too Many Requests', es: 'Demasiadas solicitudes' },
    431: { en: 'Request Header Fields Too Large', es: 'Campos de encabezado de solicitud demasiado grandes' },
    451: { en: 'Unavailable For Legal Reasons', es: 'No disponible por razones legales' },
    500: { en: 'Internal Server Error', es: 'Error interno del servidor' },
    501: { en: 'Not Implemented', es: 'No implementado' },
    502: { en: 'Bad Gateway', es: 'Puerta de enlace incorrecta' },
    503: { en: 'Service Unavailable', es: 'Servicio no disponible' },
    504: { en: 'Gateway Timeout', es: 'Tiempo de espera de la puerta de enlace' },
    505: { en: 'HTTP Version Not Supported', es: 'Versión de HTTP no compatible' },
    506: { en: 'Variant Also Negotiates', es: 'La variante también negocia' },
    507: { en: 'Insufficient Storage', es: 'Almacenamiento insuficiente' },
    508: { en: 'Loop Detected', es: 'Bucle detectado' },
    510: { en: 'Not Extended', es: 'No extendido' },
    511: { en: 'Network Authentication Required', es: 'Autenticación de red requerida' },
  
    // Authentication errors
    1001: { en: 'Invalid credentials', es: 'Credenciales inválidas' },
    1002: { en: 'Incorrect Password', es: 'Contraseña incorrecta' },
    1003: { en: 'User Blocked', es: 'Usuario bloqueado' },
    1004: { en: 'Invalid Token', es: 'Token inválido' },
    1005: { en: 'Expired Token', es: 'Token expirado' },
    1006: { en: 'Session Expired', es: 'Sesión expirada' },
  
    // Input data errors
    2001: { en: 'Missing Required Field', es: 'Falta campo requerido' },
    2002: { en: 'Invalid Format', es: 'Formato inválido' },
    2003: { en: 'Field Length Exceeded', es: 'Excedida longitud de campo' },
    2004: { en: 'Duplicate Value', es: 'Valor duplicado' },
    2005: { en: 'Invalid Value', es: 'Valor inválido' },
    2006: { en: 'Invalid Email Format', es: 'Formato de correo electrónico inválido' },
    2007: { en: 'Invalid Phone Number Format', es: 'Formato de número de teléfono inválido' },
    2008: { en: 'Invalid URL Format', es: 'Formato de URL inválido' },
    2009: { en: 'Invalid Credit Card Number', es: 'Número de tarjeta de crédito inválido' },
    2010: { en: 'Invalid Security Code', es: 'Código de seguridad inválido' },
    2011: { en: 'Invalid Expiration Date', es: 'Fecha de vencimiento inválida' },
    2012: { en: 'Invalid Postal Code Format', es: 'Formato de código postal inválido' },
    2013: { en: 'Invalid Country Code Format', es: 'Formato de código de país inválido' },
    2014: { en: 'Invalid Currency Code Format', es: 'Formato de código de moneda inválido' },
    2015: { en: 'Invalid Date Format', es: 'Formato de fecha inválido' },
    2016: { en: 'Invalid Time Format', es: 'Formato de hora inválido' },
  
    // Output data errors
    3001: { en: 'Error Saving Data', es: 'Error al guardar datos' },
    3002: { en: 'Error Updating Data', es: 'Error al actualizar datos' },
    3003: { en: 'Error Deleting Data', es: 'Error al eliminar datos' },
    3004: { en: 'Error Retrieving Data', es: 'Error al recuperar datos' },
    3005: { en: 'Error Formatting Data', es: 'Error al formatear datos' },
  
    // Business errors
    4001: { en: 'Product Not Found', es: 'Producto no encontrado' },
    4002: { en: 'Order Not Found', es: 'Orden no encontrada' },
    4003: { en: 'User Not Found', es: 'Usuario no encontrado' },
    4101: { en: 'Product Out Of Stock', es: 'Producto agotado' },
    4102: { en: 'Order Cancelled', es: 'Orden cancelada' },
    4103: { en: 'Payment Rejected', es: 'Pago rechazado' },
    4104: { en: 'Order Total Does Not Match', es: 'El total de la orden no coincide' },
    4105: { en: 'Coupon Code Invalid', es: 'Código de cupón inválido' },
    4106: { en: 'Coupon Code Expired', es: 'Código de cupón vencido' },
    4107: { en: 'Coupon Code Limit Exceeded', es: 'Límite de código de cupón excedido' },
    4201: { en: 'Insufficient Funds', es: 'Fondos insuficientes' },
    4202: { en: 'Payment Declined', es: 'Pago rechazado' },
    4301: { en: 'Invalid Shipping Address', es: 'Dirección de envío inválida' },
    4302: { en: 'Invalid Billing Address', es: 'Dirección de facturación inválida' },
    4303: { en: 'Shipping Method Not Available', es: 'Método de envío no disponible' },
    4304: { en: 'Billing Method Not Available', es: 'Método de facturación no disponible' },
    4401: { en: 'Permission Denied', es: 'Permiso denegado' },
    4402: { en: 'Access Restricted', es: 'Acceso restringido' },
    4403: { en: 'Feature Not Available', es: 'Función no disponible' },
  
    // System errors
    5001: { en: 'Server Error', es: 'Error del servidor' },
    5002: { en: 'Database Error', es: 'Error de base de datos' },
    5003: { en: 'File System Error', es: 'Error del sistema de archivos' },
    5004: { en: 'Email System Error', es: 'Error del sistema de correo electrónico' },
    5005: { en: 'SMS System Error', es: 'Error del sistema de SMS' },
    5006: { en: 'Payment System Error', es: 'Error del sistema de pago' },
    5007: { en: 'Third Party Service Error', es: 'Error del servicio de terceros' },
    5008: { en: 'Maintenance In Progress', es: 'Mantenimiento en progreso' },
  
    // Integration errors
    6001: { en: 'Integration Configuration Error', es: 'Error de configuración de integración' },
    6002: { en: 'Integration Authentication Error', es: 'Error de autenticación de integración' },
    6003: { en: 'Integration Connection Error', es: 'Error de conexión de integración' },
    6004: { en: 'Integration Communication Error', es: 'Error de comunicación de integración' },
    6005: { en: 'Integration Timeout Error', es: 'Error de tiempo de espera de integración' },
    6006: { en: 'Integration Data Mapping Error', es: 'Error de asignación de datos de integración' },
    6007: { en: 'Integration Data Transformation Error', es: 'Error de transformación de datos de integración' },
    6008: { en: 'Integration Data Validation Error', es: 'Error de validación de datos de integración' },
  };