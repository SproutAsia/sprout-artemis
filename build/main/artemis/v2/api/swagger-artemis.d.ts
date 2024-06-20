export declare const SwaggerArtemis: {
    swagger: string;
    info: {
        description: string;
        version: string;
        title: string;
    };
    host: string;
    schemes: string[];
    basePath: string;
    consumes: string[];
    produces: string[];
    securityDefinitions: {
        "X-ARTEMIS-DOMAIN": {
            in: string;
            name: string;
            type: string;
            description: string;
        };
        Authorization: {
            in: string;
            name: string;
            type: string;
            description: string;
        };
    };
    security: ({
        "X-ARTEMIS-DOMAIN": any[];
        Authorization?: undefined;
    } | {
        Authorization: any[];
        "X-ARTEMIS-DOMAIN"?: undefined;
    })[];
    paths: {
        "/auth/token": {
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    description: string;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: any[];
                            type: string;
                            properties: {
                                ChallengeParameters: {
                                    type: string;
                                    properties: {};
                                };
                                AuthenticationResult: {
                                    type: string;
                                    properties: {
                                        AccessToken: {
                                            type: string;
                                            example: string;
                                        };
                                        ExpiresIn: {
                                            type: string;
                                            format: string;
                                            example: string;
                                        };
                                        TokenType: {
                                            type: string;
                                            example: string;
                                        };
                                        RefreshToken: {
                                            type: string;
                                            example: string;
                                        };
                                        IdToken: {
                                            type: string;
                                            example: string;
                                        };
                                    };
                                };
                                ResponseMetadata: {
                                    type: string;
                                    properties: {
                                        RequestId: {
                                            type: string;
                                            example: string;
                                        };
                                        HTTPStatusCode: {
                                            type: string;
                                            format: string;
                                            example: string;
                                        };
                                        HTTPHeaders: {
                                            type: string;
                                            properties: {
                                                date: {
                                                    type: string;
                                                    example: string;
                                                };
                                                "content-type": {
                                                    type: string;
                                                    example: string;
                                                };
                                                "content-length": {
                                                    type: string;
                                                    example: string;
                                                };
                                                connection: {
                                                    type: string;
                                                    example: string;
                                                };
                                                "x-amzn-requestid": {
                                                    type: string;
                                                    example: string;
                                                };
                                            };
                                        };
                                        RetryAttempts: {
                                            type: string;
                                            format: string;
                                            example: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
        };
        "/auth/refresh-token": {
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    description: string;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: any[];
                            type: string;
                            properties: {
                                ChallengeParameters: {
                                    type: string;
                                    properties: {};
                                };
                                AuthenticationResult: {
                                    type: string;
                                    properties: {
                                        AccessToken: {
                                            type: string;
                                            example: string;
                                        };
                                        ExpiresIn: {
                                            type: string;
                                            format: string;
                                            example: string;
                                        };
                                        TokenType: {
                                            type: string;
                                            example: string;
                                        };
                                        IdToken: {
                                            type: string;
                                            example: string;
                                        };
                                    };
                                };
                                ResponseMetadata: {
                                    type: string;
                                    properties: {
                                        RequestId: {
                                            type: string;
                                            example: string;
                                        };
                                        HTTPStatusCode: {
                                            type: string;
                                            format: string;
                                            example: string;
                                        };
                                        HTTPHeaders: {
                                            type: string;
                                            properties: {
                                                date: {
                                                    type: string;
                                                    example: string;
                                                };
                                                "content-type": {
                                                    type: string;
                                                    example: string;
                                                };
                                                "content-length": {
                                                    type: string;
                                                    example: string;
                                                };
                                                connection: {
                                                    type: string;
                                                    example: string;
                                                };
                                                "x-amzn-requestid": {
                                                    type: string;
                                                    example: string;
                                                };
                                            };
                                        };
                                        RetryAttempts: {
                                            type: string;
                                            format: string;
                                            example: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
        };
        "/customers/": {
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    description: string;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                            example: string;
                        };
                    };
                    "403": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                            example: string;
                        };
                    };
                    "400": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                            example: string;
                        };
                    };
                };
                tags: string[];
            };
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                            example: {
                                count: number;
                                next: string;
                                prev: any;
                                results: {
                                    id: number;
                                    createdBy: {
                                        id: string;
                                        name: string;
                                        email: string;
                                        oauthId: string;
                                        isActive: boolean;
                                        mfaEnabled: boolean;
                                    };
                                    updatedBy: {
                                        id: string;
                                        name: string;
                                        email: string;
                                        oauthId: string;
                                        isActive: boolean;
                                        mfaEnabled: boolean;
                                    };
                                    name: string;
                                    riskRating: string;
                                    status: string;
                                    customerType: string;
                                    createdAt: string;
                                    updatedAt: string;
                                    onboardingMode: string;
                                    productServiceComplexity: string;
                                    paymentModes: string[];
                                    profileType: string;
                                    isActiveCustomer: boolean;
                                    natureOfBusinessRelationship: string;
                                    referenceId: string;
                                    integrationStatus: string;
                                    domains: number[];
                                    users: string[];
                                }[];
                            };
                        };
                    };
                };
                tags: string[];
            };
        };
        "/customers/{customer_id}/crps/": {
            get: {
                operationId: string;
                description: string;
                parameters: any[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                            example: string;
                        };
                    };
                };
                tags: string[];
            };
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    description: string;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                description: string;
                required: boolean;
                type: string;
            }[];
        };
        "/records/{record_id}/searches/": {
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        required: string[];
                        type: string;
                        properties: {
                            engineType: {
                                title: string;
                                type: string;
                                enum: string[];
                            };
                        };
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/records/{record_id}/internet_searches/": {
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/records/{record_id}/own_name_searches/": {
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/records/{record_id}/documents/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
                consumes: string[];
                tags: string[];
            };
            post: {
                operationId: string;
                description: string;
                parameters: ({
                    name: string;
                    in: string;
                    required: boolean;
                    type: string;
                    maxLength: number;
                    format?: undefined;
                    "x-nullable"?: undefined;
                } | {
                    name: string;
                    in: string;
                    required: boolean;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                    maxLength?: undefined;
                } | {
                    name: string;
                    in: string;
                    required: boolean;
                    type: string;
                    maxLength?: undefined;
                    format?: undefined;
                    "x-nullable"?: undefined;
                })[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                consumes: string[];
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/customers/{customer_id}/risk_reports/": {
            get: {
                operationId: string;
                description: string;
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            example: {
                                count: number;
                                next: string;
                                prev: any;
                                results: {
                                    id: number;
                                    createdBy: {
                                        id: string;
                                        name: string;
                                        email: string;
                                        oauthId: string;
                                        isActive: boolean;
                                        mfaEnabled: boolean;
                                    };
                                    updatedBy: {
                                        id: string;
                                        name: string;
                                        email: string;
                                        oauthId: string;
                                        isActive: boolean;
                                        mfaEnabled: boolean;
                                    };
                                    riskJson: {
                                        comments: {
                                            "9128": any[];
                                            "9129": any[];
                                            "9131": any[];
                                        };
                                        settings: {
                                            weight: {
                                                CORPORATE: {
                                                    cpi: number;
                                                    fsi: number;
                                                    fatf: number;
                                                    oecd: number;
                                                    fatca: number;
                                                    industry: number;
                                                    screening: number;
                                                    paymentModes: number;
                                                    primaryWeight: number;
                                                    onboardingMode: number;
                                                    ownershipLayer: number;
                                                    productComplexity: number;
                                                };
                                                INDIVIDUAL: {
                                                    cpi: number;
                                                    fsi: number;
                                                    fatf: number;
                                                    oecd: number;
                                                    fatca: number;
                                                    industry: number;
                                                    screening: number;
                                                    occupation: number;
                                                    paymentModes: number;
                                                    primaryWeight: number;
                                                    onboardingMode: number;
                                                    productComplexity: number;
                                                };
                                            };
                                            highRiskThreshold: number;
                                            mediumRiskThreshold: number;
                                        };
                                        riskScore: number;
                                        riskRating: string;
                                        componentScore: {
                                            cpi: number;
                                            fsi: number;
                                            fatf: number;
                                            oecd: number;
                                            fatca: number;
                                            industry: number;
                                            screening: number;
                                            paymentModes: number;
                                            onboardingMode: number;
                                            ownershipLayer: number;
                                            productComplexity: number;
                                        };
                                    };
                                    isOutdated: boolean;
                                    latestApprovalStatus: {
                                        id: number;
                                        createdBy: {
                                            id: string;
                                            name: string;
                                            email: string;
                                            oauthId: string;
                                            isActive: boolean;
                                            mfaEnabled: boolean;
                                        };
                                        updatedBy: {
                                            id: string;
                                            name: string;
                                            email: string;
                                            oauthId: string;
                                            isActive: boolean;
                                            mfaEnabled: boolean;
                                        };
                                        createdAt: string;
                                        updatedAt: string;
                                        overrideRisk: string;
                                        approvalStatus: string;
                                        riskReport: number;
                                        notifyPerson: any;
                                    };
                                    createdAt: string;
                                    updatedAt: string;
                                    riskRating: string;
                                    outdated: boolean;
                                    customer: number;
                                }[];
                            };
                        };
                    };
                };
                tags: string[];
            };
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/customers/{customer_id}/": {
            get: {
                operationId: string;
                description: string;
                parameters: any[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            delete: {
                operationId: string;
                description: string;
                parameters: any[];
                responses: {
                    "204": {
                        description: string;
                    };
                };
                tags: string[];
            };
            patch: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    description: string;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                description: string;
                required: boolean;
                type: string;
            }[];
        };
        "/individual_records/{record_id}/": {
            get: {
                operationId: string;
                description: string;
                parameters: any[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                description: string;
                required: boolean;
                type: string;
            }[];
        };
        "/corporate_records/{record_id}/": {
            get: {
                operationId: string;
                description: string;
                parameters: any[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                description: string;
                required: boolean;
                type: string;
            }[];
        };
        "/documents/{doc_id}/": {
            patch: {
                operationId: string;
                description: string;
                parameters: ({
                    name: string;
                    in: string;
                    required: boolean;
                    type: string;
                    maxLength: number;
                    format?: undefined;
                    "x-nullable"?: undefined;
                } | {
                    name: string;
                    in: string;
                    required: boolean;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                    maxLength?: undefined;
                } | {
                    name: string;
                    in: string;
                    required: boolean;
                    type: string;
                    maxLength?: undefined;
                    format?: undefined;
                    "x-nullable"?: undefined;
                })[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                consumes: string[];
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                description: string;
                required: boolean;
                type: string;
            }[];
        };
        "/crps/{crp_id}/": {
            get: {
                operationId: string;
                description: string;
                parameters: any[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            patch: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    description: string;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            delete: {
                operationId: string;
                description: string;
                parameters: any[];
                responses: {
                    "204": {
                        description: string;
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                description: string;
                required: boolean;
                type: string;
            }[];
        };
        "/crps/{crp_id}/roles/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/roles/{role_id}/": {
            delete: {
                operationId: string;
                description: string;
                parameters: any[];
                responses: {
                    "204": {
                        description: string;
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                description: string;
                required: boolean;
                type: string;
            }[];
        };
        "/crps/{crp_id}/screening_conclusions/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/crps/{crp_id}/posts/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/crps/{crp_id}/verification_conclusions/": {
            get: {
                operationId: string;
                description: string;
                parameters: ({
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                    enum: string[];
                } | {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                    enum?: undefined;
                })[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            example: {
                                count: number;
                                next: any;
                                prev: any;
                                results: {
                                    id: number;
                                    createdBy: {
                                        id: string;
                                        name: string;
                                        email: string;
                                        oauthId: string;
                                        isActive: boolean;
                                        mfaEnabled: boolean;
                                    };
                                    updatedBy: {
                                        id: string;
                                        name: string;
                                        email: string;
                                        oauthId: string;
                                        isActive: boolean;
                                        mfaEnabled: boolean;
                                    };
                                    createdAt: string;
                                    updatedAt: string;
                                    verificationType: string;
                                    verificationResult: string;
                                    crp: number;
                                }[];
                            };
                        };
                    };
                };
                tags: string[];
            };
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/risk_reports/{risk_report_id}/approval_statuses/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/records/countries/": {
            get: {
                operationId: string;
                summary: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/records/ssic/": {
            get: {
                operationId: string;
                summary: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/individual_records/ssoc/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/individual_records/id_types/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/records/source_of_funds/": {
            get: {
                operationId: string;
                description: string;
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/corporate_records/entity_types/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/corporate_records/ownership_layers/": {
            get: {
                operationId: string;
                description: string;
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/customers/product_service_complexities/": {
            get: {
                operationId: string;
                description: string;
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/customers/onboarding_modes/": {
            get: {
                operationId: string;
                description: string;
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/customers/payment_modes/": {
            get: {
                operationId: string;
                description: string;
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/documents/document_types/": {
            get: {
                operationId: string;
                summary: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: {
                                category: string;
                                documentTypes: string[];
                            }[];
                        };
                    };
                };
                consumes: string[];
                tags: string[];
            };
            parameters: any[];
        };
        "/documents/authenticities/": {
            get: {
                operationId: string;
                description: string;
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                consumes: string[];
                tags: string[];
            };
            parameters: any[];
        };
        "/crps/roles/": {
            get: {
                operationId: string;
                description: string;
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: {
                                category: string;
                                roles: string[];
                            }[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/corporate_records/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            example: {
                                count: number;
                                next: string;
                                previous: any;
                                results: {
                                    id: number;
                                    createdBy: any;
                                    updatedBy: any;
                                    handshakesReports: any[];
                                    createdAt: string;
                                    updatedAt: string;
                                    name: string;
                                    recordType: string;
                                    referenceId: string;
                                    aliasNames: string[];
                                    phoneNumbers: string[];
                                    addresses: string[];
                                    oldNames: any[];
                                    sourceOfFunds: string;
                                    emailAddresses: string[];
                                    bankAccounts: string[];
                                    isIncorporated: boolean;
                                    entityType: string;
                                    countryOfOperations: string;
                                    countryOfIncorporation: string;
                                    ownershipStructureLayers: string;
                                    businessActivity: string;
                                    website: string;
                                    incorporationNumber: string;
                                    incorporationDate: string;
                                    incorporationExpiryDate: string;
                                    inFatfJurisdiction: boolean;
                                    dialog: number;
                                    fileBucket: number;
                                }[];
                            };
                        };
                    };
                };
                tags: string[];
            };
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/crps/status/": {
            get: {
                operationId: string;
                summary: string;
                description: string;
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/crps/{crp_id}/face_compare/": {
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/crps/{crp_id}/ocr_doc/": {
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/customers/profile_types/": {
            get: {
                operationId: string;
                description: string;
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/customers/{customer_id}/search/": {
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
        "/documents/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            example: {
                                count: number;
                                next: string;
                                prev: any;
                                results: {
                                    id: number;
                                    createdBy: any;
                                    updatedBy: {
                                        id: string;
                                        name: string;
                                        email: string;
                                        oauthId: string;
                                        isActive: boolean;
                                        mfaEnabled: boolean;
                                    };
                                    document: string;
                                    docName: string;
                                    record: {
                                        id: number;
                                        createdAt: string;
                                        updatedAt: string;
                                        name: string;
                                        recordType: string;
                                        referenceId: string;
                                        aliasNames: any[];
                                        phoneNumbers: string[];
                                        addresses: any[];
                                        oldNames: string[];
                                        sourceOfFunds: string;
                                        emailAddresses: string[];
                                        bankAccounts: any[];
                                        createdBy: any;
                                        updatedBy: string;
                                        dialog: number;
                                        fileBucket: number;
                                    };
                                    createdAt: string;
                                    updatedAt: string;
                                    docTypeCategory: string;
                                    docType: string;
                                    authenticity: string;
                                    issueDate: string;
                                    expiryDate: string;
                                    s3: boolean;
                                    showExpiryAlerts: boolean;
                                    fileBucket: number;
                                }[];
                            };
                        };
                    };
                };
                consumes: string[];
                tags: string[];
            };
            parameters: any[];
        };
        "/individual_records/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/individual_records/titles/": {
            get: {
                operationId: string;
                description: string;
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            type: string;
                            example: string[];
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/records/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
            parameters: any[];
        };
        "/records/{id}/": {
            get: {
                operationId: string;
                description: string;
                parameters: any[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            delete: {
                operationId: string;
                description: string;
                parameters: any[];
                responses: {
                    "204": {
                        description: string;
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                description: string;
                required: boolean;
                type: string;
            }[];
        };
        "/records/{id}/crps/": {
            get: {
                operationId: string;
                description: string;
                parameters: any[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                description: string;
                required: boolean;
                type: string;
            }[];
        };
        "/records/{record_id}/search/": {
            get: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    description: string;
                    required: boolean;
                    type: string;
                }[];
                responses: {
                    "200": {
                        description: string;
                        schema: {
                            required: string[];
                            type: string;
                            properties: {
                                count: {
                                    type: string;
                                };
                                next: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                previous: {
                                    type: string;
                                    format: string;
                                    "x-nullable": boolean;
                                };
                                results: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
                tags: string[];
            };
            post: {
                operationId: string;
                description: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        $ref: string;
                    };
                }[];
                responses: {
                    "201": {
                        description: string;
                        schema: {
                            $ref: string;
                        };
                    };
                };
                tags: string[];
            };
            parameters: {
                name: string;
                in: string;
                required: boolean;
                type: string;
            }[];
        };
    };
    definitions: {
        HandshakesReport: {
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                reportDateTime: {
                    title: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                activeName: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                xmlData: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                directRedScore: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                indirectRedScore: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                networkScoreDegreeCentrality: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                entityGuid: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                dataset: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                otherNames: {
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                identificationNumber: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                currentAddress: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                otherAddress: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                incorporationDate: {
                    title: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                incorporationCitizenship: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                companyType: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                companyStatus: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                primaryBusinessActivity: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                secondaryBusinessActivity: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                ownershipLayers: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                createdBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                updatedBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                record: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
            };
        };
        PersonCorporateRecordSerializer: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                handshakesReports: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                name: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                recordType: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                    readOnly: boolean;
                };
                referenceId: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    "example:": string;
                };
                aliasNames: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                phoneNumbers: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                addresses: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                oldNames: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                    readOnly: boolean;
                };
                sourceOfFunds: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                emailAddresses: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                bankAccounts: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                isIncorporated: {
                    title: string;
                    description: string;
                    type: string;
                };
                entityType: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                countryOfOperations: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                countryOfIncorporation: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                ownershipStructureLayers: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                businessActivity: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                website: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                incorporationNumber: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                incorporationDate: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                incorporationExpiryDate: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                inFatfJurisdiction: {
                    title: string;
                    description: string;
                    type: string;
                };
                dialog: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                fileBucket: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
            };
        };
        CRPRole: {
            required: string[];
            type: string;
            properties: {
                dateAppointed: {
                    title: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                dateResigned: {
                    title: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                role: {
                    title: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                    example: string;
                };
                crp: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                    example: any;
                };
            };
        };
        ScreeningConclusion: {
            title: string;
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                invalid: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                pep: {
                    title: string;
                    type: string;
                };
                sanction: {
                    title: string;
                    type: string;
                };
                adverseNews: {
                    title: string;
                    type: string;
                };
                noHit: {
                    title: string;
                    type: string;
                };
                isSystemGenerated: {
                    title: string;
                    type: string;
                };
                crp: {
                    title: string;
                    type: string;
                    example: string;
                };
            };
        };
        CustomerIndividualRecordSerializer: {
            title: string;
            required: string[];
            type: string;
            properties: {
                primary: {
                    title: string;
                    type: string;
                    example: string;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                name: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                recordType: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                    readOnly: boolean;
                };
                aliasNames: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                phoneNumbers: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                addresses: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                oldNames: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                    readOnly: boolean;
                };
                sourceOfFunds: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                emailAddresses: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                bankAccounts: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                gender: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                };
                nationality: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                };
                countryOfResidence: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                };
                title: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                countryOfBirth: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                };
                dateOfBirth: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                industry: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    example: string;
                };
                occupation: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    example: string;
                };
                idType: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                idNumber: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                idIssueDate: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                idExpiryDate: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                dialog: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                fileBucket: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
            };
        };
        CustomerCorporateRecordSerializer: {
            title: string;
            required: string[];
            type: string;
            properties: {
                handshakesReports: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    readOnly: boolean;
                };
                primary: {
                    title: string;
                    type: string;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                name: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                recordType: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                    readOnly: boolean;
                };
                referenceId: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    "example:": string;
                };
                aliasNames: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                phoneNumbers: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                addresses: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                oldNames: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                    readOnly: boolean;
                };
                sourceOfFunds: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                emailAddresses: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                bankAccounts: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                isIncorporated: {
                    title: string;
                    description: string;
                    type: string;
                };
                entityType: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                countryOfOperations: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                    example: string;
                };
                countryOfIncorporation: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                    example: string;
                };
                ownershipStructureLayers: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                    example: string;
                };
                businessActivity: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    example: string;
                };
                website: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                incorporationNumber: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                incorporationDate: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                incorporationExpiryDate: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                inFatfJurisdiction: {
                    title: string;
                    description: string;
                    type: string;
                };
                dialog: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                fileBucket: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
            };
        };
        CRP: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                name: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                    minLength: number;
                };
                recordType: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                    minLength: number;
                };
                roles: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                latestScreeningConclusion: {
                    $ref: string;
                };
                status: {
                    title: string;
                    type: string;
                    enum: string[];
                };
                individualRecord: {
                    $ref: string;
                };
                corporateRecord: {
                    $ref: string;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                primary: {
                    title: string;
                    type: string;
                };
                customer: {
                    title: string;
                    type: string;
                };
                primaryCrpOf: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                    example: any;
                };
                record: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                fileBucket: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                dialog: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
            };
        };
        FaceCompare: {
            required: string[];
            type: string;
            properties: {
                docId: {
                    title: string;
                    type: string;
                };
                selfieId: {
                    title: string;
                    type: string;
                };
            };
        };
        OcrDocument: {
            required: string[];
            type: string;
            properties: {
                docId: {
                    title: string;
                    type: string;
                };
            };
        };
        Post: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                content: {
                    title: string;
                    type: string;
                    minLength: number;
                };
                dialog: {
                    title: string;
                    type: string;
                };
                parent: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
            };
        };
        ClientScreeningConclusion: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                pep: {
                    title: string;
                    type: string;
                };
                sanction: {
                    title: string;
                    type: string;
                };
                adverseNews: {
                    title: string;
                    type: string;
                };
                noHit: {
                    title: string;
                    type: string;
                };
                isSystemGenerated: {
                    title: string;
                    type: string;
                };
                crp: {
                    title: string;
                    type: string;
                };
            };
        };
        VerificationConclusion: {
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                verificationType: {
                    title: string;
                    type: string;
                    enum: string[];
                };
                verificationResult: {
                    title: string;
                    type: string;
                    enum: string[];
                };
                crp: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
            };
        };
        Customer: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                name: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                    minLength: number;
                };
                riskRating: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                    minLength: number;
                };
                status: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                    minLength: number;
                };
                customerType: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                    minLength: number;
                };
                individualRecords: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                corporateRecords: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                onboardingMode: {
                    title: string;
                    type: string;
                    enum: string[];
                };
                productServiceComplexity: {
                    title: string;
                    type: string;
                    enum: string[];
                };
                paymentModes: {
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        enum: string[];
                    };
                };
                profileType: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                isActiveCustomer: {
                    title: string;
                    type: string;
                };
                natureOfBusinessRelationship: {
                    title: string;
                    type: string;
                };
                referenceId: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    "example:": string;
                };
                domains: {
                    type: string;
                    items: {
                        type: string;
                    };
                    uniqueItems: boolean;
                    example: number[];
                };
                users: {
                    type: string;
                    items: {
                        type: string;
                    };
                    uniqueItems: boolean;
                    example: any[];
                };
            };
        };
        ApprovalStatus: {
            title: string;
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                overrideRisk: {
                    title: string;
                    type: string;
                    enum: string[];
                };
                approvalStatus: {
                    title: string;
                    type: string;
                    enum: string[];
                };
                riskReport: {
                    title: string;
                    type: string;
                };
                notifyPerson: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
            };
        };
        RiskReport: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                riskJson: {
                    title: string;
                    type: string;
                    additionalProperties: {
                        type: string;
                    };
                    readOnly: boolean;
                };
                isOutdated: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                latestApprovalStatus: {
                    $ref: string;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                riskRating: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                outdated: {
                    title: string;
                    type: string;
                };
                customer: {
                    title: string;
                    type: string;
                };
            };
        };
        PersonSearchResultSerializer: {
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                searchResponse: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                uniqueReferenceCode: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                    minLength: number;
                };
                matched: {
                    title: string;
                    type: string;
                };
                createdBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                updatedBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                search: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                dialog: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
            };
        };
        Search: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                searchResults: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    readOnly: boolean;
                };
                searchText: {
                    title: string;
                    type: string;
                    default: string;
                    "x-nullable": boolean;
                };
                recordType: {
                    title: string;
                    type: string;
                    default: string;
                    "x-nullable": boolean;
                };
                baseUrl: {
                    title: string;
                    type: string;
                    default: string;
                    "x-nullable": boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                engineType: {
                    title: string;
                    type: string;
                    enum: string[];
                };
                engineVersion: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                valid: {
                    title: string;
                    type: string;
                };
                invalidReason: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                isPeriodic: {
                    title: string;
                    type: string;
                };
                isSearchFinished: {
                    title: string;
                    type: string;
                };
                record: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
            };
        };
        Document: {
            type: string;
            properties: {
                docTypeCategory: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                docType: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                authenticity: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                issueDate: {
                    title: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                expiryDate: {
                    title: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                document: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                    format: string;
                };
                showExpiryAlerts: {
                    title: string;
                    type: string;
                };
            };
        };
        PersonIndividualRecordSerializer: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                name: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                recordType: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                    readOnly: boolean;
                };
                referenceId: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    "example:": string;
                };
                aliasNames: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                phoneNumbers: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                addresses: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                oldNames: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                    readOnly: boolean;
                };
                sourceOfFunds: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                emailAddresses: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                bankAccounts: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                gender: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                };
                nationality: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                };
                countryOfResidence: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                };
                title: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                countryOfBirth: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                };
                dateOfBirth: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                industry: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                occupation: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                idType: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                idNumber: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                };
                idIssueDate: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                idExpiryDate: {
                    title: string;
                    description: string;
                    type: string;
                    format: string;
                    "x-nullable": boolean;
                };
                dialog: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                fileBucket: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
            };
        };
        Record: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                name: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                recordType: {
                    title: string;
                    description: string;
                    type: string;
                    enum: string[];
                };
                referenceId: {
                    title: string;
                    description: string;
                    type: string;
                    maxLength: number;
                    "example:": string;
                };
                aliasNames: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                phoneNumbers: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                addresses: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                oldNames: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                sourceOfFunds: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                emailAddresses: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                bankAccounts: {
                    description: string;
                    type: string;
                    items: {
                        title: string;
                        type: string;
                        maxLength: number;
                        minLength: number;
                    };
                };
                createdBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                updatedBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                dialog: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                fileBucket: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
            };
        };
        InternetSearchResult: {
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                title: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                    minLength: number;
                };
                summary: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                    minLength: number;
                };
                link: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                    minLength: number;
                };
                matched: {
                    title: string;
                    type: string;
                };
                ner: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                sentiment: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                nlpJson: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                isNlpFinished: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                createdBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                updatedBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                internetSearch: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
            };
        };
        InternetSearch: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                internetSearchResults: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                valid: {
                    title: string;
                    type: string;
                };
                invalidReason: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                version: {
                    title: string;
                    type: string;
                    enum: string[];
                };
                baseUrl: {
                    title: string;
                    type: string;
                    maxLength: number;
                    "x-nullable": boolean;
                };
                isNlpFinished: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                record: {
                    title: string;
                    type: string;
                };
            };
        };
        OwnSublist: {
            title: string;
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                sublistName: {
                    title: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                createdBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                updatedBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                domains: {
                    type: string;
                    items: {
                        type: string;
                    };
                    uniqueItems: boolean;
                };
            };
        };
        OwnName: {
            title: string;
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                ownSublistInfo: {
                    $ref: string;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                fullName: {
                    title: string;
                    type: string;
                    maxLength: number;
                    minLength: number;
                };
                idNumber: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                uniqueReferenceCode: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                country: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                comment: {
                    title: string;
                    type: string;
                };
                active: {
                    title: string;
                    type: string;
                };
                createdBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                updatedBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                ownSublist: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
            };
        };
        OwnNameSearchResult: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                ownName: {
                    $ref: string;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                matched: {
                    title: string;
                    type: string;
                };
                createdBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                updatedBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                ownNameSearch: {
                    title: string;
                    type: string;
                };
            };
        };
        OwnNameSearch: {
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                searchResults: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                valid: {
                    title: string;
                    type: string;
                };
                invalidReason: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                isPeriodic: {
                    title: string;
                    type: string;
                };
                record: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                domain: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
            };
        };
        SearchResult: {
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                searchResponse: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                uniqueReferenceCode: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                    minLength: number;
                };
                matched: {
                    title: string;
                    type: string;
                };
                createdBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                updatedBy: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
                search: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                dialog: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
            };
        };
        ClientSearch: {
            required: string[];
            type: string;
            properties: {
                id: {
                    title: string;
                    type: string;
                    readOnly: boolean;
                };
                searchResults: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                    readOnly: boolean;
                };
                searchText: {
                    title: string;
                    type: string;
                    default: string;
                    "x-nullable": boolean;
                };
                recordType: {
                    title: string;
                    type: string;
                    default: string;
                    "x-nullable": boolean;
                };
                baseUrl: {
                    title: string;
                    type: string;
                    default: string;
                    "x-nullable": boolean;
                };
                createdAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                updatedAt: {
                    title: string;
                    type: string;
                    format: string;
                    readOnly: boolean;
                };
                engineType: {
                    title: string;
                    type: string;
                    enum: string[];
                };
                engineVersion: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                valid: {
                    title: string;
                    type: string;
                };
                invalidReason: {
                    title: string;
                    type: string;
                    maxLength: number;
                };
                isPeriodic: {
                    title: string;
                    type: string;
                };
                isSearchFinished: {
                    title: string;
                    type: string;
                };
                record: {
                    title: string;
                    type: string;
                    "x-nullable": boolean;
                };
            };
        };
        GetToken: {
            required: any[];
            type: string;
            properties: {
                username: {
                    title: string;
                    type: string;
                };
                password: {
                    title: string;
                    type: string;
                };
                clientId: {
                    title: string;
                    type: string;
                };
                userPoolId: {
                    title: string;
                    type: string;
                };
            };
        };
        RefreshToken: {
            required: any[];
            type: string;
            properties: {
                clientId: {
                    title: string;
                    type: string;
                };
                refreshToken: {
                    title: string;
                    type: string;
                };
            };
        };
    };
};
