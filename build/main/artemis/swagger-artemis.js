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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhZ2dlci1hcnRlbWlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FydGVtaXMvc3dhZ2dlci1hcnRlbWlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsY0FBYyxHQUFHO0lBQzFCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLE1BQU0sRUFBRTtRQUNKLGFBQWEsRUFBRSw0QkFBNEI7UUFDM0MsU0FBUyxFQUFFLE9BQU87UUFDbEIsT0FBTyxFQUFFLFVBQVU7S0FDdEI7SUFDRCxNQUFNLEVBQUUsd0JBQXdCO0lBQ2hDLFNBQVMsRUFBRTtRQUNQLE9BQU87S0FDVjtJQUNELFVBQVUsRUFBRSxTQUFTO0lBQ3JCLFVBQVUsRUFBRTtRQUNSLGtCQUFrQjtLQUNyQjtJQUNELFVBQVUsRUFBRTtRQUNSLGtCQUFrQjtLQUNyQjtJQUNELHFCQUFxQixFQUFFO1FBQ25CLGtCQUFrQixFQUFFO1lBQ2hCLElBQUksRUFBRSxRQUFRO1lBQ2QsTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixNQUFNLEVBQUUsUUFBUTtZQUNoQixhQUFhLEVBQUUsNkJBQTZCO1NBQy9DO1FBQ0QsZUFBZSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFFBQVE7WUFDZCxNQUFNLEVBQUUsZUFBZTtZQUN2QixNQUFNLEVBQUUsUUFBUTtZQUNoQixhQUFhLEVBQUUsMEVBQTBFO1NBQzVGO0tBQ0o7SUFDRCxVQUFVLEVBQUU7UUFDUjtZQUNJLGtCQUFrQixFQUFFLEVBQUU7U0FDekI7UUFDRDtZQUNJLGVBQWUsRUFBRSxFQUFFO1NBQ3RCO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDTCxhQUFhLEVBQUU7WUFDWCxNQUFNLEVBQUU7Z0JBQ0osYUFBYSxFQUFFLFdBQVc7Z0JBQzFCLGFBQWEsRUFBRSxXQUFXO2dCQUMxQixZQUFZLEVBQUU7b0JBQ1Y7d0JBQ0ksTUFBTSxFQUFFLE1BQU07d0JBQ2QsSUFBSSxFQUFFLE1BQU07d0JBQ1osVUFBVSxFQUFFLElBQUk7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