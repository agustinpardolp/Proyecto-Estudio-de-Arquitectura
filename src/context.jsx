import React, {Component} from "react";

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  state = {
    proyectos: [
      {
        id:1,
        nombre: "Casa sobre el arroyo - CHD",
        autores: "Arq, Julia Deschamps - Fabio Estremera",
        ubicacion:"Arroyo doña flora, camino a club regatas La Plata, entrada n 18 s/n, Ensenada,Provincia de Buenos Aires, Argentina",
        descripcion:"Se trataba de una reforma y cambio de programa en una construcción existente de dos plantas sobre un terreno inundable a orillas del arroyo Doña Flora, en el delta del Rio Santiago; dejaría de ser una casa de fin de semana para darle uso en forma permanente. Un espacio en planta baja inundable varias veces al año, sin ser intervenida, pasa a ser quincho para uso de familiares. Sobre la losa existente de hº aº en planta alta de 8x8 con dos escaleras (interior y exterior) apoyada sobre la medianera oeste, se proyectó la vivienda para una pareja transitando la etapa de la vida para el ocio. La panorámica de un paisaje singular, los lugares de guardado, y una tecnología rápida y liviana a fin de evitar altas cargas sobre la estructura existente constituyeron la paleta básica de diseño. El espacio es definido por el diseño estructural y viceversa: una viga antepecho metálica y espacial (que sirve como placard) resuelve la transición entre la estructura de hormigón existente y la cubierta liviana. La necesidad de colocar los puntos de apoyo al borde de la losa para maximizar superficie llevó a diluir los elementos portantes en una sucesión de perfiles t de 4 cm quitando peso visual, relacionando las dimensiones interiores con el paisaje. Tres filtros con el exterior regulan el interior: una tela mosquitero sujeta a los parantes de la estructura posibilita a la línea de carpinterías abrirse en épocas estivales y acondicionar pasivamente el interior; completa el sistema un plano de cortinas roller blackout para controlar el oscurecimiento.",
        programa: "Residencia permanente para dos personas",
        año: 2000,
        cliente: "Betom, CapTerre, Alternative",
        superficie: "total: 64m2, cubierta:57m2",
        asesores:" Ing. Aldo Parma, cálculo de estructuras.",
        colaboradores: "dibujos Martin Bravi, Franco Angeleri; maqueta, Flavio Di Bin",
        fotografias:"Hernan Vazquez / DEarquitectura",
        constructor:"Darío Gonzalez",

        imagenes: [

          {
            nombre: "01-foto.jpg",
            id: 3
          },
          {
            nombre: "02-foto.jpg",
            id: 4
          },
          {
            nombre: "03-foto.jpg",
            id: 5
          },
          {
            nombre: "06-foto.jpg",
            id: 6
          },
          {
            nombre: "07-foto.jpg",
            id: 9
          }
        ]
      },

      {
        id:2,
        nombre: "Obra casa dos",
        autores: "Arq, Julia Deschamps - Fabio Estremera",
        ubicacion:"Arroyo doña flora, camino a club regatas La Plata, entrada n 18 s/n, Ensenada,Provincia de Buenos Aires, Argentina",
        descripcion:"Se trataba de una reforma y cambio de programa en una construcción existente de dos plantas sobre un terreno inundable a orillas del arroyo Doña Flora, en el delta del Rio Santiago; dejaría de ser una casa de fin de semana para darle uso en forma permanente. Un espacio en planta baja inundable varias veces al año, sin ser intervenida, pasa a ser quincho para uso de familiares. Sobre la losa existente de hº aº en planta alta de 8x8 con dos escaleras (interior y exterior) apoyada sobre la medianera oeste, se proyectó la vivienda para una pareja transitando la etapa de la vida para el ocio. La panorámica de un paisaje singular, los lugares de guardado, y una tecnología rápida y liviana a fin de evitar altas cargas sobre la estructura existente constituyeron la paleta básica de diseño. El espacio es definido por el diseño estructural y viceversa: una viga antepecho metálica y espacial (que sirve como placard) resuelve la transición entre la estructura de hormigón existente y la cubierta liviana. La necesidad de colocar los puntos de apoyo al borde de la losa para maximizar superficie llevó a diluir los elementos portantes en una sucesión de perfiles t de 4 cm quitando peso visual, relacionando las dimensiones interiores con el paisaje. Tres filtros con el exterior regulan el interior: una tela mosquitero sujeta a los parantes de la estructura posibilita a la línea de carpinterías abrirse en épocas estivales y acondicionar pasivamente el interior; completa el sistema un plano de cortinas roller blackout para controlar el oscurecimiento.",
        programa: "Residencia permanente para dos personas",
        año: 2000,
        cliente: "Betom, CapTerre, Alternative",
        superficie: "total: 64m2, cubierta:57m2",
        asesores:" Ing. Aldo Parma, cálculo de estructuras.",
        colaboradores: "dibujos Martin Bravi, Franco Angeleri; maqueta, Flavio Di Bin",
        fotografias:"Hernan Vazquez / DEarquitectura",
        constructor:"Darío Gonzalez",
        imagenes: [
          {
            nombre: "00-foto.jpg",
            id: 6
          },
          {
            nombre: "01-foto.jpg",
            id: 7
          },
          {
            nombre: "02-foto.jpg",
            id: 8
          },
          {
            nombre: "03-foto.jpg",
            id: 9
          },
          {
            nombre: "04-foto.jpg",
            id: 10
          }
        ]
      },
      {
        id:3,
        nombre: "Estudio casa",
        autores: "Arq, Julia Deschamps - Fabio Estremera",
        ubicacion:"Arroyo doña flora, camino a club regatas La Plata, entrada n 18 s/n, Ensenada,Provincia de Buenos Aires, Argentina",
        descripcion:"Se trataba de una reforma y cambio de programa en una construcción existente de dos plantas sobre un terreno inundable a orillas del arroyo Doña Flora, en el delta del Rio Santiago; dejaría de ser una casa de fin de semana para darle uso en forma permanente. Un espacio en planta baja inundable varias veces al año, sin ser intervenida, pasa a ser quincho para uso de familiares. Sobre la losa existente de hº aº en planta alta de 8x8 con dos escaleras (interior y exterior) apoyada sobre la medianera oeste, se proyectó la vivienda para una pareja transitando la etapa de la vida para el ocio. La panorámica de un paisaje singular, los lugares de guardado, y una tecnología rápida y liviana a fin de evitar altas cargas sobre la estructura existente constituyeron la paleta básica de diseño. El espacio es definido por el diseño estructural y viceversa: una viga antepecho metálica y espacial (que sirve como placard) resuelve la transición entre la estructura de hormigón existente y la cubierta liviana. La necesidad de colocar los puntos de apoyo al borde de la losa para maximizar superficie llevó a diluir los elementos portantes en una sucesión de perfiles t de 4 cm quitando peso visual, relacionando las dimensiones interiores con el paisaje. Tres filtros con el exterior regulan el interior: una tela mosquitero sujeta a los parantes de la estructura posibilita a la línea de carpinterías abrirse en épocas estivales y acondicionar pasivamente el interior; completa el sistema un plano de cortinas roller blackout para controlar el oscurecimiento.",
        programa: "Residencia permanente para dos personas",
        año: 2000,
        cliente: "Betom, CapTerre, Alternative",
        superficie: "total: 64m2, cubierta:57m2",
        asesores:" Ing. Aldo Parma, cálculo de estructuras.",
        colaboradores: "dibujos Martin Bravi, Franco Angeleri; maqueta, Flavio Di Bin",
        fotografias:"Hernan Vazquez / DEarquitectura",
        constructor:"Darío Gonzalez",
        imagenes: [
          {
            nombre: "c00-foto.jpg",
            id: 11
          },
          {
            nombre: "c00-foto.jpg",
            id: 12
          },
          {
            nombre: "c00-foto.jpg",
            id: 13
          },
          {
            nombre: "c00-foto.jpg",
            id: 14
          },
          {
            nombre: "c00-foto.jpg",
            id: 15
          }
        ]
      },
      {
        id:4,
        nombre: "Edificio de 44",
        autores: "Arq, Julia Deschamps - Fabio Estremera",
        ubicacion:"Arroyo doña flora, camino a club regatas La Plata, entrada n 18 s/n, Ensenada,Provincia de Buenos Aires, Argentina",
        descripcion:"Se trataba de una reforma y cambio de programa en una construcción existente de dos plantas sobre un terreno inundable a orillas del arroyo Doña Flora, en el delta del Rio Santiago; dejaría de ser una casa de fin de semana para darle uso en forma permanente. Un espacio en planta baja inundable varias veces al año, sin ser intervenida, pasa a ser quincho para uso de familiares. Sobre la losa existente de hº aº en planta alta de 8x8 con dos escaleras (interior y exterior) apoyada sobre la medianera oeste, se proyectó la vivienda para una pareja transitando la etapa de la vida para el ocio. La panorámica de un paisaje singular, los lugares de guardado, y una tecnología rápida y liviana a fin de evitar altas cargas sobre la estructura existente constituyeron la paleta básica de diseño. El espacio es definido por el diseño estructural y viceversa: una viga antepecho metálica y espacial (que sirve como placard) resuelve la transición entre la estructura de hormigón existente y la cubierta liviana. La necesidad de colocar los puntos de apoyo al borde de la losa para maximizar superficie llevó a diluir los elementos portantes en una sucesión de perfiles t de 4 cm quitando peso visual, relacionando las dimensiones interiores con el paisaje. Tres filtros con el exterior regulan el interior: una tela mosquitero sujeta a los parantes de la estructura posibilita a la línea de carpinterías abrirse en épocas estivales y acondicionar pasivamente el interior; completa el sistema un plano de cortinas roller blackout para controlar el oscurecimiento.",
        programa: "Residencia permanente para dos personas",
        año: 2000,
        cliente: "Betom, CapTerre, Alternative",
        superficie: "total: 64m2, cubierta:57m2",
        asesores:" Ing. Aldo Parma, cálculo de estructuras.",
        colaboradores: "dibujos Martin Bravi, Franco Angeleri; maqueta, Flavio Di Bin",
        fotografias:"Hernan Vazquez / DEarquitectura",
        constructor:"Darío Gonzalez",
        imagenes: [
          {
            nombre: "c00-foto.jpg",
            id: 16
          },
          {
            nombre: "c00-foto.jpg",
            id: 17
          },
          {
            nombre: "c00-foto.jpg",
            id: 18
          },
          {
            nombre: "c00-foto.jpg",
            id: 19
          },
          {
            nombre: "c00-foto.jpg",
            id: 20
          }
        ]
      },
      {
        id:5,
        nombre: "Casa City Bell",
        autores: "Arq, Julia Deschamps - Fabio Estremera",
        ubicacion:"Arroyo doña flora, camino a club regatas La Plata, entrada n 18 s/n, Ensenada,Provincia de Buenos Aires, Argentina",
        descripcion:"Se trataba de una reforma y cambio de programa en una construcción existente de dos plantas sobre un terreno inundable a orillas del arroyo Doña Flora, en el delta del Rio Santiago; dejaría de ser una casa de fin de semana para darle uso en forma permanente. Un espacio en planta baja inundable varias veces al año, sin ser intervenida, pasa a ser quincho para uso de familiares. Sobre la losa existente de hº aº en planta alta de 8x8 con dos escaleras (interior y exterior) apoyada sobre la medianera oeste, se proyectó la vivienda para una pareja transitando la etapa de la vida para el ocio. La panorámica de un paisaje singular, los lugares de guardado, y una tecnología rápida y liviana a fin de evitar altas cargas sobre la estructura existente constituyeron la paleta básica de diseño. El espacio es definido por el diseño estructural y viceversa: una viga antepecho metálica y espacial (que sirve como placard) resuelve la transición entre la estructura de hormigón existente y la cubierta liviana. La necesidad de colocar los puntos de apoyo al borde de la losa para maximizar superficie llevó a diluir los elementos portantes en una sucesión de perfiles t de 4 cm quitando peso visual, relacionando las dimensiones interiores con el paisaje. Tres filtros con el exterior regulan el interior: una tela mosquitero sujeta a los parantes de la estructura posibilita a la línea de carpinterías abrirse en épocas estivales y acondicionar pasivamente el interior; completa el sistema un plano de cortinas roller blackout para controlar el oscurecimiento.",
        programa: "Residencia permanente para dos personas",
        año: 2000,
        cliente: "Betom, CapTerre, Alternative",
        superficie: "total: 64m2, cubierta:57m2",
        asesores:" Ing. Aldo Parma, cálculo de estructuras.",
        colaboradores: "dibujos Martin Bravi, Franco Angeleri; maqueta, Flavio Di Bin",
        fotografias:"Hernan Vazquez / DEarquitectura",
        constructor:"Darío Gonzalez",
        imagenes: [
          {
            nombre: "c00-foto.jpg",
            id: 26
          },
          {
            nombre: "c00-foto.jpg",
            id: 27
          },
          {
            nombre: "c00-foto.jpg",
            id: 28
          },
          {
            nombre: "c00-foto.jpg",
            id: 29
          },
          {
            nombre: "c00-foto.jpg",
            id: 30
          }
        ]
      },
      {
        id:6,
        nombre: "Proyecto Tres",
        autores: "Arq, Julia Deschamps - Fabio Estremera",
        ubicacion:"Arroyo doña flora, camino a club regatas La Plata, entrada n 18 s/n, Ensenada,Provincia de Buenos Aires, Argentina",
        descripcion:"Se trataba de una reforma y cambio de programa en una construcción existente de dos plantas sobre un terreno inundable a orillas del arroyo Doña Flora, en el delta del Rio Santiago; dejaría de ser una casa de fin de semana para darle uso en forma permanente. Un espacio en planta baja inundable varias veces al año, sin ser intervenida, pasa a ser quincho para uso de familiares. Sobre la losa existente de hº aº en planta alta de 8x8 con dos escaleras (interior y exterior) apoyada sobre la medianera oeste, se proyectó la vivienda para una pareja transitando la etapa de la vida para el ocio. La panorámica de un paisaje singular, los lugares de guardado, y una tecnología rápida y liviana a fin de evitar altas cargas sobre la estructura existente constituyeron la paleta básica de diseño. El espacio es definido por el diseño estructural y viceversa: una viga antepecho metálica y espacial (que sirve como placard) resuelve la transición entre la estructura de hormigón existente y la cubierta liviana. La necesidad de colocar los puntos de apoyo al borde de la losa para maximizar superficie llevó a diluir los elementos portantes en una sucesión de perfiles t de 4 cm quitando peso visual, relacionando las dimensiones interiores con el paisaje. Tres filtros con el exterior regulan el interior: una tela mosquitero sujeta a los parantes de la estructura posibilita a la línea de carpinterías abrirse en épocas estivales y acondicionar pasivamente el interior; completa el sistema un plano de cortinas roller blackout para controlar el oscurecimiento.",
        programa: "Residencia permanente para dos personas",
        año: 2000,
        cliente: "Betom, CapTerre, Alternative",
        superficie: "total: 64m2, cubierta:57m2",
        asesores:" Ing. Aldo Parma, cálculo de estructuras.",
        colaboradores: "dibujos Martin Bravi, Franco Angeleri; maqueta, Flavio Di Bin",
        fotografias:"Hernan Vazquez / DEarquitectura",
        constructor:"Darío Gonzalez",
        imagenes: [
          {
            nombre: "c00-foto.jpg",
            id: 21
          },
          {
            nombre: "c00-foto.jpg",
            id: 22
          },
          {
            nombre: "c00-foto.jpg",
            id: 23
          },
          {
            nombre: "c00-foto.jpg",
            id: 24
          },
          {
            nombre: "c00-foto.jpg",
            id: 25
          }
        ]
      },
      {
        id:7,
        nombre: "Complejo deportivo",
        autores: "Arq, Julia Deschamps - Fabio Estremera",
        ubicacion:"Arroyo doña flora, camino a club regatas La Plata, entrada n 18 s/n, Ensenada,Provincia de Buenos Aires, Argentina",
        descripcion:"Se trataba de una reforma y cambio de programa en una construcción existente de dos plantas sobre un terreno inundable a orillas del arroyo Doña Flora, en el delta del Rio Santiago; dejaría de ser una casa de fin de semana para darle uso en forma permanente. Un espacio en planta baja inundable varias veces al año, sin ser intervenida, pasa a ser quincho para uso de familiares. Sobre la losa existente de hº aº en planta alta de 8x8 con dos escaleras (interior y exterior) apoyada sobre la medianera oeste, se proyectó la vivienda para una pareja transitando la etapa de la vida para el ocio. La panorámica de un paisaje singular, los lugares de guardado, y una tecnología rápida y liviana a fin de evitar altas cargas sobre la estructura existente constituyeron la paleta básica de diseño. El espacio es definido por el diseño estructural y viceversa: una viga antepecho metálica y espacial (que sirve como placard) resuelve la transición entre la estructura de hormigón existente y la cubierta liviana. La necesidad de colocar los puntos de apoyo al borde de la losa para maximizar superficie llevó a diluir los elementos portantes en una sucesión de perfiles t de 4 cm quitando peso visual, relacionando las dimensiones interiores con el paisaje. Tres filtros con el exterior regulan el interior: una tela mosquitero sujeta a los parantes de la estructura posibilita a la línea de carpinterías abrirse en épocas estivales y acondicionar pasivamente el interior; completa el sistema un plano de cortinas roller blackout para controlar el oscurecimiento.",
        programa: "Residencia permanente para dos personas",
        año: 2000,
        cliente: "Betom, CapTerre, Alternative",
        superficie: "total: 64m2, cubierta:57m2",
        asesores:" Ing. Aldo Parma, cálculo de estructuras.",
        colaboradores: "dibujos Martin Bravi, Franco Angeleri; maqueta, Flavio Di Bin",
        fotografias:"Hernan Vazquez / DEarquitectura",
        constructor:"Darío Gonzalez",
        imagenes: [
          {
            nombre: "c00-foto.jpg",
            id: 21
          },
          {
            nombre: "c00-foto.jpg",
            id: 22
          },
          {
            nombre: "c00-foto.jpg",
            id: 23
          },
          {
            nombre: "c00-foto.jpg",
            id: 24
          },
          {
            nombre: "c00-foto.jpg",
            id: 25
          }
        ]
      },
      {
        id:8,
        nombre: "Obra casa dos",
        autores: "Arq, Julia Deschamps - Fabio Estremera",
        ubicacion:"Arroyo doña flora, camino a club regatas La Plata, entrada n 18 s/n, Ensenada,Provincia de Buenos Aires, Argentina",
        descripcion:"Se trataba de una reforma y cambio de programa en una construcción existente de dos plantas sobre un terreno inundable a orillas del arroyo Doña Flora, en el delta del Rio Santiago; dejaría de ser una casa de fin de semana para darle uso en forma permanente. Un espacio en planta baja inundable varias veces al año, sin ser intervenida, pasa a ser quincho para uso de familiares. Sobre la losa existente de hº aº en planta alta de 8x8 con dos escaleras (interior y exterior) apoyada sobre la medianera oeste, se proyectó la vivienda para una pareja transitando la etapa de la vida para el ocio. La panorámica de un paisaje singular, los lugares de guardado, y una tecnología rápida y liviana a fin de evitar altas cargas sobre la estructura existente constituyeron la paleta básica de diseño. El espacio es definido por el diseño estructural y viceversa: una viga antepecho metálica y espacial (que sirve como placard) resuelve la transición entre la estructura de hormigón existente y la cubierta liviana. La necesidad de colocar los puntos de apoyo al borde de la losa para maximizar superficie llevó a diluir los elementos portantes en una sucesión de perfiles t de 4 cm quitando peso visual, relacionando las dimensiones interiores con el paisaje. Tres filtros con el exterior regulan el interior: una tela mosquitero sujeta a los parantes de la estructura posibilita a la línea de carpinterías abrirse en épocas estivales y acondicionar pasivamente el interior; completa el sistema un plano de cortinas roller blackout para controlar el oscurecimiento.",
        programa: "Residencia permanente para dos personas",
        año: 2000,
        cliente: "Betom, CapTerre, Alternative",
        superficie: "total: 64m2, cubierta:57m2",
        asesores:" Ing. Aldo Parma, cálculo de estructuras.",
        colaboradores: "dibujos Martin Bravi, Franco Angeleri; maqueta, Flavio Di Bin",
        fotografias:"Hernan Vazquez / DEarquitectura",
        constructor:"Darío Gonzalez",
        imagenes: [
          {
            nombre: "c00-foto.jpg",
            id: 21
          },
          {
            nombre: "c00-foto.jpg",
            id: 22
          },
          {
            nombre: "c00-foto.jpg",
            id: 23
          },
          {
            nombre: "c00-foto.jpg",
            id: 24
          },
          {
            nombre: "c00-foto.jpg",
            id: 25
          }
        ]
      },
      {
        id:9,
        nombre: "Estudio casa",
        autores: "Arq, Julia Deschamps - Fabio Estremera",
        ubicacion:"Arroyo doña flora, camino a club regatas La Plata, entrada n 18 s/n, Ensenada,Provincia de Buenos Aires, Argentina",
        descripcion:"Se trataba de una reforma y cambio de programa en una construcción existente de dos plantas sobre un terreno inundable a orillas del arroyo Doña Flora, en el delta del Rio Santiago; dejaría de ser una casa de fin de semana para darle uso en forma permanente. Un espacio en planta baja inundable varias veces al año, sin ser intervenida, pasa a ser quincho para uso de familiares. Sobre la losa existente de hº aº en planta alta de 8x8 con dos escaleras (interior y exterior) apoyada sobre la medianera oeste, se proyectó la vivienda para una pareja transitando la etapa de la vida para el ocio. La panorámica de un paisaje singular, los lugares de guardado, y una tecnología rápida y liviana a fin de evitar altas cargas sobre la estructura existente constituyeron la paleta básica de diseño. El espacio es definido por el diseño estructural y viceversa: una viga antepecho metálica y espacial (que sirve como placard) resuelve la transición entre la estructura de hormigón existente y la cubierta liviana. La necesidad de colocar los puntos de apoyo al borde de la losa para maximizar superficie llevó a diluir los elementos portantes en una sucesión de perfiles t de 4 cm quitando peso visual, relacionando las dimensiones interiores con el paisaje. Tres filtros con el exterior regulan el interior: una tela mosquitero sujeta a los parantes de la estructura posibilita a la línea de carpinterías abrirse en épocas estivales y acondicionar pasivamente el interior; completa el sistema un plano de cortinas roller blackout para controlar el oscurecimiento.",
        programa: "Residencia permanente para dos personas",
        año: 2000,
        cliente: "Betom, CapTerre, Alternative",
        superficie: "total: 64m2, cubierta:57m2",
        asesores:" Ing. Aldo Parma, cálculo de estructuras.",
        colaboradores: "dibujos Martin Bravi, Franco Angeleri; maqueta, Flavio Di Bin",
        fotografias:"Hernan Vazquez / DEarquitectura",
        constructor:"Darío Gonzalez",
        imagenes: [
          {
            nombre: "c00-foto.jpg",
            id: 21
          },
          {
            nombre: "c00-foto.jpg",
            id: 22
          },
          {
            nombre: "c00-foto.jpg",
            id: 23
          },
          {
            nombre: "c00-foto.jpg",
            id: 24
          },
          {
            nombre: "c00-foto.jpg",
            id: 25
          }
        ]
      },
      {
        id:10,
        nombre: "Edificio de 44",
        autores: "Arq, Julia Deschamps - Fabio Estremera",
        ubicacion:"Arroyo doña flora, camino a club regatas La Plata, entrada n 18 s/n, Ensenada,Provincia de Buenos Aires, Argentina",
        descripcion:"Se trataba de una reforma y cambio de programa en una construcción existente de dos plantas sobre un terreno inundable a orillas del arroyo Doña Flora, en el delta del Rio Santiago; dejaría de ser una casa de fin de semana para darle uso en forma permanente. Un espacio en planta baja inundable varias veces al año, sin ser intervenida, pasa a ser quincho para uso de familiares. Sobre la losa existente de hº aº en planta alta de 8x8 con dos escaleras (interior y exterior) apoyada sobre la medianera oeste, se proyectó la vivienda para una pareja transitando la etapa de la vida para el ocio. La panorámica de un paisaje singular, los lugares de guardado, y una tecnología rápida y liviana a fin de evitar altas cargas sobre la estructura existente constituyeron la paleta básica de diseño. El espacio es definido por el diseño estructural y viceversa: una viga antepecho metálica y espacial (que sirve como placard) resuelve la transición entre la estructura de hormigón existente y la cubierta liviana. La necesidad de colocar los puntos de apoyo al borde de la losa para maximizar superficie llevó a diluir los elementos portantes en una sucesión de perfiles t de 4 cm quitando peso visual, relacionando las dimensiones interiores con el paisaje. Tres filtros con el exterior regulan el interior: una tela mosquitero sujeta a los parantes de la estructura posibilita a la línea de carpinterías abrirse en épocas estivales y acondicionar pasivamente el interior; completa el sistema un plano de cortinas roller blackout para controlar el oscurecimiento.",
        programa: "Residencia permanente para dos personas",
        año: 2000,
        cliente: "Betom, CapTerre, Alternative",
        superficie: "total: 64m2, cubierta:57m2",
        asesores:" Ing. Aldo Parma, cálculo de estructuras.",
        colaboradores: "dibujos Martin Bravi, Franco Angeleri; maqueta, Flavio Di Bin",
        fotografias:"Hernan Vazquez / DEarquitectura",
        constructor:"Darío Gonzalez",
        imagenes: [
          {
            nombre: "c00-foto.jpg",
            id: 21
          },
          {
            nombre: "c00-foto.jpg",
            id: 22
          },
          {
            nombre: "c00-foto.jpg",
            id: 23
          },
          {
            nombre: "c00-foto.jpg",
            id: 24
          },
          {
            nombre: "c00-foto.jpg",
            id: 25
          }
        ]
      },
      {
        id:11,
        nombre: "Casa city bell",
        autores: "Arq, Julia Deschamps - Fabio Estremera",
        ubicacion:"Arroyo doña flora, camino a club regatas La Plata, entrada n 18 s/n, Ensenada,Provincia de Buenos Aires, Argentina",
        descripcion:"Se trataba de una reforma y cambio de programa en una construcción existente de dos plantas sobre un terreno inundable a orillas del arroyo Doña Flora, en el delta del Rio Santiago; dejaría de ser una casa de fin de semana para darle uso en forma permanente. Un espacio en planta baja inundable varias veces al año, sin ser intervenida, pasa a ser quincho para uso de familiares. Sobre la losa existente de hº aº en planta alta de 8x8 con dos escaleras (interior y exterior) apoyada sobre la medianera oeste, se proyectó la vivienda para una pareja transitando la etapa de la vida para el ocio. La panorámica de un paisaje singular, los lugares de guardado, y una tecnología rápida y liviana a fin de evitar altas cargas sobre la estructura existente constituyeron la paleta básica de diseño. El espacio es definido por el diseño estructural y viceversa: una viga antepecho metálica y espacial (que sirve como placard) resuelve la transición entre la estructura de hormigón existente y la cubierta liviana. La necesidad de colocar los puntos de apoyo al borde de la losa para maximizar superficie llevó a diluir los elementos portantes en una sucesión de perfiles t de 4 cm quitando peso visual, relacionando las dimensiones interiores con el paisaje. Tres filtros con el exterior regulan el interior: una tela mosquitero sujeta a los parantes de la estructura posibilita a la línea de carpinterías abrirse en épocas estivales y acondicionar pasivamente el interior; completa el sistema un plano de cortinas roller blackout para controlar el oscurecimiento.",
        programa: "Residencia permanente para dos personas",
        año: 2000,
        cliente: "Betom, CapTerre, Alternative",
        superficie: "total: 64m2, cubierta:57m2",
        asesores:" Ing. Aldo Parma, cálculo de estructuras.",
        colaboradores: "dibujos Martin Bravi, Franco Angeleri; maqueta, Flavio Di Bin",
        fotografias:"Hernan Vazquez / DEarquitectura",
        constructor:"Darío Gonzalez",
        imagenes: [
          {
            nombre: "c00-foto.jpg",
            id: 21
          },
          {
            nombre: "c00-foto.jpg",
            id: 22
          },
          {
            nombre: "c00-foto.jpg",
            id: 23
          },
          {
            nombre: "c00-foto.jpg",
            id: 24
          },
          {
            nombre: "c00-foto.jpg",
            id: 25
          }
        ]
      },
      
    ],
  };
  /*IMP Siempre value es objeto, siempre el AppContext.Consume, recive una funcion, 
  y como parametro el value
  */
  render() {
    return (
      <AppContext.Provider value={this.state}> 
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
