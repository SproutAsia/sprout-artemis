import { get } from 'lodash';

import { TReqPostCustomerCorporate } from '../../../artemis/v3/api/customer/_post/corporate/TReqPostCustomerCorporate.v3';
import { TReqPostCorporateCrp } from '../../../artemis/v3/api/customer/{customer_id}/crp/_post/corporate/TReqPostCorporateCrp.v3';
import { TReqPostIndividualCrp } from '../../../artemis/v3/api/customer/{customer_id}/crp/_post/individual/TReqPostIndividualCrp.v3';
import { TGrofApplication } from '../../../grof/types/TGrofApplication';

import ConvertToArtemisEnum from './ConvertEnum';
import ErrorForConvert, {
  ErrorForConvertToCorporate,
  ErrorForConvertToIndividual,
} from './ErrorForConvert.enum';
import Formatter from './Formatter';

const ConvertToRequest = {
  toCorporateCustomer(args: {
    application: TGrofApplication;
    assigneeId: string;
    additional?: {
      referenceId?: string;
      additionalInformation?: string;
    };
    customFn?: {
      parseCountry?: (country: string) => string;
      customerId?: (customerId: string) => string;
    };
  }) {
    // handle missing mandatory
    if (!args.assigneeId)
      throw new Error(ErrorForConvert.enum['Assignee ID cannot be empty']);

    if (!args.application.company.companyName)
      throw new Error(ErrorForConvert.enum['Company name cannot be empty']);
    if (!args.application.company.legalDetails.companyType)
      throw new Error(ErrorForConvert.enum['Entity type cannot be empty']);
    // artemis use full name of industry code instead of just code so that's why we use description
    if (!args.application.company.ssic.primary.description)
      throw new Error(ErrorForConvert.enum['Industry code cannot be empty']);
    if (!args.application.company.riskProfileAssessment.onboardingMode)
      throw new Error(ErrorForConvert.enum['Onboarding mode cannot be empty']);
    if (
      !args.application.company.riskProfileAssessment.ownershipStructureLayers
    )
      throw new Error(
        ErrorForConvert.enum['Ownership structure layer cannot be empty']
      );
    if (!args.application.company.riskProfileAssessment.paymentModes)
      throw new Error(ErrorForConvert.enum['Payment mode cannot be empty']);
    if (
      !args.application.company.riskProfileAssessment.productServiceComplexity
    )
      throw new Error(
        ErrorForConvert.enum['Product service complexity cannot be empty']
      );

    let countryOfOperation = [];
    if (
      get(args, 'application.company.riskProfileAssessment.countryOfOperations', [])
    ) {
      args.application.company.riskProfileAssessment.countryOfOperations.forEach(
        (c) => {
          countryOfOperation.push(
            args.customFn?.parseCountry?.(c.toUpperCase()) || c.toUpperCase()
          );
        }
      );
    }
    // Nadia request transactionCountries to be mapped to countryOfOperation
    if (
      get(args, 'application.company.riskProfileAssessment.transactionCountries', [])
    ) {
      args.application.company.riskProfileAssessment.transactionCountries.forEach(
        (c) => {
          countryOfOperation.push(
            args.customFn?.parseCountry?.(c.toUpperCase()) || c.toUpperCase()
          );
        }
      );
    }
    if (
      get(
        args,
        'application.company.addresses.principalPlaceOfBusiness.country'
      )
    ) {
      countryOfOperation.push(
        args.customFn?.parseCountry?.(
          args.application.company.addresses.principalPlaceOfBusiness.country.toUpperCase()
        ) ||
          args.application.company.addresses.principalPlaceOfBusiness.country.toUpperCase()
      );
    }
    countryOfOperation = Array.from(new Set(countryOfOperation));
    if (!countryOfOperation.length)
      throw new Error(
        ErrorForConvert.enum['Country of operations cannot be empty']
      );

    // new if no service
    const isIncorporated = !Boolean(args.application.services.incorporation);

    return {
      type: 'CORPORATE',
      assigneeId: args.assigneeId,
      domainId: [process.env.ARTEMIS_DOMAIN_ID],
      other: {
        entityType: args.application.company.legalDetails.companyType,
        corporateWebsite: '',
        fatfjurisdiction: '',
        industry: ConvertToArtemisEnum.ssic(
          args.application.company.ssic.primary.code
        ),
        onBoardingMode: ConvertToArtemisEnum.onboarding(
          args.application.company.riskProfileAssessment.onboardingMode
        ),
        ownershipStructureLayer:
          args.application.company.riskProfileAssessment
            .ownershipStructureLayers,
        paymentMode:
          args.application.company.riskProfileAssessment.paymentModes,
        productServiceComplexity:
          args.application.company.riskProfileAssessment
            .productServiceComplexity,
        sourceOfFunds: '',
        natureOfBusinessRelationship: '',
        bankAccount: [], // Free Text
        additionalInformation: args.additional?.additionalInformation || '',
      },
      particular: {
        incorporated: isIncorporated,
        name: args.application.company.companyName,
        alias: 
        // not necessary to map alias name
        // https://sproutasiacom-my.sharepoint.com/:fl:/g/personal/caiyu_low_grof_co/EZdgJdxXULtAgZn_H8IFfN8BoAtZpvxa3NcP-5yTZc2-og?e=9YHtik&nav=cz0lMkZwZXJzb25hbCUyRmNhaXl1X2xvd19ncm9mX2NvJmQ9YiUyMW5JSDkzaW1NMmtDSGdMb2RnemtqZ3NYUk1hTzZrc1JKa28zbTlPTEQzeGg0a004SDB5MGRRWmtyWlhqRHgyaEwmZj0wMVREQTY2UDRYTUFTNVlWMlFYTkFJREdQN0Q3QkFLN0c3JmM9JTJGJTNGbWluaWZpZWQlM0Q1MWQwMWNhOS0zZGY5LTQ5YTYtOTI1OC0wYmQxYTM3NjYwNzUlMjZzZXElM0QxMTAzMyZhPUxvb3BBcHAmcD0lNDBmbHVpZHglMkZsb29wLXBhZ2UtY29udGFpbmVy
        // args.application.company.legalDetails.entityName
        //   ? [args.application.company.legalDetails.entityName]
        //   : 
          undefined,
        formerName: args.application.company.legalDetails.historyName
          ? [args.application.company.legalDetails.historyName]
          : [],
        countryOfIncorporation:
          args.customFn?.parseCountry?.(
            args.application.company.addresses.registeredAddress.country
          ) ||
          ConvertToArtemisEnum.shortCountry(
            args.application.company.addresses.registeredAddress.country
          ),
        countryOfOperation,
        // no need to send address anymore
        // https://sproutasiacom-my.sharepoint.com/:fl:/r/personal/caiyu_low_grof_co/Documents/Microsoft%20Teams%20Chat%20Files/Svc%20x%20engr%20tracker.loop?d=wdc256097505740bb8199ff1fc2057cdf&csf=1&web=1&e=NxlLFg&nav=cz0lMkZwZXJzb25hbCUyRmNhaXl1X2xvd19ncm9mX2NvJmQ9YiUyMW5JSDkzaW1NMmtDSGdMb2RnemtqZ3NYUk1hTzZrc1JKa28zbTlPTEQzeGg0a004SDB5MGRRWmtyWlhqRHgyaEwmZj0wMVREQTY2UDRYTUFTNVlWMlFYTkFJREdQN0Q3QkFLN0c3JmM9JTJGJTNGbWluaWZpZWQlM0QzMGExOWI3Zi05MTllLTQ1ZTUtYmJhNS1hMDQ1ZDE1MGQ5ZmUlMjZzZXElM0QyMDc2NyZhPUxvb3BBcHAmcD0lNDBmbHVpZHglMkZsb29wLXBhZ2UtY29udGFpbmVy
        // https://gro-engineer.atlassian.net/browse/G10-3397
        // address: Formatter.toGrofAddress({
        //   country: args.application.company.addresses.registeredAddress.country,
        //   blockHouse:
        //     args.application.company.addresses.registeredAddress.blockHouse,
        //   buildingName:
        //     args.application.company.addresses.registeredAddress.buildingName,
        //   level: args.application.company.addresses.registeredAddress.level,
        //   postalCode:
        //     args.application.company.addresses.registeredAddress.postalCode,
        //   streetName:
        //     args.application.company.addresses.registeredAddress.streetName,
        //   unit: args.application.company.addresses.registeredAddress.unit,
        //   addressLine1:
        //     args.application.company.addresses.registeredAddress.addressLine1,
        //   addressLine2:
        //     args.application.company.addresses.registeredAddress.addressLine2,
        // }),
        dateOfIncorporation: isIncorporated
          ? args.application.company.legalDetails.registrationDate
          : undefined,
        email: [],
        imonumber: '',
        incorporateNumber: isIncorporated
          ? args.application.company.legalDetails.uen
          : '',
      },
      profileReferenceId:
        args.customFn?.customerId?.(args.application.company.companyName) ||
        args.application.company.companyName,
      referenceId: isIncorporated ? args.customFn?.customerId?.(args.application.company.legalDetails.uen) ||
      args.application.company.legalDetails.uen : args.customFn?.customerId?.(args.application.company.companyName) ||
      args.application.company.companyName,
      // use company.isActiveCustomer for mapping
      // https://sproutasiacom-my.sharepoint.com/:fl:/r/personal/caiyu_low_grof_co/Documents/Microsoft%20Teams%20Chat%20Files/Svc%20x%20engr%20tracker.loop?d=wdc256097505740bb8199ff1fc2057cdf&csf=1&web=1&e=TrSXn9&nav=cz0lMkZwZXJzb25hbCUyRmNhaXl1X2xvd19ncm9mX2NvJmQ9YiUyMW5JSDkzaW1NMmtDSGdMb2RnemtqZ3NYUk1hTzZrc1JKa28zbTlPTEQzeGg0a004SDB5MGRRWmtyWlhqRHgyaEwmZj0wMVREQTY2UDRYTUFTNVlWMlFYTkFJREdQN0Q3QkFLN0c3JmM9JTJGJTNGbWluaWZpZWQlM0RiYjhmMGExMS01ZjVkLTQ3OTEtODEwMy0yZmYzN2JiYTVlYzIlMjZzZXElM0QxNjUwOSZhPUxvb3BBcHAmcD0lNDBmbHVpZHglMkZsb29wLXBhZ2UtY29udGFpbmVy
      active: args.application.company.isActiveCustomer
    } as TReqPostCustomerCorporate;
  },
  toSingleIndividualCrp(args: {
    member: TGrofApplication['company']['members'][0];
    additional?: {
      additionalInformation?: string;
      otherSourceOfFunds?: string;
      formerName?: string[];
    };
    customFn?: {
      parseCountry?: (country: string) => string;
      customerId?: (customerId: string) => string;
    };
  }) {
    const member = args.member;

    // handle missing mandatory
    if (!member.personDetails.personalDetails.fullName)
      throw new Error(ErrorForConvertToIndividual.enum['Name cannot be empty']);
    if (!member.personDetails.personalDetails.nationality)
      throw new Error(
        ErrorForConvertToIndividual.enum['Nationality cannot be empty']
      );
    if (!member.personDetails.address.country)
      throw new Error(
        ErrorForConvertToIndividual.enum['Country of residence cannot be empty']
      );

    // pre-parse
    const documentType = ConvertToArtemisEnum.documentType(
      member.personDetails.personalDetails.idDocument.type
    );

    // roles
    const roles = ConvertToArtemisEnum.appointmentToRole(member.appointments);
    if (!roles.length)
      throw new Error(ErrorForConvertToIndividual.enum['Role cannot be empty']);

    const mandatory = {
      type: 'INDIVIDUAL',
      roles: roles,
      other: {
        ownershipPercentage: member.sharesDetails.reduce(
          (cur, next) => cur + next.sharePercentage,
          0
        ),
        bankAccount: [],
        // not required to send sourceOfFunds anymore
        // https://www.notion.so/sproutasia/Update-ekyc-fields-admin-and-user-app-1127be0883d2800fa4e6f3a974f1a2b7?pvs=4
        // sourceOfFunds: ConvertToArtemisEnum.sourceOfFund(
        //   member.personDetails.riskProfileAssessment?.sourceOfFunds
        // ),
        status: 'CURRENT',
        undischargedBankrupt: false,
        // not required to send sourceOfFunds anymore
        // otherSourceOfFunds: args.additional?.otherSourceOfFunds,
        additionalInformation: args.additional?.additionalInformation || '',
      },
      particular: {
        // not required to send address anymore
        // https://sproutasiacom-my.sharepoint.com/:fl:/r/personal/caiyu_low_grof_co/Documents/Microsoft%20Teams%20Chat%20Files/Svc%20x%20engr%20tracker.loop?d=wdc256097505740bb8199ff1fc2057cdf&csf=1&web=1&e=GQPXp2&nav=cz0lMkZwZXJzb25hbCUyRmNhaXl1X2xvd19ncm9mX2NvJmQ9YiUyMW5JSDkzaW1NMmtDSGdMb2RnemtqZ3NYUk1hTzZrc1JKa28zbTlPTEQzeGg0a004SDB5MGRRWmtyWlhqRHgyaEwmZj0wMVREQTY2UDRYTUFTNVlWMlFYTkFJREdQN0Q3QkFLN0c3JmM9JTJGJTNGbWluaWZpZWQlM0QzMDRjMjNjYy04M2UyLTRlMWMtODk3Ny0yMWQ3OWY0YmE3YjYlMjZzZXElM0QxNjUwMCZhPUxvb3BBcHAmcD0lNDBmbHVpZHglMkZsb29wLXBhZ2UtY29udGFpbmVy
        // https://www.notion.so/sproutasia/Update-ekyc-fields-admin-and-user-app-1127be0883d2800fa4e6f3a974f1a2b7?pvs=4
        // address: Formatter.toGrofAddress({
        //   blockHouse: member.personDetails.address.blockHouse,
        //   buildingName: member.personDetails.address.buildingName,
        //   country: member.personDetails.address.country,
        //   level: member.personDetails.address.level,
        //   postalCode: member.personDetails.address.postalCode,
        //   streetName: member.personDetails.address.streetName,
        //   unit: member.personDetails.address.unit,
        // }),
        alias: member.personDetails.personalDetails.alias,
        email: [],
        phone: [],
        formerName: args.additional?.formerName || [],
        name: member.personDetails.personalDetails.fullName,
        dateOfBirth: member.personDetails.personalDetails.dateOfBirth,
        countryOfBirth:
          args.customFn?.parseCountry?.(
            member.personDetails.personalDetails.countryOfBirth
          ) ||
          ConvertToArtemisEnum.shortCountry(
            member.personDetails.personalDetails.countryOfBirth
          ),
        gender: member.personDetails.personalDetails.gender?.toUpperCase(),
        identityDocumentType: documentType,
        // it should be fill or not listed in field. undefined when being parsed will gone.
        identityExpiryDate:
          documentType === 'INTERNATIONAL PASSPORT'
            ? member.personDetails.personalDetails.idDocument.dateOfExpiration
            : undefined,
        identityIssuedDate:
          member.personDetails.personalDetails.idDocument.dateOfIssuance,
        identityNumber:
          member.personDetails.personalDetails.idDocument.idNumber,
        nationality: [
          args.customFn?.parseCountry?.(
            member.personDetails.personalDetails.nationality
          ) ||
            ConvertToArtemisEnum.shortCountry(
              member.personDetails.personalDetails.nationality
            ),
        ],
        countryOfResidence:
          args.customFn?.parseCountry?.(member.personDetails.address.country) ||
          ConvertToArtemisEnum.shortCountry(
            member.personDetails.address.country
          ),
        salutation: '',
      },
      profileReferenceId:
        args.customFn?.customerId?.(
          member.personDetails.personalDetails.idDocument.idNumber
        ) || member.personDetails.personalDetails.idDocument.idNumber,
      active: false, // individual crp value must be false
    } as TReqPostIndividualCrp;

    // if (member.personDetails.contactDetails?.email)
    //   mandatory.particular.email.push(
    //     member.personDetails.contactDetails?.email
    //   );
    // if (member.personDetails.contactDetails?.phoneNumber)
    //   mandatory.particular.phone.push(
    //     member.personDetails.contactDetails?.phoneNumber
    //   );

    return mandatory;
  },
  toSingleCorporateCrp(args: {
    member: TGrofApplication['company']['members'][0];
    additional?: {
      additionalInformation?: string;
      formerName?: string[];
      otherSourceOfFunds?: string;
    };
    customFn?: {
      parseCountry?: (country: string) => string;
      customerId?: (customerId: string) => string;
    };
  }) {
    const member = args.member;

    const roles = member.appointments.map((a) => {
      return {
        role: 'SHAREHOLDER',
        appointedDate: a.appointmentDate,
        resignedDate: a.resignedDate,
      } as TReqPostCorporateCrp['roles'][0];
    });

    // handle empty mandatory field
    if (!member.companyDetails.legalDetails.countryOfRegisteredBusiness)
      throw new Error(
        ErrorForConvertToCorporate.enum[
          'Country of incorporation cannot be empty'
        ]
      );
    if (!member.companyDetails.riskProfileAssessment.countryOfOperations)
      throw new Error(
        ErrorForConvertToCorporate.enum['Country of operation cannot be empty']
      );
    if (!member.companyDetails.legalDetails.companyType)
      throw new Error(
        ErrorForConvertToCorporate.enum['Entity type cannot be empty']
      );
    if (!member.companyDetails.companyName)
      throw new Error(
        ErrorForConvertToCorporate.enum['Company name cannot be empty']
      );

    let countryOfOperation = [];
    if (
      get(member, 'companyDetails.addresses.principalPlaceOfBusiness.country')
    ) {
      countryOfOperation.push(
        args.customFn?.parseCountry?.(
          member.companyDetails.addresses.principalPlaceOfBusiness.country
        )
      );
    }
    if (
      get(member, 'companyDetails.legalDetails.countryOfRegisteredBusiness')
    ) {
      countryOfOperation.push(
        args.customFn?.parseCountry?.(
          member.companyDetails.legalDetails.countryOfRegisteredBusiness
        )
      );
    }
    countryOfOperation = Array.from(new Set(countryOfOperation));
    if (!countryOfOperation.length)
      throw new Error(
        ErrorForConvert.enum['Country of operations cannot be empty']
      );

    const mandatory = {
      type: 'CORPORATE',
      roles: roles,
      other: {
        entityType: ConvertToArtemisEnum.entityType(member.companyDetails.legalDetails.companyType),
        bankAccountNumber: [],
        ownershipStructureLayer:
          member.companyDetails.riskProfileAssessment.ownershipStructureLayers,
        status: 'CURRENT',
        additionalInformation: args.additional?.additionalInformation || '',
        ownershipPercentage: member.sharesDetails?.reduce(
          (cur, next) => cur + next.sharePercentage,
          0
        ),
      },
      particular: {
        // not required to send address anymore
        // https://sproutasiacom-my.sharepoint.com/:fl:/r/personal/caiyu_low_grof_co/Documents/Microsoft%20Teams%20Chat%20Files/Svc%20x%20engr%20tracker.loop?d=wdc256097505740bb8199ff1fc2057cdf&csf=1&web=1&e=GQPXp2&nav=cz0lMkZwZXJzb25hbCUyRmNhaXl1X2xvd19ncm9mX2NvJmQ9YiUyMW5JSDkzaW1NMmtDSGdMb2RnemtqZ3NYUk1hTzZrc1JKa28zbTlPTEQzeGg0a004SDB5MGRRWmtyWlhqRHgyaEwmZj0wMVREQTY2UDRYTUFTNVlWMlFYTkFJREdQN0Q3QkFLN0c3JmM9JTJGJTNGbWluaWZpZWQlM0QzMDRjMjNjYy04M2UyLTRlMWMtODk3Ny0yMWQ3OWY0YmE3YjYlMjZzZXElM0QxNjUwMCZhPUxvb3BBcHAmcD0lNDBmbHVpZHglMkZsb29wLXBhZ2UtY29udGFpbmVy
        // https://www.notion.so/sproutasia/Update-ekyc-fields-admin-and-user-app-1127be0883d2800fa4e6f3a974f1a2b7?pvs=4
        // address: Formatter.toGrofAddress({
        //   blockHouse:
        //     member.companyDetails.addresses.registeredAddress.blockHouse,
        //   buildingName:
        //     member.companyDetails.addresses.registeredAddress.buildingName,
        //   level: member.companyDetails.addresses.registeredAddress.level,
        //   postalCode:
        //     member.companyDetails.addresses.registeredAddress.postalCode,
        //   streetName:
        //     member.companyDetails.addresses.registeredAddress.streetName,
        //   unit: member.companyDetails.addresses.registeredAddress.unit,
        //   country: member.companyDetails.addresses.registeredAddress.country,
        //   addressLine1:
        //     member.companyDetails.addresses.registeredAddress.addressLine1,
        //   addressLine2:
        //     member.companyDetails.addresses.registeredAddress.addressLine2,
        // }),
        alias: [member.companyDetails.companyName],
        countryOfIncorporation:
          args.customFn?.parseCountry?.(
            member.companyDetails.legalDetails.countryOfRegisteredBusiness
          ) ||
          ConvertToArtemisEnum.shortCountry(
            member.companyDetails.legalDetails.countryOfRegisteredBusiness
          ),
        countryOfOperation,
        dateOfIncorporation:
          member.companyDetails.legalDetails.registrationDate,
        email: [],
        phone: [],
        formerName: args.additional?.formerName || [],
        imonumber: '',
        incorporated: true,
        incorporateNumber:
          member.companyDetails.legalDetails.businessRegistrationNumber,
        name: member.companyDetails.companyName,
      },
      profileReferenceId:
        args.customFn?.customerId?.(member.companyDetails.companyName) ||
        member.companyDetails.companyName,
      active: true,
    } as TReqPostCorporateCrp;

    // === add optional === //
    // if (member.personDetails.contactDetails?.email)
    //   mandatory.particular.email.push(
    //     member.personDetails.contactDetails.email
    //   );
    // if (member.personDetails.contactDetails?.phoneNumber)
    //   mandatory.particular.phone.push(
    //     member.personDetails.contactDetails?.phoneNumber
    //   );

    return mandatory;
  },
};

export default ConvertToRequest;
