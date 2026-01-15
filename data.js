// Seasonal food data for Spain
// Each food has an array of months when it's in season (0 = January, 11 = December)

const MONTHS = [
    { id: 0, name: 'Enero', season: 'winter' },
    { id: 1, name: 'Febrero', season: 'winter' },
    { id: 2, name: 'Marzo', season: 'spring' },
    { id: 3, name: 'Abril', season: 'spring' },
    { id: 4, name: 'Mayo', season: 'spring' },
    { id: 5, name: 'Junio', season: 'summer' },
    { id: 6, name: 'Julio', season: 'summer' },
    { id: 7, name: 'Agosto', season: 'summer' },
    { id: 8, name: 'Septiembre', season: 'autumn' },
    { id: 9, name: 'Octubre', season: 'autumn' },
    { id: 10, name: 'Noviembre', season: 'autumn' },
    { id: 11, name: 'Diciembre', season: 'winter' }
];

// Fruits with their season months and emoji
const FRUITS = {
    'Aguacate': { months: [2, 3, 4, 5], icon: '🥑' },
    'Albaricoque': { months: [4, 5, 6, 7], icon: '🍑' },
    'Caqui': { months: [9, 10, 11], icon: '🍊' },
    'Castana': { months: [9, 10, 11], icon: '🌰' },
    'Cereza': { months: [4, 5, 6], icon: '🍒' },
    'Ciruela': { months: [5, 6, 7, 8], icon: '🟣' },
    'Fresa': { months: [1, 2, 3, 4, 5], icon: '🍓' },
    'Granada': { months: [8, 9, 10, 11], icon: '🔴' },
    'Higo': { months: [6, 7, 8, 9], icon: '🟤' },
    'Kiwi': { months: [0, 1, 2, 9, 10, 11], icon: '🥝' },
    'Limon': { months: [0, 1, 2, 3, 10, 11], icon: '🍋' },
    'Mandarina': { months: [0, 1, 10, 11], icon: '🍊' },
    'Manzana': { months: [0, 1, 7, 8, 9, 10, 11], icon: '🍎' },
    'Melocoton': { months: [5, 6, 7, 8], icon: '🍑' },
    'Melon': { months: [5, 6, 7, 8], icon: '🍈' },
    'Membrillo': { months: [8, 9, 10], icon: '🍐' },
    'Naranja': { months: [0, 1, 2, 10, 11], icon: '🍊' },
    'Nectarina': { months: [5, 6, 7, 8], icon: '🍑' },
    'Nispero': { months: [3, 4, 5], icon: '🟠' },
    'Pera': { months: [0, 1, 7, 8, 9, 10, 11], icon: '🍐' },
    'Pomelo': { months: [0, 1, 11], icon: '🍊' },
    'Sandia': { months: [5, 6, 7, 8], icon: '🍉' },
    'Uva': { months: [6, 7, 8, 9, 10], icon: '🍇' }
};

// Vegetables with their season months and emoji
const VEGETABLES = {
    'Acelga': { months: [0, 1, 2, 8, 9, 10, 11], icon: '🥬' },
    'Alcachofa': { months: [0, 1, 2, 10, 11], icon: '🌿' },
    'Apio': { months: [0, 1, 11], icon: '🥬' },
    'Berenjena': { months: [5, 6, 7, 8], icon: '🍆' },
    'Boniato': { months: [8, 9, 10], icon: '🍠' },
    'Brocoli': { months: [0, 1, 9, 10, 11], icon: '🥦' },
    'Calabacin': { months: [3, 4, 5, 6, 7, 8], icon: '🥒' },
    'Calabaza': { months: [6, 7, 8, 9, 10], icon: '🎃' },
    'Cebolla': { months: [4, 5, 6], icon: '🧅' },
    'Cebolleta': { months: [3, 4, 5], icon: '🧅' },
    'Col': { months: [0, 8, 9, 10, 11], icon: '🥬' },
    'Coliflor': { months: [0, 1, 9, 10, 11], icon: '🥬' },
    'Escarola': { months: [0, 11], icon: '🥗' },
    'Esparragos': { months: [1, 2, 3, 4], icon: '🌿' },
    'Espinaca': { months: [0, 1, 2, 10, 11], icon: '🥬' },
    'Guisantes': { months: [1, 2, 3, 4], icon: '🟢' },
    'Habas': { months: [2, 3, 4], icon: '🫛' },
    'Judias verdes': { months: [3, 4, 5, 6, 7], icon: '🫛' },
    'Lechuga': { months: [2, 3, 4, 5, 6], icon: '🥬' },
    'Maiz': { months: [5, 6, 7, 8], icon: '🌽' },
    'Nabo': { months: [0, 9, 10, 11], icon: '🥔' },
    'Pepino': { months: [4, 5, 6, 7], icon: '🥒' },
    'Pimiento': { months: [4, 5, 6, 7, 8], icon: '🫑' },
    'Puerro': { months: [0, 1, 9, 10, 11], icon: '🧅' },
    'Rabano': { months: [2, 3], icon: '🔴' },
    'Setas': { months: [8, 9, 10], icon: '🍄' },
    'Tomate': { months: [5, 6, 7, 8], icon: '🍅' },
    'Zanahoria': { months: [2, 3, 4], icon: '🥕' }
};

