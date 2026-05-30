/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // === VEG SOUPS ===
  {
    id: 'vs1',
    name: 'Veg Corn Soup',
    category: 'veg-soups',
    categoryLabel: 'Veg Soups',
    price: 120,
    description: 'Sweet golden sweetcorn kernels simmered with fresh diced garden vegetables in a thick, velvety starch broth. Dynamic steam aroma.',
    isVeg: true,
  },
  {
    id: 'vs2',
    name: 'Veg Hot & Sour Soup',
    category: 'veg-soups',
    categoryLabel: 'Veg Soups',
    price: 120,
    description: 'A dark, spicy and tangy shredded vegetable broth spiked with dark soy, crushed white pepper, and vinegar.',
    isVeg: true,
  },
  {
    id: 'vs3',
    name: 'Veg Canton Soup',
    category: 'veg-soups',
    categoryLabel: 'Veg Soups',
    price: 120,
    description: 'Classic Cantonese-inspired vegetable broth cooked with crisp seasonal greens and a hint of sesame oil.',
    isVeg: true,
  },
  {
    id: 'vs4',
    name: 'Veg Clear Soup',
    category: 'veg-soups',
    categoryLabel: 'Veg Soups',
    price: 120,
    description: 'Light, comforting mineral broth gently boiled with garden-fresh greens and premium ground coriander.',
    isVeg: true,
  },
  {
    id: 'vs5',
    name: 'Veg Garlic Soup',
    category: 'veg-soups',
    categoryLabel: 'Veg Soups',
    price: 120,
    description: 'Robust vegetable soup heavily infused with crispy burnt garlic bits, spring greens, and warming spices.',
    isVeg: true,
  },

  // === NON VEG SOUPS ===
  {
    id: 'nvs1',
    name: 'Chicken Corn Soup',
    category: 'non-veg-soups',
    categoryLabel: 'Non Veg Soups',
    price: 140,
    description: 'Tender shredded chicken breast cooked with sweetcorn kernels, egg drop ribbons, and warm chicken bone reduction.',
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: 'nvs2',
    name: 'Chicken Hot Soup',
    category: 'non-veg-soups',
    categoryLabel: 'Non Veg Soups',
    price: 140,
    description: 'Warm, spicy and sour chicken broth prepared masterfully with shredded chicken, bamboo shoots, and green chilies.',
    isVeg: false,
  },
  {
    id: 'nvs3',
    name: 'Chicken Canton Soup',
    category: 'non-veg-soups',
    categoryLabel: 'Non Veg Soups',
    price: 140,
    description: 'Savoury Cantonese style chicken broth tossed with toasted sesame, spring onions, and garlic flakes.',
    isVeg: false,
  },
  {
    id: 'nvs4',
    name: 'Chicken Clear Soup',
    category: 'non-veg-soups',
    categoryLabel: 'Non Veg Soups',
    price: 140,
    description: 'Gentle, clear comforting double-boiled chicken soup with fresh herbs and a dash of white pepper.',
    isVeg: false,
  },
  {
    id: 'nvs5',
    name: 'Chicken Garlic Soup',
    category: 'non-veg-soups',
    categoryLabel: 'Non Veg Soups',
    price: 140,
    description: 'Nourishing hot chicken soup loaded with roasted garlic, spring onions, and rich ginger notes.',
    isVeg: false,
  },

  // === SALADS ===
  {
    id: 'sl1',
    name: 'Green Salad',
    category: 'salads',
    categoryLabel: 'Salads',
    price: 120,
    description: 'Slices of crisp english cucumbers, juicy tomatoes, sweet red onions, and spicy green chilies with lemon wedge.',
    isVeg: true,
  },

  // === CHICKEN STARTERS ===
  {
    id: 'cs1',
    name: 'Chicken 65',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 320,
    description: 'Deep-fried crimson chicken chunks tossed in spicy yogurt slurry, fresh curry leaves, and pounded dry chilies.',
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: 'cs2',
    name: 'Chicken Chilly',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 320,
    description: 'Crispy batter-fried chicken chunks tossed in hot wok with sweet bell peppers, red onions, and spicy green chili glaze.',
    isVeg: false,
  },
  {
    id: 'cs3',
    name: 'Chicken Manchuria',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 320,
    description: 'Golden chicken fritters smothered in a rich, tangy, sweet and spicy dark soy sauce with spring onions.',
    isVeg: false,
  },
  {
    id: 'cs4',
    name: 'Chicken Majestic',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 360,
    description: 'Succulent dry-fried chicken strips marinated in hand-ground spices and yogurt, sautéed with garlic and green chilies.',
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: 'cs5',
    name: 'Pepper Chicken',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 360,
    description: 'Juicy dry chicken pieces tossed masterfully with freshly cracked back peppercorns, curry leaves, and ghee roasted garlic.',
    isVeg: false,
  },
  {
    id: 'cs6',
    name: 'Chicken 555 Special',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 360,
    description: 'Spelt red-marinated chicken strips tossed in rich cashew-based tangy red sauce and finished with fresh coriander.',
    isVeg: false,
  },
  {
    id: 'cs7',
    name: 'Chicken Roast',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 360,
    description: 'Succulent slow-cooked chicken roast sautéed in a semi-dry rich masala gravy with heavy Southern spices.',
    isVeg: false,
  },
  {
    id: 'cs8',
    name: 'Chicken Lollipop',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 360,
    description: 'Flipped chicken wings shaped like lollipops, crisp-fried in spices and served with hot szechuan chutney sauce.',
    isVeg: false,
  },
  {
    id: 'cs9',
    name: 'Chicken Drum Stick',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 360,
    description: 'Plump chicken drumsticks marinated in premium spices, crispy breaded and golden-fried to tender perfection.',
    isVeg: false,
  },

  // === CHICKEN BIRYANI ===
  {
    id: 'cb1',
    name: 'Chicken Biryani',
    category: 'chicken-biryani',
    categoryLabel: 'Chicken Biryani',
    price: 250,
    description: 'The absolute masterpiece. Premium long-grain basmati rice and marinated farm chicken dum-cooked together with saffron strands and whole spices.',
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: 'cb2',
    name: 'Chicken Special Handi',
    category: 'chicken-biryani',
    categoryLabel: 'Chicken Biryani',
    price: 380,
    description: 'Slow-cooked royal chicken biryani prepared and layered inside a thick-bottomed copper handi resulting in robust, caramelised base note flavors.',
    isVeg: false,
  },
  {
    id: 'cb3',
    name: 'Chicken Family Pack',
    category: 'chicken-biryani',
    categoryLabel: 'Chicken Biryani',
    price: 580,
    description: 'Abundant festive serving of our legendary Nizami Chicken Dum Biryani, suitable to satisfy a family of 3-4 diners, with premium garnish.',
    isVeg: false,
  },
  {
    id: 'cb4',
    name: 'Chicken Jumbo Pack',
    category: 'chicken-biryani',
    categoryLabel: 'Chicken Biryani',
    price: 780,
    description: 'Our ultimate imperial feast pack of slow-dum chicken biryani. Tailored generously for larger family gatherings of 5-6 diners.',
    isVeg: false,
  },
  {
    id: 'cb5',
    name: 'Chicken Fry Piece Biryani',
    category: 'chicken-biryani',
    categoryLabel: 'Chicken Biryani',
    price: 300,
    description: 'Elegant local favorite. Aromatic basic biryani rice layered elegantly with high-heat fried pepper chicken pieces.',
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: 'cb6',
    name: 'Special Boneless Chicken Biryani',
    category: 'chicken-biryani',
    categoryLabel: 'Chicken Biryani',
    price: 350,
    description: 'Gourmet selection. Layered aromatic basmati rice served with richly marinated, boneless dry succulent spicy chicken cubes.',
    isVeg: false,
  },

  // === VEG BIRYANI ===
  {
    id: 'vb1',
    name: 'Paneer Biryani',
    category: 'veg-biryani',
    categoryLabel: 'Veg Biryani',
    price: 320,
    description: 'Thick cubes of fresh malai paneer layered with basmati, sweet saffron water, pure ghee, and slow steam-cooked.',
    isVeg: true,
  },
  {
    id: 'vb2',
    name: 'Paneer Handi',
    category: 'veg-biryani',
    categoryLabel: 'Veg Biryani',
    price: 370,
    description: 'Gently stewed paneer and spiced rice cooked in miniature clay handi for an earthy, rustic texture and smoky profile.',
    isVeg: true,
  },
  {
    id: 'vb3',
    name: 'Veg Biryani Plate',
    category: 'veg-biryani',
    categoryLabel: 'Veg Biryani',
    price: 220,
    description: 'Medley of fresh green beans, peas, carrots, and potato cubes spice-cooked with premium aromatic biryani rice.',
    isVeg: true,
  },
  {
    id: 'vb4',
    name: 'Egg Biryani',
    category: 'veg-biryani',
    categoryLabel: 'Veg Biryani',
    price: 220,
    description: 'Fragrant biryani rice served with golden shallow-fried boiled eggs infused with pepper and curry leaves.',
    isVeg: false,
  },
  {
    id: 'vb5',
    name: 'Biryani Rice',
    category: 'veg-biryani',
    categoryLabel: 'Veg Biryani',
    price: 150,
    description: 'Pure, authentic basmati rice harvested directly from the live dum pots, loaded with saffron, cardamom, and ghee.',
    isVeg: true,
  },

  // === NOODLES ===
  {
    id: 'nd1',
    name: 'Chicken Noodles',
    category: 'noodles',
    categoryLabel: 'Noodles',
    price: 160,
    description: 'Stir-fried noodles with farm chicken strips, julienned vegetables, white pepper, and dark soy in high heat wok.',
    isVeg: false,
  },
  {
    id: 'nd2',
    name: 'Egg Noodles',
    category: 'noodles',
    categoryLabel: 'Noodles',
    price: 150,
    description: 'Scrambled eggs tossed beautifully with hand-made noodles, cabbage, carrots, and sweet chili glaze.',
    isVeg: false,
  },
  {
    id: 'nd3',
    name: 'Veg Noodles',
    category: 'noodles',
    categoryLabel: 'Noodles',
    price: 150,
    description: 'Refreshing stir-fried garden-fresh greens and premium noodles seasoned with garlic, soy, and white vinegar.',
    isVeg: true,
  },
  {
    id: 'nd4',
    name: 'Mix Noodles',
    category: 'noodles',
    categoryLabel: 'Noodles',
    price: 250,
    description: 'The ultimate wok-tossed noodle platter carrying a loaded combination of chicken, eggs, and dynamic chopped vegetables.',
    isVeg: false,
    isChefSpecial: true,
  },

  // === MUTTON BIRYANI ===
  {
    id: 'mb1',
    name: 'Mutton Biryani',
    category: 'mutton-biryani',
    categoryLabel: 'Mutton Biryani',
    price: 350,
    description: 'Authentic Kachhe Gosht ki Biryani. Succulent tender spring mutton pieces marinated in raw papaya, spices, and buried under premium basmati rice for a 4-hour slow dum steam.',
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: 'mb2',
    name: 'Mutton Special Handi',
    category: 'mutton-biryani',
    categoryLabel: 'Mutton Biryani',
    price: 450,
    description: 'Earthy, rich clay handi cooked mutton biryani containing select baby lamb ribs, premium saffron, and deep fried shallots.',
    isVeg: false,
  },
  {
    id: 'mb3',
    name: 'Mutton Family Pack',
    category: 'mutton-biryani',
    categoryLabel: 'Mutton Biryani',
    price: 680,
    description: 'Generous sharing platter of our legendary Nizami Mutton Dum Biryani, perfect to delight 3-4 hungry guests.',
    isVeg: false,
  },
  {
    id: 'mb4',
    name: 'Mutton Jumbo Pack',
    category: 'mutton-biryani',
    categoryLabel: 'Mutton Biryani',
    price: 880,
    description: 'The grand luxury banqueting pack of classic mutton biryani, prepared carefully for 5-6 diners with rich sides.',
    isVeg: false,
  },

  // === CHICKEN KABABS ===
  {
    id: 'ck1',
    name: 'Grill Chicken',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 520,
    description: 'Smoky whole charcoal-grilled bird marinated in Middle Eastern black pepper, yogurt, and zesty oil.',
    isVeg: false,
  },
  {
    id: 'ck2',
    name: 'Tandoori Chicken',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 480,
    description: 'Plump spring chicken marinated in hot Kashmiri red pepper curd grease and roasted masterfully in blazing coal clay tandoor.',
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: 'ck3',
    name: 'Tandi Kabab',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 400,
    description: 'Rare heritage leg piece kebabs cooked slowly under direct charcoal warmth, juicy and spicy.',
    isVeg: false,
  },
  {
    id: 'ck4',
    name: 'Chicken Tikka',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 400,
    description: 'Classic skewered chicken fillets marinated in yellow mustard oil and spicy hung curd, scorched to perfection.',
    isVeg: false,
  },
  {
    id: 'ck5',
    name: 'Malai Kabab',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 400,
    description: 'Royal boneless chicken chunks layered with hand-whipped cream, white cheese, cardamom, and mildly charred.',
    isVeg: false,
  },
  {
    id: 'ck6',
    name: 'Haryali Kabab',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 400,
    description: 'Spicy farm chicken roasted dynamically in aromatic marinade of fresh mint, dhania paste, green chili, and lemon.',
    isVeg: false,
  },
  {
    id: 'ck7',
    name: 'Adraki Panchy',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 400,
    description: 'Unique ginger-heavy double-cooked chicken drumsticks skewered with spiced onion rings and red peppers.',
    isVeg: false,
  },
  {
    id: 'ck8',
    name: 'Hot Kabab Full Bird',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 520,
    description: 'Our ultimate fully-loaded tandoor hot grilled bird, marinated in extra spicy ghost-pepper styled red masala paste.',
    isVeg: false,
  },

  // === VEG STARTERS ===
  {
    id: 'vgs1',
    name: 'Veg Manchuria',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 160,
    description: 'Gently crisped mix-vegetable dumpling balls cooked in high-heat wok with fresh scallions, soy, and garlic sauce.',
    isVeg: true,
  },
  {
    id: 'vgs2',
    name: 'Veg 65',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 160,
    description: 'Deep-fried golden vegetable fritters sautéed in spiced curd with fresh curry leaves and crushed green chilies.',
    isVeg: true,
  },
  {
    id: 'vgs3',
    name: 'Crispy Veg',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 220,
    description: 'Sizzling crackling batter-coated baby corn, mushrooms, and beans dry-roasted with salt, pepper, and spring garlic.',
    isVeg: true,
  },
  {
    id: 'vgs4',
    name: 'Aloo 65',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 160,
    description: 'Tender baby potato balls crisp-fried and tossed in our classic fiery 65-yogurt chili spice seasoning.',
    isVeg: true,
  },
  {
    id: 'vgs5',
    name: 'Gobi Manchuria',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 300,
    description: 'Crunchy farm cauliflower florets dressed in garlic, ginger, spring onion, and hot sweet soya glaze.',
    isVeg: true,
  },
  {
    id: 'vgs6',
    name: 'Paneer Chilly',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 320,
    description: 'Fresh paneer fingers tossed dynamically with green bell peppers, dark soya, black vinegar, and green chilies.',
    isVeg: true,
  },
  {
    id: 'vgs7',
    name: 'Paneer Majestic',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 350,
    description: 'Thin sheets of cottage cheese dry-fried with yellow mustard paste, sweet garlic ribbons, mint, and roasted green peas.',
    isVeg: true,
    isChefSpecial: true,
  },
  {
    id: 'vgs8',
    name: 'Paneer 65',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 320,
    description: 'Velvety cottage cheese cubes coated in ground spices, crisped and tossed in red chili curd masala.',
    isVeg: true,
  },
  {
    id: 'vgs9',
    name: 'Paneer 555',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 320,
    description: 'Soft paneer strips tossed in rich cashew-based slightly sweetened creamy red gravy with dynamic chives.',
    isVeg: true,
  },

  // === INDIAN CHICKEN CURRIES ===
  {
    id: 'icc1',
    name: 'I.B Special Curry',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 420,
    description: 'Our signature premium Shahi recipe. Broiler chicken slow-stewed in almond paste, pure saffron, ghee and cream.',
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: 'icc2',
    name: 'Special Murg Musallam',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 370,
    description: 'Whole chicken stuffed with spiced mince, hardboiled egg, and slow-smothered in rich, nutty brown onion dynamic reduction.',
    isVeg: false,
  },
  {
    id: 'icc3',
    name: 'Dum Ka Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 350,
    description: 'Traditional slow clay-cooked chicken curry marinated in raw ground spices, cashews, and sealed to retain aroma.',
    isVeg: false,
  },
  {
    id: 'icc4',
    name: 'Chicken Shahi Khorma',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Mughal-style velvet korma cooked with white poppy seeds, fresh almonds, sweet cardamom, and rose water.',
    isVeg: false,
  },
  {
    id: 'icc5',
    name: 'Kashmir Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Mildly spiced, sweetish pink gravy cooked with premium Kashmiri red dried chilies, melon purée and fresh apples.',
    isVeg: false,
  },
  {
    id: 'icc6',
    name: 'Chicken Curry',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Classic comforting home-style farm chicken curry slow simmered with ginger, garlic, tomatoes and dried coriander.',
    isVeg: false,
  },
  {
    id: 'icc7',
    name: 'Chicken Masala',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'A spicy thick gravy containing pan-fried chicken tossed with garam masala, bay leaf, and fresh robust black pepper.',
    isVeg: false,
  },
  {
    id: 'icc8',
    name: 'Chicken Moghlai',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Imperial rich yellow gravy enriched with whisked egg fluff, cashew paste, dry spices and sweet cardamoms.',
    isVeg: false,
  },
  {
    id: 'icc9',
    name: 'Chicken Afghani',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Mild, extremely creamy white curry carrying strong tones of cheese, cashew butter, green cardamom, and dry pepper.',
    isVeg: false,
  },
  {
    id: 'icc10',
    name: 'Chicken Chatpata',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'A tangier, rich medium curry spiced up with home-ground pickle powder and yellow mustard seed crust.',
    isVeg: false,
  },
  {
    id: 'icc11',
    name: 'Butter Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Juicy tandoori chicken shreds stewed in a buttery, silky satin smooth tomato-cream gravy with sweet kasuri methi leaf.',
    isVeg: false,
  },
  {
    id: 'icc12',
    name: 'Chicken Kolhapuri',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Blazing-hot, deep-red traditional Maratha rustic chicken gravy flavored with dry grated coconut and poppy seed.',
    isVeg: false,
  },
  {
    id: 'icc13',
    name: 'Ginger Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Semi-dry dark chicken starter-curry cooked with a generous heap of ginger juliennes and capsicum slices.',
    isVeg: false,
  },
  {
    id: 'icc14',
    name: 'Andhra Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Fiery Andhra classic. Chicken simmered in heavy green chili paste, poppy seed purée and curry leaves.',
    isVeg: false,
  },
  {
    id: 'icc15',
    name: 'Telangana Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Earthy black pepper-forward dry robust chicken curry utilizing regional curry powder and roasted coconut powder.',
    isVeg: false,
  },
  {
    id: 'icc16',
    name: 'Kadai Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Spiced chicken cooked inside active iron kadai with chunks of sweet bell peppers, tomato pieces, and fresh kadai powder.',
    isVeg: false,
  },
  {
    id: 'icc17',
    name: 'Chicken Tikka Masala',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 350,
    description: 'Smoked boneless chicken tikka cooked inside a medium spiced red onion-tomato masala base gravy with dry cilantro.',
    isVeg: false,
  },
  {
    id: 'icc18',
    name: 'Punjabi Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 350,
    description: 'Heavy North-Indian style rustic chicken stew containing roasted coriander, dark tomato reduction, and fresh ghee.',
    isVeg: false,
  },

  // === VEG CURRIES ===
  {
    id: 'vc1',
    name: 'Special Veg Curry',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'A hand-selected choice of peak organic vegetables cooked with cashew cream, cottage cheese, and sweet spices.',
    isVeg: true,
    isChefSpecial: true,
  },
  {
    id: 'vc2',
    name: 'Dal Fry',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 170,
    description: 'Yellow arhar lentils boiled to soft cream and fried inside iron kadai with ghee, cumin, tomato, and chili flakes.',
    isVeg: true,
  },
  {
    id: 'vc3',
    name: 'Dal Tadka',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 180,
    description: 'Silky smooth yellow lentils tempered dynamically with sizzling hot ghee, dry red kashmiri pepper, and royal cumin.',
    isVeg: true,
  },
  {
    id: 'vc4',
    name: 'Veg Shabnam',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Garden mushrooms, sweet peas and cottage cheese squares folded elegantly inside velvety sweet almond-cream gravy.',
    isVeg: true,
  },
  {
    id: 'vc5',
    name: 'Kadai Veg',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Crisp assorted vegetables stirred dynamically with bell peppers, onions, and freshly dry-roasted kadai masala.',
    isVeg: true,
  },
  {
    id: 'vc6',
    name: 'Mix Veg Curry',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'A comforting rich house-mix of carrots, beans, baby potatoes, green peas and cauliflower buds tossed in spices.',
    isVeg: true,
  },
  {
    id: 'vc7',
    name: 'Aloo Gobi Kolhapuri',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Fiery-hot combination of baby potato slices and cauliflower florets in spicy coconut Kohapuri style dry gravy.',
    isVeg: true,
  },
  {
    id: 'vc8',
    name: 'Veg Jaipuri',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Royal Rajasthani style spicy vegetable panache topped with crispy, layered papad crowns and coriander cream.',
    isVeg: true,
  },
  {
    id: 'vc9',
    name: 'Veg Chatpata',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Tangy combination of baby vegetables cooked in onion-tomato purée enriched with sour pickle powder.',
    isVeg: true,
  },
  {
    id: 'vc10',
    name: 'Aloo Palak',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Crisped small potato cubes folded into smooth slow-simmered garlic spiced spinach leaf purée.',
    isVeg: true,
  },
  {
    id: 'vc11',
    name: 'Plain Palak',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Purified blanched spinach leaves, creamed to perfection with garlic bits, green chili, and roasted dry cumin.',
    isVeg: true,
  },
  {
    id: 'vc12',
    name: 'Paneer Butter Masala',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 320,
    description: 'Fresh paneer cubes simmered in our famous satin-smooth orange gravy with butter, cashews, and sweet fenugreek notes.',
    isVeg: true,
    isChefSpecial: true,
  },
  {
    id: 'vc13',
    name: 'Paneer Shahi Khorma',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 320,
    description: 'Cottage cheese squares gently poached inside royal cream of cashew paste, cardamom base and milk pudding.',
    isVeg: true,
  },
  {
    id: 'vc14',
    name: 'Kaju Paneer',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 330,
    description: 'Ghee-roasted premium split cashew nuts and soft paneer chunks tossed together in sweet gravy.',
    isVeg: true,
  },
  {
    id: 'vc15',
    name: 'Kadai Paneer',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 330,
    description: 'Paneer fingers cooked with chunky tomatoes, sweet capsicums, red onion squares, and spicy kadai spices.',
    isVeg: true,
  },
  {
    id: 'vc16',
    name: 'Kaju Masala',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 350,
    description: 'The absolute royal luxury dish: golden ghee-fired cashew nuts in thick curry.',
    isVeg: true,
  },
  {
    id: 'vc17',
    name: 'Malai Kofta',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 350,
    description: 'Soft potato and cheese kofta dumplings cooked inside cream and nut based sweet saffron sauce.',
    isVeg: true,
  },
  {
    id: 'vc18',
    name: 'Palak Paneer',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 320,
    description: 'Juicy cottage cheese squares sautéed gently inside spinach purée tempered with robust charred garlic.',
    isVeg: true,
  },
  {
    id: 'vc19',
    name: 'Paneer Do Pyaza',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 320,
    description: 'Soft paneer tossed in two varieties of caramelized red onions, sweet tomatoes, cumin and garam masala.',
    isVeg: true,
  },

  // === FRIED RICE ===
  {
    id: 'fr1',
    name: 'Chicken Fried Rice',
    category: 'fried-rice',
    categoryLabel: 'Fried Rice',
    price: 160,
    description: 'Long-grain basmati rice tossed inside dry high wok with egg ribbons, shredded chicken and light soy.',
    isVeg: false,
  },
  {
    id: 'fr2',
    name: 'Egg Fried Rice',
    category: 'fried-rice',
    categoryLabel: 'Fried Rice',
    price: 160,
    description: 'Scrambled golden eggs tossed masterfully with premium basmati rice, cabbage, carrots, and spring chives.',
    isVeg: false,
  },
  {
    id: 'fr3',
    name: 'Veg Fried Rice',
    category: 'fried-rice',
    categoryLabel: 'Fried Rice',
    price: 160,
    description: 'Fragrant basmati rice tossed dynamically with crisp carrot bits, green peas, beans, garlic and white pepper leaves.',
    isVeg: true,
  },
  {
    id: 'fr4',
    name: 'Mix Fried Rice',
    category: 'fried-rice',
    categoryLabel: 'Fried Rice',
    price: 250,
    description: 'Wok-fired rice packed with chicken pieces, scrambled eggs, fresh seasonal vegetables and authentic oriental glazes.',
    isVeg: false,
    isChefSpecial: true,
  },
  {
    id: 'fr5',
    name: 'Curd Rice',
    category: 'fried-rice',
    categoryLabel: 'Fried Rice',
    price: 160,
    description: 'Cooling, creamed yogurt rice mixed with pure ghee, tempered mustard seeds, copy green curry leaves, and raisins.',
    isVeg: true,
  },
  {
    id: 'fr6',
    name: 'Jeera Rice',
    category: 'fried-rice',
    categoryLabel: 'Fried Rice',
    price: 160,
    description: 'Buttery pan-fried basmati rice seasoned generously with aromatic crackled cumin seeds and cilantro stalks.',
    isVeg: true,
  },

  // === INDIAN ROTIS ===
  {
    id: 'ir1',
    name: 'Tandoori Roti',
    category: 'indian-rotis',
    categoryLabel: 'Indian Rotis',
    price: 25,
    description: 'Classic healthy wholewheat flatbread pasted on active clay tandoor walls and baked to charred crisp finish.',
    isVeg: true,
  },
  {
    id: 'ir2',
    name: 'Rumali Roti',
    category: 'indian-rotis',
    categoryLabel: 'Indian Rotis',
    price: 25,
    description: 'An ultra-thin, handkerchief-like wheat flatbread tossed elegantly in the air and cooked on hot inverted wok.',
    isVeg: true,
  },
  {
    id: 'ir3',
    name: 'Butter Naan',
    category: 'indian-rotis',
    categoryLabel: 'Indian Rotis',
    price: 45,
    description: 'Yeast leavened refined flour flatbread, roasted inside clay oven and layered with melted butter.',
    isVeg: true,
  },
  {
    id: 'ir4',
    name: 'Plain Naan',
    category: 'indian-rotis',
    categoryLabel: 'Indian Rotis',
    price: 35,
    description: 'Puffy, classic leavened hand-stretched soft flatbread, charcoal-scorched in the tandoor.',
    isVeg: true,
  },
  {
    id: 'ir5',
    name: 'Garlic Naan',
    category: 'indian-rotis',
    categoryLabel: 'Indian Rotis',
    price: 55,
    description: 'Tandoor naans heavy with chopped fried garlic pearls, toasted coriander seeds, brushed generously with butter.',
    isVeg: true,
    isChefSpecial: true,
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'ALL' },
  { id: 'veg-soups', label: 'VEG SOUPS' },
  { id: 'non-veg-soups', label: 'NON-VEG SOUPS' },
  { id: 'salads', label: 'SALADS' },
  { id: 'chicken-starters', label: 'CHICKEN STARTERS' },
  { id: 'chicken-biryani', label: 'CHICKEN BIRYANI' },
  { id: 'veg-biryani', label: 'VEG BIRYANI' },
  { id: 'noodles', label: 'NOODLES' },
  { id: 'mutton-biryani', label: 'MUTTON BIRYANI' },
  { id: 'chicken-kababs', label: 'CHICKEN KABABS' },
  { id: 'veg-starters', label: 'VEG STARTERS' },
  { id: 'indian-chicken-curries', label: 'INDIAN CHICKEN CURRIES' },
  { id: 'veg-curries', label: 'VEG CURRIES' },
  { id: 'fried-rice', label: 'FRIED RICE' },
  { id: 'indian-rotis', label: 'INDIAN ROTIS' }
];

