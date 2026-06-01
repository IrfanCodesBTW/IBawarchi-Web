/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
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
    image: '/images/dishes/chicken_65.png',
  },
  {
    id: 'cs2',
    name: 'Chicken Chilly',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 320,
    description: 'Crispy batter-fried chicken chunks tossed in hot wok with sweet bell peppers, red onions, and spicy green chili glaze.',
    isVeg: false,
    image: '/images/dishes/chicken_chilly.png',
  },
  {
    id: 'cs3',
    name: 'Chicken Manchuria',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 320,
    description: 'Golden chicken fritters smothered in a rich, tangy, sweet and spicy dark soy sauce with spring onions.',
    isVeg: false,
    image: '/images/dishes/chicken_manchuria.png',
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
    image: '/images/dishes/chicken_majestic.png',
  },
  {
    id: 'cs5',
    name: 'Pepper Chicken',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 360,
    description: 'Juicy dry chicken pieces tossed masterfully with freshly cracked back peppercorns, curry leaves, and ghee roasted garlic.',
    isVeg: false,
    image: '/images/dishes/pepper_chicken.png',
  },
  {
    id: 'cs6',
    name: 'Chicken 555 Special',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 360,
    description: 'Spelt red-marinated chicken strips tossed in rich cashew-based tangy red sauce and finished with fresh coriander.',
    isVeg: false,
    image: '/images/dishes/chicken_555_special.png',
  },
  {
    id: 'cs7',
    name: 'Chicken Roast',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 360,
    description: 'Succulent slow-cooked chicken roast sautéed in a semi-dry rich masala gravy with heavy Southern spices.',
    isVeg: false,
    image: '/images/dishes/chicken_roast.png',
  },
  {
    id: 'cs8',
    name: 'Chicken Lollipop',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 360,
    description: 'Flipped chicken wings shaped like lollipops, crisp-fried in spices and served with hot szechuan chutney sauce.',
    isVeg: false,
    image: '/images/dishes/chicken_lollipop.png',
  },
  {
    id: 'cs9',
    name: 'Chicken Drum Stick',
    category: 'chicken-starters',
    categoryLabel: 'Chicken Starters',
    price: 360,
    description: 'Plump chicken drumsticks marinated in premium spices, crispy breaded and golden-fried to tender perfection.',
    isVeg: false,
    image: '/images/dishes/chicken_drum_stick.png',
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
    image: '/images/dishes/chicken_biryani.png',
  },
  {
    id: 'cb2',
    name: 'Chicken Special Handi',
    category: 'chicken-biryani',
    categoryLabel: 'Chicken Biryani',
    price: 380,
    description: 'Slow-cooked royal chicken biryani prepared and layered inside a thick-bottomed copper handi resulting in robust, caramelised base note flavors.',
    isVeg: false,
    image: '/images/dishes/chicken_special_handi.png',
  },
  {
    id: 'cb3',
    name: 'Chicken Family Pack',
    category: 'chicken-biryani',
    categoryLabel: 'Chicken Biryani',
    price: 580,
    description: 'Abundant festive serving of our legendary Nizami Chicken Dum Biryani, suitable to satisfy a family of 3-4 diners, with premium garnish.',
    isVeg: false,
    image: '/images/dishes/chicken_family_pack.png',
  },
  {
    id: 'cb4',
    name: 'Chicken Jumbo Pack',
    category: 'chicken-biryani',
    categoryLabel: 'Chicken Biryani',
    price: 780,
    description: 'Our ultimate imperial feast pack of slow-dum chicken biryani. Tailored generously for larger family gatherings of 5-6 diners.',
    isVeg: false,
    image: '/images/dishes/chicken_jumbo_pack.png',
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
    image: '/images/dishes/chicken_fry_piece_biryani.png',
  },
  {
    id: 'cb6',
    name: 'Special Boneless Chicken Biryani',
    category: 'chicken-biryani',
    categoryLabel: 'Chicken Biryani',
    price: 350,
    description: 'Gourmet selection. Layered aromatic basmati rice served with richly marinated, boneless dry succulent spicy chicken cubes.',
    isVeg: false,
    image: '/images/dishes/special_boneless_chicken_biryani.png',
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
    image: '/images/dishes/mutton_biryani.png',
  },
  {
    id: 'mb2',
    name: 'Mutton Special Handi',
    category: 'mutton-biryani',
    categoryLabel: 'Mutton Biryani',
    price: 450,
    description: 'Earthy, rich clay handi cooked mutton biryani containing select baby lamb ribs, premium saffron, and deep fried shallots.',
    isVeg: false,
    image: '/images/dishes/mutton_special_handi.png',
  },
  {
    id: 'mb3',
    name: 'Mutton Family Pack',
    category: 'mutton-biryani',
    categoryLabel: 'Mutton Biryani',
    price: 680,
    description: 'Generous sharing platter of our legendary Nizami Mutton Dum Biryani, perfect to delight 3-4 hungry guests.',
    isVeg: false,
    image: '/images/dishes/mutton_family_pack.png',
  },
  {
    id: 'mb4',
    name: 'Mutton Jumbo Pack',
    category: 'mutton-biryani',
    categoryLabel: 'Mutton Biryani',
    price: 880,
    description: 'The grand luxury banqueting pack of classic mutton biryani, prepared carefully for 5-6 diners with rich sides.',
    isVeg: false,
    image: '/images/dishes/mutton_jumbo_pack.png',
  },

  // === VEG SOUPS ===
  {
    id: 'vs1',
    name: 'Veg Corn Soup',
    category: 'veg-soups',
    categoryLabel: 'Veg Soups',
    price: 120,
    description: 'Sweet golden sweetcorn kernels simmered with fresh diced garden vegetables in a thick, velvety starch broth. Dynamic steam aroma.',
    isVeg: true,
    image: '/images/dishes/veg_corn_soup.png',
  },
  {
    id: 'vs2',
    name: 'Veg Hot & Sour Soup',
    category: 'veg-soups',
    categoryLabel: 'Veg Soups',
    price: 120,
    description: 'A dark, spicy and tangy shredded vegetable broth spiked with dark soy, crushed white pepper, and vinegar.',
    isVeg: true,
    image: '/images/dishes/veg_hot_and_sour_soup.png',
  },
  {
    id: 'vs3',
    name: 'Veg Canton Soup',
    category: 'veg-soups',
    categoryLabel: 'Veg Soups',
    price: 120,
    description: 'Classic Cantonese-inspired vegetable broth cooked with crisp seasonal greens and a hint of sesame oil.',
    isVeg: true,
    image: '/images/dishes/veg_canton_soup.png',
  },
  {
    id: 'vs4',
    name: 'Veg Clear Soup',
    category: 'veg-soups',
    categoryLabel: 'Veg Soups',
    price: 120,
    description: 'Light, comforting mineral broth gently boiled with garden-fresh greens and premium ground coriander.',
    isVeg: true,
    image: '/images/dishes/veg_clear_soup.png',
  },
  {
    id: 'vs5',
    name: 'Veg Garlic Soup',
    category: 'veg-soups',
    categoryLabel: 'Veg Soups',
    price: 120,
    description: 'Robust vegetable soup heavily infused with crispy burnt garlic bits, spring greens, and warming spices.',
    isVeg: true,
    image: '/images/dishes/veg_garlic_soup.png',
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
    image: '/images/dishes/chicken_corn_soup.png',
  },
  {
    id: 'nvs2',
    name: 'Chicken Hot Soup',
    category: 'non-veg-soups',
    categoryLabel: 'Non Veg Soups',
    price: 140,
    description: 'Warm, spicy and sour chicken broth prepared masterfully with shredded chicken, bamboo shoots, and green chilies.',
    isVeg: false,
    image: '/images/dishes/chicken_hot_soup.png',
  },
  {
    id: 'nvs3',
    name: 'Chicken Canton Soup',
    category: 'non-veg-soups',
    categoryLabel: 'Non Veg Soups',
    price: 140,
    description: 'Savoury Cantonese style chicken broth tossed with toasted sesame, spring onions, and garlic flakes.',
    isVeg: false,
    image: '/images/dishes/chicken_canton_soup.png',
  },
  {
    id: 'nvs4',
    name: 'Chicken Clear Soup',
    category: 'non-veg-soups',
    categoryLabel: 'Non Veg Soups',
    price: 140,
    description: 'Gentle, clear comforting double-boiled chicken soup with fresh herbs and a dash of white pepper.',
    isVeg: false,
    image: '/images/dishes/chicken_clear_soup.png',
  },
  {
    id: 'nvs5',
    name: 'Chicken Garlic Soup',
    category: 'non-veg-soups',
    categoryLabel: 'Non Veg Soups',
    price: 140,
    description: 'Nourishing hot chicken soup loaded with roasted garlic, spring onions, and rich ginger notes.',
    isVeg: false,
    image: '/images/dishes/chicken_garlic_soup.png',
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
    image: '/images/dishes/green_salad.png',
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
    image: '/images/dishes/paneer_biryani.png',
  },
  {
    id: 'vb2',
    name: 'Paneer Handi',
    category: 'veg-biryani',
    categoryLabel: 'Veg Biryani',
    price: 370,
    description: 'Gently stewed paneer and spiced rice cooked in miniature clay handi for an earthy, rustic texture and smoky profile.',
    isVeg: true,
    image: '/images/dishes/paneer_handi.png',
  },
  {
    id: 'vb3',
    name: 'Veg Biryani Plate',
    category: 'veg-biryani',
    categoryLabel: 'Veg Biryani',
    price: 220,
    description: 'Medley of fresh green beans, peas, carrots, and potato cubes spice-cooked with premium aromatic biryani rice.',
    isVeg: true,
    image: '/images/dishes/veg_biryani_plate.png',
  },
  {
    id: 'vb4',
    name: 'Egg Biryani',
    category: 'veg-biryani',
    categoryLabel: 'Veg Biryani',
    price: 220,
    description: 'Fragrant biryani rice served with golden shallow-fried boiled eggs infused with pepper and curry leaves.',
    isVeg: false,
    image: '/images/dishes/egg_biryani.png',
  },
  {
    id: 'vb5',
    name: 'Biryani Rice',
    category: 'veg-biryani',
    categoryLabel: 'Veg Biryani',
    price: 150,
    description: 'Pure, authentic basmati rice harvested directly from the live dum pots, loaded with saffron, cardamom, and ghee.',
    isVeg: true,
    image: '/images/dishes/biryani_rice.png',
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
    image: '/images/dishes/chicken_noodles.png',
  },
  {
    id: 'nd2',
    name: 'Egg Noodles',
    category: 'noodles',
    categoryLabel: 'Noodles',
    price: 150,
    description: 'Scrambled eggs tossed beautifully with hand-made noodles, cabbage, carrots, and sweet chili glaze.',
    isVeg: false,
    image: '/images/dishes/egg_noodles.png',
  },
  {
    id: 'nd3',
    name: 'Veg Noodles',
    category: 'noodles',
    categoryLabel: 'Noodles',
    price: 150,
    description: 'Refreshing stir-fried garden-fresh greens and premium noodles seasoned with garlic, soy, and white vinegar.',
    isVeg: true,
    image: '/images/dishes/veg_noodles.png',
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
    image: '/images/dishes/mix_noodles.png',
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
    image: '/images/dishes/grill_chicken.png',
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
    image: '/images/dishes/tandoori_chicken.png',
  },
  {
    id: 'ck3',
    name: 'Tandi Kabab',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 400,
    description: 'Rare heritage leg piece kebabs cooked slowly under direct charcoal warmth, juicy and spicy.',
    isVeg: false,
    image: '/images/dishes/tandi_kabab.png',
  },
  {
    id: 'ck4',
    name: 'Chicken Tikka',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 400,
    description: 'Classic skewered chicken fillets marinated in yellow mustard oil and spicy hung curd, scorched to perfection.',
    isVeg: false,
    image: '/images/dishes/chicken_tikka.png',
  },
  {
    id: 'ck5',
    name: 'Malai Kabab',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 400,
    description: 'Royal boneless chicken chunks layered with hand-whipped cream, white cheese, cardamom, and mildly charred.',
    isVeg: false,
    image: '/images/dishes/malai_kabab.png',
  },
  {
    id: 'ck6',
    name: 'Haryali Kabab',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 400,
    description: 'Spicy farm chicken roasted dynamically in aromatic marinade of fresh mint, dhania paste, green chili, and lemon.',
    isVeg: false,
    image: '/images/dishes/haryali_kabab.png',
  },
  {
    id: 'ck7',
    name: 'Adraki Panchy',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 400,
    description: 'Unique ginger-heavy double-cooked chicken drumsticks skewered with spiced onion rings and red peppers.',
    isVeg: false,
    image: '/images/dishes/adraki_panchy.png',
  },
  {
    id: 'ck8',
    name: 'Hot Kabab Full Bird',
    category: 'chicken-kababs',
    categoryLabel: 'Chicken Kababs',
    price: 520,
    description: 'Our ultimate fully-loaded tandoor hot grilled bird, marinated in extra spicy ghost-pepper styled red masala paste.',
    isVeg: false,
    image: '/images/dishes/hot_kabab_full_bird.png',
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
    image: '/images/dishes/veg_manchuria.png',
  },
  {
    id: 'vgs2',
    name: 'Veg 65',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 160,
    description: 'Deep-fried golden vegetable fritters sautéed in spiced curd with fresh curry leaves and crushed green chilies.',
    isVeg: true,
    image: '/images/dishes/veg_65.png',
  },
  {
    id: 'vgs3',
    name: 'Crispy Veg',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 220,
    description: 'Sizzling crackling batter-coated baby corn, mushrooms, and beans dry-roasted with salt, pepper, and spring garlic.',
    isVeg: true,
    image: '/images/dishes/crispy_veg.png',
  },
  {
    id: 'vgs4',
    name: 'Aloo 65',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 160,
    description: 'Tender baby potato balls crisp-fried and tossed in our classic fiery 65-yogurt chili spice seasoning.',
    isVeg: true,
    image: '/images/dishes/aloo_65.png',
  },
  {
    id: 'vgs5',
    name: 'Gobi Manchuria',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 300,
    description: 'Crunchy farm cauliflower florets dressed in garlic, ginger, spring onion, and hot sweet soya glaze.',
    isVeg: true,
    image: '/images/dishes/gobi_manchuria.png',
  },
  {
    id: 'vgs6',
    name: 'Paneer Chilly',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 320,
    description: 'Fresh paneer fingers tossed dynamically with green bell peppers, dark soya, black vinegar, and green chilies.',
    isVeg: true,
    image: '/images/dishes/paneer_chilly.png',
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
    image: '/images/dishes/paneer_majestic.png',
  },
  {
    id: 'vgs8',
    name: 'Paneer 65',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 320,
    description: 'Velvety cottage cheese cubes coated in ground spices, crisped and tossed in red chili curd masala.',
    isVeg: true,
    image: '/images/dishes/paneer_65.png',
  },
  {
    id: 'vgs9',
    name: 'Paneer 555',
    category: 'veg-starters',
    categoryLabel: 'Veg Starters',
    price: 320,
    description: 'Soft paneer strips tossed in rich cashew-based slightly sweetened creamy red gravy with dynamic chives.',
    isVeg: true,
    image: '/images/dishes/paneer_555.png',
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
    image: '/images/dishes/ib_special_curry.png',
  },
  {
    id: 'icc2',
    name: 'Special Murg Musallam',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 370,
    description: 'Whole chicken stuffed with spiced mince, hardboiled egg, and slow-smothered in rich, nutty brown onion dynamic reduction.',
    isVeg: false,
    image: '/images/dishes/special_murg_musallam.png',
  },
  {
    id: 'icc3',
    name: 'Dum Ka Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 350,
    description: 'Traditional slow clay-cooked chicken curry marinated in raw ground spices, cashews, and sealed to retain aroma.',
    isVeg: false,
    image: '/images/dishes/dum_ka_chicken.png',
  },
  {
    id: 'icc4',
    name: 'Chicken Shahi Khorma',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Mughal-style velvet korma cooked with white poppy seeds, fresh almonds, sweet cardamom, and rose water.',
    isVeg: false,
    image: '/images/dishes/chicken_shahi_khorma.png',
  },
  {
    id: 'icc5',
    name: 'Kashmir Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Mildly spiced, sweetish pink gravy cooked with premium Kashmiri red dried chilies, melon purée and fresh apples.',
    isVeg: false,
    image: '/images/dishes/kashmir_chicken.png',
  },
  {
    id: 'icc6',
    name: 'Chicken Curry',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Classic comforting home-style farm chicken curry slow simmered with ginger, garlic, tomatoes and dried coriander.',
    isVeg: false,
    image: '/images/dishes/chicken_curry.png',
  },
  {
    id: 'icc7',
    name: 'Chicken Masala',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'A spicy thick gravy containing pan-fried chicken tossed with garam masala, bay leaf, and fresh robust black pepper.',
    isVeg: false,
    image: '/images/dishes/chicken_masala.png',
  },
  {
    id: 'icc8',
    name: 'Chicken Moghlai',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Imperial rich yellow gravy enriched with whisked egg fluff, cashew paste, dry spices and sweet cardamoms.',
    isVeg: false,
    image: '/images/dishes/chicken_moghlai.png',
  },
  {
    id: 'icc9',
    name: 'Chicken Afghani',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Mild, extremely creamy white curry carrying strong tones of cheese, cashew butter, green cardamom, and dry pepper.',
    isVeg: false,
    image: '/images/dishes/chicken_afghani.png',
  },
  {
    id: 'icc10',
    name: 'Chicken Chatpata',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'A tangier, rich medium curry spiced up with home-ground pickle powder and yellow mustard seed crust.',
    isVeg: false,
    image: '/images/dishes/chicken_chatpata.png',
  },
  {
    id: 'icc11',
    name: 'Butter Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Juicy tandoori chicken shreds stewed in a buttery, silky satin smooth tomato-cream gravy with sweet kasuri methi leaf.',
    isVeg: false,
    image: '/images/dishes/butter_chicken.png',
  },
  {
    id: 'icc12',
    name: 'Chicken Kolhapuri',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Blazing-hot, deep-red traditional Maratha rustic chicken gravy flavored with dry grated coconut and poppy seed.',
    isVeg: false,
    image: '/images/dishes/chicken_kolhapuri.png',
  },
  {
    id: 'icc13',
    name: 'Ginger Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Semi-dry dark chicken starter-curry cooked with a generous heap of ginger juliennes and capsicum slices.',
    isVeg: false,
    image: '/images/dishes/ginger_chicken.png',
  },
  {
    id: 'icc14',
    name: 'Andhra Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Fiery Andhra classic. Chicken simmered in heavy green chili paste, poppy seed purée and curry leaves.',
    isVeg: false,
    image: '/images/dishes/andhra_chicken.png',
  },
  {
    id: 'icc15',
    name: 'Telangana Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Earthy black pepper-forward dry robust chicken curry utilizing regional curry powder and roasted coconut powder.',
    isVeg: false,
    image: '/images/dishes/telangana_chicken.png',
  },
  {
    id: 'icc16',
    name: 'Kadai Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 320,
    description: 'Spiced chicken cooked inside active iron kadai with chunks of sweet bell peppers, tomato pieces, and fresh kadai powder.',
    isVeg: false,
    image: '/images/dishes/kadai_chicken.png',
  },
  {
    id: 'icc17',
    name: 'Chicken Tikka Masala',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 350,
    description: 'Smoked boneless chicken tikka cooked inside a medium spiced red onion-tomato masala base gravy with dry cilantro.',
    isVeg: false,
    image: '/images/dishes/chicken_tikka_masala.png',
  },
  {
    id: 'icc18',
    name: 'Punjabi Chicken',
    category: 'indian-chicken-curries',
    categoryLabel: 'Chicken Curries',
    price: 350,
    description: 'Heavy North-Indian style rustic chicken stew containing roasted coriander, dark tomato reduction, and fresh ghee.',
    isVeg: false,
    image: '/images/dishes/punjabi_chicken.png',
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
    image: '/images/dishes/special_veg_curry.png',
  },
  {
    id: 'vc2',
    name: 'Dal Fry',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 170,
    description: 'Yellow arhar lentils boiled to soft cream and fried inside iron kadai with ghee, cumin, tomato, and chili flakes.',
    isVeg: true,
    image: '/images/dishes/dal_fry.png',
  },
  {
    id: 'vc3',
    name: 'Dal Tadka',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 180,
    description: 'Silky smooth yellow lentils tempered dynamically with sizzling hot ghee, dry red kashmiri pepper, and royal cumin.',
    isVeg: true,
    image: '/images/dishes/dal_tadka.png',
  },
  {
    id: 'vc4',
    name: 'Veg Shabnam',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Garden mushrooms, sweet peas and cottage cheese squares folded elegantly inside velvety sweet almond-cream gravy.',
    isVeg: true,
    image: '/images/dishes/veg_shabnam.png',
  },
  {
    id: 'vc5',
    name: 'Kadai Veg',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Crisp assorted vegetables stirred dynamically with bell peppers, onions, and freshly dry-roasted kadai masala.',
    isVeg: true,
    image: '/images/dishes/kadai_veg.png',
  },
  {
    id: 'vc6',
    name: 'Mix Veg Curry',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'A comforting rich house-mix of carrots, beans, baby potatoes, green peas and cauliflower buds tossed in spices.',
    isVeg: true,
    image: '/images/dishes/mix_veg_curry.png',
  },
  {
    id: 'vc7',
    name: 'Aloo Gobi Kolhapuri',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Fiery-hot combination of baby potato slices and cauliflower florets in spicy coconut Kohapuri style dry gravy.',
    isVeg: true,
    image: '/images/dishes/aloo_gobi_kolhapuri.png',
  },
  {
    id: 'vc8',
    name: 'Veg Jaipuri',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Royal Rajasthani style spicy vegetable panache topped with crispy, layered papad crowns and coriander cream.',
    isVeg: true,
    image: '/images/dishes/veg_jaipuri.png',
  },
  {
    id: 'vc9',
    name: 'Veg Chatpata',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Tangy combination of baby vegetables cooked in onion-tomato purée enriched with sour pickle powder.',
    isVeg: true,
    image: '/images/dishes/veg_chatpata.png',
  },
  {
    id: 'vc10',
    name: 'Aloo Palak',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Crisped small potato cubes folded into smooth slow-simmered garlic spiced spinach leaf purée.',
    isVeg: true,
    image: '/images/dishes/aloo_palak.png',
  },
  {
    id: 'vc11',
    name: 'Plain Palak',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 300,
    description: 'Purified blanched spinach leaves, creamed to perfection with garlic bits, green chili, and roasted dry cumin.',
    isVeg: true,
    image: '/images/dishes/plain_palak.png',
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
    image: '/images/dishes/paneer_butter_masala.png',
  },
  {
    id: 'vc13',
    name: 'Paneer Shahi Khorma',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 320,
    description: 'Cottage cheese squares gently poached inside royal cream of cashew paste, cardamom base and milk pudding.',
    isVeg: true,
    image: '/images/dishes/paneer_shahi_khorma.png',
  },
  {
    id: 'vc14',
    name: 'Kaju Paneer',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 330,
    description: 'Ghee-roasted premium split cashew nuts and soft paneer chunks tossed together in sweet gravy.',
    isVeg: true,
    image: '/images/dishes/kaju_paneer.png',
  },
  {
    id: 'vc15',
    name: 'Kadai Paneer',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 330,
    description: 'Paneer fingers cooked with chunky tomatoes, sweet capsicums, red onion squares, and spicy kadai spices.',
    isVeg: true,
    image: '/images/dishes/kadai_paneer.png',
  },
  {
    id: 'vc16',
    name: 'Kaju Masala',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 350,
    description: 'The absolute royal luxury dish: golden ghee-fired cashew nuts in thick curry.',
    isVeg: true,
    image: '/images/dishes/kaju_masala.png',
  },
  {
    id: 'vc17',
    name: 'Malai Kofta',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 350,
    description: 'Soft potato and cheese kofta dumplings cooked inside cream and nut based sweet saffron sauce.',
    isVeg: true,
    image: '/images/dishes/malai_kofta.png',
  },
  {
    id: 'vc18',
    name: 'Palak Paneer',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 320,
    description: 'Juicy cottage cheese squares sautéed gently inside spinach purée tempered with robust charred garlic.',
    isVeg: true,
    image: '/images/dishes/palak_paneer.png',
  },
  {
    id: 'vc19',
    name: 'Paneer Do Pyaza',
    category: 'veg-curries',
    categoryLabel: 'Veg Curries',
    price: 320,
    description: 'Soft paneer tossed in two varieties of caramelized red onions, sweet tomatoes, cumin and garam masala.',
    isVeg: true,
    image: '/images/dishes/paneer_do_pyaza.png',
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
    image: '/images/dishes/chicken_fried_rice.png',
  },
  {
    id: 'fr2',
    name: 'Egg Fried Rice',
    category: 'fried-rice',
    categoryLabel: 'Fried Rice',
    price: 160,
    description: 'Scrambled golden eggs tossed masterfully with premium basmati rice, cabbage, carrots, and spring chives.',
    isVeg: false,
    image: '/images/dishes/egg_fried_rice.png',
  },
  {
    id: 'fr3',
    name: 'Veg Fried Rice',
    category: 'fried-rice',
    categoryLabel: 'Fried Rice',
    price: 160,
    description: 'Fragrant basmati rice tossed dynamically with crisp carrot bits, green peas, beans, garlic and white pepper leaves.',
    isVeg: true,
    image: '/images/dishes/veg_fried_rice.png',
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
    image: '/images/dishes/mix_fried_rice.png',
  },
  {
    id: 'fr5',
    name: 'Curd Rice',
    category: 'fried-rice',
    categoryLabel: 'Fried Rice',
    price: 160,
    description: 'Cooling, creamed yogurt rice mixed with pure ghee, tempered mustard seeds, copy green curry leaves, and raisins.',
    isVeg: true,
    image: '/images/dishes/curd_rice.png',
  },
  {
    id: 'fr6',
    name: 'Jeera Rice',
    category: 'fried-rice',
    categoryLabel: 'Fried Rice',
    price: 160,
    description: 'Buttery pan-fried basmati rice seasoned generously with aromatic crackled cumin seeds and cilantro stalks.',
    isVeg: true,
    image: '/images/dishes/jeera_rice.png',
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
    image: '/images/dishes/tandoori_roti.png',
  },
  {
    id: 'ir2',
    name: 'Rumali Roti',
    category: 'indian-rotis',
    categoryLabel: 'Indian Rotis',
    price: 25,
    description: 'An ultra-thin, handkerchief-like wheat flatbread tossed elegantly in the air and cooked on hot inverted wok.',
    isVeg: true,
    image: '/images/dishes/rumali_roti.png',
  },
  {
    id: 'ir3',
    name: 'Butter Naan',
    category: 'indian-rotis',
    categoryLabel: 'Indian Rotis',
    price: 45,
    description: 'Yeast leavened refined flour flatbread, roasted inside clay oven and layered with melted butter.',
    isVeg: true,
    image: '/images/dishes/butter_naan.png',
  },
  {
    id: 'ir4',
    name: 'Plain Naan',
    category: 'indian-rotis',
    categoryLabel: 'Indian Rotis',
    price: 35,
    description: 'Puffy, classic leavened hand-stretched soft flatbread, charcoal-scorched in the tandoor.',
    isVeg: true,
    image: '/images/dishes/plain_naan.png',
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
    image: '/images/dishes/garlic_naan.png',
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'ALL' },
  { id: 'chicken-starters', label: 'CHICKEN STARTERS' },
  { id: 'chicken-biryani', label: 'CHICKEN BIRYANI' },
  { id: 'mutton-biryani', label: 'MUTTON BIRYANI' },
  { id: 'veg-soups', label: 'VEG SOUPS' },
  { id: 'non-veg-soups', label: 'NON-VEG SOUPS' },
  { id: 'salads', label: 'SALADS' },
  { id: 'veg-biryani', label: 'VEG BIRYANI' },
  { id: 'noodles', label: 'NOODLES' },
  { id: 'chicken-kababs', label: 'CHICKEN KABABS' },
  { id: 'veg-starters', label: 'VEG STARTERS' },
  { id: 'indian-chicken-curries', label: 'INDIAN CHICKEN CURRIES' },
  { id: 'veg-curries', label: 'VEG CURRIES' },
  { id: 'fried-rice', label: 'FRIED RICE' },
  { id: 'indian-rotis', label: 'INDIAN ROTIS' }
];