// Fish with their season months and emoji (based on Spanish fishing seasons)
const FISH = {
    'Anchoa': { months: [3, 4, 5, 6], icon: '🐟' },
    'Atun rojo': { months: [4, 5, 6, 7, 8], icon: '🐟' },
    'Bacalao': { months: [0, 1, 2, 10, 11], icon: '🐟' },
    'Besugo': { months: [0, 1, 11], icon: '🐟' },
    'Bonito': { months: [5, 6, 7, 8], icon: '🐟' },
    'Caballa': { months: [1, 2, 3, 4, 5], icon: '🐟' },
    'Calamar': { months: [0, 1, 9, 10, 11], icon: '🦑' },
    'Chipiron': { months: [5, 6, 7, 8], icon: '🦑' },
    'Dorada': { months: [8, 9, 10, 11], icon: '🐟' },
    'Gamba roja': { months: [0, 1, 5, 6, 7, 11], icon: '🦐' },
    'Langostino': { months: [5, 6, 7, 8], icon: '🦐' },
    'Lubina': { months: [0, 1, 2, 9, 10, 11], icon: '🐟' },
    'Mejillon': { months: [8, 9, 10, 11, 0, 1], icon: '🦪' },
    'Merluza': { months: [0, 1, 2, 3, 5, 6], icon: '🐟' },
    'Pulpo': { months: [6, 7, 8, 9], icon: '🐙' },
    'Rape': { months: [0, 1, 2, 3], icon: '🐟' },
    'Rodaballo': { months: [0, 1, 2, 3, 10, 11], icon: '🐟' },
    'Salmon': { months: [2, 3, 4, 5, 9, 10], icon: '🐟' },
    'Salmonete': { months: [7, 8, 9, 10], icon: '🐟' },
    'Sardina': { months: [4, 5, 6, 7, 8], icon: '🐟' },
    'Sepia': { months: [2, 3, 4, 5], icon: '🦑' },
    'Trucha': { months: [1, 2, 3, 4, 5], icon: '🐟' }
};

// Meat with their season months and emoji (focusing on game and seasonal availability)
const MEAT = {
    'Cerdo iberico': { months: [10, 11, 0, 1, 2], icon: '🐖' },
    'Codorniz': { months: [9, 10, 11, 0, 1], icon: '🐦' },
    'Conejo': { months: [9, 10, 11, 0, 1, 2], icon: '🐰' },
    'Cordero lechal': { months: [0, 1, 2, 3, 11], icon: '🐑' },
    'Corzo': { months: [3, 4, 5, 8, 9], icon: '🦌' },
    'Faisán': { months: [10, 11, 0, 1], icon: '🐦' },
    'Jabali': { months: [9, 10, 11, 0, 1, 2], icon: '🐗' },
    'Liebre': { months: [9, 10, 11, 0, 1], icon: '🐰' },
    'Pato': { months: [9, 10, 11, 0, 1], icon: '🦆' },
    'Pavo': { months: [10, 11, 0], icon: '🦃' },
    'Perdiz': { months: [9, 10, 11, 0, 1], icon: '🐦' },
    'Pollo de corral': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🐔' },
    'Ternera gallega': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🐄' },
    'Venado': { months: [9, 10, 11, 0, 1], icon: '🦌' }
};

