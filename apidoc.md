# 🔍 Search API

## Overview

This API allows clients to search for products based on category, keyword, and dynamic filters.

---

## 📌 URL

Endpoint:
GET /api/search

Base URL:
http://localhost:4000

Full URL:
http://localhost:4000/api/search



---

## 💡 Query Parameters

| Parameter   | Type     | Required | Description                                                                 |
|-------------|----------|----------|-----------------------------------------------------------------------------|
| `category`  | `string` | No       | Slug or ID of the category to filter results (e.g., `running-shoes`)       |
| `filters`   | `object` (JSON string) | No | Dynamic filters (e.g., brand, size, price). Should be passed as a JSON string |
| `q`         | `string` | No       | Search keyword (e.g., `"book"`)                                            |

---

## 📥 Example Requests

### Basic Search
```
GET /api/search?category=running-shoes&filters={}&q="book"
```

### With Filters

```
GET /api/search?category=running-shoes&filters={"brand":["Nike","Adidas"],"price":{"gte":100,"lte":300}}&q=book
```


## 📤 Example Response

```
{
    "status": true,
    "message": "Your request is successfully executed",
    "data": {
        "results": [
            {
                "_id": "68382b8b52392119dce340fc",
                "title": "Nike Fresh Foam Men's Running Shoes",
                "description": "High-performance black running shoes in size 7. The teal Salad combines Hong Kong aesthetics with Seaborgium-based durability",
                "price": 137.66,
                "location": "Lindgrenshire",
                "attributes": {
                    "size": "7",
                    "color": "black",
                    "gender": "men",
                    "width": "regular",
                    "archSupport": "high"
                }
            },
            {
                "_id": "68382b8b52392119dce340fd",
                "title": "Brooks Ghost  Running Shoes",
                "description": "High-performance black running shoes in size 10. New turquoise Chair with ergonomic design for webbed comfort",
                "price": 87.7,
                "location": "East Noelia",
                "attributes": {
                    "size": "10",
                    "color": "black",
                    "gender": "unisex",
                    "width": "wide",
                    "archSupport": "medium"
                }
            },
            {
                "_id": "68382b8b52392119dce340fe",
                "title": "Brooks Ride Women's Running Shoes",
                "description": "High-performance green running shoes in size 11. The sleek and subdued Pants comes with grey LED lighting for smart functionality",
                "price": 79.5,
                "location": "Fort Clark",
                "attributes": {
                    "size": "11",
                    "color": "green",
                    "gender": "women",
                    "width": "regular",
                    "archSupport": "low"
                }
            },
            {
                "_id": "68382b8b52392119dce340ff",
                "title": "Nike Gel-Kayano Women's Running Shoes",
                "description": "High-performance white running shoes in size 8. The Open-architected neutral instruction set Pizza offers reliable performance and marvelous design",
                "price": 93.72,
                "location": "South Emie",
                "attributes": {
                    "size": "8",
                    "color": "white",
                    "gender": "women",
                    "width": "regular",
                    "archSupport": "high"
                }
            },
            {
                "_id": "68382b8b52392119dce340f3",
                "title": "New Balance Ultraboost Women's Running Shoes",
                "description": "High-performance green running shoes in size 7. Our parrot-friendly Mouse ensures taut comfort for your pets",
                "price": 233.39,
                "location": "Salem",
                "attributes": {
                    "size": "7",
                    "color": "green",
                    "gender": "women",
                    "width": "narrow",
                    "archSupport": "high"
                }
            },
            {
                "_id": "68382b8b52392119dce340f4",
                "title": "Asics Air Max Men's Running Shoes",
                "description": "High-performance red running shoes in size 9. The Tyler Shoes is the latest in a series of trained products from Block - Larson",
                "price": 99.07,
                "location": "Luciusport",
                "attributes": {
                    "size": "9",
                    "color": "red",
                    "gender": "men",
                    "width": "narrow",
                    "archSupport": "medium"
                }
            },
            {
                "_id": "68382b8b52392119dce340f5",
                "title": "Saucony Fresh Foam Women's Running Shoes",
                "description": "High-performance red running shoes in size 11. Introducing the Bolivia-inspired Table, blending confused style with local craftsmanship",
                "price": 199.99,
                "location": "Rustyside",
                "attributes": {
                    "size": "11",
                    "color": "red",
                    "gender": "women",
                    "width": "narrow",
                    "archSupport": "high"
                }
            },
            {
                "_id": "68382b8b52392119dce340f6",
                "title": "Adidas Fresh Foam  Running Shoes",
                "description": "High-performance blue running shoes in size 10. Introducing the Yemen-inspired Towels, blending young style with local craftsmanship",
                "price": 78.04,
                "location": "Wardberg",
                "attributes": {
                    "size": "10",
                    "color": "blue",
                    "gender": "unisex",
                    "width": "wide",
                    "archSupport": "medium"
                }
            },
            {
                "_id": "68382b8b52392119dce340f7",
                "title": "New Balance Air Max Women's Running Shoes",
                "description": "High-performance blue running shoes in size 7. The sleek and quintessential Chicken comes with magenta LED lighting for smart functionality",
                "price": 204.83,
                "location": "Hamilton",
                "attributes": {
                    "size": "7",
                    "color": "blue",
                    "gender": "women",
                    "width": "regular",
                    "archSupport": "medium"
                }
            },
            {
                "_id": "68382b8b52392119dce340f8",
                "title": "Brooks Gel-Kayano Men's Running Shoes",
                "description": "High-performance blue running shoes in size 9. Ergonomic Pants made with Granite for all-day crazy support",
                "price": 152.31,
                "location": "New Lornastead",
                "attributes": {
                    "size": "9",
                    "color": "blue",
                    "gender": "men",
                    "width": "regular",
                    "archSupport": "low"
                }
            },
            {
                "_id": "68382b8b52392119dce340f9",
                "title": "Brooks Ride  Running Shoes",
                "description": "High-performance red running shoes in size 9. Experience the silver brilliance of our Gloves, perfect for productive environments",
                "price": 248.84,
                "location": "Millsworth",
                "attributes": {
                    "size": "9",
                    "color": "red",
                    "gender": "unisex",
                    "width": "wide",
                    "archSupport": "low"
                }
            },
            {
                "_id": "68382b8b52392119dce340fa",
                "title": "Nike Fresh Foam  Running Shoes",
                "description": "High-performance red running shoes in size 7. Professional-grade Car perfect for salty training and recreational use",
                "price": 98.5,
                "location": "Goldnertown",
                "attributes": {
                    "size": "7",
                    "color": "red",
                    "gender": "unisex",
                    "width": "narrow",
                    "archSupport": "low"
                }
            },
            {
                "_id": "68382b8b52392119dce340fb",
                "title": "Brooks Ride Men's Running Shoes",
                "description": "High-performance black running shoes in size 7. Our rabbit-friendly Pizza ensures spirited comfort for your pets",
                "price": 162.16,
                "location": "Fort Cathyborough",
                "attributes": {
                    "size": "7",
                    "color": "black",
                    "gender": "men",
                    "width": "regular",
                    "archSupport": "low"
                }
            },
            {
                "_id": "68382b8b52392119dce340f1",
                "title": "New Balance Air Max Men's Running Shoes",
                "description": "High-performance black running shoes in size 9. New teal Pizza with ergonomic design for stale comfort",
                "price": 128.09,
                "location": "New Zachary",
                "attributes": {
                    "size": "9",
                    "color": "black",
                    "gender": "men",
                    "width": "regular",
                    "archSupport": "high"
                }
            },
            {
                "_id": "68382b8b52392119dce340f2",
                "title": "New Balance Ultraboost Men's Running Shoes",
                "description": "High-performance blue running shoes in size 11. Featuring Berkelium-enhanced technology, our Bike offers unparalleled empty performance",
                "price": 156.25,
                "location": "Roanoke",
                "attributes": {
                    "size": "11",
                    "color": "blue",
                    "gender": "men",
                    "width": "wide",
                    "archSupport": "high"
                }
            }
        ],
        "facets": {
            "size": {
                "name": "Size",
                "type": "enum",
                "options": [
                    {
                        "value": "7",
                        "count": 5
                    },
                    {
                        "value": "8",
                        "count": 1
                    },
                    {
                        "value": "9",
                        "count": 4
                    },
                    {
                        "value": "10",
                        "count": 2
                    },
                    {
                        "value": "11",
                        "count": 3
                    }
                ]
            },
            "color": {
                "name": "Color",
                "type": "enum",
                "options": [
                    {
                        "value": "red",
                        "count": 4
                    },
                    {
                        "value": "blue",
                        "count": 4
                    },
                    {
                        "value": "black",
                        "count": 4
                    },
                    {
                        "value": "white",
                        "count": 1
                    },
                    {
                        "value": "green",
                        "count": 2
                    }
                ]
            },
            "gender": {
                "name": "Gender",
                "type": "enum",
                "options": [
                    {
                        "value": "men",
                        "count": 6
                    },
                    {
                        "value": "women",
                        "count": 5
                    },
                    {
                        "value": "unisex",
                        "count": 4
                    }
                ]
            },
            "width": {
                "name": "Width",
                "type": "enum",
                "options": [
                    {
                        "value": "narrow",
                        "count": 4
                    },
                    {
                        "value": "regular",
                        "count": 7
                    },
                    {
                        "value": "wide",
                        "count": 4
                    }
                ]
            },
            "archSupport": {
                "name": "Arch Support",
                "type": "enum",
                "options": [
                    {
                        "value": "low",
                        "count": 5
                    },
                    {
                        "value": "medium",
                        "count": 4
                    },
                    {
                        "value": "high",
                        "count": 6
                    }
                ]
            }
        },
        "totalResults": 15,
        "categorys": [
            {
                "_id": "68382b8b52392119dce340ed",
                "name": "Running Shoes",
                "slug": "running-shoes"
            },
            {
                "_id": "68382b8b52392119dce340ee",
                "name": "Televisions",
                "slug": "televisions"
            }
        ]
    }
}

```