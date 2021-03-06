export default {
  header: {
    add_labels: 'Agregar etiquetas',
    archive: 'Archivar',
    delete: 'Eliminar',
    discard_drafts: 'Descartar borradores',
    dismiss: 'Atrás',
    move_to: 'Mover a',
    move_to_inbox: 'Mover a entrada',
    restore: 'Restaurar',
    search: 'buscar',
    search_options: {
      from: 'de',
      from_placeholder: 'Usuarios por nombre o correo electrónico',
      has_attachment: 'Con archivos',
      subject: 'asunto',
      subject_placeholder: 'Ingresar texto',
      to: 'para',
      to_placeholder: 'Usuarios por nombre o correo electrónico'
    },
    selected: 'Seleccionado',
    selected_plural: 'Seleccionados'
  },
  labelsItems: {
    inbox: 'Entrada',
    spam: 'No deseado',
    sent: 'Enviados',
    starred: 'Favoritos',
    draft: 'Borradores',
    trash: 'Papelera',
    allmail: 'Todos',
    search: 'Búsqueda'
  },
  mailbox: {
    all: 'todos',
    empty: {
      search: {
        header: 'Sin resultados al buscar',
        subheader: 'No se muestran ni Papelera & ni Mensajes no deseados'
      },
      spam: {
        header: 'No tienes spam',
        subheader: 'Enhorabuena!'
      },
      default: {
        header: 'No se encontraron mensajes',
        subheader: 'Envía un email para empezar'
      }
    },
    move_to_trash: 'Mover a la papelera',
    not_starred: 'No favorito',
    starred: 'Favorito',
    unread: 'no leídos'
  },
  settings: {
    change_password: 'cambiar contraseña',
    contact_support: 'Soporte de Contacto',
    disabled: 'desactivada',
    enabled: 'activada',
    general: 'general',
    language: 'lenguaje',
    name: 'nombre',
    notification_preview: 'Vista previa de notificaciones',
    off: 'desactivado',
    on: 'activado',
    password: 'contraseña',
    profile: 'perfil',
    read_receipts: 'Leer ###',
    resend_link: '###',
    signature: 'Firma',
    trusted_devices: 'dispositivos verificados',
    two_factor_authentication: 'autenticación en dos pasos',
    delete_account: {
      label: 'Eliminar cuenta',
      button: 'Eliminar permanentemente'
    }
  },
  sidebar: {
    compose: 'redactar',
    enter_new_label: 'Agregar etiqueta',
    invite_a_friend: 'Invita a un amigo',
    labels: 'Etiquetas',
    new_label: 'Nueva etiqueta',
    settings: 'Configuración'
  },
  messages: {
    change_password: {
      success: {
        description: 'Se ha modificado su contraseña'
      },
      error: {
        description:
          'Falló al modificar la contraseña. La contraseña no ha sido modificada'
      }
    },
    download_file: {
      success: {
        description: "Descarga exitosa. Revisa tu carpeta de 'Descargas'"
      },
      error: {
        description:
          'Un error ha ocurrido durante la descarga. El archivo no fue guardado'
      }
    },
    emailSent: {
      success: {
        description: 'Tu mensaje ha sido enviado.',
        action: 'Ver mensaje'
      },
      error: {
        description: 'Falló al enviar tu mensaje'
      }
    },
    fetchEmails: {
      description:
        'Falló al pedir emails. Revisa tu conexión e intenta de nuevo'
    },
    internet: {
      description: 'Conexión restablecida'
    },
    network: {
      description: 'Sin conexión. Intentando reconectar'
    },
    new_device: {
      ask: 'Estás tratando de acceder desde'
    },
    recovery_email_change: {
      success: {
        description: 'Correo de recuperación ha sido modificado'
      },
      error: {
        description:
          'Falló al modificar el correo de recuperación. Revisa tu conexión e intenta de nuevo'
      }
    },
    recovery_email_link_confirmation: {
      success: {
        description:
          'Se ha enviado enlace de confirmación a tu correo de recuperación.'
      },
      error: {
        description: 'Falló al enviar el enlace de confirmación'
      }
    },
    remember_share_passphrase: {
      description:
        'Recuerda enviar tu frase secreta a tus recipientes que no son de Criptext'
    },
    reset_password_send_link: {
      success: {
        description:
          'El enlace para restableser la contraseña ha sido enviado a tu correo de recuperación. El enlace será valido por 30 minutos'
      },
      error: {
        description:
          'Usted necesita establecer y confirmar un Correo de Recuperación para restablecer su contraseña'
      }
    },
    remove_device: {
      success: {
        description: 'Dispositivo eliminado'
      },
      error: {
        description: 'Falló al eliminar el dispositivo. Intentar de nuevo'
      }
    },
    remove_threads: {
      description: 'Falló mover correos. Intente de nuevo'
    },
    send_open_event: {
      description:
        'Falló enviar notificación de apertura de mensaje. Intente de nuevo'
    },
    trash: {
      description:
        'Los mensajes que estén en la papelera más de 30 días serán eliminados automáticamente',
      action: 'Vaciar Papelera'
    },
    two_factor_auth_turn_off: {
      description: 'Autenticación en dos pasos fue desactivada'
    },
    unsend_email: {
      description: 'Falló retractar el correo. Código de error desconocido:'
    },
    unsend_email_expired: {
      description:
        'Falló retractar el correo. Tiempo (1h) para retractar un correo enviado.'
    },
    update: {
      description: 'Una nueva versión de Criptext está disponible!',
      action: 'Click aquí para descargar'
    },
    update_labels: {
      description: 'Falló mofificar las etiquetas. Intente de nuevo'
    },
    update_thread_labels: {
      description:
        'Falló mofificar las etiquetas de los correos. Intente de nuevo'
    },
    update_unread_threads: {
      description: 'Falló modificar el estado del correo. Intente de nuevo'
    }
  },
  notification: {
    newEmailGroup: {
      prefix: 'Tienes ',
      sufix: ' correos nuevos'
    }
  },
  popups: {
    account_deleted: {
      title: 'Cuenta eliminada',
      paragraphs: {
        header: 'Eliminando toda la información...'
      }
    },
    delete_account: {
      title: 'Eliminar mi cuenta',
      paragraphs: {
        header: `Eliminar su cuenta también eliminará todos los correos electrónicos en este y cualquier otro dispositivo en el que haya iniciado sesión. También inhabilitará a cualquier persona para registrar una cuenta con su dirección de correo electrónico actual`
      },
      subtitle: 'Para confirmar, ingresa tu contraseña',
      inputs: {
        password: {
          placeholder: 'Ingresa tu contraseña',
          errorMessages: {
            length: {
              prefix: 'Debe tener al menos',
              suffix: 'caracteres'
            },
            wrong: 'Contraseña incorrecta'
          }
        }
      },
      cancelButtonLabel: 'Cancelar',
      confirmButtonLabel: 'Enviar'
    },
    logout: {
      title: 'Cerrar sesión',
      paragraphs: {
        header: '¿Estás seguro que quieres cerrar sesión?'
      },
      cancelButtonLabel: 'Cancelar',
      confirmButtonLabel: 'Continuar'
    }
  },
  userGuide: {
    buttonCompose: {
      text: 'Empieza enviando un correo nuevo',
      buttonLabel: 'Ok'
    },
    emailRead: {
      text: '¡Mira como este correo fue leído!',
      buttonLabel: 'Entendido'
    },
    activityFeed: {
      text: 'Mira cuáles correos fueron leídos y por quienes',
      buttonLabel: 'Ok'
    }
  }
};