// Legumes - dried legumes are available year-round, shown with harvest peak in summer/autumn
const LEGUMES = {
    'Alubia blanca': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🫘' },
    'Alubia roja': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🫘' },
    'Garbanzo': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🫘' },
    'Guisante seco': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🟢' },
    'Haba seca': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🫛' },
    'Judia pinta': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🫘' },
    'Lenteja': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🫘' },
    'Lenteja pardina': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🫘' },
    'Soja': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🫘' }
};

// Cereals - dried cereals are available year-round
const CEREALS = {
    'Arroz': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🍚' },
    'Avena': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🌾' },
    'Centeno': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🌾' },
    'Cebada': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🌾' },
    'Espelta': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🌾' },
    'Maiz': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🌽' },
    'Mijo': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🌾' },
    'Quinoa': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🌾' },
    'Trigo': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🌾' },
    'Trigo sarraceno': { months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], icon: '🌾' }
};

// Get foods by their phase in a given month
function getFoodsByPhase(month) {
    const result = {
        fruits: { starting: [], peak: [], ending: [] },
        vegetables: { starting: [], peak: [], ending: [] },
        fish: { starting: [], peak: [], ending: [] },
        meat: { starting: [], peak: [], ending: [] },
        legumes: { starting: [], peak: [], ending: [] },
        cereals: { starting: [], peak: [], ending: [] }
    };

    const prevMonth = (month - 1 + 12) % 12;
    const nextMonth = (month + 1) % 12;

    // Helper function to process a category
    function processCategory(dataSource, categoryKey) {
        for (const [name, data] of Object.entries(dataSource)) {
            if (!data.months.includes(month)) continue;

            const inPrev = data.months.includes(prevMonth);
            const inNext = data.months.includes(nextMonth);
            const food = { name, icon: data.icon };

            if (!inPrev && inNext) {
                result[categoryKey].starting.push(food);
            } else if (inPrev && !inNext) {
                result[categoryKey].ending.push(food);
            } else {
                result[categoryKey].peak.push(food);
            }
        }
    }

    // Process all categories
    processCategory(FRUITS, 'fruits');
    processCategory(VEGETABLES, 'vegetables');
    processCategory(FISH, 'fish');
    processCategory(MEAT, 'meat');
    processCategory(LEGUMES, 'legumes');
    processCategory(CEREALS, 'cereals');

    // Sort alphabetically
    for (const type of ['fruits', 'vegetables', 'fish', 'meat', 'legumes', 'cereals']) {
        for (const phase of ['starting', 'peak', 'ending']) {
            result[type][phase].sort((a, b) => a.name.localeCompare(b.name, 'es'));
        }
    }

    return result;
}

