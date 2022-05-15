let names = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Austria",
    "Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
    "Bosnia and Herzegovina","Botswana","Brunei","Brazil","Bulgaria","Burkina Faso","Burundi",
    "Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Channel Islands","Chile",
    "China","Colombia","Comoros","Congo","Costa Rica","Côte d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic",
    "Denmark","Djibouti","Dominica","Dominican Republic","DR Congo",
    "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
    "Faeroe Islands","Finland","France","French Guiana",
    "Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
    "Haiti","Holy See","Honduras","Hong Kong","Hungary",
    "Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy",
    "Jamaica","Japan","Jordan",
    "Kazakhstan","Kenya","Kuwait","Kyrgyzstan",
    "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
    "Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mayotte","Mexico","Moldova","Monaco",
    "Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
    "Namibia","Nepal","Netherlands","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway",
    "Oman",
    "Pakistan","Panama","Paraguay","Peru","Philippines","Poland","Portugal",
    "Qatar",
    "Réunion","Romania","Russia","Rwanda",
    "State of Palestine","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","San Marino","Sao Tome & Principe",
    "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Somalia","South Africa",
    "South Korea","South Sudan","Spain","Sri Lanka","Palestine","Sudan","Suriname","Sweden","Switzerland","Syria",
    "Taiwan","Tajikistan","Tanzania","Thailand","The Bahamas","Timor-Leste","Togo","Trinidad and Tobago","Tunisia",
    "Turkey","Turkmenistan",
    "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan",
    "Venezuela","Vietnam",
    "Western Sahara",
    "Yemen",
    "Zambia","Zimbabwe",

    "Sukhumi","Kabul","Episkopi Cantonment","Mariehamn","Tirana","Algiers","Tafuna","Andorra la Vella","Luanda","North Side",
    "St. John's","Buenos Aires","Yerevan","Stepanakert","Oranjestad","Sydney","Vienna","Baku","Nassau","Manama","Dhaka","Bridgetown",
    "Minsk","Brussels","Belize City","Cotonou","St. George's","Thimphu","Santa Cruz de la Sierra","Sarajevo","Gaborone","São Paulo",
    "Bandar Seri Begawan","Sofia","Ouagadougou","Bujumbura","Phnom Penh","Douala","Toronto","Praia","George Town","Bangui","N'Djamena",
    "Santiago","Shanghai","Flying Fish Cove","Bantam","Bogotá","Moroni","Kinshasa","Brazzaville","Avarua","San José","Abidjan",
    "Zagreb","Havana","Willemstad","Nicosia","Prague",
    
     "Copenhagen","Djibouti","Roseau","Santo Domingo","Dili","Quito","Guayaquil","Cairo","San Salvador","Bata","Asmara",
    "Tallinn","Manzini","Addis Ababa","Stanley","Tórshavn","Nasinu","Helsinki","Paris",
    
    "Cayenne","Papeete","Libreville","Serekunda","Tbilisi","Berlin","Rhine-Ruhr","Accra","Gibraltar","Athens","Nuuk","St. George's",
    "Dededo","Guatemala City","Saint Peter Port","Conakry","Bissau","Georgetown","Port-au-Prince","Tegucigalpa","Kwun Tong","Budapest",
    "Reykjavík","Mumbai","Jakarta","Tehran","Baghdad","Dublin","Douglas","Jerusalem","Rome","Kingston","Tokyo",
    
    "Saint Helier","Amman","Almaty","Nairobi","Betio","Pyongyang","Seoul","Pristina","Kuwait City","Bishkek","Vientiane","Riga",
    "Beirut","Maseru","Monrovia","Tripoli","Schaan","Vilnius","Luxembourg City","Antananarivo","Lilongwe","Kuala Lumpur","Malé",
    "Bamako","Valletta","Ebeye","Nouakchott","Port Louis","Mamoudzou","Mexico City",
    
    "Weno","Chişinău","Monaco","Ulaanbaatar","Podgorica","Brades","Casablanca","Maputo","Yangon","Windhoek","Yaren","Kathmandu","Amsterdam",
    "Nouméa","Auckland",
    
    "Managua","Niamey","Lagos","Alofi","Burnt Pine","Skopje","North Nicosia","San Antonio","Oslo","Muscat","Karachi","Koror",
    "Gaza City","Panama City","Port Moresby","Asunción","Lima","Quezon City","Metro Manila","Adamstown","Warsaw","Lisbon","San Juan",
    
    "Doha","Bucharest","Moscow","Kigali","Gustavia","Half Tree Hollow","Basseterre","Castries","Marigot","Saint-Pierre","Kingstown",
    "Apia","Dogana","São Tomé","Riyadh","Dakar","Belgrade","Victoria","Freetown","Singapore","Lower Prince's Quarter","Bratislava",
    "Ljubljana","Honiara","Mogadishu","Hargeisa","Cape Town","Johannesburg","King Edward Point","Tskhinvali","Juba","Madrid","Colombo",
    "Omdurman","Khartoum","Paramaribo","Longyearbyen","Stockholm","Zürich","Damascus","New Taipei","Dushanbe","Dar es Salaam","Bangkok",
    
    "Lomé","Fakaofo","Nukuʻalofa","Tiraspol","Chaguanas","Tunis","Istanbul","Ashgabat","Five Cays","Funafuti","Kampala","Kyiv",
    
    "Dubai","London","New York City","Montevideo","Tashkent","Port Vila","Vatican City","Caracas","Ho Chi Minh City","Road Town",
    "Charlotte Amalie","Mata-Utu","Laayoune","Sana'a","Lusaka","Harare",
    
    "Tkvarcheli","Kandahar","Ayios Nikolaos","Jomala","Durrës","Oran","Nu'uuli","Escaldes-Engordany","Lubango","The Valley","All Saints",
    "Córdoba","Gyumri","Shusha","Sint Nicolaas","Melbourne","Graz","Ganja","Freeport","Riffa","Chittagong","Speightstown","Gomel",
    "Antwerp","San Ignacio","Abomey-Calavi","Hamilton","Phuntsholing","El Alto","Banja Luka","Francistown","Rio de Janeiro","Kuala Belait","Plovdiv",


    "Bobo-Dioulasso","Muyinga","Siem Reap","Yaoundé","Montreal","Mindelo","Bodden Town","Bimbo","Moundou","Puente Alto",
    "Beijing","Poon Saan","West Island","Medellín","Mutsamudu","Lubumbashi","Pointe-Noire","Amuri","Alajuela","Bouaké",
    "Split","Santiago de Cuba","Sint Michiel","Limassol","Brno","Ostrava","Aarhus","Ali Sabieh","Portsmouth","Santiago de los Caballeros",


    "Dare","Guayaquil","Quito","Alexandria","Santa Ana","Malabo","Keren","Tartu","Mbabane","Dire Dawa","Mount Pleasant","Klaksvík",
    "Suva","Espoo","Tampere","Marseille","Lyon","Saint-Laurent-du-Maroni","Faaa","Port-Gentil","Brikama","Batumi","Hamburg",
    "Berlin","Kumasi",
    
    "Thessaloniki","Sisimiut","Gouyave","Yigo","Quetzaltenango","Vale","Nzérékoré","Gabú","Linden","Gonaïves","San Pedro Sula","Sha Tin",
    "Debrecen","Kópavogur","Delhi","Surabaya","Mashhad","Basra","Cork","Ramsey","Tel Aviv","Milan","Spanish Town","Yokohama","Osaka",
    "Saint Saviour",



    "Zarqa","Nur-Sultan","Mombasa","Bairiki","Hamhung","Busan","Prizren","Al Jahra","Osh","Pakxe","Daugavpils","Tripoli","Teyateyaneng",
    "Ganta","Benghazi","Vaduz","Kaunas","Esch-sur-Alzette","Toamasina","Blantyre","George Town","Addu City","Sikasso","Rita",
    "Nouadhibou","Beau Bassin-Rose Hill","Koungou","Ecatepec","Monterrey","Palikir","Tiraspol","La Condamine","Erdenet","Nikšić","Saint Peter's",
    "Fez","Matola",



    "Mandalay","Rundu","Denigomudu","Pokhara","Rotterdam","Dumbéa","Christchurch","Wellington","León","Zinder","Kano","Hakupu",
    "Kingston","Bitola","Famagusta","Garapan","Bergen","Seeb","Lahore","Airai","Hebron","San Miguelito District","Lae","Ciudad del Este",
    "Arequipa","Manila","Metro Cebu","Kraków","Vila Nova de Gaia",


    "Porto","Bayamón","Ponce","Al Rayyan","Iași","Constanța","Saint Petersburg","Butare","St. Jean","Jamestown","Charlestown","Gros Islet",
    "Rambaud","Miquelon","Georgetown","Vaitele","Borgo Maggiore","Trindade","Jeddah","Touba","Novi Sad","Anse Boileau","Bo",
    "Cul De Sac","Košice","Maribor","Gizo","Hargeisa","Burao","Durban","Cape Town","Bird Island",


    "Akhalgori","Yei","Barcelona","Galle","Khartoum","Port Sudan","Lelydorp","Barentsburg","Gothenburg","Geneva","Aleppo","Taichung",
    "Khujand","Mwanza","Nonthaburi","Pak Kret","Sokodé","Atafu","Neiafu","Bender","San Fernando","Sfax","Ankara",
    "Türkmenabat","Trincomalee",


    "Honda Road","Asau","Nansana","Kharkiv","Donetsk","Abu Dhabi","Birmingham","Los Angeles","Salto","Namangan","Luganville","Maracaibo",
    "Hanoi","Anna's Retreat","Utufua","Dakhla","Aden","Kitwe","Bulawayo",
    

];
let storedNames = names.sort();
console.log(storedNames);