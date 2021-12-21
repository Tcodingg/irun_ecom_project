const products = [
   {
      title: "Nike Revolution 5",
      details: "Men's Road Running Shoes",
      price: 88,
      description:
         "When the road beckons, answer the call in a lightweight pair that'll keep you moving mile after mile. Soft foam cushions your stride and a reinforced heel delivers a smooth, stable ride. Crafted from knit material for breathable support, while a minimalist design fits in just about anywhere your day takes you.",
      images: [
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/gxnjiwtoqqamijxhi72z/revolution-5-road-running-shoes-RNxmvG.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oi6eepwsqtgnkqwdh8m9/revolution-5-road-running-shoes-RNxmvG.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i2ciwiog27utsocvsl8o/revolution-5-road-running-shoes-RNxmvG.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oas6ifj7ek6erbiluwan/revolution-5-road-running-shoes-RNxmvG.png",
      ],
      isStock: 10,
      generalInfo:
         "Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.",
      gender: "male",
   },
   {
      title: "Nike Air Zoom Terra Kiger 7",
      details: "Men's Trail Running Shoes",
      price: 188,
      description:
         "Run the trail in a super-responsive running shoe.Fast and lightweight, it delivers a breathable and secure feel as you race over rocky paths.Updated traction lugs provide stability for your downhill miles.",
      images: [
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/756632cb-6150-4981-830f-5fc9f342c45c/air-zoom-terra-kiger-7-trail-running-shoes-PFRMNz.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/34b5705c-5857-408f-83ff-b1ee0f5356bc/air-zoom-terra-kiger-7-trail-running-shoes-PFRMNz.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9f904ace-f4a0-4975-916b-f62780c2a6ee/air-zoom-terra-kiger-7-trail-running-shoes-PFRMNz.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/93bf9135-e84f-48fe-aea1-34c1b4008e50/air-zoom-terra-kiger-7-trail-running-shoes-PFRMNz.png",
      ],
      isStock: 5,
      generalInfo:
         "Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.",
      gender: "male",
   },
   {
      title: "Nike Zoom Mamba 3",
      details: "Unisex Distance Spike",
      price: 132,
      description:
         "The Nike Zoom Mamba 3 Unisex Distance Spike is designed for the steeplechase with a single-layer, open-mesh upper and perforated sockliner to help let moisture out on the fly. Their six-pin spike configuration provides a close-to-the-ground feel and incredible traction.",
      images: [
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/iowamrpb5x4vgi4optpn/zoom-mamba-3-distance-spike-XPTbxzmO.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/omtvlntl5rzqqqnarf7q/zoom-mamba-3-distance-spike-XPTbxzmO.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/znal7qdgcqkgvarq0iww/zoom-mamba-3-distance-spike-XPTbxzmO.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/od7ciuwdanhvr1li55hh/zoom-mamba-3-distance-spike-XPTbxzmO.png",
      ],
      isStock: 10,
      generalInfo:
         "Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.",
      gender: "male",
   },
   {
      title: "Nike Zoom Rival S 9",
      details: "Athletics Sprinting Spikes",
      price: 85,
      description:
         "With a light feel and snug fit, the Nike Zoom Rival S 9 is built for smooth transitions.Designed with the sprinter in mind, it's ideal for events ranging from 60m to 400m, including hurdle events and the long jump.",
      images: [
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3b73bf40-0b9b-40f4-b7dc-0ed391505e0a/zoom-rival-s-9-athletics-sprinting-spikes-W2jlBw.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/13651687-3f34-4777-bfa3-883b46754b6e/zoom-rival-s-9-athletics-sprinting-spikes-W2jlBw.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/37c062b0-96dd-461d-9ef2-8581b482d477/zoom-rival-s-9-athletics-sprinting-spikes-W2jlBw.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1470134a-0ef2-4171-81a0-6e834b3c352c/zoom-rival-s-9-athletics-sprinting-spikes-W2jlBw.png",
      ],
      isStock: 3,
      generalInfo:
         "Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.",
      gender: "male",
   },

   // females
   {
      title: "Nike Flex Experience Run 10",
      details: "Women's Road Running Shoes",
      price: 85,
      description:
         "Simple and versatile, the Nike Flex Experience Run 10 is built for movement.Made for the casual runner, its secure design and lightweight cushioning in the heel help you put in miles.Bonus: The simple, redesigned upper pairs great with casual wear so you can enjoy comfort built for all-day wear.",
      images: [
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/57b9bcc4-fbf4-4217-accb-b6e0841b3b2f/flex-experience-run-10-road-running-shoes-jk3h62.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7f734b03-14d9-417f-81f3-e6f15902c661/flex-experience-run-10-road-running-shoes-jk3h62.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/494dc794-fcae-492c-b03d-082c4492d011/flex-experience-run-10-road-running-shoes-jk3h62.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/834cf08e-b450-4416-ac16-4f598ffbb26d/flex-experience-run-10-road-running-shoes-jk3h62.png",
      ],
      isStock: 3,
      generalInfo:
         "Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.",
      gender: "female",
   },
   {
      title: "Nike Air Zoom Pegasus 38 By You",
      details: "Women's Road Running Shoes",
      price: 180,
      description:
         "Your workhorse with wings returns. The Nike Air Zoom Pegasus 38 By You continues to put a spring in your step, using the same foam as its predecessor. Mesh in the upper combines together the comfort and durability you want with an optional FlyEase entry system that gets you in and out quickly and easily.",
      images: [
         "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/41dbf0fb-5080-4da7-ac0a-dbeed81e1af2/custom-nike-air-zoom-pegasus-38-by-you.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6f9bf68f-f4c8-4ae5-9ee5-9ac3cd243795/custom-nike-air-zoom-pegasus-38-by-you.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2d8244d7-bddf-43e3-afea-28ccbb0b78e1/custom-nike-air-zoom-pegasus-38-by-you.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7956cc54-0639-4faa-81c4-ed764fd3e2a1/custom-nike-air-zoom-pegasus-38-by-you.png",
      ],
      isStock: 6,
      generalInfo:
         "Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.",
      gender: "female",
   },
   {
      title: "Nike Internationalist By You",
      details: "Custom Women's Shoe",
      price: 145,
      description:
         "The Nike Internationalist Low By You celebrates a 1980s icon originally designed for serious runners who knew no bounds. Now fashioned for streetwear, this Internationalist lets you choose the materials from a selection of low-key earth tones. Top it off with throwback Nike branding or personal details so you can stand out in your neighbourhood or all over the world.",
      images: [
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/733b1064-c13d-4b60-b5b0-8bae4b565bcd/custom-nike-internationalist-low-by-you.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6ec42f99-faeb-42dc-87a2-f40b361ce518/custom-nike-internationalist-low-by-you.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2f0b8503-c6f2-49e9-84f6-fd441aa80a59/custom-nike-internationalist-low-by-you.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8ac969e2-c483-4fd8-a651-bc1a325d3e18/custom-nike-internationalist-low-by-you.png",
      ],
      isStock: 8,
      generalInfo:
         "Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.",
      gender: "female",
   },
   {
      title: "Nike Air Zoom Structure 23",
      details: "Women's Road Running Shoes",
      price: 128,
      description:
         "A favourite returns. Made for the runner looking for a shoe they can wear daily, the Nike Air Zoom Structure 23 keeps you cushioned with a plush, ventilated design. It's been built with a purpose—to give you a fast, secure and trusted training partner for your miles.",
      images: [
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fe4a9e23-1534-416b-b423-5a6d8758d1a9/air-zoom-structure-23-road-running-shoes-rn2NcN.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1759a6ee-4ce7-456b-ad9c-258eec1fbf1d/air-zoom-structure-23-road-running-shoes-rn2NcN.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8a34838e-8a80-4618-bf1c-c029265d7f5d/air-zoom-structure-23-road-running-shoes-rn2NcN.png",
         "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f3a1c5bd-9101-4f06-ba87-bf7bd9832bc2/air-zoom-structure-23-road-running-shoes-rn2NcN.png",
      ],
      isStock: 6,
      generalInfo:
         "Free standard delivery on orders over $175. Delivery may take longer than normal. Check your estimated delivery date at checkout. You can return your order for any reason, free of charge, within 60 days.",
      gender: "female",
   },
];
