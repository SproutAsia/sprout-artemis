/// <reference types="node" />
/**
 * formData
 */
export interface TReqPostDocument {
    doc_type: string;
    authenticity: string;
    issue_date: string;
    expiry_date: string;
    document: File;
    show_expiry_alerts: boolean;
}
