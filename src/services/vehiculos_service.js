export const retornarVehiculos = () => {
    const infoVehiculos= [
        {
            id: 1,
            marca: "Audi",
            modelo: "A3",
            segmento: "Sedan, Convertible",
            color: "Azul",
            ano: "2015",
            cantidad: "1",
            valor: "48.000.000"
        },
        {
            id: 2,
            marca: "Chevrolet",
            modelo: "Campero Zen++",
            segmento: "Captiva",
            color: "Gris",
            ano: "2016",
            cantidad: "1",
            valor: "23.200.000"
        },
        {
            id: 3,
            marca: "Mercedes",
            modelo: "A4",
            segmento: "AMG",
            color: "Plata",
            ano: "2020",
            cantidad: "2",
            valor: "33.700.000"
        },
        {
            id: 4,
            marca: "Audi",
            modelo: "A4",
            segmento: "Sedan, Wagon",
            color: "Blanco",
            ano: "2001",
            cantidad: "1",
            valor: "18.000.000"
        },
        {
            id: 5,
            marca: "Renault",
            modelo: "Zen+",
            segmento: "duster",
            color: "Negro",
            ano: "2019",
            cantidad: "1",
            valor: "29.400.000"
        },
        {
            id: 6,
            marca: "Audi",
            modelo: "A5",
            segmento: "Coupe",
            color: "Gris",
            ano: "2008",
            cantidad: "1",
            valor: "26.900.000"
        },
        {
            id: 7,
            marca: "Audi",
            modelo: "A5 Sport",
            segmento: "Convertible, Coupe",
            color: "Rojo",
            ano: "2017",
            cantidad: "1",
            valor: "62.000.000"
        },
        {
            id: 8,
            marca: "mercedes",
            modelo: "SLK",
            segmento: "Convertible",
            color: "Blanco",
            ano: "2020",
            cantidad: "1",
            valor: "73.200.000"
        },
        {
            id: 9,
            marca: "Nissan",
            modelo: "R8",
            segmento: "Campero",
            color: "Negro",
            ano: "2008",
            cantidad: "1",
            valor: "14.000.000"
        },
        {
            id: 10,
            marca: "Renault",
            modelo: "310-H ",
            segmento: "Duster",
            color: "Azul",
            ano: "2019",
            cantidad: "1",
            valor: "21.700.000"
        },
        {
            id: 11,
            marca: "Audi",
            modelo: "Cabriolet",
            segmento: "Convertible, Coupe",
            color: "Rojo",
            ano: "1996",
            cantidad: "1",
            valor: "64.800.000"
        },
        {
            id: 12,
            marca: "Chevrolet",
            modelo: "Q7",
            segmento: "SUV",
            color: "Plata",
            ano: "2015",
            cantidad: "2",
            valor: "17.500.000"
        },
        {
            id: 13,
            marca: "Audi",
            modelo: "Q8",
            segmento: "SUV",
            color: "Blanco",
            ano: "2019",
            cantidad: "1",
            valor: "33.200.000"
        },
        {
            id: 14,
            marca: "Audi",
            modelo: "A3",
            segmento: "Sedan, Convertible",
            color: "Verde",
            ano: "2018",
            cantidad: "1",
            valor: "58.700.000"
        },
        {
            id: 15,
            marca: "Chevrolet",
            modelo: "Campero Zen++",
            segmento: "Captiva",
            color: "Gris Oscuro",
            ano: "2019",
            cantidad: "1",
            valor: "38.200.000"
        },
        {
            id: 16,
            marca: "Mercedes",
            modelo: "A4",
            segmento: "AMG",
            color: "Blanco",
            ano: "2021",
            cantidad: "1",
            valor: "53.800.000"
        },
        {
            id: 17,
            marca: "Audi",
            modelo: "A4",
            segmento: "Sedan, Wagon",
            color: "Negro",
            ano: "2021",
            cantidad: "1",
            valor: "28.200.000"
        },
        {
            id: 18,
            marca: "Renault",
            modelo: "Zen+",
            segmento: "duster",
            color: "Azul",
            ano: "2019",
            cantidad: "1",
            valor: "31.000.000"
        },
        {
            id: 19,
            marca: "Audi",
            modelo: "A5",
            segmento: "Coupe",
            color: "Blanco",
            ano: "2019",
            cantidad: "1",
            valor: "23.400.000"
        },
        {
            id: 20,
            marca: "Audi",
            modelo: "A5 Sport",
            segmento: "Convertible, Coupe",
            color: "Azul",
            ano: "2020",
            cantidad: "1",
            valor: "63.200.000"
        },
        {
            id: 21,
            marca: "mercedes",
            modelo: "SLK",
            segmento: "Convertible",
            color: "Verde",
            ano: "2019",
            cantidad: "1",
            valor: "61.000.000"
        },
        {
            id: 22,
            marca: "Nissan",
            modelo: "R8",
            segmento: "Campero",
            color: "Plata",
            ano: "2019",
            cantidad: "1",
            valor: "30.000.000"
        },
        {
            id: 23,
            marca: "Renault",
            modelo: "310-H ",
            segmento: "Duster",
            color: "Amarillo",
            ano: "2020",
            cantidad: "1",
            valor: "21.000.000"
        },
        {
            id: 24,
            marca: "Audi",
            modelo: "Cabriolet",
            segmento: "Convertible, Coupe",
            color: "Amarillo",
            ano: "2019",
            cantidad: "1",
            valor: "53.200.000"
        },
        {
            id: 25,
            marca: "Chevrolet",
            modelo: "Q7",
            segmento: "SUV",
            color: "Blanco",
            ano: "2019",
            cantidad: "1",
            valor: "27.600.000"
        },
        {
            id: 26,
            marca: "Audi",
            modelo: "Q8",
            segmento: "SUV",
            color: "Negro",
            ano: "2021",
            cantidad: "1",
            valor: "43.200.000"
        }
    ];
    return infoVehiculos;
}
