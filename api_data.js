define({ "api": [
  {
    "type": "get",
    "url": "/admin/API",
    "title": "Api",
    "group": "API",
    "description": "<p>Get all api credentials.</p>",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "{\n    \"geocoding\":{\n        \"id\": Client id\n    },\n    \"email\":{\n        \"id\": Client id\n    },\n    \"paypal\":{\n        \"id\": Client id,\n        \"secret\": Client secret\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Admin/APIController.java",
    "groupTitle": "API",
    "name": "GetAdminApi"
  },
  {
    "type": "post",
    "url": "/admin/API/update/email",
    "title": "Email Api",
    "group": "API",
    "description": "<p>Update email Api.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Sendgrid client id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Admin/APIController.java",
    "groupTitle": "API",
    "name": "PostAdminApiUpdateEmail"
  },
  {
    "type": "post",
    "url": "/admin/API/update/geocoding",
    "title": "Geocoding Api",
    "group": "API",
    "description": "<p>Update geocoding Api.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Google geocoding client id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Admin/APIController.java",
    "groupTitle": "API",
    "name": "PostAdminApiUpdateGeocoding"
  },
  {
    "type": "post",
    "url": "/admin/API/update/paypal",
    "title": "Paypal Api",
    "group": "API",
    "description": "<p>Update paypal Api.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>paypal client id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secret",
            "description": "<p>paypal client secret.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Admin/APIController.java",
    "groupTitle": "API",
    "name": "PostAdminApiUpdatePaypal"
  },
  {
    "type": "post",
    "url": "/address/get",
    "title": "Get Address",
    "description": "<p>Get complete address using postal code &amp; addressline.</p>",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postalCode",
            "description": "<p>Pincode/Zipcode.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressLine",
            "description": "<p>Address Line to identify a location within a city.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response:-",
          "content": "{\n\"postalCode\": Pincode/Zipcode,\n\"addressLine\": Address Line,\n\"city\": City,\n\"state\": State,\n\"country\": Country\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "-",
            "description": "<p>Invalid pincode/addressLine combination.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/AddressController.java",
    "groupTitle": "Address",
    "name": "PostAddressGet"
  },
  {
    "type": "get",
    "url": "/ad/rate",
    "title": "Advertisement",
    "group": "Advertisement",
    "description": "<p>Get advertisement commission rates($) for different coverage of operation.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "city",
            "description": "<p>City coverage commission.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "state",
            "description": "<p>State coverage commission.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "country",
            "description": "<p>Country coverage commission.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/AdvertisementController.java",
    "groupTitle": "Advertisement",
    "name": "GetAdRate"
  },
  {
    "type": "get",
    "url": "/admin/ad/update",
    "title": "Update Ad",
    "group": "Advertisement",
    "description": "<p>Update advertisement commission.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "amt",
            "description": "<p>Amount in $.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "allowedValues": [
              "\"1->City coverage\"",
              "\"2->State coverage\"",
              "\"3->Country coverage\"",
              "\"4->International coverage\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Coverage of advertisement.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "-",
            "description": "<p>&quot;type&quot; parameter is invalid.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Admin/AdvertisementController.java",
    "groupTitle": "Advertisement",
    "name": "GetAdminAdUpdate"
  },
  {
    "type": "get",
    "url": "/user/resetPassword/",
    "title": "Password token",
    "description": "<p>Generate token for password resetting. This token will be sent to the provided email address.</p>",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Email Address</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Email id not found.</p>"
          }
        ],
        "503": [
          {
            "group": "503",
            "optional": false,
            "field": "-",
            "description": "<p>Email Service is not working.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/UserController.java",
    "groupTitle": "Auth",
    "name": "GetUserResetpassword"
  },
  {
    "type": "post",
    "url": "/user/auth",
    "title": "User Login",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token required for every request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"seller\"",
              "\"courier\"",
              "\"customer\"",
              "\"designer\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>user type</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "-",
            "description": "<p>Username/Password is wrong</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "-",
            "description": "<p>Email is not verified</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/UserController.java",
    "groupTitle": "Auth",
    "name": "PostUserAuth"
  },
  {
    "type": "post",
    "url": "/user/new",
    "title": "Register",
    "description": "<p>New User Registration</p>",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"customer\"",
              "\"seller\"",
              "\"courier\"",
              "\"designer\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>User types.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Full Name of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "-",
            "description": "<p>Wrong user type provided</p>"
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "-",
            "description": "<p>User with given email already exists</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/UserController.java",
    "groupTitle": "Auth",
    "name": "PostUserNew"
  },
  {
    "type": "post",
    "url": "/user/OTP",
    "title": "Email Verification",
    "description": "<p>Verify email address after registration</p>",
    "group": "Auth",
    "parameter": {
      "examples": [
        {
          "title": "Request:-",
          "content": "{\n\"id\":Email address of the user,\n\"otp\": \"OTP sent to the email address after registration\",\n//for seller account\n\"address\":{\"postalCode\": \"Pincode/Zipcode of the printing company's address\", \"addressLine\":\"Address Line\"},\n\"paypal\":\"Paypal email address\",\n\"ltime\":\"Lead time for an order completion\",\n\"price\":\"Default price for card printing (for cards uploaded by users)\",\n\"phone\":\"Phone number\"\n//Below are optional\n\"description\": \"Seller's company's description\",\n\"name\":\"Name used on the dashboard\"     *\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "-",
            "description": "<p>Invalid data.</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "-",
            "description": "<p>OTP is wrong</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Email Address is not registered</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/UserController.java",
    "groupTitle": "Auth",
    "name": "PostUserOtp"
  },
  {
    "type": "post",
    "url": "/user/resetPassword/",
    "title": "Reset password",
    "description": "<p>Reset Password</p>",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>password token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "-",
            "description": "<p>Wrong password token provided</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>No user with such email address</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/UserController.java",
    "groupTitle": "Auth",
    "name": "PostUserResetpassword"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_praveenfun2_Desktop_TeqnicardApis_doc_main_js",
    "groupTitle": "C__Users_praveenfun2_Desktop_TeqnicardApis_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/card",
    "title": "Card Details",
    "description": "<p>Get the details of a card design.</p>",
    "group": "Cards",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>card id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Card identified by &quot;id&quot; is not found.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "{\n\"name\":\"Card name\",\n\"sid\":\"seller id\",\n\"sname\":\"seller name\",\n\"id\":card id,\n\"finishes\":[paper finish names],\n\"papers\":[paper quality names],\n\"images\":[{\n\"id\":\"Image id.\",\n\"fileName\":\"Image file name.\",\n\"color\":\"Color variant of the card design through which the image is constructed.\"\n}],\n\"subCategories\":[card sub-categories],\n\"price\":card price,\n\"category\": card category,\n\"side\": 1->front side; 2->back side,\n\"discountedPrice\":price after any discount. Null if no discount available\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/CardsController.java",
    "groupTitle": "Cards",
    "name": "GetCard"
  },
  {
    "type": "get",
    "url": "/card/filter/",
    "title": "Card List",
    "description": "<p>Get a list of card designs filtered based on parameters passed.</p>",
    "group": "Cards",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "minPrice",
            "defaultValue": "0",
            "description": "<p>Minimum price for the cards.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "maxPrice",
            "defaultValue": "INT_MAX",
            "description": "<p>Maximum price for the cards.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>type of card: 1-&gt;front design, 2-&gt;back design.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "sids",
            "description": "<p>Ids of the printing companies.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long[]",
            "optional": true,
            "field": "cats",
            "description": "<p>Ids of the Card categories.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long[]",
            "optional": true,
            "field": "subcats",
            "description": "<p>Ids of the Card sub-categories.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long[]",
            "optional": true,
            "field": "pqids",
            "description": "<p>Ids of the paper qualities.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long[]",
            "optional": true,
            "field": "fids",
            "description": "<p>Ids of the paper finishes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "lat",
            "description": "<p>Current latitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "lon",
            "description": "<p>Current longitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"distance\"",
              "\"price\""
            ],
            "optional": true,
            "field": "order",
            "description": "<p>Cards are sorted based on the order.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "[{\n\"name\":\"Card name\",\n\"sid\":\"seller id\",\n\"sname\":\"seller name\",\n\"id\":\"card id\",\n\"images\":[{\n\"id\":\"Image id.\",\n\"fileName\":\"Image file name.\",\n\"color\":\"Color variant of the card design through which the image is constructed.\"\n}],\n\"price\":\"Card price\",\n\"discountedPrice\":\"Price after any discount. Null if no discount available,\"\n\"distance\": \"If lat-lon provided with request, else null\" {\n\"value\": \"Distance of the seller from the lat-lon provided.\",\n\"unit\":\"Km\"\n}\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/CardsController.java",
    "groupTitle": "Cards",
    "name": "GetCardFilter"
  },
  {
    "type": "get",
    "url": "/seller/card",
    "title": "Card Designs.",
    "description": "<p>Get all the card designs uploaded by the seller.</p>",
    "group": "Cards",
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Card identified by &quot;id&quot; is not found.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "{\n\"fCards\":[{\n\"name\":\"Card name\",\n\"id\":card id,\n\"finishes\":[paper finish names],\n\"papers\":[paper quality names],\n\"images\":[card images],\n\"subCategories\":[card sub-categories],\n\"price\":card price,\n\"category\": card category,\n\"layout\": 1->Landscape, 2->Portrait,\n}],\n\"bCards\":[{\n\"name\":\"Card name\",\n\"id\":card id,\n\"price\":card price,\n\"layout\": 1->Landscape, 2->Portrait,\n\"images\":[card images]\n}]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Seller/CardsController.java",
    "groupTitle": "Cards",
    "name": "GetSellerCard"
  },
  {
    "type": "get",
    "url": "/seller/card/remove",
    "title": "Remove Card design.",
    "description": "<p>Remove seller uploaded card design.</p>",
    "group": "Cards",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "cid",
            "description": "<p>card id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "-",
            "description": "<p>User is unauthorized to delete this card.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Card identified by &quot;id&quot; is not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Seller/CardsController.java",
    "groupTitle": "Cards",
    "name": "GetSellerCardRemove"
  },
  {
    "type": "post",
    "url": "/seller/card/new",
    "title": "New Card",
    "description": "<p>Upload a new card desgin.</p>",
    "group": "Cards",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Base64 encoded image data. Image may contain transparent data. All the transparent points in the image will be filled with chosen colors.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "color",
            "description": "<p>Hexadecimal color array to fill the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "layout",
            "description": "<p>1-&gt;Landscape, 2-&gt;Portrait.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "side",
            "description": "<p>1-&gt;Front side, 2-&gt;Back Side.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "price",
            "description": "<p>Price of the card. Should be only upto 2 decimal places precise.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Card name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "cat",
            "description": "<p>Category id allotted to the card. Applicable only for front side card design.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long[]",
            "optional": false,
            "field": "subcat",
            "description": "<p>Sub-category ids allotted to the card. Applicable only for front side card design.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long[]",
            "optional": false,
            "field": "paper",
            "description": "<p>Seller specific paper Quality ids allotted to the card. Applicable only for front side card design.</p>"
          },
          {
            "group": "Parameter",
            "type": "Long[]",
            "optional": false,
            "field": "finish",
            "description": "<p>Seller specific paper Finish ids allotted to the card. Applicable only for front side card design.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "-",
            "description": "<p>Seller is not authorized to upload cards.</p>"
          }
        ],
        "503": [
          {
            "group": "503",
            "optional": false,
            "field": "-",
            "description": "<p>Image Service is not responding.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Seller/CardsController.java",
    "groupTitle": "Cards",
    "name": "PostSellerCardNew"
  },
  {
    "type": "get",
    "url": "/customer/cart/remove",
    "title": "Remove cartItem.",
    "description": "<p>Remove a card design from cart.</p>",
    "group": "Cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "cartItemId",
            "description": "<p>CartItem's id to remove.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "-",
            "description": "<p>Invalid input data.</p>"
          }
        ],
        "503": [
          {
            "group": "503",
            "optional": false,
            "field": "-",
            "description": "<p>Image Service(S3) is not working.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Customer/CartController.java",
    "groupTitle": "Cart",
    "name": "GetCustomerCartRemove"
  },
  {
    "type": "post",
    "url": "/customer/cart/add",
    "title": "New cart item",
    "description": "<p>Add a new card design to cart.</p>",
    "group": "Cart",
    "parameter": {
      "examples": [
        {
          "title": "Request:",
          "content": "{\n\"sellerId\": \"Id of the printing company to which this card design is assigned if customer is using a custom card.\",\n\"fItem\":\"details of front card design\" {\n\"image\":{\"id\":\"Background image id\"},\n\"textBoxes\":[{\n\"content\":\"content of the text box\",\n\"x\":\"x - coordinate w.r.t to the card's top-left corner in % of card's width\",\n\"y\":\"y - coordinate w.r.t to the card's top-left corner in % of card's height\",\n\"w\":\"textBox's width w.r.t to the card's width in %\",\n\"h\":\"textBox's height w.r.t to the card's width in % height\"\n}],\n//logo is optional\n\"logo\":\"base64 encoded logo image file\",\n\"lx\":\"logo's x coordinate\",\n\"ly\":\"logo's y coordinate\",\n\"lw\":\"logo's width\",\n\"lh\":\"logo's height\"\n},\n\"bItem\":\"details of back card design\" {\n\"image\":{\"id\":\"Background image id\"},\n\"textBoxes\":[{\n\"content\":\"content of the text box\",\n\"x\":\"x - coordinate w.r.t to the card's top-left corner in % of card's width\",\n\"y\":\"y - coordinate w.r.t to the card's top-left corner in % of card's height\",\n\"w\":\"textBox's width w.r.t to the card's width in %\",\n\"h\":\"textBox's height w.r.t to the card's width in % height\"\n}],\n//logo is optional\n\"logo\":\"base64 encoded logo image file\",\n\"lx\":\"logo's x coordinate\",\n\"ly\":\"logo's y coordinate\",\n\"lw\":\"logo's width\",\n\"lh\":\"logo's height\",\n//qr is optional\n\"qr\":\"qr content\",\n\"qrs\":\"qr image size in % of card's width\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "-",
            "description": "<p>Invalid input data.</p>"
          }
        ],
        "503": [
          {
            "group": "503",
            "optional": false,
            "field": "-",
            "description": "<p>Image Service(S3) is not working.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Customer/CartController.java",
    "groupTitle": "Cart",
    "name": "PostCustomerCartAdd"
  },
  {
    "type": "post",
    "url": "/customer/cart/update",
    "title": "Update cart item",
    "description": "<p>Update a card design from cart.</p>",
    "group": "Cart",
    "parameter": {
      "examples": [
        {
          "title": "Request:",
          "content": "{\n\"id\":\"CartItem id\",\n//All below parameters are optional. Only the provided parameters will be updated.\n\"fItem\":\"details of front card design\" {\n\"textBoxes\":[{\n\"content\":\"content of the text box\",\n\"image\":{\"id\":\"Background image id\"},\n\"x\":\"x - coordinate w.r.t to the card's top-left corner in % of card's width\",\n\"y\":\"y - coordinate w.r.t to the card's top-left corner in % of card's height\",\n\"w\":\"textBox's width w.r.t to the card's width in %\",\n\"h\":\"textBox's height w.r.t to the card's width in % height\"\n}],\n//logo is optional\n\"logo\":\"base64 encoded logo image file\",\n\"lx\":\"logo's x coordinate\",\n\"ly\":\"logo's y coordinate\",\n\"lw\":\"logo's width\",\n\"lh\":\"logo's height\"\n},\n\"bItem\":\"details of back card design\" {\n\"image\":{\"id\":\"Background image id\"},\n\"textBoxes\":[{\n\"content\":\"content of the text box\",\n\"x\":\"x - coordinate w.r.t to the card's top-left corner in % of card's width\",\n\"y\":\"y - coordinate w.r.t to the card's top-left corner in % of card's height\",\n\"w\":\"textBox's width w.r.t to the card's width in %\",\n\"h\":\"textBox's height w.r.t to the card's width in % height\"\n}],\n//logo is optional\n\"logo\":\"base64 encoded logo image file\",\n\"lx\":\"logo's x coordinate\",\n\"ly\":\"logo's y coordinate\",\n\"lw\":\"logo's width\",\n\"lh\":\"logo's height\",\n//qr is optional\n\"qr\":\"qr content\",\n\"qrs\":\"qr image size in % of card's width\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "-",
            "description": "<p>Invalid input data.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Invalid cartItem id.</p>"
          }
        ],
        "503": [
          {
            "group": "503",
            "optional": false,
            "field": "-",
            "description": "<p>Image Service(S3) is not working.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Customer/CartController.java",
    "groupTitle": "Cart",
    "name": "PostCustomerCartUpdate"
  },
  {
    "type": "get",
    "url": "/category",
    "title": "Category & sub-category",
    "description": "<p>Category &amp; sub-category list.</p>",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": true,
            "field": "id",
            "description": "<p>category id - to obtain sub categories of a particular category. If not provided, returns all categories.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "[{\n\"id\": \"category id\",\n\"name\": \"category name\",\n\"subCategories\":[{\n\"id\": \"sub-category id\",\n\"name\": \"sub-category name\"\n}]\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Category with the given id (if provided) is not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/CategoryController.java",
    "groupTitle": "Category",
    "name": "GetCategory"
  },
  {
    "type": "get",
    "url": "/subcategory",
    "title": "Sub-categories",
    "group": "Category",
    "description": "<p>Get the sub-categories of the category identified by &quot;catid&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "catid",
            "description": "<p>Category id</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Category not found/wrong id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "[{\n    \"id\": sub-category id,\n    \"name\": sub-category name\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/SubCategoryController.java",
    "groupTitle": "Category",
    "name": "GetSubcategory"
  },
  {
    "type": "get",
    "url": "/commission",
    "title": "Commission",
    "group": "Commission",
    "description": "<p>Get commission rates(%) for different service providers.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "seller",
            "description": "<p>Seller Commission.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "designer",
            "description": "<p>Designer Commission.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "courier",
            "description": "<p>Courier Commission.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/CommissionController.java",
    "groupTitle": "Commission",
    "name": "GetCommission"
  },
  {
    "type": "get",
    "url": "/image/card/{filename}",
    "title": "Card image",
    "description": "<p>Get the card image with name &quot;filename&quot;.</p>",
    "group": "Images",
    "error": {
      "fields": {
        "503": [
          {
            "group": "503",
            "optional": false,
            "field": "-",
            "description": "<p>Image Service not responding.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "byte[]",
            "optional": false,
            "field": "-",
            "description": "<p>Image data in bytes.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/ImageController.java",
    "groupTitle": "Images",
    "name": "GetImageCardFilename"
  },
  {
    "type": "get",
    "url": "/finish",
    "title": "Paper Finishes",
    "description": "<p>All paper finishes list.</p>",
    "group": "Paper_Finish",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "[{\n\"id\": \"paper finish id\",\n\"name\": \"paper finish name\",\n\"description\":\"Description of paper finish\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/FinishController.java",
    "groupTitle": "Paper_Finish",
    "name": "GetFinish"
  },
  {
    "type": "get",
    "url": "/seller/finish",
    "title": "Seller paper finishes.",
    "description": "<p>Get all the paper finishes supported by the seller.</p>",
    "group": "Paper_Finish",
    "success": {
      "examples": [
        {
          "title": "Example:-",
          "content": "[{\n    \"id\": Paper finish id,\n    \"price\" : Assigned price,\n    \"des\": Description of the paper finish,\n    \"name\": Paper finish name\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Seller/FinishController.java",
    "groupTitle": "Paper_Finish",
    "name": "GetSellerFinish"
  },
  {
    "type": "get",
    "url": "/seller/finish/new",
    "title": "Price for paper finish.",
    "description": "<p>Set the price for paper finish.</p>",
    "group": "Paper_Finish",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "fid",
            "description": "<p>Paper finish id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "price",
            "description": "<p>Paper finish price.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "-",
            "description": "<p>User is forbidden.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Paper finish not found (invalid fid).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Seller/FinishController.java",
    "groupTitle": "Paper_Finish",
    "name": "GetSellerFinishNew"
  },
  {
    "type": "get",
    "url": "/seller/finish/remove",
    "title": "Delete price.",
    "description": "<p>Remove the paper finish from supported paper finishes.</p>",
    "group": "Paper_Finish",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "fid",
            "description": "<p>Paper finish id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Paper finish not found (invalid fid).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Seller/FinishController.java",
    "groupTitle": "Paper_Finish",
    "name": "GetSellerFinishRemove"
  },
  {
    "type": "get",
    "url": "/paper",
    "title": "Paper Qualities",
    "description": "<p>All paper qualities list.</p>",
    "group": "Paper_Quality",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "[{\n\"id\": \"paper quality id\",\n\"name\": \"paper quality name\",\n\"description\":\"Description of paper quality\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/PaperController.java",
    "groupTitle": "Paper_Quality",
    "name": "GetPaper"
  },
  {
    "type": "get",
    "url": "/seller/paper",
    "title": "Seller paper qualities.",
    "description": "<p>Get all the paper qualities supported by the seller.</p>",
    "group": "Paper_Quality",
    "success": {
      "examples": [
        {
          "title": "Example:-",
          "content": "[{\n    \"id\": Paper quality id,\n    \"price\" : Assigned price,\n    \"des\": Description of the paper quality,\n    \"name\": Paper quality name\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Seller/PaperController.java",
    "groupTitle": "Paper_Quality",
    "name": "GetSellerPaper"
  },
  {
    "type": "get",
    "url": "/seller/paper/new",
    "title": "Price for paper quality.",
    "description": "<p>Set the price for paper quality.</p>",
    "group": "Paper_Quality",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "pqid",
            "description": "<p>Paper quality id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "price",
            "description": "<p>Paper quality price.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "-",
            "description": "<p>User is forbidden.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Paper quality not found (invalid pqid).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Seller/PaperController.java",
    "groupTitle": "Paper_Quality",
    "name": "GetSellerPaperNew"
  },
  {
    "type": "get",
    "url": "/seller/paper/remove",
    "title": "Delete price.",
    "description": "<p>Remove the paper quality from supported paper qualities.</p>",
    "group": "Paper_Quality",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "pqid",
            "description": "<p>Paper quality id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "-",
            "description": "<p>User is forbidden.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Paper quality not found (invalid pqid).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Seller/PaperController.java",
    "groupTitle": "Paper_Quality",
    "name": "GetSellerPaperRemove"
  },
  {
    "type": "get",
    "url": "/seller",
    "title": "Seller info.",
    "description": "<p>Get seller dashboard information.</p>",
    "group": "Seller_Dashboard",
    "success": {
      "examples": [
        {
          "title": "Response:-",
          "content": "{\n\"address\":{\n\"postalCode\": Pincode/Zipcode of the printing company's address,\n\"addressLine\":Address Line,\n\"city\":City,\n\"state\":State,\n\"country\":Country\n},\n\"paypal\":Paypal email address,\n\"ltime\": Lead time for an order completion,\n\"price\": Default price for card printing (for cards uploaded by users),\n\"description\": Seller's company's description,\n\"name\":Name used on the dashboard,\n\"reviews\":[{\n\"review\":Customer's review,\n\"reviewer\":Customer's name\",\n\"rating\":Rating based on 5 stars\n}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "-",
            "description": "<p>Invalid data.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Email Address is not registered</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Seller/SellerController.java",
    "groupTitle": "Seller_Dashboard",
    "name": "GetSeller"
  },
  {
    "type": "post",
    "url": "/seller/update",
    "title": "Update seller.",
    "description": "<p>Update dashboard information of the seller.</p>",
    "group": "Seller_Dashboard",
    "parameter": {
      "examples": [
        {
          "title": "Request:-",
          "content": "{\n//Below are optional\n\"address\":{\"postalCode\": \"Pincode/Zipcode of the printing company's address\", \"addressLine\":\"Address Line\"},\n\"paypal\":\"Paypal email address\",\n\"ltime\":\"Lead time for an order completion\",\n\"price\":\"Default price for card printing (for cards uploaded by users)\",\n\"description\": \"Seller's company's description\",\n\"name\":\"Name used on the dashboard\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "-",
            "description": "<p>Invalid data.</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "-",
            "description": "<p>Email Address is not registered</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/main/java/com/neo/Controller/Seller/SellerController.java",
    "groupTitle": "Seller_Dashboard",
    "name": "PostSellerUpdate"
  }
] });
