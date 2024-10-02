import ArrayUtils from "../../../share/ArrayUtils"

const ErrorForConvert = ArrayUtils.toAdvancedEnum([
    "Country of operations cannot be empty",
    "Company name cannot be empty",
    "Payment mode cannot be empty",
    "Product service complexity cannot be empty",
    "Ownership structure layer cannot be empty",
    "Onboarding mode cannot be empty",
    "Entity type cannot be empty",
    "Industry code cannot be empty",
    "Ssic description cannot be empty",
    "Assignee ID cannot be empty"
])

export const ErrorForConvertToIndividual = ArrayUtils.toAdvancedEnum([
    "Role cannot be empty",
    "Country of residence cannot be empty",
    "Nationality cannot be empty",
    "Name cannot be empty"
])

export const ErrorForConvertToCorporate = ArrayUtils.toAdvancedEnum([
    "Company name cannot be empty",
    "Country of operation cannot be empty",
    "Country of incorporation cannot be empty",
    "Entity type cannot be empty"
])

export default ErrorForConvert