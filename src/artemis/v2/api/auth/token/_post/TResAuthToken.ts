export interface TResAuthToken {
    ChallengeParameters: any
    AuthenticationResult: AuthenticationResult
    ResponseMetadata: ResponseMetadata
}

export interface AuthenticationResult {
    AccessToken: string
    ExpiresIn: string
    TokenType: string
    RefreshToken: string
    IdToken: string
}

export interface ResponseMetadata {
    RequestId: string
    HTTPStatusCode: string
    HTTPHeaders: Httpheaders
    RetryAttempts: string
}

export interface Httpheaders {
    date: string
    "content-type": string
    "content-length": string
    connection: string
    "x-amzn-requestid": string
}
