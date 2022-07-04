export const productsInMemory = [
    {
        id: 1,
        name: "Babka płesznik ziarno",
        slug: "babka-plesznik-ziarno",
        createdAt: "2021-06-22 16:52:10",
    },
    {
        id: 2,
        name: "Babka jajowata łuska",
        slug: "babka-jajowata-luska",
        createdAt: "2021-06-22 16:54:10",
    },
    {
        id: 3,
        name: "Ziarno kakaowca",
        slug: "ziarno-kakaowca",
        createdAt: "2021-06-22 16:57:10",
    },
    {
        id: 4,
        name: "Cebula prażona",
        slug: "cebula-prazona",
        createdAt: "2021-06-22 16:58:10",
    },
    {
        id: 5,
        name: "Ananas kostka mix",
        slug: "ananas-kostka-mix",
        createdAt: "2021-06-22 16:59:10",
    },
    {
        id: 6,
        name: "Baobab",
        slug: "baobab",
        createdAt: "2021-06-22 17:10:10",
    },
]

export const productMock = [
    {
        id: 1,
        name: "product mock",
        slug: "product-mock",
        createdAt: "2021-06-22",
    }
]


const labelPositions = [
    {
        id: 1,
        attr: "<p style='background-color: red; color: white'>{product.name}</p>",
    },
    {
        attr: "<p style='background-color: green; color: white'>{product.description}</p>",
    },
    {
        attr: "<p style='background-color: orange; color: white'>{product_marking.bestBefore}</p>",
    },
    {
        attr: "<p style='background-color: black; color: white'>{product_details.title[0]}</p>",
    },
    {
        attr: "<p style='background-color: blue; color: white'>{product_details.title[1]}</p>",
    },
]

const labels = {
    product: {
        name: "Babka jajowata łuska",
        description: "sposób użycia: 1/2 łyżki na 100ml wody",
    },
    product_marking: {
        bestBefore: "09/2023",
    },
    product_details: [
        {
            title: "Zawiera C02",
        },
        {
            title: "Może zawierać łupiny",
        },
    ],
}