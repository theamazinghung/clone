let menu = [
    {
        name: "animal",
        element: [
            {
                name: "cat",
                img_url: '../Photos/Animals/cat.jpg'
            },
            {
                name: "dog",
                img_url: '../Photos/Animals/dog.jpg'
            },
            {
                name: "elephant",
                img_url: '../Photos/Animals/elephant.jpg'
            },
            {
                name: "dinosaur",
                img_url: '../Photos/Animals/dinosaur.jpg'
            },
            {
                name: "rhinoceros",
                img_url: '../Photos/Animals/rhinoceros.jpg'
            }
        ],
        background: "../Background/background-animals.css"
    },
    {
        name: "food",
        element: [
            {
                name: "pizza",
                img_url: '../Photos/food/pizza.png'
            },
            {
                name: "salad",
                img_url: '../Photos/food/salad.jpg'
            },
            {
                name: "steak",
                img_url: '../Photos/food/steak.jpg'
            },
            {
                name: "sausage",
                img_url: '../Photos/food/sausage.jpg'
            },
            {
                name: "popcorn",
                img_url: '../Photos/food/popcorn.jpg'
            }
        ],
        background: "../Background/background-food.css"
    },
    {
        name: "clothes",
        element: [
            {
                name: "hat",
                img_url: '../Photos/Clothes/hat.jpg'
            },
            {
                name: "shirt",
                img_url: '../Photos/Clothes/shirt.jpg'
            },
            {
                name: "skirt",
                img_url: '../Photos/Clothes/skirt.jpg'
            },
            {
                name: "jacket",
                img_url: '../Photos/Clothes/jacket.jpg'
            },
            {
                name: "trousers",
                img_url: '../Photos/Clothes/trousers.jpg'
            }
        ],
        background: "../Background/background-clothing.css"
    },
    {
        name: "weather",
        element: [
            {
                name: "rainy",
                img_url: '../Photos/weather/rainy.jpg'
            },
            {
                name: "windy",
                img_url: '../Photos/weather/windy.jpg'
            },
            {
                name: "sunny",
                img_url: '../Photos/weather/sunny.jpg'
            },
            {
                name: "foggy",
                img_url: '../Photos/weather/foggy.png'
            },
            {
                name: "stormy",
                img_url: '../Photos/weather/stormy.jpg'
            }
        ],
        background: "../Background/background-weather.css"
    },
    {
        name: "house",
        element: [
            {
                name: "door",
                img_url: '../Photos/house/door.jpg'
            },
            {
                name: "sink",
                img_url: '../Photos/house/sink.png'
            },
            {
                name: "kitchen",
                img_url: '../Photos/house/kitchen.jpg'
            },
            {
                name: "television",
                img_url: '../Photos/house/television.jpg'
            },
            {
                name: "microwave",
                img_url: '../Photos/house/microwave.jpg'
            }
        ],
        background: "../Background/background-house.css"
    },
    {
        name: "transport",
        element: [
            {
                name: "car",
                img_url: '../Photos/transport/car.jpg'
            },
            {
                name: "train",
                img_url: '../Photos/transport/train.jpg'
            },
            {
                name: "plane",
                img_url: '../Photos/transport/plane.jpg'
            },
            {
                name: "bicycle",
                img_url: '../Photos/transport/bicycle.jpg'
            },
            {
                name: "helicopter",
                img_url: '../Photos/transport/helicopter.jpg'
            }
        ],
        background: "../Background/background-transport.css"
    }
]

// Ảnh đầu rắn
var imgHeadRight = new Image();
imgHeadRight.src = "../Photos/head/head_right.png";
var imgHeadDown = new Image();
imgHeadDown.src = "../Photos/head/head_down.png";
var imgHeadLeft = new Image();
imgHeadLeft.src = "../Photos/head/head_left.png";
var imgHeadUp = new Image();
imgHeadUp.src = "../Photos/head/head_up.png";

// Ảnh đuôi rắn
var imgTailRight = new Image();
imgTailRight.src = "../Photos/head/tail_right.png";
var imgTailDown = new Image();
imgTailDown.src = "../Photos/head/tail_down.png";
var imgTailLeft = new Image();
imgTailLeft.src = "../Photos/head/tail_left.png";
var imgTailUp = new Image();
imgTailUp.src = "../Photos/head/tail_up.png";

// Ảnh thân rắn
let body_horizontal = new Image();
body_horizontal.src = "../Photos/head/body_horizontal.png";
let body_vertical = new Image();
body_vertical.src = "../Photos/head/body_vertical.png";

// Ảnh góc cua
let turn_right_down_img = new Image();
turn_right_down_img.src = "../Photos/head/going_right_down.png";
let turn_left_down_img = new Image();
turn_left_down_img.src = "../Photos/head/going_left_down.png";
let turn_right_up_img = new Image();
turn_right_up_img.src = "../Photos/head/going_right_up.png";
let turn_left_up_img = new Image();
turn_left_up_img.src = "../Photos/head/going_left_up.png";