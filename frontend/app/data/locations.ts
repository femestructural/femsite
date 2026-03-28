

export const mapa_locations = [
    {
        proyecto: "VHF",
        cliente: "DESARCO",
        area: 619,
        estado: "Ciudad de México",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780622/R0_FE23_Viviendas_HF_2_a2lbnl.jpg"
        ],
        municipio: "Benito Juárez",
        lat: 19.3729,
        lng: -99.1570
    },
    {
        proyecto: "Mezcalitos",
        cliente: "P20 Arquitectos",
        area: 965,
        estado: "Nayarit",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780638/RA_FE25_MZC-MP_Unidades_Tipo_2_zrl9pq.jpg",
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780637/RA_FE25_MZC-MP_3_vck5d7.jpg"
        ],
        municipio: "Bahía de Banderas",
        lat: 20.6880,
        lng: -105.2850
    },
    {
        proyecto: "Casa del Almirante",
        cliente: "JDE Estudio",
        area: 177,
        estado: "Jalisco",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780633/RA_FE25_ALM-AMP_1_d3qx8w.jpg"
        ],
        municipio: "Huaxtla",
        // "Huaxtla" no es municipio (es localidad). -> centro del estado (Guadalajara)
        lat: 20.6597,
        lng: -103.3496
    },
    {
        proyecto: "Casa Pedregal 09",
        cliente: "21 Arquitectos",
        area: 165,
        estado: "Jalisco",
        images: [],
        municipio: "Jesús María",
        // Jesús María es municipio, pero típicamente de Aguascalientes (no Jalisco). -> centro del estado (Guadalajara)
        lat: 20.6597,
        lng: -103.3496
    },
    {
        proyecto: "Casa LB6",
        cliente: "ARQCAVI",
        area: 268,
        estado: "Jalisco",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780631/RA_FE24_Casa_LB6_2_h86pkd.jpg"
        ],
        municipio: "La Barca",
        lat: 20.2820,
        lng: -102.5470
    },
    {
        proyecto: "Casa Gaviotas",
        cliente: "21 Arquitectos",
        area: 455,
        estado: "Jalisco",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780630/P01_FE26_CG158-RS_1_hgtlgh.jpg"
        ],
        municipio: "Puerto Vallarta",
        lat: 20.6534,
        lng: -105.2253
    },
    {
        proyecto: "Torre Ceiba",
        cliente: "P20 Arquitectos",
        area: 2110,
        estado: "Jalisco",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780637/R2_FE24_Torre_Ceiba_2_qsdgpe.jpg"
        ],
        municipio: "Puerto Vallarta",
        // offset para no empalmar con Casa Gaviotas
        lat: 20.6634,
        lng: -105.2153
    },
    {
        proyecto: "Casa Palomar 141",
        cliente: "21 Arquitectos",
        area: 900,
        estado: "Jalisco",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780630/R1_FE23_Casa_Palomar_141_1_vtoyzo.jpg"
        ],
        municipio: "Tlajomulco",
        lat: 20.4730,
        lng: -103.4470
    },
    {
        proyecto: "Estación de Servicio",
        cliente: "Arq. José Herrera Gilio",
        area: 1405,
        estado: "Morelos",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780637/Estaci%C3%B3n_de_Servicio_1_bzupg3.jpg"
        ],
        municipio: "Cuernavaca",
        lat: 18.9240,
        lng: -99.2210
    },
    {
        proyecto: "Casa Bosque Niebla",
        cliente: "bacco arquitectos",
        area: 820,
        estado: "Veracruz",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780617/10_Casa_Bosque_de_Niebla_1_bgshdr.jpg"
        ],
        municipio: "Xalapa",
        lat: 19.5438,
        lng: -96.9102
    },
    {
        proyecto: "Departamentos SKINA",
        cliente: "Correa Taller de Arquitectura",
        area: 1045,
        estado: "Zacatecas",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780618/7_Departamentos_SKINA_1_jdtfmv.jpg"
        ],
        municipio: "Zacatecas",
        lat: 22.7709,
        lng: -102.5833
    },
    {
        proyecto: "Casa D19",
        cliente: "VMV Arquitectos",
        area: 860,
        estado: "Michoacán",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780636/RA_FE25_D19-RS_1_yykmgb.jpg"
        ],
        municipio: "San José de García",
        // no es municipio claro -> centro del estado (Morelia)
        lat: 19.7008,
        lng: -101.1844
    },
    {
        proyecto: "Sucursal Alberia",
        cliente: "ARPE",
        area: 524,
        estado: "Aguascalientes",
        images: ["https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780636/VR_FE22_Sucursal_Alberia_1_ldiche.jpg"],
        municipio: "Aguascalientes",
        lat: 21.8850,
        lng: -102.2910
    },
    {
        proyecto: "Casa Pino 17",
        cliente: "Solo Partners",
        area: 375,
        estado: "Chihuahua",
        images: ["https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780620/P24_FE25_PI17-IS_2_baa9st.jpg"],
        municipio: "Ciudad Juárez",
        lat: 31.6904,
        lng: -106.4245
    },
    {
        proyecto: "Peñon I",
        cliente: "Peréz Palacios Arquitectos",
        area: 540,
        estado: "Estado de México",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780623/RA_FE25_P01-RS_1_ypu516.jpg"
        ],
        municipio: "Temascaltepec",
        lat: 19.0370,
        lng: -100.0420
    },
    {
        proyecto: "Casa SO16",
        cliente: "AURUM Arquitectos",
        area: 360,
        estado: "Guanajuato",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780624/R0_FE25_SO16-IS_1_s7n4hl.jpg"
        ],
        municipio: "León",
        lat: 21.1220,
        lng: -101.6860
    },
    {
        proyecto: "Casa KR",
        cliente: "VMV Arquitectos",
        area: 415,
        estado: "Nuevo León",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780604/RA_FE25_KR-IS_2_lfjov5.jpg"
        ],
        municipio: "Monterrey",
        lat: 25.6866,
        lng: -100.3161
    },
    {
        proyecto: "Desiderata",
        cliente: "PENHOS + PESQUEIRA",
        area: 1330,
        estado: "Oaxaca",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780605/RA_FE25_DES-RS_1_zshpbg.jpg"
        ],
        municipio: "Huatulco",
        lat: 15.7680,
        lng: -96.1340
    },
    {
        proyecto: "Casa Arieta 96",
        cliente: "305 Estudio",
        area: 409,
        estado: "Querétaro",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780613/RA_FE25__ART96-IS_1_a5prcc.jpg"
        ],
        municipio: "Zibatá",
        // Zibatá es desarrollo/localidad (no municipio) -> centro del estado (Qro)
        lat: 20.5888,
        lng: -100.3899
    },
    {
        proyecto: "Casa JO",
        cliente: "VMV Arquitectos",
        area: 730,
        estado: "Querétaro",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780612/RA_FE25_JO-IS_1_hs5rp3.jpg"
        ],
        municipio: "El Marqués",
        lat: 20.6200,
        lng: -100.2300
    },
    {
        proyecto: "Casa Blanca SLP",
        cliente: "Construlia",
        area: 493,
        estado: "San Luis Potosí",
        images: ["https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780617/RB_FE23_Casa_Blanca_Nuevo_SLP_1_onjskv.jpg"],
        municipio: "SLP",
        // "SLP" no es municipio -> centro del estado (SLP capital)
        lat: 22.1565,
        lng: -100.9855
    },
    {
        proyecto: "Casa Zapata 64",
        cliente: "VMV Arquitectos",
        area: 800,
        estado: "San Luis Potosí",
        images: ["https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780616/RA_FE25_ZP64-RS_1_kvjzt4.jpg"],
        municipio: "Cuitláhuac",
        // Cuitláhuac es municipio de Veracruz (no SLP) -> centro del estado (SLP capital)
        lat: 22.1565,
        lng: -100.9855
    },
    {
        proyecto: "Casa Arreola",
        cliente: "VMV Arquitectos",
        area: 550,
        estado: "Tamaulipas",
        images: ["https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780617/RA_FE25_ARR-AMP_UP12_2_txnp1a.jpg"],
        municipio: "Ciudad Victoria",
        lat: 23.7417,
        lng: -99.1450
    },
    {
        proyecto: "Casa Luna",
        cliente: "R/MA Arquitectos",
        area: 750,
        estado: "Baja California Sur",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780619/R0_FE24_Casa_Luna_1_yvipqc.jpg",
        ],
        municipio: "San José del Cabo",
        lat: 23.0616,
        lng: -109.6977
    },
    {
        proyecto: "Torre Las Ánimas",
        cliente: "ARQUIPARTNERS",
        area: 2468,
        estado: "Baja California Sur",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780620/VR_FE24_Las_Animas_1_aiwp5a.jpg",
        ],
        municipio: "San José del Cabo",
        // offset para no empalmar con Casa Luna
        lat: 23.0716,
        lng: -109.6877
    },
    {
        proyecto: "Casa DM26",
        cliente: "VMV Arquitectos",
        area: 570,
        estado: "Estado de México",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780621/RA_FE24_Casa_DM26_2_ymbywx.jpg"
        ],
        municipio: "Atizapán de Zaragoza",
        lat: 19.5585,
        lng: -99.2560
    },
    {
        proyecto: "Casa Carapia TZA",
        cliente: "ORION Arquitectos",
        area: 480,
        estado: "Guanajuato",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780626/RA_FE24_Casa_Carapia_-_TZA_1_z5fvgk.jpg"
        ],
        municipio: "Celaya",
        lat: 20.5230,
        lng: -100.8120
    },
    {
        proyecto: "Casa SP",
        cliente: "Monarq",
        area: 330,
        estado: "Guanajuato",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780627/VR_FE24_Casa_SP_2_hbtk8v.jpg"
        ],
        municipio: "San Miguel de Allende",
        lat: 20.9140,
        lng: -100.7430
    },
    {
        proyecto: "Casa Ocho",
        cliente: "COPA Taller de Arquitectura",
        area: 439,
        estado: "Jalisco",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780628/Casa_Ocho_2_tpnohm.jpg"
        ],
        municipio: "Tonalá",
        lat: 20.6210,
        lng: -103.2410
    },
    {
        proyecto: "Casa BP",
        cliente: "JP 29",
        area: 610,
        estado: "Jalisco",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780632/R2_FE24_Casa_BP_2_q2as1d.jpg"
        ],
        municipio: "Tuxcueca",
        lat: 20.1700,
        lng: -103.1990
    },
    // {
    //     proyecto: "Bosquet 16",
    //     cliente: "JDE Estudio",
    //     area: 1320,
    //     estado: "Jalisco",
    //     images: [],
    //     municipio: "Zapopan",
    //     lat: 20.7210,
    //     lng: -103.3910
    // },
    {
        proyecto: "CLA - Casa Claudia",
        cliente: "Pico Arquitectura",
        area: 350,
        estado: "Nuevo León",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780604/Casa_Las_Am%C3%A9ricas_-_Claudia_1_pts4z7.jpg"
        ],
        municipio: "Guadalupe",
        lat: 25.6760,
        lng: -100.2570
    },
    {
        proyecto: "Eucalipto 640",
        cliente: "Pico Arquitectura",
        area: 515,
        estado: "Nuevo León",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780603/Casa_Eucalipto_640_1_vkvrky.jpg"
        ],
        municipio: "Santiago",
        lat: 25.4230,
        lng: -100.1520
    },
    {
        proyecto: "Armonía 12",
        cliente: "DMP Arquitectura",
        area: 560,
        estado: "Puebla",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780605/Casa_Armon%C3%ADa_12_2_asygpe.jpg"
        ],
        municipio: "Cholula",
        lat: 19.0570,
        lng: -98.3070
    },
    {
        proyecto: "Proyecto LCB",
        cliente: "JC Arquitectura",
        area: 727,
        estado: "Puebla",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780605/R0_FE24_Proyecto_LCB_2_kfafhc.jpg"
        ],
        municipio: "Sta. María la Alta",
        // no es municipio claro -> centro del estado (Puebla capital)
        lat: 19.0433,
        lng: -98.2019
    },
    {
        proyecto: "Cabaña R70",
        cliente: "Candor Estudio",
        area: 350,
        estado: "Querétaro",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780608/R1_FE24_Caba%C3%B1a_R70_1_jnqtl3.jpg"
        ],
        municipio: "San Gabriel Club Campestre",
        // no es municipio -> centro del estado (Qro)
        lat: 20.5888,
        lng: -100.3899
    },
    {
        proyecto: "Casa Alcalá 16",
        cliente: "Ing. Alejandro Mensoza",
        area: 439,
        estado: "Querétaro",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780614/RB_FE25_ALC16-IS_2_qfhj2x.jpg"
        ],
        municipio: "El Marqués",
        // offset para no empalmar con Casa JO (mismo municipio)
        lat: 20.6300,
        lng: -100.2200
    },
    {
        proyecto: "Casa Nuvole A38",
        cliente: "Grupo Playatec",
        area: 426,
        estado: "Querétaro",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780607/Casa_Nuvole_A38_2_rgshxr.jpg"
        ],
        municipio: "Huimilpan",
        lat: 20.3180,
        lng: -100.2760
    },
    {
        proyecto: "Casa Sayab Juriquila",
        cliente: "RAGA",
        area: 222,
        estado: "Querétaro",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780609/RA_FE24_Casa_Sayab_Juriquilla_1_ddfcxh.jpg"
        ],
        municipio: "Juriquilla",
        // Juriquilla es localidad (no municipio) -> centro del estado (Qro)
        lat: 20.5888,
        lng: -100.3899
    },
    {
        proyecto: "Casa Ricardo del Río",
        cliente: "Monarq",
        area: 560,
        estado: "Querétaro",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780609/RA_FE24_Casa_Ricardo_del_R%C3%ADo_1_jd5oen.jpg"
        ],
        municipio: "Santiago de Querétaro",
        lat: 20.5888,
        lng: -100.3899
    },
    {
        proyecto: "Casa 7",
        cliente: "ARQUIPARTNERS",
        area: 1087,
        estado: "Quintana Roo",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780614/RA_FE24_Casa_7_Tul%C3%BAm_2_mqlfnu.jpg"
        ],
        municipio: "Tulum",
        lat: 20.2110,
        lng: -87.4650
    },
    {
        proyecto: "Casa Thomas",
        cliente: "ARQUIPARTNERS",
        area: 320,
        estado: "Quintana Roo",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780614/RA_FE24_Casa_Thomas_2_ivp9wz.jpg"
        ],
        municipio: "Playa del Carmen",
        lat: 20.6290,
        lng: -87.0730
    },
    {
        proyecto: "Muúyal",
        cliente: "ARQUIPARTNERS",
        area: 1300,
        estado: "Quintana Roo",
        images: [
            "https://res.cloudinary.com/ditwfi7c9/image/upload/q_auto/v1770780615/RA_FE24_M%C3%BAuyal_1_vrfwkb.jpg"
        ],
        municipio: "Tulum",
        // offset para no empalmar con Casa 7
        lat: 20.2210,
        lng: -87.4550
    }
]