export const CATEGORY_IMAGES: Record<string, string> = {
  'veg-soups': 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
  'non-veg-soups': 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=800&q=80',
  'salads': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  'chicken-starters': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
  'chicken-biryani': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
  'veg-biryani': 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80',
  'noodles': 'https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=800&q=80',
  'mutton-biryani': 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
  'chicken-kababs': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
  'veg-starters': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
  'indian-chicken-curries': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
  'veg-curries': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
  'fried-rice': 'https://images.unsplash.com/photo-1603133872878-a5647f30a218?auto=format&fit=crop&w=800&q=80',
  'indian-rotis': 'https://images.unsplash.com/photo-1658145244109-f1a6fba94bfe?auto=format&fit=crop&w=800&q=80',
};

export const HOTLINKS = {
  // Cinematic view of biryani pot
  heroBiryani: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
  // Tandoori chicken selection spread
  tandooriSnacks: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
  // Butter chicken with garlic naan
  butterChicken: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
  // Premium dark table with brass utensils and dishes
  ourStory: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
};

export const getFoodItemImage = (name: string, category: string): string => {
  const normalizedName = name.toLowerCase();

  // Family Packs and Jumbo Packs (Festive indian spread)
  if (normalizedName.includes('family') || normalizedName.includes('jumbo') || normalizedName.includes('pack')) {
    if (normalizedName.includes('mutton')) {
      return 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80';
    }
    return 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80';
  }

  // Mutton Biryani items
  if (normalizedName.includes('mutton') && (normalizedName.includes('biryani') || normalizedName.includes('handi'))) {
    return 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80';
  }

  // Chicken Biryani items
  if (normalizedName.includes('chicken') && normalizedName.includes('fry piece biryani')) {
    return 'https://images.unsplash.com/photo-1625220194771-7ebedd0b70b9?auto=format&fit=crop&w=800&q=80';
  }
  if (normalizedName.includes('boneless chicken biryani') || normalizedName.includes('special boneless')) {
    return 'https://images.unsplash.com/photo-1631515223363-5d92d564d1b8?auto=format&fit=crop&w=800&q=80';
  }
  if (normalizedName.includes('chicken') && (normalizedName.includes('biryani') || normalizedName.includes('handi'))) {
    return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80';
  }

  // Veg Biryanis (paneer/kaju/etc)
  if (normalizedName.includes('veg') && normalizedName.includes('biryani')) {
    return 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80';
  }
  if (normalizedName.includes('paneer') && normalizedName.includes('biryani')) {
    return 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';
  }
  if (normalizedName.includes('kaju') && normalizedName.includes('biryani')) {
    return 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=800&q=80';
  }

  // Butter chicken / curries
  if (normalizedName.includes('butter chicken') || normalizedName.includes('murg')) {
    return 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80';
  }
  if (normalizedName.includes('paneer butter') || normalizedName.includes('paneer tikka masala') || normalizedName.includes('kadai paneer') || normalizedName.includes('shahi paneer')) {
    return 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';
  }
  if (normalizedName.includes('palak paneer')) {
    return 'https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=800&q=80';
  }

  // Chinese Starters / Manchuria / Chilly / Fry
  if (normalizedName.includes('chilly') || normalizedName.includes('manchuria') || normalizedName.includes('65') || normalizedName.includes('majestic') || normalizedName.includes('roast') || normalizedName.includes('lollipop') || normalizedName.includes('drum stick') || normalizedName.includes('starters')) {
    if (normalizedName.includes('paneer') || normalizedName.includes('gobi') || normalizedName.includes('veg') || normalizedName.includes('baby corn')) {
      return 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80';
    }
    return 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80';
  }

  // Tandoor & Kababs
  if (normalizedName.includes('kabab') || normalizedName.includes('tikka') || normalizedName.includes('tandoori chicken') || normalizedName.includes('tangdi')) {
    return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80';
  }

  // Rotis & Naan
  if (normalizedName.includes('naan') || normalizedName.includes('roti') || normalizedName.includes('paratha')) {
    return 'https://images.unsplash.com/photo-1658145244109-f1a6fba94bfe?auto=format&fit=crop&w=800&q=80';
  }

  // Noodles
  if (normalizedName.includes('noodles')) {
    return 'https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=800&q=80';
  }

  // Fried Rice
  if (normalizedName.includes('fried rice') || normalizedName.includes('rice')) {
    return 'https://images.unsplash.com/photo-1603133872878-a5647f30a218?auto=format&fit=crop&w=800&q=80';
  }

  // Salad
  if (normalizedName.includes('salad')) {
    return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80';
  }

  // Soups
  if (normalizedName.includes('soup')) {
    if (normalizedName.includes('chicken') || normalizedName.includes('meat')) {
      return 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=800&q=80';
    }
    return 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80';
  }

  // Fallbacks based on category keys
  if (category === 'chicken-biryani') {
    return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80';
  }
  if (category === 'mutton-biryani') {
    return 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80';
  }
  if (category === 'veg-biryani') {
    return 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80';
  }
  if (category === 'chicken-kababs') {
    return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80';
  }
  if (category === 'indian-chicken-curries') {
    return 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80';
  }
  if (category === 'veg-curries') {
    return 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';
  }

  return CATEGORY_IMAGES[category] || 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80';
};