export const CATEGORY_IMAGES: Record<string, string> = {
  'veg-soups': '/images/dishes/veg_soup.png',
  'non-veg-soups': '/images/dishes/chicken_soup.png',
  'salads': '/images/dishes/green_salad.png',
  'chicken-starters': '/images/dishes/chicken_starter.png',
  'chicken-biryani': '/images/dishes/chicken_biryani.png',
  'veg-biryani': '/images/dishes/veg_biryani.png',
  'noodles': '/images/dishes/chicken_noodles.png',
  'mutton-biryani': '/images/dishes/mutton_biryani.png',
  'chicken-kababs': '/images/dishes/chicken_kabab.png',
  'veg-starters': '/images/dishes/veg_starter.png',
  'indian-chicken-curries': '/images/dishes/butter_chicken.png',
  'veg-curries': '/images/dishes/veg_curry.png',
  'fried-rice': '/images/dishes/fried_rice.png',
  'indian-rotis': '/images/dishes/butter_naan.png',
};

export const HOTLINKS = {
  // Cinematic view of biryani pot
  heroBiryani: '/images/ui/hero_biryani.png',
  // Tandoori chicken selection spread
  tandooriSnacks: '/images/dishes/tandoori_snacks.png',
  // Butter chicken with garlic naan
  butterChicken: '/images/dishes/butter_chicken.png',
  // Premium dark table with brass utensils and dishes
  ourStory: '/images/ui/our_story.png'
};

