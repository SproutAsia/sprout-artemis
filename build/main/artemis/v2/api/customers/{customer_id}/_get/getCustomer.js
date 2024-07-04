"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * post customer
 * @description STEP 5 : GET CUSTOMER
 */
async function getCustomer(args) {
    const headers = new Headers();
    headers.append("authorization", "Bearer " + args.auth.token);
    const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId);
    try {
        const result = await fetch(url.toString(), {
            headers
        }).then((res) => res.json());
        return result;
    }
    catch (e) {
        return e;
    }
}
exports.default = getCustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXJ0ZW1pcy92Mi9hcGkvY3VzdG9tZXJzL3tjdXN0b21lcl9pZH0vX2dldC9nZXRDdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7R0FHRztBQUNZLEtBQUssVUFBVSxXQUFXLENBQUMsSUFVekM7SUFDRyxNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFBO0lBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBRWxGLElBQUk7UUFDQSxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkMsT0FBTztTQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLE9BQU8sTUFBeUIsQ0FBQTtLQUNuQztJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsT0FBTyxDQUFDLENBQUE7S0FDWDtBQUNMLENBQUM7QUF2QkQsOEJBdUJDIn0=