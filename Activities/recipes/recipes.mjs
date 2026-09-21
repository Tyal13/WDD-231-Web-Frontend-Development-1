const cookies = [

    {
    "recipe_name": "Chocolate Chip Cookies",
    "notes": "A classic cookie recipe",
    "image": "images/cc-cookies.png",
    "type": "traditional",
    "ingredients": [
        {
            "name": "butter",
            "amounts": {
                "amount": "1",
                "unit": "lb"
            },
            "notes": "softened"
        },
        {
            "name": "brown sugar",
            "amounts": {
                "amount": "1 1/2",
                "unit": "cups"
            }
        },
        {
            "name": "white sugar",
            "amounts": {
                "amount": "1",
                "unit": "cup"
            }
        },
        {
            "name": "eggs",
            "amounts": {
                "amount": "3",
                "unit": "each"
            }
        },
        {
            "name": "vanilla",
            "amounts": {
                "amount": "2",
                "unit": "tsp"
            }
        },
        {
            "name": "baking soda",
            "amounts": {
                "amount": "1 1/2",
                "unit": "tsp"
            }
        },
        {
            "name": "salt",
            "amounts": {
                "amount": "1/2",
                "unit": "tsp"
            }
        },
        {
            "name": "flour",
            "amounts": {
                "amount": "5",
                "unit": "cups"
            },
            "notes": "we like 3 C white and 2 C whole wheat"
        },
        {
            "name": "semi-sweet chocolate chips",
            "amounts": {
                "amount": "2",
                "unit": "cups"
            }
        },
        {
            "name": "shredded coconut",
            "amounts": {
                "amount": "1-2",
                "unit": "cups"
            }
        }
    ],
    "steps": [
        "Cream the butter and sugar together, then beat in the eggs and vanilla",
        "Mix in salt, soda and flour",
        "Add chocolate chips and coconut",
        "Bake 8-10 minutes at 350 F"
    ]
},
{
    "recipe_name": "Triple Chocolate Cookies",
    "notes": "Rich, fudgy, and very chocolate forward",
    "image": "images/tc-cookies.png",
    "type": "traditional",
    "ingredients": [
        {
            "name": "butter",
            "amounts": {
                "amount": "1",
                "unit": "cup"
            },
            "notes": "softened"
        },
        {
            "name": "brown sugar",
            "amounts": {
                "amount": "1",
                "unit": "cup"
            }
        },
        {
            "name": "white sugar",
            "amounts": {
                "amount": "1/2",
                "unit": "cup"
            }
        },
        {
            "name": "eggs",
            "amounts": {
                "amount": "2",
                "unit": "each"
            }
        },
        {
            "name": "vanilla",
            "amounts": {
                "amount": "2",
                "unit": "tsp"
            }
        },
        {
            "name": "cocoa powder",
            "amounts": {
                "amount": "3/4",
                "unit": "cup"
            },
            "notes": "unsweetened, dutch process if you have it"
        },
        {
            "name": "baking soda",
            "amounts": {
                "amount": "1",
                "unit": "tsp"
            }
        },
        {
            "name": "salt",
            "amounts": {
                "amount": "1/2",
                "unit": "tsp"
            }
        },
        {
            "name": "flour",
            "amounts": {
                "amount": "2",
                "unit": "cups"
            }
        },
        {
            "name": "semi-sweet chocolate chips",
            "amounts": {
                "amount": "1",
                "unit": "cup"
            }
        },
        {
            "name": "white chocolate chips",
            "amounts": {
                "amount": "1",
                "unit": "cup"
            }
        }
    ],
    "steps": [
        "Cream the butter and both sugars together, then beat in the eggs and vanilla",
        "Sift in the cocoa, soda, salt and flour and mix until just combined",
        "Fold in both kinds of chocolate chips",
        "Bake 9-11 minutes at 350 F, they should still look soft in the middle"
    ]
}
];


    export function getRecipe() {
        return cookies;
    }
    