export const getFoodItemImage = (name: string, category: string): string => {
  const item = MENU_ITEMS.find(i => i.name === name);
  if (item && item.image) {
    return item.image;
  }
  
  const normalizedName = name.toLowerCase();

  // Family Packs and Jumbo Packs (Festive indian spread)
  if (normalizedName.includes('family') || normalizedName.includes('jumbo') || normalizedName.includes('pack')) {
    if (normalizedName.includes('mutton')) {
      return '/images/dishes/mutton_biryani.png';
    }
    return '/images/dishes/chicken_biryani.png';
  }

  // Mutton Biryani items
  if (normalizedName.includes('mutton') && (normalizedName.includes('biryani') || normalizedName.includes('handi'))) {
    return '/images/dishes/mutton_biryani.png';
  }

  // Chicken Biryani items
  if (normalizedName.includes('chicken') && normalizedName.includes('fry piece biryani')) {
    return '/images/dishes/chicken_biryani.png';
  }
  if (normalizedName.includes('boneless chicken biryani') || normalizedName.includes('special boneless')) {
    return '/images/dishes/chicken_biryani.png';
  }
  if (normalizedName.includes('chicken') && (normalizedName.includes('biryani') || normalizedName.includes('handi'))) {
    return '/images/dishes/chicken_biryani.png';
  }

  // Veg Biryanis (paneer/kaju/etc)
  if (normalizedName.includes('veg') && normalizedName.includes('biryani')) {
    return '/images/dishes/veg_biryani.png';
  }
  if (normalizedName.includes('paneer') && normalizedName.includes('biryani')) {
    return '/images/dishes/veg_biryani.png';
  }
  if (normalizedName.includes('kaju') && normalizedName.includes('biryani')) {
    return '/images/dishes/veg_biryani.png';
  }

  // Butter chicken / curries
  if (normalizedName.includes('butter chicken') || normalizedName.includes('murg')) {
    return '/images/dishes/butter_chicken.png';
  }
  if (normalizedName.includes('paneer butter') || normalizedName.includes('paneer tikka masala') || normalizedName.includes('kadai paneer') || normalizedName.includes('shahi paneer')) {
    return '/images/dishes/veg_curry.png';
  }
  if (normalizedName.includes('palak paneer')) {
    return '/images/dishes/veg_curry.png';
  }

  // Chinese Starters / Manchuria / Chilly / Fry
  if (normalizedName.includes('chilly') || normalizedName.includes('manchuria') || normalizedName.includes('65') || normalizedName.includes('majestic') || normalizedName.includes('roast') || normalizedName.includes('lollipop') || normalizedName.includes('drum stick') || normalizedName.includes('starters')) {
    if (normalizedName.includes('paneer') || normalizedName.includes('gobi') || normalizedName.includes('veg') || normalizedName.includes('baby corn')) {
      return '/images/dishes/veg_starter.png';
    }
    return '/images/dishes/chicken_starter.png';
  }

  // Tandoor & Kababs
  if (normalizedName.includes('kabab') || normalizedName.includes('tikka') || normalizedName.includes('tandoori chicken') || normalizedName.includes('tangdi')) {
    return '/images/dishes/chicken_kabab.png';
  }

  // Rotis & Naan
  if (normalizedName.includes('naan') || normalizedName.includes('roti') || normalizedName.includes('paratha')) {
    return '/images/dishes/butter_naan.png';
  }

  // Noodles
  if (normalizedName.includes('noodles')) {
    return '/images/dishes/chicken_noodles.png';
  }

  // Fried Rice
  if (normalizedName.includes('fried rice') || normalizedName.includes('rice')) {
    return '/images/dishes/fried_rice.png';
  }

  // Salad
  if (normalizedName.includes('salad')) {
    return '/images/dishes/green_salad.png';
  }

  // Soups
  if (normalizedName.includes('soup')) {
    if (normalizedName.includes('chicken') || normalizedName.includes('meat')) {
      return '/images/dishes/chicken_soup.png';
    }
    return '/images/dishes/veg_soup.png';
  }

  // Fallbacks based on category keys
  if (category === 'chicken-biryani') {
    return '/images/dishes/chicken_biryani.png';
  }
  if (category === 'mutton-biryani') {
    return '/images/dishes/mutton_biryani.png';
  }
  if (category === 'veg-biryani') {
    return '/images/dishes/veg_biryani.png';
  }
  if (category === 'chicken-kababs') {
    return '/images/dishes/chicken_kabab.png';
  }
  if (category === 'indian-chicken-curries') {
    return '/images/dishes/butter_chicken.png';
  }
  if (category === 'veg-curries') {
    return '/images/dishes/veg_curry.png';
  }

  return CATEGORY_IMAGES[category] || '/images/dishes/chicken_biryani.png';
};
