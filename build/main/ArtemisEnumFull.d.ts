export declare const ArtemisEnumFull: {
    artemis_onboarding_modes: string[];
    artemis_product_service_complexities: string[];
    artemis_general_settings: {
        CSP: boolean;
        ENABLE_HANDSHAKE: boolean;
        ODD_LOOKBACK_DAYS: number;
        MAX_NUMBER_OF_HITS: number;
        ENABLE_OPENCORPORATE: boolean;
        PERIODIC_REVIEW_LOW_DAYS: number;
        PERIODIC_REVIEW_HIGH_DAYS: number;
        PERIODIC_REVIEW_LOW_YEARS: number;
        PERIODIC_REVIEW_HIGH_YEARS: number;
        PERIODIC_REVIEW_MEDIUM_DAYS: number;
        PERIODIC_REVIEW_MEDIUM_YEARS: number;
        PERIODIC_REVIEW_MEDIUM_LOW_DAYS: number;
        PERIODIC_REVIEW_MEDIUM_HIGH_DAYS: number;
        PERIODIC_REVIEW_MEDIUM_LOW_YEARS: number;
        PERIODIC_REVIEW_MEDIUM_HIGH_YEARS: number;
        PERIODIC_REVIEW_NOTIFY_OFFSET_DAYS: number;
        USE_BATCH_PROCESS_SERVICE_FOR_DOWNLOAD_CUSTOMER_CSV: boolean;
    };
    artemis_countries: string[];
    artemis_frontend_settings: {
        defaultValues: {};
    };
    artemis_source_of_funds: string[];
    artemis_document_authenticities: string[];
    risk_setting_weight: {
        weight: {
            CORPORATE: {
                cpi: number;
                fsi: number;
                fatf: number;
                oecd: number;
                fatca: number;
                industry: number;
                screening: number;
                entity_type: number;
                payment_modes: number;
                primary_weight: number;
                onboarding_mode: number;
                ownership_layer: number;
                product_complexity: number;
                individual_shareholding: number;
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
                payment_modes: number;
                primary_weight: number;
                onboarding_mode: number;
                product_complexity: number;
            };
        };
        use_athena: boolean;
        include_crps: boolean;
        risk_ratings: {
            rating: string;
            percentage: number;
        }[];
        weight_with_athena: {
            CORPORATE: {
                cpi: number;
                fsi: number;
                fatf: number;
                oecd: number;
                fatca: number;
                industry: number;
                screening: number;
                entity_type: number;
                payment_modes: number;
                primary_weight: number;
                onboarding_mode: number;
                ownership_layer: number;
                entity_transaction: number;
                product_complexity: number;
                individual_shareholding: number;
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
                payment_modes: number;
                primary_weight: number;
                onboarding_mode: number;
                product_complexity: number;
                individual_transaction: number;
            };
        };
        shareholding_threshold: {
            LOW: number;
            HIGH: number;
            MEDIUM: number;
            "MEDIUM-LOW": number;
            "MEDIUM-HIGH": number;
        };
    };
    artemis_roles: {
        roles: string[];
        category: string;
    }[];
    artemis_ssic: string[];
    artemis_document_types: {
        CORPORATE: {
            category: string;
            documentTypes: string[];
        }[];
        INDIVIDUAL: {
            category: string;
            documentTypes: string[];
        }[];
    };
    artemis_ssoc: string[];
    artemis_entity_types: string[];
    artemis_ownership_layers: string[];
    artemis_id_types: string[];
    artemis_payment_modes: string[];
};
