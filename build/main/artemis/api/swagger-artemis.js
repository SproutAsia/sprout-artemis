"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerArtemis = void 0;
exports.SwaggerArtemis = {
    "swagger": "2.0",
    "info": {
        "description": "Artemis2 API Documentation",
        "version": "2.0.0",
        "title": "Artemis2"
    },
    "host": "a2-dev1-be.cynopsis.co",
    "schemes": [
        "https"
    ],
    "basePath": "/client",
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ],
    "securityDefinitions": {
        "X-ARTEMIS-DOMAIN": {
            "in": "header",
            "name": "X-ARTEMIS-DOMAIN",
            "type": "apiKey",
            "description": "DOMAIN ID, Must be a number"
        },
        "Authorization": {
            "in": "header",
            "name": "Authorization",
            "type": "apiKey",
            "description": "Bearer Authentication, need to add Bearer before token, eg: Bearer token"
        }
    },
    "security": [
        {
            "X-ARTEMIS-DOMAIN": []
        },
        {
            "Authorization": []
        }
    ],
    "paths": {
        "/auth/token": {
            "post": {
                "operationId": "get_token",
                "description": "Get token",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "description": "Get token",
                        "schema": {
                            "$ref": "#/definitions/GetToken"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Success 200",
                        "schema": {
                            "required": [],
                            "type": "object",
                            "properties": {
                                "ChallengeParameters": {
                                    "type": "object",
                                    "properties": {}
                                },
                                "AuthenticationResult": {
                                    "type": "object",
                                    "properties": {
                                        "AccessToken": {
                                            "type": "string",
                                            "example": "eyJraWQiOiJFYmJCeSs2a0ZSTUc0dnZKUmhiTGVRbkk0bXlpYzFxREtCVG5iZzh5a0JVPSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiZmY3MzQxMmUtNTU3Zi00NTY3LTllMTgtZTJkM2MwZDM5ZTQ2Iiwic3ViIjoiMDBjZjQ3NzMtYTBhMi00OTU0LTg0MmMtNzE0N2VjYzRkMmQwIiwiZXZlbnRfaWQiOiJiNGJmYzI0Ny1jYzg4LTRiOGMtODlhZi05NDc2ZDA3NDk3M2QiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjQ0MjI0NzM4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfZkc5OW5HMmZxIiwiZXhwIjoxNjQ0MjI4MzM4LCJpYXQiOjE2NDQyMjQ3MzgsImp0aSI6ImJhOWM5MjdmLTU2ZTYtNGE0NC04ZDcwLTE0NDExZmE4YmY0NyIsImNsaWVudF9pZCI6IjJndDk2aWRpdmFzdWEwZWlqOG5nbTFzMXBtIiwidXNlcm5hbWUiOiIwMGNmNDc3My1hMGEyLTQ5NTQtODQyYy03MTQ3ZWNjNGQyZDAifQ.j0F7P_w0RGZYw9nOkN6wxcg0lrkdSBBqaVyy2WYnp98A5Iiyflx1pg4vd8g4ZSI7crMBv65LOXlXjwaXsL0El2427epWuDgiRTzvL2kfelnMWBJmvYGUsjLCE4O5XCkitn4qKi2_2svXA7NP4PWV5_8lHxsCy9m5oERApeQTtRz1q14LOmqHz4YlyQocK4J4wzAs1VxJKWxKILuR2XR9Tt5hRdY5ooxLcNoljfC7BK1UbENskRrMxN8oOM6FDpGJqYj1hkC6V7dv0Dx1KQCoSNg2b8ZMDvToQ1zbMx7bC_pc323vfq_SYJDk7z8k3T0ru9kX28bqKDD1Br2HGtbaTg"
                                        },
                                        "ExpiresIn": {
                                            "type": "integer",
                                            "format": "int32",
                                            "example": "3600"
                                        },
                                        "TokenType": {
                                            "type": "string",
                                            "example": "Bearer"
                                        },
                                        "RefreshToken": {
                                            "type": "string",
                                            "example": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.FK4IzFOPpCRJOGj43khNSdmFhjV7ENcGC1PxQtrXqxKAcls_37dfDZe6Jpr9-1OWEyjoe_5K-eVtp1EDj71p439g184MragRLVrlay4CBv-0_dHF8e4Gwk21ZFTaJ06H7hkLRKYH0LfO25jtBOm8XVBTR-ePtV_JwJyHyiPjBmqsDuVPNiRDHLqMI0HOPwevA3qrv8BhiEjdradM4t-givPa3H-iVpLrUp14Qh6WohZ4EzhU0x1zbmTA-uKhzoY27HIowpcSM5MvKApGzHxTvsUNWDWX0I71DyoO2J74Nh89ZmfyrAWVi3W1AExOnltB9YgXItDfTnrxHF3mrTh5HQ.1S9oOe3ToQlQ3sg3.7rSq5soBLAgE3zRFNRrl1zSQ8bXt95Nm3Vp7LY0fM_XFLKAcaGou2Y1i6xkZGH5UAMcQiCJxfKG-njjjAmwWWoBeMeUPFziLx7Xe8lXExFOjT5RnaIceKvQchZuywE2FG4cSLL1Z_s0L3bDsJsvl00dALXHULameGqCcp8m5bjgwKjTt4t8qlFdq4E_BKAD-3KLTdboWkFoDv8NqJ2fw5gL4DLGZVZKdatdU3dJ59rtHRmG9KGrt2hn9tpx0skIn23DMAf1MTs3JJPlBxyY7s5S3ACqA1VewiOCFpTilZDNSMLKDP0-kIebBd2X8GoHZwKUUPNzW-GckiQ46tFwOUzmMjmy3gwl5ocF7lFgiuYJkzBC5yF1p7tZPMqVZlyVAXHdSxywUzF4xE5PMPQU8-KjZVoLcrwv4zbB31iO5mk1tH9EkodlBH6jcSNH9gGG7Yt4PKyovkZhErfrcuWj6dUt7VwO1GZeENno-ytqhp1mAWrDBvE49FR9BqvPG1UH4xYNGx49iVQJQI40pwaZoFRi5pQRNXaZrXo74-I5E4JduAtaCMZR3z3O0P94GP2bsMn9Zyi6bmedjvJGGDkFmNciuzyrs9fejprs5z2iDl-rhl5Py2EzUTL5NRQQ37ah7iEP3TqpXRl6nXnbXAXezYzU0nirR2K6i3CTHBENW7jcrXRook1reE_ypM7xaY_0KGuybIRPstla3eGBcS9JdM0aPKDAijbF9lnF21LXWDVTZEkaVg1VVay3z8Wddb2F0Ekr0Tlp_wVJTNkyr7rc9XyP2dFZDgetDPfpUXI4XXvYGeolyIdgVwe6aQw_aB3irx6vl4x1kLOz6_mDEywr3ZJJ9O5XP1p_EXQsT4HH9nLH0cEpG5Tqk6lERHujWc_JFmCL13XAORDFlnpCc806W9l346jqG-bASTt_dpTQjq--EiS658PnY2rmFrewILklj_cMntmEzcsVdpk_tWo55HSvVSM3q8C7aF58EWgkLFF92WbCF7Z9VKH7CeASxnpP9XxHfO5rAYL7fhdLBA0xYBK4nAvFCuhUC_yTfQP7U7qJBov2e5RxSJkZ569ii3HQWNEA8ZI4oZduOu2o4SlgkPD33DIeZ1yLmSAeiRTMmzrHRzswNcM_rvL1y2L6PoNpnxdqwEKatO-KILyiE4sTWl4qwCTaHNQogyC-ZwQflNAioz0pEH35h6wliI-1bnWBpb4BIu8b7FtLhtVWdDDmp7fnyJgoIaIxE-PONPfnskcUbopiJ8U9gV_DLcEmY34N_ttelFt7f8vQcFQO2zexD3Y_K70i2Y1BJcDsU2pxnCllBuRkUJH7UXC2u9QO2Fev8lT2LbP8T2pVMMA.QD1NI9ljJOp2Haxr7wrC4g"
                                        },
                                        "IdToken": {
                                            "type": "string",
                                            "example": "eyJraWQiOiIxMzlSVzQ1VEJyUHB5eEdWUUlMU2k3K1pCT1B6ZjkwTmp2QXEwRU1uNkQ0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwMGNmNDc3My1hMGEyLTQ5NTQtODQyYy03MTQ3ZWNjNGQyZDAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0xX2ZHOTluRzJmcSIsImN1c3RvbTpsYXN0X2NoYW5nZV9wYXNzd29yZCI6IjE2NDAwNzEwNzYwNTMiLCJjb2duaXRvOnVzZXJuYW1lIjoiMDBjZjQ3NzMtYTBhMi00OTU0LTg0MmMtNzE0N2VjYzRkMmQwIiwib3JpZ2luX2p0aSI6ImZmNzM0MTJlLTU1N2YtNDU2Ny05ZTE4LWUyZDNjMGQzOWU0NiIsImF1ZCI6IjJndDk2aWRpdmFzdWEwZWlqOG5nbTFzMXBtIiwiZXZlbnRfaWQiOiJiNGJmYzI0Ny1jYzg4LTRiOGMtODlhZi05NDc2ZDA3NDk3M2QiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY0NDIyNDczOCwibmFtZSI6Ikh1bmcgVHJhbiIsImN1c3RvbTpsYXN0X2xvZ2luIjoiMTY0MjY2ODk3NTU3NyIsImV4cCI6MTY0NDIyODMzOCwiaWF0IjoxNjQ0MjI0NzM4LCJqdGkiOiJiZDg5ZTI3YS05NWQ5LTQ1ZTEtYmQ0Ny1jY2NhY2Y0ZTU4NGYiLCJlbWFpbCI6Imh1bmdAY3lub3BzaXMuY28ifQ.lqDXEOWFlWjAi6E4hbknm74FoTJsj2vuXNsBWxe4xAGvtur2QxeP9kGtH4zLla5jeBc6fthR2QY6tLn8eJ-XekgFNX7_5KftdRHdS2toq6pVqACDM2-Sj6fS9hg95ted3qGK15sbO9nXnS4V8xnSkITcnCm8kzjWfxvAE-fuyVTYw3wqSXS7xDAwFNufdmpPXKOMH4HMCqrKdaaVVN8rfmLv1RVCsQOKSdCJZabCYQI1yNAP6oKsVk-F2JU67AF49SniVnFZaYXp7g7E6qX7evNPRsZHENPJThfYtFCXIgOWl_7Fdj5Iu4mJ-W3Qms8ltHiVgLKX2gvE8SwXQWEXog"
                                        }
                                    }
                                },
                                "ResponseMetadata": {
                                    "type": "object",
                                    "properties": {
                                        "RequestId": {
                                            "type": "string",
                                            "example": "b4bfc247-cc88-4b8c-89af-9476d074973d"
                                        },
                                        "HTTPStatusCode": {
                                            "type": "integer",
                                            "format": "int32",
                                            "example": "200"
                                        },
                                        "HTTPHeaders": {
                                            "type": "object",
                                            "properties": {
                                                "date": {
                                                    "type": "string",
                                                    "example": "Mon, 07 Feb 2022 09:05:38 GMT"
                                                },
                                                "content-type": {
                                                    "type": "string",
                                                    "example": "application/x-amz-json-1.1"
                                                },
                                                "content-length": {
                                                    "type": "string",
                                                    "example": "4255"
                                                },
                                                "connection": {
                                                    "type": "string",
                                                    "example": "keep-alive"
                                                },
                                                "x-amzn-requestid": {
                                                    "type": "string",
                                                    "example": "b4bfc247-cc88-4b8c-89af-9476d074973d"
                                                }
                                            }
                                        },
                                        "RetryAttempts": {
                                            "type": "integer",
                                            "format": "int32",
                                            "example": "0"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "authentication"
                ]
            }
        },
        "/auth/refresh-token": {
            "post": {
                "operationId": "refresh_token",
                "description": "Refresh token",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "description": "Refresh token",
                        "schema": {
                            "$ref": "#/definitions/RefreshToken"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Success 200",
                        "schema": {
                            "required": [],
                            "type": "object",
                            "properties": {
                                "ChallengeParameters": {
                                    "type": "object",
                                    "properties": {}
                                },
                                "AuthenticationResult": {
                                    "type": "object",
                                    "properties": {
                                        "AccessToken": {
                                            "type": "string",
                                            "example": "eyJraWQiOiJFYmJCeSs2a0ZSTUc0dnZKUmhiTGVRbkk0bXlpYzFxREtCVG5iZzh5a0JVPSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiNWU4MTQ5MGEtMzE4Ni00NThjLTljNTctMjM0MjAxZmJhMzI4Iiwic3ViIjoiMDBjZjQ3NzMtYTBhMi00OTU0LTg0MmMtNzE0N2VjYzRkMmQwIiwiZXZlbnRfaWQiOiIwNjI3NmI0Zi0xYThhLTQ5ZjctOTRlYS04YjllMGU1MjljODgiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjQ0MjI1NTcxLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfZkc5OW5HMmZxIiwiZXhwIjoxNjQ0MjI5MjY5LCJpYXQiOjE2NDQyMjU2NjksImp0aSI6IjExNjE2NGIxLTkzODEtNDI4Ni05NTJjLTc1NjQ4Y2ZiZDM5OSIsImNsaWVudF9pZCI6IjJndDk2aWRpdmFzdWEwZWlqOG5nbTFzMXBtIiwidXNlcm5hbWUiOiIwMGNmNDc3My1hMGEyLTQ5NTQtODQyYy03MTQ3ZWNjNGQyZDAifQ.Mho6xIh9H44kwK2Cmt0mGyWPPULLiDzIFJ-JfKdPrG2JWCYNZM9B0C8vEXBd5QuGCai3RP1Wfw6hP5k-aDhx_IIRj6WesyxYhS0riCMjhdyJnUB_Eu8Gdq1zc0DK8l3Wmm-Kdi7aUiwx9RXnctICSvR31hMGkl3slHibm0xIDQUzs1Iye_9I_T1CnE6Jd7_cUoQXkPmElyJu9YMllcK8Qax1ghuZGthwd9FZfQM-N9JrbwEMrYqpSpwoT6SjjfHDdbEfkrr1MBwG1qII0se9cgcGG5bJ4rqK6spEAVMwzGoadYjCnjazx1XouI697fzMwv31sVc23TkYX53_6UeCkg"
                                        },
                                        "ExpiresIn": {
                                            "type": "integer",
                                            "format": "int32",
                                            "example": "3600"
                                        },
                                        "TokenType": {
                                            "type": "string",
                                            "example": "Bearer"
                                        },
                                        "IdToken": {
                                            "type": "string",
                                            "example": "eyJraWQiOiIxMzlSVzQ1VEJyUHB5eEdWUUlMU2k3K1pCT1B6ZjkwTmp2QXEwRU1uNkQ0PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwMGNmNDc3My1hMGEyLTQ5NTQtODQyYy03MTQ3ZWNjNGQyZDAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0xX2ZHOTluRzJmcSIsImN1c3RvbTpsYXN0X2NoYW5nZV9wYXNzd29yZCI6IjE2NDAwNzEwNzYwNTMiLCJjb2duaXRvOnVzZXJuYW1lIjoiMDBjZjQ3NzMtYTBhMi00OTU0LTg0MmMtNzE0N2VjYzRkMmQwIiwib3JpZ2luX2p0aSI6IjVlODE0OTBhLTMxODYtNDU4Yy05YzU3LTIzNDIwMWZiYTMyOCIsImF1ZCI6IjJndDk2aWRpdmFzdWEwZWlqOG5nbTFzMXBtIiwiZXZlbnRfaWQiOiIwNjI3NmI0Zi0xYThhLTQ5ZjctOTRlYS04YjllMGU1MjljODgiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY0NDIyNTU3MSwibmFtZSI6Ikh1bmcgVHJhbiIsImN1c3RvbTpsYXN0X2xvZ2luIjoiMTY0MjY2ODk3NTU3NyIsImV4cCI6MTY0NDIyOTI2OSwiaWF0IjoxNjQ0MjI1NjY5LCJqdGkiOiIzMzg0MjhkYy0wMzg4LTRlMmEtOWU1MS0yN2JiMGUyMWY0ODMiLCJlbWFpbCI6Imh1bmdAY3lub3BzaXMuY28ifQ.gXvt56eFslYVq3s4X28x6HUm0rUPqmIR6oiBBoUm8ArBqvWiIJGCq468OX4RO0MabxOMtoRgUtIUUR0skfOUiBA4EebfjfM4JI31I9fZpB4k6FzFUCJPV12G8WRLmGjTn8IJCB_APPiGpl60eO8KYNNDgxMOTqgNENG48oXUWBq5cJrrbBghTvJS3GoWUk_93atZCzT840CDhm17AzkDeL1scr5afnZDNS6xLGtGlp9W2ZuWDAbrkrJSDQHCuD-ZrGP_XZ5bY9LXKznQMVWrYWmz_CV48pZCL1Hw__gbYJbHBkj7mO7NED-hjb7HzV7B424rKWDv4W8Z8I5aNMOKoA"
                                        }
                                    }
                                },
                                "ResponseMetadata": {
                                    "type": "object",
                                    "properties": {
                                        "RequestId": {
                                            "type": "string",
                                            "example": "29cfd5c9-2f60-48be-b436-28fbc64a8ad4"
                                        },
                                        "HTTPStatusCode": {
                                            "type": "integer",
                                            "format": "int32",
                                            "example": "200"
                                        },
                                        "HTTPHeaders": {
                                            "type": "object",
                                            "properties": {
                                                "date": {
                                                    "type": "string",
                                                    "example": "Mon, 07 Feb 2022 09:21:09 GMT"
                                                },
                                                "content-type": {
                                                    "type": "string",
                                                    "example": "application/x-amz-json-1.1"
                                                },
                                                "content-length": {
                                                    "type": "string",
                                                    "example": "2433"
                                                },
                                                "connection": {
                                                    "type": "string",
                                                    "example": "keep-alive"
                                                },
                                                "x-amzn-requestid": {
                                                    "type": "string",
                                                    "example": "29cfd5c9-2f60-48be-b436-28fbc64a8ad4"
                                                }
                                            }
                                        },
                                        "RetryAttempts": {
                                            "type": "integer",
                                            "format": "int32",
                                            "example": "0"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "authentication"
                ]
            }
        },
        "/customers/": {
            "post": {
                "operationId": "create_individual_customer",
                "description": "Create an individual customer without existing record",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "description": "Choose either individualRecords or corporateRecords",
                        "schema": {
                            "$ref": "#/definitions/Customer"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created 201",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/Customer"
                                    }
                                }
                            },
                            "example": "{\n    \"id\": 2712,\n    \"createdBy\": {\n        \"id\": \"8b97a2f4-1916-4a8e-851b-6302308ebfd7\",\n        \"name\": \"Dat\",\n        \"email\": \"dat@cynopsis.co\",\n        \"oauthId\": \"8b97a2f4-1916-4a8e-851b-6302308ebfd7\",\n        \"isActive\": true,\n        \"mfaEnabled\": false\n    },\n    \"updatedBy\": {\n        \"id\": \"8b97a2f4-1916-4a8e-851b-6302308ebfd7\",\n        \"name\": \"Dat\",\n        \"email\": \"dat@cynopsis.co\",\n        \"oauthId\": \"8b97a2f4-1916-4a8e-851b-6302308ebfd7\",\n        \"isActive\": true,\n        \"mfaEnabled\": false\n    },\n    \"name\": \"CUSTOMER191017\",\n    \"riskRating\": \"UNKNOWN\",\n    \"status\": \"DRAFT\",\n    \"customerType\": \"INDIVIDUAL\",\n    \"createdAt\": \"2019-10-15T16:53:26.690210+08:00\",\n    \"updatedAt\": \"2019-10-15T16:53:27.911084+08:00\",\n    \"onboardingMode\": \"NON FACE-TO-FACE\",\n    \"productServiceComplexity\": \"SIMPLE\",\n    \"paymentModes\": [\n        \"VIRTUAL CURRENCY\"\n    ],\n    \"profileType\": \"\",\n    \"isActiveCustomer\": true,\n    \"natureOfBusinessRelationship\": \"Nature of business relationship\",\n    \"referenceId\": \"456784127\",\n    \"domains\": [\n        1\n    ],\n    \"users\": [\n        \"8b97a2f4-1916-4a8e-851b-6302308ebfd7\"\n    ]\n}"
                        }
                    },
                    "403": {
                        "description": "Forbidden 403",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/Customer"
                                    }
                                }
                            },
                            "example": "{\n    \"detail\": \"The token provided is invalid\"\n}"
                        }
                    },
                    "400": {
                        "description": "Bad request 400",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/Customer"
                                    }
                                }
                            },
                            "example": "{\n    \"detail\": \"Existing reference_id, please use another one.\"\n}"
                        }
                    }
                },
                "tags": [
                    "individual_workflow_corporate_workflow"
                ]
            },
            "get": {
                "operationId": "customers_list",
                "description": "Return list of Customers",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "name",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "record_type",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "is_active_customer",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reference_id",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "exact_name",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "record_id",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "search_all",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "search_status",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/Customer"
                                    }
                                }
                            },
                            "example": {
                                "count": 122,
                                "next": "http://youendpoint.cynopsis.co/client/customers/?limit=1&offset=1&sort=",
                                "prev": null,
                                "results": [
                                    {
                                        "id": 4224,
                                        "createdBy": {
                                            "id": "oauthid",
                                            "name": "abcd",
                                            "email": "abcd@traceto.io",
                                            "oauthId": "oauthid",
                                            "isActive": true,
                                            "mfaEnabled": false
                                        },
                                        "updatedBy": {
                                            "id": "oauthid",
                                            "name": "abcd",
                                            "email": "abcd@traceto.io",
                                            "oauthId": "oauthid",
                                            "isActive": true,
                                            "mfaEnabled": false
                                        },
                                        "name": "MONNIE",
                                        "riskRating": "HIGH",
                                        "status": "REQUIRE UPDATE",
                                        "customerType": "CORPORATE",
                                        "createdAt": "2019-12-30T11:28:55.555768+08:00",
                                        "updatedAt": "2019-12-30T15:14:56.416932+08:00",
                                        "onboardingMode": "UNKNOWN",
                                        "productServiceComplexity": "HIGH RISK",
                                        "paymentModes": [
                                            "CHEQUE (FOREIGN)",
                                            "CREDIT CARD",
                                            "NOT APPLICABLE"
                                        ],
                                        "profileType": "",
                                        "isActiveCustomer": true,
                                        "natureOfBusinessRelationship": "NATUREUWEUSDf",
                                        "referenceId": "5565",
                                        "integrationStatus": "REQUIRE UPDATE",
                                        "domains": [
                                            1
                                        ],
                                        "users": [
                                            "oauthid"
                                        ]
                                    }
                                ]
                            }
                        }
                    }
                },
                "tags": [
                    "other_customer_related_apis"
                ]
            }
        },
        "/customers/{customer_id}/crps/": {
            "get": {
                "operationId": "get_recordID_and_crpID",
                "description": "Get Record ID And CRP",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "Success 200",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/Customer"
                                    }
                                }
                            },
                            "example": "{\n    \"count\": 1,\n    \"next\": null,\n    \"prev\": null,\n    \"results\": [\n        {\n            \"id\": 8306,\n            \"createdBy\": {\n                \"id\": \"8b97a2f4-1916-4a8e-851b-6302308ebfd7\",\n                \"name\": \"Dat\",\n                \"email\": \"dat@cynopsis.co\",\n                \"oauthId\": \"8b97a2f4-1916-4a8e-851b-6302308ebfd7\",\n                \"isActive\": true,\n                \"mfaEnabled\": false\n            },\n            \"updatedBy\": {\n                \"id\": \"8b97a2f4-1916-4a8e-851b-6302308ebfd7\",\n                \"name\": \"Dat\",\n                \"email\": \"dat@cynopsis.co\",\n                \"oauthId\": \"8b97a2f4-1916-4a8e-851b-6302308ebfd7\",\n                \"isActive\": true,\n                \"mfaEnabled\": false\n            },\n            \"name\": \"IKNOWYOU\",\n            \"recordType\": \"INDIVIDUAL\",\n            \"roles\": [\n                {\n                    \"id\": 1578,\n                    \"createdBy\": null,\n                    \"updatedBy\": null,\n                    \"createdAt\": \"2019-10-15T17:52:42.626283+08:00\",\n                    \"updatedAt\": \"2019-10-15T17:52:42.626305+08:00\",\n                    \"dateAppointed\": \"2019-10-01T01:00:00+08:00\",\n                    \"dateResigned\": \"2019-10-31T01:00:00+08:00\",\n                    \"role\": \"GENERAL PARTNER\",\n                    \"crp\": 8306\n                }\n            ],\n            \"latestScreeningConclusion\": null,\n            \"status\": \"CURRENT\",\n            \"createdAt\": \"2019-10-15T17:52:42.619552+08:00\",\n            \"updatedAt\": \"2019-10-15T17:52:42.639317+08:00\",\n            \"primary\": false,\n            \"customer\": 2717,\n            \"primaryCrpOf\": null,\n            \"record\": 7523,\n            \"fileBucket\": 15955,\n            \"dialog\": 174116\n        }\n    ]\n}"
                        }
                    }
                },
                "tags": [
                    "individual_workflow_corporate_workflow", "other_customer_related_apis", "other_crp_related_apis"
                ]
            },
            "post": {
                "operationId": "customers_crps_create",
                "description": "Creates a new CRP for a Customer.",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "description": "Choose either individualRecord or corporateRecord",
                        "schema": {
                            "$ref": "#/definitions/CRP"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/CRP"
                        }
                    }
                },
                "tags": [
                    "individual_workflow_corporate_workflow"
                ]
            },
            "parameters": [
                {
                    "name": "customer_id",
                    "in": "path",
                    "description": "A unique integer value identifying this customer.",
                    "required": true,
                    "type": "integer"
                }
            ]
        },
        "/records/{record_id}/searches/": {
            "post": {
                "operationId": "post_database_screening",
                "description": "2b. Post Database Screening",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "required": [
                                "engineType"
                            ],
                            "type": "object",
                            "properties": {
                                "engineType": {
                                    "title": "Engine type",
                                    "type": "string",
                                    "enum": [
                                        "DJ",
                                        "DJ2",
                                        "ArtemiScan",
                                        "TR"
                                    ]
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created 201",
                        "schema": {
                            "$ref": "#/definitions/Search"
                        }
                    }
                },
                "tags": [
                    "individual_workflow_corporate_workflow"
                ]
            },
            "get": {
                "operationId": "get_database_screening",
                "description": "2c. Get Database Screening Result",
                "parameters": [
                    {
                        "name": "engine_type",
                        "in": "query",
                        "description": "DJ , DJ2 , TR , ArtemiScan",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/Search"
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "individual_workflow_corporate_workflow"
                ]
            },
            "parameters": [
                {
                    "name": "record_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/records/{record_id}/internet_searches/": {
            "post": {
                "operationId": "post_internet_search",
                "description": "2d. Post Internet Search",
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/InternetSearch"
                        }
                    }
                },
                "tags": [
                    "individual_workflow_corporate_workflow"
                ]
            },
            "get": {
                "operationId": "get_internet_search_result",
                "description": "2e. Get Internet Search Result",
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/InternetSearch"
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "individual_workflow_corporate_workflow"
                ]
            },
            "parameters": [
                {
                    "name": "record_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/records/{record_id}/own_name_searches/": {
            "post": {
                "operationId": "post_own_restricted_list_search",
                "description": "2f. Post Own Restricted List Search",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/OwnNameSearch"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/OwnNameSearch"
                        }
                    }
                },
                "tags": [
                    "individual_workflow_corporate_workflow"
                ]
            },
            "get": {
                "operationId": "get_own_restricted",
                "description": "2g. Get Own Restricted List Search Result",
                "parameters": [
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/OwnNameSearch"
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "individual_workflow_corporate_workflow"
                ]
            },
            "parameters": [
                {
                    "name": "record_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/records/{record_id}/documents/": {
            "get": {
                "operationId": "records_documents_list",
                "description": "Views for the /records/{id}/documents/ endpoint",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/Document"
                                    }
                                }
                            }
                        }
                    }
                },
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "other_customer_related_apis"
                ]
            },
            "post": {
                "operationId": "add_a_document",
                "description": "3. Add A Document",
                "parameters": [
                    {
                        "name": "doc_type_category",
                        "in": "formData",
                        "required": false,
                        "type": "string",
                        "maxLength": 255
                    },
                    {
                        "name": "doc_type",
                        "in": "formData",
                        "required": false,
                        "type": "string",
                        "maxLength": 255
                    },
                    {
                        "name": "authenticity",
                        "in": "formData",
                        "required": false,
                        "type": "string",
                        "maxLength": 255
                    },
                    {
                        "name": "issue_date",
                        "in": "formData",
                        "required": false,
                        "type": "string",
                        "format": "date-time",
                        "x-nullable": true
                    },
                    {
                        "name": "expiry_date",
                        "in": "formData",
                        "required": false,
                        "type": "string",
                        "format": "date-time",
                        "x-nullable": true
                    },
                    {
                        "name": "document",
                        "in": "formData",
                        "required": false,
                        "type": "file"
                    },
                    {
                        "name": "show_expiry_alerts",
                        "in": "formData",
                        "required": false,
                        "type": "boolean"
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/Document"
                        }
                    }
                },
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "individual_workflow_corporate_workflow"
                ]
            },
            "parameters": [
                {
                    "name": "record_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/customers/{customer_id}/risk_reports/": {
            "get": {
                "operationId": "customers_risk_reports_list",
                "description": "Show all Risk Report for a Customer",
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "example": {
                                "count": 4,
                                "next": "http://yourendpoint.cynopsis.co/api/customers/4279/risk_reports/?limit=1&offset=1",
                                "prev": null,
                                "results": [
                                    {
                                        "id": 11128,
                                        "createdBy": {
                                            "id": "thisisanoauthid",
                                            "name": "namename",
                                            "email": "name@test.com",
                                            "oauthId": "thisisanoauthid",
                                            "isActive": true,
                                            "mfaEnabled": false
                                        },
                                        "updatedBy": {
                                            "id": "thisisanoauthid",
                                            "name": "namename",
                                            "email": "name@test.com",
                                            "oauthId": "thisisanoauthid",
                                            "isActive": true,
                                            "mfaEnabled": false
                                        },
                                        "riskJson": {
                                            "comments": {
                                                "9128": [],
                                                "9129": [],
                                                "9131": []
                                            },
                                            "settings": {
                                                "weight": {
                                                    "CORPORATE": {
                                                        "cpi": 15,
                                                        "fsi": 2.5,
                                                        "fatf": 15,
                                                        "oecd": 10,
                                                        "fatca": 2.5,
                                                        "industry": 5,
                                                        "screening": 30,
                                                        "paymentModes": 5,
                                                        "primaryWeight": 50,
                                                        "onboardingMode": 5,
                                                        "ownershipLayer": 5,
                                                        "productComplexity": 5
                                                    },
                                                    "INDIVIDUAL": {
                                                        "cpi": 15,
                                                        "fsi": 2.5,
                                                        "fatf": 15,
                                                        "oecd": 10,
                                                        "fatca": 2.5,
                                                        "industry": 5,
                                                        "screening": 30,
                                                        "occupation": 5,
                                                        "paymentModes": 5,
                                                        "primaryWeight": 50,
                                                        "onboardingMode": 5,
                                                        "productComplexity": 5
                                                    }
                                                },
                                                "highRiskThreshold": 40,
                                                "mediumRiskThreshold": 70
                                            },
                                            "riskScore": 66.10833333333332,
                                            "riskRating": "MEDIUM",
                                            "componentScore": {
                                                "cpi": 5.775,
                                                "fsi": 0.8333333333333335,
                                                "fatf": 8.25,
                                                "oecd": 5,
                                                "fatca": 1.25,
                                                "industry": 5,
                                                "screening": 30,
                                                "paymentModes": 5,
                                                "onboardingMode": 0,
                                                "ownershipLayer": 3.3333333333333335,
                                                "productComplexity": 1.6666666666666667
                                            }
                                        },
                                        "isOutdated": false,
                                        "latestApprovalStatus": {
                                            "id": 4642,
                                            "createdBy": {
                                                "id": "thisisanoauthid",
                                                "name": "namename",
                                                "email": "name@test.com",
                                                "oauthId": "thisisanoauthid",
                                                "isActive": true,
                                                "mfaEnabled": false
                                            },
                                            "updatedBy": {
                                                "id": "thisisanoauthid",
                                                "name": "namename",
                                                "email": "name@test.com",
                                                "oauthId": "thisisanoauthid",
                                                "isActive": true,
                                                "mfaEnabled": false
                                            },
                                            "createdAt": "2019-12-30T16:42:10.424595+08:00",
                                            "updatedAt": "2019-12-30T16:42:10.424620+08:00",
                                            "overrideRisk": "MEDIUM",
                                            "approvalStatus": "ACCEPTED",
                                            "riskReport": 11128,
                                            "notifyPerson": null
                                        },
                                        "createdAt": "2019-12-30T16:42:06.728641+08:00",
                                        "updatedAt": "2019-12-30T16:42:10.442539+08:00",
                                        "riskRating": "",
                                        "outdated": false,
                                        "customer": 4279
                                    }
                                ]
                            }
                        }
                    }
                },
                "tags": [
                    "other_screening_and_risk_assessment_related_apis"
                ]
            },
            "post": {
                "operationId": "generate_risk_report",
                "description": "Generate Risk Report",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/RiskReport"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/RiskReport"
                        }
                    }
                },
                "tags": [
                    "individual_workflow_corporate_workflow"
                ]
            },
            "parameters": [
                {
                    "name": "customer_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/customers/{customer_id}/": {
            "get": {
                "operationId": "get_customer",
                "description": "5. Get Customer, Check latest approval status of customer.",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/Customer"
                        }
                    }
                },
                "tags": [
                    "individual_workflow_corporate_workflow", "other_customer_related_apis"
                ]
            },
            "delete": {
                "operationId": "customers_delete",
                "description": "Viewset for Customer",
                "parameters": [],
                "responses": {
                    "204": {
                        "description": ""
                    }
                },
                "tags": [
                    "other_customer_related_apis"
                ]
            },
            "patch": {
                "operationId": "customers_partial_update",
                "description": "Viewset for Customer",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "description": "Choose either individualRecords or corporateRecords",
                        "schema": {
                            "$ref": "#/definitions/Customer"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/Customer"
                        }
                    }
                },
                "tags": [
                    "other_customer_related_apis"
                ]
            },
            "parameters": [
                {
                    "name": "customer_id",
                    "in": "path",
                    "description": "A unique integer value identifying this customer.",
                    "required": true,
                    "type": "integer"
                }
            ]
        },
        "/individual_records/{record_id}/": {
            "get": {
                "operationId": "individual_records_read",
                "description": "Get the individual records based on individual record id",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/PersonIndividualRecordSerializer"
                        }
                    }
                },
                "tags": [
                    "other_customer_related_apis"
                ]
            },
            "parameters": [
                {
                    "name": "record_id",
                    "in": "path",
                    "description": "A unique integer value identifying this individual record.",
                    "required": true,
                    "type": "integer"
                }
            ]
        },
        "/corporate_records/{record_id}/": {
            "get": {
                "operationId": "corporate_records_read",
                "description": "Get the list of Corporate Records based on corporate record id",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/PersonCorporateRecordSerializer"
                        }
                    }
                },
                "tags": [
                    "other_customer_related_apis"
                ]
            },
            "parameters": [
                {
                    "name": "record_id",
                    "in": "path",
                    "description": "A unique integer value identifying this corporate record.",
                    "required": true,
                    "type": "integer"
                }
            ]
        },
        "/documents/{doc_id}/": {
            "patch": {
                "operationId": "documents_partial_update",
                "description": "Viewset for document",
                "parameters": [
                    {
                        "name": "doc_type_category",
                        "in": "formData",
                        "required": false,
                        "type": "string",
                        "maxLength": 255
                    },
                    {
                        "name": "doc_type",
                        "in": "formData",
                        "required": false,
                        "type": "string",
                        "maxLength": 255
                    },
                    {
                        "name": "authenticity",
                        "in": "formData",
                        "required": false,
                        "type": "string",
                        "maxLength": 255
                    },
                    {
                        "name": "issue_date",
                        "in": "formData",
                        "required": false,
                        "type": "string",
                        "format": "date-time",
                        "x-nullable": true
                    },
                    {
                        "name": "expiry_date",
                        "in": "formData",
                        "required": false,
                        "type": "string",
                        "format": "date-time",
                        "x-nullable": true
                    },
                    {
                        "name": "document",
                        "in": "formData",
                        "required": false,
                        "type": "file"
                    },
                    {
                        "name": "show_expiry_alerts",
                        "in": "formData",
                        "required": false,
                        "type": "boolean"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/Document"
                        }
                    }
                },
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "other_customer_related_apis"
                ]
            },
            "parameters": [
                {
                    "name": "doc_id",
                    "in": "path",
                    "description": "A unique integer value identifying this document.",
                    "required": true,
                    "type": "integer"
                }
            ]
        },
        "/crps/{crp_id}/": {
            "get": {
                "operationId": "crps_read",
                "description": "Viewset for CRP",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/CRP"
                        }
                    }
                },
                "tags": [
                    "other_crp_related_apis"
                ]
            },
            "patch": {
                "operationId": "crps_partial_update",
                "description": "Viewset for CRP",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "description": "Choose either individualRecord or corporateRecord",
                        "schema": {
                            "$ref": "#/definitions/CRP"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/CRP"
                        }
                    }
                },
                "tags": [
                    "other_crp_related_apis"
                ]
            },
            "delete": {
                "operationId": "crps_delete",
                "description": "Viewset for CRP",
                "parameters": [],
                "responses": {
                    "204": {
                        "description": ""
                    }
                },
                "tags": [
                    "other_crp_related_apis"
                ]
            },
            "parameters": [
                {
                    "name": "crp_id",
                    "in": "path",
                    "description": "A unique integer value identifying this crp.",
                    "required": true,
                    "type": "integer"
                }
            ]
        },
        "/crps/{crp_id}/roles/": {
            "get": {
                "operationId": "crps_roles_list",
                "description": "Shows all CRP Roles for a CRP",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/CRPRole"
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "other_crp_related_apis"
                ]
            },
            "post": {
                "operationId": "crps_roles_create",
                "description": "Creates a new CRP Role for a CRP.",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/CRPRole"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/CRPRole"
                        }
                    }
                },
                "tags": [
                    "other_crp_related_apis"
                ]
            },
            "parameters": [
                {
                    "name": "crp_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/roles/{role_id}/": {
            "delete": {
                "operationId": "roles_delete",
                "description": "Viewset for CRP Role",
                "parameters": [],
                "responses": {
                    "204": {
                        "description": ""
                    }
                },
                "tags": [
                    "other_crp_related_apis"
                ]
            },
            "parameters": [
                {
                    "name": "role_id",
                    "in": "path",
                    "description": "A unique integer value identifying this crp role.",
                    "required": true,
                    "type": "integer"
                }
            ]
        },
        "/crps/{crp_id}/screening_conclusions/": {
            "get": {
                "operationId": "crps_screening_conclusions_list",
                "description": "Shows all Screening Conclusion for a CRP",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/ClientScreeningConclusion"
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "other_screening_and_risk_assessment_related_apis"
                ]
            },
            "post": {
                "operationId": "crps_screening_conclusions_create",
                "description": "Creates a new Screening Conclusion for a CRP.",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/ClientScreeningConclusion"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/ClientScreeningConclusion"
                        }
                    }
                },
                "tags": [
                    "other_screening_and_risk_assessment_related_apis"
                ]
            },
            "parameters": [
                {
                    "name": "crp_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/crps/{crp_id}/posts/": {
            "get": {
                "operationId": "crps_posts_list",
                "description": "Viewsets for /crps/{crp_id}/posts/ endpoints",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/Post"
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "other_screening_and_risk_assessment_related_apis"
                ]
            },
            "post": {
                "operationId": "crps_posts_create",
                "description": "Viewsets for /crps/{crp_id}/posts/ endpoints",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Post"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/Post"
                        }
                    }
                },
                "tags": [
                    "other_screening_and_risk_assessment_related_apis"
                ]
            },
            "parameters": [
                {
                    "name": "crp_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/crps/{crp_id}/verification_conclusions/": {
            "get": {
                "operationId": "crps_verification_conclusions_list",
                "description": "Viewset for the crps/{crp_id}/verification_conclusions endpoint",
                "parameters": [
                    {
                        "name": "verification_type",
                        "in": "query",
                        "description": "verification_type.",
                        "required": true,
                        "type": "string",
                        "enum": [
                            "FACE",
                            "OCR"
                        ]
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "example": {
                                "count": 1,
                                "next": null,
                                "prev": null,
                                "results": [
                                    {
                                        "id": 1396,
                                        "createdBy": {
                                            "id": "38irsam20ij7gfdr495l87aiap",
                                            "name": "integration",
                                            "email": "integration@cynopsis.co",
                                            "oauthId": "38irsam20ij7gfdr495l87aiap",
                                            "isActive": true,
                                            "mfaEnabled": false
                                        },
                                        "updatedBy": {
                                            "id": "38irsam20ij7gfdr495l87aiap",
                                            "name": "integration",
                                            "email": "integration@cynopsis.co",
                                            "oauthId": "38irsam20ij7gfdr495l87aiap",
                                            "isActive": true,
                                            "mfaEnabled": false
                                        },
                                        "createdAt": "2019-12-19T11:37:27.273640+08:00",
                                        "updatedAt": "2019-12-19T11:37:27.273666+08:00",
                                        "verificationType": "FACE",
                                        "verificationResult": "MATCH",
                                        "crp": 9631
                                    }
                                ]
                            }
                        }
                    }
                },
                "tags": [
                    "other_screening_and_risk_assessment_related_apis"
                ]
            },
            "post": {
                "operationId": "crps_verification_conclusions_create",
                "description": "Viewset for the crps/{id}/verification_conclusions endpoint",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/VerificationConclusion"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/VerificationConclusion"
                        }
                    }
                },
                "tags": [
                    "other_screening_and_risk_assessment_related_apis"
                ]
            },
            "parameters": [
                {
                    "name": "crp_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/risk_reports/{risk_report_id}/approval_statuses/": {
            "get": {
                "operationId": "risk_reports_approval_statuses_list",
                "description": "Get all approval statuses for a risk report",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/ApprovalStatus"
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "other_screening_and_risk_assessment_related_apis"
                ]
            },
            "post": {
                "operationId": "risk_reports_approval_statuses_create",
                "description": "Creates a new approval status for a risk report",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/ApprovalStatus"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/ApprovalStatus"
                        }
                    }
                },
                "tags": [
                    "other_screening_and_risk_assessment_related_apis"
                ]
            },
            "parameters": [
                {
                    "name": "risk_report_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/records/countries/": {
            "get": {
                "operationId": "records_countries",
                "summary": "Returns a list of possible countries.",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "SINGAPORE",
                                "MALAYSIA",
                                "INDONESIA",
                                "UNITED KINGDOM",
                                "UNITED STATES OF AMERICA",
                                "HONG KONG",
                                "ABKHAZIA",
                                "AFGHANISTAN",
                                "ALAND ISLANDS",
                                "ALBANIA",
                                "ALGERIA",
                                "AMERICAN SAMOA",
                                "ANDORRA",
                                "ANGOLA",
                                "ANGUILLA",
                                "ANTARCTICA",
                                "ANTIGUA AND BARBUDA",
                                "ARGENTINA",
                                "ARMENIA",
                                "ARUBA",
                                "ASCENSION",
                                "ASHMORE AND CARTIER ISLANDS",
                                "AUSTRALIA",
                                "AUSTRALIAN ANTARCTIC TERRITORY",
                                "AUSTRIA",
                                "AZERBAIJAN",
                                "BAHAMAS",
                                "BAHRAIN",
                                "BAKER ISLAND",
                                "BANGLADESH",
                                "BARBADOS",
                                "BELARUS",
                                "BELGIUM",
                                "BELIZE",
                                "BENIN",
                                "BERMUDA",
                                "BHUTAN",
                                "BOLIVIA",
                                "BOSNIA AND HERZEGOVINA",
                                "BOTSWANA",
                                "BOUVET ISLAND",
                                "BRAZIL",
                                "BRITISH ANTARCTIC TERRITORY",
                                "BRITISH INDIAN OCEAN TERRITORY",
                                "BRITISH SOVEREIGN BASE AREAS",
                                "BRITISH VIRGIN ISLANDS",
                                "BRUNEI",
                                "BULGARIA",
                                "BURKINA FASO",
                                "BURMA (REPUBLIC OF THE UNION OF MYANMAR)",
                                "BURUNDI",
                                "CAMBODIA",
                                "CAMEROON",
                                "CANADA",
                                "CAPE VERDE",
                                "CARIBBEAN NETHERLANDS",
                                "CAYMAN ISLANDS",
                                "CENTRAL AFRICAN REPUBLIC",
                                "CHAD",
                                "CHILE",
                                "CHINA",
                                "CHRISTMAS ISLAND",
                                "CLIPPERTON ISLAND",
                                "COCOS (KEELING) ISLANDS",
                                "COLOMBIA",
                                "COMOROS",
                                "CONGO (REPUBLIC OF)",
                                "COOK ISLANDS",
                                "CORAL SEA ISLANDS",
                                "COSTA RICA",
                                "COTE D'IVOIRE (IVORY COAST)",
                                "CROATIA",
                                "CUBA",
                                "CURACAO",
                                "CYPRUS",
                                "CZECH REPUBLIC",
                                "DEMOCRATIC REPUBLIC OF THE CONGO",
                                "DENMARK",
                                "DJIBOUTI",
                                "DOMINICA",
                                "DOMINICAN REPUBLIC",
                                "ECUADOR",
                                "EGYPT",
                                "EL SALVADOR",
                                "EQUATORIAL GUINEA",
                                "ERITREA",
                                "ESTONIA",
                                "ETHIOPIA",
                                "FALKLAND ISLANDS",
                                "FAROE ISLANDS",
                                "FIJI",
                                "FINLAND",
                                "FRANCE",
                                "FRENCH GUIANA",
                                "FRENCH POLYNESIA",
                                "FRENCH SOUTHERN AND ANTARCTIC LANDS",
                                "FRENCH SOUTHERN TERRITORIES",
                                "GABON",
                                "GAMBIA",
                                "GEORGIA",
                                "GERMANY",
                                "GHANA",
                                "GIBRALTAR",
                                "GREECE",
                                "GREENLAND",
                                "GRENADA",
                                "GUADELOUPE",
                                "GUAM",
                                "GUATEMALA",
                                "GUERNSEY",
                                "GUINEA",
                                "GUINEA-BISSAU",
                                "GUYANA",
                                "HAITI",
                                "HEARD AND MCDONALD ISLANDS",
                                "HONDURAS",
                                "HOWLAND ISLAND",
                                "HUNGARY",
                                "ICELAND",
                                "INDIA",
                                "IRAN",
                                "IRAQ",
                                "IRELAND",
                                "ISLE OF MAN",
                                "ISRAEL",
                                "ITALY",
                                "JAMAICA",
                                "JAPAN",
                                "JARVIS ISLAND",
                                "JERSEY",
                                "JOHNSTON ATOLL",
                                "JORDAN",
                                "KAZAKHSTAN",
                                "KENYA",
                                "KINGMAN REEF",
                                "KIRIBATI",
                                "KOSOVO",
                                "KUWAIT",
                                "KYRGYZSTAN",
                                "LAOS",
                                "LATVIA",
                                "LEBANON",
                                "LESOTHO",
                                "LIBERIA",
                                "LIBYA",
                                "LIECHTENSTEIN",
                                "LITHUANIA",
                                "LUXEMBOURG",
                                "MACAU",
                                "MACEDONIA",
                                "MADAGASCAR",
                                "MALAWI",
                                "MALDIVES",
                                "MALI",
                                "MALTA",
                                "MARSHALL ISLANDS",
                                "MARTINIQUE",
                                "MAURITANIA",
                                "MAURITIUS",
                                "MAYOTTE",
                                "MEXICO",
                                "MICRONESIA",
                                "MIDWAY ISLANDS",
                                "MOLDOVA",
                                "MONACO",
                                "MONGOLIA",
                                "MONTENEGRO",
                                "MONTSERRAT",
                                "MOROCCO",
                                "MOZAMBIQUE",
                                "NAGORNO-KARABAKH",
                                "NAMIBIA",
                                "NAURU",
                                "NAVASSA ISLAND",
                                "NEPAL",
                                "NETHERLANDS",
                                "NEW CALEDONIA",
                                "NEW ZEALAND",
                                "NICARAGUA",
                                "NIGER",
                                "NIGERIA",
                                "NIUE",
                                "NORFOLK ISLAND",
                                "NORTH KOREA",
                                "NORTHERN CYPRUS",
                                "NORTHERN MARIANA ISLANDS",
                                "NORWAY",
                                "OMAN",
                                "PAKISTAN",
                                "PALAU",
                                "PALESTINE",
                                "PALMYRA ATOLL",
                                "PANAMA",
                                "PAPUA NEW GUINEA",
                                "PARAGUAY",
                                "PERU",
                                "PETER I ISLAND",
                                "PHILIPPINES",
                                "PITCAIRN",
                                "PITCAIRN ISLANDS",
                                "POLAND",
                                "PORTUGAL",
                                "PRIDNESTROVIE (TRANSNISTRIA)",
                                "PUERTO RICO",
                                "QATAR",
                                "QUEEN MAUD LAND",
                                "REUNION",
                                "ROMANIA",
                                "ROSS DEPENDENCY",
                                "RUSSIAN FEDERATION",
                                "RWANDA",
                                "SAINT BARTHELEMY",
                                "SAINT HELENA",
                                "SAINT KITTS AND NEVIS",
                                "SAINT LUCIA",
                                "SAINT MARTIN (FRANCE)",
                                "SAINT MARTIN (NETHERLANDS)",
                                "SAINT PIERRE AND MIQUELON",
                                "SAINT VINCENT AND GRENADINES",
                                "SAMOA",
                                "SAN MARINO",
                                "SAO TOME AND PRINCIPE",
                                "SAUDI ARABIA",
                                "SENEGAL",
                                "SERBIA",
                                "SEYCHELLES",
                                "SIERRA LEONE",
                                "SLOVAKIA",
                                "SLOVENIA",
                                "SOLOMON ISLANDS",
                                "SOMALIA",
                                "SOMALILAND",
                                "SOUTH AFRICA",
                                "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
                                "SOUTH KOREA",
                                "SOUTH OSSETIA",
                                "SOUTH SUDAN",
                                "SPAIN",
                                "SRI LANKA",
                                "SUDAN",
                                "SURINAME",
                                "SVALBARD AND JAN MAYEN ISLANDS",
                                "SWAZILAND",
                                "SWEDEN",
                                "SWITZERLAND",
                                "SYRIA",
                                "TAIWAN",
                                "TAJIKISTAN",
                                "TANZANIA",
                                "THAILAND",
                                "TIMOR-LESTE",
                                "TOGO",
                                "TOKELAU",
                                "TONGA",
                                "TRINIDAD AND TOBAGO",
                                "TRISTAN DA CUNHA",
                                "TUNISIA",
                                "TURKEY",
                                "TURKMENISTAN",
                                "TURKS AND CAICOS ISLANDS",
                                "TUVALU",
                                "UGANDA",
                                "UKRAINE",
                                "UNITED ARAB EMIRATES",
                                "UNITED STATES MINOR OUTLYING ISLANDS",
                                "UNITED STATES VIRGIN ISLANDS",
                                "URUGUAY",
                                "UZBEKISTAN",
                                "VANUATU",
                                "VATICAN",
                                "VENEZUELA",
                                "VIETNAM",
                                "WAKE ISLAND",
                                "WALLIS AND FUTUNA ISLANDS",
                                "WESTERN SAHARA",
                                "YEMEN",
                                "ZAMBIA",
                                "ZIMBABWE",
                                "NETHERLANDS ANTILLES",
                                "UNKNOWN"
                            ]
                        }
                    }
                },
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/records/ssic/": {
            "get": {
                "operationId": "records_ssic",
                "summary": "Returns a list of industries, the industries maybe different depends on your industries settings",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "10799 - MANUFACTURE OF OTHER FOOD PRODUCTS N.E.C. (EXCEPT FOOD CHEMICALS AND ADDITIVES)",
                                "10800 - MANUFACTURE OF PREPARED ANIMAL FEEDS (INCLUDING ADDITIVES FOR ANIMAL FEED)",
                                "11010 - DISTILLING, RECTIFYING AND BLENDING OF SPIRITS; ETHYL ALCOHOL PRODUCTION FROM FERMENTED MATERIALS (INCLUDING SAMSU AND CHINESE LIQUORS)",
                                "11020 - MANUFACTURE OF WINES",
                                "11030 - MANUFACTURE OF MALT LIQUORS AND MALT (E.G. BEER AND STOUT)",
                                "11041 - MANUFACTURE OF SOFT DRINKS, PRODUCTION OF MINERAL WATERS (INCLUDING CARBONATED WATERS, SOYA BEAN MILK, BARLEY WATER, CHRYSANTHEMUM WATER)",
                                "11042 - MANUFACTURE OF CORDIALS, SYRUPS AND COMPOSITE CONCENTRATES FOR BEVERAGES",
                                "11043 - MANUFACTURE OF ICE EXCEPT DRY ICE",
                                "12001 - MANUFACTURE OF CIGARETTES",
                                "12009 - MANUFACTURE OF TOBACCO PRODUCTS N.E.C. (E.G. CIGARS, LOOSE TOBACCO)",
                                "13100 - SPINNING, WEAVING AND FINISHING OF TEXTILES"
                            ]
                        }
                    }
                },
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/individual_records/ssoc/": {
            "get": {
                "operationId": "individual_records_ssoc",
                "description": "Returns a list of possible occupation an individual can have, results maybe different depends on your occupation settings.",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "ACCOUNTANT",
                                "ADMINSTRATION PROFESSIONAL",
                                "ARCHITECT",
                                "ARMED FORCES",
                                "ART/ANTIQUE DEALER",
                                "ARTISTE/MUSICIAN/CREW/PRODUCER",
                                "AUCTIONEER",
                                "BANKER",
                                "BUILDING CONSTRUCTION LABOURER",
                                "BUSINESS OWNER/SOLE PROPRIETOR",
                                "C-SUITE OFFICER",
                                "CABIN CREW",
                                "CHEF",
                                "CIVIL SERVANT",
                                "CLEANER/HOUSEKEEPER",
                                "CLERICAL STAFF",
                                "CUSTOMER SERVICE PROFESSIONAL",
                                "DESIGNER",
                                "COMPANY DIRECTOR/PARTNER",
                                "DRIVER",
                                "ELECTRICIAN",
                                "ENGINEER",
                                "FACTORY/MACHINE OPERATOR",
                                "F&B SERVICE CREW",
                                "HAIRDRESSER",
                                "HAWKER",
                                "HOTEL AND RESTAURANT MANAGER",
                                "INFORMATION TECHNOLOGY PROFESSIONAL",
                                "INSURANCE AGENT",
                                "JOURNALIST/REPORTER",
                                "LEGAL PROFESSIONAL",
                                "MEDICAL PROFESSIONAL",
                                "MONEY LENDER",
                                "PAWNBROKER",
                                "PHOTOGRAPHER",
                                "PILOT",
                                "PLUMBER",
                                "GOVERNMENT OFFICIAL/POLITICAN",
                                "PROFESSOR",
                                "REAL ESTATE BROKER/AGENT",
                                "RECEPTIONIST",
                                "RETIRED",
                                "REMISER/TRADER/DEALER",
                                "SALES, MARKETING AND PUBLIC RELATIONS PROFESSIONAL",
                                "SCHOOL PRINCIPAL",
                                "SKILLED/PRODUCTION WORKER",
                                "SURVEYOR",
                                "TEACHING PROFESSIONAL",
                                "TECHNICIAN",
                                "TRAVEL AGENT/TOUR GUIDE",
                                "UNEMPLOYED",
                                "UNKNOWN - UNKNOWN",
                                "OTHERS"
                            ]
                        }
                    }
                },
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/individual_records/id_types/": {
            "get": {
                "operationId": "individual_records_id_types",
                "description": "Returns a list of possible id_types an individual can have.\nContains a mixture of pre-defined defaults and previously entered data.\n\nExample usage:\ncurl <hostname>/api/individual_records/id_types/?search='ic'",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "INTERNATIONAL PASSPORT",
                                "NATIONAL ID",
                                "DRIVING LICENCE",
                                "OTHERS"
                            ]
                        }
                    }
                },
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/records/source_of_funds/": {
            "get": {
                "operationId": "records_source_of_funds",
                "description": "Get the source of funds from the BE List",
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "SALARY",
                                "INHERITANCE",
                                "LOAN",
                                "LOTTERY/WINDFALL",
                                "INVESTMENT GAIN",
                                "RENTAL INCOME",
                                "BUSINESS REVENUE",
                                "OTHERS"
                            ]
                        }
                    }
                },
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/corporate_records/entity_types/": {
            "get": {
                "operationId": "corporate_records_entity_types",
                "description": "Returns a list of possible entity types a corporate can have.\nContains a mixture of pre-defined defaults and previously entered data.\n\nExample usage:\ncurl <hostname>/api/corporate_records/entity_types/?search='ptr'",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "array",
                            "example": [
                                "EXEMPT PRIVATE COMPANY LIMITED BY SHARES",
                                "LIMITED (LTD)",
                                "LIMITED LIABILITY COMPANY (LLC)",
                                "LIMITED LIABILITY PARTNERSHIP (LLP)",
                                "LIMITED PARTNERSHIP (LPT)",
                                "PRIVATE COMPANY LIMITED BY SHARES (LTD)",
                                "PROPRIETARY LIMITED (PTY LTD)",
                                "PUBLIC COMPANY LIMITED BY GUARANTEE",
                                "PUBLIC COMPANY LIMITED BY SHARES",
                                "PUBLIC LIMITED COMPANY (PLC)"
                            ]
                        }
                    }
                },
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/corporate_records/ownership_layers/": {
            "get": {
                "operationId": "corporate_records_ownership_layers",
                "description": "Returns list of ownership structure layers",
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "array",
                            "example": [
                                "1",
                                "2",
                                "3 OR MORE",
                                "UNKNOWN"
                            ]
                        }
                    }
                },
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/customers/product_service_complexities/": {
            "get": {
                "operationId": "customers_product_service_complexities",
                "description": "Returns the product service complexity choices for a Customer",
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "SIMPLE",
                                "COMPLEX",
                                "HIGH RISK",
                                "UNUSUAL",
                                "UNKNOWN"
                            ]
                        }
                    }
                },
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/customers/onboarding_modes/": {
            "get": {
                "operationId": "customers_onboarding_modes",
                "description": "Returns the onboarding mode choices for a Customer",
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "FACE-TO-FACE",
                                "NON FACE-TO-FACE",
                                "UNKNOWN"
                            ]
                        }
                    }
                },
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/customers/payment_modes/": {
            "get": {
                "operationId": "customers_payment_modes",
                "description": "Returns the payment mode choices for a Customer",
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "TELEGRAPHIC TRANSFER",
                                "CHEQUE (LOCAL)",
                                "CHEQUE (FOREIGN)",
                                "CREDIT CARD",
                                "VIRTUAL CURRENCY",
                                "CASH",
                                "DIRECT DEBIT / CREDIT",
                                "UNKNOWN",
                                "NOT APPLICABLE"
                            ]
                        }
                    }
                },
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/documents/document_types/": {
            "get": {
                "operationId": "documents_document_types",
                "summary": "Returns a list of possible document_types",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                {
                                    "category": "IDENTIFICATION DOCUMENT",
                                    "documentTypes": [
                                        "NATIONAL ID",
                                        "PASSPORT",
                                        "DRIVING LICENSE",
                                        "OTHERS (PLS SPECIFY)"
                                    ]
                                },
                                {
                                    "category": "PROOF OF ADDRESS",
                                    "documentTypes": [
                                        "UTILITY/TELEPHONE BILL",
                                        "BANK STATEMENT",
                                        "OTHERS (PLS SPECIFY)"
                                    ]
                                },
                                {
                                    "category": "ADDITIONAL INFORMATION",
                                    "documentTypes": [
                                        "CUSTOMER ACCEPTANCE FORM",
                                        "SOURCE OF FUND PROOF",
                                        "SELFIE IMAGE",
                                        "INVOICE",
                                        "CHEQUE IMAGE",
                                        "SCREENING RESULTS",
                                        "OTHERS (PLS SPECIFY)"
                                    ]
                                },
                                {
                                    "category": "REGULATORY DOCUMENT",
                                    "documentTypes": [
                                        "CERTIFICATE OF INCORPORATION",
                                        "MEMORANDUM & ARTICLE OF ASSOCIATION",
                                        "EXTRACT OF COMPANY PROFILE",
                                        "BOARD RESOLUTION",
                                        "OTHERS (PLS SPECIFY)"
                                    ]
                                },
                                {
                                    "category": "PROOF OF ADDRESS",
                                    "documentTypes": [
                                        "BANK STATEMENT",
                                        "UTILITY/TELEPHONE BILL",
                                        "OTHERS (PLS SPECIFY)"
                                    ]
                                },
                                {
                                    "category": "ADDITIONAL INFORMATION",
                                    "documentTypes": [
                                        "CUSTOMER ACCEPTANCE FORM",
                                        "SOURCE OF FUND PROOF",
                                        "SOURCE OF WEALTH PROOF",
                                        "SELFIE IMAGE",
                                        "INVOICE",
                                        "CHEQUE IMAGE",
                                        "SCREENING RESULTS",
                                        "OTHERS (PLS SPECIFY)"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/documents/authenticities/": {
            "get": {
                "operationId": "documents_authenticities",
                "description": "Returns a list of possible titles an individual can have.",
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "CERTIFIED TRUE COPY",
                                "CTC BY NOTARIES PUBLIC, COMMISSIONER OF OATHS, OR REGISTERED LAWYERS",
                                "ORIGINAL SIGHTED",
                                "SCANNED/ PHOTOCOPY"
                            ]
                        }
                    }
                },
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/crps/roles/": {
            "get": {
                "operationId": "crps_roles",
                "description": "Returns a list of possible roles a crp can have.",
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "array",
                            "example": [
                                {
                                    "category": "TOP MANAGEMENT",
                                    "roles": [
                                        "DIRECTOR",
                                        "DIRECTOR (ALTERNATE)",
                                        "DIRECTOR (NOMINEE)",
                                        "C-SUITE OFFICER",
                                        "BOARD MEMBER",
                                        "HEAD OFFICE",
                                        "OWNER",
                                        "SHAREHOLDER",
                                        "ULTIMATE BENEFICIARY OWNER",
                                        "ULTIMATE HOLDING COMPANY"
                                    ]
                                },
                                {
                                    "category": "MANAGER",
                                    "roles": [
                                        "BRANCH MANGER",
                                        "FUND MANAGER",
                                        "GENERAL MANGER",
                                        "LOCAL MANAGER"
                                    ]
                                },
                                {
                                    "category": "PARTNER",
                                    "roles": [
                                        "PARTNER",
                                        "GENERAL PARTNER",
                                        "MANAGING PARTNER",
                                        "LIMITED PARTNER"
                                    ]
                                },
                                {
                                    "category": "OTHERS",
                                    "roles": [
                                        "AUTHORIZED SIGNATORY",
                                        "AUTHORIZED TRADING PERSONNEL",
                                        "COMMITTEE MEMBER",
                                        "CORPORATE SECRETARY",
                                        "CONNECTED PARTY",
                                        "CUSTODIAN",
                                        "NOMINEE/TRUSTEE",
                                        "PROTECTOR",
                                        "SETTLOR",
                                        "RELEVANT PERSON",
                                        "REMITTER",
                                        "BENEFICIARY",
                                        "REPRESENTATIVE AGENT",
                                        "SUBSIDIARY",
                                        "PLEASE SPECIFY"
                                    ]
                                }
                            ]
                        }
                    }
                },
                "tags": [
                    "static_list_retrieval_apis"
                ]
            },
            "parameters": []
        },
        "/corporate_records/": {
            "get": {
                "operationId": "corporate_records_list",
                "description": "Get the Corporate Records where search_fields = ('name', 'alias_names', 'incorporation_number')",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reference_id",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reference_id__iexact",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reference_id__icontains",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "name",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "example": {
                                "count": 1336,
                                "next": "http://youendpoint.cynopsis.co/api/corporate_records/?limit=10&offset=10",
                                "previous": null,
                                "results": [
                                    {
                                        "id": 329,
                                        "createdBy": null,
                                        "updatedBy": null,
                                        "handshakesReports": [],
                                        "createdAt": "2019-02-20T11:30:39.138056+08:00",
                                        "updatedAt": "2019-02-20T11:30:39.138164+08:00",
                                        "name": "CPORATEDATA",
                                        "recordType": "CORPORATE",
                                        "referenceId": "",
                                        "aliasNames": [
                                            "CPORATE"
                                        ],
                                        "phoneNumbers": [
                                            "18977091"
                                        ],
                                        "addresses": [
                                            "1 Tran Nao street"
                                        ],
                                        "oldNames": [],
                                        "sourceOfFunds": "SALARY",
                                        "emailAddresses": [
                                            "abc@gmail.com"
                                        ],
                                        "bankAccounts": [
                                            "7609316A47"
                                        ],
                                        "isIncorporated": true,
                                        "entityType": "SOLE-PROPRIETORSHIP (SPR)",
                                        "countryOfOperations": "VN",
                                        "countryOfIncorporation": "VN",
                                        "ownershipStructureLayers": "Datht",
                                        "businessActivity": "Trade coin",
                                        "website": "https://concobebe.fun",
                                        "incorporationNumber": "123",
                                        "incorporationDate": "2019-02-04T06:00:00+08:00",
                                        "incorporationExpiryDate": "2019-09-04T06:00:00+08:00",
                                        "inFatfJurisdiction": true,
                                        "dialog": 11480,
                                        "fileBucket": 674
                                    }
                                ]
                            }
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "post": {
                "operationId": "corporate_records_create",
                "description": "",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/PersonCorporateRecordSerializer"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/PersonCorporateRecordSerializer"
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": []
        },
        "/crps/status/": {
            "get": {
                "operationId": "crps_status",
                "summary": "Returns a list of crp status.",
                "description": "Example usage:\ncurl <hostname>/api/crps/status/",
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "CURRENT",
                                "RESIGNED"
                            ]
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": []
        },
        "/crps/{crp_id}/face_compare/": {
            "post": {
                "operationId": "crps_face_compare_create",
                "description": "",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/FaceCompare"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/FaceCompare"
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": [
                {
                    "name": "crp_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/crps/{crp_id}/ocr_doc/": {
            "post": {
                "operationId": "crps_ocr_doc_create",
                "description": "",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/OcrDocument"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/OcrDocument"
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": [
                {
                    "name": "crp_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/customers/profile_types/": {
            "get": {
                "operationId": "customers_profile_types",
                "description": "Returns the profile choices for a Customer",
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "AGENT",
                                "BUSINESS PARTNER",
                                "CUSTOMER",
                                "STAFF",
                                "VENDOR"
                            ]
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": []
        },
        "/customers/{customer_id}/search/": {
            "post": {
                "operationId": "customers_search_create",
                "description": "Creates the relevant searches",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/Search"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/Search"
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": [
                {
                    "name": "customer_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        },
        "/documents/": {
            "get": {
                "operationId": "documents_list",
                "description": "Retrieves all the posts for a record",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "expiry_date",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "show_expiry_alerts",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "expiry_date__lte",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "expiring",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "example": {
                                "count": 791,
                                "next": "http://a2-dev1-be.cynopsis.co/api/documents/?limit=1&offset=1",
                                "prev": null,
                                "results": [
                                    {
                                        "id": 1,
                                        "createdBy": null,
                                        "updatedBy": {
                                            "id": "thissianoauthid",
                                            "name": "anton1",
                                            "email": "email@email.com",
                                            "oauthId": "thissianoauthid",
                                            "isActive": true,
                                            "mfaEnabled": false
                                        },
                                        "document": "https://docpath.com",
                                        "docName": "docname.jpg",
                                        "record": {
                                            "id": 1,
                                            "createdAt": "2018-09-25T14:45:15.994269+08:00",
                                            "updatedAt": "2019-12-19T10:46:33.115400+08:00",
                                            "name": "STEV4 AREES",
                                            "recordType": "INDIVIDUAL",
                                            "referenceId": "123123123123123123123123123123",
                                            "aliasNames": [],
                                            "phoneNumbers": [
                                                "+65-12312321"
                                            ],
                                            "addresses": [],
                                            "oldNames": [
                                                "ANH VU"
                                            ],
                                            "sourceOfFunds": "OTHERS",
                                            "emailAddresses": [
                                                "asdasd@email.com"
                                            ],
                                            "bankAccounts": [],
                                            "createdBy": null,
                                            "updatedBy": "thissianoauthid",
                                            "dialog": 1,
                                            "fileBucket": 1
                                        },
                                        "createdAt": "2018-09-26T14:50:54.180146+08:00",
                                        "updatedAt": "2019-04-20T15:02:05.716559+08:00",
                                        "docTypeCategory": "",
                                        "docType": "PASSPORT",
                                        "authenticity": "ORIGINAL SIGHTED",
                                        "issueDate": "2018-09-01T08:00:00+08:00",
                                        "expiryDate": "2018-09-26T08:00:00+08:00",
                                        "s3": true,
                                        "showExpiryAlerts": false,
                                        "fileBucket": 1
                                    }
                                ]
                            }
                        }
                    }
                },
                "consumes": [
                    "multipart/form-data"
                ],
                "tags": [
                    "others"
                ]
            },
            "parameters": []
        },
        "/individual_records/": {
            "get": {
                "operationId": "individual_records_list",
                "description": "Get the list of individual records where search_fields = ('name', 'alias_names')",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "record_type",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "record_type__iexact",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reference_id",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reference_id__iexact",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reference_id__icontains",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "name",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "exclude_customer_id",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "number"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/PersonIndividualRecordSerializer"
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "post": {
                "operationId": "individual_records_create",
                "description": "Viewset for individual records",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/PersonIndividualRecordSerializer"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/PersonIndividualRecordSerializer"
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": []
        },
        "/individual_records/titles/": {
            "get": {
                "operationId": "individual_records_titles",
                "description": "Returns a list of possible titles an individual can have.",
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "type": "object",
                            "example": [
                                "DR",
                                "MR",
                                "MS",
                                "MRS",
                                "MDM"
                            ]
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": []
        },
        "/records/": {
            "get": {
                "operationId": "records_list",
                "description": "Viewset for records",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "record_type",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "record_type__iexact",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reference_id",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reference_id__iexact",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "reference_id__icontains",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "name",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "exclude_customer_id",
                        "in": "query",
                        "description": "",
                        "required": false,
                        "type": "number"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/Record"
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": []
        },
        "/records/{id}/": {
            "get": {
                "operationId": "records_read",
                "description": "Viewset for records",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/Record"
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "delete": {
                "operationId": "records_delete",
                "description": "Viewset for records",
                "parameters": [],
                "responses": {
                    "204": {
                        "description": ""
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "description": "A unique integer value identifying this record.",
                    "required": true,
                    "type": "integer"
                }
            ]
        },
        "/records/{id}/crps/": {
            "get": {
                "operationId": "records_crps",
                "description": "Returns the related CRPs",
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/Record"
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "description": "A unique integer value identifying this record.",
                    "required": true,
                    "type": "integer"
                }
            ]
        },
        "/records/{record_id}/search/": {
            "get": {
                "operationId": "records_search_list",
                "description": "Performs relevant searches (in parallel)",
                "parameters": [
                    {
                        "name": "search",
                        "in": "query",
                        "description": "A search term.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "sort",
                        "in": "query",
                        "description": "Which field to use when ordering the results.",
                        "required": false,
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "in": "query",
                        "description": "Number of results to return per page.",
                        "required": false,
                        "type": "integer"
                    },
                    {
                        "name": "offset",
                        "in": "query",
                        "description": "The initial index from which to return the results.",
                        "required": false,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "",
                        "schema": {
                            "required": [
                                "count",
                                "results"
                            ],
                            "type": "object",
                            "properties": {
                                "count": {
                                    "type": "integer"
                                },
                                "next": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "previous": {
                                    "type": "string",
                                    "format": "uri",
                                    "x-nullable": true
                                },
                                "results": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/definitions/ClientSearch"
                                    }
                                }
                            }
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "post": {
                "operationId": "records_search_create",
                "description": "Creates the relevant searches",
                "parameters": [
                    {
                        "name": "data",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/ClientSearch"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "",
                        "schema": {
                            "$ref": "#/definitions/ClientSearch"
                        }
                    }
                },
                "tags": [
                    "others"
                ]
            },
            "parameters": [
                {
                    "name": "record_id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }
            ]
        }
    },
    "definitions": {
        "HandshakesReport": {
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "reportDateTime": {
                    "title": "Report date time",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "activeName": {
                    "title": "Active name",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "xmlData": {
                    "title": "Xml data",
                    "type": "string",
                    "x-nullable": true
                },
                "directRedScore": {
                    "title": "Direct red score",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "indirectRedScore": {
                    "title": "Indirect red score",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "networkScoreDegreeCentrality": {
                    "title": "Network score degree centrality",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "entityGuid": {
                    "title": "Entity guid",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "dataset": {
                    "title": "Dataset",
                    "type": "string",
                    "x-nullable": true
                },
                "otherNames": {
                    "type": "array",
                    "items": {
                        "title": "Other names",
                        "type": "string",
                        "maxLength": 255,
                        "minLength": 1
                    }
                },
                "identificationNumber": {
                    "title": "Identification number",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "currentAddress": {
                    "title": "Current address",
                    "type": "string",
                    "maxLength": 1024,
                    "x-nullable": true
                },
                "otherAddress": {
                    "title": "Other address",
                    "type": "string",
                    "maxLength": 1024,
                    "x-nullable": true
                },
                "incorporationDate": {
                    "title": "Incorporation date",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "incorporationCitizenship": {
                    "title": "Incorporation citizenship",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "companyType": {
                    "title": "Company type",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "companyStatus": {
                    "title": "Company status",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "primaryBusinessActivity": {
                    "title": "Primary business activity",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "secondaryBusinessActivity": {
                    "title": "Secondary business activity",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "ownershipLayers": {
                    "title": "Ownership layers",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "createdBy": {
                    "title": "Created by",
                    "type": "string",
                    "x-nullable": true
                },
                "updatedBy": {
                    "title": "Updated by",
                    "type": "string",
                    "x-nullable": true
                },
                "record": {
                    "title": "Record",
                    "type": "integer",
                    "x-nullable": true
                }
            }
        },
        "PersonCorporateRecordSerializer": {
            "required": [
                "name",
                "entityType",
                "countryOfOperations",
                "countryOfIncorporation",
                "ownershipStructureLayers"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "handshakesReports": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/HandshakesReport"
                    },
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "name": {
                    "title": "Name",
                    "description": "This is the name of the entity/individual",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1
                },
                "recordType": {
                    "title": "Record type",
                    "description": "CharField for name, max_length=32",
                    "type": "string",
                    "enum": [
                        "INDIVIDUAL",
                        "CORPORATE"
                    ],
                    "readOnly": true
                },
                "referenceId": {
                    "title": "Reference id",
                    "description": "This is the reference id in the client's system",
                    "type": "string",
                    "maxLength": 255,
                    "example:": ""
                },
                "aliasNames": {
                    "description": "Array representing different names for this record",
                    "type": "array",
                    "items": {
                        "title": "Alias names",
                        "type": "string",
                        "maxLength": 255,
                        "minLength": 1
                    }
                },
                "phoneNumbers": {
                    "description": "Array representing phone numbers",
                    "type": "array",
                    "items": {
                        "title": "Phone numbers",
                        "type": "string",
                        "maxLength": 32,
                        "minLength": 1
                    }
                },
                "addresses": {
                    "description": "Array representing addresses",
                    "type": "array",
                    "items": {
                        "title": "Addresses",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "oldNames": {
                    "description": "Array representing old names",
                    "type": "array",
                    "items": {
                        "title": "Old names",
                        "type": "string",
                        "maxLength": 255,
                        "minLength": 1
                    },
                    "readOnly": true
                },
                "sourceOfFunds": {
                    "title": "Source of funds",
                    "type": "string",
                    "maxLength": 255
                },
                "emailAddresses": {
                    "description": "Array for email addresses",
                    "type": "array",
                    "items": {
                        "title": "Email addresses",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "bankAccounts": {
                    "description": "Array of Bank accounts",
                    "type": "array",
                    "items": {
                        "title": "Bank accounts",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "isIncorporated": {
                    "title": "Is incorporated",
                    "description": "A required boolean representing whether this entity is incorporated",
                    "type": "boolean"
                },
                "entityType": {
                    "title": "Entity type",
                    "description": "A selection from a list of entity_types",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1
                },
                "countryOfOperations": {
                    "title": "Country of operations",
                    "description": "A required field representing country of operations",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1
                },
                "countryOfIncorporation": {
                    "title": "Country of incorporation",
                    "description": "A required field representing country of incorporation",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1
                },
                "ownershipStructureLayers": {
                    "title": "Ownership structure layers",
                    "description": "A required field representing ownership_structure_layers",
                    "type": "string",
                    "maxLength": 64,
                    "minLength": 1
                },
                "businessActivity": {
                    "title": "Business activity",
                    "description": "A required field representing business_activity",
                    "type": "string",
                    "maxLength": 1024
                },
                "website": {
                    "title": "Website",
                    "description": "Optional",
                    "type": "string",
                    "maxLength": 1024
                },
                "incorporationNumber": {
                    "title": "Incorporation number",
                    "description": "Optional",
                    "type": "string",
                    "maxLength": 255
                },
                "incorporationDate": {
                    "title": "Incorporation date",
                    "description": "Optional",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "incorporationExpiryDate": {
                    "title": "Incorporation expiry date",
                    "description": "Optional",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "inFatfJurisdiction": {
                    "title": "In fatf jurisdiction",
                    "description": "Optional",
                    "type": "boolean"
                },
                "dialog": {
                    "title": "Dialog",
                    "type": "integer",
                    "readOnly": true
                },
                "fileBucket": {
                    "title": "File bucket",
                    "type": "integer",
                    "readOnly": true
                }
            }
        },
        "CRPRole": {
            "required": [
                "role"
            ],
            "type": "object",
            "properties": {
                "dateAppointed": {
                    "title": "Date appointed",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "dateResigned": {
                    "title": "Date resigned",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "role": {
                    "title": "Role",
                    "type": "string",
                    "maxLength": 256,
                    "minLength": 1,
                    "example": "GENERAL PARTNER"
                },
                "crp": {
                    "title": "Crp",
                    "type": "integer",
                    "x-nullable": true,
                    "example": null
                }
            }
        },
        "ScreeningConclusion": {
            "title": "Latest screening conclusion",
            "required": [
                "crp"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "invalid": {
                    "title": "Invalid",
                    "type": "boolean",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "pep": {
                    "title": "Pep",
                    "type": "boolean"
                },
                "sanction": {
                    "title": "Sanction",
                    "type": "boolean"
                },
                "adverseNews": {
                    "title": "Adverse news",
                    "type": "boolean"
                },
                "noHit": {
                    "title": "No hit",
                    "type": "boolean"
                },
                "isSystemGenerated": {
                    "title": "Is system generated",
                    "type": "boolean"
                },
                "crp": {
                    "title": "Crp",
                    "type": "integer",
                    "example": "null"
                }
            }
        },
        "CustomerIndividualRecordSerializer": {
            "title": "Individual record",
            "required": [
                "name",
                "gender",
                "nationality",
                "countryOfResidence"
            ],
            "type": "object",
            "properties": {
                "primary": {
                    "title": "Primary",
                    "type": "boolean",
                    "example": "false"
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "name": {
                    "title": "Name",
                    "description": "This is the name of the entity/individual",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1
                },
                "recordType": {
                    "title": "Record type",
                    "description": "CharField for name, max_length=32",
                    "type": "string",
                    "enum": [
                        "INDIVIDUAL",
                        "CORPORATE"
                    ],
                    "readOnly": true
                },
                "aliasNames": {
                    "description": "Array representing different names for this record",
                    "type": "array",
                    "items": {
                        "title": "Alias names",
                        "type": "string",
                        "maxLength": 255,
                        "minLength": 1
                    }
                },
                "phoneNumbers": {
                    "description": "Array representing phone numbers",
                    "type": "array",
                    "items": {
                        "title": "Phone numbers",
                        "type": "string",
                        "maxLength": 32,
                        "minLength": 1
                    }
                },
                "addresses": {
                    "description": "Array representing addresses",
                    "type": "array",
                    "items": {
                        "title": "Addresses",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "oldNames": {
                    "description": "Array representing old names",
                    "type": "array",
                    "items": {
                        "title": "Old names",
                        "type": "string",
                        "maxLength": 255,
                        "minLength": 1
                    },
                    "readOnly": true
                },
                "sourceOfFunds": {
                    "title": "Source of funds",
                    "type": "string",
                    "maxLength": 255
                },
                "emailAddresses": {
                    "description": "Array for email addresses",
                    "type": "array",
                    "items": {
                        "title": "Email addresses",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "bankAccounts": {
                    "description": "Array of Bank accounts",
                    "type": "array",
                    "items": {
                        "title": "Bank accounts",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "gender": {
                    "title": "Gender",
                    "description": "This is an Important field",
                    "type": "string",
                    "enum": [
                        "MALE",
                        "FEMALE",
                        "UNKNOWN"
                    ]
                },
                "nationality": {
                    "title": "Nationality",
                    "description": "This is an Important field",
                    "type": "string",
                    "enum": [
                        "SINGAPORE",
                        "MALAYSIA",
                        "INDONESIA",
                        "UNITED KINGDOM",
                        "UNITED STATES OF AMERICA",
                        "HONG KONG",
                        "ABKHAZIA",
                        "AFGHANISTAN",
                        "ALAND ISLANDS",
                        "ALBANIA",
                        "ALGERIA",
                        "AMERICAN SAMOA",
                        "ANDORRA",
                        "ANGOLA",
                        "ANGUILLA",
                        "ANTARCTICA",
                        "ANTIGUA AND BARBUDA",
                        "ARGENTINA",
                        "ARMENIA",
                        "ARUBA",
                        "ASCENSION",
                        "ASHMORE AND CARTIER ISLANDS",
                        "AUSTRALIA",
                        "AUSTRALIAN ANTARCTIC TERRITORY",
                        "AUSTRIA",
                        "AZERBAIJAN",
                        "BAHAMAS",
                        "BAHRAIN",
                        "BAKER ISLAND",
                        "BANGLADESH",
                        "BARBADOS",
                        "BELARUS",
                        "BELGIUM",
                        "BELIZE",
                        "BENIN",
                        "BERMUDA",
                        "BHUTAN",
                        "BOLIVIA",
                        "BOSNIA AND HERZEGOVINA",
                        "BOTSWANA",
                        "BOUVET ISLAND",
                        "BRAZIL",
                        "BRITISH ANTARCTIC TERRITORY",
                        "BRITISH INDIAN OCEAN TERRITORY",
                        "BRITISH SOVEREIGN BASE AREAS",
                        "BRITISH VIRGIN ISLANDS",
                        "BRUNEI",
                        "BULGARIA",
                        "BURKINA FASO",
                        "BURMA (REPUBLIC OF THE UNION OF MYANMAR)",
                        "BURUNDI",
                        "CAMBODIA",
                        "CAMEROON",
                        "CANADA",
                        "CAPE VERDE",
                        "CARIBBEAN NETHERLANDS",
                        "CAYMAN ISLANDS",
                        "CENTRAL AFRICAN REPUBLIC",
                        "CHAD",
                        "CHILE",
                        "CHINA",
                        "CHRISTMAS ISLAND",
                        "CLIPPERTON ISLAND",
                        "COCOS (KEELING) ISLANDS",
                        "COLOMBIA",
                        "COMOROS",
                        "CONGO (REPUBLIC OF)",
                        "COOK ISLANDS",
                        "CORAL SEA ISLANDS",
                        "COSTA RICA",
                        "COTE D'IVOIRE (IVORY COAST)",
                        "CROATIA",
                        "CUBA",
                        "CURACAO",
                        "CYPRUS",
                        "CZECH REPUBLIC",
                        "DEMOCRATIC REPUBLIC OF THE CONGO",
                        "DENMARK",
                        "DJIBOUTI",
                        "DOMINICA",
                        "DOMINICAN REPUBLIC",
                        "ECUADOR",
                        "EGYPT",
                        "EL SALVADOR",
                        "EQUATORIAL GUINEA",
                        "ERITREA",
                        "ESTONIA",
                        "ETHIOPIA",
                        "FALKLAND ISLANDS",
                        "FAROE ISLANDS",
                        "FIJI",
                        "FINLAND",
                        "FRANCE",
                        "FRENCH GUIANA",
                        "FRENCH POLYNESIA",
                        "FRENCH SOUTHERN AND ANTARCTIC LANDS",
                        "FRENCH SOUTHERN TERRITORIES",
                        "GABON",
                        "GAMBIA",
                        "GEORGIA",
                        "GERMANY",
                        "GHANA",
                        "GIBRALTAR",
                        "GREECE",
                        "GREENLAND",
                        "GRENADA",
                        "GUADELOUPE",
                        "GUAM",
                        "GUATEMALA",
                        "GUERNSEY",
                        "GUINEA",
                        "GUINEA-BISSAU",
                        "GUYANA",
                        "HAITI",
                        "HEARD AND MCDONALD ISLANDS",
                        "HONDURAS",
                        "HOWLAND ISLAND",
                        "HUNGARY",
                        "ICELAND",
                        "INDIA",
                        "IRAN",
                        "IRAQ",
                        "IRELAND",
                        "ISLE OF MAN",
                        "ISRAEL",
                        "ITALY",
                        "JAMAICA",
                        "JAPAN",
                        "JARVIS ISLAND",
                        "JERSEY",
                        "JOHNSTON ATOLL",
                        "JORDAN",
                        "KAZAKHSTAN",
                        "KENYA",
                        "KINGMAN REEF",
                        "KIRIBATI",
                        "KOSOVO",
                        "KUWAIT",
                        "KYRGYZSTAN",
                        "LAOS",
                        "LATVIA",
                        "LEBANON",
                        "LESOTHO",
                        "LIBERIA",
                        "LIBYA",
                        "LIECHTENSTEIN",
                        "LITHUANIA",
                        "LUXEMBOURG",
                        "MACAU",
                        "MACEDONIA",
                        "MADAGASCAR",
                        "MALAWI",
                        "MALDIVES",
                        "MALI",
                        "MALTA",
                        "MARSHALL ISLANDS",
                        "MARTINIQUE",
                        "MAURITANIA",
                        "MAURITIUS",
                        "MAYOTTE",
                        "MEXICO",
                        "MICRONESIA",
                        "MIDWAY ISLANDS",
                        "MOLDOVA",
                        "MONACO",
                        "MONGOLIA",
                        "MONTENEGRO",
                        "MONTSERRAT",
                        "MOROCCO",
                        "MOZAMBIQUE",
                        "NAGORNO-KARABAKH",
                        "NAMIBIA",
                        "NAURU",
                        "NAVASSA ISLAND",
                        "NEPAL",
                        "NETHERLANDS",
                        "NEW CALEDONIA",
                        "NEW ZEALAND",
                        "NICARAGUA",
                        "NIGER",
                        "NIGERIA",
                        "NIUE",
                        "NORFOLK ISLAND",
                        "NORTH KOREA",
                        "NORTHERN CYPRUS",
                        "NORTHERN MARIANA ISLANDS",
                        "NORWAY",
                        "OMAN",
                        "PAKISTAN",
                        "PALAU",
                        "PALESTINE",
                        "PALMYRA ATOLL",
                        "PANAMA",
                        "PAPUA NEW GUINEA",
                        "PARAGUAY",
                        "PERU",
                        "PETER I ISLAND",
                        "PHILIPPINES",
                        "PITCAIRN",
                        "PITCAIRN ISLANDS",
                        "POLAND",
                        "PORTUGAL",
                        "PRIDNESTROVIE (TRANSNISTRIA)",
                        "PUERTO RICO",
                        "QATAR",
                        "QUEEN MAUD LAND",
                        "REUNION",
                        "ROMANIA",
                        "ROSS DEPENDENCY",
                        "RUSSIAN FEDERATION",
                        "RWANDA",
                        "SAINT BARTHELEMY",
                        "SAINT HELENA",
                        "SAINT KITTS AND NEVIS",
                        "SAINT LUCIA",
                        "SAINT MARTIN (FRANCE)",
                        "SAINT MARTIN (NETHERLANDS)",
                        "SAINT PIERRE AND MIQUELON",
                        "SAINT VINCENT AND GRENADINES",
                        "SAMOA",
                        "SAN MARINO",
                        "SAO TOME AND PRINCIPE",
                        "SAUDI ARABIA",
                        "SENEGAL",
                        "SERBIA",
                        "SEYCHELLES",
                        "SIERRA LEONE",
                        "SLOVAKIA",
                        "SLOVENIA",
                        "SOLOMON ISLANDS",
                        "SOMALIA",
                        "SOMALILAND",
                        "SOUTH AFRICA",
                        "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
                        "SOUTH KOREA",
                        "SOUTH OSSETIA",
                        "SOUTH SUDAN",
                        "SPAIN",
                        "SRI LANKA",
                        "SUDAN",
                        "SURINAME",
                        "SVALBARD AND JAN MAYEN ISLANDS",
                        "SWAZILAND",
                        "SWEDEN",
                        "SWITZERLAND",
                        "SYRIA",
                        "TAIWAN",
                        "TAJIKISTAN",
                        "TANZANIA",
                        "THAILAND",
                        "TIMOR-LESTE",
                        "TOGO",
                        "TOKELAU",
                        "TONGA",
                        "TRINIDAD AND TOBAGO",
                        "TRISTAN DA CUNHA",
                        "TUNISIA",
                        "TURKEY",
                        "TURKMENISTAN",
                        "TURKS AND CAICOS ISLANDS",
                        "TUVALU",
                        "UGANDA",
                        "UKRAINE",
                        "UNITED ARAB EMIRATES",
                        "UNITED STATES MINOR OUTLYING ISLANDS",
                        "UNITED STATES VIRGIN ISLANDS",
                        "URUGUAY",
                        "UZBEKISTAN",
                        "VANUATU",
                        "VATICAN",
                        "VENEZUELA",
                        "VIETNAM",
                        "WAKE ISLAND",
                        "WALLIS AND FUTUNA ISLANDS",
                        "WESTERN SAHARA",
                        "YEMEN",
                        "ZAMBIA",
                        "ZIMBABWE",
                        "NETHERLANDS ANTILLES",
                        "UNKNOWN"
                    ]
                },
                "countryOfResidence": {
                    "title": "Country of residence",
                    "description": "This is an Important field",
                    "type": "string",
                    "enum": [
                        "SINGAPORE",
                        "MALAYSIA",
                        "INDONESIA",
                        "UNITED KINGDOM",
                        "UNITED STATES OF AMERICA",
                        "HONG KONG",
                        "ABKHAZIA",
                        "AFGHANISTAN",
                        "ALAND ISLANDS",
                        "ALBANIA",
                        "ALGERIA",
                        "AMERICAN SAMOA",
                        "ANDORRA",
                        "ANGOLA",
                        "ANGUILLA",
                        "ANTARCTICA",
                        "ANTIGUA AND BARBUDA",
                        "ARGENTINA",
                        "ARMENIA",
                        "ARUBA",
                        "ASCENSION",
                        "ASHMORE AND CARTIER ISLANDS",
                        "AUSTRALIA",
                        "AUSTRALIAN ANTARCTIC TERRITORY",
                        "AUSTRIA",
                        "AZERBAIJAN",
                        "BAHAMAS",
                        "BAHRAIN",
                        "BAKER ISLAND",
                        "BANGLADESH",
                        "BARBADOS",
                        "BELARUS",
                        "BELGIUM",
                        "BELIZE",
                        "BENIN",
                        "BERMUDA",
                        "BHUTAN",
                        "BOLIVIA",
                        "BOSNIA AND HERZEGOVINA",
                        "BOTSWANA",
                        "BOUVET ISLAND",
                        "BRAZIL",
                        "BRITISH ANTARCTIC TERRITORY",
                        "BRITISH INDIAN OCEAN TERRITORY",
                        "BRITISH SOVEREIGN BASE AREAS",
                        "BRITISH VIRGIN ISLANDS",
                        "BRUNEI",
                        "BULGARIA",
                        "BURKINA FASO",
                        "BURMA (REPUBLIC OF THE UNION OF MYANMAR)",
                        "BURUNDI",
                        "CAMBODIA",
                        "CAMEROON",
                        "CANADA",
                        "CAPE VERDE",
                        "CARIBBEAN NETHERLANDS",
                        "CAYMAN ISLANDS",
                        "CENTRAL AFRICAN REPUBLIC",
                        "CHAD",
                        "CHILE",
                        "CHINA",
                        "CHRISTMAS ISLAND",
                        "CLIPPERTON ISLAND",
                        "COCOS (KEELING) ISLANDS",
                        "COLOMBIA",
                        "COMOROS",
                        "CONGO (REPUBLIC OF)",
                        "COOK ISLANDS",
                        "CORAL SEA ISLANDS",
                        "COSTA RICA",
                        "COTE D'IVOIRE (IVORY COAST)",
                        "CROATIA",
                        "CUBA",
                        "CURACAO",
                        "CYPRUS",
                        "CZECH REPUBLIC",
                        "DEMOCRATIC REPUBLIC OF THE CONGO",
                        "DENMARK",
                        "DJIBOUTI",
                        "DOMINICA",
                        "DOMINICAN REPUBLIC",
                        "ECUADOR",
                        "EGYPT",
                        "EL SALVADOR",
                        "EQUATORIAL GUINEA",
                        "ERITREA",
                        "ESTONIA",
                        "ETHIOPIA",
                        "FALKLAND ISLANDS",
                        "FAROE ISLANDS",
                        "FIJI",
                        "FINLAND",
                        "FRANCE",
                        "FRENCH GUIANA",
                        "FRENCH POLYNESIA",
                        "FRENCH SOUTHERN AND ANTARCTIC LANDS",
                        "FRENCH SOUTHERN TERRITORIES",
                        "GABON",
                        "GAMBIA",
                        "GEORGIA",
                        "GERMANY",
                        "GHANA",
                        "GIBRALTAR",
                        "GREECE",
                        "GREENLAND",
                        "GRENADA",
                        "GUADELOUPE",
                        "GUAM",
                        "GUATEMALA",
                        "GUERNSEY",
                        "GUINEA",
                        "GUINEA-BISSAU",
                        "GUYANA",
                        "HAITI",
                        "HEARD AND MCDONALD ISLANDS",
                        "HONDURAS",
                        "HOWLAND ISLAND",
                        "HUNGARY",
                        "ICELAND",
                        "INDIA",
                        "IRAN",
                        "IRAQ",
                        "IRELAND",
                        "ISLE OF MAN",
                        "ISRAEL",
                        "ITALY",
                        "JAMAICA",
                        "JAPAN",
                        "JARVIS ISLAND",
                        "JERSEY",
                        "JOHNSTON ATOLL",
                        "JORDAN",
                        "KAZAKHSTAN",
                        "KENYA",
                        "KINGMAN REEF",
                        "KIRIBATI",
                        "KOSOVO",
                        "KUWAIT",
                        "KYRGYZSTAN",
                        "LAOS",
                        "LATVIA",
                        "LEBANON",
                        "LESOTHO",
                        "LIBERIA",
                        "LIBYA",
                        "LIECHTENSTEIN",
                        "LITHUANIA",
                        "LUXEMBOURG",
                        "MACAU",
                        "MACEDONIA",
                        "MADAGASCAR",
                        "MALAWI",
                        "MALDIVES",
                        "MALI",
                        "MALTA",
                        "MARSHALL ISLANDS",
                        "MARTINIQUE",
                        "MAURITANIA",
                        "MAURITIUS",
                        "MAYOTTE",
                        "MEXICO",
                        "MICRONESIA",
                        "MIDWAY ISLANDS",
                        "MOLDOVA",
                        "MONACO",
                        "MONGOLIA",
                        "MONTENEGRO",
                        "MONTSERRAT",
                        "MOROCCO",
                        "MOZAMBIQUE",
                        "NAGORNO-KARABAKH",
                        "NAMIBIA",
                        "NAURU",
                        "NAVASSA ISLAND",
                        "NEPAL",
                        "NETHERLANDS",
                        "NEW CALEDONIA",
                        "NEW ZEALAND",
                        "NICARAGUA",
                        "NIGER",
                        "NIGERIA",
                        "NIUE",
                        "NORFOLK ISLAND",
                        "NORTH KOREA",
                        "NORTHERN CYPRUS",
                        "NORTHERN MARIANA ISLANDS",
                        "NORWAY",
                        "OMAN",
                        "PAKISTAN",
                        "PALAU",
                        "PALESTINE",
                        "PALMYRA ATOLL",
                        "PANAMA",
                        "PAPUA NEW GUINEA",
                        "PARAGUAY",
                        "PERU",
                        "PETER I ISLAND",
                        "PHILIPPINES",
                        "PITCAIRN",
                        "PITCAIRN ISLANDS",
                        "POLAND",
                        "PORTUGAL",
                        "PRIDNESTROVIE (TRANSNISTRIA)",
                        "PUERTO RICO",
                        "QATAR",
                        "QUEEN MAUD LAND",
                        "REUNION",
                        "ROMANIA",
                        "ROSS DEPENDENCY",
                        "RUSSIAN FEDERATION",
                        "RWANDA",
                        "SAINT BARTHELEMY",
                        "SAINT HELENA",
                        "SAINT KITTS AND NEVIS",
                        "SAINT LUCIA",
                        "SAINT MARTIN (FRANCE)",
                        "SAINT MARTIN (NETHERLANDS)",
                        "SAINT PIERRE AND MIQUELON",
                        "SAINT VINCENT AND GRENADINES",
                        "SAMOA",
                        "SAN MARINO",
                        "SAO TOME AND PRINCIPE",
                        "SAUDI ARABIA",
                        "SENEGAL",
                        "SERBIA",
                        "SEYCHELLES",
                        "SIERRA LEONE",
                        "SLOVAKIA",
                        "SLOVENIA",
                        "SOLOMON ISLANDS",
                        "SOMALIA",
                        "SOMALILAND",
                        "SOUTH AFRICA",
                        "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
                        "SOUTH KOREA",
                        "SOUTH OSSETIA",
                        "SOUTH SUDAN",
                        "SPAIN",
                        "SRI LANKA",
                        "SUDAN",
                        "SURINAME",
                        "SVALBARD AND JAN MAYEN ISLANDS",
                        "SWAZILAND",
                        "SWEDEN",
                        "SWITZERLAND",
                        "SYRIA",
                        "TAIWAN",
                        "TAJIKISTAN",
                        "TANZANIA",
                        "THAILAND",
                        "TIMOR-LESTE",
                        "TOGO",
                        "TOKELAU",
                        "TONGA",
                        "TRINIDAD AND TOBAGO",
                        "TRISTAN DA CUNHA",
                        "TUNISIA",
                        "TURKEY",
                        "TURKMENISTAN",
                        "TURKS AND CAICOS ISLANDS",
                        "TUVALU",
                        "UGANDA",
                        "UKRAINE",
                        "UNITED ARAB EMIRATES",
                        "UNITED STATES MINOR OUTLYING ISLANDS",
                        "UNITED STATES VIRGIN ISLANDS",
                        "URUGUAY",
                        "UZBEKISTAN",
                        "VANUATU",
                        "VATICAN",
                        "VENEZUELA",
                        "VIETNAM",
                        "WAKE ISLAND",
                        "WALLIS AND FUTUNA ISLANDS",
                        "WESTERN SAHARA",
                        "YEMEN",
                        "ZAMBIA",
                        "ZIMBABWE",
                        "NETHERLANDS ANTILLES",
                        "UNKNOWN"
                    ]
                },
                "title": {
                    "title": "Title",
                    "description": "This is not an Important field",
                    "type": "string",
                    "maxLength": 255
                },
                "countryOfBirth": {
                    "title": "Country of birth",
                    "description": "This is an Important field. Please check codebase for more verbose info on this",
                    "type": "string",
                    "enum": [
                        "SINGAPORE",
                        "MALAYSIA",
                        "INDONESIA",
                        "UNITED KINGDOM",
                        "UNITED STATES OF AMERICA",
                        "HONG KONG",
                        "ABKHAZIA",
                        "AFGHANISTAN",
                        "ALAND ISLANDS",
                        "ALBANIA",
                        "ALGERIA",
                        "AMERICAN SAMOA",
                        "ANDORRA",
                        "ANGOLA",
                        "ANGUILLA",
                        "ANTARCTICA",
                        "ANTIGUA AND BARBUDA",
                        "ARGENTINA",
                        "ARMENIA",
                        "ARUBA",
                        "ASCENSION",
                        "ASHMORE AND CARTIER ISLANDS",
                        "AUSTRALIA",
                        "AUSTRALIAN ANTARCTIC TERRITORY",
                        "AUSTRIA",
                        "AZERBAIJAN",
                        "BAHAMAS",
                        "BAHRAIN",
                        "BAKER ISLAND",
                        "BANGLADESH",
                        "BARBADOS",
                        "BELARUS",
                        "BELGIUM",
                        "BELIZE",
                        "BENIN",
                        "BERMUDA",
                        "BHUTAN",
                        "BOLIVIA",
                        "BOSNIA AND HERZEGOVINA",
                        "BOTSWANA",
                        "BOUVET ISLAND",
                        "BRAZIL",
                        "BRITISH ANTARCTIC TERRITORY",
                        "BRITISH INDIAN OCEAN TERRITORY",
                        "BRITISH SOVEREIGN BASE AREAS",
                        "BRITISH VIRGIN ISLANDS",
                        "BRUNEI",
                        "BULGARIA",
                        "BURKINA FASO",
                        "BURMA (REPUBLIC OF THE UNION OF MYANMAR)",
                        "BURUNDI",
                        "CAMBODIA",
                        "CAMEROON",
                        "CANADA",
                        "CAPE VERDE",
                        "CARIBBEAN NETHERLANDS",
                        "CAYMAN ISLANDS",
                        "CENTRAL AFRICAN REPUBLIC",
                        "CHAD",
                        "CHILE",
                        "CHINA",
                        "CHRISTMAS ISLAND",
                        "CLIPPERTON ISLAND",
                        "COCOS (KEELING) ISLANDS",
                        "COLOMBIA",
                        "COMOROS",
                        "CONGO (REPUBLIC OF)",
                        "COOK ISLANDS",
                        "CORAL SEA ISLANDS",
                        "COSTA RICA",
                        "COTE D'IVOIRE (IVORY COAST)",
                        "CROATIA",
                        "CUBA",
                        "CURACAO",
                        "CYPRUS",
                        "CZECH REPUBLIC",
                        "DEMOCRATIC REPUBLIC OF THE CONGO",
                        "DENMARK",
                        "DJIBOUTI",
                        "DOMINICA",
                        "DOMINICAN REPUBLIC",
                        "ECUADOR",
                        "EGYPT",
                        "EL SALVADOR",
                        "EQUATORIAL GUINEA",
                        "ERITREA",
                        "ESTONIA",
                        "ETHIOPIA",
                        "FALKLAND ISLANDS",
                        "FAROE ISLANDS",
                        "FIJI",
                        "FINLAND",
                        "FRANCE",
                        "FRENCH GUIANA",
                        "FRENCH POLYNESIA",
                        "FRENCH SOUTHERN AND ANTARCTIC LANDS",
                        "FRENCH SOUTHERN TERRITORIES",
                        "GABON",
                        "GAMBIA",
                        "GEORGIA",
                        "GERMANY",
                        "GHANA",
                        "GIBRALTAR",
                        "GREECE",
                        "GREENLAND",
                        "GRENADA",
                        "GUADELOUPE",
                        "GUAM",
                        "GUATEMALA",
                        "GUERNSEY",
                        "GUINEA",
                        "GUINEA-BISSAU",
                        "GUYANA",
                        "HAITI",
                        "HEARD AND MCDONALD ISLANDS",
                        "HONDURAS",
                        "HOWLAND ISLAND",
                        "HUNGARY",
                        "ICELAND",
                        "INDIA",
                        "IRAN",
                        "IRAQ",
                        "IRELAND",
                        "ISLE OF MAN",
                        "ISRAEL",
                        "ITALY",
                        "JAMAICA",
                        "JAPAN",
                        "JARVIS ISLAND",
                        "JERSEY",
                        "JOHNSTON ATOLL",
                        "JORDAN",
                        "KAZAKHSTAN",
                        "KENYA",
                        "KINGMAN REEF",
                        "KIRIBATI",
                        "KOSOVO",
                        "KUWAIT",
                        "KYRGYZSTAN",
                        "LAOS",
                        "LATVIA",
                        "LEBANON",
                        "LESOTHO",
                        "LIBERIA",
                        "LIBYA",
                        "LIECHTENSTEIN",
                        "LITHUANIA",
                        "LUXEMBOURG",
                        "MACAU",
                        "MACEDONIA",
                        "MADAGASCAR",
                        "MALAWI",
                        "MALDIVES",
                        "MALI",
                        "MALTA",
                        "MARSHALL ISLANDS",
                        "MARTINIQUE",
                        "MAURITANIA",
                        "MAURITIUS",
                        "MAYOTTE",
                        "MEXICO",
                        "MICRONESIA",
                        "MIDWAY ISLANDS",
                        "MOLDOVA",
                        "MONACO",
                        "MONGOLIA",
                        "MONTENEGRO",
                        "MONTSERRAT",
                        "MOROCCO",
                        "MOZAMBIQUE",
                        "NAGORNO-KARABAKH",
                        "NAMIBIA",
                        "NAURU",
                        "NAVASSA ISLAND",
                        "NEPAL",
                        "NETHERLANDS",
                        "NEW CALEDONIA",
                        "NEW ZEALAND",
                        "NICARAGUA",
                        "NIGER",
                        "NIGERIA",
                        "NIUE",
                        "NORFOLK ISLAND",
                        "NORTH KOREA",
                        "NORTHERN CYPRUS",
                        "NORTHERN MARIANA ISLANDS",
                        "NORWAY",
                        "OMAN",
                        "PAKISTAN",
                        "PALAU",
                        "PALESTINE",
                        "PALMYRA ATOLL",
                        "PANAMA",
                        "PAPUA NEW GUINEA",
                        "PARAGUAY",
                        "PERU",
                        "PETER I ISLAND",
                        "PHILIPPINES",
                        "PITCAIRN",
                        "PITCAIRN ISLANDS",
                        "POLAND",
                        "PORTUGAL",
                        "PRIDNESTROVIE (TRANSNISTRIA)",
                        "PUERTO RICO",
                        "QATAR",
                        "QUEEN MAUD LAND",
                        "REUNION",
                        "ROMANIA",
                        "ROSS DEPENDENCY",
                        "RUSSIAN FEDERATION",
                        "RWANDA",
                        "SAINT BARTHELEMY",
                        "SAINT HELENA",
                        "SAINT KITTS AND NEVIS",
                        "SAINT LUCIA",
                        "SAINT MARTIN (FRANCE)",
                        "SAINT MARTIN (NETHERLANDS)",
                        "SAINT PIERRE AND MIQUELON",
                        "SAINT VINCENT AND GRENADINES",
                        "SAMOA",
                        "SAN MARINO",
                        "SAO TOME AND PRINCIPE",
                        "SAUDI ARABIA",
                        "SENEGAL",
                        "SERBIA",
                        "SEYCHELLES",
                        "SIERRA LEONE",
                        "SLOVAKIA",
                        "SLOVENIA",
                        "SOLOMON ISLANDS",
                        "SOMALIA",
                        "SOMALILAND",
                        "SOUTH AFRICA",
                        "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
                        "SOUTH KOREA",
                        "SOUTH OSSETIA",
                        "SOUTH SUDAN",
                        "SPAIN",
                        "SRI LANKA",
                        "SUDAN",
                        "SURINAME",
                        "SVALBARD AND JAN MAYEN ISLANDS",
                        "SWAZILAND",
                        "SWEDEN",
                        "SWITZERLAND",
                        "SYRIA",
                        "TAIWAN",
                        "TAJIKISTAN",
                        "TANZANIA",
                        "THAILAND",
                        "TIMOR-LESTE",
                        "TOGO",
                        "TOKELAU",
                        "TONGA",
                        "TRINIDAD AND TOBAGO",
                        "TRISTAN DA CUNHA",
                        "TUNISIA",
                        "TURKEY",
                        "TURKMENISTAN",
                        "TURKS AND CAICOS ISLANDS",
                        "TUVALU",
                        "UGANDA",
                        "UKRAINE",
                        "UNITED ARAB EMIRATES",
                        "UNITED STATES MINOR OUTLYING ISLANDS",
                        "UNITED STATES VIRGIN ISLANDS",
                        "URUGUAY",
                        "UZBEKISTAN",
                        "VANUATU",
                        "VATICAN",
                        "VENEZUELA",
                        "VIETNAM",
                        "WAKE ISLAND",
                        "WALLIS AND FUTUNA ISLANDS",
                        "WESTERN SAHARA",
                        "YEMEN",
                        "ZAMBIA",
                        "ZIMBABWE",
                        "NETHERLANDS ANTILLES",
                        "UNKNOWN"
                    ]
                },
                "dateOfBirth": {
                    "title": "Date of birth",
                    "description": "This is not an Important field",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "industry": {
                    "title": "Industry",
                    "description": "This is an Important field",
                    "type": "string",
                    "maxLength": 1024,
                    "example": "ACCOUNTING/AUDIT/CONSULTING"
                },
                "occupation": {
                    "title": "Occupation",
                    "description": "This is an Important field",
                    "type": "string",
                    "maxLength": 1024,
                    "example": "ACCOUNTANT"
                },
                "idType": {
                    "title": "Id type",
                    "description": "This is not an Important field",
                    "type": "string",
                    "maxLength": 255
                },
                "idNumber": {
                    "title": "Id number",
                    "description": "This is not an Important field",
                    "type": "string",
                    "maxLength": 255
                },
                "idIssueDate": {
                    "title": "Id issue date",
                    "description": "This is not an Important field",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "idExpiryDate": {
                    "title": "Id expiry date",
                    "description": "This is not an Important field",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "dialog": {
                    "title": "Dialog",
                    "type": "integer",
                    "readOnly": true
                },
                "fileBucket": {
                    "title": "File bucket",
                    "type": "integer",
                    "readOnly": true
                }
            }
        },
        "CustomerCorporateRecordSerializer": {
            "title": "Corporate record",
            "required": [
                "name",
                "entityType",
                "countryOfOperations",
                "countryOfIncorporation",
                "ownershipStructureLayers"
            ],
            "type": "object",
            "properties": {
                "handshakesReports": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/HandshakesReport"
                    },
                    "readOnly": true
                },
                "primary": {
                    "title": "Primary",
                    "type": "boolean"
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "name": {
                    "title": "Name",
                    "description": "This is the name of the entity/individual",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1
                },
                "recordType": {
                    "title": "Record type",
                    "description": "CharField for name, max_length=32",
                    "type": "string",
                    "enum": [
                        "INDIVIDUAL",
                        "CORPORATE"
                    ],
                    "readOnly": true
                },
                "referenceId": {
                    "title": "Reference id",
                    "description": "This is the reference id in the client's system",
                    "type": "string",
                    "maxLength": 255,
                    "example:": ""
                },
                "aliasNames": {
                    "description": "Array representing different names for this record",
                    "type": "array",
                    "items": {
                        "title": "Alias names",
                        "type": "string",
                        "maxLength": 255,
                        "minLength": 1
                    }
                },
                "phoneNumbers": {
                    "description": "Array representing phone numbers",
                    "type": "array",
                    "items": {
                        "title": "Phone numbers",
                        "type": "string",
                        "maxLength": 32,
                        "minLength": 1
                    }
                },
                "addresses": {
                    "description": "Array representing addresses",
                    "type": "array",
                    "items": {
                        "title": "Addresses",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "oldNames": {
                    "description": "Array representing old names",
                    "type": "array",
                    "items": {
                        "title": "Old names",
                        "type": "string",
                        "maxLength": 255,
                        "minLength": 1
                    },
                    "readOnly": true
                },
                "sourceOfFunds": {
                    "title": "Source of funds",
                    "type": "string",
                    "maxLength": 255
                },
                "emailAddresses": {
                    "description": "Array for email addresses",
                    "type": "array",
                    "items": {
                        "title": "Email addresses",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "bankAccounts": {
                    "description": "Array of Bank accounts",
                    "type": "array",
                    "items": {
                        "title": "Bank accounts",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "isIncorporated": {
                    "title": "Is incorporated",
                    "description": "A required boolean representing whether this entity is incorporated",
                    "type": "boolean"
                },
                "entityType": {
                    "title": "Entity type",
                    "description": "A selection from a list of entity_types",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1
                },
                "countryOfOperations": {
                    "title": "Country of operations",
                    "description": "A required field representing country of operations",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1,
                    "example": "SINGAPORE"
                },
                "countryOfIncorporation": {
                    "title": "Country of incorporation",
                    "description": "A required field representing country of incorporation",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1,
                    "example": "SINGAPORE"
                },
                "ownershipStructureLayers": {
                    "title": "Ownership structure layers",
                    "description": "A required field representing ownership_structure_layers",
                    "type": "string",
                    "maxLength": 64,
                    "minLength": 1,
                    "example": "2"
                },
                "businessActivity": {
                    "title": "Business activity",
                    "description": "A required field representing business_activity",
                    "type": "string",
                    "maxLength": 1024,
                    "example": "ACCOUNTING/AUDIT/CONSULTING"
                },
                "website": {
                    "title": "Website",
                    "description": "Optional",
                    "type": "string",
                    "maxLength": 1024
                },
                "incorporationNumber": {
                    "title": "Incorporation number",
                    "description": "Optional",
                    "type": "string",
                    "maxLength": 255
                },
                "incorporationDate": {
                    "title": "Incorporation date",
                    "description": "Optional",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "incorporationExpiryDate": {
                    "title": "Incorporation expiry date",
                    "description": "Optional",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "inFatfJurisdiction": {
                    "title": "In fatf jurisdiction",
                    "description": "Optional",
                    "type": "boolean"
                },
                "dialog": {
                    "title": "Dialog",
                    "type": "integer",
                    "readOnly": true
                },
                "fileBucket": {
                    "title": "File bucket",
                    "type": "integer",
                    "readOnly": true
                }
            }
        },
        "CRP": {
            "required": [
                "customer"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "readOnly": true,
                    "minLength": 1
                },
                "recordType": {
                    "title": "Record type",
                    "type": "string",
                    "readOnly": true,
                    "minLength": 1
                },
                "roles": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/CRPRole"
                    }
                },
                "latestScreeningConclusion": {
                    "$ref": "#/definitions/ScreeningConclusion"
                },
                "status": {
                    "title": "Status",
                    "type": "string",
                    "enum": [
                        "CURRENT",
                        "RESIGNED"
                    ]
                },
                "individualRecord": {
                    "$ref": "#/definitions/CustomerIndividualRecordSerializer"
                },
                "corporateRecord": {
                    "$ref": "#/definitions/CustomerCorporateRecordSerializer"
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "primary": {
                    "title": "Primary",
                    "type": "boolean"
                },
                "customer": {
                    "title": "Customer",
                    "type": "integer"
                },
                "primaryCrpOf": {
                    "title": "Primary crp of",
                    "type": "integer",
                    "x-nullable": true,
                    "example": null
                },
                "record": {
                    "title": "Record",
                    "type": "integer",
                    "x-nullable": true
                },
                "fileBucket": {
                    "title": "File bucket",
                    "type": "integer",
                    "readOnly": true
                },
                "dialog": {
                    "title": "Dialog",
                    "type": "integer",
                    "readOnly": true
                }
            }
        },
        "FaceCompare": {
            "required": [
                "docId",
                "selfieId"
            ],
            "type": "object",
            "properties": {
                "docId": {
                    "title": "Doc id",
                    "type": "integer"
                },
                "selfieId": {
                    "title": "Selfie id",
                    "type": "integer"
                }
            }
        },
        "OcrDocument": {
            "required": [
                "docId"
            ],
            "type": "object",
            "properties": {
                "docId": {
                    "title": "Doc id",
                    "type": "integer"
                }
            }
        },
        "Post": {
            "required": [
                "content",
                "dialog"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "content": {
                    "title": "Content",
                    "type": "string",
                    "minLength": 1
                },
                "dialog": {
                    "title": "Dialog",
                    "type": "integer"
                },
                "parent": {
                    "title": "Parent",
                    "type": "integer",
                    "x-nullable": true
                }
            }
        },
        "ClientScreeningConclusion": {
            "required": [
                "crp"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "pep": {
                    "title": "Pep",
                    "type": "boolean"
                },
                "sanction": {
                    "title": "Sanction",
                    "type": "boolean"
                },
                "adverseNews": {
                    "title": "Adverse news",
                    "type": "boolean"
                },
                "noHit": {
                    "title": "No hit",
                    "type": "boolean"
                },
                "isSystemGenerated": {
                    "title": "Is system generated",
                    "type": "boolean"
                },
                "crp": {
                    "title": "Crp",
                    "type": "integer"
                }
            }
        },
        "VerificationConclusion": {
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "verificationType": {
                    "title": "Verification type",
                    "type": "string",
                    "enum": [
                        "FACE",
                        "OCR"
                    ]
                },
                "verificationResult": {
                    "title": "Verification result",
                    "type": "string",
                    "enum": [
                        "MATCH",
                        "MISMATCH",
                        "UNCERTAIN"
                    ]
                },
                "crp": {
                    "title": "Crp",
                    "type": "integer",
                    "x-nullable": true
                }
            }
        },
        "Customer": {
            "required": [
                "onboardingMode",
                "productServiceComplexity",
                "domains"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "name": {
                    "title": "Name",
                    "type": "string",
                    "readOnly": true,
                    "minLength": 1
                },
                "riskRating": {
                    "title": "Risk rating",
                    "type": "string",
                    "readOnly": true,
                    "minLength": 1
                },
                "status": {
                    "title": "Status",
                    "type": "string",
                    "readOnly": true,
                    "minLength": 1
                },
                "customerType": {
                    "title": "Customer type",
                    "type": "string",
                    "readOnly": true,
                    "minLength": 1
                },
                "individualRecords": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/CustomerIndividualRecordSerializer"
                    }
                },
                "corporateRecords": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/CustomerCorporateRecordSerializer"
                    }
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "onboardingMode": {
                    "title": "Onboarding mode",
                    "type": "string",
                    "enum": [
                        "FACE-TO-FACE",
                        "NON FACE-TO-FACE",
                        "UNKNOWN"
                    ]
                },
                "productServiceComplexity": {
                    "title": "Product service complexity",
                    "type": "string",
                    "enum": [
                        "SIMPLE",
                        "COMPLEX",
                        "HIGH RISK",
                        "UNUSUAL",
                        "UNKNOWN"
                    ]
                },
                "paymentModes": {
                    "type": "array",
                    "items": {
                        "title": "Payment modes",
                        "type": "string",
                        "enum": [
                            "TELEGRAPHIC TRANSFER",
                            "CHEQUE (LOCAL)",
                            "CHEQUE (FOREIGN)",
                            "CREDIT CARD",
                            "VIRTUAL CURRENCY",
                            "CASH",
                            "DIRECT DEBIT / CREDIT",
                            "UNKNOWN",
                            "NOT APPLICABLE"
                        ]
                    }
                },
                "profileType": {
                    "title": "Profile type",
                    "type": "string",
                    "maxLength": 255
                },
                "isActiveCustomer": {
                    "title": "Is active customer",
                    "type": "boolean"
                },
                "natureOfBusinessRelationship": {
                    "title": "Nature of business relationship",
                    "type": "string"
                },
                "referenceId": {
                    "title": "Reference id",
                    "description": "This is the reference id in the client's system",
                    "type": "string",
                    "maxLength": 255,
                    "example:": ""
                },
                "domains": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "uniqueItems": true,
                    "example": [1]
                },
                "users": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    },
                    "uniqueItems": true,
                    "example": []
                }
            }
        },
        "ApprovalStatus": {
            "title": "Latest approval status",
            "required": [
                "approvalStatus",
                "riskReport"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "overrideRisk": {
                    "title": "Override risk",
                    "type": "string",
                    "enum": [
                        "LOW",
                        "MEDIUM",
                        "HIGH",
                        "UNKNOWN"
                    ]
                },
                "approvalStatus": {
                    "title": "Approval status",
                    "type": "string",
                    "enum": [
                        "PENDING",
                        "ACCEPTED",
                        "REJECTED",
                        "REQUEST CHANGES",
                        "CLEARED"
                    ]
                },
                "riskReport": {
                    "title": "Risk report",
                    "type": "integer"
                },
                "notifyPerson": {
                    "title": "Notify person",
                    "type": "string",
                    "x-nullable": true
                }
            }
        },
        "RiskReport": {
            "required": [
                "customer"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "riskJson": {
                    "title": "Risk json",
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    },
                    "readOnly": true
                },
                "isOutdated": {
                    "title": "Is outdated",
                    "type": "boolean",
                    "readOnly": true
                },
                "latestApprovalStatus": {
                    "$ref": "#/definitions/ApprovalStatus"
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "riskRating": {
                    "title": "Risk rating",
                    "type": "string",
                    "maxLength": 255
                },
                "outdated": {
                    "title": "Outdated",
                    "type": "boolean"
                },
                "customer": {
                    "title": "Customer",
                    "type": "integer"
                }
            }
        },
        "PersonSearchResultSerializer": {
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "searchResponse": {
                    "title": "Search response",
                    "type": "string",
                    "readOnly": true
                },
                "uniqueReferenceCode": {
                    "title": "Unique reference code",
                    "type": "string",
                    "readOnly": true,
                    "minLength": 1
                },
                "matched": {
                    "title": "Matched",
                    "type": "boolean"
                },
                "createdBy": {
                    "title": "Created by",
                    "type": "string",
                    "x-nullable": true
                },
                "updatedBy": {
                    "title": "Updated by",
                    "type": "string",
                    "x-nullable": true
                },
                "search": {
                    "title": "Search",
                    "type": "integer",
                    "readOnly": true
                },
                "dialog": {
                    "title": "Dialog",
                    "type": "integer",
                    "readOnly": true
                }
            }
        },
        "Search": {
            "required": [
                "engineType"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "searchResults": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/PersonSearchResultSerializer"
                    },
                    "readOnly": true
                },
                "searchText": {
                    "title": "Search text",
                    "type": "string",
                    "default": "",
                    "x-nullable": true
                },
                "recordType": {
                    "title": "Record type",
                    "type": "string",
                    "default": "",
                    "x-nullable": true
                },
                "baseUrl": {
                    "title": "Base url",
                    "type": "string",
                    "default": "",
                    "x-nullable": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "engineType": {
                    "title": "Engine type",
                    "type": "string",
                    "enum": [
                        "DJ",
                        "DJ2",
                        "ArtemiScan",
                        "TR"
                    ]
                },
                "engineVersion": {
                    "title": "Engine version",
                    "type": "string",
                    "maxLength": 32
                },
                "valid": {
                    "title": "Valid",
                    "type": "boolean"
                },
                "invalidReason": {
                    "title": "Invalid reason",
                    "type": "string",
                    "maxLength": 255
                },
                "isPeriodic": {
                    "title": "Is periodic",
                    "type": "boolean"
                },
                "isSearchFinished": {
                    "title": "Is search finished",
                    "type": "boolean"
                },
                "record": {
                    "title": "Record",
                    "type": "integer",
                    "x-nullable": true
                }
            }
        },
        "Document": {
            "type": "object",
            "properties": {
                "docTypeCategory": {
                    "title": "Doc type category",
                    "type": "string",
                    "maxLength": 255
                },
                "docType": {
                    "title": "Doc type",
                    "type": "string",
                    "maxLength": 255
                },
                "authenticity": {
                    "title": "Authenticity",
                    "type": "string",
                    "maxLength": 255
                },
                "issueDate": {
                    "title": "Issue date",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "expiryDate": {
                    "title": "Expiry date",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "document": {
                    "title": "Document",
                    "type": "string",
                    "readOnly": true,
                    "format": "uri"
                },
                "showExpiryAlerts": {
                    "title": "Show expiry alerts",
                    "type": "boolean"
                }
            }
        },
        "PersonIndividualRecordSerializer": {
            "required": [
                "name",
                "gender",
                "nationality",
                "countryOfResidence"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "name": {
                    "title": "Name",
                    "description": "This is the name of the entity/individual",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1
                },
                "recordType": {
                    "title": "Record type",
                    "description": "CharField for name, max_length=32",
                    "type": "string",
                    "enum": [
                        "INDIVIDUAL",
                        "CORPORATE"
                    ],
                    "readOnly": true
                },
                "referenceId": {
                    "title": "Reference id",
                    "description": "This is the reference id in the client's system",
                    "type": "string",
                    "maxLength": 255,
                    "example:": ""
                },
                "aliasNames": {
                    "description": "Array representing different names for this record",
                    "type": "array",
                    "items": {
                        "title": "Alias names",
                        "type": "string",
                        "maxLength": 255,
                        "minLength": 1
                    }
                },
                "phoneNumbers": {
                    "description": "Array representing phone numbers",
                    "type": "array",
                    "items": {
                        "title": "Phone numbers",
                        "type": "string",
                        "maxLength": 32,
                        "minLength": 1
                    }
                },
                "addresses": {
                    "description": "Array representing addresses",
                    "type": "array",
                    "items": {
                        "title": "Addresses",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "oldNames": {
                    "description": "Array representing old names",
                    "type": "array",
                    "items": {
                        "title": "Old names",
                        "type": "string",
                        "maxLength": 255,
                        "minLength": 1
                    },
                    "readOnly": true
                },
                "sourceOfFunds": {
                    "title": "Source of funds",
                    "type": "string",
                    "maxLength": 255
                },
                "emailAddresses": {
                    "description": "Array for email addresses",
                    "type": "array",
                    "items": {
                        "title": "Email addresses",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "bankAccounts": {
                    "description": "Array of Bank accounts",
                    "type": "array",
                    "items": {
                        "title": "Bank accounts",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "gender": {
                    "title": "Gender",
                    "description": "This is an Important field",
                    "type": "string",
                    "enum": [
                        "MALE",
                        "FEMALE",
                        "UNKNOWN"
                    ]
                },
                "nationality": {
                    "title": "Nationality",
                    "description": "This is an Important field",
                    "type": "string",
                    "enum": [
                        "SINGAPORE",
                        "MALAYSIA",
                        "INDONESIA",
                        "UNITED KINGDOM",
                        "UNITED STATES OF AMERICA",
                        "HONG KONG",
                        "ABKHAZIA",
                        "AFGHANISTAN",
                        "ALAND ISLANDS",
                        "ALBANIA",
                        "ALGERIA",
                        "AMERICAN SAMOA",
                        "ANDORRA",
                        "ANGOLA",
                        "ANGUILLA",
                        "ANTARCTICA",
                        "ANTIGUA AND BARBUDA",
                        "ARGENTINA",
                        "ARMENIA",
                        "ARUBA",
                        "ASCENSION",
                        "ASHMORE AND CARTIER ISLANDS",
                        "AUSTRALIA",
                        "AUSTRALIAN ANTARCTIC TERRITORY",
                        "AUSTRIA",
                        "AZERBAIJAN",
                        "BAHAMAS",
                        "BAHRAIN",
                        "BAKER ISLAND",
                        "BANGLADESH",
                        "BARBADOS",
                        "BELARUS",
                        "BELGIUM",
                        "BELIZE",
                        "BENIN",
                        "BERMUDA",
                        "BHUTAN",
                        "BOLIVIA",
                        "BOSNIA AND HERZEGOVINA",
                        "BOTSWANA",
                        "BOUVET ISLAND",
                        "BRAZIL",
                        "BRITISH ANTARCTIC TERRITORY",
                        "BRITISH INDIAN OCEAN TERRITORY",
                        "BRITISH SOVEREIGN BASE AREAS",
                        "BRITISH VIRGIN ISLANDS",
                        "BRUNEI",
                        "BULGARIA",
                        "BURKINA FASO",
                        "BURMA (REPUBLIC OF THE UNION OF MYANMAR)",
                        "BURUNDI",
                        "CAMBODIA",
                        "CAMEROON",
                        "CANADA",
                        "CAPE VERDE",
                        "CARIBBEAN NETHERLANDS",
                        "CAYMAN ISLANDS",
                        "CENTRAL AFRICAN REPUBLIC",
                        "CHAD",
                        "CHILE",
                        "CHINA",
                        "CHRISTMAS ISLAND",
                        "CLIPPERTON ISLAND",
                        "COCOS (KEELING) ISLANDS",
                        "COLOMBIA",
                        "COMOROS",
                        "CONGO (REPUBLIC OF)",
                        "COOK ISLANDS",
                        "CORAL SEA ISLANDS",
                        "COSTA RICA",
                        "COTE D'IVOIRE (IVORY COAST)",
                        "CROATIA",
                        "CUBA",
                        "CURACAO",
                        "CYPRUS",
                        "CZECH REPUBLIC",
                        "DEMOCRATIC REPUBLIC OF THE CONGO",
                        "DENMARK",
                        "DJIBOUTI",
                        "DOMINICA",
                        "DOMINICAN REPUBLIC",
                        "ECUADOR",
                        "EGYPT",
                        "EL SALVADOR",
                        "EQUATORIAL GUINEA",
                        "ERITREA",
                        "ESTONIA",
                        "ETHIOPIA",
                        "FALKLAND ISLANDS",
                        "FAROE ISLANDS",
                        "FIJI",
                        "FINLAND",
                        "FRANCE",
                        "FRENCH GUIANA",
                        "FRENCH POLYNESIA",
                        "FRENCH SOUTHERN AND ANTARCTIC LANDS",
                        "FRENCH SOUTHERN TERRITORIES",
                        "GABON",
                        "GAMBIA",
                        "GEORGIA",
                        "GERMANY",
                        "GHANA",
                        "GIBRALTAR",
                        "GREECE",
                        "GREENLAND",
                        "GRENADA",
                        "GUADELOUPE",
                        "GUAM",
                        "GUATEMALA",
                        "GUERNSEY",
                        "GUINEA",
                        "GUINEA-BISSAU",
                        "GUYANA",
                        "HAITI",
                        "HEARD AND MCDONALD ISLANDS",
                        "HONDURAS",
                        "HOWLAND ISLAND",
                        "HUNGARY",
                        "ICELAND",
                        "INDIA",
                        "IRAN",
                        "IRAQ",
                        "IRELAND",
                        "ISLE OF MAN",
                        "ISRAEL",
                        "ITALY",
                        "JAMAICA",
                        "JAPAN",
                        "JARVIS ISLAND",
                        "JERSEY",
                        "JOHNSTON ATOLL",
                        "JORDAN",
                        "KAZAKHSTAN",
                        "KENYA",
                        "KINGMAN REEF",
                        "KIRIBATI",
                        "KOSOVO",
                        "KUWAIT",
                        "KYRGYZSTAN",
                        "LAOS",
                        "LATVIA",
                        "LEBANON",
                        "LESOTHO",
                        "LIBERIA",
                        "LIBYA",
                        "LIECHTENSTEIN",
                        "LITHUANIA",
                        "LUXEMBOURG",
                        "MACAU",
                        "MACEDONIA",
                        "MADAGASCAR",
                        "MALAWI",
                        "MALDIVES",
                        "MALI",
                        "MALTA",
                        "MARSHALL ISLANDS",
                        "MARTINIQUE",
                        "MAURITANIA",
                        "MAURITIUS",
                        "MAYOTTE",
                        "MEXICO",
                        "MICRONESIA",
                        "MIDWAY ISLANDS",
                        "MOLDOVA",
                        "MONACO",
                        "MONGOLIA",
                        "MONTENEGRO",
                        "MONTSERRAT",
                        "MOROCCO",
                        "MOZAMBIQUE",
                        "NAGORNO-KARABAKH",
                        "NAMIBIA",
                        "NAURU",
                        "NAVASSA ISLAND",
                        "NEPAL",
                        "NETHERLANDS",
                        "NEW CALEDONIA",
                        "NEW ZEALAND",
                        "NICARAGUA",
                        "NIGER",
                        "NIGERIA",
                        "NIUE",
                        "NORFOLK ISLAND",
                        "NORTH KOREA",
                        "NORTHERN CYPRUS",
                        "NORTHERN MARIANA ISLANDS",
                        "NORWAY",
                        "OMAN",
                        "PAKISTAN",
                        "PALAU",
                        "PALESTINE",
                        "PALMYRA ATOLL",
                        "PANAMA",
                        "PAPUA NEW GUINEA",
                        "PARAGUAY",
                        "PERU",
                        "PETER I ISLAND",
                        "PHILIPPINES",
                        "PITCAIRN",
                        "PITCAIRN ISLANDS",
                        "POLAND",
                        "PORTUGAL",
                        "PRIDNESTROVIE (TRANSNISTRIA)",
                        "PUERTO RICO",
                        "QATAR",
                        "QUEEN MAUD LAND",
                        "REUNION",
                        "ROMANIA",
                        "ROSS DEPENDENCY",
                        "RUSSIAN FEDERATION",
                        "RWANDA",
                        "SAINT BARTHELEMY",
                        "SAINT HELENA",
                        "SAINT KITTS AND NEVIS",
                        "SAINT LUCIA",
                        "SAINT MARTIN (FRANCE)",
                        "SAINT MARTIN (NETHERLANDS)",
                        "SAINT PIERRE AND MIQUELON",
                        "SAINT VINCENT AND GRENADINES",
                        "SAMOA",
                        "SAN MARINO",
                        "SAO TOME AND PRINCIPE",
                        "SAUDI ARABIA",
                        "SENEGAL",
                        "SERBIA",
                        "SEYCHELLES",
                        "SIERRA LEONE",
                        "SLOVAKIA",
                        "SLOVENIA",
                        "SOLOMON ISLANDS",
                        "SOMALIA",
                        "SOMALILAND",
                        "SOUTH AFRICA",
                        "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
                        "SOUTH KOREA",
                        "SOUTH OSSETIA",
                        "SOUTH SUDAN",
                        "SPAIN",
                        "SRI LANKA",
                        "SUDAN",
                        "SURINAME",
                        "SVALBARD AND JAN MAYEN ISLANDS",
                        "SWAZILAND",
                        "SWEDEN",
                        "SWITZERLAND",
                        "SYRIA",
                        "TAIWAN",
                        "TAJIKISTAN",
                        "TANZANIA",
                        "THAILAND",
                        "TIMOR-LESTE",
                        "TOGO",
                        "TOKELAU",
                        "TONGA",
                        "TRINIDAD AND TOBAGO",
                        "TRISTAN DA CUNHA",
                        "TUNISIA",
                        "TURKEY",
                        "TURKMENISTAN",
                        "TURKS AND CAICOS ISLANDS",
                        "TUVALU",
                        "UGANDA",
                        "UKRAINE",
                        "UNITED ARAB EMIRATES",
                        "UNITED STATES MINOR OUTLYING ISLANDS",
                        "UNITED STATES VIRGIN ISLANDS",
                        "URUGUAY",
                        "UZBEKISTAN",
                        "VANUATU",
                        "VATICAN",
                        "VENEZUELA",
                        "VIETNAM",
                        "WAKE ISLAND",
                        "WALLIS AND FUTUNA ISLANDS",
                        "WESTERN SAHARA",
                        "YEMEN",
                        "ZAMBIA",
                        "ZIMBABWE",
                        "NETHERLANDS ANTILLES",
                        "UNKNOWN"
                    ]
                },
                "countryOfResidence": {
                    "title": "Country of residence",
                    "description": "This is an Important field",
                    "type": "string",
                    "enum": [
                        "SINGAPORE",
                        "MALAYSIA",
                        "INDONESIA",
                        "UNITED KINGDOM",
                        "UNITED STATES OF AMERICA",
                        "HONG KONG",
                        "ABKHAZIA",
                        "AFGHANISTAN",
                        "ALAND ISLANDS",
                        "ALBANIA",
                        "ALGERIA",
                        "AMERICAN SAMOA",
                        "ANDORRA",
                        "ANGOLA",
                        "ANGUILLA",
                        "ANTARCTICA",
                        "ANTIGUA AND BARBUDA",
                        "ARGENTINA",
                        "ARMENIA",
                        "ARUBA",
                        "ASCENSION",
                        "ASHMORE AND CARTIER ISLANDS",
                        "AUSTRALIA",
                        "AUSTRALIAN ANTARCTIC TERRITORY",
                        "AUSTRIA",
                        "AZERBAIJAN",
                        "BAHAMAS",
                        "BAHRAIN",
                        "BAKER ISLAND",
                        "BANGLADESH",
                        "BARBADOS",
                        "BELARUS",
                        "BELGIUM",
                        "BELIZE",
                        "BENIN",
                        "BERMUDA",
                        "BHUTAN",
                        "BOLIVIA",
                        "BOSNIA AND HERZEGOVINA",
                        "BOTSWANA",
                        "BOUVET ISLAND",
                        "BRAZIL",
                        "BRITISH ANTARCTIC TERRITORY",
                        "BRITISH INDIAN OCEAN TERRITORY",
                        "BRITISH SOVEREIGN BASE AREAS",
                        "BRITISH VIRGIN ISLANDS",
                        "BRUNEI",
                        "BULGARIA",
                        "BURKINA FASO",
                        "BURMA (REPUBLIC OF THE UNION OF MYANMAR)",
                        "BURUNDI",
                        "CAMBODIA",
                        "CAMEROON",
                        "CANADA",
                        "CAPE VERDE",
                        "CARIBBEAN NETHERLANDS",
                        "CAYMAN ISLANDS",
                        "CENTRAL AFRICAN REPUBLIC",
                        "CHAD",
                        "CHILE",
                        "CHINA",
                        "CHRISTMAS ISLAND",
                        "CLIPPERTON ISLAND",
                        "COCOS (KEELING) ISLANDS",
                        "COLOMBIA",
                        "COMOROS",
                        "CONGO (REPUBLIC OF)",
                        "COOK ISLANDS",
                        "CORAL SEA ISLANDS",
                        "COSTA RICA",
                        "COTE D'IVOIRE (IVORY COAST)",
                        "CROATIA",
                        "CUBA",
                        "CURACAO",
                        "CYPRUS",
                        "CZECH REPUBLIC",
                        "DEMOCRATIC REPUBLIC OF THE CONGO",
                        "DENMARK",
                        "DJIBOUTI",
                        "DOMINICA",
                        "DOMINICAN REPUBLIC",
                        "ECUADOR",
                        "EGYPT",
                        "EL SALVADOR",
                        "EQUATORIAL GUINEA",
                        "ERITREA",
                        "ESTONIA",
                        "ETHIOPIA",
                        "FALKLAND ISLANDS",
                        "FAROE ISLANDS",
                        "FIJI",
                        "FINLAND",
                        "FRANCE",
                        "FRENCH GUIANA",
                        "FRENCH POLYNESIA",
                        "FRENCH SOUTHERN AND ANTARCTIC LANDS",
                        "FRENCH SOUTHERN TERRITORIES",
                        "GABON",
                        "GAMBIA",
                        "GEORGIA",
                        "GERMANY",
                        "GHANA",
                        "GIBRALTAR",
                        "GREECE",
                        "GREENLAND",
                        "GRENADA",
                        "GUADELOUPE",
                        "GUAM",
                        "GUATEMALA",
                        "GUERNSEY",
                        "GUINEA",
                        "GUINEA-BISSAU",
                        "GUYANA",
                        "HAITI",
                        "HEARD AND MCDONALD ISLANDS",
                        "HONDURAS",
                        "HOWLAND ISLAND",
                        "HUNGARY",
                        "ICELAND",
                        "INDIA",
                        "IRAN",
                        "IRAQ",
                        "IRELAND",
                        "ISLE OF MAN",
                        "ISRAEL",
                        "ITALY",
                        "JAMAICA",
                        "JAPAN",
                        "JARVIS ISLAND",
                        "JERSEY",
                        "JOHNSTON ATOLL",
                        "JORDAN",
                        "KAZAKHSTAN",
                        "KENYA",
                        "KINGMAN REEF",
                        "KIRIBATI",
                        "KOSOVO",
                        "KUWAIT",
                        "KYRGYZSTAN",
                        "LAOS",
                        "LATVIA",
                        "LEBANON",
                        "LESOTHO",
                        "LIBERIA",
                        "LIBYA",
                        "LIECHTENSTEIN",
                        "LITHUANIA",
                        "LUXEMBOURG",
                        "MACAU",
                        "MACEDONIA",
                        "MADAGASCAR",
                        "MALAWI",
                        "MALDIVES",
                        "MALI",
                        "MALTA",
                        "MARSHALL ISLANDS",
                        "MARTINIQUE",
                        "MAURITANIA",
                        "MAURITIUS",
                        "MAYOTTE",
                        "MEXICO",
                        "MICRONESIA",
                        "MIDWAY ISLANDS",
                        "MOLDOVA",
                        "MONACO",
                        "MONGOLIA",
                        "MONTENEGRO",
                        "MONTSERRAT",
                        "MOROCCO",
                        "MOZAMBIQUE",
                        "NAGORNO-KARABAKH",
                        "NAMIBIA",
                        "NAURU",
                        "NAVASSA ISLAND",
                        "NEPAL",
                        "NETHERLANDS",
                        "NEW CALEDONIA",
                        "NEW ZEALAND",
                        "NICARAGUA",
                        "NIGER",
                        "NIGERIA",
                        "NIUE",
                        "NORFOLK ISLAND",
                        "NORTH KOREA",
                        "NORTHERN CYPRUS",
                        "NORTHERN MARIANA ISLANDS",
                        "NORWAY",
                        "OMAN",
                        "PAKISTAN",
                        "PALAU",
                        "PALESTINE",
                        "PALMYRA ATOLL",
                        "PANAMA",
                        "PAPUA NEW GUINEA",
                        "PARAGUAY",
                        "PERU",
                        "PETER I ISLAND",
                        "PHILIPPINES",
                        "PITCAIRN",
                        "PITCAIRN ISLANDS",
                        "POLAND",
                        "PORTUGAL",
                        "PRIDNESTROVIE (TRANSNISTRIA)",
                        "PUERTO RICO",
                        "QATAR",
                        "QUEEN MAUD LAND",
                        "REUNION",
                        "ROMANIA",
                        "ROSS DEPENDENCY",
                        "RUSSIAN FEDERATION",
                        "RWANDA",
                        "SAINT BARTHELEMY",
                        "SAINT HELENA",
                        "SAINT KITTS AND NEVIS",
                        "SAINT LUCIA",
                        "SAINT MARTIN (FRANCE)",
                        "SAINT MARTIN (NETHERLANDS)",
                        "SAINT PIERRE AND MIQUELON",
                        "SAINT VINCENT AND GRENADINES",
                        "SAMOA",
                        "SAN MARINO",
                        "SAO TOME AND PRINCIPE",
                        "SAUDI ARABIA",
                        "SENEGAL",
                        "SERBIA",
                        "SEYCHELLES",
                        "SIERRA LEONE",
                        "SLOVAKIA",
                        "SLOVENIA",
                        "SOLOMON ISLANDS",
                        "SOMALIA",
                        "SOMALILAND",
                        "SOUTH AFRICA",
                        "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
                        "SOUTH KOREA",
                        "SOUTH OSSETIA",
                        "SOUTH SUDAN",
                        "SPAIN",
                        "SRI LANKA",
                        "SUDAN",
                        "SURINAME",
                        "SVALBARD AND JAN MAYEN ISLANDS",
                        "SWAZILAND",
                        "SWEDEN",
                        "SWITZERLAND",
                        "SYRIA",
                        "TAIWAN",
                        "TAJIKISTAN",
                        "TANZANIA",
                        "THAILAND",
                        "TIMOR-LESTE",
                        "TOGO",
                        "TOKELAU",
                        "TONGA",
                        "TRINIDAD AND TOBAGO",
                        "TRISTAN DA CUNHA",
                        "TUNISIA",
                        "TURKEY",
                        "TURKMENISTAN",
                        "TURKS AND CAICOS ISLANDS",
                        "TUVALU",
                        "UGANDA",
                        "UKRAINE",
                        "UNITED ARAB EMIRATES",
                        "UNITED STATES MINOR OUTLYING ISLANDS",
                        "UNITED STATES VIRGIN ISLANDS",
                        "URUGUAY",
                        "UZBEKISTAN",
                        "VANUATU",
                        "VATICAN",
                        "VENEZUELA",
                        "VIETNAM",
                        "WAKE ISLAND",
                        "WALLIS AND FUTUNA ISLANDS",
                        "WESTERN SAHARA",
                        "YEMEN",
                        "ZAMBIA",
                        "ZIMBABWE",
                        "NETHERLANDS ANTILLES",
                        "UNKNOWN"
                    ]
                },
                "title": {
                    "title": "Title",
                    "description": "This is not an Important field",
                    "type": "string",
                    "maxLength": 255
                },
                "countryOfBirth": {
                    "title": "Country of birth",
                    "description": "This is an Important field. Please check codebase for more verbose info on this",
                    "type": "string",
                    "enum": [
                        "SINGAPORE",
                        "MALAYSIA",
                        "INDONESIA",
                        "UNITED KINGDOM",
                        "UNITED STATES OF AMERICA",
                        "HONG KONG",
                        "ABKHAZIA",
                        "AFGHANISTAN",
                        "ALAND ISLANDS",
                        "ALBANIA",
                        "ALGERIA",
                        "AMERICAN SAMOA",
                        "ANDORRA",
                        "ANGOLA",
                        "ANGUILLA",
                        "ANTARCTICA",
                        "ANTIGUA AND BARBUDA",
                        "ARGENTINA",
                        "ARMENIA",
                        "ARUBA",
                        "ASCENSION",
                        "ASHMORE AND CARTIER ISLANDS",
                        "AUSTRALIA",
                        "AUSTRALIAN ANTARCTIC TERRITORY",
                        "AUSTRIA",
                        "AZERBAIJAN",
                        "BAHAMAS",
                        "BAHRAIN",
                        "BAKER ISLAND",
                        "BANGLADESH",
                        "BARBADOS",
                        "BELARUS",
                        "BELGIUM",
                        "BELIZE",
                        "BENIN",
                        "BERMUDA",
                        "BHUTAN",
                        "BOLIVIA",
                        "BOSNIA AND HERZEGOVINA",
                        "BOTSWANA",
                        "BOUVET ISLAND",
                        "BRAZIL",
                        "BRITISH ANTARCTIC TERRITORY",
                        "BRITISH INDIAN OCEAN TERRITORY",
                        "BRITISH SOVEREIGN BASE AREAS",
                        "BRITISH VIRGIN ISLANDS",
                        "BRUNEI",
                        "BULGARIA",
                        "BURKINA FASO",
                        "BURMA (REPUBLIC OF THE UNION OF MYANMAR)",
                        "BURUNDI",
                        "CAMBODIA",
                        "CAMEROON",
                        "CANADA",
                        "CAPE VERDE",
                        "CARIBBEAN NETHERLANDS",
                        "CAYMAN ISLANDS",
                        "CENTRAL AFRICAN REPUBLIC",
                        "CHAD",
                        "CHILE",
                        "CHINA",
                        "CHRISTMAS ISLAND",
                        "CLIPPERTON ISLAND",
                        "COCOS (KEELING) ISLANDS",
                        "COLOMBIA",
                        "COMOROS",
                        "CONGO (REPUBLIC OF)",
                        "COOK ISLANDS",
                        "CORAL SEA ISLANDS",
                        "COSTA RICA",
                        "COTE D'IVOIRE (IVORY COAST)",
                        "CROATIA",
                        "CUBA",
                        "CURACAO",
                        "CYPRUS",
                        "CZECH REPUBLIC",
                        "DEMOCRATIC REPUBLIC OF THE CONGO",
                        "DENMARK",
                        "DJIBOUTI",
                        "DOMINICA",
                        "DOMINICAN REPUBLIC",
                        "ECUADOR",
                        "EGYPT",
                        "EL SALVADOR",
                        "EQUATORIAL GUINEA",
                        "ERITREA",
                        "ESTONIA",
                        "ETHIOPIA",
                        "FALKLAND ISLANDS",
                        "FAROE ISLANDS",
                        "FIJI",
                        "FINLAND",
                        "FRANCE",
                        "FRENCH GUIANA",
                        "FRENCH POLYNESIA",
                        "FRENCH SOUTHERN AND ANTARCTIC LANDS",
                        "FRENCH SOUTHERN TERRITORIES",
                        "GABON",
                        "GAMBIA",
                        "GEORGIA",
                        "GERMANY",
                        "GHANA",
                        "GIBRALTAR",
                        "GREECE",
                        "GREENLAND",
                        "GRENADA",
                        "GUADELOUPE",
                        "GUAM",
                        "GUATEMALA",
                        "GUERNSEY",
                        "GUINEA",
                        "GUINEA-BISSAU",
                        "GUYANA",
                        "HAITI",
                        "HEARD AND MCDONALD ISLANDS",
                        "HONDURAS",
                        "HOWLAND ISLAND",
                        "HUNGARY",
                        "ICELAND",
                        "INDIA",
                        "IRAN",
                        "IRAQ",
                        "IRELAND",
                        "ISLE OF MAN",
                        "ISRAEL",
                        "ITALY",
                        "JAMAICA",
                        "JAPAN",
                        "JARVIS ISLAND",
                        "JERSEY",
                        "JOHNSTON ATOLL",
                        "JORDAN",
                        "KAZAKHSTAN",
                        "KENYA",
                        "KINGMAN REEF",
                        "KIRIBATI",
                        "KOSOVO",
                        "KUWAIT",
                        "KYRGYZSTAN",
                        "LAOS",
                        "LATVIA",
                        "LEBANON",
                        "LESOTHO",
                        "LIBERIA",
                        "LIBYA",
                        "LIECHTENSTEIN",
                        "LITHUANIA",
                        "LUXEMBOURG",
                        "MACAU",
                        "MACEDONIA",
                        "MADAGASCAR",
                        "MALAWI",
                        "MALDIVES",
                        "MALI",
                        "MALTA",
                        "MARSHALL ISLANDS",
                        "MARTINIQUE",
                        "MAURITANIA",
                        "MAURITIUS",
                        "MAYOTTE",
                        "MEXICO",
                        "MICRONESIA",
                        "MIDWAY ISLANDS",
                        "MOLDOVA",
                        "MONACO",
                        "MONGOLIA",
                        "MONTENEGRO",
                        "MONTSERRAT",
                        "MOROCCO",
                        "MOZAMBIQUE",
                        "NAGORNO-KARABAKH",
                        "NAMIBIA",
                        "NAURU",
                        "NAVASSA ISLAND",
                        "NEPAL",
                        "NETHERLANDS",
                        "NEW CALEDONIA",
                        "NEW ZEALAND",
                        "NICARAGUA",
                        "NIGER",
                        "NIGERIA",
                        "NIUE",
                        "NORFOLK ISLAND",
                        "NORTH KOREA",
                        "NORTHERN CYPRUS",
                        "NORTHERN MARIANA ISLANDS",
                        "NORWAY",
                        "OMAN",
                        "PAKISTAN",
                        "PALAU",
                        "PALESTINE",
                        "PALMYRA ATOLL",
                        "PANAMA",
                        "PAPUA NEW GUINEA",
                        "PARAGUAY",
                        "PERU",
                        "PETER I ISLAND",
                        "PHILIPPINES",
                        "PITCAIRN",
                        "PITCAIRN ISLANDS",
                        "POLAND",
                        "PORTUGAL",
                        "PRIDNESTROVIE (TRANSNISTRIA)",
                        "PUERTO RICO",
                        "QATAR",
                        "QUEEN MAUD LAND",
                        "REUNION",
                        "ROMANIA",
                        "ROSS DEPENDENCY",
                        "RUSSIAN FEDERATION",
                        "RWANDA",
                        "SAINT BARTHELEMY",
                        "SAINT HELENA",
                        "SAINT KITTS AND NEVIS",
                        "SAINT LUCIA",
                        "SAINT MARTIN (FRANCE)",
                        "SAINT MARTIN (NETHERLANDS)",
                        "SAINT PIERRE AND MIQUELON",
                        "SAINT VINCENT AND GRENADINES",
                        "SAMOA",
                        "SAN MARINO",
                        "SAO TOME AND PRINCIPE",
                        "SAUDI ARABIA",
                        "SENEGAL",
                        "SERBIA",
                        "SEYCHELLES",
                        "SIERRA LEONE",
                        "SLOVAKIA",
                        "SLOVENIA",
                        "SOLOMON ISLANDS",
                        "SOMALIA",
                        "SOMALILAND",
                        "SOUTH AFRICA",
                        "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
                        "SOUTH KOREA",
                        "SOUTH OSSETIA",
                        "SOUTH SUDAN",
                        "SPAIN",
                        "SRI LANKA",
                        "SUDAN",
                        "SURINAME",
                        "SVALBARD AND JAN MAYEN ISLANDS",
                        "SWAZILAND",
                        "SWEDEN",
                        "SWITZERLAND",
                        "SYRIA",
                        "TAIWAN",
                        "TAJIKISTAN",
                        "TANZANIA",
                        "THAILAND",
                        "TIMOR-LESTE",
                        "TOGO",
                        "TOKELAU",
                        "TONGA",
                        "TRINIDAD AND TOBAGO",
                        "TRISTAN DA CUNHA",
                        "TUNISIA",
                        "TURKEY",
                        "TURKMENISTAN",
                        "TURKS AND CAICOS ISLANDS",
                        "TUVALU",
                        "UGANDA",
                        "UKRAINE",
                        "UNITED ARAB EMIRATES",
                        "UNITED STATES MINOR OUTLYING ISLANDS",
                        "UNITED STATES VIRGIN ISLANDS",
                        "URUGUAY",
                        "UZBEKISTAN",
                        "VANUATU",
                        "VATICAN",
                        "VENEZUELA",
                        "VIETNAM",
                        "WAKE ISLAND",
                        "WALLIS AND FUTUNA ISLANDS",
                        "WESTERN SAHARA",
                        "YEMEN",
                        "ZAMBIA",
                        "ZIMBABWE",
                        "NETHERLANDS ANTILLES",
                        "UNKNOWN"
                    ]
                },
                "dateOfBirth": {
                    "title": "Date of birth",
                    "description": "This is not an Important field",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "industry": {
                    "title": "Industry",
                    "description": "This is an Important field",
                    "type": "string",
                    "maxLength": 1024
                },
                "occupation": {
                    "title": "Occupation",
                    "description": "This is an Important field",
                    "type": "string",
                    "maxLength": 1024
                },
                "idType": {
                    "title": "Id type",
                    "description": "This is not an Important field",
                    "type": "string",
                    "maxLength": 255
                },
                "idNumber": {
                    "title": "Id number",
                    "description": "This is not an Important field",
                    "type": "string",
                    "maxLength": 255
                },
                "idIssueDate": {
                    "title": "Id issue date",
                    "description": "This is not an Important field",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "idExpiryDate": {
                    "title": "Id expiry date",
                    "description": "This is not an Important field",
                    "type": "string",
                    "format": "date-time",
                    "x-nullable": true
                },
                "dialog": {
                    "title": "Dialog",
                    "type": "integer",
                    "readOnly": true
                },
                "fileBucket": {
                    "title": "File bucket",
                    "type": "integer",
                    "readOnly": true
                }
            }
        },
        "Record": {
            "required": [
                "name",
                "recordType"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "name": {
                    "title": "Name",
                    "description": "This is the name of the entity/individual",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1
                },
                "recordType": {
                    "title": "Record type",
                    "description": "CharField for name, max_length=32",
                    "type": "string",
                    "enum": [
                        "INDIVIDUAL",
                        "CORPORATE"
                    ]
                },
                "referenceId": {
                    "title": "Reference id",
                    "description": "This is the reference id in the client's system",
                    "type": "string",
                    "maxLength": 255,
                    "example:": ""
                },
                "aliasNames": {
                    "description": "Array representing different names for this record",
                    "type": "array",
                    "items": {
                        "title": "Alias names",
                        "type": "string",
                        "maxLength": 255,
                        "minLength": 1
                    }
                },
                "phoneNumbers": {
                    "description": "Array representing phone numbers",
                    "type": "array",
                    "items": {
                        "title": "Phone numbers",
                        "type": "string",
                        "maxLength": 32,
                        "minLength": 1
                    }
                },
                "addresses": {
                    "description": "Array representing addresses",
                    "type": "array",
                    "items": {
                        "title": "Addresses",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "oldNames": {
                    "description": "Array representing old names",
                    "type": "array",
                    "items": {
                        "title": "Old names",
                        "type": "string",
                        "maxLength": 255,
                        "minLength": 1
                    }
                },
                "sourceOfFunds": {
                    "title": "Source of funds",
                    "type": "string",
                    "maxLength": 255
                },
                "emailAddresses": {
                    "description": "Array for email addresses",
                    "type": "array",
                    "items": {
                        "title": "Email addresses",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "bankAccounts": {
                    "description": "Array of Bank accounts",
                    "type": "array",
                    "items": {
                        "title": "Bank accounts",
                        "type": "string",
                        "maxLength": 1024,
                        "minLength": 1
                    }
                },
                "createdBy": {
                    "title": "Created by",
                    "type": "string",
                    "x-nullable": true
                },
                "updatedBy": {
                    "title": "Updated by",
                    "type": "string",
                    "x-nullable": true
                },
                "dialog": {
                    "title": "Dialog",
                    "type": "integer",
                    "x-nullable": true
                },
                "fileBucket": {
                    "title": "File bucket",
                    "type": "integer",
                    "x-nullable": true
                }
            }
        },
        "InternetSearchResult": {
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "title": {
                    "title": "Title",
                    "type": "string",
                    "readOnly": true,
                    "minLength": 1
                },
                "summary": {
                    "title": "Summary",
                    "type": "string",
                    "readOnly": true,
                    "minLength": 1
                },
                "link": {
                    "title": "Link",
                    "type": "string",
                    "format": "uri",
                    "readOnly": true,
                    "minLength": 1
                },
                "matched": {
                    "title": "Matched",
                    "type": "boolean"
                },
                "ner": {
                    "title": "Ner",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "sentiment": {
                    "title": "Sentiment",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "nlpJson": {
                    "title": "Nlp json",
                    "type": "string",
                    "x-nullable": true
                },
                "isNlpFinished": {
                    "title": "Is nlp finished",
                    "type": "boolean",
                    "x-nullable": true
                },
                "createdBy": {
                    "title": "Created by",
                    "type": "string",
                    "x-nullable": true
                },
                "updatedBy": {
                    "title": "Updated by",
                    "type": "string",
                    "x-nullable": true
                },
                "internetSearch": {
                    "title": "Internet search",
                    "type": "integer",
                    "readOnly": true
                }
            }
        },
        "InternetSearch": {
            "required": [
                "record"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "internetSearchResults": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/InternetSearchResult"
                    },
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "valid": {
                    "title": "Valid",
                    "type": "boolean"
                },
                "invalidReason": {
                    "title": "Invalid reason",
                    "type": "string",
                    "maxLength": 255
                },
                "version": {
                    "title": "Version",
                    "type": "string",
                    "enum": [
                        "V2"
                    ]
                },
                "baseUrl": {
                    "title": "Base url",
                    "type": "string",
                    "maxLength": 255,
                    "x-nullable": true
                },
                "isNlpFinished": {
                    "title": "Is nlp finished",
                    "type": "boolean",
                    "x-nullable": true
                },
                "record": {
                    "title": "Record",
                    "type": "integer"
                }
            }
        },
        "OwnSublist": {
            "title": "Own sublist info",
            "required": [
                "sublistName",
                "domains"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "sublistName": {
                    "title": "Sublist name",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1
                },
                "createdBy": {
                    "title": "Created by",
                    "type": "string",
                    "x-nullable": true
                },
                "updatedBy": {
                    "title": "Updated by",
                    "type": "string",
                    "x-nullable": true
                },
                "domains": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    },
                    "uniqueItems": true
                }
            }
        },
        "OwnName": {
            "title": "Own name",
            "required": [
                "fullName"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "ownSublistInfo": {
                    "$ref": "#/definitions/OwnSublist"
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "fullName": {
                    "title": "Full name",
                    "type": "string",
                    "maxLength": 255,
                    "minLength": 1
                },
                "idNumber": {
                    "title": "Id number",
                    "type": "string",
                    "maxLength": 255
                },
                "uniqueReferenceCode": {
                    "title": "Unique reference code",
                    "type": "string",
                    "maxLength": 255
                },
                "country": {
                    "title": "Country",
                    "type": "string",
                    "maxLength": 255
                },
                "comment": {
                    "title": "Comment",
                    "type": "string"
                },
                "active": {
                    "title": "Active",
                    "type": "boolean"
                },
                "createdBy": {
                    "title": "Created by",
                    "type": "string",
                    "x-nullable": true
                },
                "updatedBy": {
                    "title": "Updated by",
                    "type": "string",
                    "x-nullable": true
                },
                "ownSublist": {
                    "title": "Own sublist",
                    "type": "integer",
                    "x-nullable": true
                }
            }
        },
        "OwnNameSearchResult": {
            "required": [
                "ownNameSearch"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "ownName": {
                    "$ref": "#/definitions/OwnName"
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "matched": {
                    "title": "Matched",
                    "type": "boolean"
                },
                "createdBy": {
                    "title": "Created by",
                    "type": "string",
                    "x-nullable": true
                },
                "updatedBy": {
                    "title": "Updated by",
                    "type": "string",
                    "x-nullable": true
                },
                "ownNameSearch": {
                    "title": "Own name search",
                    "type": "integer"
                }
            }
        },
        "OwnNameSearch": {
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "searchResults": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/OwnNameSearchResult"
                    },
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "valid": {
                    "title": "Valid",
                    "type": "boolean"
                },
                "invalidReason": {
                    "title": "Invalid reason",
                    "type": "string",
                    "maxLength": 255
                },
                "isPeriodic": {
                    "title": "Is periodic",
                    "type": "boolean"
                },
                "record": {
                    "title": "Record",
                    "type": "integer",
                    "x-nullable": true
                },
                "domain": {
                    "title": "Domain",
                    "type": "integer",
                    "x-nullable": true
                }
            }
        },
        "SearchResult": {
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "searchResponse": {
                    "title": "Search response",
                    "type": "string",
                    "readOnly": true
                },
                "uniqueReferenceCode": {
                    "title": "Unique reference code",
                    "type": "string",
                    "readOnly": true,
                    "minLength": 1
                },
                "matched": {
                    "title": "Matched",
                    "type": "boolean"
                },
                "createdBy": {
                    "title": "Created by",
                    "type": "string",
                    "x-nullable": true
                },
                "updatedBy": {
                    "title": "Updated by",
                    "type": "string",
                    "x-nullable": true
                },
                "search": {
                    "title": "Search",
                    "type": "integer",
                    "readOnly": true
                },
                "dialog": {
                    "title": "Dialog",
                    "type": "integer",
                    "readOnly": true
                }
            }
        },
        "ClientSearch": {
            "required": [
                "engineType"
            ],
            "type": "object",
            "properties": {
                "id": {
                    "title": "ID",
                    "type": "integer",
                    "readOnly": true
                },
                "searchResults": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/SearchResult"
                    },
                    "readOnly": true
                },
                "searchText": {
                    "title": "Search text",
                    "type": "string",
                    "default": "",
                    "x-nullable": true
                },
                "recordType": {
                    "title": "Record type",
                    "type": "string",
                    "default": "",
                    "x-nullable": true
                },
                "baseUrl": {
                    "title": "Base url",
                    "type": "string",
                    "default": "",
                    "x-nullable": true
                },
                "createdAt": {
                    "title": "Created at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "updatedAt": {
                    "title": "Updated at",
                    "type": "string",
                    "format": "date-time",
                    "readOnly": true
                },
                "engineType": {
                    "title": "Engine type",
                    "type": "string",
                    "enum": [
                        "DJ",
                        "DJ2",
                        "ArtemiScan",
                        "TR"
                    ]
                },
                "engineVersion": {
                    "title": "Engine version",
                    "type": "string",
                    "maxLength": 32
                },
                "valid": {
                    "title": "Valid",
                    "type": "boolean"
                },
                "invalidReason": {
                    "title": "Invalid reason",
                    "type": "string",
                    "maxLength": 255
                },
                "isPeriodic": {
                    "title": "Is periodic",
                    "type": "boolean"
                },
                "isSearchFinished": {
                    "title": "Is search finished",
                    "type": "boolean"
                },
                "record": {
                    "title": "Record",
                    "type": "integer",
                    "x-nullable": true
                }
            }
        },
        "GetToken": {
            "required": [],
            "type": "object",
            "properties": {
                "username": {
                    "title": "Username",
                    "type": "string"
                },
                "password": {
                    "title": "Password",
                    "type": "string"
                },
                "clientId": {
                    "title": "Client Id",
                    "type": "string"
                },
                "userPoolId": {
                    "title": "User pool Id",
                    "type": "string"
                }
            }
        },
        "RefreshToken": {
            "required": [],
            "type": "object",
            "properties": {
                "clientId": {
                    "title": "Client Id",
                    "type": "string"
                },
                "refreshToken": {
                    "title": "Refresh token",
                    "type": "string"
                }
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci1hcnRlbWlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FydGVtaXMvYXBpL3N3YWdnZXItYXJ0ZW1pcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGNBQWMsR0FBRztJQUMxQixTQUFTLEVBQUUsS0FBSztJQUNoQixNQUFNLEVBQUU7UUFDSixhQUFhLEVBQUUsNEJBQTRCO1FBQzNDLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLE9BQU8sRUFBRSxVQUFVO0tBQ3RCO0lBQ0QsTUFBTSxFQUFFLHdCQUF3QjtJQUNoQyxTQUFTLEVBQUU7UUFDUCxPQUFPO0tBQ1Y7SUFDRCxVQUFVLEVBQUUsU0FBUztJQUNyQixVQUFVLEVBQUU7UUFDUixrQkFBa0I7S0FDckI7SUFDRCxVQUFVLEVBQUU7UUFDUixrQkFBa0I7S0FDckI7SUFDRCxxQkFBcUIsRUFBRTtRQUNuQixrQkFBa0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsYUFBYSxFQUFFLDZCQUE2QjtTQUMvQztRQUNELGVBQWUsRUFBRTtZQUNiLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLGVBQWU7WUFDdkIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsYUFBYSxFQUFFLDBFQUEwRTtTQUM1RjtLQUNKO0lBQ0QsVUFBVSxFQUFFO1FBQ1I7WUFDSSxrQkFBa0IsRUFBRSxFQUFFO1NBQ3pCO1FBQ0Q7WUFDSSxlQUFlLEVBQUUsRUFBRTtTQUN0QjtLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsYUFBYSxFQUFFO1lBQ1gsTUFBTSxFQUFFO2dCQUNKLGFBQWEsRUFBRSxXQUFXO2dCQUMxQixhQUFhLEVBQUUsV0FBVztnQkFDMUIsWUFBWSxFQUFFO29CQUNWO3dCQUNJLE1BQU0sRUFBRSxNQUFNO3dCQUNkLElBQUksRUFBRSxNQUFNO3dCQUNaLFVBQVUsRUFB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