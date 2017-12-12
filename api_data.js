define({ "api": [
  {
    "type": "get",
    "url": "/user/OTP/",
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
    "filename": "src/main/java/com/neo/Controller/UserController.java",
    "groupTitle": "Auth",
    "name": "GetUserOtp"
  },
  {
    "type": "get",
    "url": "/user/resetPassword/",
    "title": "Password token",
    "description": "<p>Generate token for password resetting</p>",
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
    "filename": "src/main/java/com/neo/Controller/UserController.java",
    "groupTitle": "Auth",
    "name": "GetUserResetpassword"
  },
  {
    "type": "post",
    "url": "/user/auth/",
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
            "description": "<p>password</p>"
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
    "filename": "src/main/java/com/neo/Controller/UserController.java",
    "groupTitle": "Auth",
    "name": "PostUserAuth"
  },
  {
    "type": "post",
    "url": "/user/new/",
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
            "optional": false,
            "field": "type",
            "description": "<p>One of the following user types: customer/seller/courier/designer</p>"
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
    "filename": "src/main/java/com/neo/Controller/UserController.java",
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
    "filename": "src/main/java/com/neo/Controller/UserController.java",
    "groupTitle": "Auth",
    "name": "PostUserResetpassword"
  },
  {
    "type": "get",
    "url": "/card/",
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
            "field": "cid",
            "description": "<p>card id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "[{\n\"name\":\"Card name\",\n\"sid\":\"seller id\",\n\"sname\":\"seller name\",\n\"id\":card id,\n\"colors\":[card colors in hexadecimal],\n\"finishes\":[paper finish names],\n\"papers\":[paper quality names],\n\"images\":[card images],\n\"subCategories\":[card sub-categories],\n\"price\":card price,\n\"category\": card category,\n\"side\": 1->front side; 2->back side,\n\"discountedPrice\":price after any discount. Null if no discount available,",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/com/neo/Controller/CardsController.java",
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
    "filename": "src/main/java/com/neo/Controller/CardsController.java",
    "groupTitle": "Cards",
    "name": "GetCardFilter"
  }
] });