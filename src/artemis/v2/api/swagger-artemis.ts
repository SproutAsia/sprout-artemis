export const SwaggerArtemis = {
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
                            "required": [
                            ],
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
                            "required": [
                            ],
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
            "required": [
            ],
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
            "required": [
            ],
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
} 