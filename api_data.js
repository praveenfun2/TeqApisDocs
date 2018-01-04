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
    "url": "/user/OTP",
    "title": "Email Verification",
    "description": "<p>Verify email address after registration</p>",
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
            "type": "Number",
            "optional": false,
            "field": "otp",
            "description": "<p>Sent to the email address after registration</p>"
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
            "description": "<p>Otp is wrong</p>"
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
    "name": "GetUserOtp"
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
        "503": [
          {
            "group": "503",
            "optional": false,
            "field": "-",
            "description": "<p>Email Service is not working</p>"
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
          "content": "{\n\"name\":\"Card name\",\n\"sid\":\"seller id\",\n\"sname\":\"seller name\",\n\"id\":card id,\n\"colors\":[card colors in hexadecimal],\n\"finishes\":[paper finish names],\n\"papers\":[paper quality names],\n\"images\":[card images],\n\"subCategories\":[card sub-categories],\n\"price\":card price,\n\"category\": card category,\n\"side\": 1->front side; 2->back side,\n\"discountedPrice\":price after any discount. Null if no discount available\n}",
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
          "content": "[{\n\"name\":\"Card name\",\n\"sid\":\"seller id\",\n\"sname\":\"seller name\",\n\"id\":card id,\n\"colors\":[card colors in hexadecimal],\n\"images\":[card images],\n\"price\":card price,\n\"discountedPrice\":price after any discount. Null if no discount available,\n\"distance\": <If lat-lon provided with request, else null> {\n\"value\": distance of seller from the lat-lon provided,\n\"unit\":\"Km\"}\n}]",
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
  }
] });
