/**
 * @description !! I dont found it in Swagger !!
 */
export interface TResPostDocument {
    id: number
    createdAt: string
    updatedAt: string
    createdBy: any
    updatedBy: any
    customerId: number
    frontName: string
    backName: any
    type: string
    number: string
    authenticity: string
    issueDate: any
    expiryDate: any
    showExpiryNotification: boolean
    domainId: number
    front: string
    back: any
    /**
     * @description I found it in DocumentResponseDto
     */
    assigness: any[]
}