// Recipes database
// Ingredients should match names from FRUITS and VEGETABLES
const RECIPES = [
    {
        name: 'Gazpacho andaluz',
        ingredients: ['Tomate', 'Pepino', 'Pimiento'],
        time: 20,
        icon: '🍅',
        url: 'https://www.directoalpaladar.com/recetas-de-sopas-y-cremas/receta-de-gazpacho-andaluz-tradicional'
    },
    {
        name: 'Crema de calabaza',
        ingredients: ['Calabaza', 'Puerro', 'Zanahoria'],
        time: 35,
        icon: '🎃',
        url: 'https://www.directoalpaladar.com/curso-de-cocina/mis-siete-trucos-para-hacer-la-mejor-crema-de-calabaza'
    },
    {
        name: 'Pisto manchego',
        ingredients: ['Calabacin', 'Pimiento', 'Tomate', 'Berenjena'],
        time: 45,
        icon: '🫑',
        url: 'https://www.directoalpaladar.com/recetas-de-legumbres-y-verduras/pisto-manchego-receta'
    },
    {
        name: 'Alcachofas a la plancha',
        ingredients: ['Alcachofa', 'Limon'],
        time: 25,
        icon: '🌿',
        url: 'https://www.directoalpaladar.com/recetas-de-legumbres-y-verduras/alcachofas-a-plancha-mejor-receta-para-disfrutarlas-su-plenitud'
    },
    {
        name: 'Esparragos con jamon',
        ingredients: ['Esparragos'],
        time: 20,
        icon: '🌿',
        url: 'https://www.directoalpaladar.com/recetas-de-legumbres-y-verduras/esparragos-trigueros-jamon-freidora-aceite-se-hacen-5-minutos-estan-que-te-mueres'
    },
    {
        name: 'Revuelto de setas',
        ingredients: ['Setas'],
        time: 15,
        icon: '🍄',
        url: 'https://www.directoalpaladar.com/recetas-de-huevos-y-tortillas/revuelto-setas-receta-inspiracion-vasca-facil-como-sabrosa'
    },
    {
        name: 'Tarta de manzana',
        ingredients: ['Manzana'],
        time: 50,
        icon: '🍎',
        url: 'https://www.directoalpaladar.com/postres/tarta-manzana-abuela-receta-que-te-transportara-tu-infancia'
    },
    {
        name: 'Fresas con nata',
        ingredients: ['Fresa'],
        time: 10,
        icon: '🍓',
        url: 'https://www.directoalpaladar.com/postres/fresas-romanoff-receta-facil-elegante-postre-frances-historia-que-eleva-clasicas-fresas-nata'
    },
    {
        name: 'Ensalada de espinacas y pera',
        ingredients: ['Espinaca', 'Pera'],
        time: 15,
        icon: '🥬',
        url: 'https://www.directoalpaladar.com/burgodeariaslingote/ensalada-de-espinacas-orejones-pera-caramelizada-burgo-de-arias-lingote-salteado-al-wok-y-nueces-con-alino-de-miel'
    },
    {
        name: 'Brocoli al vapor con limon',
        ingredients: ['Brocoli', 'Limon'],
        time: 15,
        icon: '🥦',
        url: 'https://www.directoalpaladar.com/recetas-vegetarianas/brocoli-al-vapor-con-alino-de-tahini-y-limon-receta-ligera'
    },
    {
        name: 'Sandia con queso feta',
        ingredients: ['Sandia'],
        time: 10,
        icon: '🍉',
        url: 'https://www.directoalpaladar.com/recetas-de-ensaladas/ensalada-mediterranea-de-sandia-y-queso-feta-receta'
    },
    {
        name: 'Guisantes con jamon',
        ingredients: ['Guisantes'],
        time: 25,
        icon: '🟢',
        url: 'https://www.directoalpaladar.com/recetas-de-legumbres-y-verduras/mejor-receta-guisantes-jamon-para-cena-ligera'
    },
    {
        name: 'Crema de habas a la menta',
        ingredients: ['Habas'],
        time: 20,
        icon: '🫛',
        url: 'https://www.directoalpaladar.com/recetas-de-legumbres-y-verduras/crema-de-habas-a-la-menta-receta-vegetariana'
    },
    {
        name: 'Berenjenas rellenas',
        ingredients: ['Berenjena', 'Tomate', 'Pimiento'],
        time: 45,
        icon: '🍆',
        url: 'https://www.directoalpaladar.com/recetas-de-legumbres-y-verduras/berenjenas-rellenas-carne-gratinadas-horno-nuestra-mejor-receta'
    },
    {
        name: 'Ensalada de melocoton',
        ingredients: ['Melocoton', 'Lechuga'],
        time: 15,
        icon: '🍑',
        url: 'https://www.directoalpaladar.com/recetas-de-ensaladas/ensalada-de-jamon-serrano-y-melocotones-marinados-receta'
    },
    {
        name: 'Cerezas al vino',
        ingredients: ['Cereza'],
        time: 20,
        icon: '🍒',
        url: 'https://www.directoalpaladar.com/postres/receta-de-cerezas-al-vino-con-tejas-de-sesamo'
    },
    {
        name: 'Tortilla de calabacin',
        ingredients: ['Calabacin', 'Cebolla'],
        time: 25,
        icon: '🥒',
        url: 'https://www.directoalpaladar.com/recetas-de-huevos-y-tortillas/tortillitas-de-calabacin-receta'
    },
    {
        name: 'Crema de puerros',
        ingredients: ['Puerro'],
        time: 30,
        icon: '🧅',
        url: 'https://www.directoalpaladar.com/recetas-de-sopas-y-cremas/receta-crema-puerros-plato-cuchara-calentito-reconfortante-ideal-para-hora-cena'
    },
    {
        name: 'Ensalada de granada',
        ingredients: ['Granada', 'Lechuga'],
        time: 15,
        icon: '🔴',
        url: 'https://www.directoalpaladar.com/recetas-de-ensaladas/ensalada-de-lechugas-variadas-con-granada-y-vinagreta-de-perejil-receta'
    },
    {
        name: 'Coliflor gratinada',
        ingredients: ['Coliflor'],
        time: 35,
        icon: '🥬',
        url: 'https://www.directoalpaladar.com/recetas-de-legumbres-y-verduras/coliflor-gratinada-al-horno-queso-receta-sencilla-para-enamorarte-esta-saludable-verdura'
    },
    {
        name: 'Acelgas rehogadas',
        ingredients: ['Acelga'],
        time: 20,
        icon: '🥬',
        url: 'https://www.directoalpaladar.com/recetas-de-legumbres-y-verduras/como-hacer-acelgas-rehogadas-receta-facil-para-resolver-primer-plato'
    },
    {
        name: 'Judias verdes con tomate',
        ingredients: ['Judias verdes', 'Tomate'],
        time: 30,
        icon: '🫛',
        url: 'https://www.directoalpaladar.com/recetas-vegetarianas/judias-verdes-tomate-receta-que-hace-mi-madre-tambien-hago-yo-casa-para-disfrutar-esta-legumbre'
    },
    {
        name: 'Higos con queso',
        ingredients: ['Higo'],
        time: 10,
        icon: '🟤',
        url: 'https://www.directoalpaladar.com/recetas-de-aperitivos/higos-queso-cabra-azul-miel-nueces-tomillo-aperitivo-facil-sabrosisimo-para-picoteo-temporada'
    },
    {
        name: 'Smoothie de kiwi',
        ingredients: ['Kiwi', 'Naranja'],
        time: 5,
        icon: '🥝',
        url: 'https://www.directoalpaladar.com/recetario/smoothie-de-kiwi-aguacate-y-pera-receta-saludable'
    },
    {
        name: 'Boniato asado',
        ingredients: ['Boniato'],
        time: 45,
        icon: '🍠',
        url: 'https://www.directoalpaladar.com/recetas-de-legumbres-y-verduras/batata-al-horno-receta-facil-para-disfrutar-boniato-casa-solo-ingrediente'
    },
    {
        name: 'Ensalada de uvas y queso',
        ingredients: ['Uva'],
        time: 10,
        icon: '🍇',
        url: 'https://www.directoalpaladar.com/recetas-de-ensaladas/ensalada-de-uvas-queso-y-canonigos-receta'
    },
    {
        name: 'Ensalada de pepino',
        ingredients: ['Pepino', 'Tomate'],
        time: 10,
        icon: '🥒',
        url: 'https://www.directoalpaladar.com/recetas-vegetarianas/ensalada-pepino-receta-facil-saludable-refrescante'
    }
];

