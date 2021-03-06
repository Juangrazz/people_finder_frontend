const keys = {

    // DATABASE SERVICE
    db_host: "https://peoplefinderapi.herokuapp.com",
    db_server_path: "/server",

    // ---------------------------------------------------------

    // CONTROLS
    ctrl_description_max_length: 3000,
    ctrl_description_min_length: 50,
    ctrl_place_min_length: 2,
    ctrl_place_max_length: 200,
    ctrl_min_age: 18,
    ctrl_max_age: 100,
    ctrl_name_min_length: 2,
    ctrl_lastname_min_length: 2,
    ctrl_password_min_length: 6,
    ctrl_instagram_pattern: "(?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))",
    ctrl_email_pattern: "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}",
    ctrl_fail_result: "NOK",
    ctrl_successful_result: "OK",
    ctrl_model_card_normal_type: "normal",
    ctrl_model_card_people_type: "people",

    // ---------------------------------------------------------

    // ERRORS
    msg_date_error: "Selecciona una fecha válida",
    msg_time_error: "Selecciona una hora válida",
    msg_place_error: "El lugar ha de tener al menos dos caracteres",
    msg_description_error: "La descripción ha de tener entre 50 y 3000 caracteres",
    msg_form_error: "El formulario no puede estar vacío",
    msg_count_text: "letras",
    msg_insta_error: "Introduce una cuenta de instagram válida",
    msg_age_error: "Introduce una edad válida",
    msg_kind_error: "Introduce un tipo de relación válido",
    msg_lookfor_error: "Selecciona qué estás buscando",
    msg_comment_error: "No puedes enviar un comentario sin texto",
    msg_min_age_error: "Introduce una edad mínima válida",
    msg_max_age_error: "Introduce una edad máxima válida",
    msg_name_error: "La lóngitud del nombre ha de ser de al menos 2 caracteres",
    msg_lastname_error: "La lóngitud de los apellidos ha de ser al menos de 2 caracteres",
    msg_email_error: "El email no es válido",
    msg_pass_match_error: "Las contraseñas no coinciden",
    msg_pass_length_error: "La contraseña ha de tener al menos 6 caracteres",
    msg_credentials_error: "El usuario o la contraseña no son correctos",
    msg_old_password_empty_error: "La contraseña actual no puede estar vacía",
    msg_old_password_match_error: "La contraseña actual no coincide",
    msg_email_exists_error: "El correo indicado ya está registrado",
    msg_delete_email_error: "El correo introducido no existe o no es válido",

    // ---------------------------------------------------------

    // NAVBAR
    nav_title: "People Finder",
    nav_option_1: "Inicio",
    nav_option_2: "Instrucciones",
    nav_option_3: "Mensajes",
    nav_drop_option_1: "Mándanos un mensaje",
    nav_drop_option_2: "People",
    nav_drop_option_3: "Búsqueda",
    nav_option_4: "Estadísticas",
    nav_option_5: "Verificar mensajes",
    nav_option_6: "Administrador",
    nav_option_6_B: "Crear administrador",
    nav_option_7: "Modificar mis datos",
    nav_option_8: "Cerrar sessión",

    // ---------------------------------------------------------

    // INDEX
    index_day_text: "Día",
    index_arrows_text: "Día",
    index_arrow_reload: "Día actual",
    // ---------------------------------------------------------

    // INSTRUCCIONES VIEW
    inst_title: "INSTRUCCIONES",

    // Mensajes
    inst_sub_1: "Mensajes",
    // Mensajes contents
    inst_sub_1_cont_1: "Hay que poner la fecha exacta y la hora aproximada en la que situar a la persona. Los mensajes como <i>AYER/HOY</i> son sirven porque no siempre se publican en el mismo día que se envían.",
    inst_sub_1_cont_2: "Es importante se lo más exacto posible a la hora de describir a alguien. Mensajes como <i>Chica morena con zapatos que iba por la city...</i> no valen.",
    inst_sub_1_cont_3: "Los mensajes que sean considerados como falta de respeto tampoco se publicarán.",

    // Privacidad
    inst_sub_2: "Privacidad",
    // Privacidad contents
    inst_sub_2_cont_1: "Los mensajes son completamente anónimos, aunque se da la opción de dejar la cuenta de instagram para que te puedan localizar más facilmente.",

    // People
    inst_sub_3: "People",
    // People contents
    inst_sub_3_cont_1: "Intenta ser breve pero conciso. Tendrás que proporcionar los siguientes datos:",
    inst_sub_3_cont_1_l_1: "Una breve descripción de ti (altura, aficiones, gusto, personalidad...)",
    inst_sub_3_cont_1_l_2: "En lo que estás interesado esencialmente de la otra persona(el perfil que buscas)",
    inst_sub_3_cont_1_l_3: "El tipo de relación que buscas exactamente",

    // Derechos
    inst_sub_4: "Derechos",
    // Derechos contents
    inst_sub_4_cont_1: "Recalcar que queda reservado el derecho a publicar o no un mensaje, así como las razones sobre ello.",
    inst_sub_4_cont_2: "Además, también queda reservado la manipulación de la ubicación enviada para que haya un orden.",

    // ---------------------------------------------------------

    // MÁNDANOS UN MENSAJE SECTION
    msg_title: "Cuéntanos dónde y cuándo le has visto",
    msg_instruction_link: "Más instrucciones",
    msg_input_1: "Fecha",
    msg_input_2: "Hora",
    msg_input_3: "Lugar",
    msg_input_4: "Instagram (opcional)",
    msg_input_5: "Descripción",
    msg_send_button: "Enviar",

    // ---------------------------------------------------------

    // BÚSQUEDA SECTION
    search_title: "Búsqueda",
    search_people_txt: "People",

    // Búsqueda normal form
    search_input_1: "Fecha",
    search_input_2: "Lugar",
    search_input_2_place_holder: "¿Dónde?",
    search_send_button: "Buscar",
    secret_search_1: "el inframundo",
    secret_search_2: "el corazón de tu ex",
    secret_search_3: "donde tenga oportunidades de ligar",

    // ---------------------------------------------------------

    // PEOPLE SECTION
    people_title: "People",
    people_input_1: "Edad",
    people_input_2: "Tipo de relación",
    people_input_3: "¿Qué buscas?",
    people_input_4: "Instagram (opcional)",
    people_input_5: "Añade una descripción",
    people_input_6: "Edad mínima",
    people_input_7: "Edad máxima",
    people_empty_option: "-- Selecciona una opción --",
    people_indiferent_option: "Indiferente",
    people_rel_option_1: "Algo serio",
    people_rel_option_2: "Nada serio",
    people_rel_option_3: "Amistad",
    people_lookfor_option_1: "Chico",
    people_lookfor_option_2: "Chica",
    people_send_button: "Enviar",

    // ---------------------------------------------------------

    // NO POST
    nopost_text: "No hay publicaciones para este día",

    // CARDS
    cards_info_1: "Fecha:",
    cards_info_2: "Hora:",
    cards_info_3: "Lugar:",
    cards_info_4: "Instagram:",
    cards_info_5: "Comentarios",
    cards_txt_anonymous: "Anónimo",
    cards_txt_comments: "Comentarios",
    cards_txt_new_comment: "Deja un comentario",
    cards_txt_publicated: "Publicado el día",
    cards_txt_no_comments: "No hay comentarios todavía. ¡Sé el primero en escribir!",
    cards_txt_info_comment: `Para nombrar a alguien, tan solo introduce un <span class="txt-purple">@</span> seguido de su cuenta de Instagram.`,

    // ---------------------------------------------------------

    // DASHBOARD
    dashboard_title: "LOGIN",
    dashboard_input_1: "Email",
    dashboard_input_2: "Contraseña",
    dashboard_submit_button: "Aceptar",
    dashboard_recovery_pass: "Recuperar contraseña",
    dashboard_remember_user: "Recordar email",

    // ---------------------------------------------------------

    // ADMIN HOME
    admin_home_title: "TUS DATOS",
    admin_home_info_name: "Nombre:",
    admin_home_info_lastname: "Apellidos:",
    admin_home_info_email: "Correo:",
    admin_home_info_creation_date: "Alta:",
    admin_home_info_last_update: "Modificado:",
    admin_home_delete_account: "Eliminar cuenta",

    // ---------------------------------------------------------

    // CHECK MESSAGES
    check_messages_btn_accept: "Aceptar",
    check_messages_btn_edit: "Modificar lugar",
    check_messages_btn_reject: "Rechazar",

    // ---------------------------------------------------------

    // EDIT MESSAGE
    edit_title: "Editar mensaje",

    // ---------------------------------------------------------

    // CREATE ADMIN
    admin_config_title: "Crear administrador",
    admin_config_input_1: "Nombre",
    admin_config_input_2: "Apellidos",
    admin_config_input_3: "Correo",
    admin_config_input_4: "Contraseña",
    admin_config_input_5: "Repite la contraseña",
    admin_config_subtitle_1: "Datos personales",
    admin_config_subtitle_2: "Seguridad",
    admin_config_submit_button: "Dar de alta",
    admin_config_input_6: "Email",
    admin_config_submit_button_2: "Eliminar",
    admin_config_title_2: "Eliminar cuenta",

    // ---------------------------------------------------------

    // MOD INFO
    mod_info_title: "Modificar mis datos",
    mod_info_input_1: "Nombre",
    mod_info_input_2: "Apellidos",
    mod_info_input_3: "Correo",
    mod_info_input_4: "Contraseña actual",
    mod_info_input_5: "Contraseña nueva",
    mod_info_input_6: "Repite la nueva contraseña",
    mod_info_subtitle_1: "Datos personales",
    mod_info_subtitle_2: "Seguridad",
    mod_info_submit_button_personal: "Modificar datos",
    mod_info_submit_button_pass: "Cambiar contraseña",

    // ---------------------------------------------------------

    // MODALS

    // ERROR MODAL
    error_modal_title: "Mensaje",
    error_modal_button: "Ok",
    error_modal_message: "Ha ocurrido un error, inténtalo de nuevo más tarde.",
    error_modal_message_2: "¡Vaya! Parece que algo ha salido mal <br><br> Lo intentaremos solucionar lo antes posible.",

    // CORRECT MODAL
    correct_modal_title: "Mensaje",
    correct_modal_button: "Ok",
    correct_modal_message: "¡Mensaje enviado!",
    correct_modal_comment: "¡Comentario enviado!",
    correct_modal_admin_config: "¡Administrador creado!",
    correct_modal_place_updated: "Lugar modificado correctamente",
    correct_modal_update_admin_data: "Información actualizada correctamente",
    correct_modal_update_admin_password: "Contraseña actualizada correctamente",
    correct_modal_reset_password: "Si el correo es válido, habrá llegado un mensaje a la bandeja de entrada. <br><br> Si no lo ves, puede ser que esté en la carpeta de <i>spam</i>.",

    // INFO MODAL
    info_modal_button: `Vale <i class="fas fa-smile fa-lg"></i>`,
    info_modal_message: "Si hubo gente que se compró el Fiat Multipla, tiene que haber gente que saldría contigo.",

    // CHANGE PLACE MODAL
    change_place_modal_title: "Modificar lugar",
    change_place_modal_old_place: "Viejo lugar",
    change_place_modal_new_place: "Nuevo lugar",
    change_place_modal_accept_button: "Aceptar",
    change_place_modal_cancel_button: "Cancelar",

    // CHANGE PLACE MODAL
    warning_modal_title: "¡Aviso!",
    warning_modal_text: "Si borras tu cuenta, no podrás volver a acceder a no ser que te den de alta de nuevo",
    warning_modal_text_2: "Si borras esta cuenta, el usuario correspondiente no podrá acceder de nuevo",
    warning_modal_button: "Eliminar",

    // RESET PASSWORD
    reset_password_modal_title: "Restaurar contraseña",
    reset_password_modal_text: "Email de la cuenta",
    reset_password_modal_accept_button: "Aceptar",
    reset_password_modal_cancel_button: "Cancelar",

    // ---------------------------------------------------------

    // STATISTICS
    statistic_all_time_title: "Cantidad de post por lugar",
    statistic_thirty_days_title: "Cantidad de post por lugar últimos 30 días",
    statistic_cards_seven_days_title: "Cantidad de post por categoría últimos 7 días",
    statistic_cards_seven_days_normal_label: "Normales",
    statistic_cards_seven_days_people_label: "People",
    statistic_cards_seven_days_people_text_label: "Día",

    // ---------------------------------------------------------

    // NO POST TO CHECK
    noresults_text: "No hay resultados",

    // ---------------------------------------------------------

    // CHECK MESSAGES
    check_messages_title: "Verificar mensajes",
    // No messages to check
    nopost_to_check_text: "No hay más mensajes para validar",

    // ---------------------------------------------------------

    // SESSION STORAGE
    session_storage_individual_card: "individual_card",
    session_storage_date_to_show: "date_to_show",
    session_storage_token: "token",

    // LOCAL STORAGE
    local_storage_remember: "remember",
    local_storage_email: "email",

}

export default keys;
