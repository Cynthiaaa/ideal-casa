var listingData  = [
    {
    address: 'Carrer Barcelona 20',
    neighbourhood: "Barrio Garcia", 
    city: 'L Hospitalet de Llobregat', 
    agency: 'Rocio from Agencia Gaudi',
    agencyImg: 'https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    date: 'Posted on 02/04/2019',
    rooms: 3, 
    bathroom: 1,
    price: 1300, 
    floorspace: 86, 
    extras:[
            'ascensor', 
            'piscina'
        ],
    homeType: 'Casa', 
    equipment: 'Solo cocina equipada', 
    image: 'https://i.pinimg.com/originals/50/ce/71/50ce7129b450475210f7808abe6aecfb.jpg'
    },
    {
    address: 'Carrer Balmes 120', 
    neighbourhood: "Barrio Eixample", 
    city: 'Barcelona', 
    agency: 'Valerio from Agencia Sagrada',
    agencyImg: 'https://tinyfac.es/data/avatars/E0B4CAB3-F491-4322-BEF2-208B46748D4A-200w.jpeg',
    date: 'Posted on 28/03/2019',
    rooms: 1, 
    bathroom: 3,
    price: 1800, 
    floorspace: 40, 
    extras:[
            'ascensor', 
            'terraza'
        ],
    homeType: 'Apartamiento', 
    equipment: 'Solo cocina equipada', 
    image: 'https://i.pinimg.com/originals/ca/f5/07/caf50744c28e3f9ef79095aa84388148.jpg'
    },
    {
    address: 'Carrer de Gracia 234', 
    neighbourhood: "Barrio Eixample", 
    city: 'Sabadell', 
    agency: 'Rocio from Agencia Gaudi',
    agencyImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    date: 'Posted on 25/03/2019',
    rooms: 0, 
    bathroom: 1,
    price: 900, 
    floorspace: 88, 
    extras:[ 
        'piscina', 
        'duplex'
    ],
    homeType: 'Casa', 
    equipment: 'Amueblado', 
    image: 'https://i.pinimg.com/originals/03/c6/63/03c663ecee5aa8fa032fdc630e9c4735.jpg'
},
{
    address: 'Carrer del Aeropuerto 318', 
    neighbourhood: "Barrio Monjuic", 
    city: 'El Prat de Llobregat', 
    agency: 'Valerio from Agencia Sagrada',
    agencyImg: 'https://tinyfac.es/data/avatars/E0B4CAB3-F491-4322-BEF2-208B46748D4A-200w.jpeg',
    date: 'Posted on 21/03/2019',
    rooms: 4, 
    bathroom: 2,
    price: 1100, 
    floorspace: 64, 
    extras:[ 
        'piscina', 
        'duplex'
    ],
    homeType: 'Casa', 
    equipment: 'Amueblado', 
    image: 'https://static.dezeen.com/uploads/2018/08/high-desert-modern-deforest-architects-architecture-house-oregon-usa_dezeen_2364_hero-852x479.jpg'
},
{
    address: 'Carrer Balmes 120', 
    neighbourhood: "Barrio Eixample", 
    city: 'Barcelona', 
    agency: 'Valerio from Agencia Sagrada',
    agencyImg: 'https://tinyfac.es/data/avatars/E0B4CAB3-F491-4322-BEF2-208B46748D4A-200w.jpeg',
    date: 'Posted on 28/03/2019',
    rooms: 2, 
    bathroom: 1,
    price: 1800, 
    floorspace: 40, 
    extras:[
        'ascensor', 
        'terraza'
    ],
    homeType: 'Apartamiento', 
    equipment: 'Solo cocina equipada', 
    image: 'https://www.impressiveinteriordesign.com/diverse/spanisharch/32270053591.jpg'
},
{
    address: 'Carrer de Gracia 234', 
    neighbourhood: "Barrio Eixample", 
    city: 'Sabadell', 
    agency: 'Rocio from Agencia Gaudi',
    agencyImg: 'https://images.pexels.com/photos/227294/pexels-photo-227294.jpeg?h=350&auto=compress&cs=tinysrgb',
    date: 'Posted on 25/03/2019',
    rooms: 2, 
    bathroom: 3,
    price: 900, 
    floorspace: 88, 
    extras:[ 
    'piscina', 
    'duplex'
    ],
    homeType: 'Casa', 
    equipment: 'Amueblado', 
    image: 'https://honka.com/wp-content/uploads/2018/02/moderni-hirsitalo-vista-keittio.jpg'
},
{
    address: 'Carrer del Aeropuerto 318', 
    neighbourhood: "Barrio Monjuic", 
    city: 'El Prat de Llobregat', 
    agency: 'Valerio from Agencia Sagrada',
    agencyImg: 'https://tinyfac.es/data/avatars/E0B4CAB3-F491-4322-BEF2-208B46748D4A-200w.jpeg',
    date: 'Posted on 21/03/2019',
    rooms: 1, 
    bathroom: 2,
    price: 1455, 
    floorspace: 70, 
    extras:[ 
        'piscina', 
        'duplex'
    ],
    homeType: 'Casa', 
    equipment: 'Amueblado', 
    image: 'https://i.pinimg.com/originals/19/62/46/19624677c2cde98f3034352902214aeb.jpg'
}, 
{
    address: 'Carrer del Aeropuerto 318', 
    neighbourhood: "Barrio Monjuic", 
    city: 'El Prat de Llobregat', 
    agency: 'Valerio from Agencia Sagrada',
    agencyImg: 'https://tinyfac.es/data/avatars/E0B4CAB3-F491-4322-BEF2-208B46748D4A-200w.jpeg',
    date: 'Posted on 21/03/2019',
    rooms: 1, 
    bathroom: 2,
    price: 1455, 
    floorspace: 70, 
    extras:[ 
        'piscina', 
        'duplex'
    ],
    homeType: 'Casa', 
    equipment: 'Amueblado', 
    image: 'https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2016/03/0316_realestate_modern01_gcoada_oneuseonly.jpg'
}  
]

export default listingData;