// Get recipes that use seasonal ingredients for a given month
function getSeasonalRecipes(month, limit = 4) {
    // Get all foods in season for this month
    const seasonalFoods = new Set();

    // Include all food categories
    const allCategories = [FRUITS, VEGETABLES, FISH, MEAT, LEGUMES, CEREALS];

    for (const category of allCategories) {
        for (const [name, data] of Object.entries(category)) {
            if (data.months.includes(month)) {
                seasonalFoods.add(name);
            }
        }
    }

    // Score recipes by how many seasonal ingredients they use
    const scoredRecipes = RECIPES.map(recipe => {
        const seasonalIngredients = recipe.ingredients.filter(ing => seasonalFoods.has(ing));
        return {
            ...recipe,
            seasonalCount: seasonalIngredients.length,
            seasonalIngredients
        };
    });

    // Filter recipes that have at least one seasonal ingredient
    const validRecipes = scoredRecipes.filter(r => r.seasonalCount > 0);

    // Sort by seasonal count (descending), then randomly shuffle within same count
    validRecipes.sort((a, b) => {
        if (b.seasonalCount !== a.seasonalCount) {
            return b.seasonalCount - a.seasonalCount;
        }
        return Math.random() - 0.5;
    });

    return validRecipes.slice(0, limit);
}
